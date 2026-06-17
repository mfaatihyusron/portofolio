import { 
  Layout, 
  Code2, 
  Server, 
  Database, 
  Workflow, 
  Zap,
  TrendingUp,
  Calendar,
  Activity,
  Bike,
  BarChart3,
} from 'lucide-react';

import { 
  siFigma, 
  siNextdotjs, 
  siTailwindcss, 
  siJavascript, 
  siPhp, 
  siCodeigniter, 
  siPython,
  siScikitlearn,
} from 'simple-icons';

export const personalInfo = {
  name: "Muhammad Faatih Yusron",
  title: "UI/UX Designer · Frontend Developer · Data Enthusiast",
  shortBio: "Menghubungkan desain yang berpusat pada pengguna, pengembangan web modern, dan analisis data berbasis bukti — untuk menciptakan solusi digital yang tidak hanya indah, tapi benar-benar bekerja.",
  longBio: "Mahasiswa Ilmu Komputer yang percaya bahwa produk terbaik lahir dari kolaborasi antara riset pengguna yang mendalam, rekayasa teknis yang solid, dan intuisi data yang tajam. Fokus saya ada di Product Design, Web Development, dan Machine Learning — tiga domain yang saya pelajari secara bersamaan agar bisa menjadi jembatan antara tim desain, engineering, dan data.",
  email: "faatihyusron@email.com",
  github: "https://github.com/mfaatihyusron",
  linkedin: "https://www.linkedin.com/in/mfaatihyusron/",
  cv: "#",
  profileImage: "/assets/hero.png",
  avatarInitial: "MFY",
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
    icon: Layout,
    skills: ["User Research", "User Flow", "Journey Mapping", "Wireframing", "Design System", "Prototyping", "Figma"],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["PHP", "CodeIgniter 3", "REST API", "MySQL", "Database Design"],
  },
  {
    title: "Data Science & ML",
    icon: Database,
    skills: ["Python", "Pandas", "Scikit-learn", "Random Forest", "LightGBM", "XGBoost"],
  },
  {
    title: "Metodologi",
    icon: Workflow,
    skills: ["Agile", "Scrum", "Design Thinking", "Data Analysis", "Problem Solving"],
  },
];

export const technologies = [
  {
    name: "Figma",
    category: "UI/UX Design",
    level: 90,
    description: "Membangun design system, komponen reusable, variant management, dan user journey map pada berbagai proyek aplikasi digital.",
    icon: siFigma,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 80,
    description: "Framework utama untuk membangun aplikasi web modern dengan performa tinggi dan struktur scalable.",
    icon: siNextdotjs,
  },
  {
    name: "Tailwind",
    category: "Frontend",
    level: 88,
    description: "Membangun UI responsif secara cepat dengan pendekatan utility-first yang konsisten.",
    icon: siTailwindcss,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 82,
    description: "Interaksi dinamis dan logic client-side pada berbagai proyek web.",
    icon: siJavascript,
  },
  {
    name: "PHP",
    category: "Backend",
    level: 75,
    description: "Sistem web dinamis berbasis database dengan arsitektur MVC.",
    icon: siPhp,
  },
  {
    name: "CodeIgniter",
    category: "Backend",
    level: 72,
    description: "Aplikasi reservasi lapangan dan sistem informasi berbasis CI3.",
    icon: siCodeigniter,
  },
  {
    name: "Python",
    category: "Data Science",
    level: 85,
    description: "Bahasa utama untuk data processing, machine learning, dan analisis data.",
    icon: siPython,
  },
  {
    name: "Random Forest",
    category: "ML",
    level: 78,
    description: "Feature importance analysis dan predictive modeling pada dataset kompetisi.",
    icon: siScikitlearn,
  },
  {
    name: "LightGBM",
    category: "ML",
    level: 76,
    description: "Optimasi model machine learning pada dataset kompetisi dengan efisiensi tinggi.",
    icon: Zap,
  },
  {
    name: "XGBoost",
    category: "ML",
    level: 74,
    description: "Meningkatkan performa prediksi dan evaluasi model pada kompetisi data science.",
    icon: TrendingUp,
  },
];

