import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/profilecard.jpeg';
import project2 from '../assets/todolist.jpeg';
import project3 from '../assets/chatbot.jpeg';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import furnito from '../assets/furnito.png';
import face_mask from '../assets/face_mask.png';
import LSTM from '../assets/LSTM.png';

import fin from '../assets/fin.png';

const projects = [
  {
    title: 'Responsive Profile Card',
    image: project1,
    description: 'A sleek and fully responsive digital business card. This project focuses on clean UI design and modern CSS to create a reusable component for personal branding.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AdityaVerma19/AdiCodes',
    demo: 'https://myprofilecardaditya.netlify.app/',
  },
  {
    title: 'Interactive To-Do List',
    image: project2,
    description: 'A dynamic single-page application built with MERN Stack. It demonstrates core state management principles, allowing users to add, delete, and track tasks with data persisted in local storage.',
    tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
    github: 'https://github.com/AdityaVerma19/todo-list-app',
    demo: 'todo-list-app-drab-nine.vercel.app',
  },
  {
    title: 'Dummy ChatBot',
    image: project3,
    description: 'A conversational UI that showcases the ability to integrate with third-party APIs. This project handles asynchronous requests to an AI service to provide intelligent, real-time responses.',
    tech: ['React', 'API Integration', 'JavaScript'],
    github: 'https://github.com/AdityaVerma19/zerocode-fe-assignment',
    demo: 'https://zerocode-fe-assignment-ctpb.vercel.app/login',
  },
   {
    title: 'Furnito E-Commerce Website',
    image:furnito,
    description: 'An interactive E-Commerce website built with MERN Stack.',
    tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
    github: 'https://github.com/AdityaVerma19/furnito-ecommerce',
    demo: 'furnito-ecommerce-one.vercel.app',
  },
 
  {
    title: 'Real-Time Face Mask Detection System',
    image: face_mask,
    description: 'A real-time face mask detection system built using MobileNetV2 (Transfer Learning) and OpenCV DNN face detector.',
    tech: ['Python', 'TensorFlow / Keras', 'OpenCV', 'NumPy'],
    github: 'https://github.com/AdityaVerma19/Face-Mask-Detection',
    demo: 'Run:detect_mask.py',
  },
   {
    title: 'Multi-Class Emotion Detection using Advanced LSTM & GloVe',
    image: LSTM,
    description: 'A robust, deep-learning-based NLP pipeline for classifying text into five emotional categories (Happiness, Anger, Fear, Sadness, Surprise) leveraging GloVe embeddings and Bi-LSTM.',
    tech: ['PyTorch', 'GloVe', 'Bi-LSTM', 'NLP'],
    github: 'https://github.com/AdityaVerma19/Multi-Class_Emotion_Detection_Using_Advanced_LSTM',
    demo: 'NA',
  },
   {
    title: 'Context-Based Financial Statement Analyser',
    image: fin,
    description: 'A hybrid NLP framework combining FinBERT embeddings, a Logistic Regression classifier, and a Qwen Large Language Model to classify financial statements, correct keyword-based biases, and generate explanations.',
    tech: ['FinBERT', 'Qwen LLM', 'Streamlit', 'NLP'],
    github: 'https://github.com/AdityaVerma19/Context_Based_Financial_Statement_Analyser',
    demo: 'https://contextbasedfinancialstatementanalyser-cxsfvbbreq9bfn4mn9hmvp.streamlit.app/',
  }
];


const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const projectVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } };

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-transparent relative z-10">
      <div className="text-center mb-12">
        <p className="font-semibold text-fuchsia-400 uppercase tracking-widest text-xs">Browse My Recent</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
            Projects
          </span>
        </h1>
      </div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="group relative overflow-hidden rounded-xl border border-slate-800/80 glass-card shadow-2xl glow-card-fuchsia transition-all duration-300 cursor-pointer"
            variants={projectVariants}
          >
            {/* Default Content: Image */}
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay with details - Slides up from the bottom */}
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              {/* Tech Stack Tags  */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map(tag => (
                  <span key={tag} className="bg-slate-900/90 text-fuchsia-300 border border-fuchsia-500/20 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.15)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover for Description and Links - Slides up from the top */}
            <div className="absolute inset-0 flex transform flex-col items-center justify-center bg-[#0a0f1d]/95 p-6 text-center text-white
                           opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-fuchsia-500/30 rounded-xl">
              <p className="mb-4 text-slate-300 text-sm">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 px-4 py-2 text-white font-semibold hover:from-fuchsia-500 hover:to-purple-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all duration-300 shadow-md"
                >
                  <FaGithub /> GitHub
                </a>
                {project.demo && 
                 project.demo !== "NA" && 
                 !project.demo.startsWith("Run:") && 
                 !project.demo.endsWith(".py") && (
                  <a
                    href={project.demo.startsWith("http") ? project.demo : `https://${project.demo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 px-4 py-2 text-white font-semibold hover:from-fuchsia-500 hover:to-purple-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all duration-300 shadow-md"
                  >
                    <CgWebsite /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;