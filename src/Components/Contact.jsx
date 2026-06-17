import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const formRef = useRef(); 
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: false, message: '' });

   
    const serviceID = 'service_3dnfm8c';
    const templateID = 'template_8hhs2tn';
    const publicKey = 'eCy1WPScV58Gwv952';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setStatus({ success: true, message: 'Message sent successfully! I will get back to you soon.' });
          setForm({ name: "", email: "", message: "" }); 
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
      });
  };


  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } };

  return (
    <section id="contact" className="py-20 px-4 bg-transparent relative z-10">
      <div className="text-center mb-12">
        <p className="font-semibold text-rose-400 uppercase tracking-widest text-xs">Get in Touch</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
            Contact Me
          </span>
        </h1>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Contact Information Card */}
        <motion.div
          className="lg:flex-1 glass-card border border-slate-800/80 text-slate-300 p-8 rounded-2xl shadow-xl glow-card-rose transition-all duration-300 flex flex-col justify-between"
          variants={itemVariants}
        >
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            <p className="mb-6 text-slate-400 leading-relaxed">
              Feel free to reach out via email or phone. I'm always open to discussing new projects, collaborative roles, or creative ideas.
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-4 text-slate-200">
              <FaUser className="w-5 h-5 text-rose-400"/>
              <span className="font-bold">Aditya Verma</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <FaPhone className="w-5 h-5 text-rose-400" />
              <span>+91 9717650915</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <FaEnvelope className="w-5 h-5 text-rose-400" />
              <span>adityaverma1917@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <FaMapMarkerAlt className="w-5 h-5 text-rose-400" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="lg:flex-1" variants={itemVariants}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card shadow-2xl border border-slate-800/80 rounded-2xl p-8 flex flex-col gap-6 h-full glow-card-rose transition-all duration-300"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-2 text-slate-300">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                     className="p-3 bg-slate-950/75 border border-slate-800/80 rounded-lg text-white placeholder-slate-650 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all duration-300"
                     placeholder="Your Name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-2 text-slate-300">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                     className="p-3 bg-slate-950/75 border border-slate-800/80 rounded-lg text-white placeholder-slate-650 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all duration-300"
                     placeholder="Your Email" />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="message" className="font-medium mb-2 text-slate-300">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required
                        className="p-3 bg-slate-950/75 border border-slate-800/80 rounded-lg text-white placeholder-slate-650 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all duration-300 h-full"
                        placeholder="Your Message"></textarea>
            </div>
            {/* success or error messages */}
            {status.message && (
              <p className={`text-center font-semibold ${status.success ? 'text-emerald-400' : 'text-rose-400'}`}>
                {status.message}
              </p>
            )}
            <button type="submit"
                    className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 px-8 rounded-lg hover:from-rose-500 hover:to-pink-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all duration-300 shadow-md w-fit self-center disabled:from-rose-800/50 disabled:to-pink-800/50 font-bold"
                    disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