export const projects = [
  {
    id: 1,
    title: "Courty",
    subtitle: "Aplikasi Reservasi Lapangan Olahraga Real-Time",
    category: "Full Stack",
    icon: Calendar,
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
    icon: Activity,
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
    icon: Bike,
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
    icon: BarChart3,
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
      date: "Jun 2026 — Jan 2027",
      title: "Staff Divisi Akademik",
      org: "KSM Multimedia UPN Veteran Jakarta",
      desc: "Menyusun silabus UI/UX, mengelola jadwal dan absensi peserta, berkoordinasi dengan mentor, serta terlibat dalam kepanitiaan dan pengembangan program akademik.",
    },
    {
      date: "Mar 2026 — Des 2026",
      title: "Anggota",
      org: "KSM Android UPN Veteran Jakarta (VeteranTech)",
      desc: "Mengikuti berbagai program pengembangan skill teknologi, berkolaborasi lintas bidang, memperluas jaringan profesional, dan belajar dari senior di bidang teknologi.",
    },
    {
      date: "Mei 2025",
      title: "Staff Divisi Transportasi",
      org: "Tech for Society - KSM Android UPNVJ",
      desc: "Mengelola koordinasi logistik kegiatan edukasi digital di SMAN 6 Tangerang serta membantu siswa memahami materi dasar UI/UX dan pemrograman website.",
    },
    {
      date: "2025",
      title: "Staff Divisi Acara as Master of Ceremony",
      org: "Tech for Society - KSM Android UPNVJ",
      desc: "Mengelola koordinasi logistik kegiatan edukasi digital di SMAN 6 Tangerang serta membantu siswa memahami materi dasar UI/UX dan pemrograman website.",
    },
  ],

  kompetisi: [
    {
      date: "2025",
      title: "Lulus Program Kreativitas Mahasiswa (PKM)",
      org: "Universitas Pembangunan Nasional Veteran Jakarta",
      desc: "Lulus seleksi Program Kreativitas Mahasiswa tingkat universitas setelah melalui tahapan seleksi di tingkat fakultas.",
      color: "#60a5fa",
    },
    {
      date: "2025",
      title: "Assistant Junior Web Developer (Magang)",
      org: "PT Citra Agung Mestika",
      desc: "Merancang UI/UX menggunakan Figma dan mengembangkan website menggunakan Bootstrap CSS serta CodeIgniter 4 dalam tim pengembang.",
      color: "#a78bfa",
    },
    {
      date: "2025",
      title: "UI/UX Designer Intern",
      org: "Project Web Development SDN Joglo 05 Pagi",
      desc: "Merancang antarmuka dan pengalaman pengguna untuk sistem pengelolaan sekolah yang mencakup data siswa, guru, kelas, penilaian, dan prestasi.",
      color: "#4ade80",
    },
    {
      date: "2025",
      title: "Graphic Designer Intern",
      org: "Kreativa Scope Batch 2",
      desc: "Membuat desain konten media sosial dan thumbnail video, serta berkolaborasi dengan script writer dalam proses produksi konten digital.",
      color: "#fbbf24",
    },
    {
      date: "2024",
      title: "Data Science Basic",
      org: "KSM Android UPN Veteran Jakarta",
      desc: "Menyelesaikan program Data Science Basic (13,5 jam) yang mencakup spreadsheet, Python, Exploratory Data Analysis (EDA), statistika, data preparation, supervised dan unsupervised learning, serta implementasi proyek machine learning sederhana.",
      color: "#38bdf8",
    },
    {
      date: "2025",
      title: "Data Science Beginner",
      org: "KSM Android UPN Veteran Jakarta",
      desc: "Menyelesaikan program Data Science Beginner (15 jam) yang membahas clustering, dimensionality reduction, ensemble learning, hyperparameter tuning, recommendation system, time series, NLP, sentiment analysis, deep learning, dan deployment machine learning.",
      color: "#818cf8",
    },
    {
      date: "2025",
      title: "Data Classification and Summarization Using IBM Granite",
      org: "IBM SkillsBuild",
      desc: "Mempelajari klasifikasi data dan peringkasan teks otomatis menggunakan IBM Granite, termasuk pengolahan data tidak terstruktur dan penerapan Generative AI.",
      color: "#06b6d4",
    },
      ],
};

export const navigationLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Proyek", href: "#projects" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Kontak", href: "#contact" },
];
