import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, Factory, Briefcase, Users, CreditCard,
  Kanban, UtensilsCrossed, HardHat, Car, ShoppingBag, Headphones,
  ArrowRight, Sparkles
} from 'lucide-react';
import logoDark from '../assets/logo-orbx.png';

const productItems = [
  {
    name: 'OrbX ERP',
    desc: 'End-to-end manufacturing, production BOM, inventory & quality control',
    icon: Factory,
    href: '#products',
    badge: 'Flagship'
  },
  {
    name: 'OrbX Business Suite',
    desc: 'Comprehensive B2B management, purchase, sales & order pipelines',
    icon: Briefcase,
    href: '#products'
  },
  {
    name: 'OrbX HRMS',
    desc: 'Biometric & GPS attendance, automated wage rules & payroll processing',
    icon: Users,
    href: '#hr-showcase',
    badge: 'Smart'
  },
  {
    name: 'OrbX My Ledger',
    desc: 'Real-time financial control, cash flow, day book & bank reconciliation',
    icon: CreditCard,
    href: '#products'
  },
  {
    name: 'OrbX Project Management',
    desc: 'Project milestones, task dependencies (FS/SS/FF/SF) & Kanban boards',
    icon: Kanban,
    href: '#project-showcase',
    badge: 'Interactive'
  },
  {
    name: 'OrbX Restaurant Management',
    desc: 'Table layout, live Kitchen Display (KDS), menu recipe BOM & quick POS',
    icon: UtensilsCrossed,
    href: '#restaurant-showcase',
    badge: 'Dedicated'
  },
];

