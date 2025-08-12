import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Angular",
    image: "angular.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring Boot",
    image: "spring.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
      {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/klai.medamin",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/klai.medamin",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/mouhamedkl",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/mohamed-amine-klai-2a5132245/",
  },
] as const;

export const FRONTEND_SKILL = [
  // {
  //   skill_name: "Angular",
  //   image: "angular.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "HTML",
  //   image: "html.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "CSS",
  //   image: "css.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "JavaScript",
  //   image: "js.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   skill_name: "TypeScript",
  //   image: "ts.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Tailwind CSS",
  //   image: "tailwind.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Material UI",
  //   image: "mui.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React",
  //   image: "react.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Next.js 14",
  //   image: "next.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Prisma",
  //   image: "prisma.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Graphql",
  //   image: "graphql.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Jenkins",
    image: "jenkins.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prometheus",
    image: "prometheus.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Grafana",
    image: "grafana.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Nexus",
    image: "nexus.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "SonarQube",
    image: "sonarqube.webp",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Swagger",
    image: "swagger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Ubuntu",
    image: "ubuntu.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Windows",
    image: "windows.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "Pipeline CI/CD ",
     description: [
    "Designed and managed a complete CI/CD pipeline for Spring Boot (backend) and Angular (frontend) applications, ensuring smooth, automated, and secure deployments.",
    "Implemented continuous integration and deployment processes using Jenkins, GitHub Actions, and Docker, covering build, testing, and production release.",
    "Improved code quality with automated unit tests and integrated SonarQube for static analysis and vulnerability detection.",
    "Integrated Prometheus and Grafana for monitoring, performance tracking, anomaly detection, and enhanced security.",
    "Keywords:Jenkins, Docker, SonarQube, Nexus, Postman, Prometheus, Grafana, Spring Boot, Angular, CI/CD, SonarQube,Nexus"
  ] as string[],
    image: "/projects/1.jpg",
    link: "",
  },
{
  title: "Microservice",
  description: [
    "Designed and implemented a scalable microservices architecture with an API Gateway as a central entry point for routing requests to User and Product services.",
    "Integrated Eureka Server for service discovery, enabling scalability, resilience, and high availability.",
    "Configured Keycloak for centralized user management and secure authentication using OAuth2 protocol.",
    "Deployed a Spring Cloud Config Server for centralized configuration management, streamlining maintenance and ensuring consistency across services.",
    "Keywords:Spring Boot, Spring Cloud Gateway, Eureka Server, Keycloak, OAuth2, Spring Cloud Config, Microservices Architecture, REST APIs, Service Discovery, Asynchronous Messaging, CI/CD, Docker."
  ],
  image: "/projects/arch.jpg",
  link: "https://github.com/mouhamedkl/Microservices",
}
,
  {
    title: "Contact Doctor",
    description:
      ['Smart symptom-based search to help patients find the right doctor quickly.',
        'Online appointment booking system for seamless scheduling.',
        'Real-time chat and direct communication between doctors and patients.',
        'Secure and responsive platform focused on user experience and accessibility.',
      'Keywords:  Next.js, Express.js, REST API, MongoDB, WebSocket, TailwindCSS, JWT, Admin Dashboard, Authentication & Authorization.'],
    image: "/projects/1.3.png",
    link: "",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "",
    data: [
     {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/klai.medamin",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/klai.medamin",
  },
 
    ],
  },
  {
    title: "Social Media",
    data: [
   
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/mouhamedkl",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/mohamed-amine-klai-2a5132245/",
  },
    ],
  },

] as const;
export const Educations = [
  {
    title: "National Engineering Degree in Computer Science",
    date: "2021 - 2025",
    description: "Private Higher School of Engineering and Technology (ESPRIT)",
  },
   {
    title: "Applied Bachelor’s Degree in Computer Science",
    date: "2017 - 2021",
    description: "Higher Institute of Technological Studies of Rades",
  },
  {
    title: "School Diploma – Computer Science",
    date: "2013 - 2017",
    description: "Chebbii High School.",
  },
] as const;
export const Expriences = [
  {
    title: "Freelance Full-Stack Developer – Booking Coif",
    date: "2025/02 - 2025/07",
    description: [
    "Developed a full-stack hair salon appointment booking platform and implemented JWT authentication with cookies for secure, role-based access control.",
    "Designed responsive booking UI with real-time stylist availability and appointment management.",
    "Built RESTful APIs for user registration, scheduling, and admin salon management.",
    "Integrated WebSocket notifications for instant updates on appointment status changes.",
    "Implemented tour/program management modules (CRUD, pricing, availability, media).",
    "Keywords: Full-Stack Development, Angular, Spring Boot, MongoDB, JWT, WebSocket, REST API, Authentication & Authorization."
  ]
  },
  {
    title: "Full-Stack Developer Intern – Final Year Project",
    date: "2024/04 - 2024/12",
    description: [
      "Engineered a secure e-commerce platform for electric vehicle (EV) charging stations with client/admin dashboards.",
      "Implemented authentication and authorization with JWT and refresh tokens.",
      "Developed user, product, order,preorder, and complaint management modules using Angular, Spring Boot, and Mysql.",
      "Integrated  WebSocket for real-time notifications.",
      "Monitored system performance and metrics using Prometheus and Grafana.",
      "Optimized CI/CD pipelines with Docker, Jenkins, Nexus, and SonarQube.",
      "Keywords: Angular, Node.js, Spring Boot, Mysql, JWT, Prometheus and Grafana ,WebSocket, Docker, CI/CD, Full-Stack Development, Real-Time Systems, REST API, Authentication & Authorization.",
    ],
  },

  {
    title: "Full-Stack Developer Intern – Booking Platform",
    date: "2023/07 - 2023/08",
    description: [
      "Developed a medical appointment booking platform with dedicated dashboards for clients, doctors, and administrators.",
      "Implemented secure authentication and authorization using Spring Security with HttpOnly cookies.",
      "Built modules for managing doctors, employers, appointments, and PDF prescription generation.",
      "Integrated advanced calendar management for doctors' schedules.",
      "Keywords: Angular, Node.js, Spring Boot, PostgreSQL, HttpOnly Cookies, RBAC, Full-Stack Development, REST API, Authentication & Authorization.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    date: "2022/07 - 2022/08",
   description: [
  "Implemented secure authentication using Flask, ensuring restricted access to sensitive data and secure user/offer management.",
  "Developed an automated email data extraction system to process information in real-time, increasing efficiency and reducing manual workload.",
  "Created responsive and user-friendly interfaces with Angular and Bootstrap for authentication, user management, and offer management modules, enhancing usability and engagement.",
  "Keywords: Flask, Angular, MySQL, Bootstrap, REST APIs, Email Parsing."
]

  },
] as const;
export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Exprience",
    link: "#exprience",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;


