<script setup lang="ts">
</script>

<template>
  <!-- Footer -->
  <footer
    class="bg-white pt-20 pb-10 border-t border-slate-100"
    style="view-transition-name: main-footer"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <div
              class="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center"
            >
              <iconify-icon
                icon="lucide:graduation-cap"
                class="text-white text-lg"
              ></iconify-icon>
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
              <a href="#" id="footer-home-link">Beranda</a>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <a href="#tentang" id="footer-about-link">Tentang Kami</a>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <a
                href="https://p.superdesign.dev/draft/f1744e7f-8692-4491-af9f-64d699bd9a93"
                id="footer-program-link"
              >
                Program Akademik
              </a>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <a
                href="https://p.superdesign.dev/draft/58db06bd-7af7-4ec6-be12-8b005183b3e3"
                id="footer-facility-link"
              >
                Fasilitas Kampus
              </a>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <a
                href="https://p.superdesign.dev/draft/d4531f37-751d-49f4-a9b5-6b4d2c804a58"
                id="footer-reg-link"
              >
                Pendaftaran
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6">Layanan</h4>
          <ul class="space-y-4 text-slate-500 text-sm">
            <li class="hover:text-blue-800 transition-colors">
              <a
                href="https://p.superdesign.dev/draft/6d94df9b-c0e2-4dae-8843-4e2a18a11d25"
                id="footer-status-link"
              >
                Cek Status Pendaftaran
              </a>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <a href="#" id="footer-parent-link">Parent Portal</a>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <a href="#" id="footer-library-link">E-Library</a>
            </li>
            <li class="hover:text-blue-800 transition-colors">
              <a href="#" id="footer-alumni-link">Alumni Network</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6">Berita Terbaru</h4>
          <div class="space-y-4 text-sm">
            <a href="#" id="news-link-1" class="block group">
              <p
                class="text-slate-500 group-hover:text-blue-800 transition-colors"
              >
                Pemenang Olimpiade Sains Nasional 2023
              </p>
              <span
                class="text-[10px] text-slate-400 font-medium uppercase tracking-widest"
              >
                12 Jan 2024
              </span>
            </a>
            <a href="#" id="news-link-2" class="block group">
              <p
                class="text-slate-500 group-hover:text-blue-800 transition-colors"
              >
                Kunjungan Industri ke Silicon Valley Jakarta
              </p>
              <span
                class="text-[10px] text-slate-400 font-medium uppercase tracking-widest"
              >
                05 Jan 2024
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-slate-400 text-sm">
          &copy; 2024 Nusantara Global Academy. Seluruh Hak Cipta Dilindungi.
        </p>
        <div class="flex gap-8 text-xs text-slate-400 font-medium">
          <a href="#" id="policy-link" class="hover:text-blue-800">
            Kebijakan Privasi
          </a>
          <a href="#" id="terms-link" class="hover:text-blue-800">
            Syarat & Ketentuan
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

