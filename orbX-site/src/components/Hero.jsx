import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import HeroBannerSlider from './HeroBannerSlider';

export default function Hero({ onOpenDemo }) {

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-white mesh-hero">
      {/* Background Animated Blobs and Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#00a86b]/10 via-[#023020]/5 to-transparent blur-[100px] rounded-full" />
        <div className="absolute -top-20 right-0 w-[450px] h-[450px] bg-[#84cc16]/5 blur-[90px] rounded-full" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
      </div>

      <div className="relative container-orbx">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a86b] live-dot" />
              <span>BUSINESS MANAGEMENT, SIMPLIFIED</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Run Your Business. <br />
              <span className="gradient-text">Not Your Paperwork.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl"
            >
              OrbX brings sales, purchase, inventory, finance, HR, projects and operations together in one powerful business platform.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
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

            {/* Trust Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3 flex items-center gap-4 text-xs font-medium text-slate-500"
            >
              <div className="flex items-center gap-1.5 text-[#023020]">
                <ShieldCheck size={16} className="text-[#00a86b]" />
                <span className="font-semibold text-slate-700">Built for growing businesses.</span>
              </div>
              <span className="text-slate-300">•</span>
              <span>Fast 4-Step Onboarding</span>
              <span className="text-slate-300">•</span>
              <span>Indian GST Ready</span>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Banner Slider */}
          <motion.div
            className="lg:col-span-6 mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroBannerSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
