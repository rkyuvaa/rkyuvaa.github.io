import { useState } from 'react';
import {
  BarChart3, DollarSign, ShoppingCart, PackageCheck, Boxes,
  CreditCard, Users, Kanban, TrendingUp
} from 'lucide-react';

const departmentTabs = [
  { id: 'overview', label: 'Executive Overview' },
  { id: 'sales', label: 'Sales & Invoices' },
  { id: 'inventory', label: 'Inventory & Stores' },
  { id: 'purchase', label: 'Purchases & Vendors' },
  { id: 'hr', label: 'HR & Wage Payouts' },
];

export default function DashboardShowcase({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <BarChart3 size={13} className="text-[#00a86b]" />
            <span>Operational Command Center</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            See Your Business <span className="gradient-text">Clearly.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real-time business intelligence across every department. No more waiting for end-of-month tally reports or cross-checking five different spreadsheets.
          </p>

          {/* Department Tabs */}
          <div className="pt-4 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {departmentTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#023020] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Width Large Interactive Dashboard Mockup */}
        <div className="bg-[#F7FAF8] rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-[0_30px_90px_rgba(2,48,32,0.06)] space-y-6">
          {/* Top Control Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/70 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#023020] text-[#00c87f] flex items-center justify-center font-bold">
                OX
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">OrbX Business Intelligence Console</h3>
                <div className="text-[11px] text-slate-500">Live operational data refreshed 2 minutes ago</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-[#00a86b] font-bold border border-emerald-200/60">
                <span className="w-2 h-2 rounded-full bg-[#00a86b] live-dot" />
                All 6 Plants Online
              </span>
              <button
                onClick={onOpenDemo}
                className="px-4 py-2 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-bold transition-colors"
              >
                Request Live Walkthrough
              </button>
            </div>
          </div>

          {/* 8 Metric KPI Cards Grid Required by Prompt: Revenue, Sales, Purchases, Inventory, Expenses, Employees, Projects, Tasks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { label: 'Revenue', val: '₹84.2L', change: '+18.4%', icon: DollarSign, color: '#023020' },
              { label: 'Sales Orders', val: '₹42.6L', change: '148 Orders', icon: ShoppingCart, color: '#00a86b' },
              { label: 'Purchases', val: '₹19.4L', change: '12 Active POs', icon: PackageCheck, color: '#f59e0b' },
              { label: 'Inventory', val: '92% Health', change: '₹62.8L Value', icon: Boxes, color: '#3b82f6' },
              { label: 'Expenses', val: '₹6.4L', change: 'Within Budget', icon: CreditCard, color: '#8b5cf6' },
              { label: 'Employees', val: '32 Present', change: '100% Synced', icon: Users, color: '#ec4899' },
              { label: 'Projects', val: '8 Active', change: '2 Due Today', icon: Kanban, color: '#14b8a6' },
              { label: 'Tasks', val: '18 Done', change: '94% On Time', icon: TrendingUp, color: '#84cc16' },
            ].map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-sm card-lift flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 truncate">{kpi.label}</span>
                    <Icon size={14} style={{ color: kpi.color }} />
                  </div>
                  <div className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    {kpi.val}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 mt-1 truncate">
                    {kpi.change}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual SVG Chart & Operational Pipelines */}
          <div className="grid lg:grid-cols-12 gap-6 pt-2">
            {/* Main Operational Chart */}
            <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Weekly Revenue vs Material Incurred</h4>
                  <p className="text-xs text-slate-400">Aggregated from Quotations, Finished Goods Invoices & PO Deliveries</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#023020]" /> Revenue Inflow
                  </span>
                  <span className="flex items-center gap-1 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#00a86b]" /> Material Outflow
                  </span>
                </div>
              </div>

              {/* Responsive SVG Chart */}
              <div className="h-44 sm:h-52 flex items-end justify-between gap-3 sm:gap-4 pt-4 px-2">
                {[
                  { label: 'Week 1', rev: 65, exp: 40, amt: '₹14.2L' },
                  { label: 'Week 2', rev: 78, exp: 45, amt: '₹18.6L' },
                  { label: 'Week 3', rev: 85, exp: 50, amt: '₹21.4L' },
                  { label: 'Week 4', rev: 94, exp: 52, amt: '₹26.1L' },
                  { label: 'Week 5', rev: 88, exp: 48, amt: '₹22.5L' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                    <span className="text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.amt}
                    </span>
                    <div className="w-full flex items-end justify-center gap-1.5 h-full">
                      <div
                        className="w-1/2 bg-[#023020] rounded-t-lg transition-all duration-300 group-hover:brightness-110"
                        style={{ height: `${bar.rev}%` }}
                      />
                      <div
                        className="w-1/2 bg-[#00a86b] rounded-t-lg transition-all duration-300 group-hover:brightness-110"
                        style={{ height: `${bar.exp}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 mt-1">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Live Pipeline Feed */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <h4 className="font-extrabold text-sm text-slate-900">Synchronized Event Stream</h4>
                <span className="text-[10px] font-bold text-[#00a86b] uppercase">Real-Time</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#00a86b] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-800">Sales Invoice #204 Generated</div>
                    <div className="text-[11px] text-slate-500">₹3,40,000 to Sri Balaji Automotives • Auto updated ledger</div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-800">BOM Production Run Finished</div>
                    <div className="text-[11px] text-slate-500">Lot #BOM-882: 500 units moved to finished warehouse</div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-800">Reorder Alert: Stainless Steel Rods</div>
                    <div className="text-[11px] text-slate-500">Stock fell below 150 kg threshold • Draft PO created</div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-800">Biometric Attendance Auto-Reconciled</div>
                    <div className="text-[11px] text-slate-500">32 employees clocked in across shift A & B • 0 errors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
