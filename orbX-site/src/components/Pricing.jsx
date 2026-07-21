import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { fadeUp, scaleIn, stagger } from '../utils/anim';

const plans = [
  {name:'Starter', highlight:false,
    desc:'For small manufacturers getting started with digital operations.',
    features:['Up to 10 Users','Manufacturing ERP Core','My Ledger Finance','Email Support','Cloud Hosting','Basic Reports','Standard Modules']},
  {name:'Professional', highlight:true,
    desc:'Ideal for growing mid-size manufacturing operations.',
    features:['Up to 50 Users','All Starter Features','HRMS & Payroll','CRM Module','Priority 24/5 Support','Advanced Analytics','Multi-branch Support','API Access','Custom Dashboards']},
  {name:'Enterprise', highlight:false,
    desc:'For large-scale manufacturers with enterprise requirements.',
    features:['Unlimited Users','All Professional Features','Custom Module Development','Dedicated Servers','24/7 Premium Support','On-Premise Option','SLA Guarantee','Source Code License','Dedicated Account Manager']},
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="pricing" className="py-28 bg-[#F6F8FA]" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c87f] text-[#023020] text-sm font-semibold border border-[#023020]/20 mb-4">
            Pricing
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight" style={{fontFamily:'Comfortaa, cursive, sans-serif'}}>
            Transparent, <span className="gradient-text">Flexible Pricing</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-[17px] max-w-[540px] mx-auto">
            All plans include implementation support and training. Contact us for a custom quotation tailored to your needs.
          </motion.p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p,i)=>(
            <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
              transition={{delay:i*0.15}}
              className={`rounded-[24px] p-8 border-2 card-lift relative overflow-hidden
                ${p.highlight
                  ? 'bg-[#023020] border-[#023020] shadow-[0_30px_80px_rgba(2,48,32,0.3)]'
                  : 'bg-white border-slate-100 shadow-sm'}`}>
              {p.highlight && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold tracking-wide">Most Popular</span>
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${p.highlight?'text-white':'text-slate-800'}`} style={{fontFamily:'Comfortaa, cursive, sans-serif'}}>{p.name}</h3>
              <p className={`text-sm mb-8 leading-relaxed ${p.highlight?'text-white/65':'text-slate-500'}`}>{p.desc}</p>
              <ul className="space-y-3 mb-10">
                {p.features.map((f,j)=>(
                  <li key={j} className="flex items-center gap-3 text-[14px]">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${p.highlight?'bg-white/20':'bg-[#00c87f]'}`}>
                      <Check size={11} className={p.highlight?'text-white':'text-[#023020]'}/>
                    </div>
                    <span className={p.highlight?'text-white/85':'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-[14px] font-semibold text-[15px] transition-all
                  ${p.highlight
                    ? 'bg-white text-[#023020] hover:bg-[#00c87f]'
                    : 'bg-[#023020] text-white hover:bg-[#011a12]'}`}>
                Request Quote <ArrowRight size={14}/>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
