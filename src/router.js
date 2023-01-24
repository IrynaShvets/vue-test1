import HomePage from "./pages/HomePage.vue";
import LibraryPage from "./pages/LibraryPage.vue";
import NotFound from "./pages/NotFound.vue";
import MoviePage from "./pages/MoviePage.vue";
import DiscoverPage from "./pages/DiscoverPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";

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
    path: "/search",
    name: "searchPage",
    component: SearchPage,
  },
  {
    path: "/login",
    name: "loginPage",
    component: LoginPage,
  },
  {
    path: "/registration",
    name: "registrationPage",
    component: RegistrationPage,
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

export default router;