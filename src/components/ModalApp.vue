<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <button class="p-2 border-0 bg-transparent absolute right-2 top-2" @click="$emit('close-modal')">
        <svg class="inline-block w-5 h-5 stroke-current stroke-0 fill-gray" viewBox="0 0 32 32">
          <path
            d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z">
          </path>
        </svg>
      </button>
      <h2>Please leave your comment and rating of this movie.</h2>
      <form @click.prevent="handleSubmitReview" class="flex flex-col p-4 rounded bg-[#F5ECCD]">
        <textarea @click.stop type="text" placeholder="Comment" v-model="mark.comment" class="mb-2"></textarea>
        <input @click.stop type="number" placeholder="Rating" v-model="mark.rating" min="1" max="5" />
        <button button="submit" class="btn">Submit</button>
      </form>

      <!-- <StarRating :rating="mark.rating" /> -->
    </div>
  </div>
</template>

<script>
// import StarRating from "../components/StarRating.vue";

export default {
  // components: {
  //   StarRating,
  // },

  props: {
    id: {
      required: true
    }
  },

  data() {
    return {
      success: false,
      error: "",
      mark: {
        comment: "",
        rating: "",
      },
      idMovie: null,
      moviesStore: JSON.parse(localStorage.getItem("movie-store") || "[]"),
      reviewStore: JSON.parse(localStorage.getItem("movie-review") || "[]"),
    };
  },

  beforeCreate: function () {
    document.body.className = "home";
  },

  methods: {

    handleSubmitReview() {
      console.log(this.mark.comment, this.mark.rating);
      JSON.parse(localStorage.getItem("movie-review"))

      this.reviewStore.push({
        id: this.id,
        comment: this.mark.comment,
        rating: this.mark.rating,
      });

      localStorage.setItem("movie-review", JSON.stringify(this.reviewStore));
      this.mark.comment = "";
      this.mark.rating = "";
    },

    onPageClick(event) {
      this.currentPage = event;
      this.getMovies(this.currentPage);
    },
  },

};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000da;
}

.modal {
  position: relative;
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  /*  margin-top: 10%; */
  padding: 50px;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

.btn {
  background-color: #ff47da;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
