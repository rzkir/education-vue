<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMobileOpen = ref(false)

const isActive = (path: string) => route.path === path
const toggleMobile = () => {
    isMobileOpen.value = !isMobileOpen.value
}
const closeMobile = () => {
    isMobileOpen.value = false
}
</script>

<template>
    <!-- Navigation -->
    <header class="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100"
        style="view-transition-name: main-nav">
        <nav class="container mx-auto px-4 h-20 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                    <iconify-icon icon="lucide:graduation-cap" class="text-white text-2xl"></iconify-icon>
                </div>
                <span class="text-xl font-bold tracking-tight text-blue-900">
                    NUSANTARA<span class="font-light">GLOBAL</span>
                </span>
            </div>

            <div class="hidden md:flex items-center gap-8">
                <RouterLink to="/" id="nav-home-link"
                    :class="['text-sm font-medium transition-colors', isActive('/') ? 'text-blue-800 hover:text-blue-600' : 'text-slate-600 hover:text-blue-800']">
                    Beranda
                </RouterLink>
                <RouterLink to="/tentang-kami" id="nav-about-link"
                    :class="['text-sm font-medium transition-colors', isActive('/tentang-kami') ? 'text-blue-800 hover:text-blue-600' : 'text-slate-600 hover:text-blue-800']">
                    Tentang
                </RouterLink>
                <RouterLink to="/program" id="nav-programs-link"
                    :class="['text-sm font-medium transition-colors', isActive('/program') ? 'text-blue-800 hover:text-blue-600' : 'text-slate-600 hover:text-blue-800']">
                    Program
                </RouterLink>
                <RouterLink to="/fasilitas" id="nav-facilities-link"
                    :class="['text-sm font-medium transition-colors', isActive('/fasilitas') ? 'text-blue-800 hover:text-blue-600' : 'text-slate-600 hover:text-blue-800']">
                    Fasilitas
                </RouterLink>
                <RouterLink to="/contact" id="nav-contact-link"
                    :class="['text-sm font-medium transition-colors', isActive('/contact') ? 'text-blue-800 hover:text-blue-600' : 'text-slate-600 hover:text-blue-800']">
                    Hubungi Kami
                </RouterLink>
                <RouterLink to="/registration" id="nav-cta-link"
                    :class="['px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md', isActive('/registration') ? 'bg-blue-800 text-white hover:bg-blue-700' : 'bg-slate-200 text-blue-800 hover:bg-blue-100']">
                    Daftar Sekarang
                </RouterLink>
            </div>

            <button class="md:hidden p-2" id="mobile-menu-btn" type="button" @click="toggleMobile"
                aria-label="Toggle navigation">
                <iconify-icon :icon="isMobileOpen ? 'lucide:x' : 'lucide:menu'" class="text-2xl"></iconify-icon>
            </button>
        </nav>

        <!-- Mobile menu -->
        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="isMobileOpen" class="md:hidden border-t border-slate-100 bg-white shadow-sm">
                <nav class="container mx-auto px-4 py-3 flex flex-col gap-2">
                    <RouterLink to="/" id="mobile-nav-home-link" @click="closeMobile"
                        :class="['py-2 text-sm font-medium transition-colors', isActive('/') ? 'text-blue-800' : 'text-slate-600']">
                        Beranda
                    </RouterLink>
                    <RouterLink to="/tentang-kami" id="mobile-nav-about-link" @click="closeMobile"
                        :class="['py-2 text-sm font-medium transition-colors', isActive('/tentang-kami') ? 'text-blue-800' : 'text-slate-600']">
                        Tentang
                    </RouterLink>
                    <RouterLink to="/program" id="mobile-nav-programs-link" @click="closeMobile"
                        :class="['py-2 text-sm font-medium transition-colors', isActive('/program') ? 'text-blue-800' : 'text-slate-600']">
                        Program
                    </RouterLink>
                    <RouterLink to="/fasilitas" id="mobile-nav-facilities-link" @click="closeMobile"
                        :class="['py-2 text-sm font-medium transition-colors', isActive('/fasilitas') ? 'text-blue-800' : 'text-slate-600']">
                        Fasilitas
                    </RouterLink>
                    <RouterLink to="/contact" id="mobile-nav-contact-link" @click="closeMobile"
                        :class="['py-2 text-sm font-medium transition-colors', isActive('/contact') ? 'text-blue-800' : 'text-slate-600']">
                        Hubungi Kami
                    </RouterLink>
                    <RouterLink to="/registration" id="mobile-nav-cta-link" @click="closeMobile"
                        :class="['mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-center transition-all shadow-md', isActive('/registration') ? 'bg-blue-800 text-white' : 'bg-slate-200 text-blue-800']">
                        Daftar Sekarang
                    </RouterLink>
                </nav>
            </div>
        </Transition>
    </header>
</template>
