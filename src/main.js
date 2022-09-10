import { createApp } from "vue";
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router'
import WebGIS from './views/WebGIS.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: WebGIS
    }
  ]
})

createApp(App).use(router).mount('#app')