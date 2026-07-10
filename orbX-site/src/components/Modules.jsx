import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, ShoppingCart, TrendingUp, Factory, CheckCircle2, CreditCard, Users, FileText, Globe, Wrench, BarChart3, PieChart } from 'lucide-react';
import { fadeUp, scaleIn, stagger } from '../utils/anim';

const modules = [
  {icon:Package, name:'Inventory', desc:'Real-time stock control with batch and serial tracking across warehouses.'},
  {icon:ShoppingCart, name:'Purchase', desc:'Automated PO workflows with vendor management and three-way matching.'},
  {icon:TrendingUp, name:'Sales', desc:'Quotations to invoices with customer management and CRM integration.'},
  {icon:Factory, name:'Manufacturing', desc:'BOM, Work Orders, MRP, and comprehensive shop-floor control.'},
  {icon:CheckCircle2, name:'Quality', desc:'QC checks, inspection plans, non-conformance and corrective actions.'},
  {icon:CreditCard, name:'Finance', desc:'GL, AP/AR, bank reconciliation, and multi-currency reporting.'},
  {icon:Users, name:'HRMS', desc:'Employee records, attendance, leave management and org hierarchy.'},
  {icon:FileText, name:'Payroll', desc:'Automated payroll processing with statutory compliance and payslips.'},
  {icon:Globe, name:'CRM', desc:'Lead tracking, sales pipeline, and 360-degree customer visibility.'},
  {icon:Wrench, name:'Service', desc:'Field service management, AMC, and preventive maintenance tracking.'},
  {icon:BarChart3, name:'Dashboard', desc:'Real-time KPI dashboards and executive reporting views.'},
  {icon:PieChart, name:'Reports', desc:'Advanced analytics with scheduled exports and custom report builder.'},
];

export default function Modules() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="modules" className="py-28 bg-[#F6F8FA]" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF5E8] text-[#0B5D4B] text-sm font-semibold border border-[#0B5D4B]/20 mb-4">
            Modules
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight" style={{fontFamily:'Manrope,sans-serif'}}>
            Everything You Need, <span className="gradient-text">In One Platform</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-[17px] max-w-[560px] mx-auto">
            20+ tightly integrated modules covering every aspect of your manufacturing business.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {modules.map((m,i)=>(
            <motion.div key={i} variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'}
              transition={{delay:i*0.06}}
              className="bg-white rounded-[20px] p-6 border border-slate-100 card-lift group cursor-default shadow-sm">
              <div className="w-11 h-11 bg-[#DDF5E8] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0B5D4B] transition-colors duration-300">
                <m.icon size={20} className="text-[#0B5D4B] group-hover:text-white transition-colors duration-300"/>
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-1.5">{m.name}</h3>
              <p className="text-slate-500 text-[12px] leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
