import { useState } from "react";
import useScrollToSection from "../hooks/useScrollToSection";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const scrollTo = useScrollToSection();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (section) => {
    scrollTo(section);
    setIsOpen(false);
  };

  return (
    <nav className="md:px-10 px-4 mb-20 flex flex-col md:flex-row items-end justify-between md:py-4 py-2 fixed top-0 left-0 w-full z-50 shadow-md bg-[radial-gradient(ellipse_80%_80%_at_50%_-45%,rgb(120,119,145),)] text-pink-600">
      
      
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={logo} alt="logo" className="w-10 h-auto" />
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center md:text-xl text-lg md:gap-6 gap-3`}
      >
        <li>
          <button onClick={() => handleLinkClick("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("ourstory")}>Our Story</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("gallery")}>Gallery</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("memorymap")}>Memory Map</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("letter")}>Letter</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
