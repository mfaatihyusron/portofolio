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
  shortBio: "Connecting user-centered design, modern web development, and evidence-based data analysis to create digital solutions that are not only beautiful, but actually work.",
  longBio: "A Computer Science student who believes that the best products are born from the collaboration of deep user research, solid technical engineering, and sharp data intuition. Focus areas lie in Product Design, Web Development, and Machine Learning, three domains studied simultaneously to bridge the gap between design, engineering, and data teams.",
  email: "faatihyusron@gmail.com",
  github: "https://github.com/mfaatihyusron",
  linkedin: "https://www.linkedin.com/in/mfaatihyusron/",
  cv: "https://drive.google.com/file/d/1i9eT5MPtcgKd0DiyU5iOClKvN5YRWhMI/view?usp=drive_link",
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
    title: "SocialAct",
    subtitle: "GIS-Based Social Action & Donation Transparency Platform",
    category: "Full Stack",
    icon: Globe,
    image: "/projects/socialact.png",

    situation:
      "Environmental cleanup initiatives often struggle with limited public trust due to opaque donation management and the absence of a centralized platform for reporting and tracking waste locations.",

    action:
      "Built a full-stack web platform using CodeIgniter 3 with Role-Based Access Control (RBAC), GIS-based waste reporting powered by Leaflet.js, real-time financial transparency dashboards using Chart.js, and volunteer event management.",

    result:
      "Centralized waste reporting, improved transparency of donation usage, and streamlined collaboration between the public, finance administrators, and field coordinators through a single integrated platform.",

    techStack: [
      "PHP",
      "CodeIgniter 3",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Tailwind CSS",
      "Leaflet.js",
      "Chart.js"
    ],

    links: [
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/mfaatihyusron/socialact"
      },
      {
        type: "demo",
        label: "Documentation",
        url: "https://drive.google.com/file/d/1MLX4p8tCU-zMcTT6eVwOmfI18i5jiZAx/view?usp=sharing"
      }
    ],

    caseStudy: {
      role: "Full Stack Developer",

      timeline: "Dec 2025 — Jan 2026",

      deliverables: [
        "GIS Waste Reporting Platform",
        "Donation Transparency Dashboard",
        "Volunteer Management System",
        "Role-Based Administration Panel"
      ],

      overview:
        "SocialAct is a web-based platform designed to improve the effectiveness of community-driven environmental cleanup initiatives by addressing two major challenges: the lack of transparency in donation management and the absence of a centralized system for reporting and monitoring waste locations. Inspired by initiatives such as Pandawara Group, the platform enables the public to report waste through an interactive GIS map, participate in volunteer activities, donate to cleanup programs, and monitor how donated funds are allocated. Administrative workflows are separated through Role-Based Access Control (RBAC), allowing Finance Admins, Field Coordinators, and Super Admins to manage responsibilities efficiently while maintaining accountability.",

      challenges: [
        "Building public trust by providing transparent records of donation income and operational expenses.",
        "Providing an intuitive GIS interface for reporting, locating, and tracking waste cleanup progress.",
        "Managing different administrative responsibilities securely through role-based permissions.",
        "Connecting public participation, volunteer coordination, financial management, and field operations within one integrated platform."
      ],

      solutions: [
        "Implemented a Financial Transparency Dashboard with Chart.js to visualize donation income, expenses, and account balances in real time.",
        "Developed an interactive GIS mapping system using Leaflet.js for waste reporting, geographic visualization, and cleanup status tracking.",
        "Designed a Role-Based Access Control (RBAC) architecture separating permissions for Super Admin, Finance Admin, and Field Coordinator.",
        "Integrated donation submission, volunteer registration, event management, and before-after cleanup documentation into a unified workflow."
      ],

      features: [
        "GIS Waste Reporting: Interactive map for reporting waste locations with coordinates and before-after cleanup images.",
        "Financial Transparency Dashboard: Public visualization of donations, expenditures, and fund allocation.",
        "Donation Management: Donation submission with payment proof upload and finance verification workflow.",
        "Volunteer Hub: Volunteer event creation, registration, and participant management.",
        "Role-Based Admin Panel: Dedicated dashboards for Super Admin, Finance Admin, and Field Coordinator.",
        "Cleanup Progress Tracking: Status monitoring from Pending to In Progress and Resolved with supporting documentation."
      ],

      gallery: [
        "/projects/socialact-1.png",
        "/projects/socialact-2.png",
        "/projects/socialact-3.png",
        "/projects/socialact-4.png",
        "/projects/socialact-5.png",
        "/projects/socialact-6.png",
        "/projects/socialact-7.png",
        "/projects/socialact-8.png",
        "/projects/socialact-9.png",
        "/projects/socialact-10.png"
      ]
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
  },
  {
    id: 5,
    title: "ProdActivity",
    subtitle: "AI-Powered Student Productivity & Career Insight Platform",
    category: "Frontend",
    icon: ShieldAlert,
    image: "/projects/ProdActivity.jpg",

    situation:
      "Students often rely on multiple disconnected tools to manage academic tasks, personal notes, and career planning, making it difficult to monitor productivity and gain meaningful insights from their activities.",

    action:
      "Designed the end-to-end user experience and implemented a responsive React frontend featuring productivity dashboards, activity management, AI-powered career insights, and an interactive chatbot with a clean, modern interface.",

    result:
      "Delivered a centralized productivity platform that simplifies daily activity management while providing clear visualizations and an intuitive user experience for AI-assisted career analysis.",

    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Recharts",
      "Lucide React"
    ],

    links: [
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/Liaurentino/ProdActivity"
      },
      {
        type: "demo",
        label: "Documentation",
        url: "https://drive.google.com/file/d/1J5Y1E2OxolKg6XeuXQGdYzf_-jI8-boi/view?usp=drive_link"
      }
    ],

    caseStudy: {
      role: "UI/UX Designer & Front-End Developer",

      timeline: "May 2026 - July 2026",

      deliverables: [
        "User Research & UI Design",
        "Responsive React Frontend",
        "Productivity Dashboard",
        "Activity Management Interface",
        "AI Career Insight Interface",
        "AI Chat Interface"
      ],

      overview:
        "ProdActivity is an AI-powered web platform that helps university students organize daily activities, track productivity, and receive personalized career recommendations based on their completed activities and interests. As the UI/UX Designer and Front-End Developer, I designed the user journey, crafted a modern and accessible interface, and implemented responsive frontend pages that transform complex productivity and AI-generated information into intuitive, easy-to-understand experiences.",

      challenges: [
        "Designing a dashboard capable of presenting productivity metrics without overwhelming users.",
        "Creating a seamless workflow for managing activities, notes, and AI features within one application.",
        "Presenting AI-generated career recommendations in a clear, trustworthy, and actionable format.",
        "Maintaining a consistent design system across multiple modules and responsive screen sizes."
      ],

      solutions: [
        "Designed a clean dashboard with progress rings, timeline views, weekly charts, and category statistics for quick productivity monitoring.",
        "Developed reusable React components with Tailwind CSS to ensure a consistent and responsive interface.",
        "Created intuitive user flows for onboarding, activity management, AI career analysis, and AI chat interactions.",
        "Applied a modern design system emphasizing readability, visual hierarchy, and user-friendly navigation."
      ],

      features: [
        "Productivity Dashboard with activity statistics, progress tracking, and visual analytics.",
        "Activity Tracker for managing academic, organizational, and personal activities.",
        "Notes & Todo Management with dynamic checklist functionality.",
        "AI Career Insight interface displaying career predictions, recommended skills, and next steps.",
        "AI Chat interface supporting document upload and conversational assistance.",
        "Responsive Authentication and Onboarding experience for new users."
      ],

      gallery: [
        "/projects/ProdActivity-1.jpg",
        "/projects/ProdActivity-2.jpg",
        "/projects/ProdActivity-3.jpg",
        "/projects/ProdActivity-4.jpg",
        "/projects/ProdActivity-5.jpg",
        "/projects/ProdActivity-6.jpg",
        "/projects/ProdActivity-7.jpg"
      ]
    } 
  },
  {
    id: 6,

    title: "SIERA",

    subtitle: "New Student Campus Life Orientation System for Incoming UPNVJ Students",

    category: "UI/UX Design",

    icon: ShieldAlert,

    image: "/projects/siera.png",

    situation: "The new student orientation process at UPNVJ required a centralized system to manage thousands of incoming students while supporting multiple administrative roles and complex event, group, and attendance workflows.",

    action: "Designed the Admin Dashboard as part of a 5-member UI/UX team from 70+ developers, creating wireframes and high-fidelity interfaces for 10 administrative roles. Collaborated with product managers and engineers to translate product requirements into intuitive and consistent user experiences.",

    result: "Designed a scalable orientation management system capable of supporting 6,000+ concurrent users and 13 user roles, streamlining administrative workflows for group, event, and attendance management.",

    techStack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design System"],

    links: [
      { type: "demo", label: "Website", url: "https://siera.upnvj.ac.id/" },
      { type: "demo", label: "Product Requirements", url: "https://drive.google.com/file/d/1iKuCUs_qpsAABNorUvl7RMco_lPoVIvh/view?usp=drive_link" },
    ],

    caseStudy: {

      role: "UI/UX Designer",

      timeline: "Feb 2026 - Mar 2026",

      deliverables: [
        "Admin Dashboard UI",
        "Wireframes & High-Fidelity Designs",
        "User Flow & Interaction Design",
        "Design System / UI Components"
      ],

      overview: "SIERA is a new student orientation system built from scratch for incoming UPNVJ students, designed to support 6,000+ concurrent users. Developed through a 70+ member cross-functional collaboration involving Product Managers, UI/UX Designers, Engineers, and QA, the project focused on creating a scalable and seamless experience across 13 user roles. As part of a 5-member UI/UX team, I contributed to the Admin Dashboard experience, designing key workflows for administrative operations. Beyond improving the orientation experience, the project contributed to a YoY 275% increase in merchandise sales revenue, growing from Rp80 million to Rp300 million.",

      challenges: [

        "The system needed to accommodate complex workflows across 10 administrative roles with different responsibilities and access needs.",

        "Designing an administrative dashboard that could remain intuitive and consistent despite the scale of the system and number of user roles.",

        "Translating product requirements into clear interfaces while maintaining alignment between UI/UX, product, and engineering teams."

      ],

      solutions: [

        "Designed the Admin Dashboard from scratch, covering key workflows such as Home, Group Management, Event Management, and Attendance Management.",

        "Created wireframes and high-fidelity UI designs to validate user flows and establish consistent interaction patterns across administrative features.",

        "Collaborated closely with product managers and engineers to align design decisions with product requirements, technical constraints, and the needs of 13 user roles."

      ],

      features: [

        "Admin Dashboard: Centralized overview for administrators to monitor and manage orientation activities.",

        "Group Management: Interface for organizing and managing incoming students across orientation groups.",

        "Event Management: Tools for administrators to create, organize, and manage orientation events.",

        "Attendance Management: Streamlined interface for monitoring and managing student attendance.",

        "Multi-Role Support: Designed workflows and interfaces to accommodate 10 administrative roles within a system supporting 13 total user roles."

      ],

      gallery: [
        "/projects/siera-1.png",
        "/projects/siera-2.png",
        "/projects/siera-3.png"
      ]

    }
  },
  {
    id: 7,

    title: "Web Development SDN Joglo 05",

    subtitle: "School Management System for Academic and Administrative Processes",

    category: "UI/UX Design",

    icon: ShieldAlert,

    image: "/projects/sdnjoglo.png",

    situation: "SDN Joglo 05 needed a web-based school management system to digitalize academic and administrative processes while supporting the needs of approximately 300+ users.",

    action: "Designed the UI/UX for a school management system with 6+ core modules, creating 15+ wireframes and high-fidelity interface screens in Figma. Collaborated with a 20-member cross-functional team, working closely with developers and stakeholders to translate requirements into implementable design solutions.",

    result: "Delivered a consistent and user-friendly school management interface that supported the digitalization of academic and administrative processes for 300+ users.",

    techStack: ["Figma", "UI/UX Design", "Wireframing", "High-Fidelity Design", "Design System"],

    links: [
      { type: "demo", label: "Website", url: "https://sdnjoglo05.sch.id/id" },
      { type: "demo", label: "Requirement Document", url: "https://drive.google.com/file/d/1CxKy0zmBihAQfRdVYtfT9mdWZY92S_cJ/view?usp=drive_link" }
    ],

    caseStudy: {

      role: "UI/UX Designer",

      timeline: "July 2025 - Jan 2026",

      deliverables: [
        "School Management System UI",
        "Wireframes & High-Fidelity Designs",
        "User Flow & Interaction Design",
        "Design System / UI Components"
      ],

      overview: "Web Development SDN Joglo 05 is a web-based school management system designed to digitalize academic and administrative processes for approximately 300+ users. As a UI/UX Designer, I contributed to designing the interface across 6+ core modules, creating 15+ wireframes and high-fidelity screens in Figma. The project involved collaboration within a 20-member cross-functional team, working closely with developers and stakeholders to translate requirements into consistent and implementable design solutions.",

      challenges: [

        "The system needed to support academic and administrative processes for approximately 300+ users while maintaining a simple and user-friendly experience.",

        "Designing multiple core modules while ensuring visual and interaction consistency across the entire school management system.",

        "Translating requirements from stakeholders into practical UI/UX solutions that could be effectively implemented by developers."
      ],

      solutions: [

        "Designed UI/UX for 6+ core modules of the school management system using a consistent design system and reusable interface patterns.",

        "Created 15+ wireframes and high-fidelity interface screens in Figma to define user flows, layouts, and interactions before implementation.",

        "Collaborated closely with developers and stakeholders within a 20-member cross-functional team to refine requirements and ensure design solutions were technically implementable."
      ],

      features: [

        "Academic Management: Designed interfaces to support the digitalization of school academic processes.",

        "Administrative Management: Created user interfaces for administrative workflows within the school management system.",

        "Multi-Module System: Designed UI/UX across 6+ core modules while maintaining consistency throughout the platform.",

        "Design System: Applied consistent UI components, visual patterns, and interaction principles across the system.",

        "User-Centered Interface: Developed 15+ wireframes and high-fidelity screens to create a clear and user-friendly experience for 300+ users."
      ],

      gallery: [
        "/projects/sdnjoglo-1.png",
        "/projects/sdnjoglo-2.png",
        "/projects/sdnjoglo-3.png",
        "/projects/sdnjoglo-4.png",
        "/projects/sdnjoglo-5.png",
        "/projects/sdnjoglo-6.png",
        "/projects/sdnjoglo-7.png",
        "/projects/sdnjoglo-8.png",
        "/projects/sdnjoglo-9.png"
      ]

    }
  },
  {
    id: 5,
    title: "ProdActivity",
    subtitle: "AI-Powered Student Productivity & Career Insight Platform",
    category: "UI/UX Design",
    icon: ShieldAlert,
    image: "/projects/ProdActivity.jpg",

    situation:
      "University students often manage academic activities, personal tasks, notes, and career planning across disconnected tools, making it difficult to maintain productivity and understand how their activities contribute to their future career goals.",

    action:
      "Designed the end-to-end user experience for ProdActivity, from user flows and information architecture to high-fidelity interfaces and interactive prototypes. Focused on creating a clear and intuitive experience for productivity tracking, activity management, AI-powered career insights, and conversational AI features.",

    result:
      "Created a centralized and user-friendly experience that helps students manage daily activities, monitor productivity, and understand AI-generated career insights through clear information hierarchy and intuitive interactions.",

    techStack: [
      "Figma",
      "UI/UX Design",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Design System"
    ],

    links: [
      {
        type: "demo",
        label: "Documentation",
        url: "https://drive.google.com/file/d/1J5Y1E2OxolKg6XeuXQGdYzf_-jI8-boi/view?usp=drive_link"
      }
    ],

    caseStudy: {
      role: "UI/UX Designer & Front-End Developer",

      timeline: "May 2026 - July 2026",

      deliverables: [
        "User Flow & Information Architecture",
        "Wireframes & High-Fidelity Designs",
        "Productivity Dashboard UI",
        "Activity Management Interface",
        "AI Career Insight Interface",
        "AI Chat Interface",
        "Design System & UI Components"
      ],

      overview:
        "ProdActivity is an AI-powered productivity and career insight platform designed to help university students organize their daily activities, track productivity, and gain personalized career insights. As the UI/UX Designer, I designed the end-to-end user experience, focusing on simplifying complex productivity data and AI-generated recommendations into clear, intuitive, and actionable interfaces. The design process covered user flows, information architecture, wireframing, high-fidelity UI design, prototyping, and the creation of reusable UI components.",

      challenges: [
        "Designing a productivity dashboard that communicates multiple types of information without overwhelming students.",

        "Creating a seamless experience that connects daily activity management with productivity tracking and career development.",

        "Presenting AI-generated career recommendations in a way that feels clear, understandable, and actionable for students.",

        "Maintaining a consistent visual language and interaction pattern across productivity, activity management, and AI-powered features.",

        "Designing an experience that remains intuitive across different screen sizes and user contexts."
      ],

      solutions: [
        "Designed the information architecture and user flows to create a clear connection between activities, productivity data, and career insights.",

        "Created wireframes to validate page structure, content hierarchy, and user interactions before moving into high-fidelity designs.",

        "Designed a dashboard using visual hierarchy, progress indicators, charts, and categorized information to make productivity data easier to understand.",

        "Designed AI Career Insight interfaces that organize career predictions, recommended skills, and suggested next steps into digestible sections.",

        "Created intuitive interaction patterns for activity management, notes, todos, onboarding, and AI chat features.",

        "Established reusable UI components and design patterns to maintain consistency across the platform."
      ],

      features: [
        "Productivity Dashboard: Visual overview of productivity metrics, progress, activity trends, and category statistics.",

        "Activity Management: Interface for creating, tracking, and organizing academic, organizational, and personal activities.",

        "Notes & Todo Management: Integrated workspace for managing notes and completing daily tasks.",

        "AI Career Insights: Structured interface for presenting career predictions, recommended skills, and personalized next steps.",

        "AI Chat: Conversational interface designed to support students through AI-assisted career and productivity guidance.",

        "Onboarding Experience: Guided onboarding flow designed to introduce users to the platform and collect relevant information for personalized insights.",

        "Design System: Reusable components, typography, spacing, and interaction patterns to maintain a consistent experience across the platform."
      ],

      gallery: [
        "/projects/ProdActivity-1.jpg",
        "/projects/ProdActivity-2.jpg",
        "/projects/ProdActivity-3.jpg",
        "/projects/ProdActivity-4.jpg",
        "/projects/ProdActivity-5.jpg",
        "/projects/ProdActivity-6.jpg",
        "/projects/ProdActivity-7.jpg"
      ]
    }
  },
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
