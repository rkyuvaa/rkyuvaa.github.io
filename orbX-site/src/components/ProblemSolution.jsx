import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, FileSpreadsheet, FileText, BookOpen, Fingerprint,
  StickyNote, CreditCard, AlertTriangle, ArrowRight,
  RotateCcw, ShoppingCart, Users, Briefcase,
  TrendingUp, BarChart3, PackageCheck, Layers, XCircle
} from 'lucide-react';
import logoDark from '../assets/logo-orbx.png';

// ─── SVG canvas coordinate system ────────────────────────────────────
// All positions are in a 1000×580 viewBox.
// Cards are centered on their (cx, cy) point.
// OrbX core is at (500, 290) — exact center.

const VB_W = 1000;
const VB_H = 580;
const CX = 500;  // OrbX center X
const CY = 290;  // OrbX center Y

// ─── Scene definitions ────────────────────────────────────────────────
const SCENES = [
  {
    id: 0,
    name: '1. Scattered Data',
    subtitle: 'Sales. Purchase. Inventory. HR. Projects. Finance. All working separately.',
    badge: 'Without OrbX',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300/80',
    duration: 2300,
  },
  {
    id: 1,
    name: '2. The Chaos',
    subtitle: 'Information breaks down between disconnected systems. Duplication and blind spots multiply.',
    badge: 'Operational Friction',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    duration: 2200,
  },
  {
    id: 2,
    name: '3. OrbX Enters',
    subtitle: 'OrbX becomes the intelligent central brain, bridging every isolated tool into one live system.',
    badge: 'OrbX Intelligence',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    duration: 1800,
  },
  {
    id: 3,
    name: '4. Connected Flow',
    subtitle: 'OrbX brings your entire business operations together in real time.',
    badge: 'With OrbX Unified',
    badgeColor: 'bg-[#023020] text-emerald-300 border-emerald-500/30',
    duration: 3200,
  },
];

// ─── 7 Scattered Tools (Before) ──────────────────────────────────────
// Positions carefully inset inside the 1000×580 canvas with safe margins.
// Cards are ~160px wide × 85px tall in SVG space → half-width=80, half-height=42
// Safe zone: x ∈ [120, 880], y ∈ [60, 520]
const scatteredTools = [
  { id: 'whatsapp', title: 'WhatsApp Chats',    sub: 'Lost order messages',       icon: MessageSquare,  badge: '14 Unread',   color: '#10b981', bg: '#ecfdf5', border: '#a7f3d0', cx: 160, cy: 100 },
  { id: 'excel',    title: 'Excel Sheets',       sub: 'sales_v4_FINAL.xlsx',        icon: FileSpreadsheet,badge: 'Unsynced',    color: '#059669', bg: '#f0fdf4', border: '#bbf7d0', cx: 500, cy:  80 },
  { id: 'bills',    title: 'Paper Bills',        sub: 'Physical receipts #812',     icon: FileText,       badge: 'Manual Entry',color: '#f97316', bg: '#fff7ed', border: '#fed7aa', cx: 840, cy: 100 },
  { id: 'register', title: 'Physical Register',  sub: 'Warehouse ledger book',      icon: BookOpen,       badge: 'Stock Blind', color: '#eab308', bg: '#fefce8', border: '#fde68a', cx: 875, cy: 290 },
  { id: 'biometric',title: 'Biometric Dump',     sub: 'raw_punches.csv',            icon: Fingerprint,    badge: 'Manual OT',   color: '#a855f7', bg: '#faf5ff', border: '#e9d5ff', cx: 730, cy: 490 },
  { id: 'tally',    title: 'Separate Accounts',  sub: 'Disconnected tally files',   icon: CreditCard,     badge: 'Mismatch',    color: '#ec4899', bg: '#fdf2f8', border: '#fbcfe8', cx: 270, cy: 490 },
  { id: 'notes',    title: 'Sticky Notes & DM',  sub: 'Missed client follow-ups',   icon: StickyNote,     badge: 'Overdue',     color: '#ef4444', bg: '#fef2f2', border: '#fecaca', cx: 125, cy: 290 },
];

