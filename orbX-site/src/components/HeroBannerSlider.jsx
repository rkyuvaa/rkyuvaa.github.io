import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── High-Quality WebP Banners (Primary) ──────────────────────────────────
import businessWebP   from '../assets/banners/webp/OrbX Business Suite Partnership Banner.webp';
import mfgWebP        from '../assets/banners/webp/OrbX Nexus Manufacturing Suite.webp';
import hrmsWebP       from '../assets/banners/webp/OrbX HRMS Management Suite.webp';
import restaurantWebP from '../assets/banners/webp/OrbX Restaurant Management Suite.webp';
import projectWebP    from '../assets/banners/webp/OrbX Project Management Suite Banner.webp';
import retailWebP     from '../assets/banners/webp/OrbX Retail and Inventory Suite Banner.webp';
import ledgerWebP     from '../assets/banners/webp/OrbX Personal Ledger Tracker Banner.webp';
import hotelWebP      from '../assets/banners/webp/Lodging Management Suite Hotel Dashboard.webp';
import salonWebP      from '../assets/banners/webp/OrbX BeautiParlour Salon Dashboard.webp';
import gymWebP        from '../assets/banners/webp/OrbX Gym Management Suite.webp';
import boutiqueWebP   from '../assets/banners/webp/OrbX Sapphire Boutique Suite Dashboard.webp';
import smeWebP        from '../assets/banners/webp/OrbX SME Management Suite.webp';

// ─── PNG Fallbacks ────────────────────────────────────────────────────────
import businessPng   from '../assets/banners/OrbX Business Suite Partnership Banner.png';
import mfgPng        from '../assets/banners/OrbX Nexus Manufacturing Suite.png';
import hrmsPng       from '../assets/banners/OrbX HRMS Management Suite.png';
import restaurantPng from '../assets/banners/OrbX Restaurant Management Suite.png';
import projectPng    from '../assets/banners/OrbX Project Management Suite Banner.png';
import retailPng     from '../assets/banners/OrbX Retail and Inventory Suite Banner.png';
import ledgerPng     from '../assets/banners/OrbX Personal Ledger Tracker Banner.png';
import hotelPng      from '../assets/banners/Lodging Management Suite Hotel Dashboard.png';
import salonPng      from '../assets/banners/OrbX BeautiParlour Salon Dashboard.png';
import gymPng        from '../assets/banners/OrbX Gym Management Suite.png';
import boutiquePng   from '../assets/banners/OrbX Sapphire Boutique Suite Dashboard.png';
import smePng        from '../assets/banners/OrbX SME Management Suite.png';

// ─── Slide data (Flagship Business Suite first, matching hero copy) ───────
const SLIDES = [
  { webp: businessWebP,   png: businessPng,   label: 'OrbX Business Suite (B2B)', color: '#00a86b' },
  { webp: mfgWebP,        png: mfgPng,        label: 'Nexus Manufacturing ERP',    color: '#7c3aed' },
  { webp: hrmsWebP,       png: hrmsPng,       label: 'HRMS & Attendance Suite',   color: '#0284c7' },
  { webp: restaurantWebP, png: restaurantPng, label: 'Restaurant Management',      color: '#ea580c' },
  { webp: projectWebP,    png: projectPng,    label: 'Project Management Suite',  color: '#d97706' },
  { webp: retailWebP,     png: retailPng,     label: 'Retail & Inventory Suite',   color: '#db2777' },
  { webp: ledgerWebP,     png: ledgerPng,     label: 'Personal Ledger Tracker',    color: '#0d9488' },
  { webp: hotelWebP,      png: hotelPng,      label: 'Lodging Management Suite',   color: '#2563eb' },
  { webp: salonWebP,      png: salonPng,      label: 'BeautiParlour Salon Suite',  color: '#be185d' },
  { webp: gymWebP,        png: gymPng,        label: 'Gym Management Suite',       color: '#16a34a' },
  { webp: boutiqueWebP,   png: boutiquePng,   label: 'Sapphire Boutique Suite',    color: '#9333ea' },
  { webp: smeWebP,        png: smePng,        label: 'SME Management Suite',       color: '#ca8a04' },
];

const AUTO_INTERVAL = 4500;

// ─── Lazy preloader: prioritizes initial page render ──────────────────────
function useImagePreloader() {
  useEffect(() => {
    // Delay preloading next slides until after initial paint & idle
    const preload = () => {
      const nextBatch = [1, 2];
      nextBatch.forEach((idx) => {
        const img = new window.Image();
        img.src = SLIDES[idx].webp;
      });
      // Preload remaining slides later
      setTimeout(() => {
        for (let i = 3; i < SLIDES.length; i++) {
          const img = new window.Image();
          img.src = SLIDES[i].webp;
        }
      }, 2500);
    };

    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(preload, { timeout: 2000 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(preload, 1200);
      return () => clearTimeout(timer);
    }
  }, []);
}

export default function HeroBannerSlider() {
  const [current, setCurrent]     = useState(0);
  const [paused, setPaused]       = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  useImagePreloader();

  const go = useCallback((next, dir = 1) => {
    setDirection(dir);
    setCurrent((next + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => go(current + 1,  1), [current, go]);
  const goPrev = useCallback(() => go(current - 1, -1), [current, go]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const variants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: ()    => ({ opacity: 1, x: 0 }),
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
  };

  const slide = SLIDES[current];

  return (
    <div
      className="relative select-none group w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Soft, elegant green halo behind the image frame ───────── */}
      <div
        className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[28px] blur-2xl sm:blur-3xl pointer-events-none opacity-80 transition-opacity"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0, 200, 83, 0.14) 0%, rgba(0, 59, 45, 0.05) 55%, transparent 75%)',
        }}
      />

      {/* ── Image Showcase Container ───────────────────────────────── */}
      <div
        className="relative rounded-2xl sm:rounded-[22px] overflow-hidden border border-slate-200/80 bg-[#f8faf9] aspect-[16/9] shadow-[0_20px_50px_-12px_rgba(2,48,32,0.12),0_4px_16px_-2px_rgba(0,0,0,0.04)]"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-full"
          >
            <picture>
              <source srcSet={slide.webp} type="image/webp" />
              <img
                src={slide.png}
                alt={slide.label}
                width={1672}
                height={941}
                loading={current === 0 ? 'eager' : 'lazy'}
                fetchPriority={current === 0 ? 'high' : 'auto'}
                decoding={current === 0 ? 'sync' : 'async'}
                className="w-full h-full object-cover object-center block"
                draggable={false}
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        {/* Product label badge (Bottom Left) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            transition={{ duration: 0.28, delay: 0.12 }}
            className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 shadow-sm"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: slide.color }}
            />
            <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide">
              {slide.label}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Prev arrow button */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#023020] border border-slate-200/90 shadow-md backdrop-blur-md flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a86b]"
        >
          <ChevronLeft size={17} strokeWidth={2.4} />
        </button>

        {/* Next arrow button */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#023020] border border-slate-200/90 shadow-md backdrop-blur-md flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a86b]"
        >
          <ChevronRight size={17} strokeWidth={2.4} />
        </button>
      </div>

      {/* ── Dot Navigation Indicators ──────────────────────────────── */}
      <div className="flex items-center justify-center gap-1.5 mt-3 sm:mt-3.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 focus:outline-none ${
              i === current
                ? 'w-6 sm:w-7 h-2 bg-[#023020]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
