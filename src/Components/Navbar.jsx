import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logoImage from "../assets/logo.png"; 
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

 
  const navLinks = [
    { to: "about", text: "About" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projects" },
    { to: "experience", text: "Experience" },
    { to: "blogs", text: "Blogs" },
    { to: "contact", text: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-black/85 shadow z-50 rounded-b-2xl">
      <div className="px-4 py-3 flex justify-between items-center">
    
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={logoImage}
            alt="Logo"
            className="w-14 h-14 md:w-12 md:h-12 rounded-2xl border-2 border-black object-cover"
          />
        </Link>
        <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-indigo-600 text-white font-bold py-2 px-5 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Aditya Verma
          </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.to} className="  text-white hover:text-blue-400 cursor-pointer">
                <Link to={link.to} smooth={true} duration={500}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          
        
        
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white">
          <button onClick={handleToggle} aria-label="Toggle navigation menu">
            {navOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-indigo-500/60 px-6 pb-6 space-y-4 text-center text-lg font-medium rounded-b-2xl text-white">
          {navLinks.map((link) => (
            <li key={link.to} className="cursor-pointer">
              <Link onClick={closeMenu} to={link.to} smooth={true} duration={500}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;