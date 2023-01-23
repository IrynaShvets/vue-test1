<template>
  <container-app>
    <main>
      <div class="bg-red-200 p-10 mb-2">
        <h1 class="text-3xl mb-2 indent-8 text-blue-600">
          Have a great time watching movies. Find your favorite movie.
        </h1>
        <div class="mb-3 pt-0">
          <input
            type="text"
            v-model="query"
            @keypress.enter="search(query)"
            placeholder="Search by title of movie"
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
          />
        </div>
      </div>

      <ul v-if="filteredMovies" class="grid grid-cols-3 gap-5">
        <li
          :id="movie.id"
          v-for="movie in filteredMovies"
          :key="movie.id"
          class="relative w-[402px] h-auto shadow-[-24px_29px_28px_-4px_rgba(148,153,143,0.75)] hover:scale-[1.02] hover:transition hover:duration-600 hover:ease-in"
        >
          <router-link :to="'/movie/' + movie.id">
           
            <img
            v-if="movie.backdrop_path || movie.backdrop_path !== null"
              :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
              alt="movie.title"
              loading="lazy"
              class="rounded w-[402px] h-auto]"
            />
            
            <p class="absolute left-2 bottom-2 text-xl text-red-200">
              {{ movie.title }}
            </p>
          </router-link>
        </li>
      </ul>

      <div class="my-10">
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
      query: "",
    };
  },

  computed: {
    filteredMovies: {
      get() {
        return this.movies;
      },
      set() {
        this.movies = this.getSearchMovies();
        const results = this.movies?.filter((movie) => {
          return movie.title
            .toLowerCase()
            .includes(this.query.toLowerCase().trim());
        });
        this.movies = results;
      },
    },
  },


  methods: {
    search(query) {
      getSearchMovies(query, this.currentPage).then((data) => {
        if (query.trim() === "") {
          return;
        }

        if (!data) {
          return;
        }

        this.movies = data.data.results;
        this.totalResults =
          data.data.total_results > 9980 ? 9980 : data.data.total_results;

        this.currentPage = data.data.page;
        this.query = query;
        this.movies = this.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(query.toLowerCase().trim());
        });
      });
    },

    onPageClick(event) {
      this.currentPage = event;
      this.search(this.query, this.currentPage);
    },
  },
};
</script>

<style lang="scss" scoped></style>
