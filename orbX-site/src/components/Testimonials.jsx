import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp, scaleIn, stagger } from '../utils/anim';

const testimonials = [
  {name:'Arun Sharma', role:'MD, TechForge Industries', rating:5,
    review:'OrbX transformed our production floor. Real-time visibility and MRP accuracy reduced our inventory holding costs by 32% within just 6 months of going live.'},
  {name:'Priya Mehta', role:'CFO, Precision Components Ltd', rating:5,
    review:'The finance module is exceptional. Bank reconciliation that used to take 3 days now happens automatically. Our auditors love the complete audit trails.'},
  {name:'Ramesh Nair', role:'COO, AutoParts Manufacturing', rating:5,
    review:'The quality control module alone paid for the entire ERP implementation. Rejection rates dropped from 4.2% to 0.8% within the very first quarter.'},
  {name:'Sunita Kapoor', role:'IT Head, Electro Systems', rating:5,
    review:'Implementation was smooth and support is outstanding. We were live in just 6 weeks — significantly faster than what any other ERP vendor had promised us.'},
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF5E8] text-[#0B5D4B] text-sm font-semibold border border-[#0B5D4B]/20 mb-4">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight" style={{fontFamily:'Manrope,sans-serif'}}>
            Loved by <span className="gradient-text">Manufacturing Leaders</span>
          </motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t,i)=>(
            <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
              transition={{delay:i*0.12}}
              className="bg-[#F6F8FA] rounded-[24px] p-8 border border-slate-100 card-lift">
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_,j)=>(
                  <Star key={j} size={15} className="fill-amber-400 text-amber-400"/>
                ))}
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-7 italic">"{t.review}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B5D4B] to-[#2E8B57] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
