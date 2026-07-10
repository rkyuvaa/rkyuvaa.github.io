import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const links = ['Products','Modules','Industries','Pricing','About','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const logoColor = scrolled ? '#0B5D4B' : 'white';
  const xColor = '#2E8B57';

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-[0_2px_40px_rgba(0,0,0,0.07)] border-b border-slate-100/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="35" cy="50" r="30" fill="none" stroke={logoColor} strokeWidth="7" />
              <path d="M55 28 L83 72 M83 28 L55 72" stroke={xColor} strokeWidth="11" strokeLinecap="round" />
            </svg>
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#1E293B]' : 'text-white'}`}
            style={{ fontFamily: 'Manrope, sans-serif' }}>
            Orb<span style={{ color: '#2E8B57' }}>X</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-[#0B5D4B] ${scrolled ? 'text-slate-600' : 'text-white/85'}`}>
              {l}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact"
            className={`text-sm font-semibold px-5 py-2.5 rounded-[14px] border-2 transition-all ${
              scrolled ? 'border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B] hover:text-white' : 'border-white/60 text-white hover:bg-white/10'
            }`}>
            Book Demo
          </a>
          <a href="#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-[14px] bg-[#0B5D4B] text-white hover:bg-[#084437] transition-all shadow-lg hover:shadow-[#0B5D4B]/30 hover:-translate-y-0.5">
            Get Quotation
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 ${scrolled ? 'text-slate-700' : 'text-white'}`}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}
            className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 space-y-3 shadow-xl">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                className="block text-slate-700 font-medium py-2 hover:text-[#0B5D4B] transition-colors">{l}</a>
            ))}
            <div className="flex gap-3 pt-3 border-t border-slate-100">
              <a href="#contact" onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-[14px] border-2 border-[#0B5D4B] text-[#0B5D4B] text-sm font-semibold hover:bg-[#0B5D4B] hover:text-white transition-all">
                Book Demo
              </a>
              <a href="#contact" onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-[14px] bg-[#0B5D4B] text-white text-sm font-semibold hover:bg-[#084437] transition-all">
                Get Quotation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
