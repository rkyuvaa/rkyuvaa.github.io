import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart3, ShieldCheck, Zap, Layers, Cpu, Sparkles, CheckCircle2
} from 'lucide-react';
import { fadeLeft, fadeRight, stagger, scaleIn } from '../utils/anim';

export default function About({ onOpenDemo }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: BarChart3, label: 'Real-time Reporting', val: '100%' },
    { icon: ShieldCheck, label: 'High Availability', val: '99.9%' },
    { icon: Zap, label: 'Lightning Performance', val: 'Fast' },
    { icon: Layers, label: 'Modular Architecture', val: 'Scalable' },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="container-orbx">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Architecture Composition */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#011a12] via-[#023020] to-[#00a86b] shadow-2xl p-8 sm:p-10 text-white relative">
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00c87f] text-xs font-semibold">
                  <Cpu size={14} /> Unified Architecture
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  One Unified Engine Powering Every Department
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Traditional software creates departmental walls. OrbX breaks them down with an integrated transactional model where procurement, shop-floor execution, sales, and accounting share the same live ledger.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/15 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00c87f]" />
                    <span>Single Database Truth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00c87f]" />
                    <span>Role-Based Permissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00c87f]" />
                    <span>Instant Cross-Branch Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00c87f]" />
                    <span>Audit Trail Logged</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission & Core Highlights */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-6 space-y-6"
          >
            <motion.span
              variants={fadeRight}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles size={13} className="text-[#00a86b]" />
              <span>About OrbX</span>
            </motion.span>

            <motion.h2
              variants={fadeRight}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Modern Business Software Built for <br />
              <span className="gradient-text">Operational Precision.</span>
            </motion.h2>

            <motion.p
              variants={fadeRight}
              className="text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              OrbX is an intelligent enterprise business platform designed to digitize operations across manufacturing, retail, contracting, automotive, restaurants, and professional services. Built for ambitious growing businesses, OrbX delivers real-time visibility, automated workflows, and enterprise-grade peace of mind.
            </motion.p>

            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-[#F7FAF8] rounded-2xl p-4 sm:p-5 border border-slate-200/70 shadow-sm card-lift"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm text-[#00a86b]">
                    <s.icon size={18} />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#023020] mb-0.5">
                    {s.val}
                  </div>
                  <div className="text-slate-500 text-xs font-semibold">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white text-xs font-bold transition-all shadow-md"
              >
                Schedule Technical Architecture Walkthrough
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
