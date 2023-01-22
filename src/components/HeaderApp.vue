<template>
  <header class="flex flex-wrap py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div class="w-full px-4">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div @click="goTo" class="w-full cursor-pointer relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
               FILM
          </div>
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <router-link to="/" active-class="active-link" exact-active-class="exact-active-link"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Popular Movies
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/discover" active-class="active-link" exact-active-class="exact-active-link"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Discover
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/search" active-class="active-link" exact-active-class="exact-active-link"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Search
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/library" active-class="active-link" exact-active-class="exact-active-link"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Library
                </router-link>
              </li>
            </ul>
           <div class="lg:flex lg:flex-grow items-center">
            
            <ul class="flex">
              <li class="text-sky-900 hover:text-sky-800 mr-10">
                <a href="mailto:info@devstudio.com" class=""> movies@studio.com </a>
              </li>
              <li class="text-sky-900 hover:text-sky-800">
                <a href="tel:+38 097 000 11 22" class=""> +38 097 000 11 22 </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  methods: {
      goTo() {
        this.$router.push({name: 'homePage'})
      },
  },
}
</script>
<style>

.active {
    color: #09054b;
}

.exact-active-link {
    color: #09054b;
    font-weight: bold;
}

  </style>


