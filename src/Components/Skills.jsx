import React from 'react';
import { motion } from 'framer-motion';

import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaPython, FaBrain, FaSlidersH
} from 'react-icons/fa';
import { 
  SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb,
  SiPytorch, SiTensorflow, SiScikitlearn, SiHuggingface, SiOllama, SiOpenai, SiLangchain
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Python', level: '90%', icon: <FaPython className="w-16 h-16 text-blue-400" /> },
      { name: 'PyTorch', level: '80%', icon: <SiPytorch className="w-16 h-16 text-orange-600" /> },
      { name: 'TensorFlow', level: '75%', icon: <SiTensorflow className="w-16 h-16 text-orange-500" /> },
      { name: 'Machine Learning', level: '85%', icon: <SiScikitlearn className="w-16 h-16 text-sky-400" /> },
      { name: 'Deep Learning & NLP', level: '80%', icon: <FaBrain className="w-16 h-16 text-pink-400" /> },
      { name: 'Generative AI & LLMs', level: '85%', icon: <SiOpenai className="w-16 h-16 text-emerald-400" /> },
      { name: 'LangChain & RAG', level: '80%', icon: <SiLangchain className="w-16 h-16 text-emerald-500" /> },
      { name: 'Hugging Face', level: '85%', icon: <SiHuggingface className="w-16 h-16 text-yellow-400" /> },
      { name: 'Ollama', level: '80%', icon: <SiOllama className="w-16 h-16 text-slate-100" /> },
      { name: 'PEFT & Fine-Tuning', level: '75%', icon: <FaSlidersH className="w-16 h-16 text-indigo-400" /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: '95%', icon: <FaHtml5 className="w-16 h-16 text-orange-500" /> },
      { name: 'CSS', level: '90%', icon: <FaCss3Alt className="w-16 h-16 text-blue-500" /> },
      { name: 'JavaScript', level: '85%', icon: <FaJsSquare className="w-16 h-16 text-yellow-400" /> },
      { name: 'React', level: '80%', icon: <FaReact className="w-16 h-16 text-sky-400" /> },
      { name: 'Next.js', level: '85%', icon: <SiNextdotjs className="w-16 h-16 text-slate-100" /> },
      { name: 'Tailwind CSS', level: '85%', icon: <SiTailwindcss className="w-16 h-16 text-cyan-400" /> },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: '75%', icon: <FaNodeJs className="w-16 h-16 text-green-500" /> },
      { name: 'Express.js', level: '70%', icon: <SiExpress className="w-16 h-16 text-slate-100" /> },
      { name: 'MongoDB', level: '80%', icon: <SiMongodb className="w-16 h-16 text-green-600" /> },
      { name: 'Git', level: '85%', icon: <FaGitAlt className="w-16 h-16 text-orange-600" /> },
    ],
  },
];


const SkillCircle = ({ skill }) => {
  return (
    <motion.div
      className="group relative flex items-center justify-center w-36 h-36
                 bg-slate-950/75 rounded-full border-2 border-slate-800/80 shadow-lg cursor-pointer
                 transition-all duration-300 ease-in-out
                 hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:border-emerald-500/50"
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
      }}
    >
      <div className="absolute transition-opacity duration-300 group-hover:opacity-0">
        {skill.icon}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-4xl font-bold text-emerald-400 font-mono">{skill.level}</span>
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-transparent relative z-10">
      <div className="text-center mb-16">
        <p className="font-semibold text-emerald-400 uppercase tracking-widest text-xs">Explore My</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">
            Technical Skills
          </span>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="w-full glass-card p-8 rounded-2xl border border-slate-800/80 shadow-2xl relative overflow-hidden glow-card-emerald transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-emerald-300 font-mono">{category.title}</h2>
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