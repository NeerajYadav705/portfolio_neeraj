import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

export const NAV_LINKS = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/skills",
    label: "Skills",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: LinkedinIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: TwitterIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: InstagramIcon,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Affordable Street Eats",
    description:
      "Affordable Street Eats is a user-friendly and fully responsive web application designed to help users discover affordable and delicious street food options in their local area. The platform provides an intuitive interface, real-time location-based recommendations, and detailed information about food vendors, including menus, prices, and customer reviews.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Express.js", "API"],
    image: "/ProjectsImage/ase.png",
    liveLink: "https://example.com/project1",
    githubLink: "https://github.com/yourusername/project1",
    featured: true,
  },
  {
    id: 2,
    title: "Dhaniram Paints",
    description:
      "Developed a modern, responsive website for my client Dhaniram Paints to effectively showcase their range of products and services. The website features a clean, visually appealing design, intuitive navigation, and highlights the brand’s offerings to enhance customer engagement and online presence.",
    tags: ["Next.js", "Tailwind CSS", "ShadCN", "Formspree"],
    image: "/ProjectsImage/dhaniram.png",
    liveLink: "https://example.com/project2",
    githubLink: "https://github.com/yourusername/project2",
    featured: true,
  },
  {
    id: 3,
    title: "AI Mock Interview",
    description:
      "A mock interview platform that uses AI to simulate real interview scenarios. Users can practice their interview skills with AI-generated questions and receive feedback on their performance. The platform is built using Next.js, Firebase for authentication and database management, and Tailwind CSS for styling.",
    tags: [
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "ShadCN",
      "Google gemini",
      "API",
    ],
    image: "/ProjectsImage/aimock.png",
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
    featured: false,
  },
  {
    id: 4,
    title: "Web Builders Studio",
    description:
      "A web development agency website that showcases the services offered by Web Builders Studio. The site features a portfolio of past projects, client testimonials, and a contact form for inquiries. Built with Next.js and Tailwind CSS, it provides a modern and professional online presence.",
    tags: ["Next.js", "Tailwind CSS", "ShadCN", "Formspree"],
    image: "/ProjectsImage/webbuilders.png",
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
    featured: false,
  },
  {
    id: 5,
    title: "Zentry Gmaing Website",
    description:
      "Is show case my fronend end skills and my love for gaming. The website features a modern design, responsive layout, and interactive elements to enhance user experience.",
    tags: ["React.js", "Gsap", "Tailwind CSS"],
    image: "/ProjectsImage/gaming.png",
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
    featured: false,
  },
  {
    id: 6,
    title: "Wallpaers",
    description:
      "A wallpaper application that allows users to browse and download high-quality wallpapers. The app features a clean and modern design, with categories for easy navigation.",
    tags: ["React.js", "Tailwind Css"],
    image: "/ProjectsImage/wallpaper.png",
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
    featured: false,
  },
  {
    id: 7,
    title: "News",
    description:
      "A news application that provides users with the latest news articles from various sources. Users can filter news by categories and read articles directly within the app. The app is built using React and Tailwind CSS, and API ensuring a responsive and user-friendly experience.",
    tags: ["React.js", "API", "Tailwind Css"],
    image: "/ProjectsImage/news.png",
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
    featured: false,
  },
];

export const SKILLS = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 80 },
    ],
  },
];

export const EXPERIENCES = [
  {
    title: "Freelance Web Developer",
    company: "Dhaniram Paints (Remote)",
    period: "March 2025 – April 2025",
    description:
      "Collaborated directly with Dhaniram Paints to design and develop a fully responsive and modern company website using Next.js, JavaScript, Tailwind CSS, and ShadCN. Focused on mobile-first design, accessibility, SEO optimization, and performance enhancements for better user retention.",
  },
  {
    title: "Web Development Training Intern",
    company: "SLOG Solution PVT. LTD., Dehradun, Uttarakhand",
    period: "June 2024 – July 2024",
    description:
      "Mastered HTML, CSS, JavaScript, and Bootstrap to build responsive and visually appealing layouts. Gained experience in integrating APIs into web projects for dynamic data rendering.",
  },
  {
    title: "Web Development Intern",
    company: "Cairo Vision, Bengaluru, Karnataka",
    period: "July 2023 – August 2023",
    description:
      "Created a high-performance website meeting all project specifications and timelines. Assisted in organizing team schedules, supporting communication, and maintaining team productivity.",
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution:
      "Guru Ram Das Institute of Management and Technology, Dehradun (248001)",
    period: "2022 – 2025",
    description:
      "Focused on web development, software engineering, and practical implementation of modern technologies.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Government Polytechnic, Dehradun",
    period: "",
    description:
      "Studied core computer science concepts and programming fundamentals with hands-on experience in software development.",
  },
];
