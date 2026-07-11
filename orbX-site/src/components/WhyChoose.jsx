import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Zap, Settings, TrendingUp, Layers, Lock, Monitor, Cpu, Headphones, ArrowRight, Rocket, Palette, RefreshCw, Handshake, Bot } from 'lucide-react';
import { fadeLeft, fadeRight, fadeUp, scaleIn, stagger } from '../utils/anim';

const points = [
  {icon:Rocket, title:'Unified Business Platform', desc:'Manage Finance, HR, CRM, Inventory, Manufacturing, Sales, and other business operations from one integrated platform.'},
  {icon:Palette, title:'Modern User Experience', desc:'Clean, intuitive, and easy-to-use interface that minimizes training and improves user adoption.'},
  {icon:Zap, title:'High Performance', desc:'Fast, reliable, and optimized to support businesses of every size with consistent performance.'},
  {icon:Lock, title:'Enterprise Security', desc:'Protect your business with role-based access control, audit logs, and enterprise-grade security.'},
  {icon:RefreshCw, title:'Smart Automation', desc:'Automate repetitive tasks, approvals, notifications, and business workflows to increase efficiency.'},
  {icon:Settings, title:'Flexible & Customizable', desc:'Adapt forms, workflows, reports, and modules to match your business requirements without complexity.'},
  {icon:TrendingUp, title:'Scalable Growth', desc:'Start with the modules you need today and expand effortlessly as your business grows.'},
  {icon:Bot, title:'AI Ready', desc:'Leverage intelligent analytics, forecasting, business insights, and future AI capabilities.'},
  {icon:Handshake, title:'Dedicated Support', desc:'Benefit from expert implementation, training, customization, and ongoing support from the OrbX team.'},
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="why" className="py-28 bg-[#F6F8FA]" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c87f] text-[#023020] text-sm font-semibold border border-[#023020]/20 mb-4">
            Why OrbX
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight" style={{fontFamily:'Manrope,sans-serif'}}>
            Why Businesses <span className="gradient-text">Choose OrbX</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-[17px] max-w-[700px] mx-auto">
            Empowering organizations with a modern, scalable, and intelligent business platform designed to simplify operations, improve productivity, and support long-term growth.
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p,i)=>(
            <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
              transition={{delay:i*0.08}}
              className="bg-white rounded-[20px] p-6 border border-slate-100 card-lift shadow-sm flex items-start gap-4 group">
              <div className="w-12 h-12 bg-[#00c87f] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#023020] transition-colors duration-300">
                <p.icon size={20} className="text-[#023020] group-hover:text-white transition-colors duration-300"/>
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
