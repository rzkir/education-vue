## Education Website

Landing page sekolah modern berbasis **Vue 3** dan **Vue Router** untuk menampilkan informasi sekolah, program pendidikan, fasilitas, serta berbagai portal layanan (orang tua, alumni, dan calon siswa) dalam satu platform yang ringkas dan responsif.

### Fitur Utama

- **Landing page informatif**: Menampilkan profil singkat sekolah, highlight program, dan call-to-action yang jelas.
- **Struktur navigasi rapi**: Setiap halaman memiliki tujuan yang spesifik dan mudah diakses.
- **Desain responsif**: Dioptimalkan untuk tampilan desktop dan mobile.
- **Routing bersih**: Memanfaatkan Vue Router dengan path yang deskriptif dan mudah dipahami.

### Daftar Halaman

- **Beranda (`/`)**  
  Gambaran umum sekolah, hero section, highlight program dan fasilitas utama.

- **Tentang Kami (`/tentang-kami`)**  
  Profil sekolah, sejarah singkat, visi, misi, dan nilai-nilai inti.

- **Fasilitas (`/fasilitas`)**  
  Informasi fasilitas penunjang belajar (kelas, laboratorium, perpustakaan, area olahraga, dll.).

- **Program (`/program`)**  
  Daftar program pendidikan, ekstrakurikuler, dan aktivitas pendukung siswa.

- **Pendaftaran (`/registration`)**  
  Informasi alur pendaftaran dan formulir pengajuan calon siswa baru.

- **Cek Status Pendaftaran (`/check-status`)**  
  Halaman untuk mengecek status pengajuan pendaftaran yang sudah dikirim.

- **E-Library (`/e-library`)**  
  Akses ke pustaka digital dan materi pembelajaran online.

- **Parent Portal (`/parent-portal`)**  
  Portal untuk orang tua memantau perkembangan akademik dan informasi penting siswa.

- **Alumni Network (`/alumni-network`)**  
  Informasi jaringan alumni, testimoni, dan kegiatan alumni.

- **Kontak (`/contact`)**  
  Formulir kontak, alamat sekolah, peta lokasi, dan informasi komunikasi resmi.

- **Kebijakan Privasi (`/kebijakan-privasi`)**  
  Penjelasan mengenai pengelolaan dan perlindungan data pengguna pada website.

- **Syarat & Ketentuan (`/syarat-ketentuan`)**  
  Ketentuan penggunaan layanan dan informasi di website.

### Teknologi

- **Framework**: Vue 3
- **Routing**: Vue Router
- **Build tool**: Vite
- **Bahasa**: TypeScript (opsional, sesuai konfigurasi project)

### Cara Menjalankan Project

1. **Install dependency**

   ```bash
   npm install
   ```

2. **Jalankan aplikasi dalam mode development**

   ```bash
   npm run dev
   ```

3. **Build untuk production (opsional)**

   ```bash
   npm run build
   ```

4. **Preview build (opsional)**

   ```bash
   npm run preview
   ```

### Struktur Dasar (Ringkas)

- `src/pages` – Halaman utama seperti `Home`, `Tentang-Kami`, `Program`, dll.
- `src/components` – Komponen UI reusable seperti `Header`, `Footer`, dan komponen section.
- `src/router.ts` – Definisi route untuk seluruh halaman.

### Author

- **Nama**: Rizki Ramadhan
