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
    <section id="contact" className="py-20 px-4 bg-slate-100">
      <div className="text-center mb-12">
        <p className="font-semibold text-gray-600 text-lg">Get in Touch</p>
        <h1 className="text-4xl font-bold">Contact Me</h1>
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
          className="lg:flex-1 bg-yellow-400 text-black p-8 rounded-2xl shadow-lg border-2 border-orange-600"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-6 text-black">
            Feel free to reach out via email or phone. I'm always open to discussing new projects or creative ideas.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4"><FaUser className="w-5 h-5"/><span className="font-bold">Aditya Verma</span></div>
            <div className="flex items-center gap-4"><FaPhone className="w-5 h-5" /><span>+91 9717650915</span></div>
            <div className="flex items-center gap-4"><FaEnvelope className="w-5 h-5" /><span>adityaverma1917@gmail.com</span></div>
            <div className="flex items-center gap-4"><FaMapMarkerAlt className="w-5 h-5" /><span>New Delhi, India</span></div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="lg:flex-1" variants={itemVariants}>
         
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-blue-200 shadow-lg rounded-2xl p-8 flex flex-col gap-6 h-full border-2 border-blue-900"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                     className="p-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                     placeholder="Your Name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                     className="p-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                     placeholder="Your Email" />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="message" className="font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required
                        className="p-3 border border-blue-900 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 h-full"
                        placeholder="Your Message"></textarea>
            </div>
            {/* success or error messages */}
            {status.message && (
              <p className={`text-center font-semibold ${status.success ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
            <button type="submit"
                    className="bg-indigo-700 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-300 w-fit self-center disabled:bg-indigo-400"
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