const industryItems = [
  { name: 'Manufacturing', desc: 'MRP, shop-floor routing, BOM costing & batch tracking', icon: Factory, id: 'manufacturing' },
  { name: 'Construction', desc: 'Job costing, site progress, contractor billing & materials', icon: HardHat, id: 'construction' },
  { name: 'Automotive', desc: 'Chassis/serial tracking, workshop job cards & parts inventory', icon: Car, id: 'automotive' },
  { name: 'Restaurant', desc: 'Dine-in tables, kitchen dispatch, recipe BOM & daily margins', icon: UtensilsCrossed, id: 'restaurant' },
  { name: 'Retail', desc: 'POS checkout, multi-store stock balance & barcode audits', icon: ShoppingBag, id: 'retail' },
  { name: 'Services', desc: 'Milestone invoicing, timesheets, field dispatch & SLA tickets', icon: Headphones, id: 'services' },
];

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(2,48,32,0.06)] border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100/60 py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <img
            src={logoDark}
            alt="OrbX"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-slate-700">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-colors ${
                activeDropdown === 'products'
                  ? 'text-[#023020] bg-slate-50 font-semibold'
                  : 'hover:text-[#023020] hover:bg-slate-50/80'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  activeDropdown === 'products' ? 'rotate-180 text-[#00a86b]' : 'text-slate-400'
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[540px] bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 z-50 grid grid-cols-2 gap-2"
                >
                  {productItems.map((p) => {
                    const Icon = p.icon;
                    return (
                      <a
                        key={p.name}
                        href={p.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#023020] group-hover:bg-[#023020] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-slate-800 text-xs group-hover:text-[#023020] transition-colors">
                              {p.name}
                            </span>
                            {p.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#00a86b]/10 text-[#00a86b]">
                                {p.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                            {p.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                  <div className="col-span-2 pt-2 mt-1 border-t border-slate-100 flex items-center justify-between text-xs px-2 text-slate-500">
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <Sparkles size={12} className="text-[#00a86b]" />
                      Modular architecture — connect any module on demand
                    </span>
                    <a
                      href="#platform-hub"
                      onClick={() => setActiveDropdown(null)}
                      className="font-semibold text-[#023020] hover:text-[#00a86b] flex items-center gap-1"
                    >
                      View Platform Hub <ArrowRight size={12} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-colors ${
                activeDropdown === 'industries'
                  ? 'text-[#023020] bg-slate-50 font-semibold'
                  : 'hover:text-[#023020] hover:bg-slate-50/80'
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  activeDropdown === 'industries' ? 'rotate-180 text-[#00a86b]' : 'text-slate-400'
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === 'industries' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 z-50 grid grid-cols-2 gap-2"
                >
                  {industryItems.map((ind) => {
                    const Icon = ind.icon;
                    return (
                      <a
                        key={ind.name}
                        href="#industries"
                        onClick={() => {
                          setActiveDropdown(null);
                          window.dispatchEvent(new CustomEvent('select-industry', { detail: ind.id }));
                        }}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-[#023020] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-slate-800 text-xs group-hover:text-[#023020] transition-colors block">
                            {ind.name}
                          </span>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                            {ind.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                  <div className="col-span-2 pt-2 mt-1 border-t border-slate-100 flex items-center justify-between text-xs px-2 text-slate-500">
                    <span className="text-[11px]">Configured for Indian enterprise workflows & GST rules</span>
                    <a
                      href="#industries"
                      onClick={() => setActiveDropdown(null)}
                      className="font-semibold text-[#023020] hover:text-[#00a86b] flex items-center gap-1"
                    >
                      Compare All <ArrowRight size={12} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#platform-hub"
            className="px-3.5 py-2 rounded-xl hover:text-[#023020] hover:bg-slate-50/80 transition-colors"
          >
            Solutions
          </a>

          <a
            href="#pricing"
            className="px-3.5 py-2 rounded-xl hover:text-[#023020] hover:bg-slate-50/80 transition-colors"
          >
            Pricing
          </a>

          <a
            href="#about"
            className="px-3.5 py-2 rounded-xl hover:text-[#023020] hover:bg-slate-50/80 transition-colors"
          >
            About
          </a>

          <a
            href="#contact"
            className="px-3.5 py-2 rounded-xl hover:text-[#023020] hover:bg-slate-50/80 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919787317484"
            className="text-xs font-semibold text-slate-600 hover:text-[#023020] px-3 py-2 transition-colors"
          >
            +91 97873 17484
          </a>
          <button
            onClick={onOpenDemo}
            className="group px-5 py-2.5 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-semibold text-xs tracking-wide shadow-md shadow-[#023020]/20 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book a Demo</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 text-[#00a86b]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="px-3 py-1.5 rounded-lg bg-[#023020] text-white text-xs font-semibold"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-5 space-y-3 max-h-[85vh] overflow-y-auto">
              {/* Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="w-full flex items-center justify-between text-left font-semibold text-slate-800 py-2 border-b border-slate-50"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileProductOpen ? 'rotate-180 text-[#00a86b]' : 'text-slate-400'
                    }`}
                  />
                </button>
                {mobileProductOpen && (
                  <div className="pl-3 py-2 space-y-2 bg-slate-50/60 rounded-xl my-1">
                    {productItems.map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-xs font-medium text-slate-700 py-1 hover:text-[#023020]"
                      >
                        {p.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                  className="w-full flex items-center justify-between text-left font-semibold text-slate-800 py-2 border-b border-slate-50"
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileIndustryOpen ? 'rotate-180 text-[#00a86b]' : 'text-slate-400'
                    }`}
                  />
                </button>
                {mobileIndustryOpen && (
                  <div className="pl-3 py-2 space-y-2 bg-slate-50/60 rounded-xl my-1">
                    {industryItems.map((ind) => (
                      <a
                        key={ind.name}
                        href="#industries"
                        onClick={() => {
                          setMobileOpen(false);
                          window.dispatchEvent(new CustomEvent('select-industry', { detail: ind.id }));
                        }}
                        className="block text-xs font-medium text-slate-700 py-1 hover:text-[#023020]"
                      >
                        {ind.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#platform-hub"
                onClick={() => setMobileOpen(false)}
                className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
              >
                Solutions
              </a>

              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
              >
                Pricing
              </a>

              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
              >
                Contact
              </a>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 rounded-xl bg-[#023020] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#023020]/20"
                >
                  <span>Book a Demo</span>
                  <ArrowRight size={15} />
                </button>
                <div className="text-center text-xs text-slate-500 mt-2.5">
                  or call us directly at <a href="tel:+919787317484" className="text-[#023020] font-semibold">+91 97873 17484</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
