import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileSpreadsheet, AlertTriangle, ArrowRight, CheckCircle2,
  Sparkles, Shuffle, ShoppingCart, Users, Briefcase,
  TrendingDown, ShieldAlert, Cpu, Link2, Zap
} from 'lucide-react';

const modules = [
  {
    title: 'Sales & Orders',
    tool: 'WhatsApp & Email chains',
    pain: 'Lost quotations, double entries, delayed customer responses',
    icon: ShoppingCart,
    color: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
    unifiedLabel: 'Sales',
  },
  {
    title: 'Purchase & Vendors',
    tool: 'Scattered paper bills',
    pain: 'Duplicate payments, untracked GRNs, zero rate history',
    icon: FileSpreadsheet,
    color: '#f97316',
    bg: '#fff7ed',
    border: '#fed7aa',
    unifiedLabel: 'Purchase',
  },
  {
    title: 'Inventory & Stock',
    tool: 'Physical registers',
    pain: 'Frequent stockouts, untracked batch loss, blind reorder points',
    icon: AlertTriangle,
    color: '#eab308',
    bg: '#fefce8',
    border: '#fde68a',
    unifiedLabel: 'Inventory',
  },
  {
    title: 'Attendance & HR',
    tool: 'Biometric dump files',
    pain: 'Hours spent computing OT, comp-off & LOP deductions manually',
    icon: Users,
    color: '#a855f7',
    bg: '#faf5ff',
    border: '#e9d5ff',
    unifiedLabel: 'Attendance',
  },
  {
    title: 'Project Milestones',
    tool: 'Sticky notes & chat',
    pain: 'Overdue deadlines, unmonitored dependencies, chaotic handoffs',
    icon: Briefcase,
    color: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
    unifiedLabel: 'Projects',
  },
  {
    title: 'Finance & Ledger',
    tool: 'Disconnected tally files',
    pain: 'Cash balance unknown until month-end, delayed followups',
    icon: TrendingDown,
    color: '#ec4899',
    bg: '#fdf2f8',
    border: '#fbcfe8',
    unifiedLabel: 'Finance',
  },
  {
    title: 'Management Reports',
    tool: 'Manual Excel summaries',
    pain: 'Stale numbers, conflicting spreadsheets, decision bottlenecks',
    icon: ShieldAlert,
    color: '#64748b',
    bg: '#f8fafc',
    border: '#cbd5e1',
    unifiedLabel: 'Reports',
  },
];

