import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, scaleIn, stagger } from '../utils/anim';

const industries = [
  {name:'Automobile', emoji:'🚗', benefit:'Multi-plant BOM, serial tracking, dealer management integration.'},
  {name:'Engineering', emoji:'⚙️', benefit:'Project-based manufacturing, resource planning and cost tracking.'},
  {name:'Manufacturing', emoji:'🏭', benefit:'End-to-end production visibility, shop-floor control and MRP.'},
  {name:'Fabrication', emoji:'🔩', benefit:'Job work, sub-contracting, material accounting and weight tracking.'},
  {name:'Textile', emoji:'🧵', benefit:'Batch tracking, dyeing, weaving process and fabric management.'},
  {name:'Chemical', emoji:'🧪', benefit:'Formula management, safety compliance, MSDS and lot traceability.'},
  {name:'Food Processing', emoji:'🍃', benefit:'Expiry tracking, FIFO, FSSAI compliance and shelf-life management.'},
  {name:'Electronics', emoji:'💡', benefit:'Component traceability, RoHS compliance, warranty and service tracking.'},
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="industries" className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c87f] text-[#023020] text-sm font-semibold border border-[#023020]/20 mb-4">
            Industries We Serve
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight" style={{fontFamily:'Comfortaa, cursive, sans-serif'}}>
            Tailored for <span className="gradient-text">Diverse Industries</span>
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind,i)=>(
            <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
              transition={{delay:i*0.08}}
              className="group bg-[#F6F8FA] rounded-[20px] p-6 border border-slate-100 card-lift cursor-default relative overflow-hidden">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">{ind.emoji}</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">{ind.name}</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">{ind.benefit}</p>
              {/* Hover overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#023020] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-[20px]"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
