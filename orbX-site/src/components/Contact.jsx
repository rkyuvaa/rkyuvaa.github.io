import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { fadeLeft, scaleIn, stagger } from '../utils/anim';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="contact" className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="space-y-8">
            <motion.span variants={fadeLeft} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF5E8] text-[#0B5D4B] text-sm font-semibold border border-[#0B5D4B]/20">
              Get In Touch
            </motion.span>
            <motion.h2 variants={fadeLeft} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] leading-tight" style={{fontFamily:'Manrope,sans-serif'}}>
              Let's Build Your <span className="gradient-text">ERP Solution</span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-slate-500 text-[17px] leading-relaxed">
              Whether you need a full ERP implementation or a specific module — our expert team is ready to help you succeed.
            </motion.p>
            <div className="space-y-5 pt-2">
              {[
                {icon:Phone, label:'Call Us', text:'+91 97873 17484'},
                {icon:Mail, label:'Email', text:'rkyuvaa@hotmail.com'},
                {icon:MapPin, label:'Location', text:'Tamil Nadu, India'},
              ].map((item,i)=>(
                <motion.div key={i} variants={fadeLeft} transition={{delay:i*0.1}}
                  className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#DDF5E8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#0B5D4B]"/>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-0.5">{item.label}</div>
                    <div className="text-slate-700 font-semibold">{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
            className="bg-[#F6F8FA] rounded-[28px] p-10 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-8" style={{fontFamily:'Manrope,sans-serif'}}>Request a Demo</h3>
            <form className="space-y-5" onSubmit={e=>e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                {['Full Name','Company Name'].map((pl,i)=>(
                  <div key={i}>
                    <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">{pl.split(' ')[0]}</label>
                    <input type="text" placeholder={pl}
                      className="w-full bg-white border border-slate-200 rounded-[14px] px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/10 transition-all placeholder:text-slate-400"/>
                  </div>
                ))}
              </div>
              {[
                {l:'Email', p:'you@company.com', t:'email'},
                {l:'Phone', p:'+91 00000 00000', t:'tel'},
              ].map((f,i)=>(
                <div key={i}>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">{f.l}</label>
                  <input type={f.t} placeholder={f.p}
                    className="w-full bg-white border border-slate-200 rounded-[14px] px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/10 transition-all placeholder:text-slate-400"/>
                </div>
              ))}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Industry</label>
                <select className="w-full bg-white border border-slate-200 rounded-[14px] px-4 py-3.5 text-slate-600 text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/10 transition-all">
                  <option value="">Select Industry</option>
                  {['Automobile','Engineering','Manufacturing','Fabrication','Textile','Chemical','Food Processing','Electronics','Other'].map(o=>(
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows="4" placeholder="Tell us about your requirements and number of users..."
                  className="w-full bg-white border border-slate-200 rounded-[14px] px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/10 transition-all resize-none placeholder:text-slate-400"/>
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0B5D4B] text-white font-semibold py-4 rounded-[14px] hover:bg-[#084437] transition-all shadow-lg hover:shadow-[#0B5D4B]/30 hover:-translate-y-0.5 text-base">
                Request a Demo <ArrowRight size={16}/>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
