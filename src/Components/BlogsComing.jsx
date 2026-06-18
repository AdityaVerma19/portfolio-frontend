import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPaperPlane, FaBookOpen, FaBrain, FaCode, FaDatabase } from 'react-icons/fa';

const BlogsComing = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1000);
  };

  const upcomingBlogs = [
    {
      title: "Optimizing Local LLM Inference",
      desc: "A deep dive into model quantization, Ollama orchestration, and benchmarking token-generation speeds on consumer hardware.",
      icon: <FaBrain className="w-6 h-6 text-fuchsia-400" />,
      tag: "LLMs"
    },
    {
      title: "Building Real-Time RAG Pipelines",
      desc: "How to combine vector databases, semantic search, and prompt engineering to build context-aware production chatbots.",
      icon: <FaDatabase className="w-6 h-6 text-emerald-400" />,
      tag: "RAG & Vector DB"
    },
    {
      title: "Parameter-Efficient Fine-Tuning (PEFT)",
      desc: "Exploring LoRA, QLoRA, and adapter-based training methodologies for tailoring small models to niche tasks.",
      icon: <FaCode className="w-6 h-6 text-sky-400" />,
      tag: "Deep Learning"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-current flex flex-col justify-between px-6 py-12 relative overflow-hidden select-none">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-fuchsia-500/10 blur-[130px]" />
      </div>

      {/* Header / Navbar style */}
      <header className="max-w-7xl mx-auto w-full z-10 flex justify-between items-center pb-8 border-b border-slate-900/60">
        <a 
          href="#"
          className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-indigo-400 transition-colors duration-300"
        >
          <FaArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
        </a>
        <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">
          Aditya Verma
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center justify-center text-center my-auto py-10">
        {/* Glowing Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <FaBookOpen className="animate-pulse" /> Tech Blog
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Blogs are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 font-mono">Coming</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mb-12 font-medium"
        >
          I am currently drafting technical write-ups, engineering logs, and detailed tutorials 
          covering generative AI architectures, fine-tuning techniques, and modern software design.
        </motion.p>

        {/* Newsletter subscription form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md bg-slate-900/50 border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md glow-card-indigo mb-16"
        >
          <h3 className="text-lg font-bold mb-2 text-slate-100">Get notified when they drop</h3>
          <p className="text-xs text-slate-500 mb-6 font-semibold">No spam, just pure technical deep dives.</p>
          
          {subscribed ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2"
            >
              🎉 You've been subscribed successfully!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Subscribing...' : (
                  <>
                    Subscribe <FaPaperPlane className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Upcoming topics */}
        <div className="w-full">
          <h2 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-8 text-center">Sneak peek of what's cooking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {upcomingBlogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 shadow-lg glow-card-indigo hover:border-slate-700/60 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    {blog.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-slate-800/60 px-2.5 py-1 rounded-full text-indigo-400 uppercase tracking-wider">
                    {blog.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2 font-mono">{blog.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{blog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full z-10 text-center pt-8 border-t border-slate-900/60 text-xs text-slate-600 font-semibold uppercase tracking-wider">
        © 2026 Aditya Verma | All Rights Reserved
      </footer>
    </div>
  );
};

export default BlogsComing;
