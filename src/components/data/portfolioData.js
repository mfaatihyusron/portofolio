export const personalInfo = {
  name: "Muhammad Faatih Yusron",
  title: "UI/UX Designer · Frontend Developer · Data Enthusiast",
  shortBio: "Menghubungkan desain yang berpusat pada pengguna, pengembangan web modern, dan analisis data berbasis bukti — untuk menciptakan solusi digital yang tidak hanya indah, tapi benar-benar bekerja.",
  longBio: "Mahasiswa Ilmu Komputer yang percaya bahwa produk terbaik lahir dari kolaborasi antara riset pengguna yang mendalam, rekayasa teknis yang solid, dan intuisi data yang tajam. Fokus saya ada di Product Design, Web Development, dan Machine Learning — tiga domain yang saya pelajari secara bersamaan agar bisa menjadi jembatan antara tim desain, engineering, dan data.",
  email: "faatih@email.com",
  github: "https://github.com/mfaatihyusron",
  linkedin: "https://www.linkedin.com/in/mfaatihyusron/",
  cv: "#",
  profileImage: "/assets/hero.png",
  avatarInitial: "RP",
  availability: "Available 2025",
  tagline: "Terbuka untuk Internship & Kolaborasi"
};

export const stats = [
  { value: "4+", label: "Proyek Selesai" },
  { value: "3", label: "Domain Keahlian" },
  { value: "5+", label: "Sertifikasi" },
  { value: "2+", label: "Kompetisi Diikuti" },
];

export const skillCategories = [
  {
    title: "UI/UX Design",
    icon: "✦",
    skills: ["User Research", "User Flow", "Journey Mapping", "Wireframing", "Design System", "Prototyping", "Figma"],
  },
  {
    title: "Frontend Development",
    icon: "⬡",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: "⚙",
    skills: ["PHP", "CodeIgniter 3", "REST API", "MySQL", "Database Design"],
  },
  {
    title: "Data Science & ML",
    icon: "◈",
    skills: ["Python", "Pandas", "Scikit-learn", "Random Forest", "LightGBM", "XGBoost"],
  },
  {
    title: "Metodologi",
    icon: "◎",
    skills: ["Agile", "Scrum", "Design Thinking", "Data Analysis", "Problem Solving"],
  },
];

export const technologies = [
  {
    name: "Figma",
    category: "UI/UX Design",
    level: 90,
    description: "Membangun design system, komponen reusable, variant management, dan user journey map pada berbagai proyek aplikasi digital.",
    icon: "⬛",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 80,
    description: "Framework utama untuk membangun aplikasi web modern dengan performa tinggi dan struktur scalable.",
    icon: "▲",
  },
  {
    name: "Tailwind",
    category: "Frontend",
    level: 88,
    description: "Membangun UI responsif secara cepat dengan pendekatan utility-first yang konsisten.",
    icon: "◐",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 82,
    description: "Interaksi dinamis dan logic client-side pada berbagai proyek web.",
    icon: "⬡",
  },
  {
    name: "PHP",
    category: "Backend",
    level: 75,
    description: "Sistem web dinamis berbasis database dengan arsitektur MVC.",
    icon: "🐘",
  },
  {
    name: "CodeIgniter",
    category: "Backend",
    level: 72,
    description: "Aplikasi reservasi lapangan dan sistem informasi berbasis CI3.",
    icon: "◇",
  },
  {
    name: "Python",
    category: "Data Science",
    level: 85,
    description: "Bahasa utama untuk data processing, machine learning, dan analisis data.",
    icon: "🐍",
  },
  {
    name: "Random Forest",
    category: "ML",
    level: 78,
    description: "Feature importance analysis dan predictive modeling pada dataset kompetisi.",
    icon: "🌲",
  },
  {
    name: "LightGBM",
    category: "ML",
    level: 76,
    description: "Optimasi model machine learning pada dataset kompetisi dengan efisiensi tinggi.",
    icon: "⚡",
  },
  {
    name: "XGBoost",
    category: "ML",
    level: 74,
    description: "Meningkatkan performa prediksi dan evaluasi model pada kompetisi data science.",
    icon: "✦",
  },
];

