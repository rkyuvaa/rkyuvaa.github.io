import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Factory, HardHat, Car, UtensilsCrossed, ShoppingBag, Headphones,
  CheckCircle2, ArrowRight, Sparkles, ShieldCheck, TrendingUp
} from 'lucide-react';

const industriesData = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    headline: 'Shop Floor, MRP & Precision Production Control',
    icon: Factory,
    sceneDesc: 'Factory operations connected from multi-level BOMs to final finished goods dispatch.',
    metrics: [
      { label: 'OEE Machine Utilization', value: '89.4%' },
      { label: 'Scrap & Process Loss', value: '< 1.8%' },
      { label: 'BOM Cost Variance', value: 'Zero Overruns' }
    ],
    modules: ['Manufacturing Execution', 'Raw Material Inventory', 'Quality & NCR', 'Sales Invoicing', 'Purchase & GRN'],
    highlightFeature: 'Dynamic multi-level BOM costing with real-time scrap deductions and batch lot tracking.'
  },
  {
    id: 'construction',
    name: 'Construction',
    headline: 'Job Costing, Site Milestones & Subcontractor Billing',
    icon: HardHat,
    sceneDesc: 'Site supervisors and project managers collaborating with live material issues and progress bills.',
    metrics: [
      { label: 'Milestone Adherence', value: '96.2%' },
      { label: 'Material Wastage Track', value: '-22% Saved' },
      { label: 'Contractor Retention', value: 'Auto-Calculated' }
    ],
    modules: ['Project Management', 'Purchase & Inward', 'Finance & Day Book', 'Labor Attendance', 'Material Requisitions'],
    highlightFeature: 'Track task dependencies (FS/SS/FF/SF), labor daily wages, and progressive client milestone billing.'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    headline: 'Serial Number Tracking, Job Cards & Parts Inventory',
    icon: Car,
    sceneDesc: 'Assembly lines and service workshops operating with chassis traceability and fast parts dispatch.',
    metrics: [
      { label: 'Part Traceability', value: '100% Serialized' },
      { label: 'Job Card Turnaround', value: '1.8 Days' },
      { label: 'Warranty Claims', value: 'Instant Audit' }
    ],
    modules: ['Inventory & Serial Tracking', 'Job Cards & Services', 'Billing & POS', 'Purchase & Vendors', 'Customer CRM'],
    highlightFeature: 'Complete cradle-to-grave serial tracking with warranty lookup and automated spare parts reordering.'
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    headline: 'Table Layout, Kitchen Display (KDS) & Recipe BOM',
    icon: UtensilsCrossed,
    sceneDesc: 'Waiters punching table orders that sync instantly with kitchen screens and live recipe inventory.',
    metrics: [
      { label: 'Kitchen Ticket Time', value: '8.4 Mins' },
      { label: 'Food Cost Ratio', value: '28.2%' },
      { label: 'Daily Table Turns', value: '4.6x' }
    ],
    modules: ['Restaurant POS', 'Kitchen Display (KDS)', 'Recipe Inventory BOM', 'Staff Shifts & Tips', 'Daily Day Book'],
    highlightFeature: 'Automatic ingredient deduction (flour, oil, meat, cheese) upon order punch with split billing.'
  },
  {
    id: 'retail',
    name: 'Retail',
    headline: 'Multi-Store Inventory, Barcode Billing & Customer Loyalty',
    icon: ShoppingBag,
    sceneDesc: 'Store cashiers ringing up sales with fast barcode lookups and cross-outlet stock transfers.',
    metrics: [
      { label: 'Checkout Speed', value: '12 Sec/Bill' },
      { label: 'Stock Discrepancy', value: '< 0.05%' },
      { label: 'Repeat Customers', value: '41%' }
    ],
    modules: ['Retail POS', 'Multi-Store Inventory', 'Barcoding & Labels', 'CRM & Loyalty', 'GST Invoicing'],
    highlightFeature: 'Centralized stock monitoring with inter-branch transfers, promotional discounts, and GST bills.'
  },
  {
    id: 'services',
    name: 'Services',
    headline: 'Timesheets, Client Retainers & SLA Ticket Dispatch',
    icon: Headphones,
    sceneDesc: 'Consulting and field service teams managing deliverables, billable hours, and client support.',
    metrics: [
      { label: 'Billable Utilization', value: '92.5%' },
      { label: 'SLA Response Rate', value: '99.1%' },
      { label: 'Invoice Realization', value: '14 Days Faster' }
    ],
    modules: ['Project Management', 'Client CRM', 'Timesheets & Attendance', 'Retainer Invoicing', 'Support Helpdesk'],
    highlightFeature: 'Convert timesheets and milestones directly into GST tax invoices with client payment follow-ups.'
  },
];

export default function Industries({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('manufacturing');
  const activeIndustry = industriesData.find(i => i.id === activeTab) || industriesData[0];

  useEffect(() => {
    const handleSelectIndustry = (e) => {
      if (e.detail) {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener('select-industry', handleSelectIndustry);
    return () => window.removeEventListener('select-industry', handleSelectIndustry);
  }, []);

  return (
    <section id="industries" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container-orbx">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#00a86b]" />
            <span>Tailored Industry Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for <span className="gradient-text">Different Businesses.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            One engine, specialized configurations. Select your industry to view the tailored OrbX workflow, dashboards, and relevant modules.
          </p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {industriesData.map((ind) => {
            const Icon = ind.icon;
            const isSelected = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  isSelected
                    ? 'bg-[#023020] text-white shadow-lg shadow-[#023020]/20 scale-[1.02]'
                    : 'bg-[#F7FAF8] hover:bg-slate-100 text-slate-700 border border-slate-200/70'
                }`}
              >
                <Icon size={16} className={isSelected ? 'text-[#00c87f]' : 'text-slate-500'} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Illustrated Industry Scene Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F7FAF8] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm grid lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Scene details & benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold">
                <activeIndustry.icon size={14} className="text-[#00a86b]" />
                <span>Sector Focus: {activeIndustry.name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {activeIndustry.headline}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeIndustry.sceneDesc}
              </p>

              {/* Highlight capability */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/70 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#00a86b] flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Core Industry Capability
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {activeIndustry.highlightFeature}
                </p>
              </div>

              {/* Dynamic Relevant Modules Badges */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Synchronized Modules for {activeIndustry.name}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.modules.map((mod, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white rounded-xl text-xs font-semibold text-slate-800 border border-slate-200/80 shadow-2xl flex items-center gap-1.5"
                    >
                      <CheckCircle2 size={13} className="text-[#00a86b]" />
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="px-6 py-3 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Book {activeIndustry.name} Demo</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Column: Custom Illustrated Scene & KPI Card */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#023020] text-white flex items-center justify-center">
                    <activeIndustry.icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">OrbX {activeIndustry.name} Console</div>
                    <div className="text-[10px] text-slate-400">Live operational telemetry</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#00a86b]">
                  Industry Preset Active
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {activeIndustry.metrics.map((metric, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 truncate">
                      {metric.label}
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-[#023020] mt-1">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Illustrated Interactive Workflow Diagram */}
              <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100/80 space-y-2">
                <div className="text-[11px] font-bold text-[#023020] flex items-center gap-1.5">
                  <TrendingUp size={13} className="text-[#00a86b]" />
                  Operational Impact with OrbX:
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Eliminates departmental blindspots by automatically transferring transactions between sales, procurement, stores, and accounts in {activeIndustry.name.toLowerCase()} workflows.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