// ─── 7 Unified Modules (After) ───────────────────────────────────────
const unifiedModules = [
  { id: 'sales',     title: 'Sales & Orders',     outcome: '✓ Order Created',       desc: 'Instant quotation to dispatch', icon: ShoppingCart,   cx: 160, cy: 100 },
  { id: 'purchase',  title: 'Purchase & Vendors', outcome: '✓ Auto PO Sent',        desc: 'Live rate & vendor tracking',    icon: FileSpreadsheet,cx: 500, cy:  80 },
  { id: 'inventory', title: 'Inventory & Stock',   outcome: '✓ Stock Deducted',      desc: 'Real-time multi-bin balance',    icon: PackageCheck,   cx: 840, cy: 100 },
  { id: 'hr',        title: 'Attendance & HR',     outcome: '✓ Wages Computed',      desc: 'Biometric & wage automation',    icon: Users,          cx: 875, cy: 290 },
  { id: 'reports',   title: 'Management Reports',  outcome: '✓ P&L Generated',       desc: 'Live executive dashboards',      icon: BarChart3,      cx: 730, cy: 490 },
  { id: 'finance',   title: 'Finance & Ledger',    outcome: '✓ Payment Reconciled',  desc: 'Automated books & GST audit',    icon: TrendingUp,     cx: 270, cy: 490 },
  { id: 'projects',  title: 'Projects & Tasks',    outcome: '✓ Milestone Cleared',   desc: 'Critical dependencies tracked',  icon: Briefcase,      cx: 125, cy: 290 },
];

// Chaos problem badges — placed mid-space, not on cards
const chaosPills = [
  { text: 'Duplicate Entry',    svgX: 330, svgY: 185, delay: 0.10 },
  { text: 'Stock Mismatch',     svgX: 680, svgY: 185, delay: 0.30 },
  { text: 'Delayed Report',     svgX: 540, svgY: 410, delay: 0.20 },
  { text: 'Missed Follow-up',   svgX: 215, svgY: 385, delay: 0.40 },
  { text: 'Manual Calculation', svgX: 660, svgY: 385, delay: 0.25 },
  { text: 'Data Scattered',     svgX: 370, svgY: 410, delay: 0.35 },
];

// ─── SVG card dimensions (in viewBox units) ──────────────────────────
const CARD_W = 168;  // full width of card rectangle
const CARD_H =  86;  // full height
const CARD_RX =  12; // corner radius

// Helper: get card rect top-left from center coords
const cardRect = (cx, cy) => ({
  x: cx - CARD_W / 2,
  y: cy - CARD_H / 2,
  w: CARD_W,
  h: CARD_H,
});

