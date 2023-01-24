import { createApp, markRaw  } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './main.css';
import '@ocrv/vue-tailwind-pagination/styles';
import Notifications from '@kyvg/vue3-notification';

import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.component('header-app', HeaderApp);
app.component('footer-app', FooterApp);

app.use(Notifications).use(pinia).use(router).mount('#app');