export default function ProblemSolution({ onOpenDemo }) {
  const [unifiedMode, setUnifiedMode] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-[#F7FAF8] relative w-full border-y border-slate-100">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="container-orbx relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle size={13} />
            <span>The Fragmented Business Dilemma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your Business Has <span className="text-rose-600">Too Many Moving Parts.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            When teams run on separate apps, manual spreadsheets, and phone calls, operational friction slows down your entire company.
          </p>

          {/* Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/60 shadow-inner">
              <button
                onClick={() => setUnifiedMode(false)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  !unifiedMode
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Disconnected Chaos (Without OrbX)
              </button>
              <button
                onClick={() => setUnifiedMode(true)}
                className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  unifiedMode
                    ? 'bg-[#023020] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles size={13} className="text-[#00c87f]" />
                Unified With OrbX
              </button>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!unifiedMode ? (

              /* â”€â”€â”€ SILOED VIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
              <motion.div
                key="siloed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {modules.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-5 border-2 shadow-sm relative overflow-hidden group transition-all hover:shadow-md"
                        style={{ borderColor: item.border }}
                      >
                        {/* Colored corner glow */}
                        <div
                          className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-60"
                          style={{ backgroundColor: item.bg }}
                        />
                        <div className="relative z-10 space-y-3">
                          {/* Icon + Siloed badge */}
                          <div className="flex items-center justify-between">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: item.bg, color: item.color }}
                            >
                              <Icon size={20} />
                            </div>
                            <span
                              className="text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider"
                              style={{ backgroundColor: item.bg, color: item.color }}
                            >
                              Siloed
                            </span>
                          </div>
                          {/* Title + tool */}
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm leading-tight">{item.title}</h4>
                            <div className="text-[11px] font-semibold mt-0.5" style={{ color: item.color }}>
                              {item.tool}
                            </div>
                          </div>
                          {/* Pain point */}
                          <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t" style={{ borderColor: item.border }}>
                            {item.pain}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* 8th â€” summary CTA card */}
                  <div className="bg-rose-50 border-2 border-dashed border-rose-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                      <Shuffle size={22} />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-800 text-sm">7 Disconnected Datasets</div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Data entered repeatedly across tools â€” causing delays and costly errors.
                      </p>
                    </div>
                    <button
                      onClick={() => setUnifiedMode(true)}
                      className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      <Zap size={13} />
                      See The OrbX Solution
                    </button>
                  </div>
                </div>
              </motion.div>

            ) : (

              /* â”€â”€â”€ UNIFIED VIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
              <motion.div
                key="unified"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_20px_60px_rgba(2,48,32,0.07)] overflow-hidden"
              >
                {/* Header banner */}
                <div className="text-center px-6 pt-10 pb-6 space-y-2 border-b border-slate-100">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a86b] uppercase tracking-wider">
                    <CheckCircle2 size={15} /> All Data Flows Together
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Bring Everything Together With <span className="gradient-text">OrbX.</span>
                  </h3>
                  <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                    One single source of truth. A quotation accepted in Sales automatically checks Inventory, alerts Purchase, schedules Production, and updates Finance â€” instantly.
                  </p>
                </div>

                {/* Module tiles + OrbX Core hub */}
                <div className="p-6 sm:p-10">
                  {/* Top row: 4 modules */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {modules.slice(0, 4).map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="group relative bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-4 text-center hover:bg-[#023020] transition-all duration-300 cursor-default overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#00a86b]/0 to-[#00a86b]/0 group-hover:from-[#023020] group-hover:to-[#011a12] transition-all duration-300 rounded-2xl" />
                          <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-xl bg-[#023020] group-hover:bg-white/15 text-[#00c87f] group-hover:text-[#00c87f] flex items-center justify-center transition-colors shadow-sm">
                              <Icon size={20} />
                            </div>
                            <div className="font-bold text-sm text-slate-800 group-hover:text-white transition-colors leading-tight">
                              {item.unifiedLabel}
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00a86b] group-hover:bg-[#00c87f] transition-colors" />
                              <span className="text-[10px] font-bold text-[#00a86b] group-hover:text-[#00c87f] transition-colors uppercase tracking-wide">
                                Live Sync
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Centre: OrbX Core hub */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00a86b]/40 to-[#023020]/60" />
                    <div className="flex items-center gap-3 bg-[#023020] text-white px-5 py-3 rounded-2xl shadow-xl shadow-[#023020]/30 flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-[#00a86b]/20 text-[#00c87f] flex items-center justify-center">
                        <Link2 size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#00c87f]">OrbX Core</div>
                        <div className="text-xs font-bold text-white leading-tight">Unified Platform</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#00c87f] live-dot ml-1" />
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#00a86b]/40 to-[#023020]/60" />
                  </div>

                  {/* Bottom row: 3 modules */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {modules.slice(4).map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="group relative bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-4 text-center hover:bg-[#023020] transition-all duration-300 cursor-default overflow-hidden"
                        >
                          <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-xl bg-[#023020] group-hover:bg-white/15 text-[#00c87f] flex items-center justify-center transition-colors shadow-sm">
                              <Icon size={20} />
                            </div>
                            <div className="font-bold text-sm text-slate-800 group-hover:text-white transition-colors leading-tight">
                              {item.unifiedLabel}
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00a86b] group-hover:bg-[#00c87f] transition-colors" />
                              <span className="text-[10px] font-bold text-[#00a86b] group-hover:text-[#00c87f] transition-colors uppercase tracking-wide">
                                Live Sync
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom CTA bar */}
                <div className="bg-[#023020] px-6 sm:px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-52 h-52 bg-[#00a86b]/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="text-center lg:text-left relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a86b]/20 text-[#00c87f] text-xs font-semibold mb-2">
                      <Cpu size={12} /> Zero Data Silos
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">Experience Zero Delay In Business Decision Making</h4>
                    <p className="text-white/70 text-xs mt-1">Say goodbye to manual reconciliation. Synchronized from day one.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10">
                    <button
                      onClick={onOpenDemo}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#023020] hover:bg-emerald-50 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Request Live Demo</span>
                      <ArrowRight size={13} />
                    </button>
                    <a
                      href="#platform-hub"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all text-center"
                    >
                      Explore Platform Hub
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

