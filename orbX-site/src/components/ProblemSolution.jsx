import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, FileSpreadsheet, FileText, BookOpen, Fingerprint,
  StickyNote, CreditCard, AlertTriangle, CheckCircle2, ArrowRight,
  RotateCcw, Sparkles, Zap, ShoppingCart, Users, Briefcase,
  TrendingUp, BarChart3, PackageCheck, Layers, Check, Clock,
  RefreshCw, ChevronRight, XCircle
} from 'lucide-react';
import logoDark from '../assets/logo-orbx.png';

// ─── Step definition for the 4-phase cinematic journey ───────────────
const SCENES = [
  {
    id: 0,
    name: '1. Scattered Data',
    title: 'Your Business Data Is Everywhere.',
    subtitle: 'Sales. Purchase. Inventory. HR. Projects. Finance. All working separately.',
    badge: 'Without OrbX',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300/80',
    duration: 2300,
  },
  {
    id: 1,
    name: '2. The Chaos',
    title: 'Too Many Tools. Too Much Manual Work.',
    subtitle: 'Information breaks down between disconnected systems. Duplication and blind spots multiply.',
    badge: 'Operational Friction',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    duration: 2200,
  },
  {
    id: 2,
    name: '3. OrbX Enters',
    title: 'Then Everything Connects.',
    subtitle: 'OrbX becomes the intelligent central brain, bridging every isolated tool into one live system.',
    badge: 'OrbX Intelligence',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    duration: 1800,
  },
  {
    id: 3,
    name: '4. Connected Flow',
    title: 'One Business. One Connected System.',
    subtitle: 'OrbX brings your entire business operations together in real time.',
    badge: 'With OrbX Unified',
    badgeColor: 'bg-[#023020] text-emerald-300 border-emerald-500/30',
    duration: 3200,
  },
];

// ─── 7 Disconnected Tools (Before) ──────────────────────────────────
const scatteredTools = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Chats',
    sub: 'Lost order messages',
    icon: MessageSquare,
    badge: '14 Unread',
    color: '#10b981',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    x: 160,
    y: 90,
  },
  {
    id: 'excel',
    title: 'Excel Sheets',
    sub: 'sales_v4_FINAL.xlsx',
    icon: FileSpreadsheet,
    badge: 'Unsynced',
    color: '#059669',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    x: 500,
    y: 70,
  },
  {
    id: 'bills',
    title: 'Paper Bills',
    sub: 'Physical receipts #812',
    icon: FileText,
    badge: 'Manual Entry',
    color: '#f97316',
    bg: '#fff7ed',
    border: '#fed7aa',
    x: 840,
    y: 90,
  },
  {
    id: 'register',
    title: 'Physical Register',
    sub: 'Warehouse ledger book',
    icon: BookOpen,
    badge: 'Stock Blind',
    color: '#eab308',
    bg: '#fefce8',
    border: '#fde68a',
    x: 870,
    y: 305,
  },
  {
    id: 'biometric',
    title: 'Biometric Dump',
    sub: 'raw_punches.csv',
    icon: Fingerprint,
    badge: 'Manual OT',
    color: '#a855f7',
    bg: '#faf5ff',
    border: '#e9d5ff',
    x: 720,
    y: 500,
  },
  {
    id: 'tally',
    title: 'Separate Accounts',
    sub: 'Disconnected tally files',
    icon: CreditCard,
    badge: 'Mismatch',
    color: '#ec4899',
    bg: '#fdf2f8',
    border: '#fbcfe8',
    x: 280,
    y: 500,
  },
  {
    id: 'notes',
    title: 'Sticky Notes & DM',
    sub: 'Missed client follow-ups',
    icon: StickyNote,
    badge: 'Overdue',
    color: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
    x: 130,
    y: 305,
  },
];

