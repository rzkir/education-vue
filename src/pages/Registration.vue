<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useStateRegistration } from '../services/useStateRegistration'

const router = useRouter()
const { form, saveToLocalStorage } = useStateRegistration()

const handleSubmit = () => {
  if (!form.value.agreement) {
    return
  }

  try {
    saveToLocalStorage()
  } catch (e) {
    console.error('Failed to save registration to localStorage', e)
  }

  router.push('/check-status')
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Header />

    <main
      style="view-transition-name: main-content"
      class="pt-32 pb-24 px-4"
    >
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <div class="mb-12">
          <nav
            class="flex mb-6 text-sm text-slate-500 font-medium"
            aria-label="Breadcrumb"
          >
            <ol class="inline-flex items-center space-x-2">
              <li class="inline-flex items-center">
                <RouterLink
                  to="/"
                  id="breadcrumb-home"
                  class="hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                >
                  <iconify-icon
                    icon="lucide:home"
                    class="text-base"
                  ></iconify-icon>
                  Beranda
                </RouterLink>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <iconify-icon
                    icon="lucide:chevron-right"
                    class="text-slate-300 text-base"
                  ></iconify-icon>
                  <span class="text-slate-400">
                    Pendaftaran PPDB
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div class="text-left">
            <h1
              class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            >
              Formulir Pendaftaran PPDB
            </h1>
            <p class="text-slate-600">
              Silakan lengkapi data di bawah ini dengan benar untuk memulai
              proses pendaftaran Tahun Ajaran 2024/2025.
            </p>
          </div>

          <!-- Form Progress (Desktop Only) -->
          <div
            class="hidden md:flex justify-between items-center mb-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-sm"
              >
                1
              </div>
              <span class="font-semibold text-blue-800">
                Data Diri
              </span>
            </div>
            <div class="flex-1 h-px bg-slate-200 mx-4"></div>
            <div class="flex items-center gap-3 text-slate-400">
              <div
                class="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm"
              >
                2
              </div>
              <span>Keluarga</span>
            </div>
            <div class="flex-1 h-px bg-slate-200 mx-4"></div>
            <div class="flex items-center gap-3 text-slate-400">
              <div
                class="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm"
              >
                3
              </div>
              <span>Berkas</span>
            </div>
          </div>
        </div>

        <!-- Form -->
        <form class="space-y-8" @submit.prevent="handleSubmit">
          <!-- Section 1: Student Data -->
          <section
            class="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <h3
              class="text-xl font-bold text-slate-900 mb-8 border-l-4 border-blue-800 pl-4"
            >
              Data Calon Peserta Didik
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2 lg:col-span-2">
                <label class="text-sm font-semibold text-slate-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Sesuai Akte Kelahiran"
                  v-model="form.student.fullName"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  placeholder="Kota Kelahiran"
                  v-model="form.student.birthPlace"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  v-model="form.student.birthDate"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Jenis Kelamin
                </label>
                <select
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  v-model="form.student.gender"
                  required
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="perempuan">Perempuan</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Sekolah Asal
                </label>
                <input
                  type="text"
                  placeholder="Nama Sekolah Sebelumnya"
                  v-model="form.student.previousSchool"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
            </div>
          </section>

          <!-- Section 2: Parent/Guardian Data -->
          <section
            class="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <h3
              class="text-xl font-bold text-slate-900 mb-8 border-l-4 border-blue-800 pl-4"
            >
              Data Orang Tua / Wali
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Nama Ayah Kandung
                </label>
                <input
                  type="text"
                  v-model="form.parent.fatherName"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Nama Ibu Kandung
                </label>
                <input
                  type="text"
                  v-model="form.parent.motherName"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  placeholder="0812xxxxxx"
                  v-model="form.parent.phone"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Email Orang Tua
                </label>
                <input
                  type="email"
                  placeholder="email@anda.com"
                  v-model="form.parent.email"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                />
              </div>
              <div class="space-y-2 lg:col-span-2">
                <label class="text-sm font-semibold text-slate-700">
                  Alamat Lengkap
                </label>
                <textarea
                  rows="3"
                  placeholder="Nama jalan, nomor rumah, RT/RW, Kelurahan, Kecamatan"
                  v-model="form.parent.address"
                  class="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-all focus:border-blue-800"
                  required
                ></textarea>
              </div>
            </div>
          </section>

          <!-- Section 3: Program & Documents -->
          <section
            class="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <h3
              class="text-xl font-bold text-slate-900 mb-8 border-l-4 border-blue-800 pl-4"
            >
              Pilihan Program &amp; Dokumen
            </h3>
            <div class="space-y-8">
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700">
                  Program Unggulan yang Diminati
                </label>
                <div class="grid sm:grid-cols-3 gap-4">
                  <label
                    class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-500 cursor-pointer bg-slate-50 group transition-all"
                  >
                    <input
                      type="radio"
                      name="program"
                      value="sains-teknologi"
                      v-model="form.program.choice"
                      class="w-4 h-4 text-blue-800"
                      required
                    />
                    <span class="text-sm font-medium">
                      Sains &amp; Teknologi
                    </span>
                  </label>
                  <label
                    class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-500 cursor-pointer bg-slate-50 group transition-all"
                  >
                    <input
                      type="radio"
                      name="program"
                      value="seni-budaya"
                      v-model="form.program.choice"
                      class="w-4 h-4 text-blue-800"
                    />
                    <span class="text-sm font-medium">
                      Seni &amp; Budaya
                    </span>
                  </label>
                  <label
                    class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-500 cursor-pointer bg-slate-50 group transition-all"
                  >
                    <input
                      type="radio"
                      name="program"
                      value="olahraga-prestasi"
                      v-model="form.program.choice"
                      class="w-4 h-4 text-blue-800"
                    />
                    <span class="text-sm font-medium">
                      Olahraga Prestasi
                    </span>
                  </label>
                </div>
              </div>

              <div class="space-y-4">
                <p class="text-sm font-semibold text-slate-700">
                  Unggah Berkas Pendukung (Format PDF/JPG, Max 2MB)
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div
                    class="p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-blue-400 transition-colors flex flex-col items-center justify-center gap-2"
                  >
                    <iconify-icon
                      icon="lucide:upload-cloud"
                      class="text-2xl text-slate-400"
                    ></iconify-icon>
                    <div class="text-center">
                      <p class="text-xs font-bold">
                        Kartu Keluarga
                      </p>
                      <p class="text-[10px] text-slate-400">
                        Klik untuk pilih file
                      </p>
                    </div>
                    <input type="file" class="hidden" />
                  </div>
                  <div
                    class="p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-blue-400 transition-colors flex flex-col items-center justify-center gap-2"
                  >
                    <iconify-icon
                      icon="lucide:upload-cloud"
                      class="text-2xl text-slate-400"
                    ></iconify-icon>
                    <div class="text-center">
                      <p class="text-xs font-bold">
                        Akte Kelahiran
                      </p>
                      <p class="text-[10px] text-slate-400">
                        Klik untuk pilih file
                      </p>
                    </div>
                    <input type="file" class="hidden" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Submission -->
          <section
            class="bg-blue-900 rounded-3xl p-8 shadow-xl text-white"
          >
            <div class="flex items-start gap-4 mb-8">
              <input
                type="checkbox"
                id="agreement"
                class="mt-1 w-5 h-5 rounded border-blue-400 text-blue-600 focus:ring-blue-500"
                v-model="form.agreement"
                required
              />
              <label
                for="agreement"
                class="text-sm text-blue-100 leading-relaxed"
              >
                Saya menyatakan bahwa seluruh data yang diisi adalah benar dan
                dapat dipertanggungjawabkan. Saya menyetujui seluruh syarat dan
                ketentuan pendaftaran di Nusantara Global Academy.
              </label>
            </div>
            <button
              type="submit"
              class="w-full py-5 bg-yellow-400 text-blue-900 rounded-2xl font-bold text-lg hover:bg-yellow-300 hover:scale-[1.01] transition-all flex items-center justify-center gap-3"
            >
              Kirim Pendaftaran Sekarang
              <iconify-icon
                icon="lucide:arrow-right-circle"
                class="text-2xl"
              ></iconify-icon>
            </button>
          </section>
        </form>
      </div>
    </main>

    <Footer />
  </div>
</template>

