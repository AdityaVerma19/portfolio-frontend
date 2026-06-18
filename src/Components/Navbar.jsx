import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import logoImage from "../assets/logo.png"; 

const Navbar = ({ theme, toggleTheme }) => {
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
      <div className="max-w-full px-8 md:px-16 flex justify-between items-center">
    
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={logoImage}
            alt="Logo"
            className="w-12 h-12 rounded-xl border border-indigo-500/20 object-cover hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.to === "blogs" ? (
                  <a 
                    href="#blogs"
                    className="text-slate-300 hover:text-indigo-300 cursor-pointer transition-all duration-300 px-1 py-2 text-xs uppercase font-mono font-bold tracking-wider"
                  >
                    {link.text}
                  </a>
                ) : (
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
                )}
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon size={18} className="text-slate-700" /> : <FiSun size={18} className="text-amber-400" />}
          </button>
        </div>
 
        {/* Hamburger Icon & Theme Toggle for Mobile */}
        <div className="md:hidden flex items-center gap-4 text-white">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-amber-400 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon size={16} className="text-slate-700" /> : <FiSun size={16} className="text-amber-400" />}
          </button>
          <button onClick={handleToggle} aria-label="Toggle navigation menu" className="text-white hover:text-indigo-400 transition-colors duration-300">
            {navOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-[#0a0f1d]/95 border-b border-indigo-500/30 px-6 pb-6 pt-4 space-y-4 text-center text-sm uppercase font-mono font-bold tracking-wider text-white">
          {navLinks.map((link) => (
            <li key={link.to} className="cursor-pointer py-2 border-b border-slate-800/40 last:border-0">
              {link.to === "blogs" ? (
                <a 
                  onClick={closeMenu} 
                  href="#blogs"
                  className="text-slate-300 hover:text-indigo-400 cursor-pointer transition-all duration-300"
                >
                  {link.text}
                </a>
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;