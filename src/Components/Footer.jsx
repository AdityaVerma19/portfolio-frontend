import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-scroll';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaWhatsapp,
  FaHeart,
  FaPaperPlane,
} from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="relative bg-slate-950/70 border-t border-slate-900/60 text-white py-16 px-6 backdrop-blur-md z-10 overflow-hidden">
      {/* Accent Glowing Border Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-65 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
      
      {/* main container  */}
      <motion.div
        className="max-w-screen-lg mx-auto space-y-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Each section */}
        <motion.div variants={itemVariants}>
          <div className="text-xl sm:text-2xl font-semibold mb-2">
            Get Daily Updates on Science and Technology
          </div>
          <Link
            className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 hover:cursor-pointer text-xl font-bold font-mono tracking-widest hover:brightness-125 transition-all duration-300"
            to="blogs"
            smooth={true}
            duration={500}
          >
            AdiBlogs
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="text-base sm:text-lg md:text-2xl leading-relaxed">
          <h4>
            Made with <FaHeart className="inline text-red-600 animate-pulse" /> by Aditya
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            © 2025 Personal Website | Powered by Self-Learning
          </p>
        </motion.div>


        <motion.ul variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 text-2xl sm:text-3xl">
          {/* Social Icons List */}
          <li>
            <a 
              href="https://www.instagram.com/aditya._.verma19/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 border border-slate-800 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300 group"
            >
              <FaInstagram className="text-slate-400 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300" />
            </a>
          </li>
          <li>
            <a 
              href="https://www.facebook.com/profile.php?id=100054161326962" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 group"
            >
              <FaFacebook className="text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
            </a>
          </li>
          <li>
            <a 
              href="https://x.com/AdityaV38316406" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Twitter"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 border border-slate-800 hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300 group"
            >
              <FaTwitter className="text-slate-400 group-hover:text-sky-400 group-hover:scale-110 transition-all duration-300" />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/AdityaVerma19" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 border border-slate-800 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 group"
            >
              <FaGithub className="text-slate-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </a>
          </li>
          <li>
            <a 
              href="https://www.youtube.com/@Aditya_Verma19" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 border border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300 group"
            >
              <FaYoutube className="text-slate-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
            </a>
          </li>
          <li>
            <a 
              href="https://web.telegram.org/k/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Telegram"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 group"
            >
              <FaPaperPlane className="text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
            </a>
          </li>
          <li>
            <a 
              href="https://web.whatsapp.com/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Whatsapp"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 group"
            >
              <FaWhatsapp className="text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-300" />
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </footer>
  );
};

export default Footer;