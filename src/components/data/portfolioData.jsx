import { 
  Layout, 
  Code2, 
  Server, 
  Database, 
  Workflow, 
  Calendar,
  Activity,
  Bike,
  BarChart3,
  PenTool,
  Compass,
  Network,
  Palette,
  Video,
  Brush,
  FileText,
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
  // UI/UX & Frontend
  { name: "Figma", category: "UI/UX Design", icon: siFigma },
  { name: "HTML/CSS", category: "Frontend", icon: siHtml5 },
  { name: "Tailwind CSS", category: "Frontend", icon: siTailwindcss },
  { name: "Bootstrap", category: "Frontend", icon: siBootstrap },
  { name: "JavaScript", category: "Frontend", icon: siJavascript },
  { name: "TypeScript", category: "Frontend", icon: siTypescript },
  { name: "React", category: "Frontend", icon: siReact },
  { name: "Next.js", category: "Frontend", icon: siNextdotjs },
  { name: "Dart", category: "Frontend", icon: siDart },
  
  // Backend & Database
  { name: "PHP", category: "Backend", icon: siPhp },
  { name: "Laravel", category: "Backend", icon: siLaravel },
  { name: "CodeIgniter", category: "Backend", icon: siCodeigniter },
  { name: "Node.js", category: "Backend", icon: siNodedotjs },
  { name: "Express", category: "Backend", icon: siExpress },
  { name: "MySQL", category: "Backend", icon: siMysql },
  { name: "PostgreSQL", category: "Backend", icon: siPostgresql },
  { name: "SQLite", category: "Backend", icon: siSqlite },
  { name: "Supabase", category: "Backend", icon: siSupabase },

  // Languages
  { name: "Python", category: "Languages", icon: siPython },
  { name: "C", category: "Languages", icon: siC },
  { name: "C++", category: "Languages", icon: siCplusplus },
  { name: "Java", category: "Languages", icon: siOpenjdk },
  { name: "Kotlin", category: "Languages", icon: siKotlin },

  // Tools
  { name: "GitHub", category: "Tools", icon: siGithub },
  { name: "GitLab", category: "Tools", icon: siGitlab },
  { name: "Postman", category: "Tools", icon: siPostman },
  { name: "Vercel", category: "Tools", icon: siVercel },
  { name: "Linear", category: "Tools", icon: siLinear },
  { name: "Miro", category: "Tools", icon: siMiro },
  { name: "Draw.io", category: "Tools", icon: siDiagramsdotnet },
  { name: "Photoshop", category: "Tools", icon: PenTool },
  { name: "Affinity", category: "Tools", icon: Brush },
  { name: "Canva", category: "Tools", icon: Palette },
  { name: "CapCut", category: "Tools", icon: Video },
  { name: "MS Office 365", category: "Tools", icon: FileText },
  { name: "Archi", category: "Tools", icon: Network },
  { name: "Maze", category: "Tools", icon: Compass },
  { name: "Google Colab", category: "Tools", icon: siGooglecolab }
];

