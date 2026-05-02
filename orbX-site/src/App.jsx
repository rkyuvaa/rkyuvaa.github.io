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
    <div className="min-h-screen bg-gradient-to-br from-[#012101] to-[#001100] text-slate-300 font-body selection:bg-[#00cc00] selection:text-white scroll-smooth overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Quicksand:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
          .font-heading { font-family: 'Outfit', sans-serif; }
          .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
          .font-accent { font-family: 'Quicksand', sans-serif; }
          
          /* Custom Deep Green Theme */
          :root {
            --brand-green: #00cc00;
            --brand-bg: #012101;
          }
          .text-brand { color: var(--brand-green); }
          .bg-brand { background-color: var(--brand-green); }
          .border-brand { border-color: var(--brand-green); }
        `}
      </style>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919787317484"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.564 5.823 0 10.564 4.745 10.564 10.568 0 5.824-4.74 10.564-10.564 10.564z" /></svg>
      </motion.a>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#003300]/90 backdrop-blur-xl border-b border-[#00cc00]/30 shadow-2xl py-2' : 'bg-transparent py-4'}`}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 rounded-xl bg-[#00cc00] flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg shadow-[#00cc00]/20"
            >
              X
            </motion.div>
            <span className="text-2xl font-heading font-bold text-white tracking-tight group-hover:tracking-widest transition-all duration-300">
              Orb<span className="text-[#00cc00]">X</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium font-body">
            {['Features', 'Services', 'About', 'Projects', 'Experience'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#00cc00] transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00cc00] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="hover:text-[#00cc00] transition-colors mr-2">Contact</a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo" 
              className="bg-[#00cc00] text-white px-6 py-2.5 rounded-lg hover:bg-[#00b300] transition-colors shadow-lg shadow-[#00cc00]/20 font-bold"
            >
              Get Free Demo
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
      <section id="hero" className="relative pt-20 pb-8 lg:pt-24 lg:pb-16 overflow-hidden border-b border-[#00cc00]/10">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00cc00]/20 via-[#012101]/40 to-[#004d00]/20 blur-[120px] rounded-full opacity-40"></div>
        </motion.div>
        
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#001a00]/80 backdrop-blur border border-[#00cc00]/20 text-[#00cc00] text-sm font-medium font-accent tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00cc00] shadow-[0_0_10px_#00cc00] animate-pulse"></span>
                Innovation & Excellence
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-8xl font-bold font-heading text-white leading-[1.1] tracking-tight">
                Custom Retail <span className="text-[#00cc00]">ERP & POS</span> Solutions for Growing Businesses
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
                The ultimate solution for <span className="text-white">billing</span>, <span className="text-white">inventory</span>, and <span className="text-white">offline sync</span>. 
                <span className="block mt-4 font-medium text-slate-300 border-l-2 border-[#00cc00] pl-5 italic relative">
                  EMPOWERING BUSINESSES THROUGH TECHNOLOGY with cutting-edge ERP systems, seamless mobile experiences, and dynamic web applications.
                </span>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,204,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#demo" 
                  className="bg-[#00cc00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,204,0,0.2)] font-body"
                >
                  Get Free Demo
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,30,0,1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919787317484"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#001a00] text-white border border-[#00cc00]/30 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
                >
                  Chat on WhatsApp
                </motion.a>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-[#00cc00]/10">
                {[
                  { num: '11+', label: 'Years Exp.' },
                  { num: '50+', label: 'Web/IT Projects' },
                  { num: '3', label: 'Core Domains' },
                  { num: '100%', label: 'Uptime Focus' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl lg:text-4xl font-bold font-heading text-white mb-2 tracking-tight">
                      {stat.num.replace(/[^0-9]/g, '')}
                      <span className="text-[#00cc00]">{stat.num.replace(/[0-9]/g, '')}</span>
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-accent font-semibold">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Floating Expertise Card (RESTORED) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative perspective-1000"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-[#00cc00]/20 to-[#012101]/10 rounded-3xl blur-3xl transform -rotate-3"
              ></motion.div>
              <div className="bg-[#001a00]/60 backdrop-blur-2xl border border-[#00cc00]/20 rounded-3xl p-10 relative shadow-2xl">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[#00cc00]/10">
                  <div className="w-12 h-12 rounded-xl bg-[#00cc00]/20 flex items-center justify-center text-[#00cc00]">
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
                      <div className="w-14 h-14 rounded-2xl bg-[#000d00] border border-[#00cc00]/20 flex items-center justify-center text-slate-400 group-hover:text-[#00cc00] group-hover:border-[#00cc00]/50 group-hover:bg-[#00cc00]/10 transition-all duration-300">
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

      {/* Product Showcase Section (MAINTAINED) */}
      <section id="showcase" className="py-32 bg-[#000d00] border-b border-[#00cc00]/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">See the System in Action</h2>
            <p className="text-slate-400 text-lg font-accent">High-performance interfaces designed for maximum business efficiency.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'POS Billing Screen', desc: 'Fast, secure, and intuitive POS billing system.', icon: '🛒' },
              { title: 'Inventory Dashboard', desc: 'Real-time stock management with automated alerts.', icon: '📊' },
              { title: 'Mobile UI', desc: 'Manage your entire business from your pocket.', icon: '📱' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#001a00] border border-[#00cc00]/20 rounded-3xl p-8 hover:border-[#00cc00]/50 transition-all shadow-xl text-center"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-accent">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-[#012101] border-b border-[#00cc00]/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading">Built for Real Business Needs</h2>
              <p className="text-slate-400 text-xl mb-12 font-accent">Delivering enterprise-grade solutions tailored for the specific needs of retail and small businesses.</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#contact" 
                className="bg-[#00cc00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg inline-block"
              >
                Start Your ERP Setup
              </motion.a>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
               {[
                 { title: '50+ IT Projects', desc: 'Successfully delivered solutions.' },
                 { title: '11+ Years Exp.', desc: 'Deep industry knowledge.' },
                 { title: 'Retail Focused', desc: 'Tailored for shop owners.' },
                 { title: 'Offline-First', desc: 'Works without internet.' }
               ].map((item, i) => (
                 <div key={i} className="bg-[#001a00] border border-[#00cc00]/10 p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-[#00cc00] mb-2 font-heading">{item.title}</h3>
                    <p className="text-slate-400 text-sm font-accent">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 border-b border-[#00cc00]/10 bg-[#000d00]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">Powerful ERP Features</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg font-accent">Highlighting key capabilities designed specifically to scale retail and small businesses.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
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
                className="bg-[#001a00] backdrop-blur rounded-3xl p-8 border border-[#00cc00]/20 hover:border-[#00cc00]/50 transition-colors shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00cc00]/10 text-[#00cc00] flex items-center justify-center mb-8 border border-[#00cc00]/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-32 bg-[#000d00] border-b border-[#00cc00]/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 font-heading">Perfect For</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {['Retail Shops', 'Supermarkets', 'Small Businesses', 'Multi-branch Stores'].map((item, i) => (
              <div key={i} className="bg-[#001a00] border border-[#00cc00]/20 p-10 rounded-3xl hover:bg-[#00cc00]/5 transition-all">
                <h3 className="text-xl font-bold text-white font-heading">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-32 border-b border-[#00cc00]/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-4 text-[#00cc00] font-bold tracking-widest uppercase text-sm font-accent">What I Do</div>
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
                className="bg-[#001a00] p-12 rounded-[2rem] border border-[#00cc00]/10 relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:text-[#00cc00] transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-125">
                   <svg className="w-64 h-64 text-[#00cc00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={srv.path} /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 relative z-10 font-heading">{srv.title}</h3>
                <p className="text-slate-400 text-lg relative z-10 leading-relaxed font-accent">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>

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
                className="p-10 rounded-3xl bg-[#001a00] border border-[#00cc00]/10 hover:bg-[#002200] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-8">
                  <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="text-5xl filter drop-shadow-lg inline-block cursor-default origin-bottom-left">{svc.icon}</motion.span>
                  <span className="text-[#00cc00]/40 font-mono text-lg font-bold">{svc.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{svc.title}</h3>
                <p className="text-slate-400 leading-relaxed font-accent">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 border-b border-[#00cc00]/10 bg-[#000d00]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-4 text-[#00cc00] font-bold tracking-widest uppercase text-sm font-accent">Selected Work</div>
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
                className="bg-[#001a00] border border-[#00cc00]/20 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00cc00]/10 hover:border-[#00cc00]/50 flex flex-col h-full"
              >
                <div className="aspect-video bg-[#000a00] rounded-2xl mb-8 overflow-hidden flex items-center justify-center border border-[#00cc00]/10">
                  <svg className="w-12 h-12 text-[#00cc00]/20" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">{proj.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-accent flex-grow">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1.5 bg-[#000d00] text-[#00cc00] text-xs font-bold rounded-lg border border-[#00cc00]/20 uppercase tracking-wider">{tag}</span>
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
              <div className="mb-4 text-[#00cc00] font-bold tracking-widest uppercase text-sm font-accent">Journey</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 font-heading leading-tight">11+ years of building<br />& managing tech</h2>
            </motion.div>
            
            <div className="space-y-0 pl-4 md:pl-10 border-l border-[#00cc00]/20 ml-4 md:ml-0">
              {[
                { year: 'Jan 2024 — Present', title: 'Lead Systems & Web Developer', org: 'Automotive Tech Sector', desc: 'Spearheading Odoo ERP optimization, supporting IoT application development, managing Microsoft 365 environments, and ensuring operational uptime.' },
                { year: '2018 — 2023', title: 'Senior Web App & ERP Developer', org: 'Retail & Lifestyle Manufacturing', desc: 'Maintained and customized ERP solutions, delivered data analytics/MIS reports, and streamlined system upgrades for executive decision-making.' },
                { year: 'Apr 2013 — Jan 2018', title: 'ERP & Solutions Developer', org: 'Investment & Logistics Group', desc: 'Delivered ERP training, conducted sales data analysis, managed statutory compliance, and supervised tech onboarding across operations.' }
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
                    className="absolute w-5 h-5 bg-[#00cc00] rounded-full -left-[10.5px] top-1.5 border-4 border-[#000d00] shadow-[0_0_15px_rgba(0,204,0,0.8)]"
                  ></motion.div>
                  <div className="inline-block px-3 py-1 bg-[#001a00] rounded-md text-[#00cc00] font-mono text-sm mb-4 border border-[#00cc00]/30 font-bold">{item.year}</div>
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
          className="absolute inset-0 bg-gradient-to-br from-[#00cc00]/10 to-transparent blur-3xl pointer-events-none"
        ></motion.div>
        
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="mb-4 text-[#00cc00] font-bold tracking-widest uppercase text-sm font-accent">Get In Touch</div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-heading">Let's build something<br />great together</h2>
            <p className="text-slate-300 text-xl mb-16 max-w-lg leading-relaxed font-accent">Whether you need a cutting-edge web platform, or comprehensive ERP support — we are ready to help.</p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3 font-heading">Ramesh Kumar</h3>
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="mailto:rkyuvaa@hotmail.com" 
                  className="inline-block text-[#00cc00] hover:text-[#00b300] text-xl font-bold font-accent transition-colors"
                >
                  rkyuvaa@hotmail.com
                </motion.a>
              </div>
              <div className="flex flex-wrap gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  href="tel:+919787317484" 
                  className="flex items-center gap-3 px-8 py-4 bg-[#001a00] rounded-2xl text-white hover:bg-[#002200] transition-colors border border-[#00cc00]/30 font-bold font-heading text-lg shadow-xl"
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
            className="bg-[#001a00]/80 backdrop-blur-xl border border-[#00cc00]/20 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00cc00]/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold text-white mb-10 font-heading">Request a Demo</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00cc00] focus:ring-1 focus:ring-[#00cc00] transition-all placeholder:text-slate-600 font-accent text-lg" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Phone Number</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00cc00] focus:ring-1 focus:ring-[#00cc00] transition-all placeholder:text-slate-600 font-accent text-lg" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00cc00] focus:ring-1 focus:ring-[#00cc00] transition-all placeholder:text-slate-600 resize-none font-accent text-lg" placeholder="Tell us about your business needs..."></textarea>
              </div>
              <div className="pt-6">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,204,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-[#00cc00] text-white font-bold py-5 rounded-xl transition-all shadow-lg font-heading text-lg"
                >
                  Start Your ERP Setup
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000d00] pt-20 pb-10 border-t border-[#00cc00]/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20">
          <div className="mb-16">
            <h3 className="text-white font-bold mb-8 tracking-widest uppercase text-sm font-heading">Core Competencies</h3>
            <div className="flex flex-wrap gap-4">
              {['IT Infrastructure', 'Web Platforms', 'Mobile Applications', 'Enterprise ERP Solutions', 'Cloud Infrastructure', 'Data Analytics', 'Enterprise Architecture', 'Networking', 'Cloud Security', 'AI Automation'].map((skill, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ y: -5, borderColor: "rgba(0,204,0,0.5)", color: "#00cc00" }}
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
              <a href="#" className="hover:text-[#00cc00] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00cc00] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
