import React, { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-emerald-500 selection:text-white scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white font-bold text-xl group-hover:bg-emerald-400 transition-colors">X</div>
            <span className="text-2xl font-bold text-white tracking-tight">Orb<span className="text-emerald-500">X</span></span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            <a href="#demo" className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">Request a Demo</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Innovation & Excellence
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Orb<span className="text-emerald-500">X</span> <br/>
                <span className="text-3xl lg:text-5xl text-slate-300 block mt-2">The Ultimate ERP & POS Solution for Retail & Small Businesses</span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                A powerful, offline-first system for billing, inventory, and point-of-sale. 
                <span className="block mt-4 font-medium text-slate-300 border-l-2 border-emerald-500 pl-4">EMPOWERING BUSINESSES THROUGH TECHNOLOGY with cutting-edge ERP systems, seamless mobile experiences, and dynamic web applications.</span>
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#demo" className="bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">View Demo</a>
                <a href="#contact" className="bg-slate-800 text-white border border-slate-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-700 transition-all">Contact Me</a>
                
                {/* Preserved wording links hidden structurally but kept in DOM */}
                <div className="hidden">
                  <a href="#contact" id="btn-hero-contact">Get In Touch</a>
                  <a href="#projects" id="btn-hero-work">View Work</a>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">11<span className="text-emerald-500">+</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Years Exp.</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">50<span className="text-emerald-500">+</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Web/IT Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">3</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Core Domains</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100<span className="text-emerald-500">%</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Uptime Focus</div>
                </div>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl blur-2xl"></div>
              <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 relative shadow-2xl">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-700">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Expertise</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { title: 'Web Apps', desc: 'Custom Solutions', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
                    { title: 'Websites', desc: 'UI/UX & Design', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
                    { title: 'ERP Systems', desc: 'Odoo Implementation', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
                    { title: 'Infrastructure', desc: 'Cloud & Network', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{item.title}</div>
                        <div className="text-sm text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Powerful ERP Features</h2>
            <p className="text-slate-400 text-lg">Highlighting key capabilities designed specifically to scale retail and small businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Billing System', desc: 'Fast, secure, and intuitive POS billing system for lightning-quick checkouts.' },
              { title: 'Inventory Tracking', desc: 'Real-time stock management with automated low-stock alerts and reports.' },
              { title: 'Multi-branch Support', desc: 'Manage multiple retail locations securely from a single unified dashboard.' },
              { title: 'Offline-first Sync', desc: 'Keep selling even when the internet goes down. Auto-syncs seamlessly when online.' }
            ].map((feat, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-slate-400">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 text-emerald-400 font-semibold tracking-wider uppercase text-sm">What I Do</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Development & digital innovation<br />for modern business</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                 <svg className="w-48 h-48 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Retail ERP Development</h3>
              <p className="text-slate-400 mb-6 relative z-10">Custom-tailored ERP solutions engineered specifically for retail environments to streamline operations and accounting.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                 <svg className="w-48 h-48 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">POS Systems</h3>
              <p className="text-slate-400 mb-6 relative z-10">Lightning-fast Point of Sale systems that are intuitive to use, reducing checkout times and training costs.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                 <svg className="w-48 h-48 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Inventory Management</h3>
              <p className="text-slate-400 mb-6 relative z-10">Precise tracking algorithms that prevent stockouts and overstocking across all your warehouses and branches.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                 <svg className="w-48 h-48 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Offline Sync Systems</h3>
              <p className="text-slate-400 mb-6 relative z-10">Robust architecture ensuring zero data loss during internet outages with seamless background synchronization.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'ERP Solutions', desc: 'End-to-end ERP customization, deployment, and training to streamline your organizational workflow and maximize efficiency.', icon: '⚙️' },
              { num: '02', title: 'Mobile Applications', desc: 'Designing and developing intuitive, high-performance mobile applications tailored to your business needs across all platforms.', icon: '📱' },
              { num: '03', title: 'Web Platforms', desc: 'Building robust, responsive, and scalable web platforms utilizing modern frameworks to solve complex business problems.', icon: '🌐' },
              { num: '04', title: 'IT Infrastructure', desc: 'Overseeing networking, cloud systems, and operational uptime through proactive maintenance and strategic planning.', icon: '☁️' },
              { num: '05', title: 'Cloud Services', desc: 'Comprehensive cloud administration, migration strategies, and security optimization for seamless enterprise collaboration.', icon: '☁️' },
              { num: '06', title: 'AI & Automation', desc: 'Leveraging advanced AI tools for intelligent task automation, deep data analytics, and continuous workflow optimization.', icon: '🤖' },
            ].map((svc, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl filter grayscale opacity-80">{svc.icon}</span>
                  <span className="text-emerald-500/50 font-mono text-sm font-bold">{svc.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo / Screenshots Section */}
      <section id="demo" className="py-24 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See It In Action</h2>
            <p className="text-slate-400 text-lg">A sneak peek into our intuitive interfaces designed to save you time and maximize conversions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:col-span-2 relative group rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 aspect-video md:aspect-[21/9] flex items-center justify-center hover:border-emerald-500/50 transition-colors">
              <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-emerald-500/50 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="font-semibold text-xl text-slate-300">POS Billing Screen Placeholder</span>
                </div>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 aspect-video flex items-center justify-center hover:border-emerald-500/50 transition-colors">
               <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-emerald-500/50 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                  <span className="font-semibold text-slate-300">Inventory Dashboard Placeholder</span>
                </div>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 aspect-video flex items-center justify-center hover:border-emerald-500/50 transition-colors">
               <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-emerald-500/50 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  <span className="font-semibold text-slate-300">Mobile UI Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me / About Section */}
      <section id="about" className="py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose Me</h2>
              <p className="text-slate-400 text-lg mb-10">Delivering enterprise-grade solutions tailored for the specific needs of retail and small businesses.</p>
              
              <div className="space-y-8">
                {[
                  { title: 'Custom-built solutions', desc: 'No generic templates. Everything is built from the ground up to match your exact workflow.' },
                  { title: 'Fast performance', desc: 'Optimized code architectures ensuring blazing fast load times and rapid POS transactions.' },
                  { title: 'Offline support', desc: 'Never stop selling. Our offline-first approach keeps you operational 24/7 without internet.' },
                  { title: 'Scalable architecture', desc: 'Built to grow with you. Open a new branch tomorrow with zero software friction.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur rounded-3xl p-10 border border-slate-700 shadow-xl">
              <div className="mb-4 text-emerald-400 font-semibold tracking-wider uppercase text-sm">Who I Am</div>
              <h3 className="text-2xl font-bold text-white mb-6">Bridging development with infrastructure</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
                <p>Welcome to <strong className="text-white">OrbX</strong>, a premier technology firm specializing in enterprise digital transformation. We bridge the gap between complex infrastructure and seamless user experiences.</p>
                <p>Our core focus revolves around three primary pillars: comprehensive <strong className="text-white">ERP Implementations</strong>, responsive <strong className="text-white">Mobile Applications</strong>, and scalable <strong className="text-white">Web Platforms</strong>.</p>
                <p>By leveraging cutting-edge technologies, we simplify business operations and empower organizations to accelerate their growth and achieve their strategic objectives.</p>
              </div>

              <div className="mt-10 space-y-5">
                {[
                  { name: 'Web Application Development', w: '90%' },
                  { name: 'Website Creation & Design', w: '88%' },
                  { name: 'ERP Implementation (Odoo)', w: '95%' },
                  { name: 'IT Infrastructure & Network', w: '92%' },
                  { name: 'AI Integration & Automation', w: '85%' }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-white font-medium uppercase tracking-wider">{skill.name}</span>
                    </div>
                    <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full relative">
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Experience Section */}
      <section id="projects" className="py-24 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 text-emerald-400 font-semibold tracking-wider uppercase text-sm">Selected Work</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Solutions that drive<br />results</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { title: 'Dynamic Web Application', desc: 'A responsive, fast-loading web application designed for comprehensive operational tracking and MIS reporting.', tags: ['Web App', 'JavaScript', 'Backend'] },
              { title: 'Corporate Website Creation', desc: 'Modern corporate website built from scratch with a focus on seamless UI/UX, fast load times, and SEO optimization.', tags: ['Website', 'HTML/CSS', 'UI/UX'] },
              { title: 'ERP Implementation & Optimization', desc: 'Spearheaded full-scale Odoo ERP implementations, driving cross-departmental efficiency and custom integrations.', tags: ['Odoo', 'ERP', 'Database'] },
              { title: 'IT Infrastructure Ecosystem', desc: 'Configured complex IT networks, IoT integrations, and managed Microsoft 365 environments ensuring seamless collaboration.', tags: ['Networking', 'IoT', 'Cloud'] },
            ].map((proj, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="aspect-video bg-slate-900 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-700" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 bg-slate-900 text-emerald-400 text-xs font-medium rounded border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div id="experience">
            <div className="mb-4 text-emerald-400 font-semibold tracking-wider uppercase text-sm">Journey</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">11+ years of building<br />& managing tech</h2>
            
            <div className="space-y-12 pl-4 md:pl-8 border-l border-slate-700 ml-4 md:ml-0">
              {[
                { year: 'Jan 2024 — Present', title: 'Lead Systems & Web Developer', org: 'Automotive Tech Sector', desc: 'Spearheading Odoo ERP optimization, supporting IoT application development, managing Microsoft 365 environments, and ensuring operational uptime.' },
                { year: '2018 — 2023', title: 'Senior Web App & ERP Developer', org: 'Retail & Lifestyle Manufacturing', desc: 'Maintained and customized ERP solutions, delivered data analytics/MIS reports, and streamlined system upgrades for executive decision-making.' },
                { year: 'Apr 2013 — Jan 2018', title: 'ERP & Solutions Developer', org: 'Investment & Logistics Group', desc: 'Delivered ERP training, conducted sales data analysis, managed statutory compliance, and supervised tech onboarding across operations.' },
                { year: '2013', title: 'Academic Graduation', org: 'Degree in Computer Applications', desc: 'Focused on business application development, computer science foundations, and technology integration.' },
              ].map((item, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[8px] md:-left-[9px] top-1.5 border-4 border-slate-900 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <div className="text-emerald-400 font-mono text-sm mb-2">{item.year}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-slate-300 font-medium mb-4">{item.org}</div>
                  <p className="text-slate-400 max-w-2xl leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-4 text-emerald-400 font-semibold tracking-wider uppercase text-sm">Get In Touch</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Let's build something<br />great together</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-lg">Whether you need a cutting-edge web platform, an intuitive mobile application, or comprehensive ERP support — we are ready to help.</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Ramesh Kumar</h3>
                <a href="mailto:rkyuvaa@hotmail.com" className="text-emerald-400 hover:text-emerald-300 text-lg transition-colors">rkyuvaa@hotmail.com</a>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://linkedin.com/in/rkyuvaa" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-xl text-white hover:bg-slate-700 transition-colors border border-slate-700 font-medium">
                  💼 LinkedIn
                </a>
                <a href="tel:+919787317484" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-xl text-white hover:bg-slate-700 transition-colors border border-slate-700 font-medium">
                  📞 9787317484
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 lg:p-10 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Request a Demo</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 resize-none" placeholder="Tell us about your business needs..."></textarea>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  Submit Request
                </button>
                <a href="https://wa.me/919787317484" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.564 5.823 0 10.564 4.745 10.564 10.568 0 5.824-4.74 10.564-10.564 10.564z" /></svg>
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {['IT Infrastructure', 'Web Platforms', 'Mobile Applications', 'Enterprise ERP Solutions', 'Cloud Infrastructure', 'Data Analytics', 'Enterprise Architecture', 'Networking', 'Cloud Security', 'AI Automation'].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-slate-900 text-slate-400 rounded-lg text-sm border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">{skill}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 text-slate-500 text-sm">
            <p>© 2026 OrbX — ERP · MOBILE · WEB</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
