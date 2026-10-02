// Portfolio ka saara content yahan hai. Kuch badalna ho to sirf yeh file edit karo.
import notesImg from "./assets/notes.webp";
import bookstoreImg from "./assets/bookstore.webp";
import spotifyImg from "./assets/spotify.webp";

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "MD Atif Reyyani",
  role: "Software Developer & AI Trainer",
  status: "Open to AI training and developer roles",
  intro:
    "I write and grade coding tasks for AI models on Outlier, Alignerr and Chegg, and I've done two developer internships working in React and Phaser.",
  location: "Delhi NCR, India",
  email: "atifatul752@gmail.com",
  resume: `${base}MD_Atif_Reyyani_Resume.pdf`,
};

export const links = [
  { label: "GitHub", handle: "atifatul", href: "https://github.com/atifatul", icon: "github" },
  { label: "LinkedIn", handle: "md-atif-reyyani", href: "https://linkedin.com/in/md-atif-reyyani", icon: "linkedin" },
  { label: "LeetCode", handle: "mdatifreyyani", href: "https://leetcode.com/u/mdatifreyyani/", icon: "leetcode" },
  { label: "GeeksforGeeks", handle: "mdatifreyys154", href: "https://www.geeksforgeeks.org/user/mdatifreyys154/", icon: "gfg" },
];

export const stats = {
  hours: { value: 500, suffix: "+", label: "hours of AI training work" },
  leetcode: { value: 200, suffix: "+", label: "problems solved on LeetCode" },
  gfg: { value: 150, suffix: "+", label: "problems solved on GeeksforGeeks" },
};

// hero mein "I build ..." ke baad yeh words badalte rehte hain
export const buildWords = ["React apps", "full-stack web apps", "2D games for kids", "coding tasks for AI models"];

// bada scrolling text band
export const bandWords = ["Software Developer", "AI Trainer", "React", "Python", "RLHF", "Phaser", "Node.js", "Code evals"];

export const about = {
  paragraphs: [
    "I finished my B.Tech in Computer Science at Meerut Institute of Technology in 2025. Since then I've done two developer internships, and since February 2026 most of my time has gone into training and evaluating AI models.",
    "Being a developer helps a lot in that work. When a model says it fixed something, I can read the diff and run the tests myself.",
    "I learn fastest by building. My first Phaser game went live a day after I started learning Phaser, and a month later I was building learning games for kindergarten kids at Abhiwan Technology.",
    "I also worked as a Subject Matter Expert for calculus on Chegg from 2022, answering students' questions with full explanations.",
  ],
  college: [
    "Vice Event Head, GFG Student Chapter",
    "Vice President, CES Society",
    "Class Representative",
    "TCS NQT score: 78.21%",
  ],
};

export const whatIDo = [
  {
    key: "ai",
    title: "AI training",
    blurb: "Freelance on Outlier, Alignerr and Chegg since February 2026.",
    points: [
      "Turn real bug fixes from GitHub pull requests into fair tests for coding agents",
      "Write multi-turn tasks for AI agents, with weighted rubrics, pytest checks and reference answers",
      "Compare two coding agents on the same task and judge how they behaved",
      "Write calculus and CS questions that three different LLMs all get wrong",
    ],
  },
  {
    key: "dev",
    title: "Development",
    blurb: "React frontends, full-stack apps and 2D games.",
    points: [
      "Moved a company's travel website from PHP to React",
      "Built 2D learning games for kindergarten kids in Phaser",
      "Full-stack apps with Node.js, Express and MongoDB",
      "REST APIs with JWT login and role-based access",
    ],
  },
];

