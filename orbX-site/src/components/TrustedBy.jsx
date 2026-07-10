import React from 'react';
import { Building2 } from 'lucide-react';

const brands = [
  'Tata Motors','Mahindra','Larsen & Toubro','Bajaj Auto','Godrej Industries',
  'Wipro Infrastructure','Ashok Leyland','TVS Motors','Bosch India','HCL Technologies',
  'Escorts Group','Thermax','BHEL','Kirloskar','Havells India'
];

export default function TrustedBy() {
  const doubled = [...brands,...brands];
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
        Trusted by leading manufacturers across India
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-8 whitespace-nowrap w-max">
          {doubled.map((b,i)=>(
            <div key={i} className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100 flex-shrink-0">
              <Building2 size={14} className="text-slate-300"/>
              <span className="text-slate-400 font-semibold text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
