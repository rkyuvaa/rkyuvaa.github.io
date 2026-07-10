import React from 'react';
import { Share2, ExternalLink, Globe, Code2 } from 'lucide-react';

const cols = [
  {title:'Products', links:['Manufacturing ERP','My Ledger','OrbX HRMS','OrbX CRM','OrbX Mobile']},
  {title:'Solutions', links:['Production Planning','Quality Control','Inventory Management','Financial Suite','Analytics & Reports']},
  {title:'Company', links:['About OrbX','Blog & Resources','Careers','Partner Program','Press & Media']},
];

export default function Footer() {
  const logoColor = 'white';
  const xColor = '#2E8B57';
  return (
    <footer className="bg-[#084437] text-white pt-20 pb-10">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="35" cy="50" r="30" fill="none" stroke={logoColor} strokeWidth="7"/>
                  <path d="M55 28 L83 72 M83 28 L55 72" stroke={xColor} strokeWidth="11" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold" style={{fontFamily:'Manrope,sans-serif'}}>
                Orb<span style={{color:'#2E8B57'}}>X</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[210px]">
              Manufacturing Intelligence. Simplified. The enterprise ERP platform designed for modern manufacturers.
            </p>
            <div className="flex gap-3">
              {[Share2,ExternalLink,Globe,Code2].map((Icon,i)=>(
                <a key={i} href="#" className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#2E8B57] transition-colors duration-300">
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>
          {cols.map((col,i)=>(
            <div key={i}>
              <h4 className="font-bold text-white text-[12px] uppercase tracking-[0.12em] mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link,j)=>(
                  <li key={j}>
                    <a href="#" className="text-white/45 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/35 text-sm">© 2026 OrbX Enterprise Suite. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Cookie Policy'].map(l=>(
              <a key={l} href="#" className="text-white/35 text-sm hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
