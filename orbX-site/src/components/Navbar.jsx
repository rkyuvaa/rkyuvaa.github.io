import logoDark from '../assets/logo-orbx.png';
import logoLight from '../assets/logo-orbx-light.png';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = ['Products','Modules','Services','Industries','Pricing','About','Contact'];
const linkIds = {'Services':'expertise'};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-[0_2px_40px_rgba(0,0,0,0.07)] border-b border-slate-100/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 min-h-[88px] py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <img src={scrolled ? logoLight : logoDark} alt="OrbX Enterprise Suite" className="h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105" />
        </a>

        {/* Desktop nav with smooth hover pill animation */}
        <nav className="hidden lg:flex items-center gap-1.5" onMouseLeave={() => setHovered(null)}>
          {links.map((l, i) => {
            const targetId = linkIds[l] || l.toLowerCase();
            const isHovered = hovered === i;
            return (
              <a
                key={l}
                href={`#${targetId}`}
                onMouseEnter={() => setHovered(i)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-full duration-300 ${
                  scrolled
                    ? (isHovered ? 'text-[#023020]' : 'text-slate-700')
                    : (isHovered ? 'text-white' : 'text-white/90')
                }`}
              >
                {isHovered && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className={`absolute inset-0 rounded-full -z-10 shadow-sm ${
                      scrolled
                        ? 'bg-[#00a86b]/20 border border-[#023020]/15'
                        : 'bg-white/20 backdrop-blur-md border border-white/30'
                    }`}
                  />
                )}
                <span className="relative z-10">{l}</span>
              </a>
            );
          })}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact"
            className={`text-sm font-semibold px-5 py-2.5 rounded-[14px] border-2 transition-all duration-300 hover:scale-105 ${
              scrolled ? 'border-[#023020] text-[#023020] hover:bg-[#023020] hover:text-white' : 'border-white/60 text-white hover:bg-white/10'
            }`}>
            Book Demo
          </a>
          <a href="#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-[14px] bg-[#023020] text-white hover:bg-[#011a12] transition-all duration-300 shadow-lg hover:shadow-[#023020]/30 hover:scale-105">
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
            {links.map(l => {
              const targetId = linkIds[l] || l.toLowerCase();
              return (
                <a key={l} href={`#${targetId}`} onClick={() => setOpen(false)}
                  className="block text-slate-700 font-medium py-2 hover:text-[#023020] transition-colors">{l}</a>
              );
            })}
            <div className="flex gap-3 pt-3 border-t border-slate-100">
              <a href="#contact" onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-[14px] border-2 border-[#023020] text-[#023020] text-sm font-semibold hover:bg-[#023020] hover:text-white transition-all">
                Book Demo
              </a>
              <a href="#contact" onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-[14px] bg-[#023020] text-white text-sm font-semibold hover:bg-[#011a12] transition-all">
                Get Quotation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
