import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Bookspire",
    description:
      "Bookspire is a full-stack digital library platform that allows users to browse, search, and add books based on categories. The frontend is built with React.js and styled using Tailwind CSS for a clean and responsive UI. Users can view detailed book information, filter books by genres, and search by title or author. The backend, built with Node.js and Express.js, handles user authentication using JWT and manages API routes for book management. MongoDB is used to store book data, categories, and user information. This project helps simulate real-world features of a modern library or bookstore system.",
    media: [
      "https://res.cloudinary.com/dezekxohc/video/upload/v1751110003/kwl6hend7ex98nvzbjaj.mp4"
    ],
    github: "https://github.com/Vadiraj-19/bookLibrary",
    techStack: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API"
    ]
  }
  ,
  {
    title: "YouTube Clone",
    description:
      "This project is a full-stack YouTube-inspired video platform that allows users to upload, browse, and interact with video content. Built with the MERN stack, the application includes features such as secure user authentication using JWT, video uploads with metadata (title, description, thumbnail), video playback, like/dislike buttons, commenting, and a dynamic search functionality. The frontend is developed with ReactJS and styled using Tailwind CSS, while the backend uses Express.js and Node.js to manage APIs. MongoDB is used to store user and video data securely. This project simulates the core functionalities of a modern video-sharing platform.",
    media: [
      "https://res.cloudinary.com/dezekxohc/video/upload/v1751109990/xxwg8xevonykcic5kagr.mp4",
    ],
    github: "https://github.com/Vadiraj-19/Youtube-clone",
    techStack: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],
  },
  {
    title: "ShoppyGlobe (e-commerce platform)",
    description:
      "ShoppyGlobe is a fully functional e-commerce web application where users can browse products, manage their cart, and perform secure user authentication. The frontend is built with ReactJS and Tailwind CSS for a responsive user experience, while the backend uses Node.js and Express.js to handle APIs and database operations. MongoDB stores product, user, and order data. The platform features JWT-based login, protected routes, dynamic routing, and integrates API-driven product data to provide a smooth shopping flow.",
    media: [
      "https://res.cloudinary.com/dezekxohc/video/upload/v1751110008/qtg3wjs7xxxpwi46oyxr.mp4",
    ],
    github: "https://github.com/Vadiraj-19/_shoppyGlobe_",
    techStack: [
      "HTML",
      "TailwindCSS",
      "JavaScript",
      "API",
      "ExpressJS",
      "NodeJS",
      "ReactJS",
      "MongoDB",
    ],
  },
  {
    title: "Modern Weather Suite",
    description:
      "Weather app using OpenWeatherMap with geolocation and 5-day forecast.",
    media: [
      "https://res.cloudinary.com/dezekxohc/video/upload/v1751110008/eqflgwuukir0twlz5ziz.mp4",
    ],
    github: "https://github.com/Vadiraj-19/modern_weather_suite",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
  },
  
];



const techLogos = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  JWT: "https://jwt.io/img/pic_logo.svg",

  "REST API": "https://img.icons8.com/ios-filled/50/ffffff/api.png",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  API: "https://img.icons8.com/ios-filled/50/ffffff/api.png"
};

export default function ProjectSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${100 * (projects.length - 1)}vh`]
  );

  scrollYProgress.on("change", (value) => {
    const index = Math.round(value * (projects.length - 1));
    if (index !== activeIndex) setActiveIndex(index);
  });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-y-auto scroll-smooth  text-white">
      <h2 className="text-center text-5xl font-bold text-white pt-10 pb-5">Projects</h2>
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-6 py-12"
        >
          <div className="w-full md:w-[55%] h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px]">
            <div className="h-full w-full bg-black rounded-2xl overflow-hidden">
              {project.media[0].endsWith(".mp4") ? (
                <video
                  src={project.media[0]}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <img
                  src={project.media[0]}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[45%]"
          >
            <h3 className="text-4xl font-extrabold mb-4 text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5 items-center">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 text-xs uppercase font-medium tracking-widest px-3 py-1 bg-white/10 rounded-full border border-white/20"
                >
                  {techLogos[tech] && (
                    <img
                      src={techLogos[tech]}
                      alt={tech}
                      className="w-4 h-4"
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx === activeIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
