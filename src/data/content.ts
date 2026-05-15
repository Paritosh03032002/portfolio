export const profile = {
  name: "Paritosh Mayande",
  initials: "PM",
  title: "Backend & AI Engineer",
  location: "Bengaluru, India",
  email: "paritoshm.bpl@gmail.com",
  phone: "+91-9343889755",
  github: "https://github.com/Paritosh03032002",
  linkedin: "https://linkedin.com/in/paritosh-mayande",
  resume: "/paritosh-mayande-resume.pdf",
  blurb:
    "Backend & AI Engineer with 1+ year building production Java/Spring Boot REST APIs and Python LLM agent systems. Skilled in LangGraph multi-agent orchestration, RAG pipelines, and Docker microservices. Ship full-stack AI products serving 1,000+ users on AWS/GCP architectures.",
  highlights: [
    { label: "Users served", value: "1,000+" },
    { label: "Emails triaged daily", value: "200+" },
    { label: "Meetings processed / mo", value: "500+" },
    { label: "Triage accuracy", value: "100%" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Tipstat",
    role: "Java Full Stack Trainee",
    location: "Bengaluru",
    period: "Jan 2026 — Apr 2026",
    bullets: [
      "Developed a LangGraph + FastMCP email triage agent that classifies mail into Important / Newsletters / Promotions / Spam and auto-routes via Gmail & Outlook MCP — serving 1,000+ users at 200+ emails/day with 100% accuracy.",
      "Architected 3 LangGraph sub-agents (Meeting, Task, Drafts) under an orchestrator that extract scheduling intents, parse action items, and draft tone-matched replies — cutting manual triage by ~70%.",
      "Orchestrated a LiteLLM + OpenRouter follow-up tracker that detects overdue threads by intent and elapsed time, then auto-sends follow-ups via MCP — eliminating manual follow-up for 1,000+ users.",
      "Launched a Meeting Intelligence agent on Recall.ai + Deepgram Nova-3 transcripts producing action items, decisions, and summaries — processes 500+ meetings/month via Meeting MCP (17 tools).",
    ],
    stack: ["LangGraph", "FastMCP", "LiteLLM", "OpenRouter", "Recall.ai", "Deepgram", "Python", "FastAPI"],
  },
  {
    company: "Kodnest Technologies",
    role: "Java Full Stack Trainee",
    location: "Bengaluru",
    period: "Aug 2025 — Jan 2026",
    bullets: [
      "Programmed 5+ Java backend modules in Core Java, Spring Boot, and JDBC with MySQL — wrote CRUD and validation across 3 database-driven projects handling ~200 daily transactions.",
      "Designed REST API endpoints with Spring Boot in MVC architecture; validated contracts via Postman across 10+ test scenarios per feature, ensuring zero contract regressions.",
      "Modeled OOP solutions with Java Collections, custom exceptions, and Hibernate ORM for data-access abstraction — reduced boilerplate data-access code by ~40% across all modules.",
      "Delivered 2 full-stack mini-projects (Spring Boot + frontend) secured with JWT Auth; version-controlled via Git/GitHub across a team of 4 trainees with JUnit and Agile sprints.",
    ],
    stack: ["Java", "Spring Boot", "Spring MVC", "JDBC", "Hibernate", "MySQL", "JUnit", "JWT", "Postman"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  github?: string;
  live?: string;
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    title: "Lumen",
    tagline: "Deep Research Platform",
    description:
      "Full-stack AI research assistant. React/TypeScript + Tailwind frontend, Spring Boot 3.3 (Java 21) backend with JWT auth and PostgreSQL, Python FastAPI research agent. Containerised via Docker Compose.",
    bullets: [
      "Engineered a Deep Agents ReAct loop with 8 custom tools (OpenRouter primary, OpenAI fallback). Streams rich-media blocks (markdown, tables, Leaflet maps, charts, insight cards) over SSE.",
      "Redis caching cut latency by ~35% and LLM costs by ~20%.",
      "Crafted an extensible block-renderer with JSON fallback so new block types render safely without UI changes.",
      "Established secure multi-tenant conversations via JWT-gated REST APIs, JSONB message storage, and SSE checkpoints with full transcript replay.",
    ],
    stack: ["React", "TypeScript", "Spring Boot", "Java 21", "FastAPI", "PostgreSQL", "Redis", "Docker", "SSE", "Deep Agents"],
    github: "https://github.com/Paritosh03032002/Lumen",
    flagship: true,
  },
  {
    title: "InterviewMate",
    tagline: "AI Mock Interview Platform",
    description:
      "Full-stack AI-powered interview practice app. Pick a role, get AI-generated questions, receive instant 0–10 scoring with feedback, and track progress. Spring Boot 3 + Spring AI + React + PostgreSQL.",
    bullets: [
      "Role-specific question generation via Spring AI ChatClient (OpenAI gpt-4o-mini). Three deterministic prompts: generate, evaluate, summarize.",
      "JWT-secured REST API with Spring Security, BCrypt hashing, and stateless filter chain.",
      "Clean JPA data model (User → Interview → Question) with cascade persistence and ordered relationships.",
      "Polished React + TypeScript + Tailwind frontend with auth context, protected routes, and live session progress.",
    ],
    stack: ["Spring Boot 3", "Java 21", "Spring AI", "Spring Security", "JPA", "PostgreSQL", "React", "TypeScript", "Tailwind", "Docker"],
    github: "https://github.com/Paritosh03032002/InterviewMate",
  },
  {
    title: "Virtual Gesture Drawing System",
    tagline: "Computer Vision · Java + OpenCV",
    description:
      "Real-time computer vision app for touchless drawing through hand gestures via webcam. Built end-to-end in Java with OpenCV.",
    bullets: [
      "Fingertip tracking using contour detection and HSV color segmentation, processing live video at 30 FPS.",
      "Coordinate mapping to a virtual canvas for low-latency drawing.",
      "Optimized motion tracking with frame-by-frame processing and gesture-state debouncing — cut jitter artifacts by ~60%.",
    ],
    stack: ["Java", "OpenCV", "Computer Vision", "Image Processing"],
    github: "https://github.com/Paritosh03032002/virtual-gesture-drawing-system",
  },
  {
    title: "Driver Drowsiness Alert System",
    tagline: "Embedded · Arduino + IR Sensor",
    description:
      "Real-time driver safety system detecting prolonged eye closure using an IR eye-blink sensor. Built during the Electronics & Communication degree.",
    bullets: [
      "Arduino signal processing logic monitors eye state and triggers a buzzer when closure exceeds a threshold. Validated across 50+ test cases.",
      "Integrated sensor input, microcontroller processing, and hardware output in a real-time loop.",
      "Achieved <200ms detection-to-alert latency for fatigue prevention.",
    ],
    stack: ["Arduino", "C/C++", "IR Sensor", "Embedded Systems"],
  },
];

export const skillGroups = [
  {
    label: "Languages & Backend",
    items: ["Java", "Python", "SQL", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "FastAPI", "REST APIs", "JDBC", "JWT Auth"],
  },
  {
    label: "AI Systems & Agents",
    items: ["LangGraph", "LangChain Agents", "Multi-Agent Systems", "FastMCP", "Deep Agents (ReAct)", "LiteLLM", "OpenRouter", "Server-Sent Events"],
  },
  {
    label: "RAG & Vector DBs",
    items: ["RAG Pipelines", "Qdrant", "PGVector", "FAISS", "Sentence Transformers", "Semantic Search", "Redis Caching"],
  },
  {
    label: "Model Engineering",
    items: ["HuggingFace Transformers", "QLoRA Fine-tuning", "LLMs", "Deepgram Nova-3", "Recall.ai", "Prompt Engineering"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "Docker Compose", "CI/CD", "AWS", "GCP", "Git", "GitHub"],
  },
  {
    label: "Testing & Tools",
    items: ["JUnit", "Postman", "IntelliJ IDEA", "Eclipse", "MySQL", "PostgreSQL", "JSONB"],
  },
];

export const education = {
  degree: "Bachelor of Engineering — Electronics & Communication",
  school: "Rajiv Gandhi Prodyogiki Vishwavidyalaya, Bhopal",
  period: "2021 — 2025",
  coursework: "Data Structures, DBMS, Computer Networks, Object-Oriented Programming",
};

export const certifications = [
  { title: "Introduction to LangChain (Python)", issuer: "LangChain Academy" },
  { title: "Oracle Database SQL Certified Associate", issuer: "Oracle" },
  { title: "Java Full Stack Development", issuer: "Kodnest Technologies" },
];
