<template>
  <container-app>
    <main>
      <section class="grid grid-cols-2 gap-5 my-0 mx-auto bg-[#FF87AB] p-10">
        <div v-if="genres" id="v-model-select-dynamic" class="">
          <span class="text-white">Filter by genres</span>
          <select
            v-model="genreId"
            class="block w-[70%] mr-2 mt-1 rounded-md bg-gray-100 border-transparent outline-0 h-10 bg-indigo-200 opacity-75 text-gray-800 text-pink-900 font-mono font-black hover:opacity-75 text-[20px]"
          >
            <option
              v-for="item in genres"
              :key="item.id"
              :value="item.id"
              class="w-inherit h-[150px] overflow-y-scroll"
            >
              {{ item.name }}
            </option>
          </select>
        </div>

        <div v-if="years" id="v-model-select-dynamic" class="">
          <span class="text-white">Filter by years</span>
          <select
            v-model="yearId"
            class="block w-[70%] mr-2 mt-1 rounded-md bg-gray-100 border-transparent outline-0 h-10 bg-indigo-200 opacity-75 text-gray-800 text-pink-900 font-mono font-black hover:opacity-75 text-[20px]"
          >
            <option
              v-for="(item, index) in years"
              :key="index"
              :value="item"
              class="w-inherit h-[150px] overflow-y-scroll"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </section>

      <ul v-if="movies" class="grid grid-cols-3 gap-6 my-10">
        <li
          :id="movie.id"
          v-for="movie in movies"
          :key="movie.id"
          class="relative w-[400px] h-[300px]"
        >
          <router-link :to="'/movie/' + movie.id">
            <img
              v-if="movie.backdrop_path"
              :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
              :alt="movie.title"
              loading="lazy"
              class="rounded block w-[400px] h-[300px]"
            />
            <p class="absolute left-2 bottom-2 text-xl text-red-200">
              {{ movie.title }}
            </p>
          </router-link>
        </li>
      </ul>
      <div class="p-10">
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
import { getGenre, getMoviesOfSelectedYear } from "../services/movie.service";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

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
      genres: [],
      years: [],
      searchQuery: "",
      selectedItem: null,
      genreId: null,
      yearId: null,
    };
  },

  methods: {
    selectItem(genre) {
      this.selectedItem = genre;
      this.isVisible = false;
    },

    selectItemByYear(year) {
      this.selectItem = year;
      this.isVisible = false;
    },

    onPageClick(event) {
      this.currentPage = event;
      this.getMovies(this.currentPage);
    },

    getMoviesByYearAndGenres() {
      getMoviesOfSelectedYear(this.yearId, this.genreId, this.currentPage).then(
        (data) => {
          this.movies = data.data.results;
          this.totalResults = data.data.total_results;
          this.totalResults =
            data.data.total_results > 9980 ? 9980 : data.data.total_results;
          this.currentPage = data.data.page;
        }
      );
    },

    getGenres() {
      getGenre().then((data) => {
        this.genres = data.data.genres;
      });
    },

    getYears() {
      let startYear = 1907;
      let endYear = new Date().getFullYear();
      for (let i = endYear; i >= startYear; i -= 1) {
        this.years.push(i);
      }
    },
  },

  created() {
    this.getGenres(), this.getYears();
  },

  watch: {
    genreId(newValue) {
      if (newValue) {
        this.getMoviesByYearAndGenres();
      }
    },
    yearId(newValue) {
      if (newValue) {
        this.getMoviesByYearAndGenres();
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
