import { useState } from 'react';
import {
  Phone, Mail, MapPin, MessageSquare, CheckCircle2,
  Clock, ShieldCheck, Send
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi OrbX Team,%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Industry:* ${formData.industry}%0A*Message:* ${formData.message}`;
    const waUrl = `https://wa.me/919787317484?text=${text}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
                <MessageSquare size={13} className="text-[#00a86b]" />
                <span>Let's Connect</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Let's Build Your <br />
                <span className="gradient-text">ERP Solution.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you need a full enterprise implementation or want to start with a single module — our engineering team is ready to assist you.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4 pt-2">
              <a
                href="tel:+919787317484"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7FAF8] hover:bg-slate-100/80 border border-slate-200/70 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#023020] shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} className="text-[#00a86b]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Call Us Direct</div>
                  <div className="text-base font-extrabold text-slate-800 mt-0.5">+91 97873 17484</div>
                </div>
              </a>

              <a
                href="mailto:hello@orbx.in"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7FAF8] hover:bg-slate-100/80 border border-slate-200/70 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#023020] shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} className="text-[#00a86b]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Inquiries</div>
                  <div className="text-base font-extrabold text-slate-800 mt-0.5">hello@orbx.in</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7FAF8] border border-slate-200/70">
                <div className="w-12 h-12 rounded-xl bg-white text-[#023020] shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#00a86b]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</div>
                  <div className="text-base font-extrabold text-slate-800 mt-0.5">Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/60 flex items-center gap-3">
              <Clock size={18} className="text-[#00a86b] flex-shrink-0" />
              <div className="text-xs text-slate-700">
                <span className="font-bold text-[#023020]">Fast Response Guarantee:</span> Inquiries receive a tailored response within 15 minutes during standard Indian business hours.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F7FAF8] rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              Request a Consultation
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Fill out the details below to discuss your exact plant setup, user count, or custom workflow requirements.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#00a86b] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Message Dispatched!</h4>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Opening WhatsApp to send your inquiry directly to our lead engineering desk.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#023020] text-white text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Arun Kumar"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Company / Plant Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Precision Tools"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arun@apexprecision.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Select Your Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 transition-all"
                  >
                    <option value="">Select your industry sector</option>
                    <option value="Manufacturing & Machine Engineering">Manufacturing & Machine Engineering</option>
                    <option value="Construction & Contracting">Construction & Contracting</option>
                    <option value="Automotive & Spare Parts">Automotive & Spare Parts</option>
                    <option value="Restaurant & Food Chains">Restaurant & Food Chains</option>
                    <option value="Retail & Multi-Store">Retail & Multi-Store</option>
                    <option value="Professional & Field Services">Professional & Field Services</option>
                    <option value="Other Commercial Business">Other Commercial Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    How Can We Help? (Modules or User Requirements)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current challenges, number of branches, or team size..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#023020]/25 transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
                >
                  <span>Submit Inquiry</span>
                  <Send size={15} />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck size={13} className="text-[#00a86b]" />
                  <span>Strictly confidential. No spam or third-party sharing.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
