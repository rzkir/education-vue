<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { usePageMeta } from '../services/usePageMeta'

usePageMeta({
  title: 'E-Library - Nusantara Global Academy',
  description:
    'Akses E-Library Nusantara Global Academy untuk membaca buku digital, jurnal, dan materi pembelajaran pilihan kapan saja dan di mana saja.'
})
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <main style="view-transition-name: main-content" class="pt-32 pb-24 px-4 md:px-8">
            <div class="container mx-auto">
                <!-- Breadcrumb & Title -->
                <section class="mb-10">
                    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                                Layanan Digital
                            </p>
                            <h1 class="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                                E-Library Nusantara Global
                            </h1>
                            <p class="mt-3 text-slate-600 max-w-xl">
                                Akses koleksi buku digital, jurnal, dan materi pembelajaran
                                pilihan kapan pun dan di mana pun.
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-2 text-xs text-slate-500 md:justify-end">
                            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">
                                24/7 Online
                            </span>
                            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">
                                Koleksi Kurasi Guru
                            </span>
                            <span class="px-3 py-1 rounded-full bg-white border border-slate-200">
                                Multi Perangkat
                            </span>
                        </div>
                    </div>
                </section>

                <!-- Search & Filters -->
                <section class="mb-10 bg-white border border-slate-100 rounded-3xl shadow-sm p-5 md:p-6">
                    <div class="flex flex-col lg:flex-row gap-4 lg:items-center">
                        <div class="flex-1">
                            <label for="library-search" class="sr-only">
                                Cari koleksi
                            </label>
                            <div
                                class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200">
                                <iconify-icon icon="lucide:search" class="text-slate-400 text-lg"></iconify-icon>
                                <input id="library-search" type="search"
                                    placeholder="Cari judul buku, penulis, atau kata kunci..."
                                    class="w-full bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400" />
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <button type="button"
                                class="px-4 py-2 rounded-full text-xs font-semibold bg-blue-800 text-white">
                                Semua
                            </button>
                            <button type="button"
                                class="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200">
                                Sains
                            </button>
                            <button type="button"
                                class="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200">
                                Teknologi
                            </button>
                            <button type="button"
                                class="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200">
                                Seni &amp; Budaya
                            </button>
                            <button type="button"
                                class="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200">
                                Referensi UN/UTBK
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Featured & List -->
                <section class="grid lg:grid-cols-3 gap-8">
                    <!-- Highlighted collection -->
                    <aside class="lg:col-span-1 bg-slate-900 rounded-3xl p-7 h-fit text-white relative overflow-hidden">
                        <div class="absolute -right-12 -bottom-16 w-44 h-44 bg-blue-600/30 rounded-full blur-3xl"></div>
                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                            Rekomendasi Guru
                        </p>
                        <h2 class="mt-3 text-2xl font-bold">
                            Paket Bacaan Bulanan
                        </h2>
                        <p class="mt-3 text-sm text-slate-300">
                            Kurasi 10 buku digital terbaik setiap bulan untuk
                            menguatkan literasi, numerasi, dan karakter siswa.
                        </p>
                        <ul class="mt-5 space-y-3 text-sm text-slate-200">
                            <li class="flex items-center gap-2">
                                <iconify-icon icon="lucide:check-circle-2" class="text-emerald-400"></iconify-icon>
                                Akses tanpa batas untuk seluruh jenjang
                            </li>
                            <li class="flex items-center gap-2">
                                <iconify-icon icon="lucide:check-circle-2" class="text-emerald-400"></iconify-icon>
                                Dapat diunduh dalam format PDF/EPUB
                            </li>
                            <li class="flex items-center gap-2">
                                <iconify-icon icon="lucide:check-circle-2" class="text-emerald-400"></iconify-icon>
                                Terintegrasi dengan tugas dan proyek kelas
                            </li>
                        </ul>
                        <button type="button"
                            class="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors">
                            Lihat Paket Bulan Ini
                            <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
                        </button>
                    </aside>

                    <!-- Book grid -->
                    <section class="lg:col-span-2 space-y-6">
                        <header class="flex items-center justify-between gap-4">
                            <div>
                                <h2 class="text-lg font-bold text-slate-900">
                                    Koleksi Terbaru
                                </h2>
                                <p class="text-xs text-slate-500">
                                    Beberapa judul populer yang baru ditambahkan ke E‑Library.
                                </p>
                            </div>
                            <span class="text-xs text-slate-400">
                                24 koleksi ditampilkan
                            </span>
                        </header>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <!-- Card 1 -->
                            <article
                                class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div class="p-4 pb-0 flex items-center gap-3">
                                    <div
                                        class="w-12 h-16 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                                        <iconify-icon icon="lucide:book-open" class="text-xl"></iconify-icon>
                                    </div>
                                    <div class="text-xs text-slate-500 space-x-2">
                                        <span class="inline-flex items-center gap-1">
                                            <iconify-icon icon="lucide:layers" class="text-[13px]"></iconify-icon>
                                            Sains
                                        </span>
                                        <span class="inline-flex items-center gap-1">
                                            <iconify-icon icon="lucide:graduation-cap"
                                                class="text-[13px]"></iconify-icon>
                                            SMA
                                        </span>
                                    </div>
                                </div>
                                <div class="p-4 pt-3 flex-1 flex flex-col">
                                    <h3 class="text-sm font-bold text-slate-900">
                                        Fisika Modern untuk Generasi Digital
                                    </h3>
                                    <p class="mt-1 text-xs text-slate-500">
                                        Oleh: Dr. Andini Pratama
                                    </p>
                                    <p class="mt-3 text-xs text-slate-500 line-clamp-3">
                                        Penjelasan konsep-konsep fisika modern dengan pendekatan
                                        visual dan simulasi digital yang mudah dipahami siswa.
                                    </p>
                                    <div class="mt-4 flex items-center justify-between text-[11px]">
                                        <span class="inline-flex items-center gap-1 text-amber-500">
                                            <iconify-icon icon="lucide:star" class="text-[13px]"></iconify-icon>
                                            4.8 • 320 pembaca
                                        </span>
                                        <span class="text-slate-400">
                                            256 hlm
                                        </span>
                                    </div>
                                </div>
                                <div class="px-4 pb-4 pt-2 flex items-center justify-between border-t border-slate-100">
                                    <button type="button"
                                        class="text-xs font-semibold text-blue-800 hover:text-blue-600 flex items-center gap-1">
                                        Baca Sekarang
                                        <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
                                    </button>
                                    <button type="button"
                                        class="text-[11px] text-slate-500 hover:text-slate-700 flex items-center gap-1">
                                        <iconify-icon icon="lucide:download"></iconify-icon>
                                        Unduh
                                    </button>
                                </div>
                            </article>

                            <!-- Card 2 -->
                            <article
                                class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div class="p-4 pb-0 flex items-center gap-3">
                                    <div
                                        class="w-12 h-16 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                                        <iconify-icon icon="lucide:book-open-check" class="text-xl"></iconify-icon>
                                    </div>
                                    <div class="text-xs text-slate-500 space-x-2">
                                        <span class="inline-flex items-center gap-1">
                                            <iconify-icon icon="lucide:pencil-ruler" class="text-[13px]"></iconify-icon>
                                            Literasi
                                        </span>
                                        <span class="inline-flex items-center gap-1">
                                            <iconify-icon icon="lucide:school" class="text-[13px]"></iconify-icon>
                                            SMP
                                        </span>
                                    </div>
                                </div>
                                <div class="p-4 pt-3 flex-1 flex flex-col">
                                    <h3 class="text-sm font-bold text-slate-900">
                                        Antologi Cerita Inspiratif Nusantara
                                    </h3>
                                    <p class="mt-1 text-xs text-slate-500">
                                        Oleh: Tim Bahasa Indonesia NGA
                                    </p>
                                    <p class="mt-3 text-xs text-slate-500 line-clamp-3">
                                        Kumpulan cerita pendek bertema karakter, gotong royong, dan
                                        keberagaman budaya dari berbagai daerah di Indonesia.
                                    </p>
                                    <div class="mt-4 flex items-center justify-between text-[11px]">
                                        <span class="inline-flex items-center gap-1 text-amber-500">
                                            <iconify-icon icon="lucide:star" class="text-[13px]"></iconify-icon>
                                            4.9 • 410 pembaca
                                        </span>
                                        <span class="text-slate-400">
                                            180 hlm
                                        </span>
                                    </div>
                                </div>
                                <div class="px-4 pb-4 pt-2 flex items-center justify-between border-t border-slate-100">
                                    <button type="button"
                                        class="text-xs font-semibold text-blue-800 hover:text-blue-600 flex items-center gap-1">
                                        Baca Sekarang
                                        <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
                                    </button>
                                    <button type="button"
                                        class="text-[11px] text-slate-500 hover:text-slate-700 flex items-center gap-1">
                                        <iconify-icon icon="lucide:bookmark-plus"></iconify-icon>
                                        Tambah ke Favorit
                                    </button>
                                </div>
                            </article>

                            <!-- Card 3 -->
                            <article
                                class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div class="p-4 pb-0 flex items-center gap-3">
                                    <div
                                        class="w-12 h-16 rounded-lg bg-linear-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white">
                                        <iconify-icon icon="lucide:headphones" class="text-xl"></iconify-icon>
                                    </div>
                                    <div class="text-sm text-slate-500 space-x-2">
                                        <span class="inline-flex items-center gap-1 text-sm md:text-base">
                                            <iconify-icon icon="lucide:mic" class="text-[13px]"></iconify-icon>
                                            Audio Book
                                        </span>
                                        <span class="inline-flex items-center gap-1 text-sm">
                                            <iconify-icon icon="lucide:users" class="text-[13px]"></iconify-icon>
                                            Semua usia
                                        </span>
                                    </div>
                                </div>
                                <div class="p-4 pt-3 flex-1 flex flex-col">
                                    <h3 class="text-sm font-bold text-slate-900">
                                        Belajar Karakter Lewat Dongeng
                                    </h3>
                                    <p class="mt-1 text-xs text-slate-500">
                                        Narator: Kak Sinta
                                    </p>
                                    <p class="mt-3 text-xs text-slate-500 line-clamp-3">
                                        Seri dongeng audio yang mengajarkan nilai kejujuran,
                                        tanggung jawab, dan empati melalui cerita-cerita hangat.
                                    </p>
                                    <div class="mt-4 flex items-center justify-between text-[11px]">
                                        <span class="inline-flex items-center gap-1 text-amber-500">
                                            <iconify-icon icon="lucide:star" class="text-[13px]"></iconify-icon>
                                            5.0 • 520 pendengar
                                        </span>
                                        <span class="text-slate-400">
                                            12 episode
                                        </span>
                                    </div>
                                </div>
                                <div class="px-4 pb-4 pt-2 flex items-center justify-between border-t border-slate-100">
                                    <button type="button"
                                        class="text-xs font-semibold text-blue-800 hover:text-blue-600 flex items-center gap-1">
                                        Dengarkan
                                        <iconify-icon icon="lucide:play-circle"></iconify-icon>
                                    </button>
                                    <button type="button"
                                        class="text-[11px] text-slate-500 hover:text-slate-700 flex items-center gap-1">
                                        <iconify-icon icon="lucide:share-2"></iconify-icon>
                                        Bagikan
                                    </button>
                                </div>
                            </article>
                        </div>
                    </section>
                </section>
            </div>
        </main>

        <Footer />
    </div>
</template>
