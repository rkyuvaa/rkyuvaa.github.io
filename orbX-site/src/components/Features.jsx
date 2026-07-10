import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { fadeLeft, scaleIn, stagger } from '../utils/anim';

const features = [
  'Real-Time Dashboard','Barcode Support','Multi-Branch Management','Role-Based Access Control',
  'Workflow Automation','Mobile Friendly','Export PDF Reports','Export Excel Reports',
  'Audit Logs','Smart Notifications','Advanced Analytics','Cloud & On-Premise',
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="features" className="py-28 dark-bg relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-white/5 blur-3xl"/>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#00a86b]/10 blur-3xl"/>
      </div>
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="space-y-8">
            <motion.span variants={fadeLeft} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
              Key Capabilities
            </motion.span>
            <motion.h2 variants={fadeLeft} className="text-[42px] md:text-[48px] font-bold text-white leading-tight" style={{fontFamily:'Manrope,sans-serif'}}>
              Built with Enterprise-Grade{' '}
              <span style={{background:'linear-gradient(135deg,#00c87f,#7dd3a8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                Capabilities
              </span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-white/60 text-[17px] leading-relaxed">
              OrbX delivers the tools your manufacturing team needs — without the complexity of traditional ERP systems. Deploy on cloud or on-premise with equal ease.
            </motion.p>
            <motion.div variants={fadeLeft}>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-white text-[#023020] font-semibold text-base hover:bg-[#00c87f] transition-all shadow-2xl hover:-translate-y-0.5">
                Start Free Demo <ArrowRight size={16}/>
              </a>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f,i)=>(
              <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
                transition={{delay:i*0.07}}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[16px] px-4 py-3.5 border border-white/10 hover:bg-white/15 transition-colors cursor-default">
                <div className="w-7 h-7 rounded-lg bg-[#00a86b]/35 flex items-center justify-center flex-shrink-0">
                  <Check size={13} className="text-[#00c87f]"/>
                </div>
                <span className="text-white/85 text-[13px] font-medium">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
