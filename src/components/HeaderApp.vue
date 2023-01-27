<template>
  <header class="flex flex-wrap py-2 bg-[#1B065E]">
    <div class="flex items-center justify-between w-full px-10">
      <div>
        <nav
          class="relative flex items-center justify-center px-2 py-3 bg-[#FF87ab] rounded"
        >
          <div else
            class="container px-4 mx-auto flex flex-wrap items-center justify-between"
          >
            <div
              @click="goTo"
              class="w-full cursor-pointer relative flex items-center justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
            >
              <svg
                class="inline-block w-10 h-10 stroke-current stroke-0 fill-white"
                viewBox="0 0 32 32"
              >
                <path
                  d="M12 9c0-2.761 2.239-5 5-5s5 2.239 5 5c0 2.761-2.239 5-5 5s-5-2.239-5-5zM0 9c0-2.761 2.239-5 5-5s5 2.239 5 5c0 2.761-2.239 5-5 5s-5-2.239-5-5zM24 19v-3c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-3l8 5v-14l-8 5zM20 24h-16v-6h16v6z"
                ></path>
              </svg>
            </div>
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <router-link
                  to="/"
                  active-class="active-link"
                  exact-active-class="exact-active-link"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Popular Movies
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/login"
                  active-class="active-link"
                  exact-active-class="exact-active-link"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Login
                </router-link>
              </li>
            </ul>
            <div class="lg:flex lg:flex-grow items-center"></div>
          </div>
          <div v-if="user" class="flex items-center justify-center">
          
          <ul class="flex items-center justify-center w-full px-10">
            <li class="nav-item">
              <router-link
                to="/discover"
                active-class="active-link"
                exact-active-class="exact-active-link"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Discover
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/search"
                active-class="active-link"
                exact-active-class="exact-active-link"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Search
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/library"
                active-class="active-link"
                exact-active-class="exact-active-link"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Library
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/reviewed"
                active-class="active-link"
                exact-active-class="exact-active-link"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
              Reviewed
              </router-link>
            </li>
            <li class="account-actions__item">
              <button @click="logout" class="py-1 px-2 rounded bg-white">
                Logout
              </button>
            </li>
          </ul>

          <svg class="" width="26" height="28" viewBox="0 0 16 18">
            <path
              d="M8 0C5.38286 0 3.25391 2.12896 3.25391 4.74609C3.25391 7.36323 5.38286 9.49219 8 9.49219C10.6171 9.49219 12.7461 7.36323 12.7461 4.74609C12.7461 2.12896 10.6171 0 8 0Z"
            />
            <path
              d="M15.8216 14.0161C14.4028 11.8877 12.0282 10.6172 9.4708 10.6172H6.5292C3.9718 10.6172 1.5972 11.8877 0.178438 14.0161L0.0898438 14.1489V18H15.9102H15.9102V14.1489L15.8216 14.0161Z"
            />
          </svg>
        </div>
        </nav>
      </div>

      

      <ul class="flex">
        <li class="text-sky-900 hover:text-sky-800 mr-10">
          <a href="mailto:info@devstudio.com" class="">
            <svg
              class="inline-block w-5 h-5 stroke-current stroke-0 fill-white"
              viewBox="0 0 32 32"
            >
              <path
                d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"
              ></path>
            </svg>
          </a>
        </li>
        <li class="text-sky-900 hover:text-sky-800">
          <a href="tel:+38 097 000 11 22" class="">
            <svg
              class="inline-block w-4 h-4 stroke-current stroke-0 fill-white"
              viewBox="0 0 32 32"
            >
              <path
                d="M2.126 1.188c1.278-1.281 5.141-1.495 5.17-0.817 0.029 0.677 3.479 8.191 3.509 8.869s-2.274 2.987-2.948 3.663c-0.668 0.669 4.508 6.533 4.606 6.644 0.11 0.099 5.96 5.287 6.628 4.617 0.674-0.676 2.979-2.985 3.653-2.955 0.676 0.029 8.173 3.487 8.849 3.518 0.676 0.029 0.463 3.9-0.815 5.182-1.093 1.095-6.752 5.071-16.592-2.029-1.079-0.622-2.788-2.049-5.38-4.646-0.001-0.001-0.003-0.003-0.005-0.004-0.002-0.003-0.004-0.004-0.006-0.006s-0.004-0.004-0.006-0.006c-0.001-0.002-0.003-0.004-0.004-0.005-2.59-2.598-4.014-4.312-4.635-5.393-7.083-9.864-3.116-15.537-2.024-16.632z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "../store/index";

export default {
  name: "HeaderApp",

  data() {
    return {
    };
  },

  computed: {
    ...mapState(useAuthStore, ["user"]),
  },

  methods: {
    goTo() {
      this.$router.push({ name: "homePage" });
    },

    ...mapActions(useAuthStore, ["handleLogout"]),

    logout() {
        const { requiresAuth } = this.$route.meta;
        if (requiresAuth) {
          this.handleLogout;
          this.$router.push({ name: "loginPage" });
          const store = useAuthStore()
          store.$reset()
          this.$notify({
          type: "success",
          title: "You have successfully logged out of your account.",
        });
        }
      }
    },
};
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
