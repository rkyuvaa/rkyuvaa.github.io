import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, RotateCcw, Calendar, Phone, Sparkles, Heart } from 'lucide-react';

/* ─── Baymax Face SVG ─── */
function BaymaxAvatar({ size = 44, mood = 'happy' }) {
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
        {/* Connecting Baymax line */}
        <line x1="14" y1="15" x2="46" y2="15" stroke="#023020" strokeWidth="2.5" strokeLinecap="round" />
        {/* Mood blink/smile accent */}
        {mood === 'happy' && (
          <path d="M26 22 Q30 25 34 22" stroke="#00a86b" strokeWidth="2" strokeLinecap="round" fill="none" />
        )}
      </svg>
      {/* Soft cute blush */}
      <span className="absolute left-1.5 bottom-1.5 w-2 h-1 bg-rose-200 rounded-full opacity-60 pointer-events-none" />
      <span className="absolute right-1.5 bottom-1.5 w-2 h-1 bg-rose-200 rounded-full opacity-60 pointer-events-none" />
    </div>
  );
}

/* ─── Pre-built Baymax Knowledge Base ─── */
const RESPONSES = {
  greeting: {
    text: "Hello, I am OrbX Assistant — your personal business companion. 🤖✨\n\nI was programmed to scan your workflow, eliminate manual spreadsheets, and ensure your operations run at peak health.\n\nOn a scale of 1 to 10, how satisfied are you with your current business tools?",
    chips: ['Diagnose my business pain 🩺', 'Explore Modules', 'Pricing from ₹1,000', 'Book a Live Demo'],
  },
  'Diagnose my business pain 🩺': {
    text: "Scanning your business vitals... 🩺⚡\n\nCommon symptoms detected in growing companies:\n• Data trapped in WhatsApp & paper registers (Silos)\n• Stockouts & untracked batch waste\n• Manual payroll calculation taking days\n• Delayed billing and unclear profit margins\n\nTreatment plan: OrbX unites Sales, Inventory, HR, Finance, and Production under one single cloud system.",
    chips: ['See Pricing', 'Explore Modules', 'Book a Live Demo'],
  },
  'Explore Modules': {
    text: "OrbX comes equipped with 10+ synchronized modules:\n\n🏭 **Production & BOM** — Shop-floor routing, MRP\n📦 **Inventory** — Multi-warehouse, barcode audits\n👥 **HRMS & Attendance** — Biometric sync & automated payroll\n📊 **Ledger & Invoicing** — Real-time GST & day-book\n🍽️ **Restaurant POS** — Kitchen display (KDS), table management\n📅 **Project WBS** — Kanban & Gantt milestones\n\nAll modules talk to each other in real-time.",
    chips: ['Pricing from ₹1,000', 'Which industries?', 'Book a Live Demo'],
  },
  'Pricing from ₹1,000': {
    text: "OrbX pricing is transparent and uncomplicated:\n\n• **Starting from ₹1,000 / month** for core business access.\n• **₹2,000 / month** for the complete, all-inclusive platform suite (unlimited users & all modules).\n• Custom Enterprise plans available for multi-plant factories.\n\nNo hidden setup charges. Free onboarding assistance included! 🛡️",
    chips: ['Book a Live Demo', 'Talk to a human', 'Explore Modules'],
  },
  'Which industries?': {
    text: "OrbX provides specialized industry configurations for:\n\n1. **Manufacturing** (BOM, costing, job cards)\n2. **Construction** (Contractor billing, material runs)\n3. **Automotive** (Workshop job cards, chassis tracking)\n4. **Restaurant** (Tables, KDS, recipe cost control)\n5. **Retail & Wholesale** (POS, multi-location stock)\n6. **Services** (Milestone billing, SLA tickets)",
    chips: ['Book a Live Demo', 'Pricing from ₹1,000'],
  },
  'Book a Live Demo': {
    text: "I would be delighted to schedule a personalized 20-minute walkthrough for your company! 🚀\n\nClick below to open our demo booking request, or reach our solution engineers directly:\n\n📞 **+91 97873 17484**\n📧 **hello@orbx.in**",
    chips: ['Open demo form', 'Talk on WhatsApp', 'Reset diagnosis'],
    action: { label: 'Book Demo Now', type: 'demo' },
  },
  'Open demo form': {
    text: "Opening your booking modal right now! Our solutions team will reach out within 24 hours.",
    chips: ['Explore Modules', 'Pricing from ₹1,000'],
    action: { label: null, type: 'demo' },
  },
  'Talk on WhatsApp': {
    text: "Direct WhatsApp link ready! Click below to message our operations engineer.",
    chips: ['Book a Live Demo', 'Explore Modules'],
    action: { label: 'Chat on WhatsApp', type: 'whatsapp' },
  },
  'Talk to a human': {
    text: "Our team of human experts is on standby to help:\n\n📞 Call: **+91 97873 17484**\n📧 Email: **hello@orbx.in**\n📍 Location: Coimbatore / Tamil Nadu, India\n\nAvailable Monday to Saturday, 9:00 AM – 6:30 PM IST.",
    chips: ['Book a Live Demo', 'Pricing from ₹1,000'],
  },
  'Reset diagnosis': {
    text: "Resetting diagnosis protocol... How can I assist your business today? 😊",
    chips: ['Diagnose my business pain 🩺', 'Explore Modules', 'Pricing from ₹1,000', 'Book a Live Demo'],
  },
};

