# Interactive 3D Portal Portfolio

Sebuah website portofolio interaktif premium dan futuristik yang dirancang dengan estetika bertema kosmos digital hampa udara. Dilengkapi dengan transisi portal ruang angkasa, kepulan asap kursor interaktif, dan konstelasi jaring laba-laba partikel 3D.

---

## 🛠️ Stack Teknologi & Tools Pembuatan

Website ini dibangun menggunakan teknologi mutakhir untuk memastikan performa tinggi (60 FPS), transisi halus, dan aksesibilitas kontras yang tinggi:

### 1. Core Framework & Build Tool
*   **React 19 (JavaScript)**: Library utama untuk merancang antarmuka komponen yang terstruktur dan modular.
*   **Vite 8**: Bundler modern berkecepatan tinggi dengan HMR (Hot Module Replacement) instan saat pengembangan.

### 2. Sistem Styling (High-Contrast Theme)
*   **Tailwind CSS v4**: Dikombinasikan penuh menggunakan compiler bundler terbaru `@tailwindcss/vite` untuk mempercepat utility layouting (flex, grid, spacing).
*   **Vanilla CSS (`src/index.css`)**: Menggunakan variabel CSS kustom untuk tema gelap pekat (`#0A0A0B`) dengan kontras teks putih murni (`#FFFFFF`) and abu-abu terang (`#A0A0AB`) yang mematuhi standar aksesibilitas WCAG AAA.

### 3. Engine Animasi Premium
*   **GSAP (GreenSock Animation Platform)**: Menggerakkan seluruh visual transisi sinematik bertingkat:
    *   Akselerasi warp kecepatan tinggi (*hyper drive warp speed*).
    *   Pengecilan dan pemudaran teks persentase (*text vortex scale shrink*).
    *   Transisi letupan penutup membesar keluar (*Zoom-In Fly-Through portal transition*).
*   **Framer Motion**: Digunakan untuk mengontrol animasi hover interaktif pada kartu proyek dan mikro-interaksi tombol.

### 4. Engine Grafis Canvas (HTML5 Canvas 2D)
Seluruh efek partikel dihitung secara matematis pada CPU dan digambar langsung di Canvas 2D untuk efisiensi performa rendering yang sangat ringan:
*   **Hyperspace Warp Engine**: Memproyeksikan koordinat bintang 3D $(X, Y, Z)$ ke layar 2D dengan menggambar berkas cahaya panjang (*stretch speed lines*) saat akselerasi.
*   **Cosmic Constellation Web**: Jaring-jaring laba-laba partikel bintang parallax 3D interaktif yang bermunculan satu per satu secara cepat (*staggered pop-up*) saat reveal awal dan merespon gerakan mouse (repel/menolak).
*   **Interactive Smoke Trail**: Kepulan asap neon berwarna Cyan, Kuning, dan Putih yang memancar mengikuti kursor mouse dengan perhitungan LERP (Linear Interpolation) untuk mencegah kepulan putus saat digeser cepat, dilengkapi fisika pemuaian gas (thermal expansion) dan gaya apung ke atas.

---

## 📁 Struktur Komponen Utama

*   `src/components/LoadingScreen.jsx`: Layar pemuatan awal dengan canvas 3D hyperspace warp, indikator persentase digital, text vortex shrink, dan transisi zoom-in keluar.
*   `src/components/ParticleBackground.jsx`: Latar belakang canvas interaktif konstelasi bintang staggered pop-up, pendaran awan nebula kursor, dan asap kepulan gas neon interaktif.
*   `src/components/HeroSection.jsx`: Area perkenalan utama dengan reveal text staggered berdurasi tunda 2 detik setelah website terungkap.
*   `src/components/Navbar.jsx`: Bar navigasi minimalis melayang dengan kontrol scrolling responsif.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

1.  **Instalasi Dependensi**:
    ```bash
    npm install
    ```
2.  **Menjalankan Server Dev**:
    ```bash
    npm run dev
    ```
3.  **Kompilasi Produksi**:
    ```bash
    npm run build
    ```
