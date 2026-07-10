import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 dark-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#00a86b]/12 blur-[90px]"/>
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#00c87f]/5 blur-[70px]"/>
      </div>
      <div className="max-w-[780px] mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
          viewport={{once:true}} transition={{duration:.6}}
          className="text-[40px] md:text-[52px] font-bold text-white mb-6 leading-tight"
          style={{fontFamily:'Manrope,sans-serif'}}>
          Ready to Transform Your Manufacturing Business?
        </motion.h2>
        <motion.p
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
          viewport={{once:true}} transition={{duration:.6,delay:.1}}
          className="text-white/60 text-[18px] mb-10 leading-relaxed">
          Join 500+ manufacturers already using OrbX to streamline operations, improve quality, and boost profitability.
        </motion.p>
        <motion.div
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
          viewport={{once:true}} transition={{duration:.6,delay:.2}}
          className="flex flex-wrap justify-center gap-4">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] bg-white text-[#023020] font-semibold text-base hover:bg-[#00c87f] transition-all shadow-2xl hover:-translate-y-0.5">
            Book a Demo <ArrowRight size={16}/>
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all">
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
