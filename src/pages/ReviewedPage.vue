<template>
    <main class="px-20 pb-20 pt-10">
        <section>
            <ul class="grid grid-cols-3 gap-10">
                <li :id="movie.id" v-for="movie in movies" :key="movie.id"
                    class="relative w-[350px] h-[260px] shadow-[10px_10px_8px_2px_rgba(0,0,0,0.3)] hover:scale-[1.05] hover:transition hover:duration-700 hover:ease-in-out">
                    <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
                        :alt="movie.title" loading="lazy" class="mr-6 w-[350px] h-[220px]" />
                    <p class="absolute top-2 left-2 text-white">
                        {{ movie.title }}
                    </p>
                    <p class="absolute bottom-2 left-2 text-gray-600">
                        {{ movie.comment }}
                    </p>
                    <StarRating :rating="movie.rating" />
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
import StarRating from "../components/StarRating.vue";
export default {

    components: {
    StarRating,
  },

    data() {
        return {
            movies: [],
            reviewStore: JSON.parse(localStorage.getItem("movie-review") || '[]'),
            moviesStore: JSON.parse(localStorage.getItem("movie-store") || '[]'),
        };
    },

    methods: {
        filterFavoriteMovies() {
            let arrayObj = [];
            for (const key in this.moviesStore) {
                if (Object.hasOwnProperty.call(this.moviesStore, key)) {
                    const el = this.moviesStore[key];
                    for (const key in this.reviewStore) {
                        if (Object.hasOwnProperty.call(this.reviewStore, key)) {
                            const element = this.reviewStore[key];
                            if (el.id === element.id) {
                                arrayObj.push({ ...el, ...element })
                            }}}}}
            this.movies = arrayObj;
        }
    },

    mounted() {
        this.filterFavoriteMovies()
    }
}
</script>

<style lang="scss" scoped></style>