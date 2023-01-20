<template>
  <main class="relative py-3">
    <div v-if="movie" class="flex p-6">

      <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
        :alt="movie.title" loading="lazy" class="rounded mr-6" />
      <div>
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
          {{ movie.genres }}.
        </p>
        <p class="my-4 text-slate-500 text-lg leading-relaxed">
          <span class="font-semibold">Tagline:</span> {{ movie.tagline }}.
        </p>
      </div>

      <p class="p-6 text-slate-500 text-lg leading-relaxed">1111
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
    };
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
