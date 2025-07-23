import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const aboutLines = [
    "Hi, I'm Vadiraj Narayan Betageri, a Full Stack Developer with a B.E. in Electronics & Communication Engineering from Jain College of Engineering.",
    "I’ve completed the MERN Full Stack Program and built projects like ShoppyGlobe, a YouTube clone, an IoT-based Smart Refrigerator, and a Key Management System for HAL.",
    "My skills include HTML, CSS, Tailwind, JavaScript, React, Node.js, Express.js, MongoDB, Git, GitHub, C++, and Python.",
    "I’ve interned at HAL Overhaul Division and Main Flow Services, contributing to real-world automation and web solutions.",
  ];

  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-20 md:px-20" 
    >
      <div className="max-w-7xl mx-auto font-poppins">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-300">
          About Me
        </h2>

        <div className="text-lg md:text-2xl font-semibold leading-8 text-gray-400 whitespace-pre-line">
          <Typewriter 
            words={aboutLines}
            cursor
            cursorStyle="_"
            deleteSpeed={0}
            delaySpeed={2000}
            loop={Infinity}
            typeSpeed={40}
            />
        </div>
      </div>
    </section>
  );
};

export default About;
