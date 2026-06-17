import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logoImage from "../assets/logo.png"; 

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "navbar-scrolled" 
        : "bg-[#030712]/30 backdrop-blur-sm py-5 border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
    
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={logoImage}
            alt="Logo"
            className="w-12 h-12 rounded-xl border border-indigo-500/20 object-cover hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300"
          />
        </Link>
        
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-bold py-2 px-6 rounded-full hover:from-indigo-500 hover:to-fuchsia-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(165,180,252,0.5)] transition-all duration-300 cursor-pointer font-mono text-sm"
        >
          Aditya Verma
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  smooth={true} 
                  duration={500} 
                  offset={-80}
                  spy={true}
                  activeClass="nav-link-active"
                  className="text-slate-300 hover:text-indigo-300 cursor-pointer transition-all duration-300 px-1 py-2 text-xs uppercase font-mono font-bold tracking-wider"
                >
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
        <ul className="md:hidden bg-[#0a0f1d]/95 border-b border-indigo-500/30 px-6 pb-6 pt-4 space-y-4 text-center text-sm uppercase font-mono font-bold tracking-wider text-white">
          {navLinks.map((link) => (
            <li key={link.to} className="cursor-pointer py-2 border-b border-slate-800/40 last:border-0">
              <Link 
                onClick={closeMenu} 
                to={link.to} 
                smooth={true} 
                duration={500} 
                offset={-80}
                spy={true}
                activeClass="text-indigo-400"
              >
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