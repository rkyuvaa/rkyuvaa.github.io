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
          
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #000d00; }
          ::-webkit-scrollbar-thumb { background: #003300; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #00cc00; }
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
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/40 transition-all"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.564 5.823 0 10.564 4.745 10.564 10.568 0 5.824-4.74 10.564-10.564 10.564z" /></svg>
      </motion.a>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#001a00]/95 backdrop-blur-xl border-b border-[#00cc00]/20 shadow-2xl py-2' : 'bg-transparent py-4'}`}
      >
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
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
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium font-body">
            {['Features', 'Services', 'About', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-[#00cc00] transition-colors relative group uppercase tracking-widest text-xs font-bold">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00cc00] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo" 
              className="bg-[#00cc00] text-white px-7 py-3 rounded-xl hover:bg-[#00b300] transition-colors shadow-lg shadow-[#00cc00]/20 font-bold uppercase tracking-wider text-xs"
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
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-[#00cc00]/10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00cc00]/20 via-[#012101]/40 to-[#004d00]/20 blur-[150px] rounded-full opacity-30"></div>
        </motion.div>
        
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#001a00]/80 backdrop-blur border border-[#00cc00]/20 text-[#00cc00] text-sm font-bold font-accent tracking-widest uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00cc00] shadow-[0_0_12px_#00cc00] animate-pulse"></span>
                Next-Gen Retail Software
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-6xl lg:text-[5.5rem] font-black font-heading text-white leading-[1] tracking-tighter">
                Custom Retail <span className="text-[#00cc00]">ERP & POS</span> Solutions
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-xl font-body font-medium">
                The ultimate solution for <span className="text-white">billing</span>, <span className="text-white">inventory</span>, and <span className="text-white">offline sync</span>. Built for growing businesses that need speed and reliability.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,204,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#demo" 
                  className="bg-[#00cc00] text-white px-10 py-5 rounded-2xl font-black transition-all shadow-[0_0_20px_rgba(0,204,0,0.2)] font-heading text-lg tracking-wide uppercase"
                >
                  Get Free Demo
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,30,0,1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919787317484"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#001a00] text-white border-2 border-[#00cc00]/30 px-10 py-5 rounded-2xl font-black transition-all backdrop-blur-sm font-heading text-lg tracking-wide flex items-center gap-3 uppercase"
                >
                  Chat on WhatsApp
                </motion.a>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-8 border-t border-[#00cc00]/10 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#012101] bg-slate-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-[#00cc00] mb-1">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Trusted by 100+ Retailers</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Product Mockup Representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main Dashboard Card */}
              <div className="relative z-10 bg-[#001a00]/80 backdrop-blur-3xl border border-[#00cc00]/20 rounded-[2.5rem] p-4 lg:p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform rotate-2">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#00cc00]/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">ORBX_ERP_v2.0</div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2 space-y-6">
                    <div className="h-40 bg-[#000d00] rounded-2xl border border-[#00cc00]/10 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="h-4 w-32 bg-[#00cc00]/20 rounded"></div>
                        <div className="h-4 w-12 bg-white/5 rounded"></div>
                      </div>
                      <div className="flex items-end gap-2 h-16">
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                          <div key={i} className="flex-1 bg-[#00cc00]/40 rounded-t-lg transition-all hover:bg-[#00cc00]" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="h-32 bg-[#000d00] rounded-2xl border border-[#00cc00]/10 p-6 flex flex-col justify-center">
                        <div className="text-[#00cc00] font-black text-2xl mb-1">₹ 4.2L</div>
                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Monthly Revenue</div>
                      </div>
                      <div className="h-32 bg-[#000d00] rounded-2xl border border-[#00cc00]/10 p-6 flex flex-col justify-center">
                        <div className="text-white font-black text-2xl mb-1">1,248</div>
                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Active Stock</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-full bg-[#000d00] rounded-2xl border border-[#00cc00]/10 p-6">
                      <div className="h-4 w-full bg-[#00cc00]/20 rounded mb-6"></div>
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="h-3 w-full bg-white/5 rounded mb-4"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating POS Pill */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -left-20 z-20 bg-[#00cc00] text-white px-8 py-6 rounded-3xl shadow-2xl font-black text-xl font-heading"
              >
                POS ACTIVE
                <div className="text-[10px] opacity-70 font-bold uppercase tracking-widest mt-1">Syncing Offline...</div>
              </motion.div>

              {/* Floating Mobile Card */}
              <motion.div 
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[2rem] shadow-2xl w-48"
              >
                <div className="w-full h-80 bg-slate-900 rounded-[1.5rem] overflow-hidden border border-white/10 flex flex-col p-4">
                   <div className="w-8 h-8 rounded-lg bg-[#00cc00] mb-4"></div>
                   <div className="space-y-3">
                      <div className="h-3 w-full bg-white/20 rounded"></div>
                      <div className="h-3 w-3/4 bg-white/10 rounded"></div>
                      <div className="pt-6 grid grid-cols-2 gap-2">
                        <div className="h-10 bg-[#00cc00]/20 rounded-lg"></div>
                        <div className="h-10 bg-white/5 rounded-lg"></div>
                      </div>
                   </div>
                </div>
                <div className="text-center mt-4 text-[10px] text-white font-bold uppercase tracking-tighter">Mobile Management App</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section (NEW) */}
      <section id="showcase" className="py-32 bg-[#000a00] border-b border-[#00cc00]/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-5xl lg:text-7xl font-black font-heading text-white mb-6 uppercase tracking-tighter">See the System in Action</h2>
            <p className="text-slate-400 text-xl font-medium max-w-3xl mx-auto">High-performance interfaces designed for maximum business efficiency.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'POS Billing Screen', desc: 'Lightning-fast checkout with multi-payment support.', icon: '🛒' },
              { title: 'Inventory Dashboard', desc: 'Real-time tracking of thousands of SKUs.', icon: '📊' },
              { title: 'Mobile UI', desc: 'Manage your entire business from your pocket.', icon: '📱' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="aspect-[4/3] bg-[#001a00] border border-[#00cc00]/20 rounded-[2.5rem] overflow-hidden relative shadow-2xl transition-all group-hover:border-[#00cc00]/50 group-hover:shadow-[#00cc00]/10">
                   <div className="absolute inset-0 bg-[#00cc00]/5 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
                      <span className="text-9xl grayscale opacity-20">{item.icon}</span>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#00cc00] flex items-center justify-center text-white shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                      </div>
                   </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-black text-white mb-2 font-heading tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Credibility Section (NEW) */}
      <section className="py-32 bg-gradient-to-b from-[#000a00] to-[#012101]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="inline-block px-4 py-1 bg-[#00cc00]/10 border border-[#00cc00]/20 rounded-lg text-[#00cc00] text-xs font-bold uppercase tracking-widest mb-8">Trusted Expertise</div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 font-heading leading-[1] uppercase tracking-tighter">Built for Real <br/><span className="text-[#00cc00]">Business Needs</span></h2>
              <div className="space-y-8">
                <p className="text-xl text-slate-400 leading-relaxed max-w-xl font-body">Empowering businesses through technology with cutting-edge ERP systems, seamless mobile experiences, and dynamic web applications.</p>
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="#contact" 
                  className="inline-flex items-center gap-3 text-white font-black text-xl hover:text-[#00cc00] transition-colors font-heading uppercase tracking-widest"
                >
                  Start Your ERP Setup <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </motion.a>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
               {[
                 { num: '50+', label: 'IT / Web Projects', desc: 'Successfully delivered across multiple industries.', icon: '🚀' },
                 { num: '11+', label: 'Years Experience', desc: 'Expertise in building scalable business architectures.', icon: '⌛' },
                 { num: '100%', label: 'Uptime Focus', desc: 'Guaranteed reliability for mission-critical operations.', icon: '🛡️' },
                 { num: 'Retail', label: 'ERP Expertise', desc: 'Deep domain knowledge in POS and Inventory sync.', icon: '🏢' }
               ].map((stat, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-[#001a00] border border-[#00cc00]/10 p-10 rounded-[2rem] hover:border-[#00cc00]/40 transition-all shadow-xl group"
                 >
                   <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{stat.icon}</div>
                   <div className="text-5xl font-black text-white mb-2 font-heading">{stat.num}</div>
                   <div className="text-[#00cc00] font-black text-xs uppercase tracking-widest mb-4">{stat.label}</div>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed">{stat.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Preserved Wordings) */}
      <section id="features" className="py-32 border-b border-[#00cc00]/10 bg-[#000d00]">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto mb-24"
          >
            <h2 className="text-5xl lg:text-8xl font-black font-heading text-white mb-6 uppercase tracking-tighter">Powerful ERP Features</h2>
            <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">Highlighting key capabilities designed specifically to scale retail and small businesses.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { title: 'Billing System', desc: 'Fast, secure, and intuitive POS billing system for lightning-quick checkouts.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { title: 'Inventory Tracking', desc: 'Real-time stock management with automated low-stock alerts and reports.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { title: 'Multi-branch Support', desc: 'Manage multiple retail locations securely from a single unified dashboard.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { title: 'Offline-first Sync', desc: 'Keep selling even when the internet goes down. Auto-syncs seamlessly when online.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className="bg-[#001a00] rounded-[2.5rem] p-10 border border-[#00cc00]/10 hover:border-[#00cc00]/40 transition-all shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00cc00]/5 rounded-full group-hover:bg-[#00cc00]/20 transition-all duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-[#00cc00]/10 text-[#00cc00] flex items-center justify-center mb-8 border border-[#00cc00]/20 group-hover:bg-[#00cc00] group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={feat.icon} /></svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 font-heading tracking-tight">{feat.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Perfect For Section (NEW) */}
      <section className="py-32 bg-[#012101]">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-5xl lg:text-7xl font-black font-heading text-white mb-6 uppercase tracking-tighter">Perfect For</h2>
            <p className="text-slate-400 text-xl font-medium">Tailored solutions for every type of retail business.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Retail Shops', icon: '🏪' },
              { title: 'Supermarkets', icon: '🛒' },
              { title: 'Small Businesses', icon: '🏬' },
              { title: 'Multi-branch Stores', icon: '🌍' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#001a00]/60 backdrop-blur border border-[#00cc00]/20 p-10 rounded-[2.5rem] text-center group transition-all"
              >
                <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:rotate-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white font-heading tracking-tight uppercase">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section (Preserved Wordings) */}
      <section id="services" className="py-32 border-b border-[#00cc00]/10 bg-[#000d00]">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-4 text-[#00cc00] font-black tracking-[0.2em] uppercase text-xs font-accent">What I Do</div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-24 font-heading leading-[0.9] uppercase tracking-tighter">Development & digital<br />innovation for modern business</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-32">
            {[
              { title: 'Retail ERP Development', desc: 'Custom-tailored ERP solutions engineered specifically for retail environments to streamline operations and accounting.', path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { title: 'POS Systems', desc: 'Lightning-fast Point of Sale systems that are intuitive to use, reducing checkout times and training costs.', path: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Inventory Management', desc: 'Precise tracking algorithms that prevent stockouts and overstocking across all your warehouses and branches.', path: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { title: 'Offline Sync Systems', desc: 'Robust architecture ensuring zero data loss during internet outages with seamless background synchronization.', path: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-[#001a00] p-16 rounded-[3rem] border border-[#00cc00]/10 relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:text-[#00cc00] transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-125">
                   <svg className="w-80 h-80 text-[#00cc00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={srv.path} /></svg>
                </div>
                <h3 className="text-4xl font-black text-white mb-8 relative z-10 font-heading uppercase tracking-tighter">{srv.title}</h3>
                <p className="text-slate-400 text-xl relative z-10 leading-relaxed font-body font-medium">{srv.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="p-12 rounded-[2.5rem] bg-[#001a00] border border-[#00cc00]/10 hover:bg-[#002200] transition-all duration-300 hover:-translate-y-2 group shadow-xl"
              >
                <div className="flex justify-between items-start mb-10">
                  <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="text-5xl filter grayscale group-hover:grayscale-0 transition-all drop-shadow-lg inline-block cursor-default origin-bottom-left">{svc.icon}</motion.span>
                  <span className="text-[#00cc00]/40 font-mono text-lg font-black">{svc.num}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-6 font-heading tracking-tight uppercase">{svc.title}</h3>
                <p className="text-slate-400 leading-relaxed font-body font-medium">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Preserved Wordings) */}
      <section id="about" className="py-32 border-b border-[#00cc00]/10 bg-[#012101]">
        <div className="max-w-[1600px] mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 font-heading leading-[0.9] uppercase tracking-tighter">Why Choose Me</h2>
              <p className="text-slate-400 text-2xl mb-16 font-body font-medium leading-relaxed">Delivering enterprise-grade solutions tailored for the specific needs of retail and small businesses.</p>
              
              <div className="space-y-12">
                {[
                  { title: 'Custom-built solutions', desc: 'No generic templates. Everything is built from the ground up to match your exact workflow.' },
                  { title: 'Fast performance', desc: 'Optimized code architectures ensuring blazing fast load times and rapid POS transactions.' },
                  { title: 'Offline support', desc: 'Never stop selling. Our offline-first approach keeps you operational 24/7 without internet.' },
                  { title: 'Scalable architecture', desc: 'Built to grow with you. Open a new branch tomorrow with zero software friction.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 15 }}
                    className="flex gap-8 group cursor-default"
                  >
                    <div className="mt-1 w-14 h-14 rounded-full bg-[#001a00] text-[#00cc00] flex items-center justify-center flex-shrink-0 border-2 border-[#00cc00]/20 group-hover:border-[#00cc00] group-hover:bg-[#00cc00] group-hover:text-white transition-all duration-300 shadow-2xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-2xl mb-3 font-heading uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed font-body font-medium">{item.desc}</p>
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
              className="bg-[#001a00]/80 backdrop-blur-xl rounded-[3.5rem] p-16 border border-[#00cc00]/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00cc00]/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
              
              <div className="mb-8 text-[#00cc00] font-black tracking-[0.3em] uppercase text-xs font-accent relative z-10">Who I Am</div>
              <h3 className="text-4xl font-black text-white mb-10 font-heading relative z-10 leading-tight uppercase">Bridging development with infrastructure</h3>
              <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-body font-medium relative z-10">
                <p>Welcome to <strong className="text-white">OrbX</strong>, a premier technology firm specializing in enterprise digital transformation. We bridge the gap between complex infrastructure and seamless user experiences.</p>
                <p>Our core focus revolves around three primary pillars: comprehensive <strong className="text-white">ERP Implementations</strong>, responsive <strong className="text-white">Mobile Applications</strong>, and scalable <strong className="text-white">Web Platforms</strong>.</p>
                <p>By leveraging cutting-edge technologies, we simplify business operations and empower organizations to accelerate their growth and achieve their strategic objectives.</p>
              </div>

              <div className="mt-16 space-y-8 relative z-10">
                {[
                  { name: 'Web Application Development', w: '90%' },
                  { name: 'Website Creation & Design', w: '88%' },
                  { name: 'ERP Implementation (Odoo)', w: '95%' },
                  { name: 'IT Infrastructure & Network', w: '92%' },
                  { name: 'AI Integration & Automation', w: '85%' }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] mb-4">
                      <span className="text-white font-black uppercase tracking-[0.2em] font-accent">{skill.name}</span>
                      <span className="text-[#00cc00] font-black">{skill.w}</span>
                    </div>
                    <div className="h-3 bg-[#000d00] rounded-full overflow-hidden border border-[#00cc00]/10 p-[2px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                        className="h-full bg-[#00cc00] rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/30 w-1/2 rounded-full blur-sm"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section (Preserved Wordings) */}
      <section id="projects" className="py-32 border-b border-[#00cc00]/10 bg-[#000a00]">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-24"
          >
            <div className="mb-4 text-[#00cc00] font-black tracking-[0.2em] uppercase text-xs font-accent">Selected Work</div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 font-heading leading-[0.9] uppercase tracking-tighter">Solutions that drive results</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-40">
            {[
              { title: 'Dynamic Web Application', desc: 'A responsive, fast-loading web application designed for comprehensive operational tracking and MIS reporting.', tags: ['Web App', 'JavaScript'] },
              { title: 'Corporate Website Creation', desc: 'Modern corporate website built from scratch with a focus on seamless UI/UX, fast load times, and SEO optimization.', tags: ['Website', 'Design'] },
              { title: 'ERP Implementation', desc: 'Spearheaded full-scale Odoo ERP implementations, driving cross-departmental efficiency and custom integrations.', tags: ['Odoo', 'ERP'] },
              { title: 'IT Infrastructure Ecosystem', desc: 'Configured complex IT networks, IoT integrations, and managed Microsoft 365 environments.', tags: ['Network', 'Cloud'] },
            ].map((proj, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -20 }}
                className="bg-[#001a00] border-2 border-[#00cc00]/10 rounded-[3rem] p-10 transition-all duration-500 hover:shadow-3xl hover:shadow-[#00cc00]/10 hover:border-[#00cc00]/50 flex flex-col h-full group"
              >
                <div className="aspect-square bg-[#000a00] rounded-[2rem] mb-10 overflow-hidden flex items-center justify-center border border-[#00cc00]/10 group-hover:scale-95 transition-transform">
                  <svg className="w-16 h-16 text-[#00cc00]/10 group-hover:text-[#00cc00] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-6 font-heading tracking-tight uppercase leading-tight">{proj.title}</h3>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-body font-medium flex-grow">{proj.desc}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-4 py-2 bg-[#000d00] text-[#00cc00] text-[10px] font-black rounded-xl border border-[#00cc00]/20 uppercase tracking-[0.2em]">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <div id="experience">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mb-4 text-[#00cc00] font-black tracking-[0.2em] uppercase text-xs font-accent">Journey</div>
              <h2 className="text-5xl md:text-8xl font-black text-white mb-24 font-heading leading-[0.9] uppercase tracking-tighter">11+ years of building<br />& managing tech</h2>
            </motion.div>
            
            <div className="space-y-0 pl-6 md:pl-16 border-l-4 border-[#00cc00]/10 ml-6 md:ml-0">
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
                  className="relative pl-16 md:pl-24 pb-24 last:pb-0"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + (i * 0.15) }}
                    className="absolute w-8 h-8 bg-[#00cc00] rounded-full -left-[18px] top-1.5 border-8 border-[#012101] shadow-[0_0_30px_rgba(0,204,0,0.8)]"
                  ></motion.div>
                  <div className="inline-block px-5 py-2 bg-[#001a00] rounded-xl text-[#00cc00] font-mono text-sm mb-6 border-2 border-[#00cc00]/20 font-black tracking-widest">{item.year}</div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4 font-heading uppercase tracking-tighter leading-tight">{item.title}</h3>
                  <div className="text-slate-300 font-black text-xl mb-6 font-body uppercase tracking-widest">{item.org}</div>
                  <p className="text-slate-400 max-w-4xl leading-relaxed text-xl font-body font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden bg-[#012101]">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="mb-4 text-[#00cc00] font-black tracking-[0.2em] uppercase text-xs font-accent">Get In Touch</div>
            <h2 className="text-6xl md:text-[6rem] font-black text-white mb-10 leading-[0.9] font-heading uppercase tracking-tighter">Let's build <br/>greatness</h2>
            <p className="text-slate-300 text-2xl mb-16 max-w-lg leading-relaxed font-body font-medium">Whether you need a cutting-edge web platform, or comprehensive ERP support — we are ready to help.</p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-black text-white mb-4 font-heading uppercase tracking-tight">Ramesh Kumar</h3>
                <motion.a 
                  whileHover={{ x: 15 }}
                  href="mailto:rkyuvaa@hotmail.com" 
                  className="inline-block text-[#00cc00] hover:text-[#00b300] text-2xl font-black font-body transition-all border-b-4 border-[#00cc00]/20 hover:border-[#00cc00]"
                >
                  rkyuvaa@hotmail.com
                </motion.a>
              </div>
              <div className="flex flex-wrap gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  href="tel:+919787317484" 
                  className="flex items-center gap-4 px-10 py-6 bg-[#001a00] rounded-3xl text-white hover:bg-[#002200] transition-all border-2 border-[#00cc00]/20 font-black font-heading text-xl shadow-2xl uppercase tracking-widest"
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
            className="bg-[#001a00]/90 backdrop-blur-2xl border-2 border-[#00cc00]/20 rounded-[4rem] p-16 lg:p-20 shadow-[0_50px_150px_-30px_rgba(0,0,0,0.6)] relative"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#00cc00]/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <h3 className="text-4xl font-black text-white mb-12 font-heading uppercase tracking-tighter">Request a Demo</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.3em] font-accent">Full Name</label>
                <input type="text" className="w-full bg-[#000a00] border-2 border-[#00cc00]/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-[#00cc00] transition-all placeholder:text-slate-700 font-body text-lg font-bold" placeholder="Your Name" />
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.3em] font-accent">Phone Number</label>
                <input type="tel" className="w-full bg-[#000a00] border-2 border-[#00cc00]/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-[#00cc00] transition-all placeholder:text-slate-700 font-body text-lg font-bold" placeholder="+91 00000 00000" />
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.3em] font-accent">Message</label>
                <textarea rows="4" className="w-full bg-[#000a00] border-2 border-[#00cc00]/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-[#00cc00] transition-all placeholder:text-slate-700 resize-none font-body text-lg font-bold" placeholder="Business needs..."></textarea>
              </div>
              <div className="pt-6">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,204,0,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-[#00cc00] text-white font-black py-6 rounded-2xl transition-all shadow-xl font-heading text-xl uppercase tracking-widest"
                >
                  Start Your ERP Setup
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000d00] pt-32 pb-16 border-t border-[#00cc00]/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="mb-24">
            <h3 className="text-white font-black mb-12 tracking-[0.3em] uppercase text-xs font-heading">Core Competencies</h3>
            <div className="flex flex-wrap gap-5">
              {['IT Infrastructure', 'Web Platforms', 'Mobile Applications', 'Enterprise ERP', 'Cloud', 'Analytics', 'Architecture', 'Networking', 'Security', 'Automation'].map((skill, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.1, backgroundColor: "#00cc00", color: "#fff", borderColor: "#00cc00" }}
                  className="px-8 py-4 bg-[#001a00] text-slate-400 rounded-2xl text-xs border-2 border-[#00cc00]/10 transition-all cursor-default font-black font-accent shadow-xl uppercase tracking-widest"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-[#00cc00]/10 text-slate-600 text-xs font-black uppercase tracking-[0.3em]">
            <p>© 2026 OrbX — ERP · MOBILE · WEB</p>
            <div className="mt-8 md:mt-0 space-x-12">
              <a href="#" className="hover:text-[#00cc00] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#00cc00] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
