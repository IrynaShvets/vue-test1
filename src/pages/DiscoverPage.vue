<template>
  <container-app>
    <main>
<section class="max-w-xs relative my-0 mx-auto">
  <div @click="isVisible = !isVisible" class="h-10 py-1.5 px-2.5 flex justify-between items-center text-xl font-medium rounded-sm border-2 border-solid border-purple-700">
    <span>Select Items</span>
  </div>
  <div class="absolute w-full border-2 border-solid border-purple-700 top-[46px] inset-x-0 bg-white">
    <input v-model="searchQuery" type="text" placeholder="Search" class="w-[90%] w-[30px] pl-1 text-base border-solid border-purple-700">
  
    <ul v-if="genres" class="max-h-[200px] overflow-x-hidden overflow-y-scroll">
        <li :id="genre.id" v-for="genre in genres" :key="genre.id" class="w-full ">
              {{ genre.name }}
        </li>
      </ul>
  </div>
</section>


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
import { getMoviesOfSelectedGenre } from "../services/movie.service";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

import genres from "../components/genres";


export default {
  name: "DiscoverPage",
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
      genres: genres,
      searchQuery: '',
      selectedItem: null,
      isVisible: false,
    };
  },
  computed: {
    
  },

  methods: {
    
    getGenres() {
      // this.$route.params.id
      getMoviesOfSelectedGenre(this.currentPage, this.genreId).then((data) => {
        console.log(data.data);
        this.genreId = this.$route.params.genre;
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
   
    this.getGenres();
  },
};
</script>

<style lang="scss" scoped>

</style>
