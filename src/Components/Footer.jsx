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
    <footer className="bg-black text-white py-16 px-4">
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
          <div className="text-xl sm:text-2xl font-semibold">
            Get Daily Updates on Science and Technology
          </div>
          <Link
            className="hover:text-violet-500 hover:cursor-pointer text-lg"
            to="blogs"
            smooth={true}
            duration={500}
          >
            AdiBlogs
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="text-base sm:text-lg md:text-2xl leading-relaxed">
          <h4>
            Made with <FaHeart className="inline text-red-600" /> by Aditya
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            © 2025 Personal Website | Powered by Self-Learning
          </p>
        </motion.div>


        <motion.ul variants={itemVariants} className="flex flex-wrap justify-between items-end gap-6 text-2xl sm:text-3xl">
          {/* Social Icons List */}
          <li><a href="https://www.instagram.com/aditya._.verma19/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram className="text-pink-500 hover:scale-110 transition" /></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100054161326962" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook className="text-[#4267B2] hover:scale-110 transition" /></a></li>
          <li><a href="https://x.com/AdityaV38316406" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter className="text-[#1DA1F2] hover:scale-110 transition" /></a></li>
          <li><a href="https://github.com/AdityaVerma19" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="text-white hover:scale-110 transition" /></a></li>
          <li><a href="https://www.youtube.com/@Aditya_Verma19" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube className="text-red-600 hover:scale-110 transition" /></a></li>
          <li><a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer" aria-label="Telegram"><FaPaperPlane className="text-cyan-700 hover:scale-110 transition" /></a></li>
          <li><a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" aria-label="Whatsapp"><FaWhatsapp className="text-green-500 hover:scale-110 transition" /></a></li>
        </motion.ul>
      </motion.div>
    </footer>
  );
};

export default Footer;