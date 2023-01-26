import HomePage from "./pages/HomePage.vue";
import LibraryPage from "./pages/LibraryPage.vue";
import NotFound from "./pages/NotFound.vue";
import MoviePage from "./pages/MoviePage.vue";
import DiscoverPage from "./pages/DiscoverPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import {useAuthStore} from "./store/index";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: "/discover",
    name: "discoverPage",
    component: DiscoverPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/library",
    name: "libraryPage",
    component: LibraryPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MoviePage,
    props: true,
    meta: {
      requiresAuth: true,
    }, 
  },
  {
    path: "/search",
    name: "searchPage",
    component: SearchPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "loginPage",
    component: LoginPage,
    meta: {
      hideForAuth: true,
    },
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
});

router.beforeEach((to, from, next) => {
  const userStore = useAuthStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!userStore.user) {
      next({ name: 'loginPage' });
      return;
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (userStore.user) {
      next({ name: 'homePage' });
      return;
    }
  }
  next();
  return;
});

export default router;