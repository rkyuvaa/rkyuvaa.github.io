import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Building2, Code2, Smartphone, Globe, Cloud, Server,
  Shield, GitMerge, BarChart3, Bot, Factory, Target,
  Check, ChevronDown, ChevronUp
} from 'lucide-react';
import { fadeUp, scaleIn, stagger } from '../utils/anim';

const categories = [
  {
    icon: Building2, color: '#023020', bg: '#02302014',
    title: 'ERP Solutions',
    items: [
      'ERP Implementation','ERP Customization','ERP Migration',
      'ERP Support & Maintenance','Business Process Automation',
      'Workflow Design','ERP User Training','SOP Documentation',
    ],
  },
  {
    icon: Code2, color: '#0284c7', bg: '#0284c714',
    title: 'Software Development',
    items: [
      'Custom Business Applications','HRMS Development','CRM Solutions',
      'Inventory Management Systems','Manufacturing ERP',
      'Purchase & Sales Management','Service Management Systems',
      'Finance & Accounting Solutions',
    ],
  },
  {
    icon: Smartphone, color: '#7c3aed', bg: '#7c3aed14',
    title: 'Mobile Application Development',
    items: [
      'Android Applications','Employee Self-Service (ESS)',
      'Attendance Applications','Sales Force Automation',
      'Field Service Applications',
    ],
  },
  {
    icon: Globe, color: '#0891b2', bg: '#0891b214',
    title: 'Web Development',
    items: [
      'Corporate Websites','Business Portals','Customer Portals',
      'Dealer Management Portals','Landing Pages','Website Maintenance',
    ],
  },
  {
    icon: Cloud, color: '#f59e0b', bg: '#f59e0b14',
    title: 'Cloud & DevOps',
    items: [
      'AWS Cloud Deployment','Docker Containerization',
      'Linux Server Administration','Nginx Configuration',
      'Git & GitHub','SSL Configuration',
      'Domain & DNS Management','Cloud Backup & Disaster Recovery',
    ],
  },
  {
    icon: Server, color: '#64748b', bg: '#64748b14',
    title: 'IT Infrastructure',
    items: [
      'Network Design & Management','Server Installation & Configuration',
      'Active Directory','Microsoft 365 Administration',
      'VoIP/IPBX Management','IT Asset Management',
      'Hardware & Software Troubleshooting','IT Procurement & Deployment',
    ],
  },
  {
    icon: Shield, color: '#dc2626', bg: '#dc262614',
    title: 'Security Solutions',
    items: [
      'VPN Setup','Firewall Configuration','Endpoint Security',
      'Access Control Planning','Server Hardening','User Access Management',
    ],
  },
  {
    icon: GitMerge, color: '#059669', bg: '#05966914',
    title: 'System Integration',
    items: [
      'Biometric Device Integration','Barcode & QR Code Solutions',
      'API Integration','Payment Gateway Integration',
      'Email Integration','SMS & WhatsApp Integration',
      'Microsoft 365 Integration',
    ],
  },
  {
    icon: BarChart3, color: '#d97706', bg: '#d9770614',
    title: 'Business Intelligence',
    items: [
      'MIS Reporting','Executive Dashboards','Custom Reports',
      'KPI Monitoring','Business Analytics',
    ],
  },
  {
    icon: Bot, color: '#6d28d9', bg: '#6d28d914',
    title: 'Automation & AI',
    items: [
      'Workflow Automation','Attendance Automation','Payroll Automation',
      'AI Chatbot Integration','OCR & Document Automation',
      'Business Process Automation',
    ],
  },
  {
    icon: Factory, color: '#00a86b', bg: '#00a86b14',
    title: 'Manufacturing Solutions',
    items: [
      'Production Planning','Inventory & Warehouse Management',
      'Quality Control','Serial Number Tracking',
      'Material Requirement Planning (MRP)','Production Monitoring',
    ],
  },
  {
    icon: Target, color: '#e11d48', bg: '#e11d4814',
    title: 'IT Consulting',
    items: [
      'Digital Transformation','IT Infrastructure Consulting',
      'ERP Consulting','Process Optimization',
      'User Training','Annual Maintenance Contracts (AMC)',
    ],
  },
];

const techs = [
  'Odoo ERP','React','Vite','HTML5','CSS3','JavaScript','TypeScript',
  'Python','FastAPI','PostgreSQL','Docker','Linux','Ubuntu','Nginx',
  'Git','GitHub','AWS EC2','Microsoft 365','Power BI','REST API',
];

const techColors = [
  '#023020','#0284c7','#7c3aed','#f59e0b','#dc2626','#059669',
  '#0891b2','#d97706','#6d28d9','#e11d48','#00a86b','#64748b',
];

function CategoryCard({ cat, index, inView }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cat.items : cat.items.slice(0, 4);
  const hasMore = cat.items.length > 4;

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.06 }}
      className="bg-white rounded-[20px] p-6 border border-slate-100 card-lift shadow-sm flex flex-col group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#023020]"
          style={{ background: cat.bg }}
        >
          <cat.icon size={20} style={{ color: cat.color }} className="group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-bold text-slate-800 text-[15px] leading-tight" style={{ fontFamily: 'Manrope,sans-serif' }}>
          {cat.title}
        </h3>
      </div>

      <ul className="space-y-2 flex-1">
        {visible.map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-[13px] text-slate-600">
            <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: cat.color }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 text-xs font-semibold transition-colors"
          style={{ color: cat.color }}
        >
          {expanded
            ? <><ChevronUp size={13} /> Show less</>
            : <><ChevronDown size={13} /> +{cat.items.length - 4} more</>
          }
        </button>
      )}
    </motion.div>
  );
}

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="expertise" className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-16">
          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c87f] text-[#023020] text-sm font-semibold border border-[#023020]/20 mb-4">
            Our Expertise
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-[42px] md:text-[48px] font-bold text-[#1E293B] mb-5 leading-tight"
            style={{ fontFamily: 'Manrope,sans-serif' }}>
            End-to-End <span className="gradient-text">IT & Business Solutions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-[17px] max-w-[620px] mx-auto">
            From ERP implementation to cloud infrastructure, mobile apps, security, and AI — we deliver comprehensive technology services tailored to your business needs.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {categories.map((cat, i) => (
            <CategoryCard key={i} cat={cat} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
          className="rounded-[24px] bg-[#F6F8FA] border border-slate-100 p-8"
        >
          <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-[0.18em] mb-6">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default"
                style={{
                  borderColor: techColors[i % techColors.length] + '40',
                  color: techColors[i % techColors.length],
                  background: techColors[i % techColors.length] + '0d',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
