import React, { useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Chatbot from "./Components/Chatbot.jsx"; 
import Experience from "./Components/Experience.jsx";
import "./App.css";

const App = () => {
  useEffect(() => {
    const updateMousePos = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, []);

  return (
    <div className="bg-[#030712] text-white min-h-screen relative overflow-hidden select-none">
      {/* 1. Global Spotlight Follower */}
      <div className="global-spotlight" />

      {/* 2. Global Cyber Grid Background */}
      <div className="fixed inset-0 hero-grid-bg opacity-60 pointer-events-none z-0" />

      {/* 3. Ambient Colorful Aura Blobs (Page-wide Scrolling Nebulas) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Hero Area - Indigo */}
        <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full bg-indigo-500/22 blur-[140px] animate-float-slow" />
        
        {/* About Area - Warm Amber */}
        <div className="absolute top-[900px] left-10 w-[500px] h-[500px] rounded-full bg-amber-500/16 blur-[130px] animate-float-slow-reverse" />
        
        {/* Skills Area - Teal/Emerald */}
        <div className="absolute top-[1800px] right-20 w-[550px] h-[550px] rounded-full bg-emerald-500/15 blur-[130px] animate-float-slow" />
        
        {/* Projects Area - Fuchsia/Purple */}
        <div className="absolute top-[2800px] left-20 w-[500px] h-[500px] rounded-full bg-fuchsia-500/16 blur-[130px] animate-float-slow-reverse" />
        
        {/* Experience Area - Cyan/Blue */}
        <div className="absolute top-[3900px] right-10 w-[550px] h-[550px] rounded-full bg-blue-500/16 blur-[130px] animate-float-slow" />
        
        {/* Contact Area - Indigo/Rose */}
        <div className="absolute top-[4900px] left-1/4 w-[700px] h-[700px] rounded-full bg-rose-500/22 blur-[160px] animate-float-slow-reverse" />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar />
        <Chatbot />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;