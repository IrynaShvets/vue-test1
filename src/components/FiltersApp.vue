<template>
    <div>
      
    <label for="search">
      Search
      <input
        id="search"
        v-model="term"
        @keypress.enter="search(term)"
      />
    </label>
    
  
    <p
      v-for="filter in filters"
      :key="filter"
      @click="() => filterPosts(filter)"
    >
      {{ filter }}
    </p>
    </div>
   
  </template>
  
  <script>
  const FiltersApp = [
    'All',
    'HVAC',
    'Overhead Doors'
  ]
  export default {
    name: "FiltersApp",
    props: [
      'filters',
      'search',
      
    ],
    data () {
      return {
        FiltersApp,
        term: ''
      }
    }
  }
  </script>
