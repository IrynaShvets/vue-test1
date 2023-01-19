import HomePage from "./pages/HomePage.vue";
import LibraryPage from "./pages/LibraryPage.vue";
import NotFound from "./pages/NotFound.vue";
import MoviePage from "./pages/MoviePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: "/library",
    name: "libraryPage",
    component: LibraryPage,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MoviePage,
    props: true 
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
});

export default router;