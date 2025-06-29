
import logo from "../assets/logo.jpeg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = ({ onHomeClick, onAboutClick, onSkillClick, onProjectClick, onContactClick }) => {
  const [hamburger, setHamburger] = useState(false);
  const handleClick = () => setHamburger(!hamburger);

  return (
    <div className="p-2 px-6 md:px-20 flex justify-between items-center w-full font-poppins relative">
      <img src={logo} className="w-20 h-20 object-cover shadow-lg object-top rounded-full" alt="logo" />
      
      <button className="md:hidden text-white text-2xl" onClick={handleClick}>
        <FaBars />
      </button>

      <ul className={`${hamburger ? "block" : "hidden"} 
        md:flex text-xl font-semibold text-[#b7b7b7] gap-4 md:gap-6 absolute md:static top-24 right-0 md:left-0 bg-black md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none z-50`}>
        <li className="hover:border-b-2 hover:text-white transition" onClick={onHomeClick}>Home</li>
        <li className="hover:border-b-2 hover:text-white transition" onClick={onAboutClick}>About</li>
        <li className="hover:border-b-2 hover:text-white transition" onClick={onSkillClick}>Skill & Certification</li>
        <li className="hover:border-b-2 hover:text-white transition" onClick={onProjectClick}>Project</li>
        <li className="hover:border-b-2 hover:text-white transition" onClick={onContactClick}>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
