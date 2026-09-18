import { motion } from 'framer-motion';
import {
  ArrowRight, TrendingUp, ShieldCheck,
  Package, ShoppingCart, Users, ChevronRight, BarChart3,
  CheckCircle, DollarSign, Clock
} from 'lucide-react';

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

          {/* Right Column: Animated Dashboard & Floating Cards */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0 select-none">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00a86b]/15 to-[#023020]/10 rounded-3xl blur-2xl -z-10" />

            {/* Main Interactive Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative bg-white rounded-2xl shadow-[0_25px_70px_rgba(2,48,32,0.12)] border border-slate-200/80 overflow-hidden"
            >
              {/* Dashboard Window Header */}
              <div className="bg-[#023020] px-4 py-3 flex items-center justify-between text-white border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 tracking-wide flex items-center gap-1.5">
                    OrbX Enterprise Command Center
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#00a86b]/20 text-[#00c87f] px-2 py-0.5 rounded-md border border-[#00a86b]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] live-dot" />
                    Live Sync
                  </span>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-4 sm:p-5 bg-slate-50/50 space-y-4">
                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Total Revenue</div>
                    <div className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">₹84,20,000</div>
                    <div className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp size={10} /> +18.4% this mo
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Active Work Orders</div>
                    <div className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">46 Orders</div>
                    <div className="text-[10px] font-semibold text-[#00a86b] flex items-center gap-0.5 mt-0.5">
                      <Clock size={10} /> 94% on schedule
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">Inventory Health</div>
                    <div className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">92% In Stock</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">0 Critical Shortages</div>
                  </div>
                </div>

                {/* Animated Chart & Operations Status */}
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="text-xs font-bold text-slate-800">Weekly Throughput & Cash Inflow</div>
                      <div className="text-[10px] text-slate-400">Real-time synchronized ledger across 4 departments</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#023020] bg-emerald-50 px-2 py-0.5 rounded-lg">
                      <BarChart3 size={12} className="text-[#00a86b]" />
                      <span>Operational</span>
                    </div>
                  </div>

                  {/* SVG Bar Chart Visualization */}
                  <div className="h-28 sm:h-32 flex items-end justify-between gap-2 sm:gap-3 pt-2 px-1">
                    {[
                      { day: 'Mon', height: '55%', val: '₹3.4L' },
                      { day: 'Tue', height: '70%', val: '₹4.8L' },
                      { day: 'Wed', height: '62%', val: '₹4.1L' },
                      { day: 'Thu', height: '88%', val: '₹6.2L' },
                      { day: 'Fri', height: '94%', val: '₹7.5L' },
                      { day: 'Sat', height: '78%', val: '₹5.6L' },
                      { day: 'Sun', height: '45%', val: '₹2.9L' },
                    ].map((col, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <span className="text-[9px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          {col.val}
                        </span>
                        <div
                          className="w-full rounded-t-md transition-all duration-500 group-hover:brightness-110"
                          style={{
                            height: col.height,
                            backgroundColor: idx === 4 ? '#023020' : idx === 3 ? '#00a86b' : '#cbd5e1'
                          }}
                        />
                        <span className="text-[10px] font-medium text-slate-500">{col.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Activity Pipeline Preview */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00a86b] flex items-center justify-center flex-shrink-0">
                      <ShoppingCart size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold text-slate-800 truncate">PO #482 Approved</div>
                      <div className="text-[9px] text-slate-400">₹1,42,000 • Inbound today</div>
                    </div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Users size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold text-slate-800 truncate">Biometric Synced</div>
                      <div className="text-[9px] text-slate-400">32 Present • 0 Missed punches</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Floating Micro-Cards Requested in Prompt */}
            {/* Card 1: Sales */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 sm:-left-10 top-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(2,48,32,0.14)] border border-slate-100 p-3 sm:p-3.5 flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-[#00a86b] flex items-center justify-center flex-shrink-0">
                <DollarSign size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-400">Sales</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">₹2,48,500</div>
              </div>
            </motion.div>

            {/* Card 2: Inventory */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 sm:-right-8 top-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(2,48,32,0.14)] border border-slate-100 p-3 sm:p-3.5 flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#023020] text-white flex items-center justify-center flex-shrink-0">
                <Package size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-400">Inventory</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">92% Optimal</div>
              </div>
            </motion.div>

            {/* Card 3: Tasks Completed */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -left-4 sm:-left-8 bottom-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(2,48,32,0.14)] border border-slate-100 p-3 sm:p-3.5 flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#84cc16]/20 text-[#4d7c0f] flex items-center justify-center flex-shrink-0">
                <CheckCircle size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-400">Tasks</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">18 Completed</div>
              </div>
            </motion.div>

            {/* Card 4: Employees Present */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -right-4 sm:-right-6 bottom-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(2,48,32,0.14)] border border-slate-100 p-3 sm:p-3.5 flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Users size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-400">Employees</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">32 Present</div>
              </div>
            </motion.div>

            {/* Card 5: Purchase Orders */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex absolute left-1/3 -bottom-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(2,48,32,0.14)] border border-slate-100 px-3.5 py-2.5 items-center gap-2.5 z-20"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a86b]" />
              <div className="text-xs font-semibold text-slate-800">
                Purchase Orders: <span className="font-bold text-[#023020]">12 Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
