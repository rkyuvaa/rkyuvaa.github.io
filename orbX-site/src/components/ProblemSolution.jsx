import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileSpreadsheet, AlertTriangle, ArrowRight, CheckCircle2,
  Sparkles, Shuffle, ShoppingCart, Users, Briefcase,
  TrendingDown, ShieldAlert, Cpu
} from 'lucide-react';

const disconnectedParts = [
  {
    title: 'Sales & Orders',
    tool: 'WhatsApp & Email chains',
    pain: 'Lost quotations, double order entries, delayed customer responses',
    icon: ShoppingCart,
    color: '#ef4444'
  },
  {
    title: 'Purchase & Vendors',
    tool: 'Scattered paper bills',
    pain: 'Duplicate vendor payments, untracked GRNs, zero purchase rate history',
    icon: FileSpreadsheet,
    color: '#f97316'
  },
  {
    title: 'Inventory & Stock',
    tool: 'Physical registers',
    pain: 'Frequent stockouts, untracked batch loss, blind reorder points',
    icon: AlertTriangle,
    color: '#eab308'
  },
  {
    title: 'Attendance & HR',
    tool: 'Biometric dump files',
    pain: 'Hours spent manually computing OT, comp-off & LOP deductions',
    icon: Users,
    color: '#a855f7'
  },
  {
    title: 'Project Milestones',
    tool: 'Sticky notes & chat',
    pain: 'Overdue task deadlines, unmonitored task dependencies, chaotic handoffs',
    icon: Briefcase,
    color: '#3b82f6'
  },
  {
    title: 'Finance & Ledger',
    tool: 'Disconnected tally files',
    pain: 'Cash balance unknown until month-end audit, delayed customer followups',
    icon: TrendingDown,
    color: '#ec4899'
  },
  {
    title: 'Management Reports',
    tool: 'Manual Excel summaries',
    pain: 'Stale numbers, conflicting spreadsheets, decision bottlenecks',
    icon: ShieldAlert,
    color: '#64748b'
  },
];

export default function ProblemSolution({ onOpenDemo }) {
  const [unifiedMode, setUnifiedMode] = useState(true);

  return (
    <section className="py-24 lg:py-32 bg-[#F7FAF8] relative overflow-hidden border-y border-slate-100">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 relative z-10">
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

          {/* Interactive State Toggle */}
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

        {/* Visual Transformation Canvas */}
        <div className="relative">
          {!unifiedMode ? (
            /* Disconnected Cards View */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {disconnectedParts.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-rose-100/80 shadow-sm relative overflow-hidden group hover:border-rose-300 transition-colors"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -z-0 opacity-50" />
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          <Icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 uppercase tracking-wide">
                          Siloed
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                        <div className="text-[11px] font-semibold text-rose-600 mt-0.5">{item.tool}</div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-100">
                        {item.pain}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="bg-rose-500/10 border-2 border-dashed border-rose-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Shuffle size={22} />
                </div>
                <div className="font-bold text-slate-800 text-sm">7 Disconnected Datasets</div>
                <p className="text-xs text-slate-600">
                  Data entered repeatedly across spreadsheets causes delays and costly errors.
                </p>
                <button
                  onClick={() => setUnifiedMode(true)}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md"
                >
                  See The OrbX Solution
                </button>
              </div>
            </motion.div>
          ) : (
            /* Unified Central OrbX Platform View */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_20px_60px_rgba(2,48,32,0.06)]"
            >
              {/* Transition Banner */}
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a86b] uppercase tracking-wider">
                  <CheckCircle2 size={15} /> All Data Flows Together
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Bring Everything Together With <span className="gradient-text">OrbX.</span>
                </h3>
                <p className="text-slate-600 text-sm">
                  One single source of operational truth. A quotation accepted in Sales automatically checks Inventory, alerts Purchase for materials, schedules Production, and updates the Financial Ledger.
                </p>
              </div>

              {/* Visual Unified Network Diagram */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 mb-8">
                {disconnectedParts.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-emerald-50/60 border border-emerald-200/60 rounded-xl p-3 text-center space-y-2 relative group hover:bg-[#023020] hover:text-white transition-all cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#023020] text-[#00c87f] group-hover:bg-white group-hover:text-[#023020] flex items-center justify-center mx-auto transition-colors">
                        <Icon size={18} />
                      </div>
                      <div className="font-bold text-xs group-hover:text-white text-slate-800 truncate">
                        {item.title.split(' ')[0]}
                      </div>
                      <div className="text-[10px] text-emerald-800 font-semibold group-hover:text-emerald-200">
                        Unified Data
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* The Central Hub Box */}
              <div className="bg-[#023020] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-52 h-52 bg-[#00a86b]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-2 text-center lg:text-left relative z-10 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a86b]/20 text-[#00c87f] text-xs font-semibold">
                    <Cpu size={14} /> Zero Data Silos
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Experience Zero Delay In Business Decision Making
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    Say goodbye to manual reconciliation. Experience synchronized operations from day one with OrbX.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full lg:w-auto">
                  <button
                    onClick={onOpenDemo}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#023020] hover:bg-emerald-50 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Live Platform Demo</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href="#platform-hub"
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all text-center"
                  >
                    Explore Platform Hub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
