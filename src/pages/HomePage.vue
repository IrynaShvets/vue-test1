<template>
  <container-app>
    <main class="p-20">

      <ul v-if="movies" class="flex flex-wrap mx-auto">
        <li :id="movie.id" v-for="movie in movies" :key="movie.id" class="relative w-[550px] h-[370px]">
          <router-link :to="'/movie/' + movie.id">
            <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
              alt="movie.title" loading="lazy" class="rounded block w-[550px] h-[370px]" />
            <p class="absolute left-2 bottom-2 text-xl text-red-200">
              {{ movie.title }}
            </p>
          </router-link>
        </li>
      </ul>

      <div class="hello">
        <VueTailwindPagination :current="currentPage" :total="totalResults" :per-page="perPage"
          @page-changed="onPageClick($event)" text-before-input="Go to page" text-after-input="Forward" />
      </div>
    </main>
  </container-app>
</template>

<script>
import ContainerApp from "../shared/container/ContainerApp.vue";
import { getPopularMovies} from "../services/movie.service";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  name: "HomePage",
  components: {
    ContainerApp,
    VueTailwindPagination,
  },

  data() {
    return {
      movies: [],
      totalResults: null,
      currentPage: 1,
      perPage: 20,
    };
  },
  
  methods: {
    getMovies() {
      getPopularMovies(this.currentPage).then((data) => {
        console.log(data);
        this.movies = data.data.results;
        this.totalResults = data.data.total_results;
        this.totalResults = (data.data.total_results > 9980) ? 9980 : data.data.total_results;
        this.currentPage = data.data.page;
      });
    },
    
    onPageClick(event) {
      this.currentPage = event;
      this.getMovies(this.currentPage);
    },
  },

  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped>
</style>
