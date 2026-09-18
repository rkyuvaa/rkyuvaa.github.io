import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, RotateCcw, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

/* ─── Friendly Companion Avatar SVG ─── */
function AssistantAvatar({ size = 44 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-white border-2 border-[#023020]/20 flex items-center justify-center shadow-inner relative overflow-hidden flex-shrink-0"
    >
      <svg width={size * 0.75} height={size * 0.45} viewBox="0 0 60 30" fill="none">
        {/* Left eye */}
        <circle cx="12" cy="15" r="5" fill="#023020" />
        {/* Right eye */}
        <circle cx="48" cy="15" r="5" fill="#023020" />
        {/* Connecting line */}
        <line x1="14" y1="15" x2="46" y2="15" stroke="#023020" strokeWidth="2.5" strokeLinecap="round" />
        {/* Gentle smile */}
        <path d="M26 21 Q30 24 34 21" stroke="#00a86b" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
      {/* Soft blush accents */}
      <span className="absolute left-1.5 bottom-1.5 w-2 h-1 bg-rose-200 rounded-full opacity-60 pointer-events-none" />
      <span className="absolute right-1.5 bottom-1.5 w-2 h-1 bg-rose-200 rounded-full opacity-60 pointer-events-none" />
    </div>
  );
}

/* ─── Comprehensive Knowledge Base from Full Website ─── */
const KNOWLEDGE = [
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'rate', 'how much', 'fee', 'charge', '1000', '2000', 'plan', 'subscription', 'month'],
    title: 'Pricing from ₹1,000/mo',
    text: "OrbX pricing is simple, transparent, and built for growing Indian businesses:\n\n• **Core Business Access**: Starting from **₹1,000 / month**.\n• **Complete Business Suite**: **₹2,000 / month** for all-inclusive platform access across all 10+ modules.\n• **Custom Enterprise Tier**: Custom pricing for multi-plant factory sync, private servers, and custom SLA.\n\n✅ Zero hidden setup fees\n✅ Free onboarding assistance included\n✅ Cancel anytime\n✅ GST invoice ready",
    chips: ['Book a Live Demo', 'Explore Modules', 'Talk to Sales'],
  },
  {
    id: 'demo',
    keywords: ['demo', 'trial', 'test', 'schedule', 'book', 'walkthrough', 'presentation'],
    title: 'Book a Live Demo',
    text: "We provide a tailored **20-minute live demonstration** focused on your specific industry and daily workflows.\n\nClick the button below to book a slot directly, or reach out:\n\n📞 **+91 97873 17484**\n📧 **hello@orbx.in**",
    chips: ['Pricing from ₹1,000', 'Explore Modules', 'Which industries?'],
    action: { label: 'Open Booking Form', type: 'demo' },
  },
  {
    id: 'modules',
    keywords: ['module', 'modules', 'feature', 'features', 'product', 'products', 'software', 'platform', 'what is orbx', 'overview'],
    title: 'Explore Modules',
    text: "OrbX is a unified ERP suite with **10 specialized modules** that operate as a synchronized ecosystem:\n\n1. 🏭 **OrbX ERP** — Production BOM, MRP, machine routing & batch tracking\n2. 💼 **Business Suite** — Sales quotes, procurement pipelines & vendor directory\n3. 👥 **HRMS & Payroll** — Biometric/GPS attendance, auto OT, LOP & wage slips\n4. 💳 **My Ledger** — Cash flow, day-book, real-time GST reports & bank reconciliation\n5. 🍽️ **Restaurant Suite** — Table layouts, Kitchen Display (KDS) & recipe costing\n6. 📅 **Project Management** — WBS milestones, Kanban & task dependencies\n7. 📦 **Multi-Warehouse Inventory** — Live stock balances & barcode audits\n8. 🚗 **Automotive Workshop** — Job cards & chassis history\n9. 🏗️ **Construction Suite** — Job costing & contractor billing\n10. 📊 **Executive Dashboard** — Live revenue KPIs & business health feeds",
    chips: ['Pricing from ₹1,000', 'Manufacturing / BOM', 'HRMS & Payroll', 'Book a Live Demo'],
  },
  {
    id: 'manufacturing',
    keywords: ['manufacturing', 'production', 'bom', 'bill of material', 'mrp', 'factory', 'plant', 'assembly', 'batch', 'shopfloor'],
    title: 'Manufacturing & BOM',
    text: "OrbX Manufacturing & Production delivers:\n\n• **Multi-level Bill of Materials (BOM)** with precise raw material costing\n• **Material Requirements Planning (MRP)** triggered automatically from accepted sales orders\n• **Shop-floor routing** & machine work-order scheduling\n• **Batch tracking & expiry control** to prevent scrap loss\n• Live production progress vs estimated lead time",
    chips: ['Explore Modules', 'Pricing from ₹1,000', 'Book a Live Demo'],
  },
  {
    id: 'hrms',
    keywords: ['hrms', 'hr', 'attendance', 'payroll', 'wage', 'salary', 'biometric', 'gps', 'leave', 'overtime', 'ot', 'lop', 'pf', 'esi', 'staff', 'employee'],
    title: 'HRMS & Attendance',
    text: "OrbX HRMS eliminates manual payroll calculation with a 6-step automated wage pipeline:\n\n• **Biometric & GPS punch capture** directly synced to the cloud\n• Automatic tracking of **Overtime (OT)**, Loss of Pay (LOP), and comp-offs\n• Pre-configured compliance formulas for **PF, ESI, and Professional Tax**\n• One-click monthly salary slip generation and bank disbursement reports\n• Self-service mobile punch & leave request workflows for field staff",
    chips: ['Explore Modules', 'Pricing from ₹1,000', 'Book a Live Demo'],
  },
  {
    id: 'restaurant',
    keywords: ['restaurant', 'dining', 'table', 'kds', 'kitchen', 'food', 'pos', 'recipe', 'cafe', 'bar', 'takeaway', 'bill'],
    title: 'Restaurant Management',
    text: "OrbX Restaurant Management provides full front-of-house to back-of-house operations:\n\n• **Interactive Visual Table Layout** with live occupied, reserved, and billing states\n• **Live Kitchen Display System (KDS)** with instant order dispatch & prep timers\n• **Menu Recipe BOM** tracking food ingredient consumption down to the gram\n• Quick touch-screen POS supporting split bills, room charges, and digital payments",
    chips: ['Explore Modules', 'Book a Live Demo', 'Pricing from ₹1,000'],
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'task', 'tasks', 'milestone', 'kanban', 'gantt', 'wbs', 'dependency', 'fs', 'ss', 'ff', 'sf'],
    title: 'Project Management',
    text: "OrbX Project Management is built for complex deliveries:\n\n• **Work Breakdown Structure (WBS)** with parent-child deliverables\n• **4 task dependency models**: Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF)\n• Drag-and-drop **Interactive Kanban boards** by sprint or department\n• Resource workload tracking and milestone milestone invoicing",
    chips: ['Explore Modules', 'Book a Live Demo'],
  },
  {
    id: 'finance',
    keywords: ['finance', 'accounting', 'ledger', 'tally', 'gst', 'tax', 'invoice', 'invoicing', 'bill', 'bank', 'cash', 'reconciliation'],
    title: 'Finance & Ledger',
    text: "OrbX My Ledger connects real-time financial tracking directly to operations:\n\n• Auto-generated **GST-compliant tax invoices** & E-Way bill ready exports\n• Real-time **Cash Flow & Day Book** updated the moment orders or purchases happen\n• Automated bank statement reconciliation\n• Customer credit aging & outstanding payment follow-ups\n• Eliminates disconnected offline accounting files",
    chips: ['Explore Modules', 'Pricing from ₹1,000', 'Book a Live Demo'],
  },
  {
    id: 'inventory',
    keywords: ['inventory', 'stock', 'warehouse', 'warehouses', 'godown', 'barcode', 'sku', 'transfer', 'stockout'],
    title: 'Inventory & Stock',
    text: "OrbX Multi-Warehouse Inventory gives 100% stock visibility:\n\n• Multi-location & godown stock balances with real-time transfer slips\n• Automated **minimum stock level alerts** & reorder recommendations\n• Barcode scanning for fast receipt, dispatch, and physical audits\n• Batch and serial number tracking for warranty and defect quarantine",
    chips: ['Explore Modules', 'Pricing from ₹1,000'],
  },
  {
    id: 'industries',
    keywords: ['industry', 'industries', 'sector', 'manufacturing', 'construction', 'automotive', 'retail', 'services'],
    title: 'Which Industries?',
    text: "OrbX is tailored for 6 core Indian industries:\n\n1. 🏭 **Manufacturing** — MRP, shopfloor routing, BOM costing & batch tracking\n2. 🏗️ **Construction** — Job costing, site progress, contractor billing & materials\n3. 🚗 **Automotive** — Chassis/serial tracking, workshop job cards & parts inventory\n4. 🍽️ **Restaurant** — Dine-in tables, kitchen dispatch, recipe BOM & daily margins\n5. 🛍️ **Retail & Wholesale** — POS checkout, multi-store stock & barcode audits\n6. 🛠️ **Services** — Milestone invoicing, timesheets, field dispatch & SLA tickets",
    chips: ['Pricing from ₹1,000', 'Book a Live Demo', 'Explore Modules'],
  },
  {
    id: 'security',
    keywords: ['security', 'safe', 'cloud', 'backup', 'backups', 'privacy', 'server', 'hosting', 'uptime', 'sla', 'reliable'],
    title: 'Security & Infrastructure',
    text: "OrbX provides enterprise-grade operational reliability:\n\n• **99.9% Uptime Guarantee** on redundant cloud infrastructure\n• **Automated Daily Backups** with snapshot recovery\n• **Bank-grade 256-bit SSL Encryption** for all in-transit and at-rest data\n• **Granular Role-Based Permissions** (prevent employees from viewing unauthorized financial or salary data)",
    chips: ['Pricing from ₹1,000', 'Book a Live Demo'],
  },
  {
    id: 'howitworks',
    keywords: ['how it works', 'implementation', 'onboarding', 'setup', 'migration', 'training', 'start'],
    title: 'How It Works / Onboarding',
    text: "Transitioning to OrbX is frictionless via our 4-step implementation plan:\n\n1. **Business Discovery** — Map your existing workflows and pain points\n2. **Master Data Migration** — Safely import your customers, vendors, items, and opening balances\n3. **Workflow Pilot** — Test sales, inventory, and payroll with key team members\n4. **Go-Live & Handover** — Company-wide launch backed by dedicated support",
    chips: ['Book a Live Demo', 'Pricing from ₹1,000'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'call', 'phone', 'number', 'email', 'talk', 'human', 'support', 'office', 'address', 'location', 'whatsapp'],
    title: 'Contact Information',
    text: "Our solutions engineering team is based in Tamil Nadu and ready to assist:\n\n📞 Phone: **+91 97873 17484**\n📧 Email: **hello@orbx.in**\n🌐 Website: **orbx.in**\n📍 Head Office: Coimbatore / Tamil Nadu, India\n⏰ Hours: Monday – Saturday, 9:00 AM – 6:30 PM IST",
    chips: ['Book a Live Demo', 'Pricing from ₹1,000'],
  },
  {
    id: 'casual',
    keywords: ['what doing', 'what do you do', 'who are you', 'what are you', 'how are you', 'hi', 'hello', 'hey', 'help', 'good morning', 'good afternoon'],
    title: 'OrbX Assistant Capabilities',
    text: "Hello! I am your **OrbX Assistant**. 😊\n\nI am here to help you learn about OrbX, compare pricing plans, check features for your specific industry, or book a live product demonstration.\n\nWhat would you like to explore first?",
    chips: ['Pricing from ₹1,000', 'Explore Modules', 'Which industries?', 'Book a Live Demo'],
  },
];

