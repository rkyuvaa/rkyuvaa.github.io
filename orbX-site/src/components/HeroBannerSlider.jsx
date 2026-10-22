import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Banner Slides ─────────────────────────────────────────────────────────
import hotelImg       from '../assets/banners/Lodging Management Suite Hotel Dashboard.png';
import salonImg       from '../assets/banners/OrbX BeautiParlour Salon Dashboard.png';
import businessImg    from '../assets/banners/OrbX Business Suite Partnership Banner.png';
import gymImg         from '../assets/banners/OrbX Gym Management Suite.png';
import hrmsImg        from '../assets/banners/OrbX HRMS Management Suite.png';
import mfgImg         from '../assets/banners/OrbX Nexus Manufacturing Suite.png';
import ledgerImg      from '../assets/banners/OrbX Personal Ledger Tracker Banner.png';
import projectImg     from '../assets/banners/OrbX Project Management Suite Banner.png';
import restaurantImg  from '../assets/banners/OrbX Restaurant Management Suite.png';
import retailImg      from '../assets/banners/OrbX Retail and Inventory Suite Banner.png';
import boutiqueImg    from '../assets/banners/OrbX Sapphire Boutique Suite Dashboard.png';
import smeImg         from '../assets/banners/OrbX SME Management Suite.png';

const SLIDES = [
  { src: restaurantImg,  label: 'Restaurant Management',   color: '#e05a2b' },
  { src: hrmsImg,        label: 'HRMS & Attendance',        color: '#0369a1' },
  { src: mfgImg,         label: 'Nexus Manufacturing ERP',  color: '#7c3aed' },
  { src: businessImg,    label: 'Business Suite',           color: '#023020' },
  { src: projectImg,     label: 'Project Management',       color: '#d97706' },
  { src: retailImg,      label: 'Retail & Inventory',       color: '#be185d' },
  { src: ledgerImg,      label: 'Personal Ledger Tracker',  color: '#0f766e' },
  { src: hotelImg,       label: 'Lodging Management',       color: '#1e40af' },
  { src: salonImg,       label: 'BeautiParlour Salon',      color: '#9d174d' },
  { src: gymImg,         label: 'Gym Management Suite',     color: '#15803d' },
  { src: boutiqueImg,    label: 'Sapphire Boutique',        color: '#7e22ce' },
  { src: smeImg,         label: 'SME Management Suite',     color: '#b45309' },
];

const AUTO_INTERVAL = 4000;

export default function HeroBannerSlider() {
  const [current, setCurrent]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef(null);

  const go = useCallback((next, dir = 1) => {
    setDirection(dir);
    setCurrent((next + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => go(current + 1, 1), [current, go]);
  const goPrev = useCallback(() => go(current - 1, -1), [current, go]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, goNext]);

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const variants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ?  48 : -48 }),
    center: ()    => ({ opacity: 1, x: 0 }),
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -48 :  48 }),
  };

  return (
    <div
      className="relative select-none group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Ambient glow ─────────────────────────────────────── */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#00a86b]/15 to-[#023020]/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* ── Image frame ──────────────────────────────────────── */}
      <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(2,48,32,0.14)] border border-slate-200/80 bg-slate-100">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={SLIDES[current].src}
            alt={SLIDES[current].label}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.52, ease: [0.32, 0.72, 0, 1] }}
            className="w-full h-auto object-cover block"
            draggable={false}
          />
        </AnimatePresence>

        {/* Product label badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: SLIDES[current].color }}
            />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              {SLIDES[current].label}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Prev arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>

        {/* Next arrow */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Dot indicators ───────────────────────────────────── */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-[#023020]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
