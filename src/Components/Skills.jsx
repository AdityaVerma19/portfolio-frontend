import React from 'react';
import { motion } from 'framer-motion';

import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt
} from 'react-icons/fa';
import { 
  SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: '95%', icon: <FaHtml5 className="w-16 h-16 text-orange-500" /> },
      { name: 'CSS', level: '90%', icon: <FaCss3Alt className="w-16 h-16 text-blue-500" /> },
      { name: 'JavaScript', level: '85%', icon: <FaJsSquare className="w-16 h-16 text-yellow-400" /> },
      { name: 'React', level: '80%', icon: <FaReact className="w-16 h-16 text-sky-400" /> },
      { name: 'Next.js', level: '85%', icon: <SiNextdotjs className="w-16 h-16 text-gray-800" /> },
      { name: 'Tailwind CSS', level: '85%', icon: <SiTailwindcss className="w-16 h-16 text-cyan-400" /> },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: '75%', icon: <FaNodeJs className="w-16 h-16 text-green-500" /> },
      { name: 'Express.js', level: '70%', icon: <SiExpress className="w-16 h-16 text-gray-800" /> },
      { name: 'MongoDB', level: '80%', icon: <SiMongodb className="w-16 h-16 text-green-600" /> },
      { name: 'Git', level: '85%', icon: <FaGitAlt className="w-16 h-16 text-orange-600" /> },
    ],
  },
];


const SkillCircle = ({ skill }) => {
  return (
    <motion.div
      className="group relative flex items-center justify-center w-36 h-36
                 bg-white rounded-full border-4 border-slate-200 shadow-md cursor-pointer
                 transition-all duration-300 ease-in-out
                 hover:scale-110 hover:shadow-[0_0_25px_5px_rgba(99,102,241,0.5)] hover:border-indigo-400"
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
      }}
    >
      <div className="absolute transition-opacity duration-300 group-hover:opacity-0">
        {skill.icon}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-4xl font-bold text-slate-800">{skill.level}</span>
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-r from-teal-200 via-cyan-200 to-sky-300">
      <div className="text-center mb-16">
        <p className="font-semibold text-gray-600 text-lg">Explore My</p>
        <h1 className="text-4xl font-bold">Technical Skills</h1>
      </div>

      <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="w-full bg-gradient-to-tr from-violet-200 via-slate-100 to-violet-200 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">{category.title}</h2>
            <motion.div
              className="flex flex-wrap justify-center gap-10"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill) => (
                <SkillCircle key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;