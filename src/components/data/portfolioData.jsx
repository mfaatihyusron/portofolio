import { 
  Layout, 
  Code2, 
  Server, 
  Database, 
  Workflow, 
  Calendar,
  PenTool,
  Compass,
  Network,
  Palette,
  Video,
  Brush,
  FileText,
  Globe,
  AppWindow,
  ShieldAlert,
} from 'lucide-react';

import { 
  siFigma, 
  siNextdotjs, 
  siTailwindcss, 
  siJavascript, 
  siPhp, 
  siCodeigniter, 
  siPython,
  siHtml5,
  siBootstrap,
  siC,
  siCplusplus,
  siLaravel,
  siTypescript,
  siNodedotjs,
  siExpress,
  siReact,
  siKotlin,
  siOpenjdk,
  siDart,
  siMysql,
  siPostgresql,
  siSqlite,
  siSupabase,
  siGithub,
  siGitlab,
  siPostman,
  siLinear,
  siMiro,
  siVercel,
  siDiagramsdotnet,
  siGooglecolab,
} from 'simple-icons';

export const personalInfo = {
  name: "Muhammad Faatih Yusron",
  title: "UI/UX Designer · Frontend Developer · Data Enthusiast",
  shortBio: "Connecting user-centered design, modern web development, and evidence-based data analysis — to create digital solutions that are not only beautiful, but actually work.",
  longBio: "A Computer Science student who believes that the best products are born from the collaboration of deep user research, solid technical engineering, and sharp data intuition. Focus areas lie in Product Design, Web Development, and Machine Learning — three domains studied simultaneously to bridge the gap between design, engineering, and data teams.",
  email: "faatihyusron@gmail.com",
  github: "https://github.com/mfaatihyusron",
  linkedin: "https://www.linkedin.com/in/mfaatihyusron/",
  cv: "#",
  profileImage: "/assets/hero.png",
  avatarInitial: "MFY",
  availability: "Available 2025",
  tagline: "Open to Internships & Collaboration"
};

export const stats = [
  { value: "4+", label: "Completed Projects" },
  { value: "3", label: "Expertise Domains" },
  { value: "5+", label: "Certifications" },
  { value: "2+", label: "Competitions Entered" },
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
    title: "Data Science",
    icon: Database,
    skills: ["Python", "Pandas", "Scikit-learn", "Random Forest", "LightGBM", "XGBoost"],
  },
  {
    title: "Soft Skills",
    icon: Workflow,
    skills: ["Problem Solving","Leadership","Teamwork","Communication","Adaptability","Time Management"],
  },
];

export const technologies = [
  { name: "Affinity", category: "Design", icon: Brush },
{ name: "Archi", category: "Tools", icon: Network },
{ name: "Bootstrap", category: "Code", icon: siBootstrap },
{ name: "C", category: "Code", icon: siC },
{ name: "C++", category: "Code", icon: siCplusplus },
{ name: "Canva", category: "Design", icon: Palette },
{ name: "CapCut", category: "Design", icon: Video },
{ name: "CodeIgniter", category: "Code", icon: siCodeigniter },
{ name: "Dart", category: "Code", icon: siDart },
{ name: "Draw.io", category: ("Design"), icon: siDiagramsdotnet },
{ name: "Express", category: "Code", icon: siExpress },
{ name: "Figma", category: "Design", icon: siFigma },
{ name: "GitHub", category: "Tools", icon: siGithub },
{ name: "GitLab", category: "Tools", icon: siGitlab },
{ name: "Google Colab", category: "Tools", icon: siGooglecolab },
{ name: "HTML/CSS", category: "Code", icon: siHtml5 },
{ name: "Java", category: "Code", icon: siOpenjdk },
{ name: "JavaScript", category: "Code", icon: siJavascript },
{ name: "Kotlin", category: "Code", icon: siKotlin },
{ name: "Laravel", category: "Code", icon: siLaravel },
{ name: "Linear", category: "Tools", icon: siLinear },
{ name: "Maze", category: "Design", icon: Compass },
{ name: "Miro", category: "Design", icon: siMiro },
{ name: "MS Office 365", category: "Tools", icon: FileText },
{ name: "MySQL", category: "Code", icon: siMysql },
{ name: "Next.js", category: "Code", icon: siNextdotjs },
{ name: "Node.js", category: "Code", icon: siNodedotjs },
{ name: "PHP", category: "Code", icon: siPhp },
{ name: "Photoshop", category: "Design", icon: PenTool },
{ name: "PostgreSQL", category: "Code", icon: siPostgresql },
{ name: "Postman", category: "Tools", icon: siPostman },
{ name: "Python", category: "Code", icon: siPython },
{ name: "React", category: "Code", icon: siReact },
{ name: "SQLite", category: "Code", icon: siSqlite },
{ name: "Supabase", category: "Code", icon: siSupabase },
{ name: "Tailwind CSS", category: "Code", icon: siTailwindcss },
{ name: "TypeScript", category: "Code", icon: siTypescript },
{ name: "Vercel", category: "Tools", icon: siVercel }
];

