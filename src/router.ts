import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'

import Fasilitas from './pages/Fasilitas.vue'

import TentangKami from './pages/Tentang-Kami.vue'

import Program from './pages/Program.vue'

import Registration from './pages/Registration.vue'

import CheckStatus from './pages/Check-Status.vue'

import ELibrary from './pages/E-Library.vue'

import ParentPortal from "./pages/Parent-Portal.vue"

import AlumniNetwork from "./pages/Alumni-Network.vue"

import Contact from "./pages/Contact.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tentang-kami',
      name: 'tentang-kami',
      component: TentangKami,
    },
    {
      path: '/fasilitas',
      name: 'fasilitas',
      component: Fasilitas,
    },
    {
      path: '/program',
      name: 'program',
      component: Program,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/check-status',
      name: 'check-status',
      component: CheckStatus,
    },
    {
      path: '/e-library',
      name: 'e-library',
      component: ELibrary,
    },
    {
      path: '/parent-portal',
      name: 'parent-portal',
      component: ParentPortal,
    },
    {
      path: '/alumni-network',
      name: 'alumni-network',
      component: AlumniNetwork,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

