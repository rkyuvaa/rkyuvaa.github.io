import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, TrendingUp, Package, CheckCircle2, BarChart3, Factory, Settings, ShoppingCart, Users, FileText } from 'lucide-react';
import { fadeUp, stagger } from '../utils/anim';

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      <div className="absolute inset-0 bg-[#00a86b]/20 blur-3xl rounded-full scale-110 pointer-events-none"/>
      <div className="relative float-anim bg-white rounded-[22px] shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-white/30 overflow-hidden">
        {/* Topbar */}
        <div className="bg-[#023020] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {['bg-red-400/60','bg-yellow-400/60','bg-green-400/60'].map((c,i)=>(
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`}/>
              ))}
            </div>
            <span className="text-white/70 text-[11px] font-medium">OrbX — Production Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 live-dot"/>
            <span className="text-white/50 text-[10px]">Live</span>
          </div>
        </div>
        <div className="flex h-[320px]">
          {/* Sidebar */}
          <div className="w-12 bg-[#011a12] flex flex-col items-center py-4 gap-3.5">
            {[BarChart3,Factory,Package,ShoppingCart,Users,FileText,Settings].map((Icon,i)=>(
              <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i===0?'bg-white/20':'hover:bg-white/10'}`}>
                <Icon size={14} className={i===0?'text-white':'text-white/35'}/>
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="flex-1 bg-[#F6F8FA] p-3.5 overflow-hidden">
            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[{l:'Revenue',v:'₹84.2L',c:'#023020',d:'+12%'},{l:'Orders',v:'1,248',c:'#00a86b',d:'+8%'},{l:'Quality',v:'98.4%',c:'#011a12',d:'+3%'}].map((k,i)=>(
                <div key={i} className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-100/80">
                  <div className="text-[9px] text-slate-400 mb-1">{k.l}</div>
                  <div className="text-[13px] font-bold text-slate-800">{k.v}</div>
                  <div className="text-[9px] font-semibold mt-0.5" style={{color:k.c}}>{k.d}</div>
                </div>
              ))}
            </div>
            {/* Chart */}
            <div className="bg-white rounded-xl p-3 mb-2.5 shadow-sm border border-slate-100/80">
              <div className="flex justify-between mb-2">
                <span className="text-[10px] font-semibold text-slate-700">Production Output</span>
                <span className="text-[9px] text-slate-400">Last 7 days</span>
              </div>
              <div className="flex items-end gap-1.5 h-14">
                {[40,65,50,80,60,92,74].map((h,i)=>(
                  <div key={i} className="flex-1 rounded-t-md" style={{
                    height:`${h}%`,
                    background:i===5?'#023020':`rgba(2,48,32,${0.18+i*0.07})`
                  }}/>
                ))}
              </div>
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-100/80">
                <div className="text-[9px] text-slate-400 mb-1.5">Inventory Health</div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[88%] bg-[#023020] rounded-full"/>
                </div>
                <div className="text-[10px] font-bold text-[#023020] mt-1">88% Optimal</div>
              </div>
              <div className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-100/80">
                <div className="text-[9px] text-slate-400 mb-2">Top Products</div>
                {['Prod A','Prod B','Prod C'].map((p,i)=>(
                  <div key={i} className="flex items-center gap-1 mb-1 last:mb-0">
                    <div className="w-1 h-1 rounded-full bg-[#023020] flex-shrink-0"/>
                    <span className="text-[8px] text-slate-600 flex-1">{p}</span>
                    <div className="h-1 bg-[#00a86b] rounded-full" style={{width:`${55-i*12}px`}}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating badges */}
      <motion.div animate={{y:[-6,6,-6]}} transition={{duration:4,repeat:Infinity}}
        className="absolute -left-10 top-14 bg-white rounded-2xl shadow-2xl border border-slate-100 px-3.5 py-2.5 flex items-center gap-2.5 z-10">
        <div className="w-8 h-8 bg-[#00c87f] rounded-xl flex items-center justify-center">
          <TrendingUp size={15} className="text-[#023020]"/>
        </div>
        <div>
          <div className="text-[9px] text-slate-400">MRP Efficiency</div>
          <div className="text-xs font-bold text-slate-800">+24% ↑</div>
        </div>
      </motion.div>
      <motion.div animate={{y:[6,-6,6]}} transition={{duration:5,repeat:Infinity}}
        className="absolute -right-8 bottom-16 bg-white rounded-2xl shadow-2xl border border-slate-100 px-3.5 py-2.5 flex items-center gap-2.5 z-10">
        <div className="w-8 h-8 bg-[#00c87f] rounded-xl flex items-center justify-center">
          <CheckCircle2 size={15} className="text-[#023020]"/>
        </div>
        <div>
          <div className="text-[9px] text-slate-400">Zero Downtime</div>
          <div className="text-xs font-bold text-slate-800">99.9% Up</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center dark-bg pt-[72px] overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full bg-[#00a86b]/12 blur-[130px]"/>
        <div className="absolute bottom-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#023020]/20 blur-[100px]"/>
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage:'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
          backgroundSize:'60px 60px'
        }}/>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold backdrop-blur-sm">
                <Zap size={13} className="text-[#00c87f]"/> Next-Generation Manufacturing ERP
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-[58px] md:text-[68px] font-bold text-white leading-[1.06]"
              style={{fontFamily:'Manrope,sans-serif'}}>
              Manufacturing <br/>
              <span style={{background:'linear-gradient(135deg,#00c87f 0%,#7dd3a8 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                Intelligence.
              </span> <br/>Simplified.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[18px] text-white/65 leading-relaxed max-w-[500px]">
              Digitize your manufacturing operations with one intelligent platform for Inventory, Production, Sales, Purchase, Finance, HR, CRM, and Quality Management.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-white text-[#023020] font-semibold text-base hover:bg-[#00c87f] transition-all shadow-2xl hover:-translate-y-0.5">
                Request Demo <ArrowRight size={16}/>
              </a>
              <a href="#products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all">
                <Play size={14} className="fill-white"/> Explore Products
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-10 pt-4 border-t border-white/10">
              {[['500+','Businesses'],['20+','Modules'],['99.9%','Uptime']].map(([v,l])=>(
                <div key={l}>
                  <div className="text-2xl font-bold text-white">{v}</div>
                  <div className="text-sm text-white/45 mt-0.5">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{opacity:0,x:60}} animate={{opacity:1,x:0}}
            transition={{duration:.9,delay:.3,ease:[0.22,1,0.36,1]}}
            className="hidden lg:block relative">
            <DashboardMockup/>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{y:[0,8,0]}} transition={{duration:1.5,repeat:Infinity}}
          className="w-6 h-10 rounded-full border-2 border-white/25 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full"/>
        </motion.div>
      </div>
    </section>
  );
}
