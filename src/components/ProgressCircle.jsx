
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const ProgressCard = ({ value, skill, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-900 text-white p-4 rounded-2xl shadow-xl w-36 h-44 flex flex-col items-center justify-center"
    >
      {/* Define SVG Gradient */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="tailwindGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>

      {/* Progress Circle */}
      <div className="w-20 h-20 mb-2">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: "url(#tailwindGradient)",
            textColor: "#fff",
            trailColor: "#1f2937",
            textSize: "24px"
          })}
        />
      </div>

      <p className="text-sm font-semibold mt-1">{skill}</p>
    </motion.div>
  );
};

export default ProgressCard;