export const projects = [
  {
    id: 1,
    title: "Courty",
    subtitle: "Real-Time Sports Court Reservation App",
    category: "Full Stack",
    icon: Calendar,
    image: "/projects/courty.png",
    situation: "The reservation process was still manual and inefficient.",
    action: "Built a complete online platform with an authentication system, schedule management, and frontend-backend connectivity.",
    result: "Faster reservations, better-managed schedules, and multi-user capacity.",
    techStack: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript"],
    links: {
      github: "https://github.com/mfaatihyusron/courty",
      demo: "https://courty-demo.com"
    },
    caseStudy: {
      role: "Lead Full Stack Developer",
      timeline: "Nov 2025 — Jan 2026",
      deliverables: ["Responsive Web Application", "Database Schema", "Admin Scheduler Panel"],
      overview: "Courty is a web-based sports court reservation system designed to digitize manual booking processes. It replaces inefficient paper or chat-based workflows with a real-time availability calendar, secure user accounts, and an administrative dashboard to manage court allocations and booking records.",
      challenges: [
        "Handling concurrent booking requests for the same time slot to prevent double-bookings.",
        "Designing an intuitive scheduler interface that works seamlessly on both mobile and desktop screens.",
        "Managing user session security and clean MVC routing in a legacy framework context."
      ],
      solutions: [
        "Implemented database transactions with exclusive locks in MySQL to ensure atomicity during booking confirmations.",
        "Created a dynamic scheduling grid using custom vanilla JavaScript and responsive flex layouts.",
        "Refactored routing layers and added custom authentication middleware in CodeIgniter 3."
      ],
      features: [
        "Real-Time Schedule Grid: Interactive calendar view displaying hourly availability.",
        "Admin Management Panel: Dynamic dashboard for adding courts, configuring hours, and viewing transaction summaries.",
        "Auto-Cancellation: Background checks to release unpaid reservation slots after 15 minutes."
      ],
      gallery: ["/projects/courty-1.png", "/projects/courty-2.png"]
    }
  },
  {
    id: 2,
    title: "SERA",
    subtitle: "Disaster Health Response Management System",
    category: "UI/UX Design",
    icon: Activity,
    image: "/projects/sera.png",
    situation: "Coordination of health information during disasters was not centralized.",
    action: "User research → user flow → wireframe → high-fidelity design → interactive prototype.",
    result: "Clearer workflows, information is more easily accessible by responders.",
    techStack: ["Figma", "Design System", "UX Research"],
    links: {
      figma: "https://figma.com/file/sera-prototype"
    },
    caseStudy: {
      role: "UI/UX Designer",
      timeline: "Feb 2026 — Present",
      deliverables: ["Interactive High-Fidelity Prototype", "UI Design System Library", "User Persona Research Reports"],
      overview: "SERA is a disaster response health management system designed to coordinate medical information and personnel allocation during emergency crises. It provides centralized dashboards for disaster response commanders and field medical volunteers to report conditions and request supplies.",
      challenges: [
        "Synthesizing high-stress emergency workflows into clean, simple dashboards that responders can navigate in seconds.",
        "Maintaining design system consistency across both mobile-volunteer and desktop-commander interfaces.",
        "Validating usability assumptions with real-world users under emergency response simulations."
      ],
      solutions: [
        "Conducted user interviews with volunteer paramedics to construct logical information hierarchies, prioritizing emergency alerts over secondary statistics.",
        "Established a strict Figma component library utilizing color-coded system statuses (Red for critical, Yellow for warning, Green for safe).",
        "Ran interactive maze tests and prototype evaluations to identify and fix navigation bottlenecks in the volunteer reporting flow."
      ],
      features: [
        "Commander Dashboard: Desktop control panel showing real-time volunteer locations and resource statuses.",
        "Volunteer Report Form: Ultra-simple mobile-web form with big buttons for quick resource updates.",
        "Shared Design System: Reusable components, alert banners, and standard topography styles."
      ],
      gallery: ["/projects/sera-1.png", "/projects/sera-2.png"]
    }
  },
  {
    id: 3,
    title: "Bike Rental App",
    subtitle: "Electric Bike Rental App",
    category: "Mobile Design",
    icon: Bike,
    image: "/projects/bike.png",
    situation: "Unlocking process and map-based bike navigation was friction-heavy.",
    action: "User journey mapping → wireframe → prototype → clean final UI design.",
    result: "A simpler user flow and a significantly better user experience than previous solutions.",
    techStack: ["Figma", "Prototyping", "User Journey"],
    links: {
      figma: "https://figma.com/file/bike-prototype"
    },
    caseStudy: {
      role: "Product Designer",
      timeline: "Aug 2025 — Oct 2025",
      deliverables: ["Figma Mobile UI Screens", "Interactive Micro-interactions", "User Flow Diagrams"],
      overview: "An electric bike rental application concept designed to encourage green urban mobility. The design focuses on minimizing the steps required for a commuter to unlock a nearby bike, ride, and complete payment on a mobile device.",
      challenges: [
        "Designing a map-based home screen that remains uncluttered even when displaying high densities of available bikes.",
        "Creating a checkout flow that guides users through scanning, unlocking, and payment without friction.",
        "Establishing a friendly, tech-forward visual aesthetic that appeals to young urban professionals."
      ],
      solutions: [
        "Implemented clean map clustering icons and collapsible bottom sheets in Figma to reveal individual bike statistics only upon tap.",
        "Constructed a step-by-step linear flow with progress bars, reducing ride unlock steps to just three taps: locate, scan, ride.",
        "Created a vibrant green and dark-space aesthetic combined with clean sans-serif typography (Outfit/Inter) and rounded card shapes."
      ],
      features: [
        "Clutter-Free Map: Interactive map interface with smart bike clusters and location filtering.",
        "Quick QR Scanner: Mockup interface for scanning bike codes with immediate confirmation.",
        "Commute Statistics: Personal dashboard tracking distance traveled, carbon saved, and ride history."
      ],
      gallery: ["/projects/bike-1.png", "/projects/bike-2.png"]
    }
  },
  {
    id: 4,
    title: "ML Competition",
    subtitle: "Competition Data Prediction & Analysis",
    category: "Machine Learning",
    icon: BarChart3,
    image: "/projects/ml.png",
    situation: "Improving prediction accuracy on highly imbalanced dataset.",
    action: "Data cleaning → feature engineering → ensemble modeling with Random Forest, LightGBM, and XGBoost.",
    result: "More accurate data insights, and a significant improvement in model performance on the leaderboard.",
    techStack: ["Python", "Random Forest", "LightGBM", "XGBoost"],
    links: {
      github: "https://github.com/mfaatihyusron/ml-competition",
      colab: "https://colab.google/notebook"
    },
    caseStudy: {
      role: "Data Analyst / ML Engineer",
      timeline: "Nov 2025 — Dec 2025",
      deliverables: ["Jupyter Notebooks", "Feature Engineering Scripts", "Trained Ensemble Models"],
      overview: "Participated in a data science competition to build a predictive model for structured tabular data. The project involved robust exploratory data analysis, advanced feature engineering, and model training using state-of-the-art gradient boosted trees and ensemble combinations.",
      challenges: [
        "Handling highly unbalanced training labels which biased model predictions toward the majority class.",
        "Feature scale differences and high-cardinality categorical columns causing model overfitting.",
        "Optimizing hyperparameters for complex ensemble architectures within memory and time constraints."
      ],
      solutions: [
        "Applied SMOTE (Synthetic Minority Over-sampling Technique) and stratified k-fold cross-validation to maintain balanced label ratios.",
        "Engineered interaction features, applied target encoding to high-cardinality columns, and standardized numeric columns.",
        "Conducted random grid searches to optimize hyperparameter configurations for Random Forest, LightGBM, and XGBoost, blending their predictions via soft voting."
      ],
      features: [
        "Exploratory Analysis Plots: Correlation heatmaps and feature distribution curves to locate outliers.",
        "Feature Importance Ranking: Analytical breakdown showing which variables contributed most to predictions.",
        "Ensemble Pipeline: Automated python script to load data, clean it, train model variants, and output validation scores."
      ],
      gallery: ["/projects/ml-1.png", "/projects/ml-2.png"]
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
