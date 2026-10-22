import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── PNG imports (fallback) ────────────────────────────────────────────────
import hotelPng      from '../assets/banners/Lodging Management Suite Hotel Dashboard.png';
import salonPng      from '../assets/banners/OrbX BeautiParlour Salon Dashboard.png';
import businessPng   from '../assets/banners/OrbX Business Suite Partnership Banner.png';
import gymPng        from '../assets/banners/OrbX Gym Management Suite.png';
import hrmsPng       from '../assets/banners/OrbX HRMS Management Suite.png';
import mfgPng        from '../assets/banners/OrbX Nexus Manufacturing Suite.png';
import ledgerPng     from '../assets/banners/OrbX Personal Ledger Tracker Banner.png';
import projectPng    from '../assets/banners/OrbX Project Management Suite Banner.png';
import restaurantPng from '../assets/banners/OrbX Restaurant Management Suite.png';
import retailPng     from '../assets/banners/OrbX Retail and Inventory Suite Banner.png';
import boutiquePng   from '../assets/banners/OrbX Sapphire Boutique Suite Dashboard.png';
import smePng        from '../assets/banners/OrbX SME Management Suite.png';

// ─── WebP imports (primary — ~80% smaller) ────────────────────────────────
import hotelWebP      from '../assets/banners/webp/Lodging Management Suite Hotel Dashboard.webp';
import salonWebP      from '../assets/banners/webp/OrbX BeautiParlour Salon Dashboard.webp';
import businessWebP   from '../assets/banners/webp/OrbX Business Suite Partnership Banner.webp';
import gymWebP        from '../assets/banners/webp/OrbX Gym Management Suite.webp';
import hrmsWebP       from '../assets/banners/webp/OrbX HRMS Management Suite.webp';
import mfgWebP        from '../assets/banners/webp/OrbX Nexus Manufacturing Suite.webp';
import ledgerWebP     from '../assets/banners/webp/OrbX Personal Ledger Tracker Banner.webp';
import projectWebP    from '../assets/banners/webp/OrbX Project Management Suite Banner.webp';
import restaurantWebP from '../assets/banners/webp/OrbX Restaurant Management Suite.webp';
import retailWebP     from '../assets/banners/webp/OrbX Retail and Inventory Suite Banner.webp';
import boutiqueWebP   from '../assets/banners/webp/OrbX Sapphire Boutique Suite Dashboard.webp';
import smeWebP        from '../assets/banners/webp/OrbX SME Management Suite.webp';

// ─── Slide data ────────────────────────────────────────────────────────────
const SLIDES = [
  { webp: restaurantWebP, png: restaurantPng, label: 'Restaurant Management',  color: '#e05a2b' },
  { webp: hrmsWebP,       png: hrmsPng,       label: 'HRMS & Attendance',       color: '#0369a1' },
  { webp: mfgWebP,        png: mfgPng,        label: 'Nexus Manufacturing ERP', color: '#7c3aed' },
  { webp: businessWebP,   png: businessPng,   label: 'Business Suite',          color: '#023020' },
  { webp: projectWebP,    png: projectPng,    label: 'Project Management',      color: '#d97706' },
  { webp: retailWebP,     png: retailPng,     label: 'Retail & Inventory',      color: '#be185d' },
  { webp: ledgerWebP,     png: ledgerPng,     label: 'Personal Ledger Tracker', color: '#0f766e' },
  { webp: hotelWebP,      png: hotelPng,      label: 'Lodging Management',      color: '#1e40af' },
  { webp: salonWebP,      png: salonPng,      label: 'BeautiParlour Salon',     color: '#9d174d' },
  { webp: gymWebP,        png: gymPng,        label: 'Gym Management Suite',    color: '#15803d' },
  { webp: boutiqueWebP,   png: boutiquePng,   label: 'Sapphire Boutique',       color: '#7e22ce' },
  { webp: smeWebP,        png: smePng,        label: 'SME Management Suite',    color: '#b45309' },
];

const AUTO_INTERVAL = 4500;

// ─── Staggered preloader: eager for #0, then batched after mount ───────────
function useImagePreloader() {
  useEffect(() => {
    // Slides 1-3 preloaded right away (next few in the carousel)
    const preloadBatch = (indices) => {
      indices.forEach((i) => {
        const img = new window.Image();
        img.src = SLIDES[i].webp; // WebP is preferred by the <picture> element
      });
    };
    preloadBatch([1, 2, 3]);

    // Remaining slides preloaded after 1.5 s to avoid competing with first paint
    const timer = setTimeout(() => preloadBatch([4, 5, 6, 7, 8, 9, 10, 11]), 1500);
    return () => clearTimeout(timer);
  }, []);
}

// ──────────────────────────────────────────────────────────────────────────
export default function HeroBannerSlider() {
  const [current, setCurrent]     = useState(0);
  const [paused, setPaused]       = useState(false);
  const [direction, setDirection] = useState(1);
  const [loaded, setLoaded]       = useState({ 0: false }); // track per-slide load state
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

  const markLoaded = useCallback((idx) => {
    setLoaded((prev) => ({ ...prev, [idx]: true }));
  }, []);

  const variants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ?  44 : -44 }),
    center: ()    => ({ opacity: 1, x: 0 }),
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -44 :  44 }),
  };

  const slide = SLIDES[current];
  const isLoaded = !!loaded[current];

  return (
    <div
      className="relative select-none group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Ambient glow behind the image ─────────────────────── */}
      <div
        className="absolute -inset-6 -z-10 rounded-3xl blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 50%, rgba(0,200,83,0.18) 0%, rgba(0,59,45,0.10) 55%, transparent 80%)',
        }}
      />

      {/* ── Image frame ──────────────────────────────────────────── */}
      <div
        className="relative rounded-2xl overflow-hidden border border-slate-200/70"
        style={{ boxShadow: '0 28px 80px rgba(2,48,32,0.16), 0 4px 16px rgba(0,0,0,0.06)' }}
      >
        {/* Placeholder shimmer — shows until first image loads */}
        {!isLoaded && (
          <div
            className="absolute inset-0 z-10 animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #e8f7ef 0%, #f0faf6 50%, #e8f7ef 100%)',
              aspectRatio: '16/10',
            }}
          />
        )}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.48, ease: [0.32, 0.72, 0, 1] }}
            className="w-full"
          >
            <picture>
              {/* WebP — served to all modern browsers (~80% smaller) */}
              <source srcSet={slide.webp} type="image/webp" />
              {/* PNG fallback */}
              <img
                src={slide.png}
                alt={slide.label}
                width={1280}
                height={800}
                /* First slide: eager + high priority → visible immediately */
                loading={current === 0 ? 'eager' : 'lazy'}
                fetchPriority={current === 0 ? 'high' : 'auto'}
                decoding={current === 0 ? 'sync' : 'async'}
                onLoad={() => markLoaded(current)}
                className="w-full h-auto object-cover block"
                style={{ aspectRatio: '16/10', display: 'block' }}
                draggable={false}
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        {/* Product label badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3, delay: 0.16 }}
            className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: slide.color }}
            />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              {slide.label}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Prev arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>

        {/* Next arrow */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Dot indicators ────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-1.5 mt-3.5">
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
