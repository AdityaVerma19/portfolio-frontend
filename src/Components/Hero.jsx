import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/deve.png'; 
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import BlobButton from './BlobButton'; 

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };
const imageVariants = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } } };

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 pt-28 pb-16 bg-gradient-to-br from-sky-400 via-blue-50 to-indigo-300"
    >
      <motion.div
        className="text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-gray-700">Hello, I'm</motion.h2>
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">Aditya Verma</motion.h1>
        
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={[
              'Frontend Developer', 1000,
              'Backend Developer', 1000,
              'Fullstack Developer', 1000,
              'Problem Solver', 1000,
            ]}
            wrapper="h3"
            speed={50}
            className="text-xl md:text-2xl font-medium text-indigo-600 mt-2"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center buttons-container">
          
          <BlobButton to="/src/assets/Aditya_Verma_SDE Resume .pdf" download={true}>
            Download CV
          </BlobButton>
          
          <BlobButton to="contact" isScrollLink={true}>
            Contact Me
          </BlobButton>

          
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 mt-6 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/aditya-verma-00521922a/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
            <FaLinkedin className="w-8 h-8 text-blue-700 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/AdityaVerma19" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
            <FaGithub className="w-8 h-8 text-gray-800 hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={heroImg}
          alt="Aditya Verma, Frontend Developer"
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-indigo-600 hover:shadow-[0_0_35px_5px_rgba(79,70,229,0.7)] p-1 transition-all duration-300 ease-in-out hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
