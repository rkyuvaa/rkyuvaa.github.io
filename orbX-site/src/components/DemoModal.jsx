import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Calendar, Building, Mail, Phone, User, ShieldCheck } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    module: 'OrbX ERP (Complete Suite)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi OrbX Team, I would like to book a personalized product demo.%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Module:* ${formData.module}%0A*Notes:* ${formData.message || 'None'}`;
    const waUrl = `https://wa.me/919787317484?text=${msg}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#011a12]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="bg-[#023020] text-white p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#00a86b]/20 rounded-full blur-2xl pointer-events-none" />
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a86b]/20 border border-[#00a86b]/40 text-[#00c87f] text-xs font-semibold uppercase tracking-wider mb-2">
                <Calendar size={12} /> Personalized 1-on-1 Walkthrough
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Book an OrbX Demo</h3>
              <p className="text-white/80 text-sm mt-1">
                See how OrbX unifies your business operations in 20 minutes.
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#00a86b] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Demo Request Initiated!</h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Opening WhatsApp to connect you directly with our solutions engineering team. We typically respond within 15 minutes during business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); onClose(); }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#023020] text-white text-sm font-semibold hover:bg-[#011a12] transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Arun Kumar"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Precision"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arun@acmeprecision.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Primary Product Interest
                    </label>
                    <select
                      value={formData.module}
                      onChange={e => setFormData({ ...formData, module: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 focus:bg-white transition-all"
                    >
                      <option>OrbX ERP (Complete Enterprise Suite)</option>
                      <option>OrbX Business Suite (B2B & Sales)</option>
                      <option>OrbX HRMS & Biometric Payroll</option>
                      <option>OrbX My Ledger (Financial Suite)</option>
                      <option>OrbX Project & Task Management</option>
                      <option>OrbX Restaurant Management</option>
                      <option>Manufacturing & Shop Floor MRP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Specific Needs / User Count (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current challenges, plants, or team size..."
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#023020] focus:ring-2 focus:ring-[#023020]/10 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#023020]/25 transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
                  >
                    Confirm & Schedule Demo <ArrowRight size={16} />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    <span>Your information is strictly private. No spam, ever.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