// ─── 7 Unified Modules (After) ─────────────────────────────────────
const unifiedModules = [
  {
    id: 'sales',
    title: 'Sales & Orders',
    outcome: '✓ Order Created',
    desc: 'Instant quotation to dispatch',
    icon: ShoppingCart,
    x: 160,
    y: 90,
  },
  {
    id: 'purchase',
    title: 'Purchase & Vendors',
    outcome: '✓ Auto PO Sent',
    desc: 'Live rate & vendor tracking',
    icon: FileSpreadsheet,
    x: 500,
    y: 70,
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock',
    outcome: '✓ Stock Deducted',
    desc: 'Real-time multi-bin balance',
    icon: PackageCheck,
    x: 840,
    y: 90,
  },
  {
    id: 'hr',
    title: 'Attendance & HR',
    outcome: '✓ Wages Computed',
    desc: 'Biometric & wage automation',
    icon: Users,
    x: 870,
    y: 305,
  },
  {
    id: 'reports',
    title: 'Management Reports',
    outcome: '✓ P&L Generated',
    desc: 'Live executive dashboards',
    icon: BarChart3,
    x: 720,
    y: 500,
  },
  {
    id: 'finance',
    title: 'Finance & Ledger',
    outcome: '✓ Payment Reconciled',
    desc: 'Automated books & GST audit',
    icon: TrendingUp,
    x: 280,
    y: 500,
  },
  {
    id: 'projects',
    title: 'Projects & Tasks',
    outcome: '✓ Milestone Cleared',
    desc: 'Critical dependencies tracked',
    icon: Briefcase,
    x: 130,
    y: 305,
  },
];

// Chaos Problem Badges in Scene 2
const chaosPills = [
  { text: 'Duplicate Entry', x: 330, y: 85, delay: 0.1 },
  { text: 'Stock Mismatch', x: 800, y: 210, delay: 0.3 },
  { text: 'Delayed Report', x: 580, y: 505, delay: 0.2 },
  { text: 'Missed Follow-up', x: 190, y: 220, delay: 0.4 },
  { text: 'Manual Calculation', x: 670, y: 90, delay: 0.25 },
  { text: 'Data Scattered', x: 420, y: 480, delay: 0.35 },
];

