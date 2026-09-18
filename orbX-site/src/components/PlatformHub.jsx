import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, PackageCheck, Boxes, CreditCard, Users, Banknote,
  Kanban, Factory, ShieldCheck, HeartHandshake, BarChart3, Settings2,
  Sparkles, ArrowRight, Zap
} from 'lucide-react';

const modulesList = [
  {
    id: 'sales',
    name: 'Sales',
    icon: ShoppingCart,
    tag: 'Revenue Engine',
    desc: 'Quotations, sales orders, automated invoicing, price books & client receivables tracking.',
    benefit: 'Close deals faster with auto-generated quotations and instant credit limit checks.'
  },
  {
    id: 'purchase',
    name: 'Purchase',
    icon: PackageCheck,
    tag: 'Procurement',
    desc: 'Vendor quotations, RFQs, purchase orders, 3-way matching and landed cost allocation.',
    benefit: 'Prevent unauthorized expenditures and track supplier delivery punctuality.'
  },
  {
    id: 'inventory',
    name: 'Inventory',
    icon: Boxes,
    tag: 'Stock & Warehouse',
    desc: 'Multi-location warehouses, batch tracking, serial numbers, FIFO/LIFO, barcode scanning.',
    benefit: 'Eliminate dead stock with automated reorder levels and live physical audits.'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: CreditCard,
    tag: 'Accounting & Ledger',
    desc: 'General ledger, daily cash book, bank reconciliation, expense vouchers and GST filings.',
    benefit: 'Real-time P&L visibility without waiting weeks for monthly book closings.'
  },
  {
    id: 'hr',
    name: 'HR',
    icon: Users,
    tag: 'Workforce',
    desc: 'Employee directory, shift scheduling, leave approval policies, and GPS/biometric check-ins.',
    benefit: 'Streamlined employee management from recruitment to lifecycle milestones.'
  },
  {
    id: 'payroll',
    name: 'Payroll',
    icon: Banknote,
    tag: 'Wages & Compliance',
    desc: 'Automated wage calculation, PF/ESI deductions, overtime formulas, and bank payout files.',
    benefit: 'Calculate monthly payroll for 100s of employees in minutes without calculation errors.'
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: Kanban,
    tag: 'Deliverables',
    desc: 'Milestones, task dependencies (FS/SS/FF/SF), time logs, project budgets and Gantt timelines.',
    benefit: 'Keep complex projects on budget and deliver deliverables punctually.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    tag: 'Production & MRP',
    desc: 'Multi-level Bill of Materials (BOM), work orders, machine allocation, scrap & loss tracking.',
    benefit: 'Calculate exact per-unit production cost and optimize factory machine utilization.'
  },
  {
    id: 'quality',
    name: 'Quality',
    icon: ShieldCheck,
    tag: 'Quality Assurance',
    desc: 'Inward material inspection, in-process testing, final inspection checklists, and NCR records.',
    benefit: 'Enforce stringent quality standards before products ever leave the warehouse.'
  },
  {
    id: 'crm',
    name: 'CRM',
    icon: HeartHandshake,
    tag: 'Customer Relations',
    desc: 'Lead tracking, deal pipelines, customer interactions, follow-up alerts, and support tickets.',
    benefit: 'Never drop a sales lead again with automatic follow-up reminders and history.'
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: BarChart3,
    tag: 'Business Intelligence',
    desc: 'Executive summaries, dynamic operational pivot reports, inventory valuation and KPI dashboards.',
    benefit: 'Actionable business clarity across all departments delivered in one click.'
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: Settings2,
    tag: 'Workflows & Approvals',
    desc: 'Custom multi-level approval hierarchies, role-based security, audit trails, and automated alerts.',
    benefit: 'Maintain strict enterprise governance across all branches and divisions.'
  },
];

export default function PlatformHub({ onOpenDemo }) {
  const [selectedId, setSelectedId] = useState('manufacturing');
  const activeModule = modulesList.find(m => m.id === selectedId) || modulesList[0];

  return (
    <section id="platform-hub" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00a86b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-orbx relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#00a86b]" />
            <span>The Connected Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Platform. <span className="gradient-text">Your Entire Business.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            OrbX acts as the intelligent digital core connecting 12 vital business functions in real-time. Hover or tap any module below to inspect its data flow.
          </p>
        </div>

        {/* The Interactive Orbital Hub UI */}
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 items-center">
          {/* 12 Interactive Module Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {modulesList.map((mod) => {
              const Icon = mod.icon;
              const isSelected = selectedId === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedId(mod.id)}
                  onMouseEnter={() => setSelectedId(mod.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-[#023020] border-[#023020] text-white shadow-xl shadow-[#023020]/20 scale-[1.02]'
                      : 'bg-[#F7FAF8] hover:bg-white border-slate-200/80 text-slate-800 hover:border-[#00a86b]/40 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-white/15 text-[#00c87f]'
                          : 'bg-emerald-50 text-[#023020] group-hover:bg-[#023020] group-hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#00c87f] live-dot" />
                    )}
                  </div>
                  <div className={`font-bold text-sm leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {mod.name}
                  </div>
                  <div className={`text-[11px] font-medium mt-1 truncate ${isSelected ? 'text-emerald-200/80' : 'text-slate-500'}`}>
                    {mod.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Central Active Module Inspector Panel */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_20px_50px_rgba(2,48,32,0.08)] space-y-6 relative overflow-hidden"
              >
                {/* Decorative top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#023020] via-[#00a86b] to-[#84cc16] absolute top-0 inset-x-0" />

                <div className="flex items-center gap-3.5 pt-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#023020] text-[#00c87f] flex items-center justify-center flex-shrink-0 shadow-md">
                    <activeModule.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#00a86b]">
                      Connected Module
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      OrbX {activeModule.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What It Manages
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {activeModule.desc}
                  </p>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#023020]">
                    <Zap size={14} className="text-[#00a86b]" />
                    Business Impact
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeModule.benefit}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Integrates with all 11 modules
                  </span>
                  <button
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#023020] hover:text-[#00a86b] transition-colors"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
