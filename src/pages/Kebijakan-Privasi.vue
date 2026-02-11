<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { usePageMeta } from '../services/usePageMeta'

usePageMeta({
  title: 'Kebijakan Privasi - Nusantara Global Academy',
  description:
    'Baca Kebijakan Privasi Nusantara Global Academy untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi siswa, orang tua, dan pengunjung situs.'
})
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <main style="view-transition-name: main-content" class="pt-32 pb-24 px-4 md:px-8">
            <div class="container mx-auto space-y-10">
                <!-- Page header -->
                <section class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p class="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-blue-700">
                            Informasi Hukum
                        </p>
                        <h1 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900">
                            Kebijakan Privasi
                        </h1>
                        <p class="mt-4 text-sm md:text-base text-slate-600 max-w-2xl">
                            Kami berkomitmen untuk melindungi privasi dan data pribadi siswa, orang tua, dan
                            pengunjung situs Nusantara Global. Halaman ini menjelaskan cara kami mengumpulkan,
                            menggunakan, menyimpan, dan melindungi informasi tersebut.
                        </p>
                    </div>

                    <aside class="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6 max-w-sm">
                        <p class="text-xs md:text-sm font-semibold text-slate-900">
                            Pokok Kebijakan
                        </p>
                        <ul class="mt-3 space-y-2 text-xs md:text-sm text-slate-600">
                            <li>• Data digunakan untuk mendukung proses pendidikan.</li>
                            <li>• Kami tidak menjual data pribadi kepada pihak ketiga.</li>
                            <li>• Anda memiliki hak untuk meminta koreksi dan penghapusan data.</li>
                        </ul>
                        <p class="mt-4 text-[11px] md:text-xs text-slate-400">
                            Terakhir diperbarui: Maret 2024
                        </p>
                    </aside>
                </section>

                <!-- Main content -->
                <section class="grid lg:grid-cols-3 gap-8">
                    <section class="lg:col-span-2 space-y-6">
                        <!-- Jenis data -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                1. Data Apa yang Kami Kumpulkan?
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    Kami dapat mengumpulkan beberapa jenis informasi berikut sehubungan dengan
                                    layanan pendidikan dan administrasi sekolah:
                                </p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Data identitas dasar: nama siswa, NIS, tanggal lahir, dan kelas.</li>
                                    <li>Data kontak orang tua/wali: nama, nomor telepon, alamat email.</li>
                                    <li>Data akademik: nilai, kehadiran, dan riwayat kegiatan belajar.</li>
                                    <li>
                                        Data penggunaan sistem: aktivitas login, halaman yang diakses, dan
                                        perangkat yang digunakan secara umum.
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <!-- Penggunaan data -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                2. Bagaimana Kami Menggunakan Data?
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>Data pribadi digunakan untuk keperluan berikut:</p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Mengelola proses belajar mengajar dan penilaian akademik.</li>
                                    <li>Menyediakan akses ke Parent Portal, E‑Library, dan layanan digital lain.
                                    </li>
                                    <li>Mengirimkan informasi penting terkait kegiatan sekolah dan pengumuman.
                                    </li>
                                    <li>
                                        Melakukan analisis internal untuk peningkatan mutu layanan pendidikan dan
                                        pengalaman pengguna.
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <!-- Berbagi data -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                3. Berbagi Data dengan Pihak Ketiga
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    Kami tidak menjual atau menyewakan data pribadi kepada pihak ketiga. Data
                                    hanya dapat dibagikan kepada:
                                </p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Penyedia layanan teknologi yang bekerja sama dengan sekolah (misalnya
                                        penyedia hosting atau platform pembelajaran), dengan kewajiban menjaga
                                        kerahasiaan data.</li>
                                    <li>Instansi pemerintah atau penegak hukum apabila diwajibkan oleh
                                        peraturan perundang‑undangan.</li>
                                </ul>
                                <p>
                                    Kami memastikan bahwa setiap pihak ketiga yang menerima akses data terikat
                                    pada standar keamanan dan kerahasiaan yang memadai.
                                </p>
                            </div>
                        </article>

                        <!-- Keamanan data -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                4. Keamanan &amp; Penyimpanan Data
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    Kami menggunakan langkah‑langkah yang wajar secara teknis dan
                                    organisatoris untuk melindungi data pribadi dari akses tidak sah, kehilangan,
                                    atau penyalahgunaan, termasuk:
                                </p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Pembatasan akses sistem hanya kepada pihak yang berwenang.</li>
                                    <li>Penggunaan kata sandi yang aman dan enkripsi pada saluran tertentu.</li>
                                    <li>Audit berkala terhadap sistem informasi yang digunakan sekolah.</li>
                                </ul>
                                <p>
                                    Data akan disimpan selama masih diperlukan untuk tujuan pendidikan dan
                                    administrasi, atau selama diwajibkan oleh ketentuan peraturan yang berlaku.
                                </p>
                            </div>
                        </article>

                        <!-- Hak orang tua & siswa -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                5. Hak Orang Tua &amp; Siswa
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    Orang tua/wali dan siswa (sesuai ketentuan yang berlaku) memiliki hak
                                    terhadap data pribadinya, termasuk:
                                </p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Hak untuk mengakses ringkasan data pribadi yang tersimpan.</li>
                                    <li>Hak untuk meminta perbaikan apabila data tidak akurat atau tidak
                                        lengkap.</li>
                                    <li>Hak untuk meminta penghapusan data tertentu sejauh diizinkan oleh
                                        regulasi.</li>
                                </ul>
                                <p>
                                    Permintaan terkait hak‑hak tersebut dapat diajukan melalui kontak resmi
                                    sekolah yang tercantum di bawah.
                                </p>
                            </div>
                        </article>

                        <!-- Persetujuan & pembaruan -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                6. Persetujuan &amp; Pembaruan Kebijakan
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    Dengan menggunakan situs dan layanan digital Nusantara Global, Anda
                                    menyatakan telah membaca dan menyetujui Kebijakan Privasi ini.
                                </p>
                                <p>
                                    Kebijakan ini dapat diperbarui sewaktu‑waktu untuk menyesuaikan dengan
                                    perkembangan regulasi maupun peningkatan layanan. Perubahan penting akan
                                    diinformasikan melalui situs atau kanal komunikasi resmi sekolah.
                                </p>
                            </div>
                        </article>

                        <!-- Kontak -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                7. Kontak Terkait Privasi
                            </h2>
                            <p class="mt-3 text-sm md:text-base text-slate-600">
                                Apabila Anda memiliki pertanyaan, masukan, atau permintaan terkait data pribadi
                                dan Kebijakan Privasi ini, silakan menghubungi pihak sekolah melalui halaman
                                Kontak atau alamat email resmi administrasi. Kami akan berupaya memberikan
                                tanggapan secepat dan sejelas mungkin.
                            </p>
                        </article>
                    </section>

                    <!-- Sidebar secondary info -->
                    <aside class="space-y-6">
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6">
                            <h2 class="text-sm md:text-base font-semibold text-slate-900">
                                Perlindungan Anak
                            </h2>
                            <p class="mt-3 text-xs md:text-sm text-slate-600">
                                Data pribadi siswa diperlakukan dengan perhatian khusus. Kami mendorong orang
                                tua/wali untuk terlibat aktif memantau penggunaan akun dan layanan digital
                                sekolah oleh putra‑putrinya.
                            </p>
                        </article>

                        <article class="bg-slate-900 text-white rounded-3xl p-5 md:p-6">
                            <h2 class="text-sm md:text-base font-semibold">
                                Keterkaitan dengan Syarat &amp; Ketentuan
                            </h2>
                            <p class="mt-3 text-xs md:text-sm text-slate-300">
                                Kebijakan Privasi ini dibaca bersama dengan Syarat &amp; Ketentuan penggunaan
                                layanan Nusantara Global. Apabila terdapat perbedaan penafsiran, sekolah akan
                                memberikan klarifikasi melalui kanal resmi.
                            </p>
                        </article>
                    </aside>
                </section>
            </div>
        </main>

        <Footer />
    </div>
</template>
