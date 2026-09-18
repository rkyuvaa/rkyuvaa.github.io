import {
  ShieldCheck, Server, Lock, Headphones, FileCheck2,
  CheckCircle2
} from 'lucide-react';

const trustPillars = [
  {
    title: 'Bank-Grade Data Security',
    desc: 'Encrypted storage at rest and in transit with automated off-site daily backups. Your proprietary recipes, BOMs, and customer pricing remain 100% confidential.',
    icon: Lock,
  },
  {
    title: 'High Availability Cloud',
    desc: 'Hosted on redundant high-speed cloud infrastructure ensuring uninterrupted shop floor production, store billing, and remote attendance.',
    icon: Server,
  },
  {
    title: 'Indian Compliance Built-In',
    desc: 'Native support for GST invoices, HSN/SAC codes, E-Way bills, TDS calculations, and statutory labor reporting formats.',
    icon: FileCheck2,
  },
  {
    title: 'Dedicated Local Engineering Support',
    desc: 'Direct WhatsApp and phone assistance from engineers who understand your actual manufacturing and trading operational requirements.',
    icon: Headphones,
  },
];

export default function TrustCredibility() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container-orbx">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck size={13} className="text-[#00a86b]" />
            <span>Reliable Business Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for <span className="gradient-text">Real Business Operations.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Engineered with strict enterprise architecture to ensure zero downtime, zero data leakage, and seamless daily operations across your plants and offices.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((tp, idx) => {
            const Icon = tp.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7FAF8] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm card-lift space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-[#023020] flex items-center justify-center shadow-sm">
                    <Icon size={20} className="text-[#00a86b]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {tp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tp.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#00a86b]">
                  <CheckCircle2 size={13} />
                  <span>Enterprise Grade Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
