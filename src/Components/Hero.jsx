import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import heroImg from '../assets/deve.png'; 
import { FaLinkedin, FaGithub, FaTerminal, FaDownload, FaEnvelope, FaCode, FaMicrochip } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import BlobButton from './BlobButton'; 

const Hero = () => {
  const heroRef = useRef(null);
  
  // Motion values to track cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking coordinates
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Initialize mouse values to center on mount
  useEffect(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  }, []);

  // Handle mouse positioning inside the hero section
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Reset back to center when mouse leaves
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  };

  // Parallax translation for floating background blobs
  const blobX1 = useTransform(springX, [0, 1400], [-25, 25]);
  const blobY1 = useTransform(springY, [0, 800], [-25, 25]);
  const blobX2 = useTransform(springX, [0, 1400], [35, -35]);
  const blobY2 = useTransform(springY, [0, 800], [35, -35]);

  // 3D Tilt effect for the Hero visual card
  const rotateX = useTransform(springY, [0, 800], [10, -10]);
  const rotateY = useTransform(springX, [0, 1400], [-10, 10]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 pt-28 pb-16 bg-transparent relative overflow-hidden select-none"
    >
      {/* 3. Ambient Parallax Blur Blobs */}
      <motion.div
        style={{ x: blobX1, y: blobY1 }}
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        style={{ x: blobX2, y: blobY2 }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        style={{ x: blobX1, y: blobY2 }}
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-emerald-600/5 blur-3xl pointer-events-none z-0"
      />

      {/* Left Column: Developer Information */}
      <motion.div
        className="w-full lg:w-1/2 text-left z-20 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 text-xs md:text-sm font-medium w-fit mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          AI/ML Engineer & Full-Stack Developer
        </motion.div>

        {/* Intro */}
        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl font-medium text-slate-400 tracking-wide"
        >
          Hi, I am
        </motion.h2>

        {/* Name with Glowing Gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mt-1 mb-4 text-white"
        >
          Aditya <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">Verma</span>
        </motion.h1>

        {/* Typewriter Animation */}
        <motion.div
          variants={itemVariants}
          className="h-10 mb-6 flex items-center"
        >
          <span className="text-slate-500 mr-2 text-xl font-semibold font-mono">&gt;</span>
          <TypeAnimation
            sequence={[
              'AI / ML Specialist', 1200,
              'Full-Stack Developer', 1200,
              'Node.js & Python Developer', 1200,
              'Creative Problem Solver', 1200,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl md:text-2xl font-bold text-indigo-400 font-mono tracking-tight"
            repeat={Infinity}
          />
        </motion.div>

        {/* Short Bio */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed mb-8"
        >
          Building intelligent, data-driven systems and beautiful, responsive web applications. 
          Delhi Technological University (DTU) alumnus bridging the gap between machine learning and modern software engineering.
        </motion.p>

        {/* Quick Metrics Bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg mb-8"
        >
          <div className="glass-card p-3 md:p-4 rounded-xl flex flex-col justify-center items-center text-center">
            <span className="text-xl md:text-2xl font-bold text-white font-mono">2+</span>
            <span className="text-[10px] md:text-xs text-slate-500 mt-1 uppercase font-semibold tracking-wider">Years Exp</span>
          </div>
          <div className="glass-card p-3 md:p-4 rounded-xl flex flex-col justify-center items-center text-center">
            <span className="text-xl md:text-2xl font-bold text-indigo-400 font-mono">10+</span>
            <span className="text-[10px] md:text-xs text-slate-500 mt-1 uppercase font-semibold tracking-wider">Projects</span>
          </div>
          <div className="glass-card p-3 md:p-4 rounded-xl flex flex-col justify-center items-center text-center">
            <span className="text-xl md:text-2xl font-bold text-emerald-400 font-mono">DTU</span>
            <span className="text-[10px] md:text-xs text-slate-500 mt-1 uppercase font-semibold tracking-wider">Alumnus</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 items-center buttons-container"
        >
          <BlobButton to="/Aditya Verma AI_ML Engineer.pdf" download={true}>
            <span className="flex items-center gap-2">
              <FaDownload className="text-xs" /> Download CV
            </span>
          </BlobButton>

          <BlobButton to="contact" isScrollLink={true}>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-xs" /> Get In Touch
            </span>
          </BlobButton>

          {/* SVG Gooey Filter for BlobButton */}
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
              </filter>
            </defs>
          </svg>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-5 mt-8 items-center"
        >
          <span className="text-xs uppercase font-bold tracking-widest text-slate-600">Connect:</span>
          <a
            href="https://www.linkedin.com/in/aditya-verma-00521922a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/AdityaVerma19"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-white/50 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Column: 3D Tilt Interactive Image Card */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 z-20 cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="w-72 h-80 md:w-96 md:h-[400px] glass-card rounded-2xl p-4 relative neon-glow border border-indigo-500/20 group hover:border-indigo-500/40 transition-colors duration-300 flex flex-col justify-between"
        >
          {/* Mock Editor Header */}
          <div className="flex justify-between items-center pb-3 border-b border-slate-800/60 select-none">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] md:text-xs font-mono text-slate-500 font-medium tracking-wider">aditya_verma.py</span>
            <div className="flex gap-1.5 text-slate-600 text-xs">
              <FaTerminal />
            </div>
          </div>

          {/* Interactive Profile Area */}
          <div className="flex-1 my-4 overflow-hidden rounded-xl bg-slate-950/70 border border-slate-800/40 relative flex items-center justify-center p-1.5">
            {/* Ambient inner card shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent z-10 opacity-70 pointer-events-none" />
            
            <img
              src={heroImg}
              alt="Aditya Verma"
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out z-0 filter brightness-[0.92] group-hover:brightness-100"
            />

            {/* Glowing Tech Orbits on Hover */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-64 h-64 rounded-full border border-dashed border-indigo-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="w-48 h-48 rounded-full border border-dashed border-blue-500/20 absolute animate-[spin_12s_linear_infinite_reverse]" />
            </div>
          </div>

          {/* Mock Code Info Footer */}
          <div className="flex justify-between items-center text-[10px] md:text-xs font-mono text-slate-500 select-none pt-2">
            <div className="flex items-center gap-1.5 text-indigo-400">
              <FaCode />
              <span>class AdityaVerma:</span>
            </div>
            <span className="text-emerald-500">ML_ENG = True</span>
          </div>

          {/* Floating tech mini-badges */}
          <motion.div
            style={{ transform: 'translateZ(30px)' }}
            className="absolute -top-6 -right-6 p-3 rounded-xl glass-card text-indigo-400 flex items-center justify-center border border-indigo-500/30 neon-glow hover:text-indigo-300 transition-colors duration-300"
          >
            <FaMicrochip className="w-6 h-6 animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