export const projects = [
  {
    id: 1,
    title: "Courty",
    subtitle: "Online Sports Court Reservation Platform",
    category: "Full Stack",
    icon: Calendar,
    image: "/projects/courty.png",
    situation: "The sports court reservation process was manual and inefficient, leading to scheduling conflicts, lack of price transparency, and long queues.",
    action: "Developed an MVC-based web application featuring a role-based access control system (User, Partner/Owner, Super Admin), real-time schedule availability checks, dynamic popularity tracking, and a verification-based payment workflow.",
    result: "Reservations became faster and more accurate, schedules were managed efficiently, double-booking was completely prevented, and venue owners gained a digital control panel to scale their operations.",
    techStack: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript", "jQuery", "Tailwind CSS"],
    links: [
      { type: "github", label: "GitHub", url: "https://github.com/mfaatihyusron/Courty" },
      { type: "demo", label: "Documentation", url: "https://drive.google.com/file/d/1avSNncm6kok1qDPBw7sdVlP5GA4MpeYK/view?usp=sharing" }
    ],
    caseStudy: {
      role: "Fullstack Developer",
      timeline: "Nov 2025 — Jan 2026",
      deliverables: [
        "Web Application", 
        "Relational Database Schema (ERD) with 6 Tables", 
        "Interactive Admin, Partner, and User Dashboards"
      ],
      overview: `Courty was conceived to address the persistent inefficiencies in local sports court reservations, which are traditionally handled through fragmented, manual channels like phone calls, WhatsApp messages, or physical visits.
This outdated process frequently results in scheduling conflicts, double-bookings, and a complete lack of real-time price and slot transparency for customers.
For court owners (partners), managing bookings on paper ledgers or basic spreadsheets causes administrative bottlenecks, difficulties in verifying bank transfer receipts manually, and limited marketing reach to new customers.
Courty solves these problems by providing a centralized, web-based marketplace that synchronizes real-time court schedules, automates the booking-to-payment approval workflow, and gives renters, venue owners, and administrators dedicated portals to manage their operations seamlessly.`,
      challenges: [
        "Preventing reservation conflicts or double-bookings on the same time slot under concurrent user requests.",
        "Designing a secure and seamless onboarding flow for venue owners with detailed operational data.",
        "Structuring an integrated payment verification workflow between renters and court owners without direct API payment gateway overhead."
      ],
      solutions: [
        "Built a Real-Time Booking System that automatically calculates rental duration, computes pricing, and locks time slots during transaction states.",
        "Implemented a Secure Role-Based Access Control (RBAC) separating access rights and dashboard layouts for Users, Partners/Owners, and Super Admins.",
        "Designed a Two-Step Partner Registration Wizard that separates personal credentials from venue profile creation (storing business addresses, Google Maps links, and operating hours).",
        "Integrated a dynamic popularity tracker ('Trending Venues') that records page visits (view counts) to automatically promote highly-visited venues on the homepage."
      ],
      features: [
        "Multi-Role System (User / Partner / Admin): Customized portals where Users book courts, Partners manage assets and orders, and Admins moderate the platform.",
        "Two-Step Owner Registration: Smooth onboarding flow for business partners ensuring accurate data collection for sports venues.",
        "Interactive Booking & Schedule Checker: Live availability checking categorized by 7 sports (Futsal, Badminton, Swimming, Tennis, Padel, Basketball, Volleyball).",
        "Interactive Payment Approval Workflow: A secure flow where owners approve booking requests by uploading custom QR codes, and verify uploaded payment receipts before marked as 'Completed'.",
        "Custom Rejection System: Allows owners to decline a reservation by submitting a specific custom reason (e.g., public holidays, invalid transfer slips).",
        "Dynamic Venue Analytics (Popularity Engine): Automatically tracks venue detail page views to calculate and display trending venues dynamically.",
        "Complete Court CRUD Control: Dashboard for owners to add, edit, or delete individual courts, prices, descriptions, and high-quality profile photos."
      ],
      gallery: ["/projects/courty-1.png", "/projects/courty-2.png", "/projects/courty-3.png", "/projects/courty-4.png", "/projects/courty-5.png", "/projects/courty-6.png", "/projects/courty-7.png"]
    }
  },
  {
    id: 2,
    title: "Social Act",
    subtitle: "Social Action Transparency & GIS-Based Trash Reporting Website",
    category: "Full Stack",
    icon: Globe,
    image: "/projects/socialact.png",
    situation: "Environmental social movements often lack public trust due to a lack of financial transparency and unstructured trash location data.",
    action: "Designed an MVC web architecture with GIS mapping using Leaflet.js, integrated financial transparency charts with Chart.js, and volunteer registration.",
    result: "Increased public trust through real-time data transparency and simplified trash cleanup location mapping.",
    techStack: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript", "jQuery", "Tailwind CSS", "Leaflet.js", "Chart.js"],
    links: [
      { type: "github", label: "GitHub", url: "https://github.com/mfaatihyusron/socialact" },
      { type: "demo", label: "Documentation", url: "https://drive.google.com/file/d/1MLX4p8tCU-zMcTT6eVwOmfI18i5jiZAx/view?usp=sharing" }
    ],
    caseStudy: {
      role: "Fullstack Developer",
      timeline: "Dec 2025 — Jan 2026",
      deliverables: ["GIS Trash Mapping Portal", "Real-Time Financial Dashboard", "Volunteer Registration System"],
      overview: "SocialAct is a web application designed to modernize environmental social movements with a focus on public trust and data management efficiency. Inspired by the Pandawara Group, the platform integrates real-time financial transparency and Geographical Information System (GIS) based trash mapping.",
      challenges: [
        "Presenting social action funding alocation and usage openly and transparently.",
        "Displaying the latest trash locations visually on an interactive map.",
        "Managing data workflow and access rights among Super Admin, Finance Team, and Field Coordinators."
      ],
      solutions: [
        "Integrated Chart.js for real-time visualization of donation income and expense charts.",
        "Used Leaflet.js to map Geographical Information System (GIS) coordinates of trash reports in the field.",
        "Applied Role-Based Access Control (RBAC) to divide authority among Super Admin, Finance, and Field Coordinators."
      ],
      features: [
        "Financial Transparency Dashboard: Real-time visualization of donation income and fund expenditures.",
        "GIS Interactive Mapping: Geographically-based distribution and reporting of trash locations.",
        "Donation & Volunteer System: Integrated donation forms and volunteer activity registration.",
        "Execution Gallery & Reports: Documentation gallery of cleanups and report resolution progress."
      ],
      gallery: ["/projects/socialact-1.png", "/projects/socialact-2.png"]
    }
  },
  {
    id: 3,
    title: "Barn-E",
    subtitle: "Integrated Livestock Management Solution",
    category: "UI/UX Design",
    icon: AppWindow,
    image: "/projects/barne.png",
    situation: "Farmers experienced difficulties in manually recording livestock conditions, lacked access to livestock information, and had no integrated monitoring system.",
    action: "Conducted user research (interviews & observations) using the Design Thinking method, constructed Customer Journey Maps, Empathy Maps, POV Statements, Wireframes, and High-Fidelity Prototypes.",
    result: "Delivered an intuitive app interface design that makes it easy for farmers to monitor livestock health, daily schedules, and farming information.",
    techStack: ["Figma", "Design Thinking", "UX Research", "Prototyping", "Maze"],
    links: [
      { type: "figma", label: "Figma Prototype", url: "https://www.figma.com/proto/nDNOmStAz0rpph60lDBihn/Apk-BarnE-peternak?node-id=334-1053&p=f&t=Le50htaI0RIXD5z2-1&scaling=scale-down&content-scaling=fixed&page-id=5%3A3&starting-point-node-id=334%3A1053&show-proto-sidebar=1" },
      { type: "demo", label: "Documentation", url: "https://drive.google.com/file/d/15Lwq8PpEQ_4agbwdibzkyE9rK5bLQo0K/view?usp=drive_link" }
    ],
    caseStudy: {
      role: "UI/UX Designer",
      timeline: "Jan 2026 — Feb 2026",
      deliverables: ["Interactive Figma Prototype", "Design Thinking Research Report", "Empathy & Journey Maps"],
      overview: "Barn-E is a digital platform designed to help farmers manage livestock activities more easily and efficiently. The interface design was developed based on the real needs of farmers through an in-depth research process, prioritizing ease of use and clarity of information.",
      challenges: [
        "Managing farming schedules and recording livestock health conditions manually in notebooks or Excel sheets.",
        "Helping farmers anticipate and prevent contagious diseases such as FMD (Foot and Mouth Disease).",
        "Ensuring the application is easily understood by farmers from non-technical backgrounds."
      ],
      solutions: [
        "Utilized the Design Thinking method focusing on direct user experience via interviews and observations.",
        "Structured Point of View (POV) statements and Customer Journey Maps to focus features on actual farmer workflows.",
        "Created a livestock QR/Barcode scanning feature for quick access to individual livestock health history.",
        "Designed interactive Daily Tasks & Care Schedules to remind farmers of routine maintenance activities."
      ],
      features: [
        "Livestock QR Code Scan: Quick digital identification to view the profile and health condition of each animal.",
        "Daily Tasks & Schedule: Automatic reminders for feeding, cleaning barns, and administering medicine.",
        "Profile & Health Details: Monitor medical records and weight progress of livestock.",
        "Livestock Catalog & Toko Ternak: Simplifies buying and selling farming supplies or products."
      ],
      gallery: ["/projects/barne-1.png", "/projects/barne-2.png","/projects/barne-3.png"]
    }
  },
  {
    id: 4,
    title: "SIGAP",
    subtitle: "Emergency Information and Disaster Warning System in Indonesia",
    category: "UI/UX Design",
    icon: ShieldAlert,
    image: "/projects/sigap.png",
    situation: "Disaster information in Indonesia is often delayed, difficult to verify, and coordination between communities, volunteers, and BPBD remains constrained by informal communication channels.",
    action: "Applied the Design Thinking approach, mapped the emergency reporting User Journey, and developed High-Fidelity UI layouts and interactive prototypes in Figma.",
    result: "Designed a disaster reporting and mitigation system that accelerates emergency response and unifies volunteer coordination.",
    techStack: ["Figma", "Design Thinking", "UX Research", "Prototyping"],
    links: [
      { type: "figma", label: "Figma Prototype", url: "https://www.figma.com/proto/WjrHhHqYQsJ9l4bBQ1PUBI/Baru-Aplikasi-SIGAP?node-id=72-763&scaling=scale-down&page-id=3%3A196&starting-point-node-id=72%3A763&show-proto-sidebar=1&t=OhU3Wiz9ydwo4dQV-1" },
      { type: "demo", label: "Documentation", url: "https://drive.google.com/file/d/1i_eRHzMVuJZ2DJR_EUaSlFhBMQKPPb5_/view?usp=sharing" }
    ],
    caseStudy: {
      role: "UI/UX Designer",
      timeline: "Feb 2026 — Mar 2026",
      deliverables: ["Interactive Mobile UI Prototype", "User Journey & Persona Diagrams", "Case Study Medium Article"],
      overview: "SIGAP is a mitigation-based mobile application designed to help communities report disaster events quickly, easily, and in real-time. User reports can be forwarded to relevant agencies like BPBD and volunteers to speed up response efforts.",
      challenges: [
        "Reporting disasters during panic requires an extremely simple and efficient user interface.",
        "Minimnya informasi lokasi bencana terverifikasi yang bisa langsung diakses tim SAR/Basarnas.",
        "Low public understanding and education regarding disaster preparedness before events occur."
      ],
      solutions: [
        "Menerapkan metode Design Thinking melalui wawancara dan analisis kebutuhan korban/relawan bencana.",
        "Merancang Tombol SOS Darurat & Panggilan Cepat (112 / Basarnas) yang accessible langsung dari halaman utama.",
        "Menyediakan fitur Peta Persebaran Bencana Interaktif dan Modul Edukasi Kebencanaan."
      ],
      features: [
        "Tombol SOS & Panggilan Darurat: Fitur panggil bantuan 1-tap to relevant emergency services.",
        "Peta Persebaran Bencana: Visualisasi lokasi bencana terdekat secara real-time.",
        "Formulir Pelaporan Cepat: Laporkan kondisi banjir/gempa dengan foto dan koordinat lokasi.",
        "Edukasi Kebencanaan: Panduan langkah-langkah evakuasi pra dan pasca bencana."
      ],
      gallery: ["/projects/sigap-1.png", "/projects/sigap-2.png", "/projects/sigap-3.png"]
    }
  }
];

