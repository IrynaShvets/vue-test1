import HomePage from "./pages/HomePage.vue";
import LibraryPage from "./pages/LibraryPage.vue";
import NotFound from "./pages/NotFound.vue";
import MoviePage from "./pages/MoviePage.vue";
import DiscoverPage from "./pages/DiscoverPage.vue";
// import SearchPage from "./pages/SearchPage.vue";


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
    path: '/search',
    component: () => import('@/pages/SearchPage.vue'),
    props: route => ({ query: route.query.q }),
			beforeEnter: (to, from, next) => {
				next()
			}
    

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