import {
  Cloud, Sliders, GraduationCap, PlayCircle, ArrowRight,
  CheckCircle2, Sparkles
} from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Setup',
    subtitle: 'Rapid Cloud Provisioning',
    desc: 'We set up your secure, dedicated OrbX cloud instance with company branches, tax profiles, and basic organizational hierarchy in 24 hours.',
    icon: Cloud,
  },
  {
    num: '02',
    title: 'Configure',
    subtitle: 'Master Data & Workflow Mapping',
    desc: 'Our solution engineers configure your multi-level BOMs, item categories, customer master, vendor terms, and employee wage rules.',
    icon: Sliders,
  },
  {
    num: '03',
    title: 'Train',
    subtitle: 'Hands-on Team Onboarding',
    desc: 'Role-specific practical training sessions for store keepers, production managers, sales executives, and accountants using real plant data.',
    icon: GraduationCap,
  },
  {
    num: '04',
    title: 'Run',
    subtitle: 'Seamless Live Operations',
    desc: 'Go live smoothly with on-call support. Watch purchase, sales, stock, and finance flow into unified reports from day one.',
    icon: PlayCircle,
  },
];

export default function HowItWorks({ onOpenDemo }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container-orbx">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#00a86b]" />
            <span>Smooth Implementation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How It <span className="gradient-text">Works.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Transitioning to OrbX is frictionless. Our dedicated onboarding team guides your business through a clear, structured 4-step implementation.
          </p>
        </div>

        {/* Timeline (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-slate-100 -translate-y-12 -z-0">
            <div className="h-full bg-gradient-to-r from-[#023020] via-[#00a86b] to-[#84cc16] w-full opacity-60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm card-lift flex flex-col justify-between relative group"
                >
                  <div className="space-y-4">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-extrabold text-[#023020]/20 group-hover:text-[#00a86b] transition-colors">
                        {step.num}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-[#023020] text-[#00c87f] flex items-center justify-center shadow-md">
                        <Icon size={20} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#00a86b] mt-0.5">
                        {step.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <CheckCircle2 size={13} className="text-[#00a86b]" />
                    <span>Step {idx + 1} of 4</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-bold text-xs shadow-lg transition-all"
          >
            <span>Start Your 4-Step Onboarding Today</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
