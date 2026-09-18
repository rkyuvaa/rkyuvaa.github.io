import {
  ArrowRight, PhoneCall, CheckCircle2, Sparkles, Calendar
} from 'lucide-react';

export default function CTA({ onOpenDemo }) {
  return (
    <section className="py-24 lg:py-32 bg-[#023020] text-white relative overflow-hidden">
      {/* Subtle Background Glows and Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00a86b]/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#84cc16]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00c87f] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} />
            <span>Next Generation Business Suite</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Bring Your <br />
            <span className="text-[#00c87f]">Business Together?</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-white/80 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Discover how OrbX can simplify your daily operations. Connect sales, inventory, finance, and manufacturing in one intelligent platform.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#023020] hover:bg-emerald-50 font-bold text-sm shadow-xl shadow-black/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar size={16} />
              <span>Book a Demo</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="https://wa.me/919787317484?text=Hi%20OrbX%20Team,%20I%20would%20like%20to%20talk%20about%20implementing%20OrbX%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 flex items-center justify-center gap-2.5 transition-all"
            >
              <PhoneCall size={16} />
              <span>Talk to Us (+91 97873 17484)</span>
            </a>
          </div>

          {/* Assurance badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#00c87f]" />
              No credit card required for demo
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#00c87f]" />
              20-minute tailored walkthrough
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#00c87f]" />
              Direct access to solutions engineer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
