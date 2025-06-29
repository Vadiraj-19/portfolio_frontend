import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./cylinder.css";

const skills = [
  { skill: "HTML", percentage: 99, img: "/logos/html.png", certificateLink: "/certificate/htm&css.pdf" },
  { skill: "CSS", percentage: 95, img: "/logos/css.jpeg", certificateLink: "/certificate/htm&css.pdf" },
  { skill: "Tailwind Css", percentage: 85, img: "/logos/tailwindcss.png", certificateLink: "/certificate/htm&css.pdf" },
  { skill: "Git & Github", percentage: 90, img: "/logos/github.png", certificateLink: "/certificate/git&github.pdf" },
  { skill: "JavaScript", percentage: 90, img: "/logos/js.png", certificateLink: "/certificate/js.pdf" },
  { skill: "React JS", percentage: 85, img: "/logos/react.png", certificateLink: "/certificate/react.pdf" },
  { skill: "Redux", percentage: 80, img: "/logos/redux.png", certificateLink: "/certificate/react.pdf" },
  { skill: "Node JS", percentage: 85, img: "/logos/nodejs.png", certificateLink: "/certificate/Nodejs&Expressjs&MongoDB.pdf" },
  { skill: "Express JS", percentage: 85, img: "/logos/express.png", certificateLink: "/certificate/Nodejs&Expressjs&MongoDB.pdf" },
  { skill: "MongoDB", percentage: 85, img: "/logos/mongoDB.png", certificateLink: "/certificate/Nodejs&Expressjs&MongoDB.pdf" },
];

const SkillStack = () => {
  const [stack, setStack] = useState(skills);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStack((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleCardClick = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="min-h-fit w-full flex flex-col items-center justify-center bg-black px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-300 mb-16 tracking-tight drop-shadow-md">
        Skill & Certification
      </h2>

      <div className="relative w-full max-w-[400px] h-[520px] mx-auto">
        {stack.map((item, index) => (
          <div
            key={item.skill}
            onClick={handleCardClick}
            className={`absolute w-full h-[460px] sm:h-[480px] md:h-[500px] rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 cursor-pointer transition-transform duration-700 ease-in-out ${
              index === 0 ? "hover:scale-105" : ""
            }`}
            style={{
              background: "rgba(0, 0, 0, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "1.5rem",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              top: `${index * 10}px`,
              left: `${index * 3}px`,
              zIndex: stack.length - index,
              opacity: index === 0 ? 1 : 0.45,
              transform: `scale(${1 - index * 0.03}) rotateX(${index * 1.2}deg)`,
              boxShadow:
                index === 0
                  ? "0 0 40px rgba(147, 51, 234, 0.5), 0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 8px rgba(255,255,255,0.02)"
                  : "0 6px 20px rgba(0, 0, 0, 0.25)",
              filter: index !== 0 ? "brightness(0.7) blur(1px)" : "none",
            }}
          >
            <img
              src={item.img}
              alt={`${item.skill} logo`}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 object-contain shadow-xl"
              style={{
                boxShadow: "0 0 25px rgba(147, 51, 234, 0.6)",
                backgroundColor: "#11111199",
                padding: "10px",
                borderRadius: "50%",
              }}
            />

            <div className="w-20 h-20 md:w-24 md:h-24 mb-3">
              <CircularProgressbar
                value={item.percentage}
                text={`${item.percentage}%`}
                styles={buildStyles({
                  pathColor: "url(#tailwindGradient)",
                  trailColor: "#1f2937",
                  textColor: "#fff",
                  textSize: "18px",
                })}
              />
            </div>

            <p className="font-bold text-lg mt-2 tracking-wide">{item.skill}</p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.certificateLink, "_blank");
              }}
              className="mt-4 flex items-center space-x-2 bg-white text-black px-3 py-1 rounded-full text-xs md:text-sm font-semibold hover:shadow-lg transition"
            >
              <img src="/logos/internshala.png" alt="Internshala Logo" className="w-5 h-5" />
              <span>Certified by Internshala Trainings</span>
            </button>

            <svg className="w-0 h-0 absolute">
              <defs>
                <linearGradient id="tailwindGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillStack;
