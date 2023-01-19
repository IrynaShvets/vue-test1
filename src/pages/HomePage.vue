<template>
  <container-app>
<main class="p-20">
      <ul class="flex flex-wrap mx-auto">
         <li
         :id="movie.id"
          v-for="movie in movies"
          :key="movie.id"
          class="relative w-[550px] h-[370px]"
          
        >
       <router-link :to="'/movie/' + movie.id">
        <img v-if="movie.backdrop_path"
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
      <div class="flex flex-col">
        <!-- <PaginationApp
          :totalPages="totalPages"
          :perPage="20"
          :currentPage="currentPage"
          @pagechanged="onPageChange"
        /> -->
      </div>
  </main>
  </container-app>
  
</template>

<script>
import ContainerApp from "../shared/container/ContainerApp.vue";
import { getPopularMovies } from "../services/movie.service";
/* import PaginationApp from "../components/PaginationApp.vue"; */
export default {
  name: "HomePage",
  components: {
    /* PaginationApp, */
    ContainerApp,
  },

  data() {
    return {
      movies: [],
     totalPages: null,
      currentPage: 1,
      
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
  },

  async mounted() {
    const body = {
      page: this.$route.params.page,
    };

    try {
      const { data } = await getPopularMovies(body);
      this.movies = data.results;
      this.totalPages = data.total_pages;
    } catch (error) {
      console.error(error);
    }
  },

  // async created() {
    
  //   try {
  //     const { id } = this.$route.params;
  //     const { data } = await getMovieDetails(id);
  //     this.movieDetails = data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

};
</script>

<style lang="scss" scoped></style>
