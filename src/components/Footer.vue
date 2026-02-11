<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Footer -->
  <footer class="bg-white pt-10 md:pt-20 pb-10 border-t border-slate-100" style="view-transition-name: main-footer">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
              <iconify-icon icon="lucide:graduation-cap" class="text-white text-lg"></iconify-icon>
            </div>
            <span class="text-lg font-bold tracking-tight text-blue-900">
              NUSANTARA<span class="font-light">GLOBAL</span>
            </span>
          </div>
          <p class="text-slate-500 mb-6 leading-relaxed">
            Membangun generasi cerdas, berkarakter, dan siap menghadapi
            tantangan global melalui sistem pendidikan yang inovatif.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6">Tautan Cepat</h4>
          <ul class="space-y-4 text-slate-500 text-sm">
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/" id="footer-home-link">Beranda</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/tentang-kami" id="footer-about-link">Tentang Kami</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/program" id="footer-program-link">Program Akademik</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/fasilitas" id="footer-facility-link">Fasilitas Kampus</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/contact" id="footer-contact-link">Hubungi Kami</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/registration" id="footer-reg-link">Pendaftaran</RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6">Layanan</h4>
          <ul class="space-y-4 text-slate-500 text-sm">
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/check-status" id="footer-status-link">Cek Status Pendaftaran</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/parent-portal" id="footer-parent-link">Parent Portal</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/e-library" id="footer-library-link">E-Library</RouterLink>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <RouterLink to="/alumni-network" id="footer-alumni-link">Alumni Network</RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6">Berita Terbaru</h4>
          <div class="space-y-4 text-sm">
            <RouterLink to="/news-link-1" id="news-link-1" class="block group">
              <p class="text-slate-500 group-hover:text-blue-800 transition-colors">
                Pemenang Olimpiade Sains Nasional 2023
              </p>
              <span class="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                12 Jan 2024
              </span>
            </RouterLink>
            <RouterLink to="/news-link-2" id="news-link-2" class="block group">
              <p class="text-slate-500 group-hover:text-blue-800 transition-colors">
                Kunjungan Industri ke Silicon Valley Jakarta
              </p>
              <span class="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                05 Jan 2024
              </span>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-400 text-sm">
          &copy; 2026 Nusantara Global Academy. Seluruh Hak Cipta Dilindungi.
        </p>
        <div class="flex gap-8 text-xs text-slate-400 font-medium">
          <RouterLink to="/kebijakan-privasi" id="policy-link" class="hover:text-blue-800">
            Kebijakan Privasi
          </RouterLink>
          <RouterLink to="/syarat-ketentuan" id="terms-link" class="hover:text-blue-800">
            Syarat & Ketentuan
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
