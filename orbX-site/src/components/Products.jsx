import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, CreditCard, Users, Globe, Headphones, Smartphone, ArrowRight, Check } from 'lucide-react';
import { fadeUp, stagger, scaleIn } from '../utils/anim';

const main = [
  {
    name:'OrbX Manufacturing ERP', icon:Factory, badge:'Core Product', color:'#0B5D4B',
    desc:'A complete ERP platform built for manufacturers — from production planning to quality assurance and financial reporting.',
    features:['Production Planning','Bill of Materials (BOM)','Manufacturing Execution','Inventory Management','Purchase Management','Sales Management','Quality Control','Serial Number Tracking'],
  },
  {
    name:'OrbX My Ledger', icon:CreditCard, badge:'Finance Suite', color:'#2E8B57',
    desc:'Comprehensive financial management with cash flow control, bank reconciliation, and complete audit trails.',
    features:['Cash Management','Bank Management','Expense Tracking','Cheque Management','Internal Transfers','Day Book','Ledger Reports'],
  },
];

const soon = [
  {name:'OrbX HRMS', icon:Users, desc:'Human Resource Management'},
  {name:'OrbX CRM', icon:Globe, desc:'Customer Relationship'},
  {name:'OrbX Service', icon:Headphones, desc:'Service & Maintenance'},
  {name:'OrbX Mobile', icon:Smartphone, desc:'Mobile-first Operations'},
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="products" className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF5E8] text-[#0B5D4B] text-sm font-semibold border border-[#0B5D4B]/20 mb-4">
            Our Products
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight" style={{fontFamily:'Manrope,sans-serif'}}>
            The Complete <span className="gradient-text">Enterprise Suite</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-[17px] max-w-[560px] mx-auto">
            Purpose-built modules that work seamlessly together to power your entire manufacturing operation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {main.map((p,i)=>(
            <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
              transition={{delay:i*0.15}}
              className="group bg-white rounded-[24px] border-2 border-slate-100 p-8 card-lift hover:border-[#0B5D4B]/20 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{background:`${p.color}18`}}>
                  <p.icon size={26} style={{color:p.color}}/>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{background:`${p.color}14`,color:p.color}}>
                  {p.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3" style={{fontFamily:'Manrope,sans-serif'}}>{p.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                {p.features.map((f,j)=>(
                  <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check size={13} className="text-[#0B5D4B] flex-shrink-0"/>{f}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a href="#contact" className="inline-flex items-center gap-1.5 text-[#0B5D4B] font-semibold text-sm hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14}/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-[24px] bg-[#F6F8FA] border border-slate-100 p-8">
          <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-[0.18em] mb-7">Coming Soon</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {soon.map((p,i)=>(
              <motion.div key={i} variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'}
                transition={{delay:.3+i*.1}}
                className="bg-white rounded-[18px] p-6 text-center border border-slate-100 card-lift">
                <div className="w-12 h-12 bg-[#DDF5E8] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <p.icon size={20} className="text-[#0B5D4B]"/>
                </div>
                <div className="font-bold text-slate-700 text-sm mb-1">{p.name}</div>
                <div className="text-slate-400 text-xs">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
