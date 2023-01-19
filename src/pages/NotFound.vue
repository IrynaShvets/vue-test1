<template>
    <section>
      <h1 class="text-center text-5xl">404 - Page Not Found</h1>
      <p>This page no longer exists or was moved to another location.</p>
      <button @click="$router.back()" class="btn btn-primary btn-sm">&lt; Back</button>

    </section>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  }
  </script>
  
  <style lang="scss" scoped>
  </style>