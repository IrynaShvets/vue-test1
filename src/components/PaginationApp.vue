<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        First
      </button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
        Previous
      </button>
    </li>


    <li :key="page" v-for="page in totalPages" class="pagination-item">
      <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }">
        {{ page.name }}
      </button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        Last
      </button>
    </li>
  </ul>
</template>

<script>
export default {

  props: {
    pages: Number,

    totalPages: Number,
  },

  methods: {

    isPageActive(page) {
      return this.currentPage === page;
    }
  }
}
</script>

<style>

</style>