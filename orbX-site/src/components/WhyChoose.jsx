import {
  FileText, Eye, Sliders, Zap, ArrowRight,
  Sparkles
} from 'lucide-react';

const benefits = [
  {
    title: 'Less Paperwork',
    headline: 'Automate repetitive business processes.',
    desc: 'Eliminate duplicate data entries across handwritten registers, disconnected spreadsheets, and chat messages. From quotation to ledger in one click.',
    icon: FileText,
    accent: '#00a86b',
    stat: '85% Reduction',
    statLabel: 'in manual data entry'
  },
  {
    title: 'More Visibility',
    headline: 'See what’s happening across your business.',
    desc: 'Know exactly where every rupee, raw material gram, and work order stands. Real-time updates without having to call supervisors or accountants.',
    icon: Eye,
    accent: '#023020',
    stat: '100% Real-Time',
    statLabel: 'operational synchronization'
  },
  {
    title: 'Better Control',
    headline: 'Manage operations from one platform.',
    desc: 'Enforce multi-level approval hierarchies for purchases, scrap write-offs, and discounts. Never allow unauthorized payments or inventory leaks.',
    icon: Sliders,
    accent: '#059669',
    stat: 'Zero Leakage',
    statLabel: 'with strict role-based gates'
  },
  {
    title: 'Faster Decisions',
    headline: 'Get meaningful information when you need it.',
    desc: 'Instant profit & loss summaries, stock valuation, and customer aging reports at your fingertips. Act swiftly on market opportunities with confidence.',
    icon: Zap,
    accent: '#84cc16',
    stat: '10x Quicker',
    statLabel: 'management decisions'
  },
];

export default function WhyChoose({ onOpenDemo }) {
  return (
    <section className="py-24 lg:py-32 bg-[#F7FAF8] relative overflow-hidden border-y border-slate-100">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#00a86b]" />
            <span>The OrbX Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose <span className="gradient-text">OrbX.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Built specifically to solve the real everyday headaches of manufacturers, contractors, and growing commercial enterprises.
          </p>
        </div>

        {/* 4 Large Visual Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-sm card-lift flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle corner graphic */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-bl-full -z-0 opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#023020] text-[#00c87f] flex items-center justify-center shadow-md">
                      <Icon size={22} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-[#023020]">{b.stat}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{b.statLabel}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#023020] transition-colors">
                      {b.title}
                    </h3>
                    <div className="text-sm font-bold text-[#00a86b] mt-1">
                      {b.headline}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mt-3">
                      {b.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <span className="text-xs font-semibold text-slate-400">
                    Included across all OrbX modules
                  </span>
                  <button
                    onClick={onOpenDemo}
                    className="text-xs font-bold text-[#023020] hover:text-[#00a86b] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
