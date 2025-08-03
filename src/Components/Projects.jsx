import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/profilecard.jpeg';
import project2 from '../assets/todolist.jpeg';
import project3 from '../assets/chatbot.jpeg';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';


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
    description: 'A dynamic single-page application built with React. It demonstrates core state management principles, allowing users to add, delete, and track tasks with data persisted in local storage.',
    tech: ['React', 'Tailwind CSS', 'State Management'],
    github: 'https://github.com/AdityaVerma19',
    demo: 'https://aditya-to-do-list.netlify.app/',
  },
  {
    title: 'Dummy ChatBot',
    image: project3,
    description: 'A conversational UI that showcases the ability to integrate with third-party APIs. This project handles asynchronous requests to an AI service to provide intelligent, real-time responses.',
    tech: ['React', 'API Integration', 'JavaScript'],
    github: 'https://github.com/AdityaVerma19/zerocode-fe-assignment',
    demo: 'https://zerocode-fe-assignment-ctpb.vercel.app/login',
  },
];


const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const projectVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } };

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-orange-100 via-rose-50 to-white ">
      <div className="text-center mb-12">
        <p className="font-semibold text-gray-600 text-lg">Browse My Recent</p>
        <h1 className="text-4xl font-bold">Projects</h1>
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
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
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
                  <span key={tag} className="bg-slate-200 text-slate-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover for Description and Links - Slides up from the top */}
            <div className="absolute inset-0 flex transform flex-col items-center justify-center bg-indigo-700/95 p-6 text-center text-white
                           opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="mb-4 text-indigo-100">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-indigo-700 font-semibold hover:bg-slate-200"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-indigo-700 font-semibold hover:bg-slate-200"
                >
                  <CgWebsite /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;