import {
  Check, ArrowRight, ShieldCheck, Sparkles, Building2
} from 'lucide-react';

const mainFeatures = [
  'Full Business Management Platform',
  'Sales & Quotations Engine',
  'Purchase & Vendor Procurement',
  'Multi-Warehouse Inventory',
  'Customer Directory & CRM',
  'Supplier Management & Aging',
  'Automated Management Reports',
  'Dedicated Onboarding & Support',
  'Secure Cloud Access & Daily Backups',
  'GST Invoicing & E-Way Ready'
];

export default function Pricing({ onOpenDemo }) {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#F7FAF8] relative overflow-hidden border-t border-slate-100">
      <div className="container-orbx">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a86b]/10 border border-[#00a86b]/20 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#00a86b]" />
            <span>Transparent & Uncomplicated</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple Pricing for <span className="gradient-text">Growing Businesses.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            No hidden setup fees, no complex per-transaction surcharges. One comprehensive subscription to power your entire company.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          {/* Main Featured Card: OrbX Subscription ₹2,000 / month */}
          <div className="md:col-span-8 bg-[#023020] text-white rounded-3xl p-8 sm:p-10 shadow-[0_25px_70px_rgba(2,48,32,0.25)] relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a86b]/20 rounded-bl-full pointer-events-none blur-2xl" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-6 relative z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00c87f]">
                  Complete Business Suite
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                  OrbX Subscription
                </h3>
              </div>
              <div className="sm:text-right">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00a86b]/20 border border-[#00a86b]/30 mb-2">
                  <span className="text-[11px] font-bold text-[#00c87f] tracking-wide">Starting from ₹1,000 / month</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">₹2,000</span>
                  <span className="text-white/70 text-sm font-medium">/ month</span>
                </div>
                <div className="text-[11px] text-[#00c87f] font-semibold mt-0.5">All-inclusive platform access</div>
              </div>
            </div>

            <div className="relative z-10 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                Everything Included In Your Plan:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {mainFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90">
                    <div className="w-5 h-5 rounded-full bg-[#00a86b] text-white flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck size={16} className="text-[#00c87f]" />
                <span>Cancel anytime. Free onboarding assistance included.</span>
              </div>
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#023020] hover:bg-emerald-50 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Start Your Demo</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Secondary Enterprise Custom Tier */}
          <div className="md:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm space-y-5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Building2 size={20} />
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">Custom Enterprise</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                For multi-plant manufacturing units, high-volume warehouses, or dedicated private server hosting.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Check size={13} className="text-[#00a86b]" />
                <span>Multi-Plant Factory Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={13} className="text-[#00a86b]" />
                <span>Custom ERP Module Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={13} className="text-[#00a86b]" />
                <span>Dedicated SLA & Manager</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                Talk to Enterprise Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
