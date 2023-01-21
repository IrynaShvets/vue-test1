<template>
  <container-app>
    <main class="p-20">
      <label for="search">
        Search
        <input id="search" v-model="term" @keypress.enter="search(term)" />
      </label>

      <ul v-if="filteredMovies" class="flex flex-wrap mx-auto">
        <li
          :id="movie.id"
          v-for="movie in filteredMovies"
          :key="movie.id"
          class="relative w-[550px] h-[370px]"
        >
          <router-link :to="'/movie/' + movie.id">
            <img
              v-if="movie.backdrop_path"
              :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
              alt="movie.title"
              loading="lazy"
              class="rounded block w-[550px] h-[370px]"
            />
            <p class="absolute left-2 bottom-2 text-xl text-red-200">
              {{ movie.title }}
            </p>
          </router-link>
        </li>
      </ul>

      <div class="hello">
        <VueTailwindPagination
          :current="currentPage"
          :total="totalResults"
          :per-page="perPage"
          
          @page-changed="onPageClick($event)"
          text-before-input="Go to page"
          text-after-input="Forward"
        />
      </div>
    </main>
  </container-app>
</template>

<script>
import ContainerApp from "../shared/container/ContainerApp.vue";
import { getSearchMovies } from "../services/movie.service";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  name: "SearchPage",
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
      searchQuery: "",
      term: null,
    };
  },

  computed: {
    filteredMovies: {
      get() {
        return this.movies;
      },
      set() {
        this.movies = this.getSearchMovies();
        const results = this.movies.filter((movie) => {
          return movie.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
        this.movies = results;
      },
    },
  },

  methods: {
    search(term) {
      getSearchMovies(this.currentPage, this.searchQuery).then((data) => {
        this.movies = data.data.results;
        this.totalResults =
          data.data.total_results > 9980 ? 9980 : data.data.total_results;
        this.currentPage = data.data.page;
        this.searchQuery = term;
        this.movies = this.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(term.toLowerCase());
        });
      });
    },
    onPageClick(event) {
      this.currentPage = event;
      this.search(this.currentPage);
    },
  },
};
</script>

<style lang="scss" scoped></style>
