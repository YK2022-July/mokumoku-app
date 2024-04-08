import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia";
import { Quasar, Dialog, Notify, type QuasarPlugins } from "quasar";
import quasarLang from "quasar/lang/ja";
import App from './App.vue';
import repository from './repositories/Repository'

// Import quasar CSS
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const app = createApp(App);
app.config.globalProperties.$repository = repository;

app.use(createPinia());
// Setup quasar 
app.use(Quasar, {
  plugins: [Dialog, Notify] as QuasarPlugins,
  lang: quasarLang,
});

app.mount('#app');