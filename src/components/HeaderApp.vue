<template>
  <header class="flex flex-wrap py-2">
    <div class="w-full px-4">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 rounded">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <router-link to="/"
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo">
              FILM
            </router-link>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button" v-on:click="toggleNavbar()">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <router-link to="/"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Popular Movies
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/library"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Library
                </router-link>
              </li>
            </ul>

          <div v-bind:class="{ 'hidden': !menuShow, 'flex': menuShow }" class="lg:flex lg:flex-grow items-center">
            
            <div id="search-container" class="flex flex-col content-end">
              <form class="relative grow-0" id="search-form">
                <input type="text" name="searchQuery" autocomplete="off" placeholder="Search popular movies"
                  class="outline-none focus:outline-none h-6 w-80 px-6 py-3 rounded text-gray-800" />
                <button type="submit"
                  class="absolute top-0.35 right-0 h-6 w-10 bg-sky-800 rounded outline-none focus:outline-none">
                  <svg class="inline-block w-3.5 h-3.5 stroke-current stroke-0 fill-white" viewBox="0 0 32 32">
                    <path
                      d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z">
                    </path>
                  </svg>
                </button>
              </form>
            </div>

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
  data() {
    return {
      menuShow: false,
    }
  },
  methods: {
    toggleNavbar: function () {
      this.menuShow = !this.menuShow;
    },
    
  },
  
}
</script>
<style>

active {
  @apply text-sky-800;
 }
  </style>


