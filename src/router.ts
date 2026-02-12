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

import KebijakanPrivasi from "./pages/Kebijakan-Privasi.vue"

import SyaratKetentuan from "./pages/Syarat-Ketentuan.vue"

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
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
    {
      path: '/kebijakan-privasi',
      name: 'kebijakan-privasi',
      component: KebijakanPrivasi,
    },
    {
      path: '/syarat-ketentuan',
      name: 'syarat-ketentuan',
      component: SyaratKetentuan,
    },
  ],
})