function formatText(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Bold replacement
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
  const [messages, setMessages] = useState([{ from: 'bot', ...RESPONSES.greeting }]);
  const [chips, setChips] = useState(RESPONSES.greeting.chips);
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

  const handleSelectChip = (chipText) => {
    const userMsg = { from: 'user', text: chipText };
    setMessages((prev) => [...prev, userMsg]);
    setChips([]);
    setIsTyping(true);

    const lookup = RESPONSES[chipText] || {
      text: "I am scanning your request. OrbX is designed to adapt to custom business requirements. Would you like to consult our solutions team directly?",
      chips: ['Book a Live Demo', 'Talk to a human', 'Pricing from ₹1,000'],
    };

    if (lookup.action?.type === 'demo') {
      onOpenDemo?.();
    } else if (lookup.action?.type === 'whatsapp') {
      window.open('https://wa.me/919787317484?text=Hi%20OrbX%20Team,%20I%20am%20chatting%20with%20OrbX%20Assistant%20and%20need%20more%20details.', '_blank');
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', ...lookup }]);
      setChips(lookup.chips || RESPONSES.greeting.chips);
      setIsTyping(false);
    }, 750);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputVal.trim()) return;
    const query = inputVal.trim();
    setInputVal('');

    // Keyword heuristic matching
    const qLower = query.toLowerCase();
    let matchedKey = null;
    if (qLower.includes('price') || qLower.includes('cost') || qLower.includes('1000') || qLower.includes('2000') || qLower.includes('plan')) {
      matchedKey = 'Pricing from ₹1,000';
    } else if (qLower.includes('demo') || qLower.includes('trial') || qLower.includes('test') || qLower.includes('book')) {
      matchedKey = 'Book a Live Demo';
    } else if (qLower.includes('module') || qLower.includes('feature') || qLower.includes('erp') || qLower.includes('inventory') || qLower.includes('hrms')) {
      matchedKey = 'Explore Modules';
    } else if (qLower.includes('industry') || qLower.includes('manufacturing') || qLower.includes('restaurant') || qLower.includes('construction')) {
      matchedKey = 'Which industries?';
    } else if (qLower.includes('human') || qLower.includes('call') || qLower.includes('phone') || qLower.includes('contact') || qLower.includes('support')) {
      matchedKey = 'Talk to a human';
    } else if (qLower.includes('hi') || qLower.includes('hello') || qLower.includes('baymax')) {
      matchedKey = 'greeting';
    } else if (qLower.includes('pain') || qLower.includes('problem') || qLower.includes('help')) {
      matchedKey = 'Diagnose my business pain 🩺';
    }

    const userMsg = { from: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setChips([]);
    setIsTyping(true);

    setTimeout(() => {
      if (matchedKey && RESPONSES[matchedKey]) {
        const resp = RESPONSES[matchedKey];
        if (resp.action?.type === 'demo') onOpenDemo?.();
        setMessages((prev) => [...prev, { from: 'bot', ...resp }]);
        setChips(resp.chips || RESPONSES.greeting.chips);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            from: 'bot',
            text: `I have recorded: "${query}".\n\nI am configured to guide you through OrbX pricing, feature modules, and implementation. Would you like to explore our platform or talk to an engineer?`,
            chips: ['Pricing from ₹1,000', 'Explore Modules', 'Book a Live Demo', 'Talk to a human'],
          },
        ]);
        setChips(['Pricing from ₹1,000', 'Explore Modules', 'Book a Live Demo', 'Talk to a human']);
      }
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    setMessages([{ from: 'bot', ...RESPONSES.greeting }]);
    setChips(RESPONSES.greeting.chips);
  };

  return (
    <>
      {/* ── Nudge Bubble ── */}
      <AnimatePresence>
        {showNudge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-24 right-24 z-[190] max-w-[260px] bg-white rounded-2xl p-3.5 shadow-2xl border border-emerald-100/80 cursor-pointer group"
            onClick={() => {
              setIsOpen(true);
              setShowNudge(false);
            }}
          >
            <div className="flex items-start gap-2.5">
              <BaymaxAvatar size={34} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#023020]">OrbX Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] animate-ping" />
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Hello! I am your personal business companion. How can I help today?
                </p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-[#00a86b]">
              <span>Tap to chat with BayMax</span>
              <Sparkles size={11} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Baymax Button ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 220 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => {
          setIsOpen((prev) => !prev);
          setShowNudge(false);
        }}
        aria-label="Toggle OrbX Assistant"
        className="fixed bottom-6 right-24 z-[200] w-14 h-14 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center shadow-2xl shadow-[#023020]/25 border-2 border-[#023020]/20 transition-all group overflow-hidden"
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
              <BaymaxAvatar size={42} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status ring */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#00a86b] border-2 border-white" />
      </motion.button>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 sm:right-10 z-[195] w-[calc(100vw-32px)] sm:w-[410px] max-h-[620px] h-[560px] bg-white rounded-3xl shadow-[0_25px_70px_rgba(2,48,32,0.22)] border border-slate-200/90 flex flex-col overflow-hidden"
          >
            {/* Baymax Header */}
            <div className="bg-[#023020] text-white p-4 sm:p-5 flex items-center justify-between relative overflow-hidden flex-shrink-0">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00a86b]/20 rounded-bl-full pointer-events-none blur-xl" />
              
              <div className="flex items-center gap-3 relative z-10">
                <BaymaxAvatar size={42} />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm text-white tracking-tight">OrbX Assistant</h3>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#00a86b]/20 text-[#00c87f] font-semibold">
                      BayMax AI
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c87f] animate-pulse" />
                    Personal Business Companion
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 relative z-10">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Sub-banner: Baymax quote */}
            <div className="bg-[#ecfdf5] border-b border-emerald-100/80 px-4 py-2 flex items-center justify-between text-[11px] text-[#023020] font-medium flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <Heart size={12} className="text-[#00a86b] fill-[#00a86b]" />
                <span>"I cannot deactivate until you are satisfied with your ERP."</span>
              </div>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7FAF8]/70">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.from === 'bot' && <BaymaxAvatar size={28} />}
                  
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
                          if (msg.action.type === 'whatsapp') {
                            window.open('https://wa.me/919787317484?text=Hi%20OrbX%20Team,%20I%20would%20like%20to%20learn%20more.', '_blank');
                          }
                        }}
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00a86b] hover:bg-[#00925d] text-white font-bold text-[11px] transition-colors shadow-sm"
                      >
                        {msg.action.type === 'demo' ? <Calendar size={12} /> : <Phone size={12} />}
                        <span>{msg.action.label}</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Baymax Typing Indicator */}
              {isTyping && (
                <div className="flex items-end gap-2 justify-start">
                  <BaymaxAvatar size={28} />
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
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#F7FAF8] hover:bg-[#023020] hover:text-white text-[11px] font-semibold text-slate-700 border border-slate-200 hover:border-[#023020] transition-all flex-shrink-0"
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
                placeholder="Ask BayMax about OrbX..."
                className="flex-1 text-xs bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00a86b] focus:ring-1 focus:ring-[#00a86b] transition-all"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl bg-[#023020] hover:bg-[#011a12] disabled:opacity-40 disabled:hover:bg-[#023020] text-white flex items-center justify-center transition-all flex-shrink-0"
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
