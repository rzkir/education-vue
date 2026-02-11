<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <!-- Navigation -->
    <header class="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100"
        style="view-transition-name: main-nav">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
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
                    class="text-sm font-medium text-blue-800 hover:text-blue-600 transition-colors">
                    Beranda
                </RouterLink>
                <a href="#tentang" id="nav-about-link"
                    class="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">
                    Tentang
                </a>
                <a href="#program" id="nav-programs-link"
                    class="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">
                    Program
                </a>
                <RouterLink to="/fasilitas" id="nav-facilities-link"
                    class="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">
                    Fasilitas
                </RouterLink>
                <a href="https://p.superdesign.dev/draft/6d94df9b-c0e2-4dae-8843-4e2a18a11d25" id="nav-status-link"
                    class="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">
                    Cek Status
                </a>
                <a href="https://p.superdesign.dev/draft/d4531f37-751d-49f4-a9b5-6b4d2c804a58" id="nav-cta-link"
                    class="px-5 py-2.5 bg-blue-800 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md">
                    Daftar Sekarang
                </a>
            </div>

            <button class="md:hidden p-2" id="mobile-menu-btn" type="button">
                <iconify-icon icon="lucide:menu" class="text-2xl"></iconify-icon>
            </button>
        </nav>
    </header>
</template>
