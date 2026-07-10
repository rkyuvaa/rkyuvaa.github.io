import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

function Counter({end, suffix, label}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {once:true});
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const inc = end / (2000 / 16);
    const t = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2" style={{fontFamily:'Manrope,sans-serif',fontVariantNumeric:'tabular-nums'}}>
        {count}{suffix}
      </div>
      <div className="text-white/55 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    {end:50, suffix:'+', label:'Business Processes'},
    {end:20, suffix:'+', label:'Integrated Modules'},
    {end:500, suffix:'+', label:'Businesses Served'},
    {end:99, suffix:'%', label:'System Uptime'},
  ];
  return (
    <section className="py-24 dark-bg">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s,i) => <Counter key={i} {...s}/>)}
        </div>
      </div>
    </section>
  );
}
