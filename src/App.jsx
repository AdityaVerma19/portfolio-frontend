import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Chatbot from './components/Chatbot';
import Experience from "./Components/Experience";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Chatbot/>
       <Hero />
      <About />
      <Skills />
      <Projects />
    <Experience/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;

// 1. Navbar.jsx
// Combines desktop and mobile nav with toggle logic

// 2. Profile.jsx
// Contains the profile picture, intro text, buttons, and social links

// 3. About.jsx
// Contains the about section including experience and education boxes

// 4. Experience.jsx
// Lists frontend and backend experience with icons

// 5. Projects.jsx
// Lists 3 project cards with images and buttons for GitHub and Live Demo

// 6. Contact.jsx
// Contains email and LinkedIn contact details with icons

// 7. Footer.jsx
// Repeats nav links and adds copyright

// Each of these will be stored in ./components/ComponentName.jsx
