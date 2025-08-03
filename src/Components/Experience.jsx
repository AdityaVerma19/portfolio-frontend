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
    date: 'July 2025 - Present',
    location:'Pune, Maharashtra - Remote',
    description: [
      'Developed a React.js company IPO website from scratch in 25 days with 8+ reusable, responsive pages, following best practices and thorough documentation with daily project report submission.',
      'Implemented Upcoming IPO featured with 10+ API integrations, for an IPO Dashboard platform, ensuring secure and reliable user-experience via ,Dark Theme toggle button, SignIn , SignUp features authenticated with their Google accounts.','Integrated multiple complex features in 2 months using Vue.js, including multi-API calls, UI updates, and animations, while independently fixing bugs and collaborating with backend and design teams'
    ],
    certificate: certificate1,
  },
  {
    role: 'Frontend Development Intern',
    company: 'CodSoft',
    date: 'Feb 2024 - March 2024',
    location:'New Delhi - Remote',
    description: [
      'Built IOS Calculator and learn about frontend development by many other basic projects like Landing Page Personal portfolio',
      'Performed efficient error handling, testing, and debugging, resulting in 20% reduction in application loading time.',
      'Contributed to frontend performance optimization through code writing efficiently and efficient data fetching, resulting in improvement in page load times and a smoother user experience.',
    ],
    certificate: certificate2,
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
  ,
    ],
    certificate: certificate3,
  },
  {
    role: 'Cloud Platform Job Simulation',
    company: 'Verizon Communication ',
    date: 'June 2025 - July 2025',
    location:'USA - Remote',
    description: [
      'Verizon Cloud Platform Job Simulation on Forage - July 2025 Completed a job simulation involving building a hypothetical new VPN product for Verizon’s Cloud Computing team.',
'Used command line Python to test whether Verizon’s VPN met the cloud-native traits, i.e. redundancy, resiliency and least-privilege.',
 'Researched approaches to achieve application security and communicated  insights in a PowerPoint Presentation.',
    ],
    certificate: certificate4,
  },
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
        className="relative bg-purple-500 p-2 rounded-lg shadow-2xl"
        variants={modalContentVariants}
        onClick={(e) => e.stopPropagation()} 
      >
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200">
          <FaTimes size={20} />
        </button>
        <img src={certificate} alt="Completion Certificate" className="max-w-full max-h-[80vh] object-contain" />
      </motion.div>
    </motion.div>
  );
};



const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="experience" className="py-20 px-4 bg-slate-300">
      <div className="text-center mb-16">
        <p className="font-semibold text-gray-600 text-lg">My Professional Journey</p>
        <h1 className="text-4xl font-bold">Experience</h1>
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
            className="bg-purple-300 border-2 border-purple-700 rounded-2xl shadow-lg p-6 flex flex-col"
            variants={tileVariants}
          >
            <h3 className="text-2xl font-bold text-indigo-600">{exp.role}</h3>
            <p className="font-semibold text-lg text-gray-700 mt-1">{exp.company}</p>

            <div className='flex justify-between'>
            <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
            <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
            
            </div>
          
            <ul className="list-disc list-inside space-y-2 text-gray-600 flex-grow mb-6">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedCertificate(exp.certificate)}
              className="mt-auto flex items-center justify-center gap-2 w-full py-2 px-4 bg-indigo-100 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-200 transition-colors"
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