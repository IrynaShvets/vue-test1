<template>
    <container-app>
      <main class="p-20">
  
        <filters-app
          :filterPosts="filterPosts"
          :search="search"
         
        />
   <!-- :filteredPosts="filteredPosts" -->
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
  import { getSearchMovies } from "../services/movie.service";
  import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
  import FiltersApp from "../components/FiltersApp.vue";
  
  export default {
    name: "SearchPage",
    components: {
      ContainerApp,
      VueTailwindPagination,
      FiltersApp,
    },
  
    data() {
      return {
        movies: [],
        totalResults: null,
        currentPage: 1,
        perPage: 20,
       
      };
    },
    // computed: {
    //   // filteredMovies() {
    //   //   return this.filterByMovieGenre(this.movies)
    //   // },
    //   // genre() {
    //   //   return this.genres.find(
    //   //     (genre) => genre.id === this.genreId
    //   //   )
    //   // },
    // },
    // computed: {
    //   filteredPosts: {
    //     get () {
    //       return this.movies
    //     },
    //     set () {
    //       this.movies = this.getMovies()
    //       const results = this.movies.filter((movie) => {
    //         if (this.type === "filter") {
    //           return movie.title.toLowerCase().includes(this.str.toLowerCase())
    //         } 
    //       })
    //       this.posts = results
    //     }
    //   }
    // },
  
    methods: {
      getSearchMovies() {
        getSearchMovies(this.currentPage).then((data) => {
          console.log(data);
     
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
  
      filterPosts (catName) {
        // this.resetPosts()
        if (catName !== 'All') {
          this.movies = this.movies.filter((movie) => {
            return movie.title === catName
          })
        }
      },
      
      search (term) {
        this.resetPosts()
        this.movies = this.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(term.toLowerCase())
        })
      },
      resetPosts () {
        this.movies = this.getSearchMovies();
      }
  
    },
  
    // created() {
    //   this.getSearchMovies();
    // },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  