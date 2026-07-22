import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  django,
  postgresql,
  mysql,
  github,
  threejs,

  // Project Images
  hospital,
  healingjourney,
  equality,
  ecommerce,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "AI & Machine Learning Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Medical Student & HealthTech Innovator",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Medical Student & Full Stack Developer",
    company_name: "University of Nairobi",
    icon: creator,
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "Pursuing Bachelor of Medicine and Bachelor of Surgery (MBChB) while actively developing modern web applications.",
      "Combining healthcare knowledge with software engineering to build innovative HealthTech solutions.",
      "Graduated from the Power Learn Project Africa in 2025 specializing in Full Stack Software Development, Artificial Intelligence and Machine Learning.",
      "Developing AI-powered applications using JavaScript, Python and modern web technologies."
    ],
  },

  {
    title: "Lead Developer",
    company_name: "Healing Journey",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Designed and developed the Healing Journey therapist website.",
      "Built a responsive modern website with excellent user experience.",
      "Implemented responsive layouts and performance optimizations.",
      "Website: https://healingjourney.netlify.app/"
    ],
  },

  {
    title: "Web Developer",
    company_name: "Equality Vanguard",
    icon: backend,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Contributed to the development of Equality Vanguard's web platform.",
      "Developed responsive pages and modern UI components.",
      "Improved accessibility and user experience.",
      "Website: https://www.equalityvanguard.org/en"
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Currently building a modern e-commerce platform for a clothing business.",
      "Developing Hospital Management Systems, portfolio websites and business platforms.",
      "Building AI-powered web applications using React, Django, Node.js, MongoDB and PostgreSQL.",
      "Maintaining multiple open-source and client projects available on GitHub."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lewis consistently delivers modern, responsive websites while maintaining excellent communication throughout every project.",
    name: "Client",
    designation: "Business Owner",
    company: "Healing Journey",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "His ability to combine medicine and technology gives him a unique perspective when building software solutions.",
    name: "Project Collaborator",
    designation: "Software Engineer",
    company: "Open Source",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    testimonial:
      "Professional, creative and highly skilled in both frontend and backend development.",
    name: "Client",
    designation: "NGO Representative",
    company: "Equality Vanguard",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

const projects = [
  {
    name: "Hospital Management System",
    description:
      "A complete hospital management platform featuring patient management, laboratory, pharmacy, appointments, medical records and AI-assisted healthcare modules.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/toshlewi",
  },

  {
    name: "Healing Journey",
    description:
      "Professional therapy and mental wellness website developed for a therapist with responsive design and a modern user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: healingjourney,
    source_code_link: "https://healingjourney.netlify.app/",
  },

  {
    name: "Equality Vanguard",
    description:
      "NGO website focused on equality advocacy featuring responsive layouts and modern web technologies.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      },
    ],
    image: equality,
    source_code_link: "https://www.equalityvanguard.org/en",
  },

  {
    name: "Clothing E-Commerce Platform",
    description:
      "A modern online clothing store currently under development with secure authentication, shopping cart, payment integration and inventory management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/toshlewi",
  },

  {
    name: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing my journey as a medical student, Full Stack Developer and AI enthusiast.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/toshlewi",
  },

  {
    name: "More Open Source Projects",
    description:
      "Explore additional Full Stack, AI, Machine Learning, healthcare and web development projects available on my GitHub profile.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Open Source",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/toshlewi",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};