export const experiences = {
  work: [
    {
      date: "Feb 2026 — Present",
      title: "UI/UX Designer",
      org: "SIERA",
      desc: "New Student orientation system built from scratch for UPNVJ incoming students supporting 6,000+ concurrent users. Designed the Admin Dashboard within a 5-member UI/UX team (70+ member project). Created wireframes and high-fidelity designs supporting 10 administrative roles (Home, Group, Event, Attendance Management) and translated requirements to support 13 user roles.",
    },
    {
      date: "July 2025 — Jan 2026",
      title: "UI/UX Designer",
      org: "Web Development SDN Joglo 05",
      desc: "A web-based school management system digitalizing academic and administrative processes for 300+ users. Designed the UI/UX featuring 6+ core modules using a consistent design system, created 15+ wireframes/hi-fi interface screens, and collaborated with a 20-member cross-functional team.",
    },
    {
      date: "Sep 2025 — Dec 2025",
      title: "Graphic Designer",
      org: "Kreativa Scope Batch 2 Program",
      desc: "A creative internship program focused on visual communication, branding, and digital content creation. Designed Instagram feed posts and Reels thumbnails following design systems. Collaborated with a 7-member creative team and refined designs through senior mentorship.",
    },
    {
      date: "Jan 2022 — Apr 2022",
      title: "Assistant Junior Web Programmer",
      org: "Pt. Citra Agung Mestika",
      desc: "Internet Service Provider Company. Collaborated with a 4-member development team to design UI/UX prototypes in Figma and develop the 'IP1' company website using Bootstrap and CodeIgniter 4, implementing and maintaining 6+ core website sections.",
    },
  ],

  organisasi: [
    {
      date: "Jun 2026 — Present",
      title: "Academic Staff",
      org: "KSM MULTIMEDIA UPN \"Veteran\" Jakarta",
      desc: "Developed a structured UI/UX curriculum for 20+ participants with mentors. Coordinated and scheduled 16 mentoring sessions. Managed attendance, tasks, and grading, and served as the primary liaison between mentors, participants, and the organizing committee.",
    },
    {
      date: "Mar 2026 — Present",
      title: "Member",
      org: "KSM Veterantech UPN \"Veteran\" Jakarta",
      desc: "Collaborated with 50+ members through weekly study groups. Completed structured study clubs in Data Science and Backend Web Development (Node.js, Express.js, REST APIs). Participated in 5+ mentoring sessions for career development, mock interviews, and portfolio reviews.",
    },
    {
      date: "Nov 2025",
      title: "Event Division & MC",
      org: "Learning with Android",
      desc: "Education seminar and workshop introducing AI automation. Led a 4-hour technology seminar for 96 participants. Coordinated 20+ agenda items as part of the Event Division, ensuring activities followed the timeline. Collaborated with a 30-member organizing committee.",
    },
    {
      date: "May 2025",
      title: "Transportation Division",
      org: "Tech for Society - SMA Negeri 6 Tangerang Selatan",
      desc: "Community outreach program introducing technology skills to high school students. Assisted in mentoring 30+ students during hands-on workshops on UI/UX Design and Website Development, and coordinated event logistics for a team of 28 committees.",
    },
  ],

  sertifikasi: [
    {
      date: "Mar 2026",
      title: "Starting Programming with Dart",
      org: "Dicoding",
      desc: "Completed a 30-hour introductory Dart course covering programming fundamentals and coding best practices, including a final project and assessment.",
    },
    {
      date: "Feb 2026",
      title: "Backend Web Development Basic Study Club",
      org: "KSM Veterantech",
      desc: "Completed a 15-hour program covering JavaScript fundamentals, Node.js, Express.js, CRUD, REST API, Git, and API testing with Postman through guided exercises.",
    },
    {
      date: "Aug 2025",
      title: "Data Classification and Summarization Using IBM Granite",
      org: "IBM",
      desc: "Leveraged IBM Granite Generative AI models to automate large-scale text classification and data summarization workflows.",
    },
    {
      date: "Jul 2025",
      title: "Data Science Beginner Study Club",
      org: "KSM Veterantech",
      desc: "Completed a 15-hour program covering clustering, ensemble learning, time series forecasting, NLP, deep learning, and model deployment concepts through mentoring.",
    },
    {
      date: "Jan 2025",
      title: "Data Science Basic Study Club",
      org: "KSM Veterantech",
      desc: "Completed a 13.5-hour program covering Python fundamentals, basic data science, and introductory machine learning through guided projects.",
    },
  ],
};

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
