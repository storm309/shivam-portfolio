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

// Android-related logos
import kotlinLogo from './assets/tech_logo/kotlin.png';
import jetpackComposeLogo from './assets/tech_logo/jetpackcompose.png';
import androidStudioLogo from './assets/tech_logo/androidstudio.png';
import roomdbLogo from './assets/tech_logo/roomdb.png';
import retrofitLogo from './assets/tech_logo/retrofit.png';
import mvvmLogo from './assets/tech_logo/mvvm.png';

// Company & Education Logos
import projectLogo from './assets/company_logo/webverse_logo.png';
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logos
import movierecLogo from './assets/work_logo/movie_rec.png';
import bookshopLogo from './assets/work_logo/bookshop.png'; 
import ecommerceLogo from './assets/work_logo/ecommerce.png'; 


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
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
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Kotlin', logo: kotlinLogo }, 
    ],
  },
  {
    title: 'Android Development', 
    skills: [
        { name: 'Android Studio', logo: androidStudioLogo },
        { name: 'Jetpack Compose', logo: jetpackComposeLogo },
        { name: 'RoomDB', logo: roomdbLogo },
        { name: 'Retrofit', logo: retrofitLogo },
        { name: 'MVVM', logo: mvvmLogo },
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
    ],
  },
];

export const experiences = [
    
];



export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Lovely Professional University (LPU), Phagwara",
    date: "Aug 2023 - Present",
    grade: "CGPA: N/A",
    desc: "Pursuing B.Tech in Computer Science and Engineering at LPU. Currently in 5th semester; focusing on Data Structures, DBMS, OS, Web Development and projects.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "HSV Inter College, Ramgarhwa",
    date: "Apr 2021 - Mar 2022",
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
    desc: "Completed Class X from SGM High School (BSEB).",
    degree: "Matriculation (X)",
  },
];


export const projects = [
  {
    id: 0,
    title: "Full-Stack Book Shopping Website",
    description: "A complete full-stack e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Includes secure RESTful APIs for product, user, and order management. Features JWT authentication and an interactive React front-end with Context API for state management.",
    date: "May 2025 - Sept 2025",
    image: bookshopLogo, 
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API"],
    github: "https://github.com/yourusername/bookshop-mern",
    webapp: "https://yourbookshopdemo.com",
  },
  {
    id: 1,
    title: "E-Commerce Website Frontend",
    description: "A responsive and visually appealing e-commerce front-end built with HTML, Tailwind CSS, and modern JavaScript. Includes a dynamic shopping cart, product filtering, and sorting system for a smooth and intuitive user experience.",
    date: "July 2024 - Nov 2024",
    image: ecommerceLogo, 
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