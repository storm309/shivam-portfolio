// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
// Import a generic project or freelance logo if you have one
import projectLogo from './assets/company_logo/project_logo.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import movierecLogo from './assets/work_logo/movie_rec.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: projectLogo, // Using a generic project logo
      role: "Fullstack Developer (Project-Based)",
      company: "Personal Portfolio Projects",
      date: "Jan 2026 - Present",
      desc: "Designed and developed a complete e-commerce web application from scratch using the MERN stack. Engineered a secure RESTful API with Node.js and Express for user authentication, product management, and order processing. Built a dynamic, responsive frontend with React, utilizing Redux for efficient state management.",
      skills: [
        "React JS",
        "Node JS",
        "Express JS",
        "MongoDB",
        "Redux",
        "JWT",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: projectLogo, // Using a generic project logo
      role: "Android Developer (Project-Based)",
      company: "University Capstone Project",
      date: "Jan 2026 - Nov 2026",
      desc: "Developed a native Android application for task management using Kotlin. Implemented a modern, declarative UI with Jetpack Compose and followed the MVVM architecture. Integrated the Room database for offline data storage and used Retrofit for seamless communication with a third-party API.",
      skills: [
        "Kotlin",
        "Jetpack Compose",
        "Android Studio",
        "RoomDB",
        "Retrofit",
        "MVVM",
        "Firebase",
      ],
    },
    {
      id: 2,
      img: projectLogo, // Using a generic project logo
      role: "Freelance Web Developer",
      company: "Self-Employed",
      date: "May 2025 - July 2025",
      desc: "Created and deployed several responsive and performant landing pages for local businesses using Next.js and TypeScript. Collaborated directly with clients to translate their requirements from Figma designs into pixel-perfect, SEO-friendly websites hosted on Vercel.",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "Figma",
        "HTML",
        "CSS",
      ],
    },
  ];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Lovely Professional University (LPU), Phagwara",
    date: "Aug 2023 - Present",
    grade: "Current CGPA: 7.0 (Till 5th Sem)",
    desc: "Pursuing B.Tech in Computer Science and Engineering at LPU. Currently in 5th semester; focusing on Data Structures, DBMS, OS, Web Development and projects.",
    degree: "B.Tech - Computer Science Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "HSV Inter College, Ramgarhwa",
    date: "Apr 2020 - Mar 2022",
    grade: "Percentage: 70%",
    desc: "Completed Class XII from HSV Inter College, Ramgarhwa.",
    degree: "Intermediate (XII) - PCMB",
  },
  {
    id: 2,
    img: bsaLogo,
    school: "SGM High School, Ramgarhwa",
    date: "Apr 2019 - Mar 2020",
    grade: "Percentage: 70%",
    desc: "Completed Class X from SGM School (BSEB).",
    degree: "Matriculation (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Full-Stack Book Shopping Website",
    description:
      "A complete full-stack e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Includes secure RESTful APIs for product, user, and order management. Features JWT authentication and an interactive React front-end with Context API for state management.",
    date: "May 2025 - Sept 2025",
    image: "./assets/work_logo/bookshop.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API"],
    github: "https://github.com/yourusername/bookshop-mern",
    webapp: "https://yourbookshopdemo.com",
  },
  {
    id: 1,
    title: "E-Commerce Website Frontend",
    description:
      "A responsive and visually appealing e-commerce front-end built with HTML, Tailwind CSS, and modern JavaScript. Includes a dynamic shopping cart, product filtering, and sorting system for a smooth and intuitive user experience.",
    date: "July 2024 - Nov 2024",
    image: "./assets/work_logo/ecommerce.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript (ES6+)", "Responsive UI"],
    github: "https://github.com/yourusername/ecommerce-frontend",
    webapp: "https://yourecommercesite.com",
  },
  {
    id: 2,
    title: "Recommendo - Movie Recommendation System",
    description: `A personalized recommendation engine that suggests content to users. Based on a user's viewing history and ratings, it can recommend movies (like Netflix), products (like Amazon), or music (like Spotify).`,
    date: "Jan 2024 - Apr 2024",
    image: movierecLogo,
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
    github: "https://github.com/yourusername/recommendo",
    webapp: "https://recommendo-demo.com",
  },
];