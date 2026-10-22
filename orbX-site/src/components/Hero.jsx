import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import HeroBannerSlider from './HeroBannerSlider';

export default function Hero({ onOpenDemo }) {
  return (
    <section
      className="relative pt-24 pb-14 lg:pt-28 lg:pb-18 overflow-hidden mesh-hero"
      style={{
        // Very light green-tinted white base
        background: 'linear-gradient(155deg, #f4fdf8 0%, #ffffff 45%, #f0faf5 100%)',
      }}
    >
      {/* ── Premium Green Vignette Layers ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* 1. Outer edge vignette — deep green fading to transparent from all sides */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, transparent 38%, rgba(0,59,45,0.07) 70%, rgba(0,59,45,0.14) 100%)',
          }}
        />

        {/* 2. Left-side atmospheric glow behind headline */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 18% 55%, rgba(0,200,83,0.09) 0%, transparent 58%)',
          }}
        />

        {/* 3. Right-side glow that makes the banner image pop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 80% 48%, rgba(0,200,83,0.11) 0%, transparent 52%)',
          }}
        />

        {/* 4. Top edge — very subtle deep-green shadow */}
        <div
          className="absolute inset-x-0 top-0 h-32"
          style={{
            background: 'linear-gradient(180deg, rgba(0,59,45,0.055) 0%, transparent 100%)',
          }}
        />

        {/* 5. Bottom edge vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background: 'linear-gradient(0deg, rgba(0,59,45,0.05) 0%, transparent 100%)',
          }}
        />

        {/* 6. Subtle grid texture (existing style) */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative container-orbx">
        {/*
          Two-column grid:
          Left  (5 cols) → headline + CTAs
          Right (7 cols) → banner slider (~58% width for larger images)
        */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* ── Left Column ─────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-6 text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a86b] live-dot" />
              <span>BUSINESS MANAGEMENT, SIMPLIFIED</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Run Your Business. <br />
              <span className="gradient-text">Not Your Paperwork.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
            >
              OrbX brings sales, purchase, inventory, finance, HR, projects and
              operations together in one powerful business platform.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <button
                onClick={onOpenDemo}
                className="group px-7 py-3.5 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-semibold text-sm shadow-xl shadow-[#023020]/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Demo</span>
                <ArrowRight size={16} className="text-[#00a86b] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#products"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-slate-300"
              >
                <span>Explore OrbX</span>
                <ChevronRight size={16} className="text-slate-400" />
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex items-center gap-4 text-xs font-medium text-slate-500 flex-wrap"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#00a86b]" />
                <span className="font-semibold text-slate-700">Built for growing businesses.</span>
              </div>
              <span className="text-slate-300">•</span>
              <span>Fast 4-Step Onboarding</span>
              <span className="text-slate-300">•</span>
              <span>Indian GST Ready</span>
            </motion.div>
          </div>

          {/* ── Right Column — Banner Slider (larger: 7/12 cols) ─────────── */}
          <motion.div
            className="lg:col-span-7 mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <HeroBannerSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
