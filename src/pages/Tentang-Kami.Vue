<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'
import { useStateTentangKami } from '../services/useStateTentangKami'
import { usePageMeta } from '../services/usePageMeta'

// @ts-ignore
const { statsSection, awardsCount, graduationCount, clubsCount, partnersCount } = useStateTentangKami()

usePageMeta({
    title: 'Tentang Kami - Nusantara Global Academy',
    description:
        'Mengenal lebih dekat Nusantara Global Academy, sekolah berstandar internasional yang berfokus pada karakter, keunggulan akademik, dan kesiapan global.'
})
</script>

<template>
    <div class="min-h-screen bg-white text-slate-900">
        <Header />

        <main style="view-transition-name: main-content">
            <!-- Hero Section -->
            <section class="relative pb-10 md:pb-28 py-36 overflow-hidden">
                <div class="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-50/50 rounded-bl-[200px]"></div>
                <div class="container mx-auto px-4 md:px-8">
                    <div class="max-w-3xl">
                        <h4 class="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
                            Mengenal Lebih Dekat
                        </h4>
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                            Membentuk Masa Depan
                            <span class="text-blue-600 underline decoration-blue-100">Global</span>.
                        </h1>
                        <p class="text-base md:text-lg text-slate-600 leading-relaxed">
                            Nusantara Global Academy adalah institusi pendidikan terdepan yang
                            berfokus pada pengembangan karakter, keunggulan akademik, dan
                            kesiapan global bagi generasi masa depan Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            <!-- School History -->
            <section class="py-10 md:py-20 bg-slate-50">
                <div class="container mx-auto px-4 md:px-8">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="relative">
                            <img src="https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg"
                                alt="Gedung Sekolah"
                                class="w-full aspect-4/3 object-cover rounded-3xl shadow-2xl relative z-10" />
                            <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-3xl z-0"></div>
                        </div>

                        <div>
                            <h2 class="text-3xl font-bold mb-6 text-slate-900">
                                Sejarah Perjalanan Kami
                            </h2>
                            <div class="space-y-8">
                                <div class="flex gap-6">
                                    <div
                                        class="flex-none w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center font-bold text-blue-600">
                                        2005
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-lg mb-1 text-slate-900">
                                            Awal Mula
                                        </h4>
                                        <p class="text-slate-600">
                                            Berdiri dengan komitmen untuk menghadirkan standar
                                            pendidikan internasional di jantung nusantara dengan
                                            hanya 50 siswa pertama.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex gap-6">
                                    <div
                                        class="flex-none w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center font-bold text-blue-600">
                                        2015
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-lg mb-1 text-slate-900">
                                            Ekspansi Global
                                        </h4>
                                        <p class="text-slate-600">
                                            Mendapatkan akreditasi internasional penuh dan mulai
                                            menjalin kerjasama pertukaran pelajar dengan sekolah di
                                            Eropa dan Asia.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex gap-6 text-blue-600">
                                    <div
                                        class="flex-none w-16 h-16 bg-blue-600 rounded-2xl shadow-md flex items-center justify-center font-bold text-white">
                                        Hari Ini
                                    </div>
                                    <div class="text-slate-900">
                                        <h4 class="font-bold text-lg mb-1">Pusat Keunggulan</h4>
                                        <p class="text-slate-600">
                                            Kini mendidik lebih dari 1.500 siswa dengan kurikulum
                                            terintegrasi teknologi AI dan pendidikan berkelanjutan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mission & Vision -->
            <section class="py-10 bg-white">
                <div class="container mx-auto px-4 md:px-8">
                    <div class="grid lg:grid-cols-2 gap-12">
                        <div class="p-10 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200">
                            <iconify-icon icon="lucide:eye" class="text-4xl mb-6 opacity-80"></iconify-icon>
                            <h3 class="text-3xl font-bold mb-4">Visi Kami</h3>
                            <p class="text-blue-50 text-lg md:text-xl leading-relaxed">
                                "Menjadi institusi pendidikan teladan yang mencetak pemimpin
                                berwawasan global, berintegritas tinggi, dan mampu menjawab
                                tantangan masa depan dengan inovasi dan nilai-nilai luhur."
                            </p>
                        </div>
                        <div class="p-10 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-200">
                            <iconify-icon icon="lucide:target" class="text-4xl mb-6 opacity-80"></iconify-icon>
                            <h3 class="text-3xl font-bold mb-4">Misi Kami</h3>
                            <ul class="space-y-4 text-slate-300">
                                <li class="flex gap-3">
                                    <iconify-icon icon="lucide:check-circle"
                                        class="text-blue-500 mt-1 flex-none"></iconify-icon>
                                    <span>Menyediakan lingkungan belajar yang inklusif, aman, dan
                                        memacu kreativitas.</span>
                                </li>
                                <li class="flex gap-3">
                                    <iconify-icon icon="lucide:check-circle"
                                        class="text-blue-500 mt-1 flex-none"></iconify-icon>
                                    <span>Mengintegrasikan teknologi terkini dalam setiap metode
                                        pembelajaran.</span>
                                </li>
                                <li class="flex gap-3">
                                    <iconify-icon icon="lucide:check-circle"
                                        class="text-blue-500 mt-1 flex-none"></iconify-icon>
                                    <span>Menanamkan nilai moral dan etika yang kuat dalam
                                        pembentukan karakter siswa.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Core Values -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:mt-16">
                        <div
                            class="text-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100">
                            <div
                                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                                <iconify-icon icon="lucide:heart"></iconify-icon>
                            </div>
                            <h5 class="font-bold text-slate-900">Integritas</h5>
                        </div>
                        <div
                            class="text-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100">
                            <div
                                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                                <iconify-icon icon="lucide:zap"></iconify-icon>
                            </div>
                            <h5 class="font-bold text-slate-900">Inovasi</h5>
                        </div>
                        <div
                            class="text-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100">
                            <div
                                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                                <iconify-icon icon="lucide:users"></iconify-icon>
                            </div>
                            <h5 class="font-bold text-slate-900">Kolaborasi</h5>
                        </div>
                        <div
                            class="text-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100">
                            <div
                                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                                <iconify-icon icon="lucide:award"></iconify-icon>
                            </div>
                            <h5 class="font-bold text-slate-900">Unggul</h5>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Leadership -->
            <section class="py-10 bg-slate-50">
                <div class="container mx-auto px-4 md:px-8">
                    <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            Kepemimpinan Sekolah
                        </h2>
                        <p class="text-slate-600">
                            Dipandu oleh para pendidik berpengalaman yang berdedikasi tinggi
                            untuk masa depan putra-putri Anda.
                        </p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                                alt="Principal" class="w-full aspect-4/4 object-cover rounded-2xl mb-6" />
                            <div class="px-4 pb-4">
                                <h4 class="text-xl font-bold group-hover:text-blue-600 transition-colors">
                                    Dr. Arini Kusuma
                                </h4>
                                <p class="text-blue-600 font-medium mb-4 text-sm">
                                    Kepala Sekolah
                                </p>
                                <p class="text-slate-500 text-sm leading-relaxed italic">
                                    "Pendidikan bukan hanya soal nilai, tapi bagaimana kita
                                    membentuk jiwa yang tangguh."
                                </p>
                            </div>
                        </div>
                        <div class="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                alt="Academic Director" class="w-full aspect-4/4 object-cover rounded-2xl mb-6" />
                            <div class="px-4 pb-4">
                                <h4 class="text-xl font-bold group-hover:text-blue-600 transition-colors">
                                    Prof. Hendra Wijaya
                                </h4>
                                <p class="text-blue-600 font-medium mb-4 text-sm">
                                    Direktur Akademik
                                </p>
                                <p class="text-slate-500 text-sm leading-relaxed italic">
                                    "Kurikulum kita dirancang untuk relevan dengan kebutuhan
                                    industri 10 tahun mendatang."
                                </p>
                            </div>
                        </div>
                        <div class="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                                alt="Student Affairs" class="w-full aspect-4/4 object-cover rounded-2xl mb-6" />
                            <div class="px-4 pb-4">
                                <h4 class="text-xl font-bold group-hover:text-blue-600 transition-colors">
                                    Sari Indah, M.Ed.
                                </h4>
                                <p class="text-blue-600 font-medium mb-4 text-sm">
                                    Kesiswaan &amp; Karakter
                                </p>
                                <p class="text-slate-500 text-sm leading-relaxed italic">
                                    "Setiap siswa memiliki potensi unik. Tugas kami adalah
                                    membantu mereka menemukannya."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Achievements & Stats -->
            <section ref="statsSection" class="py-10 md:py-20 bg-blue-600 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full opacity-10">
                    <iconify-icon icon="lucide:trophy" class="text-[40rem] -top-20 -left-40 absolute"></iconify-icon>
                </div>
                <div class="container mx-auto px-4 md:px-8 relative z-10 text-white">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-4xl md:text-5xl font-bold mb-2">{{ awardsCount }}+</div>
                            <div class="text-blue-100 text-xs md:text-sm uppercase tracking-widest">
                                Penghargaan Nasional
                            </div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-bold mb-2">{{ graduationCount }}%</div>
                            <div class="text-blue-100 text-xs md:text-sm uppercase tracking-widest">
                                Kelulusan PTN/Luar Negeri
                            </div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-bold mb-2">{{ clubsCount }}</div>
                            <div class="text-blue-100 text-xs md:text-sm uppercase tracking-widest">
                                Ekskul &amp; Klub Aktif
                            </div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-bold mb-2">{{ partnersCount }}+</div>
                            <div class="text-blue-100 text-xs md:text-sm uppercase tracking-widest">
                                Mitra Universitas Dunia
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us -->
            <section class="py-10 md:py-20 bg-white">
                <div class="container mx-auto px-4 md:px-8">
                    <div class="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 class="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                                Mengapa Memilih Kami?
                            </h2>
                            <div class="space-y-8">
                                <div class="flex gap-6 group">
                                    <div
                                        class="flex-none w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <iconify-icon icon="lucide:shield-check"></iconify-icon>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-xl mb-2 text-slate-900">
                                            Kurikulum Adaptif
                                        </h4>
                                        <p class="text-slate-600">
                                            Materi pembelajaran yang selalu diperbarui sesuai dengan
                                            standar global dan kebutuhan teknologi modern.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex gap-6 group">
                                    <div
                                        class="flex-none w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <iconify-icon icon="lucide:earth"></iconify-icon>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-xl mb-2 text-slate-900">
                                            Networking Luas
                                        </h4>
                                        <p class="text-slate-600">
                                            Akses ke jaringan alumni dan mitra internasional yang
                                            membantu persiapan karir dan studi lanjut.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex gap-6 group">
                                    <div
                                        class="flex-none w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <iconify-icon icon="lucide:microscope"></iconify-icon>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-xl mb-2 text-slate-900">
                                            Fasilitas Modern
                                        </h4>
                                        <p class="text-slate-600">
                                            Laboratorium tercanggih, perpustakaan digital, dan
                                            fasilitas olahraga standar olimpiade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                            <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl">
                            </div>
                            <iconify-icon icon="lucide:sparkles" class="text-5xl text-blue-500 mb-8"></iconify-icon>
                            <h3 class="text-3xl font-bold mb-6">Metode STEAM+</h3>
                            <p class="text-slate-400 text-lg leading-relaxed mb-8">
                                Kami tidak hanya mengajarkan Sains dan Matematika. Kami
                                mengintegrasikan Seni dan Soft Skills untuk menciptakan individu
                                yang kreatif dan mampu memecahkan masalah nyata.
                            </p>
                            <RouterLink id="cta-discover" to="/program"
                                class="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                                Lihat Program Kami
                                <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section class="py-10 md:py-20 bg-slate-50">
                <div class="container mx-auto px-4 md:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight text-slate-900">
                            Suara Mereka
                        </h2>
                        <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <div class="flex gap-2 text-yellow-400 mb-6">
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                            </div>
                            <p class="text-slate-700 text-lg leading-relaxed mb-8">
                                "Anak saya tidak hanya pintar secara akademik, tapi juga jauh
                                lebih percaya diri dalam berbicara di depan umum. Lingkungan di
                                Nusantara Global sangat suportif."
                            </p>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=parent1" alt="Parent"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h5 class="font-bold text-slate-900">Ibu Maria Ulfa</h5>
                                    <p class="text-slate-500 text-sm">
                                        Orang Tua Siswa Kelas 11
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <div class="flex gap-2 text-yellow-400 mb-6">
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                                <iconify-icon icon="lucide:star"></iconify-icon>
                            </div>
                            <p class="text-slate-700 text-lg leading-relaxed mb-8">
                                "Belajar di sini sangat menyenangkan karena guru-guru
                                memperlakukan kami seperti teman diskusi, bukan sekadar
                                memberikan instruksi satu arah."
                            </p>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=student1" alt="Student"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h5 class="font-bold text-slate-900">Kevin Sanjaya</h5>
                                    <p class="text-slate-500 text-sm">Ketua OSIS 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-10">
                <div class="container mx-auto px-4 md:px-8">
                    <div
                        class="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-8 opacity-20">
                            <iconify-icon icon="lucide:graduation-cap" class="text-7xl md:text-9xl"></iconify-icon>
                        </div>
                        <h2 class="text-3xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
                            Siap Memulai Perjalanan Masa Depan?
                        </h2>
                        <p class="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                            Pendaftaran tahun ajaran 2024/2025 telah dibuka. Segera amankan
                            tempat putra-putri Anda di sekolah terbaik.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a id="cta-register" href="/registration"
                                class="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                                Daftar Sekarang
                            </a>
                            <a id="cta-tour" href="/fasilitas"
                                class="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all">
                                Campus Tour Virtual
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>
