<template>
  <container-app>
    <main>
    <section class="block relative my-0 mx-auto bg-pink-300 p-2">
        
    <form class="" @submit.prevent="handleSubmit">
        <ul class="flex mb-10">
          <li v-if="genres" id="v-model-select-dynamic" class="">
            <span class="text-white">Filter by genres</span>
            <select v-model="genreId" class="block
            w-[270px]
            mr-2
            mt-1
            rounded-md
            bg-gray-100
            border-transparent
            outline-0 h-10 bg-indigo-200 opacity-75 text-gray-800 text-pink-900 font-mono font-black hover:opacity-75 text-[20px]
          " name="select-genre">
               <option v-for="item in genres" :key="item.id" :value="item.id">
                  {{ item.name }}
                </option>
          </select>
          </li>
          
          <li class="">
            <span class="text-white">Filter by year of release</span>
            <select id="yearsId" class="block
            w-[270px]
            mt-1
            rounded-md
            bg-gray-100
            border-transparent
            outline-0 h-10 bg-indigo-200 opacity-75 text-gray-800 text-pink-900 font-mono font-black hover:opacity-75 text-[20px]"></select>
          </li>
        </ul>
      </form>

      </section>

      <ul v-if="movies" class="flex flex-wrap mx-auto">
        <li
          :id="movie.id"
          v-for="movie in movies"
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
import { getMoviesOfSelectedGenre, getGenre } from "../services/movie.service";
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
      searchQuery: '',
      selectedItem: null,
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
    },
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

    getMoviesByGenre() {
      getMoviesOfSelectedGenre(this.genreId, this.currentPage).then((data) => {
        this.movies = data.data.results;
         this.totalResults = data.data.total_results;
         this.totalResults = (data.data.total_results > 9980) ? 9980 : data.data.total_results;
         this.currentPage = data.data.page;
      })
    },

    getGenres() {
      getGenre().then((data) => {
        this.genres = data.data.genres;
      })
    },

    handleSubmit() {
        this.$emit("submit", {
          name: this.name,
        });
      },

  },

  created() {
    this.getGenres()
  },

  watch: {
    genreId(newValue) {
      if(newValue) {
        this.getMoviesByGenre();
      }
    }
  }
};

</script><style lang="scss" scoped></style>
