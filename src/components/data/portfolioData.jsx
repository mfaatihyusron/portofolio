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
  shortBio: "Connecting user-centered design, modern web development, and evidence-based data analysis — to create digital solutions that are not only beautiful, but actually work.",
  longBio: "A Computer Science student who believes that the best products are born from the collaboration of deep user research, solid technical engineering, and sharp data intuition. Focus areas lie in Product Design, Web Development, and Machine Learning — three domains studied simultaneously to bridge the gap between design, engineering, and data teams.",
  email: "faatihyusron@email.com",
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
  {
    name: "Figma",
    category: "UI/UX Design",
    level: 90,
    description: "Building design systems, reusable components, variant management, and user journey maps on various digital application projects.",
    icon: siFigma,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 80,
    description: "The primary framework for building high-performance, modern web applications with a scalable structure.",
    icon: siNextdotjs,
  },
  {
    name: "Tailwind",
    category: "Frontend",
    level: 88,
    description: "Rapidly building responsive UIs with a consistent utility-first approach.",
    icon: siTailwindcss,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 82,
    description: "Dynamic interactions and client-side logic on various web projects.",
    icon: siJavascript,
  },
  {
    name: "PHP",
    category: "Backend",
    level: 75,
    description: "Dynamic, database-driven web systems built with MVC architecture.",
    icon: siPhp,
  },
  {
    name: "CodeIgniter",
    category: "Backend",
    level: 72,
    description: "Sports court reservation application and information systems built on CI3.",
    icon: siCodeigniter,
  },
  {
    name: "Python",
    category: "Data Science",
    level: 85,
    description: "The primary language for data processing, machine learning, and data analysis.",
    icon: siPython,
  },
  {
    name: "Random Forest",
    category: "ML",
    level: 78,
    description: "Feature importance analysis and predictive modeling on competition datasets.",
    icon: siScikitlearn,
  },
  {
    name: "LightGBM",
    category: "ML",
    level: 76,
    description: "Optimizing machine learning models on competition datasets with high efficiency.",
    icon: Zap,
  },
  {
    name: "XGBoost",
    category: "ML",
    level: 74,
    description: "Improving predictive performance and model evaluation in data science competitions.",
    icon: TrendingUp,
  },
];

export const projects = [
  {
    id: 1,
    title: "Courty",
    subtitle: "Real-Time Sports Court Reservation App",
    category: "Full Stack",
    icon: Calendar,
    situation: "The reservation process was still manual and inefficient.",
    action: "Built a complete online platform with an authentication system, schedule management, and frontend-backend connectivity.",
    result: "Faster reservations, better-managed schedules, and multi-user capacity.",
    techStack: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "SERA",
    subtitle: "Disaster Health Response Management System",
    category: "UI/UX Design",
    icon: Activity,
    situation: "Coordination of health information during disasters was not centralized.",
    action: "User research → user flow → wireframe → high-fidelity design → interactive prototype.",
    result: "Clearer workflows, information is more easily accessible by responders.",
    techStack: ["Figma", "Design System", "UX Research"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Bike Rental App",
    subtitle: "Electric Bike Rental App",
    category: "Mobile Design",
    icon: Bike,
    situation: "Action: User journey mapping → wireframe → prototype → clean final UI design.",
    action: "User journey mapping → wireframe → prototype → clean final UI design.",
    result: "A simpler user flow and a significantly better user experience than previous solutions.",
    techStack: ["Figma", "Prototyping", "User Journey"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "ML Competition",
    subtitle: "Competition Data Prediction & Analysis",
    category: "Machine Learning",
    icon: BarChart3,
    situation: "Action: Data cleaning → feature engineering → ensemble modeling with Random Forest, LightGBM, and XGBoost.",
    action: "Data cleaning → feature engineering → ensemble modeling with Random Forest, LightGBM, and XGBoost.",
    result: "More accurate data insights, and a significant improvement in model performance on the leaderboard.",
    techStack: ["Python", "Random Forest", "LightGBM", "XGBoost"],
    github: "#",
    demo: "#",
  },
];

export const experiences = {
  organisasi: [
    {
      date: "Jun 2026 — Jan 2027",
      title: "Academic Division Staff",
      org: "KSM Multimedia UPN Veteran Jakarta",
      desc: "Developed the UI/UX syllabus, managed participant schedules and attendance, coordinated with mentors, and participated in committees and academic program development.",
    },
    {
      date: "Mar 2026 — Dec 2026",
      title: "Member",
      org: "KSM Android UPN Veteran Jakarta (VeteranTech)",
      desc: "Participated in various technology skill development programs, collaborated across fields, expanded professional networks, and learned from seniors in the tech field.",
    },
    {
      date: "May 2025",
      title: "Transportation Division Staff",
      org: "Tech for Society - KSM Android UPNVJ",
      desc: "Managed logistical coordination for digital education activities at SMAN 6 Tangerang and helped students understand the basics of UI/UX and web programming.",
    },
    {
      date: "2025",
      title: "Event Division Staff as Master of Ceremony",
      org: "Learn With Android - KSM Android UPNVJ",
      desc: "Structured event run-downs, hosted events, and ensured all sessions ran on schedule in the digital education program for seminar and workshop participants.",
    },
  ],

  kompetisi: [
    {
      date: "2025",
      title: "Passed the Student Creativity Program (PKM)",
      org: "Universitas Pembangunan Nasional Veteran Jakarta",
      desc: "Passed the university-level Student Creativity Program selection after going through the faculty-level screening.",
      color: "#60a5fa",
    },
    {
      date: "2025",
      title: "Junior Web Developer Assistant (Internship)",
      org: "PT Citra Agung Mestika",
      desc: "Designed UI/UX using Figma and developed websites using Bootstrap CSS and CodeIgniter 4 within a development team.",
      color: "#a78bfa",
    },
    {
      date: "2025",
      title: "UI/UX Designer Intern",
      org: "School Management Web Development Project SDN Joglo 05 Pagi",
      desc: "Designed the user interface and user experience for a school management system that covers student data, teachers, classes, assessments, and achievements.",
      color: "#4ade80",
    },
    {
      date: "2025",
      title: "Graphic Designer Intern",
      org: "Kreativa Scope Batch 2",
      desc: "Created social media content designs and video thumbnails, and collaborated with scriptwriters in the digital content production process.",
      color: "#fbbf24",
    },
    {
      date: "2024",
      title: "Data Science Basic",
      org: "KSM Android UPN Veteran Jakarta",
      desc: "Completed the Data Science Basic program (13.5 hours) covering spreadsheets, Python, Exploratory Data Analysis (EDA), statistics, data preparation, supervised and unsupervised learning, and simple machine learning project implementation.",
      color: "#38bdf8",
    },
    {
      date: "2025",
      title: "Data Science Beginner",
      org: "KSM Android UPN Veteran Jakarta",
      desc: "Completed the Data Science Beginner program (15 hours) discussing clustering, dimensionality reduction, ensemble learning, hyperparameter tuning, recommendation systems, time series, NLP, sentiment analysis, deep learning, and machine learning deployment.",
      color: "#818cf8",
    },
    {
      date: "2025",
      title: "Data Classification and Summarization Using IBM Granite",
      org: "IBM SkillsBuild",
      desc: "Learned data classification and automated text summarization using IBM Granite, including unstructured data processing and Generative AI applications.",
      color: "#06b6d4",
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