export const projects = [
  {
    id: 1,
    title: "Courty",
    subtitle: "Aplikasi Reservasi Lapangan Olahraga Real-Time",
    category: "Full Stack",
    icon: "🏸",
    situation: "Proses reservasi masih manual dan tidak efisien.",
    action: "Membangun platform online lengkap dengan sistem autentikasi, manajemen jadwal, dan koneksi frontend-backend.",
    result: "Reservasi lebih cepat, jadwal lebih terkelola, kapasitas multi-pengguna.",
    techStack: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "SERA",
    subtitle: "Sistem Manajemen Respons Kesehatan Bencana",
    category: "UI/UX Design",
    icon: "🏥",
    situation: "Koordinasi informasi kesehatan saat bencana tidak terpusat.",
    action: "User research → user flow → wireframe → high-fidelity design → prototype interaktif.",
    result: "Alur kerja lebih jelas, informasi lebih mudah diakses oleh responder.",
    techStack: ["Figma", "Design System", "UX Research"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Bike Rental App",
    subtitle: "Aplikasi Peminjaman Sepeda Elektrik",
    category: "Mobile Design",
    icon: "🚲",
    situation: "Tindakan: User journey mapping → wireframe → prototype → UI design final yang bersih.",
    action: "User journey mapping → wireframe → prototype → UI design final yang bersih.",
    result: "User flow yang lebih sederhana dan pengalaman pengguna yang jauh lebih baik dari solusi sebelumnya.",
    techStack: ["Figma", "Prototyping", "User Journey"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "ML Competition",
    subtitle: "Prediksi & Analisis Data Kompetisi",
    category: "Machine Learning",
    icon: "📊",
    situation: "Tindakan: Data cleaning → feature engineering → ensemble modeling dengan Random Forest, LightGBM, dan XGBoost.",
    action: "Data cleaning → feature engineering → ensemble modeling dengan Random Forest, LightGBM, dan XGBoost.",
    result: "Insight data lebih akurat, peningkatan performa model yang signifikan di leaderboard.",
    techStack: ["Python", "Random Forest", "LightGBM", "XGBoost"],
    github: "#",
    demo: "#",
  },
];

export const experiences = {
  organisasi: [
    {
      date: "2024 — Sekarang",
      title: "Divisi Teknologi Informasi",
      org: "Organisasi Mahasiswa Ilmu Komputer",
      desc: "Bertanggung jawab atas pengembangan website organisasi dan sistem informasi internal.",
    },
    {
      date: "2023",
      title: "Koordinator Divisi IT",
      org: "Panitia Seminar Nasional Teknologi",
      desc: "Mengelola pendaftaran peserta digital dan sistem absensi berbasis web.",
    },
    {
      date: "2023",
      title: "Project Collaboration",
      org: "Tim Pengembang Aplikasi Kampus",
      desc: "Kolaborasi lintas jurusan dalam membangun solusi digital untuk kebutuhan akademik.",
    },
  ],
  kompetisi: [
    {
      date: "2024",
      title: "Data Science Competition",
      org: "Kompetisi Nasional ML",
      desc: "Ensemble modeling dengan LightGBM + XGBoost untuk prediksi data tabular.",
      color: "#60a5fa"
    },
    {
      date: "2024",
      title: "UI/UX Design Competition",
      org: "Hackathon Desain Produk",
      desc: "Merancang solusi digital end-to-end dalam waktu 48 jam bersama tim.",
      color: "#a78bfa"
    },
    {
      date: "2023 — 2024",
      title: "Sertifikasi",
      org: "Google · Dicoding · Coursera · RevoU",
      desc: "Google Data Analytics Professional Certificate, Front-End Web Development, Data Science Fundamentals.",
      color: "#4ade80"
    },
  ]
};

export const navigationLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Proyek", href: "#projects" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Kontak", href: "#contact" },
];
