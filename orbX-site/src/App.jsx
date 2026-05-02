import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121] text-slate-300 font-body selection:bg-emerald-500 selection:text-white scroll-smooth overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Quicksand:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
          .font-heading { font-family: 'Outfit', sans-serif; }
          .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
          .font-accent { font-family: 'Quicksand', sans-serif; }
        `}
      </style>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0B1121]/80 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg shadow-emerald-500/20"
            >
              X
            </motion.div>
            <span className="text-2xl font-heading font-bold text-white tracking-tight group-hover:tracking-widest transition-all duration-300">
              Orb<span className="text-emerald-500">X</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium font-body">
            {['Features', 'Services', 'About', 'Projects', 'Experience'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="hover:text-emerald-400 transition-colors mr-2">Contact</a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo" 
              className="bg-emerald-500 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 font-bold"
            >
              Request a Demo
            </motion.a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-800">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 blur-[120px] rounded-full opacity-40"></div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-emerald-400 text-sm font-medium font-accent tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></span>
                Innovation & Excellence
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1]">
                Orb<span className="text-emerald-500">X</span> <br/>
                <span className="text-3xl lg:text-5xl text-slate-300 block mt-4 leading-tight">The Ultimate ERP & POS Solution for Retail</span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed max-w-xl">
                A powerful, offline-first system for billing, inventory, and point-of-sale. 
                <span className="block mt-4 font-medium text-slate-300 border-l-2 border-emerald-500 pl-5 italic relative">
                  <div className="absolute -left-[2px] top-0 w-0.5 h-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                  EMPOWERING BUSINESSES THROUGH TECHNOLOGY with cutting-edge ERP systems, seamless mobile experiences, and dynamic web applications.
                </span>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#demo" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] font-body"
                >
                  View Demo
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(30,41,59,1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
                >
                  Contact Me
                </motion.a>
                
                <div className="hidden">
                  <a href="#contact" id="btn-hero-contact">Get In Touch</a>
                  <a href="#projects" id="btn-hero-work">View Work</a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-800/80">
                {[
                  { num: '11+', label: 'Years Exp.' },
                  { num: '50+', label: 'Web/IT Projects' },
                  { num: '3', label: 'Core Domains' },
                  { num: '100%', label: 'Uptime Focus' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl lg:text-4xl font-bold font-heading text-white mb-2 tracking-tight">
                      {stat.num.replace(/[^0-9]/g, '')}
                      <span className="text-emerald-500">{stat.num.replace(/[0-9]/g, '')}</span>
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-accent font-semibold">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Floating Expertise Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative perspective-1000"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-blue-500/10 rounded-3xl blur-3xl transform -rotate-3"
              ></motion.div>
              <div className="bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-10 relative shadow-2xl">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-700/50">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">Expertise</h3>
                </div>

                <div className="space-y-8">
                  {[
                    { title: 'Web Apps', desc: 'Custom Solutions', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
                    { title: 'Websites', desc: 'UI/UX & Design', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
                    { title: 'ERP Systems', desc: 'Odoo Implementation', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
                    { title: 'Infrastructure', desc: 'Cloud & Network', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-5 group cursor-default"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      </div>
                      <div>
                        <div className="text-white font-bold font-heading text-lg tracking-wide">{item.title}</div>
                        <div className="text-sm text-slate-400 font-accent">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 border-b border-slate-800 bg-[#070b14]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">Powerful ERP Features</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg font-accent">Highlighting key capabilities designed specifically to scale retail and small businesses.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: 'Billing System', desc: 'Fast, secure, and intuitive POS billing system for lightning-quick checkouts.' },
              { title: 'Inventory Tracking', desc: 'Real-time stock management with automated low-stock alerts and reports.' },
              { title: 'Multi-branch Support', desc: 'Manage multiple retail locations securely from a single unified dashboard.' },
              { title: 'Offline-first Sync', desc: 'Keep selling even when the internet goes down. Auto-syncs seamlessly when online.' }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/40 backdrop-blur rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-colors shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-32 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-4 text-emerald-400 font-bold tracking-widest uppercase text-sm font-accent">What I Do</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 font-heading leading-tight">Development & digital innovation<br />for modern business</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-24"
          >
            {[
              { title: 'Retail ERP Development', desc: 'Custom-tailored ERP solutions engineered specifically for retail environments to streamline operations and accounting.', path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { title: 'POS Systems', desc: 'Lightning-fast Point of Sale systems that are intuitive to use, reducing checkout times and training costs.', path: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Inventory Management', desc: 'Precise tracking algorithms that prevent stockouts and overstocking across all your warehouses and branches.', path: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { title: 'Offline Sync Systems', desc: 'Robust architecture ensuring zero data loss during internet outages with seamless background synchronization.', path: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-[2rem] border border-slate-700/50 relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:text-emerald-500 transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-125">
                   <svg className="w-64 h-64 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={srv.path} /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 relative z-10 font-heading">{srv.title}</h3>
                <p className="text-slate-400 text-lg relative z-10 leading-relaxed font-accent">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Original Services mapped to retain exact words */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { num: '01', title: 'ERP Solutions', desc: 'End-to-end ERP customization, deployment, and training to streamline your organizational workflow and maximize efficiency.', icon: '⚙️' },
              { num: '02', title: 'Mobile Applications', desc: 'Designing and developing intuitive, high-performance mobile applications tailored to your business needs across all platforms.', icon: '📱' },
              { num: '03', title: 'Web Platforms', desc: 'Building robust, responsive, and scalable web platforms utilizing modern frameworks to solve complex business problems.', icon: '🌐' },
              { num: '04', title: 'IT Infrastructure', desc: 'Overseeing networking, cloud systems, and operational uptime through proactive maintenance and strategic planning.', icon: '☁️' },
              { num: '05', title: 'Cloud Services', desc: 'Comprehensive cloud administration, migration strategies, and security optimization for seamless enterprise collaboration.', icon: '☁️' },
              { num: '06', title: 'AI & Automation', desc: 'Leveraging advanced AI tools for intelligent task automation, deep data analytics, and continuous workflow optimization.', icon: '🤖' },
            ].map((svc, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-10 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-8">
                  <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="text-5xl filter drop-shadow-lg inline-block cursor-default origin-bottom-left">{svc.icon}</motion.span>
                  <span className="text-emerald-500/40 font-mono text-lg font-bold">{svc.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{svc.title}</h3>
                <p className="text-slate-400 leading-relaxed font-accent">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-32 border-b border-slate-800 bg-[#070b14]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">See It In Action</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg font-accent">A sneak peek into our intuitive interfaces designed to save you time and maximize conversions.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="md:col-span-2 relative group rounded-[2rem] overflow-hidden border-2 border-slate-700/50 bg-slate-800 aspect-video md:aspect-[21/9] flex items-center justify-center hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-500">
                <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-20 h-20 mx-auto mb-6 text-emerald-500/30 group-hover:text-emerald-500 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="font-bold text-2xl text-slate-300 font-heading tracking-wide">POS Billing Screen Placeholder</span>
                </div>
              </div>
            </motion.div>
            
            {[
              { title: 'Inventory Dashboard Placeholder', path: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { title: 'Mobile UI Placeholder', path: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' }
            ].map((img, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.03 }} className="relative group rounded-[2rem] overflow-hidden border-2 border-slate-700/50 bg-slate-800 aspect-video flex items-center justify-center hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
                 <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-500">
                  <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 mx-auto mb-6 text-emerald-500/30 group-hover:text-emerald-500 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={img.path} /></svg>
                    <span className="font-bold text-xl text-slate-300 font-heading tracking-wide">{img.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading leading-tight">Why Choose Me</h2>
              <p className="text-slate-400 text-xl mb-12 font-accent">Delivering enterprise-grade solutions tailored for the specific needs of retail and small businesses.</p>
              
              <div className="space-y-10">
                {[
                  { title: 'Custom-built solutions', desc: 'No generic templates. Everything is built from the ground up to match your exact workflow.' },
                  { title: 'Fast performance', desc: 'Optimized code architectures ensuring blazing fast load times and rapid POS transactions.' },
                  { title: 'Offline support', desc: 'Never stop selling. Our offline-first approach keeps you operational 24/7 without internet.' },
                  { title: 'Scalable architecture', desc: 'Built to grow with you. Open a new branch tomorrow with zero software friction.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex gap-6 group cursor-default"
                  >
                    <div className="mt-1 w-12 h-12 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-slate-700 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2 font-heading tracking-wide">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed font-accent">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] p-12 border border-slate-700 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              
              <div className="mb-6 text-emerald-400 font-bold tracking-widest uppercase text-sm font-accent relative z-10">Who I Am</div>
              <h3 className="text-3xl font-bold text-white mb-8 font-heading relative z-10">Bridging development with infrastructure</h3>
              <div className="space-y-6 text-slate-400 leading-relaxed font-accent relative z-10">
                <p>Welcome to <strong className="text-white">OrbX</strong>, a premier technology firm specializing in enterprise digital transformation. We bridge the gap between complex infrastructure and seamless user experiences.</p>
                <p>Our core focus revolves around three primary pillars: comprehensive <strong className="text-white">ERP Implementations</strong>, responsive <strong className="text-white">Mobile Applications</strong>, and scalable <strong className="text-white">Web Platforms</strong>.</p>
                <p>By leveraging cutting-edge technologies, we simplify business operations and empower organizations to accelerate their growth and achieve their strategic objectives.</p>
              </div>

              <div className="mt-12 space-y-6 relative z-10">
                {[
                  { name: 'Web Application Development', w: '90%' },
                  { name: 'Website Creation & Design', w: '88%' },
                  { name: 'ERP Implementation (Odoo)', w: '95%' },
                  { name: 'IT Infrastructure & Network', w: '92%' },
                  { name: 'AI Integration & Automation', w: '85%' }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-3">
                      <span className="text-white font-bold uppercase tracking-widest font-accent">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-1/2 rounded-full blur-sm"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 border-b border-slate-800 bg-[#070b14]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-4 text-emerald-400 font-bold tracking-widest uppercase text-sm font-accent">Selected Work</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 font-heading leading-tight">Solutions that drive<br />results</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40"
          >
            {[
              { title: 'Dynamic Web Application', desc: 'A responsive, fast-loading web application designed for comprehensive operational tracking and MIS reporting.', tags: ['Web App', 'JavaScript', 'Backend'] },
              { title: 'Corporate Website Creation', desc: 'Modern corporate website built from scratch with a focus on seamless UI/UX, fast load times, and SEO optimization.', tags: ['Website', 'HTML/CSS', 'UI/UX'] },
              { title: 'ERP Implementation & Optimization', desc: 'Spearheaded full-scale Odoo ERP implementations, driving cross-departmental efficiency and custom integrations.', tags: ['Odoo', 'ERP', 'Database'] },
              { title: 'IT Infrastructure Ecosystem', desc: 'Configured complex IT networks, IoT integrations, and managed Microsoft 365 environments ensuring seamless collaboration.', tags: ['Networking', 'IoT', 'Cloud'] },
            ].map((proj, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 flex flex-col h-full"
              >
                <div className="aspect-video bg-slate-900 rounded-2xl mb-8 overflow-hidden flex items-center justify-center border border-slate-800">
                  <svg className="w-12 h-12 text-slate-700" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">{proj.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-accent flex-grow">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1.5 bg-slate-900 text-emerald-400 text-xs font-bold rounded-lg border border-slate-700 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <div id="experience">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mb-4 text-emerald-400 font-bold tracking-widest uppercase text-sm font-accent">Journey</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 font-heading leading-tight">11+ years of building<br />& managing tech</h2>
            </motion.div>
            
            <div className="space-y-0 pl-4 md:pl-10 border-l border-slate-700 ml-4 md:ml-0">
              {[
                { year: 'Jan 2024 — Present', title: 'Lead Systems & Web Developer', org: 'Automotive Tech Sector', desc: 'Spearheading Odoo ERP optimization, supporting IoT application development, managing Microsoft 365 environments, and ensuring operational uptime.' },
                { year: '2018 — 2023', title: 'Senior Web App & ERP Developer', org: 'Retail & Lifestyle Manufacturing', desc: 'Maintained and customized ERP solutions, delivered data analytics/MIS reports, and streamlined system upgrades for executive decision-making.' },
                { year: 'Apr 2013 — Jan 2018', title: 'ERP & Solutions Developer', org: 'Investment & Logistics Group', desc: 'Delivered ERP training, conducted sales data analysis, managed statutory compliance, and supervised tech onboarding across operations.' },
                { year: '2013', title: 'Academic Graduation', org: 'Degree in Computer Applications', desc: 'Focused on business application development, computer science foundations, and technology integration.' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className="relative pl-10 md:pl-16 pb-16 last:pb-0"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + (i * 0.15) }}
                    className="absolute w-5 h-5 bg-emerald-500 rounded-full -left-[10.5px] top-1.5 border-4 border-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                  ></motion.div>
                  <div className="inline-block px-3 py-1 bg-slate-800 rounded-md text-emerald-400 font-mono text-sm mb-4 border border-slate-700 font-bold">{item.year}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading tracking-wide">{item.title}</h3>
                  <div className="text-slate-300 font-bold text-lg mb-4 font-accent">{item.org}</div>
                  <p className="text-slate-400 max-w-3xl leading-relaxed text-lg font-accent">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl pointer-events-none"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="mb-4 text-emerald-400 font-bold tracking-widest uppercase text-sm font-accent">Get In Touch</div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-heading">Let's build something<br />great together</h2>
            <p className="text-slate-300 text-xl mb-16 max-w-lg leading-relaxed font-accent">Whether you need a cutting-edge web platform, an intuitive mobile application, or comprehensive ERP support — we are ready to help.</p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3 font-heading">Ramesh Kumar</h3>
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="mailto:rkyuvaa@hotmail.com" 
                  className="inline-block text-emerald-400 hover:text-emerald-300 text-xl font-bold font-accent transition-colors"
                >
                  rkyuvaa@hotmail.com
                </motion.a>
              </div>
              <div className="flex flex-wrap gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  href="https://linkedin.com/in/rkyuvaa" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-2xl text-white hover:bg-slate-700 transition-colors border border-slate-700 font-bold font-heading text-lg shadow-xl"
                >
                  💼 LinkedIn
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  href="tel:+919787317484" 
                  className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-2xl text-white hover:bg-slate-700 transition-colors border border-slate-700 font-bold font-heading text-lg shadow-xl"
                >
                  📞 9787317484
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold text-white mb-10 font-heading">Request a Demo</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 font-accent text-lg" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Phone Number</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 font-accent text-lg" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 resize-none font-accent text-lg" placeholder="Tell us about your business needs..."></textarea>
              </div>
              <div className="pt-6 flex flex-col sm:flex-row gap-5">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(16,185,129,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-5 rounded-xl transition-all shadow-lg font-heading text-lg"
                >
                  Submit Request
                </motion.button>
                <motion.a 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919787317484" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-5 px-10 rounded-xl transition-all shadow-lg font-heading text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.564 5.823 0 10.564 4.745 10.564 10.568 0 5.824-4.74 10.564-10.564 10.564z" /></svg>
                  WhatsApp
                </motion.a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05080f] pt-20 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-white font-bold mb-8 tracking-widest uppercase text-sm font-heading">Core Competencies</h3>
            <div className="flex flex-wrap gap-4">
              {['IT Infrastructure', 'Web Platforms', 'Mobile Applications', 'Enterprise ERP Solutions', 'Cloud Infrastructure', 'Data Analytics', 'Enterprise Architecture', 'Networking', 'Cloud Security', 'AI Automation'].map((skill, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ y: -5, borderColor: "rgba(16,185,129,0.5)", color: "#34d399" }}
                  className="px-5 py-2.5 bg-slate-900/80 text-slate-400 rounded-xl text-sm border border-slate-800 transition-colors cursor-default font-bold font-accent shadow-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-900/50 text-slate-500 text-sm font-accent font-bold">
            <p>© 2026 OrbX — ERP · MOBILE · WEB</p>
            <div className="mt-6 md:mt-0 space-x-8">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
