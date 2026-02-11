import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'

import Fasilitas from './pages/Fasilitas.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/fasilitas',
      name: 'fasilitas',
      component: Fasilitas,
    },
  ],
})

