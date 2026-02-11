<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { usePageMeta } from '../services/usePageMeta'

usePageMeta({
  title: 'Alumni Network - Nusantara Global Academy',
  description:
    'Jejaring Alumni Nusantara Global Academy menghubungkan lulusan yang berkiprah di berbagai bidang industri, akademik, dan sosial di seluruh dunia.'
})
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <main style="view-transition-name: main-content" class="pt-32 pb-24 px-4 md:px-8">
            <div class="container mx-auto space-y-12">
                <!-- Page header -->
                <section class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div class="space-y-2">
                        <p class="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-blue-700">
                            Jejaring Alumni
                        </p>
                        <h1 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900">
                            Alumni Network Nusantara Global
                        </h1>
                        <p class="mt-4 text-sm md:text-base text-slate-600 max-w-2xl">
                            Terhubung dengan para alumni yang berkiprah di berbagai bidang
                            industri, akademik, dan sosial di seluruh dunia.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-3 text-sm md:text-base">
                        <button type="button"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm md:text-base font-semibold text-slate-700 hover:bg-slate-100">
                            <iconify-icon icon="lucide:users-2"></iconify-icon>
                            2.300+ Alumni Terdaftar
                        </button>
                        <button type="button"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800 text-white text-xs font-semibold hover:bg-blue-700">
                            <iconify-icon icon="lucide:log-in"></iconify-icon>
                            Masuk Portal Alumni
                        </button>
                    </div>
                </section>

                <!-- Stats row -->
                <section class="grid md:grid-cols-3 gap-6">
                    <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                        <p class="text-xs font-semibold text-slate-500">
                            Alumni di Luar Negeri
                        </p>
                        <p class="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
                            420<span class="text-xl md:text-2xl align-top">+</span>
                        </p>
                        <p class="mt-2 text-sm text-slate-500">
                            Menempuh studi atau bekerja di 18 negara berbeda.
                        </p>
                    </article>

                    <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                        <p class="text-xs md:text-sm font-semibold text-slate-500">
                            Founder &amp; Entrepreneur
                        </p>
                        <p class="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
                            130<span class="text-xl md:text-2xl align-top">+</span>
                        </p>
                        <p class="mt-2 text-sm text-slate-500">
                            Mendirikan startup, UMKM, dan organisasi sosial berdampak.
                        </p>
                    </article>

                    <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                        <p class="text-xs md:text-sm font-semibold text-slate-500">
                            Program Mentoring Aktif
                        </p>
                        <p class="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
                            56
                        </p>
                        <p class="mt-2 text-sm text-slate-500">
                            Siswa dibimbing langsung oleh alumni setiap semester.
                        </p>
                    </article>
                </section>

                <!-- Main content -->
                <section class="grid lg:grid-cols-3 gap-8">
                    <!-- Alumni highlight & events -->
                    <section class="lg:col-span-2 space-y-6">
                        <!-- Highlight alumni -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                    Alumni Highlight
                                </h2>
                                <span class="text-sm text-slate-400">
                                    Edisi Maret 2024
                                </span>
                            </div>

                            <div class="grid sm:grid-cols-[auto,1fr] gap-5 items-start">
                                <div
                                    class="w-20 h-20 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                                    AZ
                                </div>
                                <div>
                                    <p class="text-base md:text-lg font-semibold text-slate-900">
                                        Azzahra Putri • Angkatan 2015
                                    </p>
                                    <p class="text-sm text-slate-500">
                                        Product Manager • EduTech Startup, Singapura
                                    </p>
                                    <p class="mt-4 text-sm md:text-base text-slate-600">
                                        “Pengalaman belajar di Nusantara Global mengajarkan saya
                                        untuk selalu berpikir kritis dan berkolaborasi lintas
                                        disiplin. Hal itu menjadi bekal utama saya dalam
                                        mengembangkan produk yang berdampak bagi pendidikan di
                                        Asia Tenggara.”
                                    </p>
                                    <div class="mt-4 flex flex-wrap gap-2 text-xs md:text-sm">
                                        <span class="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold">
                                            Beasiswa Penuh NUS
                                        </span>
                                        <span
                                            class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                                            Mentor Karier
                                        </span>
                                        <span
                                            class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">
                                            Tech &amp; Education
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <!-- Upcoming events -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                    Kegiatan &amp; Program Alumni
                                </h2>
                                <button type="button" class="text-sm text-blue-700 hover:text-blue-600 font-semibold">
                                    Lihat Semua Jadwal
                                </button>
                            </div>

                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <div class="mt-0.5 w-9 h-9 rounded-2xl bg-blue-50 flex items-center justify-center">
                                        <iconify-icon icon="lucide:mic" class="text-blue-700 text-sm"></iconify-icon>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm md:text-base font-semibold text-slate-900">
                                            Alumni Talk: Karier di Dunia Data Science
                                        </p>
                                        <p class="text-xs md:text-sm text-slate-500">
                                            Bersama Kak Dimas (Angkatan 2013), Data Scientist di
                                            perusahaan teknologi global.
                                        </p>
                                        <p class="mt-1 text-[11px] md:text-xs text-slate-400">
                                            Sabtu, 16 Maret 2024 • 10.00 WIB • Hybrid (Aula + Zoom)
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div
                                        class="mt-0.5 w-9 h-9 rounded-2xl bg-emerald-50 flex items-center justify-center">
                                        <iconify-icon icon="lucide:hand-heart"
                                            class="text-emerald-600 text-sm"></iconify-icon>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm md:text-base font-semibold text-slate-900">
                                            Alumni Back to School: Sharing Session Kelas XI
                                        </p>
                                        <p class="text-xs md:text-sm text-slate-500">
                                            Alumni dari berbagai kampus datang untuk berbagi tips
                                            persiapan kuliah dan beasiswa.
                                        </p>
                                        <p class="mt-1 text-[11px] md:text-xs text-slate-400">
                                            Jumat, 22 Maret 2024 • 13.30 WIB • Ruang Multimedia
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div
                                        class="mt-0.5 w-9 h-9 rounded-2xl bg-amber-50 flex items-center justify-center">
                                        <iconify-icon icon="lucide:globe-2"
                                            class="text-amber-500 text-sm"></iconify-icon>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm md:text-base font-semibold text-slate-900">
                                            Alumni Global Networking Night
                                        </p>
                                        <p class="text-xs md:text-sm text-slate-500">
                                            Sesi networking online lintas negara untuk alumni yang
                                            bekerja di luar negeri.
                                        </p>
                                        <p class="mt-1 text-[11px] md:text-xs text-slate-400">
                                            Sabtu, 6 April 2024 • 19.00 WIB • Online (Zoom)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>

                    <!-- Sidebar: map & join -->
                    <aside class="space-y-6">
                        <!-- Simple world map card (static) -->
                        <article class="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden">
                            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl">
                            </div>
                            <h2 class="text-base md:text-lg font-semibold mb-2">
                                Sebaran Alumni Dunia
                            </h2>
                            <p class="text-sm text-slate-300 mb-4">
                                Banyak alumni kami yang kini berkontribusi di pusat-pusat
                                pendidikan dan industri global.
                            </p>
                            <div
                                class="aspect-4/3 rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-xs md:text-sm text-slate-400">
                                <span class="opacity-70">
                                    (Ilustrasi peta dunia alumni)
                                </span>
                            </div>
                            <p class="mt-3 text-xs md:text-sm text-slate-300">
                                Negara tujuan populer: Singapura, Jepang, Australia, Inggris,
                                dan Belanda.
                            </p>
                        </article>

                        <!-- Join network card -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900 mb-2">
                                Bergabung dengan Jejaring Alumni
                            </h2>
                            <p class="text-sm text-slate-600 mb-4">
                                Anda alumni Nusantara Global? Daftarkan diri Anda untuk
                                mendapatkan informasi eksklusif dan kesempatan berkolaborasi.
                            </p>
                            <div class="space-y-2 text-sm text-slate-600">
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:check-circle-2" class="text-emerald-500"></iconify-icon>
                                    Undangan acara alumni dan reuni.
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:check-circle-2" class="text-emerald-500"></iconify-icon>
                                    Program mentoring siswa &amp; sharing karier.
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:check-circle-2" class="text-emerald-500"></iconify-icon>
                                    Akses direktori kontak alumni.
                                </p>
                            </div>
                                <button type="button"
                                class="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-blue-800 text-white text-sm md:text-base font-semibold hover:bg-blue-700">
                                Daftarkan Sebagai Alumni
                                <iconify-icon icon="lucide:arrow-right-circle"></iconify-icon>
                            </button>
                        </article>
                    </aside>
                </section>
            </div>
        </main>

        <Footer />
    </div>
</template>
