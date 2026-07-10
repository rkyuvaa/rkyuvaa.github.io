import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Shield, Zap, Layers, Factory, Package, ClipboardList, BarChart2, Workflow, CreditCard, Award } from 'lucide-react';
import { fadeLeft, fadeRight, stagger, scaleIn } from '../utils/anim';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const stats = [
    {icon:BarChart3, label:'Real-time Reporting', val:'100%'},
    {icon:Shield, label:'System Availability', val:'99.9%'},
    {icon:Zap, label:'Performance', val:'Fast'},
    {icon:Layers, label:'Architecture', val:'Scalable'},
  ];
  const icons = [Factory,Package,ClipboardList,BarChart2,Workflow,CreditCard];
  const labels = ['Manufacturing','Inventory','Planning','Analytics','Workflow','Finance'];
  return (
    <section id="about" className="py-28 mesh" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeLeft} initial="hidden" animate={inView?'visible':'hidden'} className="relative">
            <div className="rounded-[24px] overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#084437] to-[#0B5D4B] shadow-2xl">
              <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
                {icons.map((Icon,i)=>(
                  <div key={i} className={`rounded-2xl flex flex-col items-center justify-center gap-2 p-4 ${i===0?'bg-white/20 col-span-2':'bg-white/10'}`}>
                    <Icon size={i===0?30:20} className="text-white/80"/>
                    <span className="text-white/55 text-[10px] font-medium">{labels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="space-y-8">
            <motion.span variants={fadeRight}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF5E8] text-[#0B5D4B] text-sm font-semibold border border-[#0B5D4B]/20">
              About OrbX
            </motion.span>
            <motion.h2 variants={fadeRight}
              className="text-[42px] md:text-[48px] font-bold text-[#1E293B] leading-tight"
              style={{fontFamily:'Manrope,sans-serif'}}>
              A Next-Gen ERP for <span className="gradient-text">Manufacturing Excellence</span>
            </motion.h2>
            <motion.p variants={fadeRight} className="text-slate-500 text-[17px] leading-relaxed">
              OrbX is an intelligent enterprise platform designed to digitize manufacturing operations — from procurement to production, quality control, inventory, finance, sales, HR, and analytics. Built for SMEs and large enterprises alike, OrbX delivers real-time insights, seamless workflows, and enterprise-grade security.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s,i)=>(
                <motion.div key={i} variants={scaleIn}
                  className="bg-white rounded-[18px] p-5 shadow-sm border border-slate-100 card-lift">
                  <div className="w-10 h-10 bg-[#DDF5E8] rounded-xl flex items-center justify-center mb-3">
                    <s.icon size={18} className="text-[#0B5D4B]"/>
                  </div>
                  <div className="text-2xl font-bold text-[#0B5D4B] mb-0.5">{s.val}</div>
                  <div className="text-slate-500 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
