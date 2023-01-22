<template>
  <container-app>
    <main>
<section class="max-w-xs relative my-0 mx-auto">
  <div @click="isVisible = !isVisible" class="h-10 py-1.5 px-2.5 flex justify-between items-center text-xl font-medium rounded-sm border-2 border-solid border-purple-700">
   
    <span v-if="selectedItem">{{ selectedItem.name }}</span>
     <span else>Selected genre</span>
    <svg class="inline-block w-3.5 h-3.5 stroke-current stroke-0 fill-gray" viewBox="0 0 24 24">
      <path d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
    </svg>
  </div>
  <div v-if="isVisible" class="absolute w-full border-2 border-solid border-purple-700 top-[46px] inset-x-0 bg-white">
    <input v-model="searchQuery" type="text" placeholder="Search" class="w-[90%] w-[30px] pl-1 text-base border-2 border-solid border-purple-700">
  
    <ul v-if="genres" class="max-h-[200px] overflow-x-hidden overflow-y-scroll">
        <li @click="genre" :id="genre.id" v-for="genre in genres" :key="genre.id" class="w-full border-1 border-solid border-purple-700 p-2.5 cursor-pointer text-base hover:bg-sky-700 ">
              {{ genre.name }}
        </li>
      </ul>

      <ul v-if="genres" class="max-h-[200px] overflow-x-hidden overflow-y-scroll">
        <li @click="selectItem(genre)" :id="genre.id" v-for="genre in filteredMoviesByGenres" :key="genre.id" class="w-full ">
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
      genreId: null,
    };
  },
  computed: {
    filteredMoviesByGenres() {
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery === "") {
        return this.movies;
      }
      return this.movies.filter(movie => {
        return Object.values(movie).some(word => String(word).includes(query))
      })
    }
  },

  methods: {
    
    selectItem(genre) {
      this.selectedItem = genre;
      this.isVisible = false;
    },
    
    onPageClick(event) {
      this.currentPage = event;
      this.getMovies(this.currentPage);
    },

    // genresInName(genres) {
    //   console.log(genres)
    // }

  },

  mounted() {
   getMoviesOfSelectedGenre( this.currentPage).then((data) => {
  //  this.genreId,
  //       this.genreId = genres
        this.movies = data.data.results;
        this.totalResults = data.data.total_results;
        this.totalResults = (data.data.total_results > 9980) ? 9980 : data.data.total_results;
        this.currentPage = data.data.page;
      });
    // this.getGenres();
  },
};
</script>

<style lang="scss" scoped>

</style>
