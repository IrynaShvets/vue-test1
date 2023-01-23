<template>
  <container-app>
    <main>
      <ul class="grid grid-cols-3 gap-4">
        <li
          :id="movie.id"
          v-for="movie in moviesStore"
          :key="movie.id"
          class="relative w-[350px] h-[260px] shadow-[10px_10px_8px_2px_rgba(0,0,0,0.3)] hover:scale-[1.05] hover:transition hover:duration-700 hover:ease-in-out"
        >
            <img
              v-if="movie.backdrop_path"
              :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
              :alt="movie.title"
              loading="lazy"
              class="mr-6 w-[350px] h-[220px]"
            />
            <p class="absolute top-2 left-2 text-white">
              {{ movie.title }}
            </p>
          <router-link :to="'/movie/' + movie.id">
            <svg class="inline-block w-5 h-5 stroke-current stroke-0 fill-gray mr-2" viewBox="0 0 20 20">
                <path d="M3.828 9l6.071-6.071-1.414-1.414-8.485 8.485 8.485 8.485 1.414-1.414-6.071-6.071h16.172v-2h-16.172z"></path>
            </svg>
            <span>Go to full description of movie</span>
          </router-link>
          <button @click="deleteFavoriteMovieWithLocalStorage(movie.id)" :data-id="movie.id" type="button" class="w-[350px] h-[40px] p-2 bg-indigo-200 hover:bg-purple-500 text-gray-800 hover:text-white transition-colors">
            
            Delete with library
          </button>
        </li>
      </ul>
    </main>
  </container-app>
</template>

<script>
import ContainerApp from "../shared/container/ContainerApp.vue";
import {  toRaw } from 'vue';
// import { getPopularMovies } from "../services/movie.service";isProxy,

export default {
  name: "LibraryPage",
  components: {
    ContainerApp,
  },
  data() {
    console.log(localStorage.getItem("movie-store"))
    console.log(JSON.parse(localStorage.getItem("movie-store")))
    return {
      movies: [],
      currentPage: 1,
      moviesStore: toRaw(JSON.parse(localStorage.getItem("movie-store") || "[]")),
    };
  },

  methods: {
    // getMovies() {
    //   getPopularMovies(this.currentPage).then((data) => {
    //     this.currentPage = data.data.page;
    //     let arrFavoriteMovies = [];
    //     this.moviesStore.forEach((element) => {
    //       data.data.results.map((el) => {
    //         if (el.id === element) {
    //           arrFavoriteMovies.push(el);
    //         }
    //       });
    //     });
    //     this.movies = arrFavoriteMovies;
    //   });
    // },

    deleteFavoriteMovieWithLocalStorage(currentId) {
     console.log(currentId)
    // const deleteElInObj = {...this.moviesStore}
     console.log(this.moviesStore)
     
      //  const currentId = e.target.getAttribute("data-id");
      //  
      

      // const filterMoviesStore = this.moviesStore.findIndex((el) => {
      //   console.log(el)
      //  return el.id === currentId
      // });
     
      // if (filterMoviesStore !== -1) {
      //   console.log(this.moviesStore)
      //   delete this.moviesStore[filterMoviesStore]
      //  // this.moviesStore.splice(filterMoviesStore, 1);
      // //  e.target.parentNode.remove();
      //   localStorage.setItem(
      //         "movie-store",
      //         JSON.stringify(this.moviesStore)
      //       );
        
      // }
      
    },
  },

  // mounted() {
  //   this.getMovies();
  // },
};
</script>

<style lang="scss" scoped></style>
-->
