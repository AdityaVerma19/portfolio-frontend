import React from "react";
import { motion } from "framer-motion";
import myPic from "../assets/aaditya2.jpeg";
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
      className="px-6 py-16 min-h-fit bg-gradient-to-t from-white via-green-200 to-green-700"
    >
      <p className="text-center font-semibold text-gray-600">
        Get To Know More
      </p>
      <h1 className="text-center text-3xl font-bold mb-12">About Me</h1>

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
          <motion.div className="group relative rounded-full p-1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_35px_5px_rgba(79,70,229,0.7)]">
            <img
              src={myPic}
              alt="Aaditya Verma's profile picture"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
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
              className="group relative h-36 w-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 p-4 shadow-sm bg-gray-200"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center justify-center">
                <FaBriefcase className="mb-2 h-8 w-8 text-indigo-600" />
                <h3 className="font-semibold">Experience</h3>
              </div>
              <div className="absolute inset-0 flex transform flex-col items-center justify-center bg-indigo-600 p-4 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                <h4 className="mb-1 font-bold">2+ Years</h4>
                <p className="text-sm">
                  Building responsive and dynamic user interfaces.
                </p>
              </div>
            </motion.div>

            <motion.div reduceMotion="never"
              initial="hidden"
              whileInView="visible"
              className="group relative h-36 w-full cursor-pointer  rounded-xl border border-gray-300 p-4 shadow-sm bg-gray-200 overflow-hidden"
              variants={cardVariants}
            > 
              <motion.div className="flex flex-col items-center justify-center">
                <FaTrophy className="mb-2 h-8 w-8 text-amber-500" />
                <h3 className="font-semibold">Achievements</h3>
              </motion.div>
              <motion.div className="absolute inset-0 flex transform flex-col items-center justify-center bg-amber-500 p-4 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                <h4 className="mb-1 font-bold">Runner Up Trophy 2nd Place</h4>
                <p className="text-sm">Winner of the few Hackathons</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="group relative h-36 w-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 p-4 shadow-sm bg-gray-200"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center justify-center ">
                <FaGraduationCap className="mb-2 h-8 w-8 text-black" />
                <h3 className="font-semibold">Education</h3>
              </div>
              <div className="absolute inset-0 flex transform flex-col items-center justify-center bg-green-700 p-4 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                <h4 className="mb-1 font-bold">B.Tech - DTU</h4>
                <p className="text-sm">
                  Major in Mathematics and Computing Engineering.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-justify text-black space-y-4 font-medium text-[18px]">
            <p>
              Hi! I’m Aditya Verma, a passionate and driven Computer Science
              undergrad with a specialization in Mathematics and Computing
              Engineering from Delhi Technological University (DTU).
            </p>
            <p>
              I love building purposeful, user-centric web applications and
              solving real-world problems through clean, efficient code. Over
              the past few years, I’ve immersed myself in frontend technologies
              like React.js, Next.js, Tailwind CSS, and TypeScript, while also
              working with backend tools like Node.js, Express, and PostgreSQL.
            </p>
            <p>
              My interests lie at the intersection of web development,
              data-driven design, and ethical AI. I’ve interned as a Frontend
              Engineer and Cybersecurity Intern, gaining hands-on experience in
              building responsive UIs, integrating APIs, and ensuring secure
              digital experiences.
            </p>
            <p>
              Beyond development, I’m an active LeetCode enthusiast,
              consistently sharpening my DSA skills in C++, and exploring topics
              like Generative AI, Cloud Security, and APIs.
            </p>
            <p>
              🛠️ What I Bring to the Table: A problem-solving mindset with a
              focus on efficiency and user experience An eye for design and
              detail, backed by strong fundamentals in algorithms and systems A
              collaborative spirit, honed through teamwork during internships
              and academic projects Eagerness to learn and adapt — from new
              frameworks to emerging tech like LLMs and cyber security
            </p>
            <p>
              🚀 Currently Exploring: Building full-stack projects with Next.js
              14 and PostgreSQL Diving deeper into Generative AI, Prompt
              Engineering, and LLM APIs Contributing to open-source and refining
              my personal blog on tech and learning Whether it's designing a
              seamless UI or tackling backend logic, I’m always up for a new
              challenge that helps me grow and contribute meaningfully.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
