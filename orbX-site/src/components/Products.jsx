import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, PackageCheck, Boxes, Factory, HeartHandshake,
  Users, Kanban, CreditCard, ShieldCheck, BarChart3, ArrowRight,
  CheckCircle2, Sparkles, X, ChevronRight, Check
} from 'lucide-react';

const productsData = [
  {
    id: 'sales',
    name: 'Sales',
    icon: ShoppingCart,
    tag: 'Quotations & Billing',
    desc: 'Manage quotations, orders, invoices and customers.',
    features: ['Instant Quotation Generation', 'Order to Delivery Tracking', 'GST Compliant Invoicing', 'Customer Ledger & Outstanding', 'Sales Rep Commissions', 'Price Lists & Discount Rules'],
    visual: 'sales-chart'
  },
  {
    id: 'purchase',
    name: 'Purchase',
    icon: PackageCheck,
    tag: 'Vendor & Procurement',
    desc: 'Control vendors, purchase orders, receipts and expenses.',
    features: ['Vendor RFQ & Comparison', 'Automated Purchase Orders', 'Goods Receipt Notes (GRN)', 'Landed Cost Computation', 'Vendor Outstanding Aging', 'Scrap & Return Management'],
    visual: 'purchase-flow'
  },
  {
    id: 'inventory',
    name: 'Inventory',
    icon: Boxes,
    tag: 'Stock & Tracking',
    desc: 'Track stock, movements, serial numbers and warehouse operations.',
    features: ['Multi-Warehouse Allocation', 'Batch & Expiry Management', 'Serial Number Tracking', 'Barcode & QR Scanning', 'Stock Transfer Vouchers', 'Automated Reorder Alerts'],
    visual: 'stock-card'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    tag: 'Production & MRP',
    desc: 'Manage BOMs, production, material requirements and manufacturing operations.',
    features: ['Multi-Level Bill of Materials (BOM)', 'Production Planning & Routing', 'Work Order Execution', 'Raw Material Consumption', 'Process Loss & Scrap Analysis', 'Accurate Unit Costing'],
    visual: 'mfg-flow'
  },
  {
    id: 'crm',
    name: 'CRM',
    icon: HeartHandshake,
    tag: 'Leads & Pipeline',
    desc: 'Manage leads, opportunities, customers and follow-ups.',
    features: ['Visual Deal Pipeline', 'Lead Source Tracking', 'Follow-up Reminders', 'Client Communication Logs', 'Quotation Sync with Sales', 'Sales Forecast Analytics'],
    visual: 'crm-pipeline'
  },
  {
    id: 'hr',
    name: 'HR & Payroll',
    icon: Users,
    tag: 'Workforce & Wages',
    desc: 'Attendance, leave, wages, payroll and employee management.',
    features: ['Biometric & GPS Attendance', 'Automated Wage Formulas', 'Leave & Holiday Calendars', 'Overtime & Comp-off Rules', 'One-Click Salary Slips', 'PF, ESI & Statutory Reports'],
    visual: 'hr-wage'
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: Kanban,
    tag: 'Milestones & Tasks',
    desc: 'Projects, tasks, subtasks, dependencies, progress and deadlines.',
    features: ['Work Breakdown Structure (WBS)', 'Dependency Types (FS, SS, FF, SF)', 'Interactive Kanban Boards', 'Time Tracking & Logs', 'Budget vs Actual Costing', 'Client Milestone Invoicing'],
    visual: 'project-gantt'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: CreditCard,
    tag: 'Cash & Accounting',
    desc: 'Payables, receivables, expenses, cash and bank management.',
    features: ['General Ledger & Day Book', 'Bank Reconciliation', 'Cash Flow Forecasts', 'Multi-level Expense Approvals', 'Vendor Cheque Printing', 'Tax Audit Ready Reports'],
    visual: 'finance-card'
  },
  {
    id: 'quality',
    name: 'Quality',
    icon: ShieldCheck,
    tag: 'Inspection & QC',
    desc: 'Quality checks, inspections and process control.',
    features: ['Inward Material Inspection', 'In-Process Stage Gates', 'Final QC Clearance', 'Non-Conformance Reports (NCR)', 'Defect Rate Pareto Charts', 'Certificate of Analysis (COA)'],
    visual: 'qc-badge'
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: BarChart3,
    tag: 'Intelligence & BI',
    desc: 'Get meaningful business insights from one place.',
    features: ['Cross-Department Executive Dashboard', 'Stock Valuation Reports', 'Customer Profitability Analysis', 'Production Variance Reports', 'Exportable to Excel & PDF', 'Automated Daily Email Briefs'],
    visual: 'report-preview'
  },
];

export default function Products({ onOpenDemo }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-24 lg:py-32 bg-[#F7FAF8] relative overflow-hidden">
      <div className="container-orbx">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a86b]/10 border border-[#00a86b]/20 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#00a86b]" />
            <span>Complete Product Modules</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to <span className="gradient-text">Run Your Business.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Ten specialized enterprise modules engineered to work as standalone powerhouses or a fully synchronized ecosystem.
          </p>
        </div>

        {/* 10 Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsData.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="group bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm card-lift flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative corner glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-40 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#023020] group-hover:bg-[#023020] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#00a86b]/10 group-hover:text-[#00a86b] transition-colors">
                      {prod.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#023020] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>

                  {/* Feature preview list */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {prod.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check size={13} className="text-[#00a86b] flex-shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore button & interaction */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="text-xs font-bold text-[#023020] hover:text-[#00a86b] flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Explore Module</span>
                    <ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenDemo}
                    className="text-[11px] font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Module Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[220] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-[#011a12]/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 space-y-6"
            >
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#023020] text-[#00c87f] flex items-center justify-center">
                    <selectedProduct.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#00a86b] uppercase tracking-wider">
                      OrbX Module Specification
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      OrbX {selectedProduct.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedProduct.desc} Built to integrate effortlessly with the other 9 modules in OrbX, giving your team synchronized control without dual data entry.
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Capabilities Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl">
                      <CheckCircle2 size={14} className="text-[#00a86b] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  Included in the standard ₹2,000/mo subscription.
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    onOpenDemo();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Book Walkthrough</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