export default function ProblemSolution({ onOpenDemo }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying]       = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const sectionRef = useRef(null);
  const timerRef   = useRef(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Viewport trigger ────────────────────────────────────────────────
  useEffect(() => {
    if (prefersReducedMotion) { setCurrentScene(3); setHasCompleted(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !isPlaying && !hasCompleted) startAnimation(); },
      { threshold: 0.20 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasCompleted, isPlaying, prefersReducedMotion]);

  // ── Sequence engine ─────────────────────────────────────────────────
  const startAnimation = (from = 0) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(true); setHasCompleted(false); setCurrentScene(from);

    const play = (idx) => {
      setCurrentScene(idx);
      if (idx < SCENES.length - 1) {
        timerRef.current = setTimeout(() => play(idx + 1), SCENES[idx].duration);
      } else {
        timerRef.current = setTimeout(() => { setIsPlaying(false); setHasCompleted(true); }, SCENES[idx].duration);
      }
    };
    play(from);
  };

  const handleReplay  = () => { if (timerRef.current) clearTimeout(timerRef.current); startAnimation(0); };
  const jumpToScene   = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false); setCurrentScene(idx);
    setHasCompleted(idx === 3);
  };

  const scene = SCENES[currentScene];
  const isBefore  = currentScene <= 1;
  const isUnified = currentScene >= 2;
  const nodes = isBefore ? scatteredTools : unifiedModules;

  return (
    <section
      ref={sectionRef}
      id="problem-solution-experience"
      className="bg-[#F7FAF8] relative w-full border-y border-slate-100/90 overflow-hidden"
      style={{ paddingTop: 'calc(var(--navbar-h, 68px) + 3.5rem)', paddingBottom: '3.5rem' }}
    >
      {/* CSS variable for navbar height — keeps spacing semantic */}
      <style>{`:root { --navbar-h: 68px; } @media (max-width:767px){ :root{ --navbar-h: 60px; } }`}</style>

      {/* Background decor */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-100/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-orbx relative z-10">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6 sm:mb-8">
          <motion.div
            key={`badge-${currentScene}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${scene.badgeColor}`}>
              {scene.badge}
            </span>
            <span className="text-slate-500 font-medium text-[11px]">Phase {currentScene + 1} of 4</span>
          </motion.div>

          <motion.h2
            key={`title-${currentScene}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            {currentScene === 0 && <>Your Business Data Is <span className="text-rose-600">Everywhere.</span></>}
            {currentScene === 1 && <>Too Many Tools. <span className="text-rose-600">Too Much Chaos.</span></>}
            {currentScene === 2 && <>Then <span className="gradient-text">Everything Connects.</span></>}
            {currentScene === 3 && <>One Business. <span className="gradient-text">One Connected System.</span></>}
          </motion.h2>

          <motion.p
            key={`sub-${currentScene}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.28, delay: 0.07 }}
            className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {scene.subtitle}
          </motion.p>
        </div>

        {/* ── Step nav scrubber ──────────────────────────────────────── */}
        <div className="max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200/80 shadow-sm">
            {SCENES.map((sc, idx) => {
              const active = currentScene === idx;
              const past   = currentScene > idx;
              return (
                <button
                  key={sc.id}
                  onClick={() => jumpToScene(idx)}
                  className={`relative px-2 py-2 rounded-xl text-left transition-all ${
                    active ? 'bg-[#023020] text-white shadow-md'
                    : past  ? 'text-slate-700 hover:bg-slate-100/80'
                    :         'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-75">0{idx + 1}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] animate-ping" />}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold truncate mt-0.5">{sc.name.split('. ')[1]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            DESKTOP CANVAS  (≥ 1024px)
            Uses a single SVG that is both the connection layer AND the
            card layout layer. All elements share the same 1000×580
            coordinate space so lines and cards are perfectly aligned.
        ═══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block w-full rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(2,48,32,0.06)] overflow-hidden relative">

          {/* Grid background */}
          <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

          {/* Radial ambient glow */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
              isUnified ? 'bg-[#00c87f]/12 scale-125' : 'bg-rose-500/5 scale-90'
            }`}
          />

          {/*
            The SVG uses viewBox="0 0 1000 580" and is 100% wide.
            All card positions, lines, foreignObjects share this space.
            The SVG grows/shrinks proportionally — no clipping ever.
          */}
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="w-full h-auto block"
            style={{ minHeight: 420, maxHeight: 680 }}
            aria-hidden="false"
          >
            <defs>
              <linearGradient id="chaosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#ef4444" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="orbxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#00c87f" stopOpacity="1"   />
                <stop offset="100%" stopColor="#023020" stopOpacity="0.5" />
              </linearGradient>
              <marker id="chaosArrow" viewBox="0 0 10 10" refX="6" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444" />
              </marker>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ── Ambient glow behind OrbX core ── */}
            {isUnified && (
              <motion.circle
                cx={CX} cy={CY} r={110}
                fill="#00c87f" fillOpacity="0.08"
                initial={{ r: 60, fillOpacity: 0 }}
                animate={{ r: 110, fillOpacity: 0.08 }}
                transition={{ duration: 0.7 }}
              />
            )}

            {/* ══════════════════════════════════════════════════════════
                SCENE 1 — CHAOS ARROWS between scattered tools
            ══════════════════════════════════════════════════════════ */}
            {currentScene === 1 && (
              <g>
                {/* WhatsApp → Excel */}
                <path d={`M ${scatteredTools[0].cx + 80} ${scatteredTools[0].cy} Q 350 50 ${scatteredTools[1].cx - 80} ${scatteredTools[1].cy}`}
                  stroke="url(#chaosGrad)" strokeWidth="2.2" strokeDasharray="6,4" fill="none"
                  markerEnd="url(#chaosArrow)" opacity="0.85" />
                {/* Excel → Bills */}
                <path d={`M ${scatteredTools[1].cx + 80} ${scatteredTools[1].cy} Q 680 50 ${scatteredTools[2].cx - 80} ${scatteredTools[2].cy}`}
                  stroke="url(#chaosGrad)" strokeWidth="2.2" strokeDasharray="6,4" fill="none"
                  markerEnd="url(#chaosArrow)" opacity="0.85" />
                {/* Bills → Register */}
                <path d={`M ${scatteredTools[2].cx} ${scatteredTools[2].cy + 43} L ${scatteredTools[3].cx - 80} ${scatteredTools[3].cy}`}
                  stroke="url(#chaosGrad)" strokeWidth="2" strokeDasharray="4,4" fill="none"
                  markerEnd="url(#chaosArrow)" opacity="0.80" />
                {/* Register → Biometric */}
                <path d={`M ${scatteredTools[3].cx - 30} ${scatteredTools[3].cy + 43} Q 810 420 ${scatteredTools[4].cx + 80} ${scatteredTools[4].cy}`}
                  stroke="url(#chaosGrad)" strokeWidth="2" strokeDasharray="5,4" fill="none"
                  markerEnd="url(#chaosArrow)" opacity="0.80" />
                {/* Biometric → Tally */}
                <path d={`M ${scatteredTools[4].cx - 80} ${scatteredTools[4].cy} Q 500 530 ${scatteredTools[5].cx + 80} ${scatteredTools[5].cy}`}
                  stroke="url(#chaosGrad)" strokeWidth="2.2" strokeDasharray="6,4" fill="none"
                  markerEnd="url(#chaosArrow)" opacity="0.85" />
                {/* Notes → Excel (cross) */}
                <path d={`M ${scatteredTools[6].cx + 80} ${scatteredTools[6].cy} Q 310 175 ${scatteredTools[1].cx - 80} ${scatteredTools[1].cy + 20}`}
                  stroke="url(#chaosGrad)" strokeWidth="1.8" strokeDasharray="5,5" fill="none"
                  markerEnd="url(#chaosArrow)" opacity="0.70" />

                {/* Chaos problem pills — rendered as SVG foreignObjects */}
                {chaosPills.map((pill, i) => (
                  <motion.foreignObject
                    key={pill.text}
                    x={pill.svgX - 72} y={pill.svgY - 12}
                    width="144" height="26"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: pill.delay, duration: 0.22 }}
                  >
                    <div xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        background: '#dc2626', color: '#fff',
                        fontSize: '10px', fontWeight: 800,
                        padding: '3px 8px', borderRadius: '999px',
                        boxShadow: '0 2px 8px rgba(220,38,38,0.35)',
                        whiteSpace: 'nowrap', width: 'fit-content',
                      }}
                    >
                      <span style={{ fontSize: 9 }}>✕</span> {pill.text}
                    </div>
                  </motion.foreignObject>
                ))}
              </g>
            )}

            {/* ══════════════════════════════════════════════════════════
                SCENE 2 & 3 — RADIANT CONNECTION LINES from OrbX center
            ══════════════════════════════════════════════════════════ */}
            {isUnified && unifiedModules.map((mod, i) => (
              <g key={`line-${mod.id}`}>
                {/* Trunk */}
                <motion.line
                  x1={CX} y1={CY} x2={mod.cx} y2={mod.cy}
                  stroke="#00c87f" strokeWidth="2" strokeOpacity="0.35"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                />
                {/* Animated particle */}
                <motion.line
                  x1={CX} y1={CY} x2={mod.cx} y2={mod.cy}
                  stroke="#00c87f" strokeWidth="3" strokeDasharray="12,200" strokeLinecap="round"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -320 }}
                  transition={{ repeat: Infinity, duration: 1.7, ease: 'linear', delay: i * 0.14 }}
                />
                {/* Node dot at module center */}
                <circle cx={mod.cx} cy={mod.cy} r="4.5" fill="#00c87f" opacity="0.7" />
              </g>
            ))}

            {/* ══════════════════════════════════════════════════════════
                MODULE / TOOL CARDS — rendered as SVG foreignObjects
                Positioned precisely by cx/cy in the same coordinate space.
            ══════════════════════════════════════════════════════════ */}
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const r = cardRect(node.cx, node.cy);
              const isTool = isBefore;
              return (
                <motion.foreignObject
                  key={node.id}
                  x={r.x} y={r.y} width={r.w} height={r.h}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: isTool && currentScene === 0 ? [0, -3, 0] : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.28, delay: idx * 0.05 },
                    scale:   { duration: 0.28, delay: idx * 0.05 },
                    y: isTool ? { repeat: Infinity, duration: 3 + idx * 0.35, ease: 'easeInOut' } : {},
                  }}
                  style={{ overflow: 'visible' }}
                >
                  {isTool ? (
                    /* BEFORE card */
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        width: r.w, height: r.h,
                        background: 'rgba(255,255,255,0.97)',
                        borderRadius: 12,
                        border: `2px solid ${currentScene === 1 ? '#fecaca' : node.border}`,
                        padding: '8px 10px',
                        boxShadow: '0 4px 14px rgba(2,48,32,0.05)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: 7,
                          background: node.bg, color: node.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Icon size={14} />
                        </div>
                        <span style={{
                          fontSize: 8, fontWeight: 800, letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          background: currentScene === 1 ? '#fee2e2' : '#f1f5f9',
                          color: currentScene === 1 ? '#b91c1c' : '#475569',
                          padding: '2px 6px', borderRadius: 999,
                        }}>
                          {node.badge}
                        </span>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {node.title}
                        </div>
                        <div style={{ fontSize: 9.5, color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 1 }}>
                          {node.sub}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* AFTER (unified) card */
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        width: r.w, height: r.h,
                        background: 'rgba(255,255,255,0.97)',
                        borderRadius: 12,
                        border: '2px solid #6ee7b7',
                        padding: '8px 10px',
                        boxShadow: '0 4px 20px rgba(2,48,32,0.07)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: 7,
                          background: '#023020', color: '#00c87f',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Icon size={14} />
                        </div>
                        <span style={{
                          fontSize: 8, fontWeight: 800, letterSpacing: '0.04em',
                          display: 'flex', alignItems: 'center', gap: 3,
                          background: '#ecfdf5', color: '#065f46',
                          padding: '2px 6px', borderRadius: 999,
                          border: '1px solid #a7f3d0',
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00a86b', display: 'inline-block' }} />
                          Live
                        </span>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {node.title}
                        </div>
                        {currentScene === 3 ? (
                          <motion.div
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.22, delay: 0.25 + idx * 0.08 }}
                            style={{ fontSize: 9, fontWeight: 800, color: '#065f46', background: '#d1fae5', padding: '2px 6px', borderRadius: 6, marginTop: 3, display: 'inline-block' }}
                          >
                            {node.outcome}
                          </motion.div>
                        ) : (
                          <div style={{ fontSize: 9.5, color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 1 }}>
                            {node.desc}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.foreignObject>
              );
            })}

            {/* ══════════════════════════════════════════════════════════
                CENTRAL HUB — Always at exact SVG center (CX, CY)
            ══════════════════════════════════════════════════════════ */}
            <AnimatePresence mode="wait">
              {!isUnified ? (
                /* Siloed empty core */
                <motion.foreignObject
                  key="hub-siloed"
                  x={CX - 88} y={CY - 88} width={176} height={176}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.28 }}
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      width: 176, height: 176, borderRadius: '50%',
                      border: '2px dashed #cbd5e1',
                      background: 'rgba(248,250,252,0.8)',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      textAlign: 'center', padding: 16, boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ color: '#94a3b8', marginBottom: 6 }}>
                      <Layers size={20} />
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      No Central Core
                    </div>
                    <div style={{ fontSize: 9.5, color: '#94a3b8', marginTop: 3, lineHeight: 1.35 }}>
                      7 Isolated Data Silos
                    </div>
                    {currentScene === 1 && (
                      <div style={{
                        marginTop: 6, fontSize: 8.5, fontWeight: 800, color: '#b91c1c',
                        background: '#fef2f2', padding: '2px 7px', borderRadius: 999,
                        border: '1px solid #fecaca', display: 'flex', alignItems: 'center', gap: 3,
                      }}>
                        ⚠ Manual Friction
                      </div>
                    )}
                  </div>
                </motion.foreignObject>
              ) : (
                /* OrbX radiant core */
                <motion.g key="hub-orbx">
                  {/* Outer pulse ring */}
                  <motion.circle
                    cx={CX} cy={CY} r={105}
                    stroke="#00c87f" strokeWidth="1.2" strokeOpacity="0.35"
                    fill="none"
                    animate={{ r: [95, 108, 95], strokeOpacity: [0.35, 0.1, 0.35] }}
                    transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                  />
                  <motion.foreignObject
                    key="hub-orbx-fo"
                    x={CX - 92} y={CY - 92} width={184} height={184}
                    initial={{ opacity: 0, scale: 0.72 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                  >
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{
                        width: 184, height: 184, borderRadius: '50%',
                        background: 'linear-gradient(145deg, #023020, #012418, #01140e)',
                        border: '2px solid rgba(0,200,127,0.55)',
                        boxShadow: '0 12px 40px rgba(0,200,127,0.22)',
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        textAlign: 'center', padding: 16, boxSizing: 'border-box',
                        color: '#fff',
                      }}
                    >
                      <div style={{
                        background: 'rgba(255,255,255,0.1)', padding: '4px 12px',
                        borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)',
                        marginBottom: 7,
                      }}>
                        <img src={logoDark} alt="OrbX" style={{ height: 24, width: 'auto', filter: 'brightness(1.3)', display: 'block' }} />
                      </div>
                      <div style={{ fontSize: 8.5, fontWeight: 800, color: '#00c87f', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00c87f', display: 'inline-block', animation: 'pulse-live 2s ease-in-out infinite' }} />
                        Live Central Core
                      </div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginTop: 2 }}>
                        Intelligent Sync
                      </div>
                      <div style={{
                        marginTop: 6, fontSize: 8.5, fontWeight: 600, color: 'rgba(255,255,255,0.55)',
                        background: 'rgba(255,255,255,0.05)', padding: '2px 8px',
                        borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)',
                      }}>
                        Single Source of Truth
                      </div>
                    </div>
                  </motion.foreignObject>
                </motion.g>
              )}
            </AnimatePresence>
          </svg>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            TABLET (768–1023px) — compact radial, smaller cards
        ═══════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block lg:hidden w-full rounded-3xl bg-white border border-slate-200/80 shadow-sm overflow-hidden relative">
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="w-full h-auto block"
            style={{ minHeight: 340 }}
          >
            <defs>
              <linearGradient id="chaosGradT" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Same SVG structure — inherits same viewBox → scales proportionally */}
            {isUnified && unifiedModules.map((mod, i) => (
              <g key={`t-line-${mod.id}`}>
                <line x1={CX} y1={CY} x2={mod.cx} y2={mod.cy}
                  stroke="#00c87f" strokeWidth="1.8" strokeOpacity="0.3" />
                <motion.line
                  x1={CX} y1={CY} x2={mod.cx} y2={mod.cy}
                  stroke="#00c87f" strokeWidth="2.5" strokeDasharray="10,200" strokeLinecap="round"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -300 }}
                  transition={{ repeat: Infinity, duration: 1.9, ease: 'linear', delay: i * 0.13 }}
                />
              </g>
            ))}

            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const r = cardRect(node.cx, node.cy);
              return (
                <motion.foreignObject
                  key={`t-${node.id}`}
                  x={r.x} y={r.y} width={r.w} height={r.h}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.28, delay: idx * 0.05 }}
                >
                  <div xmlns="http://www.w3.org/1999/xhtml" style={{
                    width: r.w, height: r.h,
                    background: 'rgba(255,255,255,0.97)',
                    borderRadius: 12,
                    border: `2px solid ${isBefore ? (currentScene === 1 ? '#fecaca' : node.border) : '#6ee7b7'}`,
                    padding: '7px 9px', boxSizing: 'border-box',
                    boxShadow: '0 3px 10px rgba(2,48,32,0.05)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{
                        width: 26, height: 26, borderRadius: 6,
                        background: isBefore ? node.bg : '#023020',
                        color: isBefore ? node.color : '#00c87f',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={13} />
                      </div>
                      <span style={{
                        fontSize: 7.5, fontWeight: 800,
                        background: isBefore ? (currentScene === 1 ? '#fee2e2' : '#f1f5f9') : '#ecfdf5',
                        color: isBefore ? (currentScene === 1 ? '#b91c1c' : '#475569') : '#065f46',
                        padding: '1px 5px', borderRadius: 999,
                      }}>
                        {isBefore ? node.badge : 'Live'}
                      </span>
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {node.title}
                    </div>
                  </div>
                </motion.foreignObject>
              );
            })}

            {/* Center hub — tablet */}
            {!isUnified ? (
              <foreignObject x={CX - 70} y={CY - 70} width={140} height={140}>
                <div xmlns="http://www.w3.org/1999/xhtml" style={{
                  width: 140, height: 140, borderRadius: '50%',
                  border: '2px dashed #cbd5e1', background: 'rgba(248,250,252,0.8)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  textAlign: 'center', padding: 12, boxSizing: 'border-box',
                }}>
                  <div style={{ color: '#94a3b8', marginBottom: 4 }}><Layers size={17} /></div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>No Core</div>
                  <div style={{ fontSize: 8.5, color: '#94a3b8', marginTop: 2 }}>7 Silos</div>
                </div>
              </foreignObject>
            ) : (
              <motion.foreignObject
                x={CX - 80} y={CY - 80} width={160} height={160}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" style={{
                  width: 160, height: 160, borderRadius: '50%',
                  background: 'linear-gradient(145deg, #023020, #012418)',
                  border: '2px solid rgba(0,200,127,0.5)',
                  boxShadow: '0 10px 30px rgba(0,200,127,0.2)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  textAlign: 'center', padding: 14, boxSizing: 'border-box', color: '#fff',
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 10px', borderRadius: 8, marginBottom: 5 }}>
                    <img src={logoDark} alt="OrbX" style={{ height: 20, width: 'auto', filter: 'brightness(1.3)', display: 'block' }} />
                  </div>
                  <div style={{ fontSize: 7.5, fontWeight: 800, color: '#00c87f', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Live Core</div>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>Intelligent Sync</div>
                </div>
              </motion.foreignObject>
            )}
          </svg>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MOBILE  (< 768px) — vertical animated flow
        ═══════════════════════════════════════════════════════════════ */}
        <div className="md:hidden space-y-3">
          {/* Scenes 0–1: scattered vertical list */}
          {isBefore && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Disconnected Apps</span>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                  currentScene === 1 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'
                }`}>
                  {currentScene === 1 ? 'Data Friction' : '7 Isolated Tools'}
                </span>
              </div>

              {scatteredTools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`p-3 rounded-2xl border flex items-center justify-between ${
                      currentScene === 1 ? 'bg-rose-50/50 border-rose-200' : 'bg-slate-50/70 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: tool.bg, color: tool.color }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{tool.title}</div>
                        <div className="text-[10px] text-slate-500 truncate max-w-[140px]">{tool.sub}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                      {tool.badge}
                    </span>
                  </motion.div>
                );
              })}

              {currentScene === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-rose-600 text-white p-3 rounded-2xl text-center text-xs font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <AlertTriangle size={14} />
                  <span>Duplicate data, missed follow-ups & manual rework</span>
                </motion.div>
              )}
            </div>
          )}

          {/* Scenes 2–3: OrbX + connected modules */}
          {isUnified && (
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#023020] to-[#011a12] text-white p-5 rounded-2xl text-center border-2 border-[#00c87f]/60 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#00c87f]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white/10 px-4 py-1.5 rounded-xl border border-white/10 mb-2">
                    <img src={logoDark} alt="OrbX" className="h-6 w-auto object-contain brightness-125" />
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-[#00c87f] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] live-dot" />
                    OrbX Central Core
                  </div>
                  <div className="text-[11px] text-white/70 mt-1">All operations synchronized in real time</div>
                </div>
              </motion.div>

              <div className="space-y-2">
                {unifiedModules.map((mod, idx) => {
                  const Icon = mod.icon;
                  return (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#023020] text-[#00c87f] flex items-center justify-center flex-shrink-0">
                          <Icon size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{mod.title}</div>
                          <div className="text-[9px] text-emerald-800 font-bold">{mod.outcome}</div>
                        </div>
                      </div>
                      <span className="text-[8px] font-extrabold px-2 py-0.5 rounded-full bg-[#023020] text-[#00c87f]">
                        Connected
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ── Footer CTAs ─────────────────────────────────────────────── */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-extrabold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00a86b]" />
              {isBefore ? 'Stop Managing Disconnected Data.' : 'Start Running a Connected Business with OrbX.'}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {isBefore
                ? 'Discover how automated workflows replace manual data silos.'
                : 'One single platform for your sales, accounts, stock, team, and projects.'}
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <button
              onClick={handleReplay}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-sm transition-all flex items-center gap-1.5"
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
