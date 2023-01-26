<template>
  <container-app>
    <main>
      <div class="bg-gray-200 p-10 mb-2">
        <h1 class="text-3xl mb-2 indent-8 text-blue-600">
          Have a great time watching movies. Find your favorite movie.
        </h1>
        <div class="mb-3 pt-0">
          <input
            type="text"
            v-model="query"
            @keypress.enter="search"
            placeholder="Search by title of movie"
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
          />
        </div>
      </div>

      <ul v-if="movies" class="grid grid-cols-3 gap-5">
        <li
          :id="movie.id"
          v-for="movie in movies"
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

  methods: {
    search() {
      
      if (this.query.length === 0) {
          this.$notify({
            type: "warn",
            text: "You have not entered anything. Please enter a value.",
          });
          return;
      }

      getSearchMovies(this.query, this.currentPage).then((data) => {
        
        if (!data) {
          this.$notify({
          type: "warn",
          text: "Sorry, but nothing was found for your request.",
        });
          return;
        }
       
        this.movies = data.data.results;
        this.totalResults =
        data.data.total_results > 9980 ? 9980 : data.data.total_results;
        
        this.currentPage = data.data.page;
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
