<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { usePageMeta } from '../services/usePageMeta'

usePageMeta({
  title: 'Syarat & Ketentuan - Nusantara Global Academy',
  description:
    'Pelajari Syarat & Ketentuan penggunaan situs dan layanan digital Nusantara Global Academy sebelum menggunakan portal dan sistem kami.'
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
                            Syarat &amp; Ketentuan
                        </h1>
                        <p class="mt-4 text-sm md:text-base text-slate-600 max-w-2xl">
                            Halaman ini menjelaskan ketentuan penggunaan layanan situs dan portal digital
                            Nusantara Global. Dengan mengakses atau menggunakan layanan, Anda dianggap telah
                            membaca, memahami, dan menyetujui seluruh syarat yang berlaku.
                        </p>
                    </div>

                    <aside class="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6 max-w-sm">
                        <p class="text-xs md:text-sm font-semibold text-slate-900">
                            Ringkasan Singkat
                        </p>
                        <ul class="mt-3 space-y-2 text-xs md:text-sm text-slate-600">
                            <li>• Gunakan layanan dengan cara yang bertanggung jawab.</li>
                            <li>• Jaga kerahasiaan akun dan kata sandi Anda.</li>
                            <li>• Konten pembelajaran hanya untuk keperluan pendidikan.</li>
                            <li>• Sekolah berhak memperbarui syarat sewaktu-waktu.</li>
                        </ul>
                        <p class="mt-4 text-[11px] md:text-xs text-slate-400">
                            Terakhir diperbarui: Maret 2024
                        </p>
                    </aside>
                </section>

                <!-- Main content -->
                <section class="grid lg:grid-cols-3 gap-8">
                    <section class="lg:col-span-2 space-y-6">
                        <!-- Penerimaan syarat -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                1. Penerimaan Syarat
                            </h2>
                            <p class="mt-3 text-sm md:text-base text-slate-600">
                                Dengan mengakses situs, aplikasi, atau layanan digital Nusantara Global, orang
                                tua, siswa, maupun pengunjung lain menyatakan setuju untuk terikat pada Syarat
                                &amp; Ketentuan ini beserta kebijakan lain yang menjadi bagian tidak terpisahkan,
                                termasuk Kebijakan Privasi. Apabila Anda tidak setuju terhadap salah satu
                                ketentuan, mohon untuk tidak melanjutkan penggunaan layanan.
                            </p>
                        </article>

                        <!-- Akun & keamanan -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                2. Akun, Akses, &amp; Keamanan
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    a. Beberapa fitur (misalnya Parent Portal, E‑Library, dan sistem informasi)
                                    hanya dapat diakses menggunakan akun resmi yang diberikan oleh sekolah.
                                </p>
                                <p>
                                    b. Anda bertanggung jawab penuh untuk menjaga kerahasiaan nama pengguna dan
                                    kata sandi, serta seluruh aktivitas yang terjadi melalui akun tersebut.
                                </p>
                                <p>
                                    c. Segera hubungi pihak sekolah apabila terdapat dugaan penyalahgunaan akun
                                    atau akses tidak sah terhadap sistem.
                                </p>
                            </div>
                        </article>

                        <!-- Penggunaan layanan -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                3. Penggunaan Layanan
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    a. Layanan digital disediakan untuk mendukung proses belajar mengajar,
                                    komunikasi sekolah–orang tua, serta pengelolaan administrasi pendidikan.
                                </p>
                                <p>
                                    b. Anda dilarang menggunakan layanan untuk:
                                </p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Menyebarkan konten yang melanggar hukum, SARA, atau mengandung ujaran
                                        kebencian.</li>
                                    <li>Menyebarkan virus, malware, atau upaya peretasan sistem.</li>
                                    <li>Aktivitas lain yang dapat mengganggu kenyamanan dan keamanan pengguna
                                        lain.</li>
                                </ul>
                                <p>
                                    c. Sekolah berhak membatasi atau menghentikan akses pengguna yang
                                    melanggar ketentuan ini.
                                </p>
                            </div>
                        </article>

                        <!-- Konten & hak cipta -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                4. Konten, Materi Pembelajaran, &amp; Hak Cipta
                            </h2>
                            <div class="mt-3 space-y-3 text-sm md:text-base text-slate-600">
                                <p>
                                    a. Seluruh materi pembelajaran, modul, gambar, video, dan aset digital lain
                                    yang tersedia di platform ini dilindungi oleh hak cipta dan hanya boleh
                                    digunakan untuk keperluan pendidikan di lingkungan Nusantara Global.
                                </p>
                                <p>
                                    b. Dilarang memperbanyak, menyebarluaskan, atau memodifikasi materi tanpa
                                    izin tertulis dari pihak sekolah atau pemilik hak cipta terkait.
                                </p>
                                <p>
                                    c. Apabila Anda menemukan konten yang diduga melanggar hak cipta, silakan
                                    menghubungi pihak sekolah agar dapat ditindaklanjuti.
                                </p>
                            </div>
                        </article>

                        <!-- Batasan tanggung jawab -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                5. Batasan Tanggung Jawab
                            </h2>
                            <p class="mt-3 text-sm md:text-base text-slate-600">
                                Pihak sekolah berupaya menjaga agar informasi dan layanan digital selalu akurat,
                                aman, dan dapat diakses. Namun, Nusantara Global tidak bertanggung jawab atas
                                kerugian langsung maupun tidak langsung yang timbul akibat gangguan teknis,
                                keterlambatan pembaruan informasi, atau penggunaan layanan di luar tujuan
                                pendidikan.
                            </p>
                        </article>

                        <!-- Perubahan syarat -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                6. Perubahan Syarat &amp; Ketentuan
                            </h2>
                            <p class="mt-3 text-sm md:text-base text-slate-600">
                                Syarat &amp; Ketentuan ini dapat diperbarui sewaktu-waktu untuk menyesuaikan
                                dengan perkembangan kebijakan sekolah, regulasi pemerintah, maupun peningkatan
                                layanan. Perubahan penting akan diinformasikan melalui situs resmi atau kanal
                                komunikasi resmi sekolah. Dengan tetap menggunakan layanan setelah perubahan
                                diberlakukan, Anda dianggap menyetujui versi terbaru dari Syarat &amp; Ketentuan.
                            </p>
                        </article>

                        <!-- Kontak -->
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-7">
                            <h2 class="text-base md:text-lg font-semibold text-slate-900">
                                7. Kontak &amp; Pertanyaan
                            </h2>
                            <p class="mt-3 text-sm md:text-base text-slate-600">
                                Untuk pertanyaan lebih lanjut mengenai Syarat &amp; Ketentuan ini, Anda dapat
                                menghubungi pihak sekolah melalui halaman Kontak pada situs resmi atau melalui
                                email administrasi yang tercantum. Tim kami akan dengan senang hati membantu
                                klarifikasi yang diperlukan.
                            </p>
                        </article>
                    </section>

                    <!-- Sidebar secondary info -->
                    <aside class="space-y-6">
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6">
                            <h2 class="text-sm md:text-base font-semibold text-slate-900">
                                Siapa yang Perlu Membaca?
                            </h2>
                            <ul class="mt-3 space-y-2 text-xs md:text-sm text-slate-600">
                                <li>• Orang tua/wali siswa yang menggunakan Parent Portal.</li>
                                <li>• Siswa yang mengakses E‑Library dan layanan pembelajaran digital.</li>
                                <li>• Staf dan tenaga pendidik yang menggunakan sistem informasi sekolah.</li>
                            </ul>
                        </article>

                        <article class="bg-slate-900 text-white rounded-3xl p-5 md:p-6">
                            <h2 class="text-sm md:text-base font-semibold">
                                Terkait Kebijakan Privasi
                            </h2>
                            <p class="mt-3 text-xs md:text-sm text-slate-300">
                                Informasi tentang bagaimana kami mengumpulkan, menggunakan, dan melindungi data
                                pribadi siswa serta orang tua dijelaskan secara lebih rinci dalam Kebijakan
                                Privasi.
                            </p>
                            <p class="mt-3 text-[11px] md:text-xs text-slate-400">
                                Pastikan Anda membaca kedua dokumen untuk mendapatkan pemahaman yang utuh.
                            </p>
                        </article>
                    </aside>
                </section>
            </div>
        </main>

        <Footer />
    </div>
</template>
