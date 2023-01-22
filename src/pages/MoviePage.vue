<template>
  <main class="px-36 py-12">
    <div v-if="movie" class="">
<div class="flex">
  <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
        :alt="movie.title" loading="lazy" class="rounded w-[550px] h-[370px] shadow-[-15px_-10px_21px_7px_rgba(145,33,234,0.75)]" />
      <div class="ml-6">
        <h4 class="mb-4 text-slate-500 text-lg leading-relaxed">
          <span class="font-semibold">Original title:</span>
          {{ movie.original_title }}
        </h4>
        <p class="my-4 text-slate-500 text-lg leading-relaxed">
          <span class="font-semibold">Release date:</span>
          {{ movie.release_date }}.
        </p>
        <p class="my-4 text-slate-500 text-lg leading-relaxed">
          <span class="font-semibold">Genres of cinema:</span>
          <ul v-if="movie.genres">
            <li :id="genre.id" v-for="genre in movie.genres" :key="genre.id">
              <p>{{ genre.name }}</p>
            </li>
          </ul>
          
        </p>
        <p class="my-4 text-slate-500 text-lg leading-relaxed">
          <span class="font-semibold">Tagline:</span> {{ movie.tagline }}.
        </p>
        
        <button @click="addFavoriteMovieToLocalStorage" type="submit">Add to favorite movies</button>
      </div>
</div>
 
      <p class="p-6 text-slate-500 text-lg leading-relaxed">
        {{ movie.overview }}
      </p>
    </div>
  </main>
</template>

<script>
import { getMovieDetails } from "../services/movie.service";

export default {
  name: "MoviePage",
  components: {},

  data() {
    return {
       movie: null,
       moviesStore: JSON.parse(localStorage.getItem("movie-store")),
      //  moviesStore: JSON.parse(localStorage.getItem("movie-store") || '[]'),
    
    };
  },

  methods: {
    addFavoriteMovieToLocalStorage() {
    const cloneMovieId = this.movie.id;

    console.log(cloneMovieId)
    
    localStorage.setItem("movie-store", JSON.stringify(this.moviesStore));
    this.moviesStore.push(cloneMovieId);
    this.movie.id = "";
  },

    getMovies() {
      // this.moviesStore = JSON.parse(localStorage.getItem("movie-store"));
    },
  },

  mounted() {
    getMovieDetails(this.$route.params.id).then(data => {
       this.movie = data.data;
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
