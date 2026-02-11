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
                            Hubungi Kami
                        </p>
                        <h1 class="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                            Kontak Nusantara Global Academy
                        </h1>
                        <p class="mt-3 text-slate-600 max-w-2xl">
                            Kami siap membantu menjawab pertanyaan Anda seputar pendaftaran,
                            program akademik, maupun kerja sama.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <div
                            class="px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Jam kerja: Senin–Jumat, 08.00–16.00 WIB
                        </div>
                    </div>
                </section>

                <!-- Content: form + contact info -->
                <section class="grid lg:grid-cols-3 gap-8">
                    <!-- Contact form -->
                    <section class="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
                        <h2 class="text-sm font-semibold text-slate-900 mb-4">
                            Kirim Pesan
                        </h2>
                        <p class="text-xs text-slate-500 mb-6">
                            Isi formulir di bawah ini, tim kami akan menghubungi Anda
                            melalui email atau WhatsApp.
                        </p>

                        <form class="space-y-5">
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-slate-700">
                                        Nama Lengkap
                                    </label>
                                    <input type="text" placeholder="Nama Anda"
                                        class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-blue-800 outline-none"
                                        required />
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-slate-700">
                                        Email
                                    </label>
                                    <input type="email" placeholder="email@anda.com"
                                        class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-blue-800 outline-none"
                                        required />
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-slate-700">
                                        Nomor WhatsApp
                                    </label>
                                    <input type="tel" placeholder="08xxxxxxxxxx"
                                        class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-blue-800 outline-none" />
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-slate-700">
                                        Topik
                                    </label>
                                    <select
                                        class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-blue-800 outline-none"
                                        required>
                                        <option value="">Pilih topik</option>
                                        <option value="ppdb">Informasi Pendaftaran (PPDB)</option>
                                        <option value="program">
                                            Program Akademik &amp; Kurikulum
                                        </option>
                                        <option value="kerja-sama">
                                            Kerja Sama &amp; Kunjungan
                                        </option>
                                        <option value="lainnya">Lainnya</option>
                                    </select>
                                </div>
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs font-semibold text-slate-700">
                                    Pesan
                                </label>
                                <textarea rows="4" placeholder="Tuliskan pertanyaan atau pesan Anda..."
                                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-blue-800 outline-none"
                                    required></textarea>
                            </div>

                            <div class="flex items-start gap-2 text-xs text-slate-500">
                                <input id="contact-consent" type="checkbox"
                                    class="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-800" required />
                                <label for="contact-consent">
                                    Saya menyetujui bahwa data saya digunakan untuk keperluan
                                    komunikasi terkait Nusantara Global Academy.
                                </label>
                            </div>

                            <button type="submit"
                                class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-800 text-white text-sm font-semibold hover:bg-blue-700">
                                Kirim Pesan
                                <iconify-icon icon="lucide:send" class="text-sm"></iconify-icon>
                            </button>
                        </form>
                    </section>

                    <!-- Contact info -->
                    <aside class="space-y-6">
                        <article class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                            <h2 class="text-sm font-semibold text-slate-900 mb-3">
                                Informasi Kontak
                            </h2>
                            <div class="space-y-3 text-xs text-slate-600">
                                <p class="flex items-start gap-2">
                                    <iconify-icon icon="lucide:map-pin" class="mt-0.5 text-blue-700"></iconify-icon>
                                    <span>
                                        Jl. Pendidikan No. 123<br />
                                        Jakarta Selatan, 12345
                                    </span>
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:phone" class="text-blue-700"></iconify-icon>
                                    <span>(021) 123-4567</span>
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:mail" class="text-blue-700"></iconify-icon>
                                    <span>info@nusantaraglobal.sch.id</span>
                                </p>
                            </div>
                            <div class="mt-4 space-y-2 text-xs text-slate-600">
                                <p class="font-semibold text-slate-900">
                                    Jam Operasional
                                </p>
                                <p>Senin–Jumat: 08.00–16.00 WIB</p>
                                <p>Sabtu: 08.00–12.00 WIB</p>
                                <p>Minggu &amp; Libur Nasional: Tutup</p>
                            </div>
                        </article>

                        <article class="bg-slate-900 text-white rounded-3xl p-6 space-y-3">
                            <h2 class="text-sm font-semibold">
                                Kanal Resmi
                            </h2>
                            <p class="text-xs text-slate-300">
                                Untuk memastikan keamanan informasi, gunakan hanya kanal
                                komunikasi resmi di bawah ini.
                            </p>
                            <div class="space-y-2 text-xs">
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:instagram" class="text-pink-300"></iconify-icon>
                                    @nusantaraglobal.academy
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:facebook" class="text-blue-300"></iconify-icon>
                                    Nusantara Global Academy
                                </p>
                                <p class="flex items-center gap-2">
                                    <iconify-icon icon="lucide:youtube" class="text-red-300"></iconify-icon>
                                    NGA Official Channel
                                </p>
                            </div>
                        </article>
                    </aside>
                </section>
            </div>
        </main>

        <Footer />
    </div>
</template>
