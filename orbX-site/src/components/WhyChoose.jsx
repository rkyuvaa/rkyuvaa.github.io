import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Zap, Settings, TrendingUp, Layers, Lock, Monitor, Cpu, Headphones, ArrowRight } from 'lucide-react';
import { fadeLeft, fadeRight, fadeUp, scaleIn, stagger } from '../utils/anim';

const points = [
  {icon:Factory, title:'Manufacturing-Focused ERP', desc:'Every feature built specifically for real manufacturer workflows and needs.'},
  {icon:Monitor, title:'Modern User Interface', desc:'Clean, intuitive UI that requires minimal training for operational staff.'},
  {icon:Zap, title:'High Performance', desc:'Sub-second response times even with thousands of concurrent users globally.'},
  {icon:Lock, title:'Role-Based Security', desc:'Granular access control, audit trails, and enterprise-grade data encryption.'},
  {icon:Settings, title:'Workflow Automation', desc:'Automate approvals, notifications, and routine operations without coding.'},
  {icon:TrendingUp, title:'Easy Customization', desc:'Configure modules visually without any code changes or developer dependency.'},
  {icon:Layers, title:'Scalable Architecture', desc:'Grow from 10 to 10,000 users without any infrastructure or performance issues.'},
  {icon:Cpu, title:'AI-Ready Future', desc:'Built-in AI insights, demand forecasting, and anomaly detection capabilities.'},
  {icon:Headphones, title:'Dedicated Support', desc:'24/7 support with dedicated implementation partners and onboarding assistance.'},
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="why" className="py-28 bg-[#F6F8FA]" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF5E8] text-[#0B5D4B] text-sm font-semibold border border-[#0B5D4B]/20 mb-4">
            Why OrbX
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight" style={{fontFamily:'Manrope,sans-serif'}}>
            Why Manufacturers <span className="gradient-text">Choose OrbX</span>
          </motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p,i)=>(
            <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
              transition={{delay:i*0.08}}
              className="bg-white rounded-[20px] p-6 border border-slate-100 card-lift shadow-sm flex items-start gap-4 group">
              <div className="w-12 h-12 bg-[#DDF5E8] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B5D4B] transition-colors duration-300">
                <p.icon size={20} className="text-[#0B5D4B] group-hover:text-white transition-colors duration-300"/>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1.5 text-[15px]">{p.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
