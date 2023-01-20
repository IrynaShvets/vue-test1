<template>
    <section>
      <h1 class="text-center text-5xl">404 - Page Not Found</h1>
      <p>This page no longer exists or was moved to another location.</p>
      <button @click="$router.back()" class="py-4 px-2 bg-sky-500 text-white">&lt; Back</button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  }
  </script>
  
  <style lang="scss" scoped>
  </style>