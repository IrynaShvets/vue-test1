import { createApp } from 'vue';
import App from './App.vue';
import './main.css';

import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import router from "./router";

const app = createApp(App);
app.component('header-app', HeaderApp);
app.component('footer-app', FooterApp);

app.use(router).mount('#app')