const DEFAULT_GREETING = {
  text: "Hello! I am OrbX Assistant — your personal business companion. 🤖✨\n\nI can help you explore our 10+ ERP modules, review pricing starting from ₹1,000/month, check industry solutions, or schedule a live platform demo.\n\nHow can I help your business today?",
  chips: ['Pricing from ₹1,000', 'Explore Modules', 'Which industries?', 'Book a Live Demo'],
};

function formatText(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i} className="block min-h-[1.1em]">
        {parts.map((p, j) => {
          if (p.startsWith('**') && p.endsWith('**')) {
            return <strong key={j} className="font-bold text-slate-900">{p.slice(2, -2)}</strong>;
          }
          return p;
        })}
      </span>
    );
  });
}

export default function OrbXAssistant({ onOpenDemo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', ...DEFAULT_GREETING }]);
  const [chips, setChips] = useState(DEFAULT_GREETING.chips);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [showNudge, setShowNudge] = useState(false);
  const chatEndRef = useRef(null);

  // Initial nudge bubble after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNudge(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Match query against knowledge base
  const findAnswer = (query) => {
    const q = query.toLowerCase().trim();

    // Check exact title match first
    const exact = KNOWLEDGE.find((k) => k.title.toLowerCase() === q);
    if (exact) return exact;

    // Score based on keywords
    let bestMatch = null;
    let highestScore = 0;

    for (const item of KNOWLEDGE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (q.includes(kw)) {
          score += kw.length; // longer matches count more
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (highestScore > 0 && bestMatch) {
      return bestMatch;
    }

    // Friendly fallback response (never says "I have recorded...")
    return {
      text: "I want to make sure you get the exact information you need! OrbX is a complete business management platform uniting Sales, Inventory, Production, HRMS, and Accounting.\n\nWould you like to explore our modules, check our pricing (starting from ₹1,000/mo), or speak directly with our solutions team?",
      chips: ['Pricing from ₹1,000', 'Explore Modules', 'Book a Live Demo', 'Contact Information'],
    };
  };

  const handleSelectChip = (chipText) => {
    const userMsg = { from: 'user', text: chipText };
    setMessages((prev) => [...prev, userMsg]);
    setChips([]);
    setIsTyping(true);

    const answer = findAnswer(chipText);

    if (answer.action?.type === 'demo') {
      onOpenDemo?.();
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', ...answer }]);
      setChips(answer.chips || DEFAULT_GREETING.chips);
      setIsTyping(false);
    }, 650);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputVal.trim()) return;
    const query = inputVal.trim();
    setInputVal('');

    const userMsg = { from: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setChips([]);
    setIsTyping(true);

    const answer = findAnswer(query);

    if (answer.action?.type === 'demo') {
      onOpenDemo?.();
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', ...answer }]);
      setChips(answer.chips || DEFAULT_GREETING.chips);
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    setMessages([{ from: 'bot', ...DEFAULT_GREETING }]);
    setChips(DEFAULT_GREETING.chips);
  };

  return (
    <>
      {/* ── Nudge Speech Bubble ── */}
      <AnimatePresence>
        {showNudge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-24 right-6 z-[190] max-w-[270px] bg-white rounded-2xl p-3.5 shadow-2xl border border-emerald-100/90 cursor-pointer group"
            onClick={() => {
              setIsOpen(true);
              setShowNudge(false);
            }}
          >
            <div className="flex items-start gap-2.5">
              <AssistantAvatar size={34} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#023020]">OrbX Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] animate-ping" />
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Hello! How can I help with your business ERP needs today?
                </p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-[#00a86b]">
              <span>Ask anything about OrbX</span>
              <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Bot Button (bottom-6 right-6) ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, type: 'spring', stiffness: 220 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => {
          setIsOpen((prev) => !prev);
          setShowNudge(false);
        }}
        aria-label="Toggle OrbX Assistant"
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center shadow-2xl shadow-[#023020]/25 border-2 border-[#023020]/20 transition-all group overflow-hidden cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-[#023020]" />
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <AssistantAvatar size={42} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live active ring */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#00a86b] border-2 border-white" />
      </motion.button>

      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[195] w-[calc(100vw-32px)] sm:w-[410px] max-h-[620px] h-[560px] bg-white rounded-3xl shadow-[0_25px_70px_rgba(2,48,32,0.22)] border border-slate-200/90 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#023020] text-white p-4 sm:p-5 flex items-center justify-between relative overflow-hidden flex-shrink-0">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00a86b]/20 rounded-bl-full pointer-events-none blur-xl" />

              <div className="flex items-center gap-3 relative z-10">
                <AssistantAvatar size={42} />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm text-white tracking-tight">OrbX Assistant</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00a86b]/20 text-[#00c87f] font-semibold flex items-center gap-1">
                      <Sparkles size={10} />
                      AI Assistant
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] animate-pulse" />
                    Online · Instant Answers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 relative z-10">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Sub-banner */}
            <div className="bg-[#ecfdf5] border-b border-emerald-100 px-4 py-2 flex items-center justify-between text-[11px] text-[#023020] font-medium flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#00a86b]" />
                <span>One Platform. Your Entire Business.</span>
              </div>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7FAF8]/70">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.from === 'bot' && <AssistantAvatar size={28} />}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-sm ${
                      msg.from === 'user'
                        ? 'bg-[#023020] text-white rounded-br-xs'
                        : 'bg-white border border-slate-200/80 text-slate-700 rounded-bl-xs'
                    }`}
                  >
                    <div className="space-y-1">{formatText(msg.text)}</div>

                    {/* Optional embedded action button */}
                    {msg.action?.label && (
                      <button
                        onClick={() => {
                          if (msg.action.type === 'demo') onOpenDemo?.();
                        }}
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#00a86b] hover:bg-[#00925d] text-white font-bold text-[11px] transition-colors shadow-sm cursor-pointer"
                      >
                        <Calendar size={12} />
                        <span>{msg.action.label}</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-end gap-2 justify-start">
                  <AssistantAvatar size={28} />
                  <div className="bg-white border border-slate-200/80 rounded-2xl rounded-bl-xs px-4 py-3 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#00a86b] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#00a86b] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#00a86b] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Action Chips */}
            {chips && chips.length > 0 && (
              <div className="px-4 py-2.5 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
                {chips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectChip(chip)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#F7FAF8] hover:bg-[#023020] hover:text-white text-[11px] font-semibold text-slate-700 border border-slate-200 hover:border-[#023020] transition-all flex-shrink-0 cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 flex-shrink-0">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about modules, pricing, industries, demos..."
                className="flex-1 text-xs bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00a86b] focus:ring-1 focus:ring-[#00a86b] transition-all"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl bg-[#023020] hover:bg-[#011a12] disabled:opacity-40 disabled:hover:bg-[#023020] text-white flex items-center justify-center transition-all flex-shrink-0 cursor-pointer"
              >
                <Send size={14} className="text-[#00c87f]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
