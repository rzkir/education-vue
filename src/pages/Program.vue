<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { usePageMeta } from '../services/usePageMeta'

usePageMeta({
  title: 'Program Sains & Teknologi - Nusantara Global Academy',
  description:
    'Program Sains & Teknologi Nusantara Global Academy menggabungkan kurikulum STEM, riset ilmiah, robotika, dan ilmu komputer untuk menyiapkan siswa menghadapi masa depan teknologi.'
})
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Header />

    <main style="view-transition-name: main-content">
      <!-- Breadcrumb -->
      <section class="pt-28 md:pt-32 pb-6 px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex items-center gap-2 text-sm text-slate-400">
            <RouterLink to="/" class="hover:text-blue-800 transition-colors">
              Beranda
            </RouterLink>
            <iconify-icon icon="lucide:chevron-right" class="text-xs"></iconify-icon>
            <span class="hover:text-blue-800 transition-colors">
              Program Akademik
            </span>
            <iconify-icon icon="lucide:chevron-right" class="text-xs"></iconify-icon>
            <span class="text-blue-800 font-semibold">
              Sains &amp; Teknologi
            </span>
          </div>
        </div>
      </section>

      <!-- Program Hero -->
      <section class="pb-12 px-4 md:px-8">
        <div class="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div>
              <span
                class="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
                Science &amp; Tech Division
              </span>
              <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Eksplorasi Tanpa Batas di Bidang
                <span class="text-blue-800">Sains &amp; Teknologi</span>
              </h1>
            </div>

            <p class="text-lg text-slate-600 leading-relaxed">
              Program ini dirancang khusus bagi siswa yang memiliki minat mendalam pada inovasi,
              riset, dan pengembangan teknologi masa depan. Kami menggabungkan teori fundamental
              dengan implementasi praktis berbasis proyek.
            </p>

            <div class="flex flex-wrap gap-8 py-4 border-y border-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800">
                  <iconify-icon icon="lucide:layers" class="text-2xl"></iconify-icon>
                </div>
                <div>
                  <p class="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Jenjang
                  </p>
                  <p class="font-bold">
                    SMA (X - XII)
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800">
                  <iconify-icon icon="lucide:clock" class="text-2xl"></iconify-icon>
                </div>
                <div>
                  <p class="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Durasi
                  </p>
                  <p class="font-bold">
                    3 Tahun Ajaran
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800">
                  <iconify-icon icon="lucide:flask-conical" class="text-2xl"></iconify-icon>
                </div>
                <div>
                  <p class="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    Fokus
                  </p>
                  <p class="font-bold">
                    STEM &amp; Research
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <img src="https://images.pexels.com/photos/8442819/pexels-photo-8442819.jpeg"
              class="rounded-[2.5rem] shadow-2xl aspect-video lg:aspect-square object-cover" alt="Science Lab" />
          </div>
        </div>
      </section>

      <!-- Details Content -->
      <section class="py-4 md:py-16 bg-slate-50 px-4 md:px-8">
        <div class="container mx-auto grid lg:grid-cols-3 gap-12">
          <!-- Main Details -->
          <div class="lg:col-span-2 space-y-12">
            <div class="space-y-6">
              <h2 class="text-3xl font-bold text-slate-900">
                Struktur Kurikulum
              </h2>
              <p class="text-slate-600">
                Kurikulum kami selaras dengan standar nasional namun diperkaya dengan modul
                internasional untuk memastikan daya saing lulusan.
              </p>

              <div class="grid sm:grid-cols-2 gap-4">
                <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 class="font-bold text-blue-800 mb-2">
                    Foundational Science
                  </h4>
                  <p class="text-sm text-slate-500">
                    Penguasaan Fisika Terapan, Kimia Organik, dan Matematika Lanjut sebagai fondasi
                    utama.
                  </p>
                </div>

                <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 class="font-bold text-blue-800 mb-2">
                    Computer Science
                  </h4>
                  <p class="text-sm text-slate-500">
                    Dasar pemrograman (Python/C++), AI Fundamentals, dan Pengembangan Aplikasi
                    Mobile.
                  </p>
                </div>

                <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 class="font-bold text-blue-800 mb-2">
                    Advanced Robotics
                  </h4>
                  <p class="text-sm text-slate-500">
                    Mekanika, sensorika, dan kontrol otomatisasi melalui proyek robotika kompetitif.
                  </p>
                </div>

                <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 class="font-bold text-blue-800 mb-2">
                    Scientific Research
                  </h4>
                  <p class="text-sm text-slate-500">
                    Metodologi penelitian ilmiah dan penulisan jurnal untuk persiapan publikasi.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h2 class="text-3xl font-bold text-slate-900">
                Capaian Pembelajaran (Outcomes)
              </h2>
              <ul class="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                <li class="flex items-start gap-3">
                  <iconify-icon icon="lucide:check-circle-2" class="text-blue-600 text-xl mt-0.5"></iconify-icon>
                  <span class="text-slate-700">
                    Mampu memecahkan masalah kompleks dengan metode komputasional.
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <iconify-icon icon="lucide:check-circle-2" class="text-blue-600 text-xl mt-0.5"></iconify-icon>
                  <span class="text-slate-700">
                    Memiliki portofolio proyek teknologi yang siap untuk jenjang universitas.
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <iconify-icon icon="lucide:check-circle-2" class="text-blue-600 text-xl mt-0.5"></iconify-icon>
                  <span class="text-slate-700">
                    Keahlian dalam analisis data dan interpretasi hasil riset laboratorium.
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <iconify-icon icon="lucide:check-circle-2" class="text-blue-600 text-xl mt-0.5"></iconify-icon>
                  <span class="text-slate-700">
                    Kecakapan berkomunikasi dalam menyampaikan ide-ide teknis.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar Info -->
          <div class="lg:col-span-1">
            <div class="sticky top-28 space-y-6">
              <div class="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h3 class="text-xl font-bold mb-6">
                  Rincian Biaya
                </h3>
                <div class="space-y-4 mb-8">
                  <div class="flex justify-between items-center">
                    <span class="text-slate-500">Biaya Pendaftaran</span>
                    <span class="font-bold">Rp 1.500.000</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-slate-500">Uang Pangkal (Gedung)</span>
                    <span class="font-bold">Rp 25.000.000</span>
                  </div>
                  <div class="flex justify-between items-center border-t border-slate-100 pt-4">
                    <span class="text-slate-500">SPP per Semester</span>
                    <span class="text-xl font-extrabold text-blue-800">Rp 12.000.000</span>
                  </div>
                </div>

                <div class="bg-blue-50 rounded-2xl p-4 mb-8 flex gap-3 items-start">
                  <iconify-icon icon="lucide:info" class="text-blue-600 text-xl"></iconify-icon>
                  <p class="text-xs text-blue-700 leading-relaxed">
                    Tersedia program beasiswa prestasi hingga 100% biaya pendidikan bagi siswa
                    terpilih. Hubungi bagian administrasi untuk informasi lebih lanjut.
                  </p>
                </div>

                <RouterLink to="/registration" id="enroll-now-btn"
                  class="block w-full text-center py-4 bg-blue-800 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Daftar di Program Ini
                </RouterLink>

                <RouterLink to="/check-status" id="sidebar-campus-tour-btn"
                  class="mt-4 block w-full text-center py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all items-center justify-center gap-2">
                  <iconify-icon icon="lucide:map" class="text-lg"></iconify-icon>
                  Lihat Tur Kampus
                </RouterLink>

                <p class="text-center text-xs text-slate-400 mt-4">
                  Kuota Tersisa: 12 Kursi
                </p>
              </div>

              <div class="bg-slate-900 rounded-3xl p-8 text-white">
                <h4 class="font-bold mb-4">
                  Butuh Bantuan?
                </h4>
                <p class="text-sm text-slate-400 mb-6">
                  Konsultasikan pilihan program pendidikan yang sesuai dengan bakat putra-putri
                  Anda.
                </p>
                <RouterLink to="/contact" id="chat-wa-link"
                  class="flex items-center justify-center gap-2 py-3 border border-slate-700 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                  <iconify-icon icon="lucide:message-circle" class="text-xl"></iconify-icon>
                  WhatsApp CS
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
