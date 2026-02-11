<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'
import { usePageMeta } from '../services/usePageMeta'

usePageMeta({
  title: 'Fasilitas Kampus - Nusantara Global Academy',
  description:
    'Jelajahi fasilitas modern Nusantara Global Academy melalui tur kampus virtual: ruang kelas digital, laboratorium sains, perpustakaan, sports center, dan kantin sehat.'
})
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Header />

    <main style="view-transition-name: main-content">
      <!-- Hero Header Tur Kampus -->
      <section class="pt-28 md:pt-32 pb-16 px-4 md:px-8 bg-slate-50">
        <div class="container mx-auto text-center">
          <nav class="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 mb-8"
            id="breadcrumb-nav">
            <RouterLink to="/" id="breadcrumb-home-link" class="hover:text-blue-800 transition-colors">
              Beranda
            </RouterLink>
            <iconify-icon icon="lucide:chevron-right" class="text-xs"></iconify-icon>
            <span class="text-blue-800">Tur Kampus</span>
          </nav>

          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
            <iconify-icon icon="lucide:eye"></iconify-icon>
            Jelajahi Kampus Kami
          </div>

          <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Tur Kampus Virtual
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Saksikan lingkungan belajar kelas dunia yang dirancang khusus untuk
            mendukung kreativitas, kolaborasi, dan prestasi setiap siswa di
            Nusantara Global Academy.
          </p>
        </div>
      </section>

      <!-- Interactive Gallery Grid -->
      <section class="py-4 md:py-20 px-4 md:px-8">
        <div class="container mx-auto space-y-10 md:space-y-32">
          <!-- Row 1: Classrooms -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 space-y-6">
              <div class="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center">
                <iconify-icon icon="lucide:layout" class="text-2xl"></iconify-icon>
              </div>
              <h2 class="text-3xl font-bold text-slate-900">
                Ruang Kelas Digital Masa Depan
              </h2>
              <p class="text-slate-600 leading-relaxed">
                Setiap ruang kelas dilengkapi dengan Interactive Smart TV, akses
                internet berkecepatan tinggi, dan sistem sirkulasi udara yang
                optimal. Kursi dan meja ergonomis memastikan kenyamanan siswa
                selama proses belajar mengajar.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Panel Interaktif 75 Inch
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Kapasitas Maksimal 24 Siswa
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Smart Lighting System
                </li>
              </ul>
            </div>

            <div class="order-1 lg:order-2 relative group overflow-hidden rounded-4xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
                class="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Digital Classroom" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          </div>

          <!-- Row 2: Science Labs -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="relative group overflow-hidden rounded-4xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200"
                class="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Science Lab" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>

            <div class="space-y-6">
              <div class="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center">
                <iconify-icon icon="lucide:beaker" class="text-2xl"></iconify-icon>
              </div>
              <h2 class="text-3xl font-bold text-slate-900">
                Laboratorium Sains &amp; Inovasi
              </h2>
              <p class="text-slate-600 leading-relaxed">
                Tempat di mana teori bertemu dengan praktik. Laboratorium kami
                memenuhi standar industri untuk eksperimen biologi, kimia, dan
                fisika. Juga tersedia Innovation Lab khusus untuk robotika dan
                pemrograman.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Peralatan Mikroskop Digital
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  3D Printing Facility
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Standar Keamanan Tinggi
                </li>
              </ul>
            </div>
          </div>

          <!-- Row 3: Library -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 space-y-6">
              <div class="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center">
                <iconify-icon icon="lucide:book-open" class="text-2xl"></iconify-icon>
              </div>
              <h2 class="text-3xl font-bold text-slate-900">
                Pusat Literasi &amp; E-Library
              </h2>
              <p class="text-slate-600 leading-relaxed">
                Lebih dari sekadar rak buku, perpustakaan kami adalah pusat
                riset digital. Dengan koleksi ribuan judul fisik dan akses ke
                jurnal internasional, siswa didorong untuk menjadi pemikir
                kritis.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  10.000+ Koleksi Buku
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Quiet Study Zones
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Tablet Lending Station
                </li>
              </ul>
            </div>

            <div class="order-1 lg:order-2 relative group overflow-hidden rounded-4xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200"
                class="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Library" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          </div>

          <!-- Row 4: Sports Center -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="relative group overflow-hidden rounded-4xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200"
                class="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Sports Center" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>

            <div class="space-y-6">
              <div class="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center">
                <iconify-icon icon="lucide:trophy" class="text-2xl"></iconify-icon>
              </div>
              <h2 class="text-3xl font-bold text-slate-900">
                Sport &amp; Wellness Center
              </h2>
              <p class="text-slate-600 leading-relaxed">
                Fasilitas olahraga indoor yang megah mencakup lapangan
                multifungsi untuk basket, futsal, dan badminton. Juga tersedia
                studio senam dan fasilitas kebugaran modern.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Lantai Standar Kompetensi
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Ruang Ganti &amp; Shower
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Tribune Kapasitas 500 Orang
                </li>
              </ul>
            </div>
          </div>

          <!-- Row 5: Cafeteria -->
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 space-y-6">
              <div class="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center">
                <iconify-icon icon="lucide:utensils" class="text-2xl"></iconify-icon>
              </div>
              <h2 class="text-3xl font-bold text-slate-900">
                Kantin Sehat &amp; Higienis
              </h2>
              <p class="text-slate-600 leading-relaxed">
                Nutrisi yang baik adalah kunci performa akademik. Kantin kami
                menyajikan makanan sehat dengan pengawasan ahli gizi, dalam
                lingkungan yang bersih dan modern untuk bersosialisasi.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Menu Bergizi Seimbang
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Cashless Payment System
                </li>
                <li class="flex items-center gap-3 text-slate-700">
                  <iconify-icon icon="lucide:check-circle-2" class="text-green-500 text-xl"></iconify-icon>
                  Area Terbuka Hijau
                </li>
              </ul>
            </div>

            <div class="order-1 lg:order-2 relative group overflow-hidden rounded-4xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1200"
                class="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Cafeteria" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mt-20 -mr-20"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <h2 class="text-3xl md:text-5xl font-bold mb-8">
            Siap Melihat Kampus Kami Secara Langsung?
          </h2>
          <p class="text-blue-200 text-lg mb-10">
            Jadwalkan kunjungan tatap muka atau langsung mulai proses
            pendaftaran untuk mengamankan kuota putra-putri Anda.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <RouterLink to="/registration" id="cta-register"
              class="px-10 py-4 bg-yellow-400 text-blue-900 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-xl shadow-yellow-400/20">
              Daftar PPDB Sekarang
            </RouterLink>
            <RouterLink to="/contact" id="cta-contact"
              class="px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all">
              Hubungi Kami
            </RouterLink>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
