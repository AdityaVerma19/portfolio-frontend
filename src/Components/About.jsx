import React from "react";
import { motion } from "framer-motion";
import myPic from "../assets/IMG_7243.jpeg";
import { FaBriefcase, FaGraduationCap, FaTrophy } from "react-icons/fa";

const mainContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-20 min-h-fit bg-transparent relative z-10"
    >
      <p className="text-center font-semibold text-amber-400 uppercase tracking-widest text-xs">
        Get To Know More
      </p>
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 mt-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
          About Me
        </span>
      </h1>

      {/*main. motion.div */}
      <motion.div
        className="flex flex-col md:flex-row gap-20 items-center justify-center max-w-6xl mx-auto"
        variants={mainContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* first child  */}
        <motion.div className="flex-shrink-0" variants={itemVariants}>
          <motion.div className="group relative rounded-full p-1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_35px_5px_rgba(245,158,11,0.5)]">
            <img
              src={myPic}
              alt="Aaditya Verma's profile picture"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border border-amber-500/20"
            />
          </motion.div>
        </motion.div>

        {/* second child  */}
        <motion.div
          className="flex flex-col gap-12 max-w-2xl"
          variants={itemVariants}
        >
          {/*  nested container with the 3 cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            variants={cardContainerVariants}
          >
            <motion.div
              className="group relative h-36 w-full cursor-pointer overflow-hidden rounded-xl border border-slate-800/80 p-4 glass-card shadow-lg glow-card-indigo transition-all duration-300"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center justify-center">
                <FaBriefcase className="mb-2 h-8 w-8 text-indigo-400" />
                <h3 className="font-semibold text-slate-200 mt-1">Experience</h3>
              </div>
              <div className="absolute inset-0 flex transform flex-col items-center justify-center bg-indigo-700 p-4 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                <h4 className="mb-1 font-bold">1+ Year</h4>
                <p className="text-xs text-center">
                  Building responsive and dynamic user interfaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              className="group relative h-36 w-full cursor-pointer rounded-xl border border-slate-800/80 p-4 glass-card shadow-lg overflow-hidden glow-card-amber transition-all duration-300"
              variants={cardVariants}
            > 
              <motion.div className="flex flex-col items-center justify-center">
                <FaTrophy className="mb-2 h-8 w-8 text-amber-400" />
                <h3 className="font-semibold text-slate-200 mt-1">Achievements</h3>
              </motion.div>
              <motion.div className="absolute inset-0 flex transform flex-col items-center justify-center bg-amber-600 p-4 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                <h4 className="mb-1 font-bold">Runner Up Trophy 2nd Place</h4>
                <p className="text-xs text-center">Winner of the few Hackathons</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="group relative h-36 w-full cursor-pointer overflow-hidden rounded-xl border border-slate-800/80 p-4 glass-card shadow-lg glow-card-emerald transition-all duration-300"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center justify-center ">
                <FaGraduationCap className="mb-2 h-8 w-8 text-emerald-400" />
                <h3 className="font-semibold text-slate-200 mt-1">Education</h3>
              </div>
              <div className="absolute inset-0 flex transform flex-col items-center justify-center bg-emerald-700 p-4 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                <h4 className="mb-1 font-bold">B.Tech - DTU</h4>
                <p className="text-xs text-center">
                  Major in Mathematics and Computing Engineering.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-justify text-slate-300 space-y-4 font-medium text-[18px] leading-relaxed">
            <p>
              Hi! I’m Aditya Verma, a passionate AI/ML Engineer Intern and Full-Stack Developer with a specialization in Mathematics and Computing Engineering from Delhi Technological University (DTU). I hold a strong foundation in Computer Science fundamentals, including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Operating Systems.
            </p>
            <p>
              My primary areas of interest lie in Machine Learning, Deep Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Natural Language Processing (NLP), and Multimodal AI. I am particularly interested in the end-to-end lifecycle of intelligent systems—from data preprocessing and model training/fine-tuning to inference optimization. Bridging this with full-stack MERN (MongoDB, Express, React, Node.js) development, I build robust, responsive user interfaces and high-performance backend pipelines to deploy intelligent models into production.
            </p>
            <p>
              I actively explore Transformer architectures, attention mechanisms, vector databases, semantic search, agentic workflows, and parameter-efficient fine-tuning (PEFT) techniques. My focus extends beyond utilizing existing AI tools to understanding the underlying mathematical foundations, architectural design choices, and optimization techniques that enable scalable, secure, and high-performing systems.
            </p>
            <p>
              🛠️ What I Bring to the Table: Hands-on exposure to Python, C++, SQL, PyTorch, and the modern MERN stack ecosystem. I continuously work on expanding my expertise in Generative AI, LLM-powered applications, knowledge retrieval systems, and AI-driven automation—driven by curiosity, continuous learning, and a commitment to building intelligent solutions that create measurable real-world impact.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