export default function ProblemSolution({ onOpenDemo }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ─── Auto-trigger on Viewport Entry ────────────────────────────────
  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentScene(3);
      setHasCompleted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isPlaying && !hasCompleted) {
          startAnimation();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasCompleted, isPlaying, prefersReducedMotion]);

  // ─── Sequence Orchestrator ─────────────────────────────────────────
  const startAnimation = (startFrom = 0) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(true);
    setHasCompleted(false);
    setCurrentScene(startFrom);

    const playScene = (sceneIndex) => {
      setCurrentScene(sceneIndex);
      if (sceneIndex < SCENES.length - 1) {
        timerRef.current = setTimeout(() => {
          playScene(sceneIndex + 1);
        }, SCENES[sceneIndex].duration);
      } else {
        // Final scene reached
        timerRef.current = setTimeout(() => {
          setIsPlaying(false);
          setHasCompleted(true);
        }, SCENES[sceneIndex].duration);
      }
    };

    playScene(startFrom);
  };

  const handleReplay = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    startAnimation(0);
  };

  const jumpToScene = (sceneIndex) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setCurrentScene(sceneIndex);
    if (sceneIndex === 3) {
      setHasCompleted(true);
    } else {
      setHasCompleted(false);
    }
  };

  const activeSceneInfo = SCENES[currentScene];

  return (
    <section
      ref={sectionRef}
      id="problem-solution-experience"
      className="py-16 sm:py-24 lg:py-28 bg-[#F7FAF8] relative w-full border-y border-slate-100/90 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-emerald-100/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-orbx relative z-10">

        {/* ─── Story Header (Updates seamlessly per Scene) ─────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          {/* Phase Badge */}
          <motion.div
            key={`badge-${currentScene}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
          >
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${activeSceneInfo.badgeColor}`}>
              {activeSceneInfo.badge}
            </span>
            <span className="text-slate-500 font-medium text-[11px]">
              Phase {currentScene + 1} of 4
            </span>
          </motion.div>

          {/* Dynamic Heading */}
          <motion.h2
            key={`title-${currentScene}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight min-h-[4rem] flex items-center justify-center"
          >
            {currentScene <= 1 ? (
              <span>
                {currentScene === 0 ? (
                  <>Your Business Data Is <span className="text-rose-600">Everywhere.</span></>
                ) : (
                  <>Too Many Tools. <span className="text-rose-600">Too Much Chaos.</span></>
                )}
              </span>
            ) : currentScene === 2 ? (
              <span>
                Then <span className="gradient-text">Everything Connects.</span>
              </span>
            ) : (
              <span>
                One Business. <span className="gradient-text">One Connected System.</span>
              </span>
            )}
          </motion.h2>

          {/* Dynamic Subtitle */}
          <motion.p
            key={`sub-${currentScene}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {activeSceneInfo.subtitle}
          </motion.p>
        </div>

        {/* ─── Interactive Storyline Scrubber / Progress Bar ───────── */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="grid grid-cols-4 gap-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200/80 shadow-sm">
            {SCENES.map((sc, idx) => {
              const isActive = currentScene === idx;
              const isPast = currentScene > idx;
              return (
                <button
                  key={sc.id}
                  onClick={() => jumpToScene(idx)}
                  className={`group relative px-2.5 py-2 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-[#023020] text-white shadow-md'
                      : isPast
                      ? 'text-slate-700 hover:bg-slate-100/80'
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">
                      0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] animate-ping" />
                    )}
                  </div>
                  <div className="text-xs font-bold truncate mt-0.5">
                    {sc.name.split('. ')[1]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── MAIN DESKTOP CINEMATIC CANVAS (>= 1024px) ─────────────── */}
        <div className="hidden lg:block relative w-full h-[620px] rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(2,48,32,0.06)] overflow-hidden">
          {/* Canvas Sub-grid Background */}
          <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

          {/* Canvas Central Watermark / Radial Glow */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
            currentScene >= 2 ? 'bg-[#00c87f]/15 scale-125' : 'bg-rose-500/5 scale-90'
          }`} />

          {/* ── SVG Connection Laser / Broken Network Layer ── */}
          <svg
            viewBox="0 0 1000 620"
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <defs>
              {/* Vibrant OrbX Emerald Gradient */}
              <linearGradient id="orbxLaserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00c87f" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#023020" stopOpacity="0.4" />
              </linearGradient>

              {/* Chaos Warning Red Gradient */}
              <linearGradient id="chaosErrorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
              </linearGradient>

              {/* Marker Arrow for Chaos */}
              <marker
                id="chaosArrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444" />
              </marker>
            </defs>

            {/* 1. SCENE 1 (THE CHAOS): Broken, Criss-Crossing Lines with Errors */}
            {currentScene === 1 && (
              <g className="transition-opacity duration-500">
                {/* WhatsApp (160, 90) -> Excel (500, 70) */}
                <path
                  d="M 230 100 Q 360 40 430 75"
                  stroke="url(#chaosErrorGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  fill="none"
                  markerEnd="url(#chaosArrow)"
                  className="animate-pulse"
                />
                {/* Excel (500, 70) -> Bills/Purchase (840, 90) */}
                <path
                  d="M 570 75 Q 700 45 770 95"
                  stroke="url(#chaosErrorGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  fill="none"
                  markerEnd="url(#chaosArrow)"
                />
                {/* Bills (840, 90) -> Register (870, 305) */}
                <path
                  d="M 840 135 L 870 260"
                  stroke="url(#chaosErrorGrad)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  fill="none"
                  markerEnd="url(#chaosArrow)"
                />
                {/* Biometric (720, 500) -> Tally (280, 500) */}
                <path
                  d="M 720 500 Q 500 550 350 505"
                  stroke="url(#chaosErrorGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  fill="none"
                  markerEnd="url(#chaosArrow)"
                />
                {/* Sticky Notes (130, 305) -> Excel (500, 70) */}
                <path
                  d="M 170 280 Q 300 180 430 85"
                  stroke="url(#chaosErrorGrad)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  markerEnd="url(#chaosArrow)"
                />
                {/* Register (870, 305) -> Tally (280, 500) */}
                <path
                  d="M 800 320 Q 550 420 350 490"
                  stroke="url(#chaosErrorGrad)"
                  strokeWidth="2"
                  strokeDasharray="7,5"
                  fill="none"
                  markerEnd="url(#chaosArrow)"
                />
              </g>
            )}

            {/* 2. SCENE 2 & 3: Clean Radiant Beams from OrbX Core to 7 Modules */}
            {currentScene >= 2 && (
              <g className="transition-all duration-700">
                {unifiedModules.map((mod, i) => {
                  const centerX = 500;
                  const centerY = 305;
                  return (
                    <g key={mod.id}>
                      {/* Base Connection Trunk */}
                      <motion.line
                        x1={centerX}
                        y1={centerY}
                        x2={mod.x}
                        y2={mod.y}
                        stroke="#00c87f"
                        strokeWidth="2.5"
                        strokeOpacity="0.4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                      />

                      {/* Moving Emerald Data Flow Particle */}
                      <motion.line
                        x1={centerX}
                        y1={centerY}
                        x2={mod.x}
                        y2={mod.y}
                        stroke="#00c87f"
                        strokeWidth="3.5"
                        strokeDasharray="14,140"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -308 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          ease: 'linear',
                          delay: i * 0.15,
                        }}
                      />

                      {/* Terminal Connection Node Glow */}
                      <circle
                        cx={mod.x}
                        cy={mod.y}
                        r="4"
                        fill="#00c87f"
                        className="animate-ping"
                        style={{ animationDuration: '3s' }}
                      />
                    </g>
                  );
                })}
              </g>
            )}
          </svg>

          {/* ── CENTER HUB (Siloed Void vs Radiant OrbX Core) ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <AnimatePresence mode="wait">
              {currentScene <= 1 ? (
                // SCENE 0 & 1: Siloed Empty Core
                <motion.div
                  key="center-siloed"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-44 rounded-full border-2 border-dashed border-slate-300/80 bg-slate-50/70 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center shadow-inner"
                >
                  <div className="w-11 h-11 rounded-2xl bg-slate-200/70 text-slate-400 flex items-center justify-center mb-2">
                    <Layers size={20} />
                  </div>
                  <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    No Central Core
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium leading-tight mt-1">
                    7 Isolated Data Silos
                  </div>
                  {currentScene === 1 && (
                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                      <AlertTriangle size={11} /> Manual Friction
                    </span>
                  )}
                </motion.div>
              ) : (
                // SCENE 2 & 3: OrbX Central Brain Hub
                <motion.div
                  key="center-orbx"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="relative group"
                >
                  {/* Glowing Radar Pulse Rings */}
                  <div className="absolute -inset-6 rounded-full bg-[#00c87f]/20 blur-xl animate-pulse pointer-events-none" />
                  <div className="absolute -inset-1 rounded-full border border-[#00c87f]/40 animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '2.5s' }} />

                  {/* Core Container */}
                  <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#023020] via-[#012418] to-[#01140e] border-2 border-[#00c87f]/60 shadow-[0_15px_40px_rgba(0,200,127,0.25)] flex flex-col items-center justify-center p-5 text-center text-white">
                    {/* OrbX Brand Logo */}
                    <div className="bg-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-sm border border-white/10 mb-2">
                      <img
                        src={logoDark}
                        alt="OrbX"
                        className="h-7 w-auto object-contain brightness-125"
                      />
                    </div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#00c87f] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] live-dot" />
                      Live Central Core
                    </div>
                    <div className="text-xs font-bold text-white/90 mt-0.5">
                      Intelligent Sync
                    </div>
                    <div className="mt-2 text-[10px] font-semibold text-white/60 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                      Single Source of Truth
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── SCENE 2: FLOATING CHAOS PILLS ── */}
          {currentScene === 1 && (
            <div className="absolute inset-0 pointer-events-none z-30">
              {chaosPills.map((pill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.6, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: pill.delay, duration: 0.25 }}
                  className="absolute bg-rose-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-rose-400/80"
                  style={{ left: `${(pill.x / 1000) * 100}%`, top: `${(pill.y / 520) * 100}%` }}
                >
                  <XCircle size={13} className="text-rose-200" />
                  <span>{pill.text}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* ── 7 PERIPHERAL MODULE NODES (Before vs After) ── */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {currentScene <= 1
              ? scatteredTools.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: currentScene === 1 ? [0, -3, 0] : [0, -4, 0],
                        rotate: currentScene === 1 ? [-1, 1, -1] : 0,
                      }}
                      transition={{
                        opacity: { duration: 0.3, delay: idx * 0.05 },
                        y: { repeat: Infinity, duration: 3 + idx * 0.4, ease: 'easeInOut' },
                        rotate: { repeat: Infinity, duration: 2.5 + idx * 0.3, ease: 'easeInOut' },
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                      style={{
                        left: `${(tool.x / 1000) * 100}%`,
                        top: `${(tool.y / 520) * 100}%`,
                      }}
                    >
                      <div
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 border-2 shadow-sm transition-all hover:shadow-md min-w-[155px] max-w-[180px]"
                        style={{ borderColor: currentScene === 1 ? '#fecaca' : tool.border }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: tool.bg, color: tool.color }}
                          >
                            <Icon size={16} />
                          </div>
                          <span
                            className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                              currentScene === 1
                                ? 'bg-rose-100 text-rose-700'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tool.badge}
                          </span>
                        </div>
                        <div className="font-bold text-xs text-slate-900 leading-tight truncate">
                          {tool.title}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight truncate mt-0.5">
                          {tool.sub}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              : unifiedModules.map((mod, idx) => {
                  const Icon = mod.icon;
                  return (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.07 }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                      style={{
                        left: `${(mod.x / 1000) * 100}%`,
                        top: `${(mod.y / 520) * 100}%`,
                      }}
                    >
                      <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border-2 border-emerald-300/80 shadow-[0_8px_20px_rgba(2,48,32,0.06)] hover:border-[#00a86b] hover:shadow-md transition-all duration-300 min-w-[165px] max-w-[190px]">
                        {/* Live Status Header */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-8 h-8 rounded-lg bg-[#023020] text-[#00c87f] flex items-center justify-center shadow-sm">
                            <Icon size={16} />
                          </div>
                          <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] live-dot" />
                            Live Sync
                          </span>
                        </div>

                        {/* Module Info */}
                        <div className="font-bold text-xs text-slate-900 leading-tight">
                          {mod.title}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate mt-0.5">
                          {mod.desc}
                        </div>

                        {/* Outcome Pill (Pop-in in Scene 4) */}
                        {currentScene === 3 && (
                          <motion.div
                            initial={{ opacity: 0, y: 4, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.25, delay: 0.3 + idx * 0.1 }}
                            className="mt-2 text-[10px] font-bold text-emerald-900 bg-emerald-100/90 px-2 py-1 rounded-lg flex items-center gap-1 border border-emerald-300/60"
                          >
                            <span>{mod.outcome}</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
          </div>
        </div>

        {/* ─── MOBILE & TABLET VERTICAL TRANSFORMATION (< 1024px) ─── */}
        <div className="lg:hidden bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
          {/* Scene 0 & 1: Mobile Scattered / Chaos Cards */}
          {currentScene <= 1 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Disconnected Apps
                </span>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                  currentScene === 1 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'
                }`}>
                  {currentScene === 1 ? 'Data Friction Alert' : '7 Isolated Tools'}
                </span>
              </div>

              {scatteredTools.slice(0, 5).map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                      currentScene === 1 ? 'bg-rose-50/50 border-rose-200' : 'bg-slate-50/70 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: tool.bg, color: tool.color }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{tool.title}</div>
                        <div className="text-[11px] text-slate-500 truncate max-w-[150px]">
                          {tool.sub}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
                      {tool.badge}
                    </span>
                  </motion.div>
                );
              })}

              {/* Mobile Chaos Warning Callout */}
              {currentScene === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-rose-600 text-white p-3 rounded-2xl text-center text-xs font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <AlertTriangle size={15} />
                  <span>Duplicate data, missed follow-ups & manual rework</span>
                </motion.div>
              )}
            </div>
          )}

          {/* Scene 2 & 3: Mobile OrbX Central Transformation */}
          {currentScene >= 2 && (
            <div className="space-y-4">
              {/* OrbX Center Core Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#023020] to-[#011a12] text-white p-5 rounded-2xl text-center border-2 border-[#00c87f]/60 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c87f]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white/10 px-4 py-1.5 rounded-xl backdrop-blur-sm border border-white/10 mb-2">
                    <img src={logoDark} alt="OrbX" className="h-7 w-auto object-contain brightness-125" />
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-[#00c87f] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] live-dot" />
                    OrbX Central Operating Core
                  </div>
                  <div className="text-[11px] text-white/70 mt-1">
                    All operations synchronized in real time
                  </div>
                </div>
              </motion.div>

              {/* Connected Modules List */}
              <div className="space-y-2.5">
                {unifiedModules.map((mod, idx) => {
                  const Icon = mod.icon;
                  return (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#023020] text-[#00c87f] flex items-center justify-center flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{mod.title}</div>
                          <div className="text-[10px] text-emerald-800 font-bold">
                            {mod.outcome}
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#023020] text-[#00c87f]">
                        Connected
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ─── FINAL FRAME CALLOUT & ACTIONS ─────────────────────────── */}
        <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-extrabold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00a86b]" />
              {currentScene <= 1
                ? 'Stop Managing Disconnected Data.'
                : 'Start Running a Connected Business with OrbX.'}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentScene <= 1
                ? 'Discover how automated workflows replace manual data silos.'
                : 'One single platform for your sales, accounts, stock, team, and projects.'}
            </p>
          </div>

          {/* Buttons: Primary CTA & Replay Animation */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <button
              onClick={handleReplay}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-sm transition-all flex items-center gap-1.5"
              title="Replay the 8-second transformation animation"
            >
              <RotateCcw size={13} className="text-slate-500" />
              <span>Replay Animation</span>
            </button>

            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-xl bg-[#023020] hover:bg-[#012418] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>See How OrbX Works</span>
              <ArrowRight size={13} className="text-[#00c87f]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
