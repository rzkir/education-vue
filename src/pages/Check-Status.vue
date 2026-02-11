<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useStateRegistration } from '../services/useStateRegistration'
import { usePageMeta } from '../services/usePageMeta'

const registration = ref<RegistrationPayload | null>(null)
const { loadFromLocalStorage } = useStateRegistration()

usePageMeta({
  title: 'Status Pendaftaran - Nusantara Global Academy',
  description:
    'Lihat status terbaru pendaftaran PPDB Anda di Nusantara Global Academy, termasuk verifikasi berkas dan tahapan seleksi berikutnya.'
})

onMounted(() => {
  registration.value = loadFromLocalStorage()
})
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <Header />

        <main class="flex-1 pt-32 pb-20" style="view-transition-name: main-content">
            <div class="container mx-auto px-4 md:px-8">
                <!-- Page Header -->
                <div class="mb-10 text-center md:text-left">
                    <h1 class="text-3xl font-extrabold text-slate-900">
                        Status Pendaftaran
                    </h1>
                    <p class="text-slate-500 mt-2" v-if="registration">
                        ID Pendaftaran:
                        <span class="font-bold text-blue-800">
                            {{ registration.id }}
                        </span>
                        • Nama:
                        <span class="font-semibold">
                            {{ registration.student?.fullName || 'Calon Peserta Didik' }}
                        </span>
                    </p>
                    <p class="text-slate-500 mt-2" v-else>
                        Belum ada data pendaftaran tersimpan. Silakan isi formulir
                        pendaftaran terlebih dahulu.
                    </p>
                </div>

                <div v-if="registration" class="grid lg:grid-cols-3 gap-8">
                    <!-- Left Column: Timeline & Status -->
                    <div class="lg:col-span-2 space-y-8">
                        <!-- Status Card -->
                        <section class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                            <div class="flex items-center gap-4 mb-8">
                                <div
                                    class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <iconify-icon icon="lucide:loader-2"
                                        class="text-2xl text-blue-700 animate-spin"></iconify-icon>
                                </div>
                                <div>
                                    <h2 class="text-xl font-bold">
                                        Menunggu Verifikasi Berkas
                                    </h2>
                                    <p class="text-sm text-slate-500">
                                        Tim admisi sedang memverifikasi dokumen yang Anda unggah.
                                    </p>
                                </div>
                            </div>

                            <!-- Timeline -->
                            <div class="relative flex flex-col gap-8 ml-6">
                                <div class="absolute top-2 bottom-2 -left-6bg-slate-100"></div>

                                <!-- Step 1 -->
                                <div class="relative flex items-start gap-4">
                                    <div
                                        class="absolute left-[-2.05rem] w-4 h-4 rounded-full bg-blue-800 border-4 border-blue-100 z-10">
                                    </div>
                                    <div>
                                        <p class="text-xs font-bold uppercase tracking-wider text-blue-800">
                                            Selesai
                                        </p>
                                        <h4 class="font-bold">Pendaftaran Online</h4>
                                        <p class="text-sm text-slate-500">
                                            Data awal berhasil dikirim.
                                        </p>
                                    </div>
                                </div>

                                <!-- Step 2 -->
                                <div class="relative flex items-start gap-4">
                                    <div
                                        class="absolute left-[-2.05rem] w-4 h-4 rounded-full bg-blue-800 animate-pulse z-10">
                                    </div>
                                    <div>
                                        <p class="text-xs font-bold uppercase tracking-wider text-blue-800">
                                            Proses
                                        </p>
                                        <h4 class="font-bold">Verifikasi Berkas</h4>
                                        <p class="text-sm text-slate-500">
                                            Sedang dilakukan pengecekan keabsahan dokumen.
                                        </p>
                                    </div>
                                </div>

                                <!-- Step 3 -->
                                <div class="relative flex items-start gap-4">
                                    <div class="absolute left-[-2.05rem] w-4 h-4 rounded-full bg-slate-200 z-10"></div>
                                    <div class="opacity-40">
                                        <p class="text-xs font-bold uppercase tracking-wider">
                                            Mendatang
                                        </p>
                                        <h4 class="font-bold">Tes Potensi Akademik</h4>
                                        <p class="text-sm text-slate-500">
                                            Jadwal akan muncul setelah berkas terverifikasi.
                                        </p>
                                    </div>
                                </div>

                                <!-- Step 4 -->
                                <div class="relative flex items-start gap-4">
                                    <div class="absolute left-[-2.05rem] w-4 h-4 rounded-full bg-slate-200 z-10"></div>
                                    <div class="opacity-40">
                                        <p class="text-xs font-bold uppercase tracking-wider">
                                            Mendatang
                                        </p>
                                        <h4 class="font-bold">Pengumuman Akhir</h4>
                                        <p class="text-sm text-slate-500">
                                            Direncanakan pada 15 Juli 2024.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Next Steps -->
                        <section class="bg-blue-800 rounded-3xl p-8 text-white shadow-xl shadow-blue-200">
                            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                                <iconify-icon icon="lucide:info"></iconify-icon>
                                Langkah Selanjutnya
                            </h3>
                            <p class="text-blue-100 mb-6">
                                Mohon pastikan nomor telepon dan email Anda aktif. Tim admisi
                                akan menghubungi Anda jika terdapat berkas yang tidak terbaca
                                atau memerlukan revisi.
                            </p>
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <h5 class="text-sm font-bold mb-1">
                                        Estimasi Waktu
                                    </h5>
                                    <p class="text-xs text-blue-200">
                                        Verifikasi memakan waktu 2-3 hari kerja.
                                    </p>
                                </div>
                                <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <h5 class="text-sm font-bold mb-1">
                                        Pengumuman Lolos
                                    </h5>
                                    <p class="text-xs text-blue-200">
                                        Akan diinfokan melalui Dashboard &amp; WhatsApp.
                                    </p>
                                </div>
                            </div>
                            <div class="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                                <RouterLink to="/registration" id="btn-back-to-reg"
                                    class="flex-1 sm:flex-none text-center px-6 py-3 bg-white text-blue-800 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all">
                                    Kembali ke Pendaftaran
                                </RouterLink>
                                <a href="https://p.superdesign.dev/draft/58db06bd-7af7-4ec6-be12-8b005183b3e3"
                                    id="btn-view-campus"
                                    class="flex-1 sm:flex-none text-center px-6 py-3 bg-blue-700 text-white rounded-xl font-bold text-sm border border-blue-600 hover:bg-blue-600 transition-all">
                                    Lihat Kampus
                                </a>
                            </div>
                        </section>
                    </div>

                    <!-- Right Column: Document Checklist -->
                    <aside class="space-y-6">
                        <section class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h3 class="text-lg font-bold mb-6 flex items-center gap-2">
                                <iconify-icon icon="lucide:clipboard-check" class="text-blue-800"></iconify-icon>
                                Cek Berkas
                            </h3>
                            <ul class="space-y-4">
                                <li class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <iconify-icon icon="lucide:check-circle-2"
                                            class="text-green-500 text-xl"></iconify-icon>
                                        <span class="text-sm font-medium">Ijazah / SKL</span>
                                    </div>
                                    <span
                                        class="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded uppercase">Valid</span>
                                </li>
                                <li class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <iconify-icon icon="lucide:check-circle-2"
                                            class="text-green-500 text-xl"></iconify-icon>
                                        <span class="text-sm font-medium">Akte Kelahiran</span>
                                    </div>
                                    <span
                                        class="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded uppercase">Valid</span>
                                </li>
                                <li class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <iconify-icon icon="lucide:check-circle-2"
                                            class="text-green-500 text-xl"></iconify-icon>
                                        <span class="text-sm font-medium">Kartu Keluarga</span>
                                    </div>
                                    <span
                                        class="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded uppercase">Valid</span>
                                </li>
                                <li class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <iconify-icon icon="lucide:alert-circle"
                                            class="text-yellow-500 text-xl"></iconify-icon>
                                        <span class="text-sm font-medium">Pas Foto 3x4</span>
                                    </div>
                                    <span
                                        class="text-[10px] font-bold bg-yellow-50 text-yellow-600 px-2 py-1 rounded uppercase">Pending</span>
                                </li>
                                <li class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <iconify-icon icon="lucide:check-circle-2"
                                            class="text-green-500 text-xl"></iconify-icon>
                                        <span class="text-sm font-medium">Rapor Terakhir</span>
                                    </div>
                                    <span
                                        class="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded uppercase">Valid</span>
                                </li>
                            </ul>
                            <button
                                class="w-full mt-6 py-3 bg-slate-50 border border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">
                                Unduh Bukti Pendaftaran
                            </button>
                        </section>

                        <!-- Support Card -->
                        <section class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h3 class="text-lg font-bold mb-4">
                                Butuh Bantuan?
                            </h3>
                            <p class="text-sm text-slate-500 mb-6">
                                Jika ada kendala dalam proses pendaftaran, silakan hubungi kami:
                            </p>
                            <div class="space-y-4">
                                <a href="tel:+622155501234"
                                    class="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                                    <div
                                        class="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 shrink-0">
                                        <iconify-icon icon="lucide:phone-call"
                                            class="text-blue-800 text-lg"></iconify-icon>
                                    </div>
                                    <div>
                                        <p class="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                            Call Center
                                        </p>
                                        <p class="text-sm font-bold text-slate-700">
                                            +62 21 5550 1234
                                        </p>
                                    </div>
                                </a>
                                <a href="mailto:admisi@nusantaraglobal.sch.id"
                                    class="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                                    <div
                                        class="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 shrink-0">
                                        <iconify-icon icon="lucide:mail" class="text-blue-800 text-lg"></iconify-icon>
                                    </div>
                                    <div>
                                        <p class="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                            Email Support
                                        </p>
                                        <p class="text-sm font-bold text-slate-700">
                                            admisi@nusantaraglobal.sch.id
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </aside>
                </div>

                <!-- Empty state -->
                <div v-else class="container mx-auto text-center mt-8">
                    <p class="text-slate-600 mb-6">
                        Untuk melihat status pendaftaran, silakan isi formulir
                        pendaftaran terlebih dahulu.
                    </p>
                    <RouterLink to="/registration"
                        class="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                        Buka Formulir Pendaftaran
                    </RouterLink>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>
