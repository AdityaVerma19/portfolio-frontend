import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaTimes } from 'react-icons/fa';


import certificate1 from '../assets/certificate1.png';
import certificate4 from '../assets/certificate4.png';
import certificate3 from '../assets/certificate3.png';
import certificate2 from '../assets/certificate2.png';
import certificate5 from '../assets/certificate5.png';

const experiences = [
    {
        role: 'Internshala Student Partner',
        company: 'Internshala',
        date: 'July 2025 - Present',
        location:'Gurugram, Haryana - Hybrid',
        description: [
          'Connecting students and people willing to learn new skills and encouraging them to explore opportunities at Internshala Platform. Thousands of Companies and startups are seeking for you here'
        ],
        certificate: certificate5,
      },
  {
    role: 'Software Development Engineering Intern',
    company: 'Bluestock Fintech Limited',
    date: 'July 2025 - August 2025',
    location:'Pune, Maharashtra - Remote',
    description: [
      'Developed a React.js company IPO website from scratch in 25 days with 8+ reusable, responsive pages, following best practices and thorough documentation with daily project report submission.',
      'Implemented Upcoming IPO featured with 10+ API integrations, for an IPO Dashboard platform, ensuring secure and reliable user-experience via ,Dark Theme toggle button, SignIn , SignUp features authenticated with their Google accounts.','Integrated multiple complex features in 2 months using Vue.js, including multi-API calls, UI updates, and animations, while independently fixing bugs and collaborating with backend and design teams'
    ],
    certificate: certificate1,
  },
  {
    role: 'ISRO One Week Workshop',
    company: 'Indian Space Research Organisation',
    date: 'Nov 2024',
    location:'Remote',
    description: [
      'Completed the intensive "Advanced Drone Technology (Air Taxi)" workshop.',
    'Conducted by the India Space Lab in collaboration with ISRO.',
    'Gained hands-on insights into the future of unmanned aerial vehicle (UAV) systems and urban air mobility.',
  
    ],
    certificate: certificate3,
  },
  {
    role: 'AI/ML Engineer Intern',
    company: 'Stirring Minds Pvt. Ltd.',
    date: 'Oct 2025 - Nov 2025',
    location:'Delhi',
    description: [
      'Built a RAG-based chatbot using transformer LLMs with embeddings and vector search, applying prompt engineering to improve response accuracy and reduce hallucinations' 
,'Developed FastAPI endpoints, integrated with frontend, optimized latency, and deployed using Docker on cloud',
    ],
    certificate:"NA",
  },
  {
    role: 'AI/ML Engineer Intern',
    company: 'Novel Patterns Private Limited',
    date: 'Mar 2025 - Present',
    location:'Delhi',
    description: [
      'Building an optimized end-to-end Intelligent Document Processing system to classify, extract and align data from complex, multi-page financial documents, moving from traditional OCR methods to a more reliable vision-language and LLM stack. Pipeline Architecture: A Two-stage extraction system. First, used LightOnOCR-2-1B (VLM) to convert raw, messy PDFs into clean markdown text that preserves the visual layout. Second, passed this markdown into a Qwen-35B-A3B MoE (Mixture-of-Experts) model to generate highly accurate, structured hierarchical JSON files with >95% accuracy.',
' Model Optimization & Quantization: Handled inference latency and memory limits by compressing the 35B model using AutoRound quantization. This allowed the model to fit into our specific hardware limits without losing extraction quality.',
' Speed & Latency Optimization: Leveraged the fast processing speeds of the MoE model architecture and researched advanced hosting tools—such as vLLM / SGLang Prefix Caching for repetitive prompt schemas and to keep system response times low.',
' Semantic Normalization (Current Focus): Currently building Phase 2 of the project: creating a hybrid search layer (combining Vector Embeddings + BM25 keyword search) to automatically map varied text labels from documents onto fixed, standardized corporate financial templates',
    ],
    certificate:"NA",
  }
];


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring' } },
};



const CertificateModal = ({ certificate, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-slate-900 p-3 rounded-lg border border-slate-800 shadow-2xl"
        variants={modalContentVariants}
        onClick={(e) => e.stopPropagation()} 
      >
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 shadow-lg">
          <FaTimes size={16} />
        </button>
        <img src={certificate} alt="Completion Certificate" className="max-w-full max-h-[80vh] object-contain rounded" />
      </motion.div>
    </motion.div>
  );
};



const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="experience" className="py-20 px-4 bg-transparent relative z-10">
      <div className="text-center mb-16">
        <p className="font-semibold text-cyan-400 uppercase tracking-widest text-xs">My Professional Journey</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
            Experience
          </span>
        </h1>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="glass-card border border-slate-800/80 rounded-2xl shadow-xl p-6 flex flex-col glow-card-cyan transition-all duration-300 relative overflow-hidden"
            variants={tileVariants}
          >
            <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
            <p className="font-semibold text-lg text-slate-200 mt-1">{exp.company}</p>

            <div className='flex justify-between mt-1 mb-4 border-b border-slate-800/40 pb-2'>
              <p className="text-xs text-slate-400">{exp.date}</p>
              <p className="text-xs text-slate-400">{exp.location}</p>
            </div>
          
            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm flex-grow mb-6 leading-relaxed">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedCertificate(exp.certificate)}
              className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 shadow-md"
            >
              <FaCertificate />
              View Certificate
            </button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;