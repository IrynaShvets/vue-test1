<template>
  <container-app>
    <main class="">
      <ul v-if="movies" class="grid grid-cols-5 gap-2">
        <li :id="movie.id" v-for="movie in movies" :key="movie.id" class="relative w-[240px] h-[180px] shadow-[-2px_1px_32px_36px_rgba(10,18,23,0.75)] hover:scale-[1.03] hover:transition hover:duration-700 hover:ease-in-out">
          <router-link :to="'/movie/' + movie.id">
              <img v-if="movie.backdrop_path ||  movie.backdrop_path !== null" :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
              :alt="movie.title" loading="lazy" class="w-[240px] h-[180px]" />
           
            <p class="absolute top-2 left-2 text-white">
              {{ movie.title }}
            </p>
          </router-link>
        </li>
      </ul>

      <div class="my-20">
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
