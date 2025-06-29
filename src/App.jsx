import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import SkillStack from "./pages/Skill";
import ContactForm from "./pages/Contact";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
   // if you add contact later

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-4xl font-bold bg-black flex flex-col overflow-hidden">
      <Header
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillClick={() => scrollToSection(skillRef)}
        onProjectClick={() => scrollToSection(projectRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <section ref={homeRef}><Home /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={skillRef}><SkillStack /></section>
      <section ref={projectRef}><Project /></section>
      
      <section ref={contactRef}><ContactForm /></section>
      <Footer/>

    </div>
  );
};

export default App;
