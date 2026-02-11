<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <main style="view-transition-name: main-content" class="pt-32 pb-24 px-4">
            <div class="max-w-7xl mx-auto space-y-10">
                <!-- Page header -->
                <section class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                            Portal Orang Tua
                        </p>
                        <h1 class="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                            Parent Portal Nusantara Global
                        </h1>
                        <p class="mt-3 text-slate-600 max-w-2xl">
                            Pantau perkembangan akademik, kehadiran, dan informasi penting
                            putra-putri Anda dalam satu tempat yang rapi dan mudah diakses.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <button type="button"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Status Sistem: Online
                        </button>
                        <button type="button"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800 text-white text-xs font-semibold hover:bg-blue-700">
                            <iconify-icon icon="lucide:smartphone"></iconify-icon>
                            Akses via Mobile App
                        </button>
                    </div>
                </section>

                <!-- Overview cards -->
                <section class="grid md:grid-cols-3 gap-6">
                    <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-sm font-semibold text-slate-900">
                                Kehadiran Hari Ini
                            </h2>
                            <iconify-icon icon="lucide:calendar-check" class="text-blue-700"></iconify-icon>
                        </div>
                        <p class="text-3xl font-extrabold text-blue-800">
                            98%
                        </p>
                        <p class="mt-1 text-xs text-slate-500">
                            Rata-rata kehadiran siswa di kelas hari ini.
                        </p>
                        <div class="mt-4 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full w-[98%] bg-gradient-to-r from-emerald-400 to-blue-600"></div>
                        </div>
                    </article>

                    <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-sm font-semibold text-slate-900">
                                Notifikasi Baru
                            </h2>
                            <iconify-icon icon="lucide:bell" class="text-amber-500"></iconify-icon>
                        </div>
                        <p class="text-3xl font-extrabold text-slate-900">
                            3
                        </p>
                        <p class="mt-1 text-xs text-slate-500">
                            Pengumuman terbaru untuk orang tua minggu ini.
                        </p>
                        <ul class="mt-4 space-y-1.5 text-xs text-slate-600">
                            <li>• Jadwal PTS Semester Genap</li>
                            <li>• Kegiatan Parenting Class</li>
                            <li>• Pembaruan Protokol Kesehatan</li>
                        </ul>
                    </article>

                    <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-sm font-semibold text-slate-900">
                                Rata-rata Nilai
                            </h2>
                            <iconify-icon icon="lucide:line-chart" class="text-emerald-500"></iconify-icon>
                        </div>
                        <p class="text-3xl font-extrabold text-slate-900">
                            87<span class="text-lg align-top">/100</span>
                        </p>
                        <p class="mt-1 text-xs text-slate-500">
                            Nilai rata-rata akademik putra-putri Anda semester ini.
                        </p>
                        <p class="mt-3 inline-flex items-center gap-1 text-xs text-emerald-600">
                            <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
                            Naik 4 poin dari semester lalu.
                        </p>
                    </article>
                </section>

                <!-- Main layout: child list + timeline -->
                <section class="grid lg:grid-cols-3 gap-8">
                    <!-- Children list & quick access -->
                    <section class="lg:col-span-2 space-y-6">
                        <!-- Anak terdaftar -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-sm font-semibold text-slate-900">
                                    Profil Anak
                                </h2>
                                <button type="button" class="text-xs text-blue-700 hover:text-blue-600 font-semibold">
                                    Kelola Akun
                                </button>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between gap-4">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                                            RA
                                        </div>
                                        <div>
                                            <p class="text-sm font-semibold text-slate-900">
                                                Rayhan Aditia
                                            </p>
                                            <p class="text-xs text-slate-500">
                                                Kelas XI IPA 1 • NIS: 2024-001
                                            </p>
                                        </div>
                                    </div>
                                    <button type="button"
                                        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 text-[11px] font-semibold text-blue-800">
                                        <iconify-icon icon="lucide:eye"></iconify-icon>
                                        Lihat Detail
                                    </button>
                                </div>

                                <div class="flex items-center justify-between gap-4">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-sm font-bold">
                                            NS
                                        </div>
                                        <div>
                                            <p class="text-sm font-semibold text-slate-900">
                                                Nadhira Salsabila
                                            </p>
                                            <p class="text-xs text-slate-500">
                                                Kelas VII • NIS: 2022-117
                                            </p>
                                        </div>
                                    </div>
                                    <button type="button"
                                        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-50 text-[11px] font-semibold text-slate-700 hover:bg-slate-100">
                                        Jadikan Utama
                                    </button>
                                </div>
                            </div>
                        </article>

                        <!-- Aktivitas terkini -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-sm font-semibold text-slate-900">
                                    Aktivitas Terbaru
                                </h2>
                                <span class="text-xs text-slate-400">
                                    7 hari terakhir
                                </span>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <div
                                        class="mt-0.5 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                        <iconify-icon icon="lucide:clipboard-list"
                                            class="text-blue-700 text-sm"></iconify-icon>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-xs font-semibold text-slate-900">
                                            Nilai tugas Matematika telah diperbarui.
                                        </p>
                                        <p class="text-[11px] text-slate-500">
                                            Rayhan memperoleh skor 92/100 pada tugas limit fungsi.
                                        </p>
                                        <p class="mt-1 text-[10px] text-slate-400">
                                            2 jam yang lalu
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div
                                        class="mt-0.5 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <iconify-icon icon="lucide:smile-plus"
                                            class="text-emerald-600 text-sm"></iconify-icon>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-xs font-semibold text-slate-900">
                                            Poin kedisiplinan bertambah.
                                        </p>
                                        <p class="text-[11px] text-slate-500">
                                            Nadhira mendapat +5 poin karena kehadiran penuh bulan ini.
                                        </p>
                                        <p class="mt-1 text-[10px] text-slate-400">
                                            Kemarin
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div
                                        class="mt-0.5 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                                        <iconify-icon icon="lucide:megaphone"
                                            class="text-amber-500 text-sm"></iconify-icon>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-xs font-semibold text-slate-900">
                                            Undangan pertemuan orang tua dan wali kelas.
                                        </p>
                                        <p class="text-[11px] text-slate-500">
                                            Pertemuan akan dilaksanakan Sabtu, 23 Maret 2024 pukul 09.00 WIB.
                                        </p>
                                        <p class="mt-1 text-[10px] text-slate-400">
                                            3 hari yang lalu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>

                    <!-- Quick tools sidebar -->
                    <aside class="space-y-6">
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                            <h2 class="text-sm font-semibold text-slate-900 mb-4">
                                Akses Cepat
                            </h2>
                            <div class="space-y-3 text-xs">
                                <button type="button"
                                    class="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-2xl bg-slate-50 hover:bg-blue-50 text-slate-800">
                                    <span class="inline-flex items-center gap-2">
                                        <iconify-icon icon="lucide:clipboard-list"></iconify-icon>
                                        Laporan Nilai Terbaru
                                    </span>
                                    <iconify-icon icon="lucide:arrow-right" class="text-slate-400"></iconify-icon>
                                </button>
                                <button type="button"
                                    class="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-2xl bg-slate-50 hover:bg-blue-50 text-slate-800">
                                    <span class="inline-flex items-center gap-2">
                                        <iconify-icon icon="lucide:calendar-days"></iconify-icon>
                                        Jadwal Pelajaran &amp; Ujian
                                    </span>
                                    <iconify-icon icon="lucide:arrow-right" class="text-slate-400"></iconify-icon>
                                </button>
                                <button type="button"
                                    class="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-2xl bg-slate-50 hover:bg-blue-50 text-slate-800">
                                    <span class="inline-flex items-center gap-2">
                                        <iconify-icon icon="lucide:wallet-cards"></iconify-icon>
                                        Informasi Pembayaran
                                    </span>
                                    <iconify-icon icon="lucide:arrow-right" class="text-slate-400"></iconify-icon>
                                </button>
                            </div>
                        </article>

                        <article class="bg-slate-900 rounded-3xl text-white p-6">
                            <h2 class="text-sm font-semibold mb-3">
                                Hubungi Wali Kelas
                            </h2>
                            <p class="text-xs text-slate-300 mb-4">
                                Konsultasikan perkembangan putra-putri Anda langsung dengan wali
                                kelas melalui kanal resmi sekolah.
                            </p>
                            <div class="space-y-2 text-xs">
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:user-2"></iconify-icon>
                                    <span>Bu Rina Kartika • XI IPA 1</span>
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:phone"></iconify-icon>
                                    <span>+62 812-3456-7890 (Jam kerja)</span>
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:mail"></iconify-icon>
                                    <span>rina.kartika@nusantaraglobal.sch.id</span>
                                </p>
                            </div>
                            <button type="button"
                                class="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-blue-600 text-xs font-semibold hover:bg-blue-500">
                                Kirim Pesan
                                <iconify-icon icon="lucide:message-circle"></iconify-icon>
                            </button>
                        </article>
                    </aside>
                </section>
            </div>
        </main>

        <Footer />
    </div>
</template>
