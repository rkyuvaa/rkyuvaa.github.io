import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import HeroBannerSlider from './HeroBannerSlider';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="relative pt-28 pb-14 lg:pt-32 lg:pb-18 overflow-hidden bg-white mesh-hero">
      {/* ── Refined Green Vignette & Atmospheric Background ────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial vignette around perimeter (white center, gentle mint-green fade) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0) 42%, rgba(232, 247, 239, 0.40) 78%, rgba(0, 200, 83, 0.04) 100%)',
          }}
        />

        {/* Subtle pale-green atmospheric glow behind left content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 18% 48%, rgba(0, 168, 107, 0.065) 0%, transparent 55%)',
          }}
        />

        {/* Luminous soft green glow behind product showcase image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 78% 50%, rgba(0, 200, 83, 0.075) 0%, rgba(0, 59, 45, 0.025) 50%, transparent 68%)',
          }}
        />

        {/* Subtle engineering grid texture */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* ── Main Container ─────────────────────────────────────────────────── */}
      <div className="relative container-orbx">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">

          {/* ── Left Column: Value Proposition & CTAs (5 cols) ─────────────── */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-5.5 text-left">

            {/* 1. Category Badge (Compact 20–25% reduction) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-[11px] font-semibold tracking-wider uppercase leading-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] live-dot" />
              <span>BUSINESS MANAGEMENT, SIMPLIFIED</span>
            </motion.div>

            {/* 2. Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Run Your Business. <br />
              <span className="gradient-text">Not Your Paperwork.</span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg"
            >
              OrbX brings sales, purchase, inventory, finance, HR, projects and operations together in one powerful business platform.
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5"
            >
              <button
                onClick={onOpenDemo}
                className="group px-6.5 py-3 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-semibold text-sm shadow-lg shadow-[#023020]/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Demo</span>
                <ArrowRight size={16} className="text-[#00a86b] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#products"
                className="px-5.5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-slate-300"
              >
                <span>Explore OrbX</span>
                <ChevronRight size={16} className="text-slate-400" />
              </a>
            </motion.div>

            {/* 5. Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="pt-1 flex items-center gap-3 text-xs font-medium text-slate-500 flex-wrap"
            >
              <div className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck size={15} className="text-[#00a86b]" />
                <span className="font-semibold text-slate-800">Built for growing businesses.</span>
              </div>
              <span className="text-slate-300">•</span>
              <span>Fast 4-Step Onboarding</span>
              <span className="text-slate-300">•</span>
              <span>Indian GST Ready</span>
            </motion.div>
          </div>

          {/* ── Right Column: Enlarged Product Banner Showcase (7 cols) ───── */}
          <motion.div
            className="lg:col-span-7 mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <HeroBannerSlider />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
