<template>
  <container-app>
    <main class="pb-20">
      <section>
        <ul class="grid grid-cols-3 gap-10">
          <li :id="movie.id" v-for="movie in moviesStore" :key="movie.id"
            class="relative w-[350px] h-[260px] shadow-[10px_10px_8px_2px_rgba(0,0,0,0.3)] hover:scale-[1.05] hover:transition hover:duration-700 hover:ease-in-out">
            <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
              :alt="movie.title" loading="lazy" class="mr-6 w-[350px] h-[220px]" />
            <p class="absolute top-2 left-2 text-white">
              {{ movie.title }}
            </p>
            <div class="flex items-center">
              <router-link :to="'/movie/' + movie.id" class="flex flex-1 items-center p-2 bg-indigo-200 hover:bg-purple-500 text-gray-800 hover:text-white transition-colors">
                <svg class="inline-block w-5 h-5 stroke-current stroke-0 fill-gray mr-2" viewBox="0 0 20 20">
                  <path
                    d="M3.828 9l6.071-6.071-1.414-1.414-8.485 8.485 8.485 8.485 1.414-1.414-6.071-6.071h16.172v-2h-16.172z">
                  </path>
                </svg>
                <span>More info</span>
              </router-link>
              <button @click="deleteFavoriteMovieWithLocalStorage(movie.id)" :data-id="movie.id" type="button"
                class="w-[350px] h-[40px] p-2 bg-indigo-200 hover:bg-purple-500 text-gray-800 hover:text-white transition-colors flex-1">

                Delete
              </button>
              <button type="button"
                class="w-[350px] h-[40px] p-2 bg-indigo-200 hover:bg-purple-500 text-gray-800 hover:text-white transition-colors flex-1">
                Reviewed
              </button>
            </div>

          </li>
        </ul>
      </section>
    </main>
  </container-app>
</template>

<script>
import ContainerApp from "../shared/container/ContainerApp.vue";
import { toRaw } from 'vue';

export default {
  name: "LibraryPage",
  components: {
    ContainerApp,
  },
  data() {
    return {
      movies: [],
      currentPage: 1,
      moviesStore: toRaw(JSON.parse(localStorage.getItem("movie-store") || "[]")),
    };
  },

  methods: {
    deleteFavoriteMovieWithLocalStorage(currentId) {
      console.log(currentId)

    },
  },

};
</script>

<style lang="scss" scoped>

</style>