export const experience = [
  {
    role: "AI Trainer",
    org: "Outlier · Alignerr · Chegg",
    meta: "Freelance · Remote",
    dates: "Feb 2026 – Present",
    current: true,
    badge: "Promoted to reviewer on Outlier",
    points: [
      "Harden coding benchmark tasks built from real GitHub pull requests: check that the original fix passes, the unfixed code fails, and nothing in the prompt gives the fix away.",
      "Design multi-turn tasks for AI agents working inside a user's email, calendar and files, some running past 20 turns and some hinging on a detail only visible in a photo, PDF or video.",
      "Write weighted pass/fail rubrics, Python (pytest) checks and reference answers, and explain exactly what the model got wrong on every item it failed.",
      "On Alignerr, compare transcripts of two AI coding agents doing the same task and rate how they behaved, citing the exact file, command or message behind each point.",
      "On Chegg, write computer science and calculus questions that three different LLMs all get wrong, then write the full worked solution.",
      "As a reviewer on Outlier (Jun – Jul 2026), graded other contributors' tasks for rubric quality, weights and missed safety failures.",
    ],
    tags: ["Python", "pytest", "Docker", "Git", "SQL", "RLHF"],
  },
  {
    role: "Software Developer",
    org: "Abhiwan Technology",
    meta: "Internship · On-site",
    dates: "Jan 2026 – Mar 2026",
    points: [
      "Built 2D learning games for kindergarten kids in Phaser and JavaScript: counting, shapes, colors, animals and their sounds, and drag-and-drop activities.",
      "Made an A to Z alphabet game where a kid says each letter out loud and then writes it on screen to move to the next one.",
      "Wrote the speaking and writing checks in JavaScript. A wrong try got flagged right away, with a hint on what to do.",
    ],
    tags: ["Phaser", "JavaScript"],
  },
  {
    role: "Frontend Developer",
    org: "Travbizz",
    meta: "Internship · On-site",
    dates: "Aug 2025 – Dec 2025",
    points: [
      "Moved the company's travel website from PHP to React, rebuilding the existing pages as reusable components.",
      "Helped build the CMS pages the team used to manage travel packages, and connected them to the backend APIs.",
      "Styled the new pages with Tailwind CSS.",
    ],
    tags: ["React", "Tailwind CSS", "REST APIs"],
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Meerut Institute of Technology",
  dates: "2021 – 2025",
  grade: "82.3%",
};

// image na ho to "cover" wala design dikhega
export const projects = [
  {
    title: "Secure Notes App",
    category: "Full-stack",
    blurb: "A full-stack notes app. Users register, log in, and create, edit and delete their own notes.",
    points: [
      "Login with JWT, passwords hashed with bcrypt, and role-based access",
      "REST API in Express with input validation and error handling, plus MongoDB indexes for the most common queries",
      "React frontend on Vercel, Express backend on Render, database on MongoDB Atlas",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: notesImg,
    live: "https://notesapp-frontend-six.vercel.app/",
    code: "https://github.com/atifatul/Notesapp",
  },
  {
    title: "Book Store",
    category: "Frontend",
    note: "Team project",
    blurb: "An online book store I built with two friends. It runs in the browser with a demo login.",
    points: [
      "Search by title or author, filter by category and sort the results",
      "Favorites, a cart and a checkout flow with tax and a free-shipping limit",
      "Contact form that sends email through EmailJS",
    ],
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: bookstoreImg,
    live: "https://book-store-application-kohl.vercel.app/",
  },
  {
    title: "Hand Gesture Recognizer",
    category: "Python",
    note: "College project",
    blurb: "A Python app that recognizes hand gestures.",
    points: ["Built with Python and OpenCV", "MediaPipe detects the hand and TensorFlow recognizes which gesture it is"],
    tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    cover: "gesture",
  },
  {
    title: "Runner Game: Spell ATIF",
    category: "Games",
    blurb: "An endless runner where you jump to collect the letters A, T, I and F in the right order.",
    points: [
      "Phaser runs inside a React component, and the progress bar on top is plain React",
      "Letters spawn at random heights, and grabbing the wrong one flashes the player red",
    ],
    tags: ["React", "Phaser", "JavaScript"],
    cover: "runner",
    code: "https://github.com/atifatul/Runner-game",
  },
  {
    title: "Spotify UI",
    category: "Frontend",
    blurb: "A responsive clone of Spotify's web player layout, built with only HTML and CSS.",
    points: [],
    tags: ["HTML", "CSS"],
    image: spotifyImg,
    live: "https://spotify-ui.vercel.app/",
    code: "https://github.com/atifatul/Spotify-Ui",
  },
];

export const skillGroups = [
  {
    title: "AI evaluation",
    items: ["RLHF", "Rubric design", "Agent evals", "SWE-bench-style task hardening", "Safety annotation", "Multimodal tasks"],
  },
  { title: "Languages", items: ["JavaScript", "Python", "C++", "SQL", "TypeScript"] },
  { title: "Frontend", items: ["React.js", "Redux", "Tailwind CSS", "HTML5", "CSS3", "Phaser"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT authentication"] },
  { title: "Databases", items: ["MongoDB (Mongoose, Atlas)", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "pytest", "Postman", "Vercel", "Render"] },
  { title: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
];
