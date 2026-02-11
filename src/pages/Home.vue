<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'
import { usePageMeta } from '../services/usePageMeta'

usePageMeta({
  title: 'Nusantara Global Academy - Sekolah Berstandar Internasional',
  description:
    'Nusantara Global Academy membentuk pemimpin masa depan dengan kurikulum berbasis karakter, teknologi, dan nilai-nilai luhur bangsa.'
})
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Header />

    <main style="view-transition-name: main-content">
      <!-- Hero Section -->
      <section class="pb-16 md:pb-28 py-28 px-4 md:px-8 overflow-hidden">
        <div class="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Pendaftaran Tahun Ajaran 2024/2025 Dibuka
            </div>

            <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Selamat Datang di
              <span class="text-blue-800">Nusantara Global Academy</span>
            </h1>

            <p class="text-lg text-slate-600 max-w-xl leading-relaxed">
              Membentuk pemimpin masa depan dengan kurikulum berbasis
              karakter, teknologi, dan nilai-nilai luhur bangsa. Tempat di
              mana potensi setiap anak diasah secara maksimal.
            </p>

            <div class="flex flex-wrap gap-4">
              <RouterLink to="/registration" id="hero-primary-cta"
                class="px-8 py-4 bg-blue-800 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl shadow-blue-200">
                Mulai Perjalanan Anda
              </RouterLink>
              <RouterLink to="/program" id="hero-secondary-cta"
                class="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                Lihat Kurikulum
              </RouterLink>
            </div>

            <div class="flex items-center gap-6 pt-4">
              <div class="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
                  class="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                  class="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                  class="w-10 h-10 rounded-full border-2 border-white" alt="User" />
              </div>
              <p class="text-sm text-slate-500">
                Dipercaya oleh
                <span class="font-bold text-slate-900">
                  2,500+
                </span>
                Orang Tua di Indonesia
              </p>
            </div>
          </div>

          <div class="relative lg:block">
            <div class="absolute -z-10 top-0 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg"
                class="w-full aspect-4/5 object-cover" alt="Campus Life" />
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="tentang" class="bg-slate-50 px-4 md:px-8">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                class="rounded-3xl shadow-lg" alt="Education" />
            </div>

            <div class="space-y-6">
              <h2 class="text-blue-800 font-bold tracking-wider uppercase text-sm">
                Tentang Kami
              </h2>
              <h3 class="text-4xl font-bold text-slate-900">
                Visi Kami Untuk Masa Depan Pendidikan
              </h3>
              <p class="text-slate-600 text-lg">
                Nusantara Global Academy didirikan dengan satu tujuan:
                menciptakan lingkungan belajar yang inspiratif di mana
                inovasi bertemu dengan tradisi. Kami percaya setiap siswa
                memiliki bakat unik yang harus dikembangkan melalui
                bimbingan yang tepat.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 md:mt-16">
            <div class="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <iconify-icon icon="lucide:award" class="text-2xl text-blue-700"></iconify-icon>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">
                  Kualitas Akademik Tinggi
                </h4>
                <p class="text-sm text-slate-500">
                  Kurikulum berstandar internasional yang disesuaikan
                  dengan kearifan lokal.
                </p>
              </div>
            </div>

            <div class="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <iconify-icon icon="lucide:users" class="text-2xl text-blue-700"></iconify-icon>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">
                  Pembinaan Karakter
                </h4>
                <p class="text-sm text-slate-500">
                  Menanamkan integritas, empati, dan keberanian pada
                  setiap individu.
                </p>
              </div>
            </div>

            <div class="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <iconify-icon icon="lucide:lightbulb" class="text-2xl text-blue-700"></iconify-icon>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">
                  Inovasi Kreatif
                </h4>
                <p class="text-sm text-slate-500">
                  Mendorong eksplorasi tanpa batas di bidang seni,
                  sains, dan teknologi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PPDB Banner Section -->
      <section id="ppdb" class="pt-10 md:pt-24 px-4 md:px-8 bg-white">
        <div class="container mx-auto">
          <div
            class="relative overflow-hidden bg-linear-to-br from-indigo-700 via-blue-800 to-purple-800 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
            <!-- Decorative Elements -->
            <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div class="relative grid lg:grid-cols-5 gap-12 items-center">
              <!-- Text Content -->
              <div class="lg:col-span-3 space-y-6">
                <div
                  class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400 text-blue-900 text-xs font-bold uppercase tracking-wider">
                  <iconify-icon icon="lucide:megaphone"></iconify-icon>
                  Informasi Penting
                </div>
                <h2 class="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  Pendaftaran PPDB
                  <br class="hidden md:block" />
                  Tahun Ajaran 2024/2025
                  <span class="text-yellow-400">Dibuka!</span>
                </h2>
                <p class="text-blue-100 text-lg max-w-xl">
                  Bergabunglah bersama kami untuk mencetak generasi unggul
                  yang siap bersaing di kancah global. Kuota terbatas untuk
                  setiap jenjang pendidikan.
                </p>

                <div class="flex flex-wrap items-center gap-6 pt-2">
                  <div class="flex items-center gap-3 text-white">
                    <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <iconify-icon icon="lucide:calendar" class="text-xl"></iconify-icon>
                    </div>
                    <div>
                      <p class="text-[10px] uppercase text-blue-300 font-bold tracking-widest">
                        Batas Pendaftaran
                      </p>
                      <p class="font-bold">30 Juni 2024</p>
                    </div>
                  </div>

                  <RouterLink to="/pendaftaran" id="ppdb-banner-cta-btn"
                    class="px-8 py-4 bg-yellow-400 text-blue-900 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-xl shadow-yellow-400/20">
                    Daftar Sekarang
                  </RouterLink>
                </div>
              </div>

              <!-- Checklist -->
              <div class="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h4 class="text-white font-bold mb-6 flex items-center gap-2">
                  <iconify-icon icon="lucide:clipboard-check" class="text-xl text-yellow-400"></iconify-icon>
                  Persyaratan Berkas:
                </h4>
                <ul class="space-y-4">
                  <li class="flex items-center gap-3 text-blue-50 text-sm md:text-base">
                    <iconify-icon icon="lucide:check-circle-2" class="text-green-400 text-xl"></iconify-icon>
                    <span>Fotokopi Ijazah &amp; SKHUN</span>
                  </li>
                  <li class="flex items-center gap-3 text-blue-50 text-sm md:text-base">
                    <iconify-icon icon="lucide:check-circle-2" class="text-green-400 text-xl"></iconify-icon>
                    <span>Fotokopi Akte Kelahiran</span>
                  </li>
                  <li class="flex items-center gap-3 text-blue-50 text-sm md:text-base">
                    <iconify-icon icon="lucide:check-circle-2" class="text-green-400 text-xl"></iconify-icon>
                    <span>Fotokopi Kartu Keluarga</span>
                  </li>
                  <li class="flex items-center gap-3 text-blue-50 text-sm md:text-base">
                    <iconify-icon icon="lucide:check-circle-2" class="text-green-400 text-xl"></iconify-icon>
                    <span>Pas Foto 3x4 (4 Lembar)</span>
                  </li>
                  <li class="flex items-center gap-3 text-blue-50 text-sm md:text-base">
                    <iconify-icon icon="lucide:check-circle-2" class="text-green-400 text-xl"></iconify-icon>
                    <span>Rapor Semester Terakhir</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Section -->
      <section id="program" class="py-16 md:py-24 px-4 md:px-8">
        <div class="container mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 class="text-blue-800 font-bold tracking-wider uppercase text-sm mb-4">
              Program Unggulan
            </h2>
            <h3 class="text-4xl font-bold text-slate-900">
              Pilih Jalur Pendidikan yang Tepat Untuk Anak Anda
            </h3>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div
              class="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div
                class="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <iconify-icon icon="lucide:atom" class="text-3xl text-white"></iconify-icon>
              </div>
              <h4 class="text-xl font-bold mb-4">Sains &amp; Teknologi</h4>
              <p class="text-slate-500 leading-relaxed">
                Fokus pada pengembangan logika, pemrograman dasar, dan
                eksplorasi ilmiah melalui praktikum intensif.
              </p>
              <RouterLink to="/program" id="program-science-link"
                class="mt-6 inline-flex items-center text-blue-700 font-semibold group">
                Selengkapnya
                <iconify-icon icon="lucide:arrow-right"
                  class="ml-2 group-hover:translate-x-2 transition-transform"></iconify-icon>
              </RouterLink>
            </div>

            <div
              class="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div
                class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <iconify-icon icon="lucide:palette" class="text-3xl text-white"></iconify-icon>
              </div>
              <h4 class="text-xl font-bold mb-4">Seni &amp; Budaya</h4>
              <p class="text-slate-500 leading-relaxed">
                Mengasah kreativitas melalui musik, tari, seni rupa, dan
                apresiasi budaya nusantara yang mendalam.
              </p>
              <RouterLink to="/program" id="program-art-link"
                class="mt-6 inline-flex items-center text-blue-700 font-semibold group">
                Selengkapnya
                <iconify-icon icon="lucide:arrow-right"
                  class="ml-2 group-hover:translate-x-2 transition-transform"></iconify-icon>
              </RouterLink>
            </div>

            <div
              class="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div
                class="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                <iconify-icon icon="lucide:trophy" class="text-3xl text-white"></iconify-icon>
              </div>
              <h4 class="text-xl font-bold mb-4">Olahraga Prestasi</h4>
              <p class="text-slate-500 leading-relaxed">
                Membangun sportivitas dan kesehatan melalui berbagai
                cabang olahraga populer dan bela diri.
              </p>
              <RouterLink to="/program" id="program-sport-link"
                class="mt-6 inline-flex items-center text-blue-700 font-semibold group">
                Selengkapnya
                <iconify-icon icon="lucide:arrow-right"
                  class="ml-2 group-hover:translate-x-2 transition-transform"></iconify-icon>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Facilities Section -->
      <section id="fasilitas" class="py-16 md:py-24 bg-slate-900 text-white overflow-hidden px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div class="max-w-xl">
              <h2 class="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">
                Fasilitas Kampus
              </h2>
              <h3 class="text-4xl font-bold">
                Lingkungan Belajar yang Modern &amp; Nyaman
              </h3>
            </div>
            <RouterLink to="/fasilitas" id="all-facilities-link"
              class="text-blue-400 font-semibold border-b border-blue-400 pb-1 hover:text-white hover:border-white transition-colors">
              Lihat Semua Fasilitas
            </RouterLink>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="group relative rounded-2xl overflow-hidden aspect-3/4">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Classroom" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div>
                  <h4 class="text-lg font-bold">Ruang Kelas Digital</h4>
                  <p class="text-xs text-slate-300">
                    Dilengkapi Smart TV &amp; High Speed WiFi
                  </p>
                </div>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden aspect-3/4">
              <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Library" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div>
                  <h4 class="text-lg font-bold">Perpustakaan</h4>
                  <p class="text-xs text-slate-300">
                    Koleksi 10.000+ Buku &amp; E-Library
                  </p>
                </div>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden aspect-3/4">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Lab" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div>
                  <h4 class="text-lg font-bold">Laboratorium Sains</h4>
                  <p class="text-xs text-slate-300">
                    Peralatan Praktikum Standar Industri
                  </p>
                </div>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden aspect-3/4">
              <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Sports" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div>
                  <h4 class="text-lg font-bold">Sports Center</h4>
                  <p class="text-xs text-slate-300">
                    Lapangan Basket, Futsal &amp; Badminton
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
