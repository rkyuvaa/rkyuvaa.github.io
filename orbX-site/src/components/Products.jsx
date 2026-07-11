import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, CreditCard, Users, Globe, Headphones, Smartphone, ArrowRight, Check } from 'lucide-react';
import { fadeUp, stagger, scaleIn } from '../utils/anim';

const main = [
  {
    name:'OrbX Manufacturing ERP', icon:Factory, badge:'Core Product', color:'#023020',
    desc:'A complete ERP platform built for manufacturers — from production planning to quality assurance and financial reporting.',
    features:['Production Planning','Bill of Materials (BOM)','Manufacturing Execution','Inventory Management','Purchase Management','Sales Management','Quality Control','Serial Number Tracking'],
  },
  {
    name:'OrbX My Ledger', icon:CreditCard, badge:'Finance Suite', color:'#00a86b',
    desc:'Comprehensive financial management with cash flow control, bank reconciliation, and complete audit trails.',
    features:['Cash Management','Bank Management','Expense Tracking','Cheque Management','Internal Transfers','Day Book','Ledger Reports'],
  },
  {
    name:'OrbX HRMS', icon:Users, badge:'HR Management', color:'#00c87f',
    desc:'Comprehensive Human Resource Management with attendance tracking, automated payroll processing, and multi-level approvals.',
    features:['Remote Attendance with GPS', 'Biometric Integration', 'Auto Payroll Processing', 'Auto Comp-Off Calculation', 'Salary Templates', 'Custom Salary Rules', 'Multiple Shift Management', 'Leave Approval Workflow', 'Daily HR Dashboard', 'Holiday Management', 'Company Holiday Rules', 'Custom LOP Rules', 'Employee Self-Service Portal', 'Multi-Level Approvals', 'Real-Time Reports & Analytics', 'Secure Role-Based Access'],
  },
  {
    name:'OrbX CRM', icon:Globe, badge:'Sales Suite', color:'#f59e0b',
    desc:'End-to-end Customer Relationship Management to track leads, manage pipelines, and close deals faster.',
    features:['Lead Management', 'Contact Directory', 'Sales Pipeline', 'Opportunity Tracking', 'Email Integration', 'Quotation Management', 'Task Management', 'Sales Forecasting', 'Campaign Management', 'Client Analytics', 'Interaction History', 'Multi-channel Communication', 'Document Management', 'Real-Time Dashboards'],
  },
  {
    name:'OrbX Service', icon:Headphones, badge:'Service Suite', color:'#8b5cf6',
    desc:'Robust service management to handle ticketing, maintenance schedules, and field technician dispatch.',
    features:['Ticketing System', 'SLA Management', 'Asset Management', 'Preventive Maintenance', 'Field Service Scheduling', 'Work Order Management', 'Warranty Tracking', 'Service Contracts', 'Parts Inventory', 'Customer Portal', 'Knowledge Base', 'Technician Dispatch'],
  },
  {
    name:'OrbX Mobile', icon:Smartphone, badge:'Mobile App', color:'#ec4899',
    desc:'Access your entire manufacturing and ERP ecosystem on the go with our dedicated mobile applications.',
    features:['iOS & Android Apps', 'Real-time Notifications', 'Offline Mode Sync', 'Barcode Scanning', 'Mobile Approvals', 'Field Data Entry', 'Live Dashboards', 'GPS Tracking', 'Mobile CRM', 'Leave Applications'],
  },
];



export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:'-80px'});
  return (
    <section id="products" className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView?'visible':'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c87f] text-[#023020] text-sm font-semibold border border-[#023020]/20 mb-4">
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
              className="group bg-white rounded-[24px] border-2 border-slate-100 p-8 card-lift hover:border-[#023020]/20 shadow-sm">
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
                    <Check size={13} className="text-[#023020] flex-shrink-0"/>{f}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a href="#contact" className="inline-flex items-center gap-1.5 text-[#023020] font-semibold text-sm hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14}/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
