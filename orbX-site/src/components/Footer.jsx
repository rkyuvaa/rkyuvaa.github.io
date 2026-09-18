import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logoDark from '../assets/logo-orbx.png';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              {/* Logo on dark background */}
              <div className="bg-white/10 px-3 py-1.5 rounded-xl inline-block backdrop-blur-sm border border-white/10">
                <img src={logoDark} alt="OrbX" className="h-10 w-auto object-contain brightness-125" />
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              OrbX is the modern unified business management platform connecting sales, purchase, inventory, finance, HR, projects, and operations into one single source of truth.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#00c87f]" />
                <a href="tel:+919787317484" className="hover:text-white transition-colors">+91 97873 17484</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#00c87f]" />
                <a href="mailto:hello@orbx.in" className="hover:text-white transition-colors">hello@orbx.in</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#00c87f]" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-[#00c87f] transition-colors">OrbX ERP</a></li>
              <li><a href="#products" className="hover:text-[#00c87f] transition-colors">Business Suite</a></li>
              <li><a href="#hr-showcase" className="hover:text-[#00c87f] transition-colors">OrbX HRMS</a></li>
              <li><a href="#products" className="hover:text-[#00c87f] transition-colors">OrbX My Ledger</a></li>
              <li><a href="#project-showcase" className="hover:text-[#00c87f] transition-colors">Project Management</a></li>
              <li><a href="#restaurant-showcase" className="hover:text-[#00c87f] transition-colors">Restaurant Management</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#platform-hub" className="hover:text-[#00c87f] transition-colors">Sales & Orders</a></li>
              <li><a href="#platform-hub" className="hover:text-[#00c87f] transition-colors">Inventory Stores</a></li>
              <li><a href="#platform-hub" className="hover:text-[#00c87f] transition-colors">Finance & Ledger</a></li>
              <li><a href="#hr-showcase" className="hover:text-[#00c87f] transition-colors">HR & Wages</a></li>
              <li><a href="#products" className="hover:text-[#00c87f] transition-colors">Manufacturing MRP</a></li>
              <li><a href="#project-showcase" className="hover:text-[#00c87f] transition-colors">Project Milestones</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#industries" className="hover:text-[#00c87f] transition-colors">Manufacturing</a></li>
              <li><a href="#industries" className="hover:text-[#00c87f] transition-colors">Construction</a></li>
              <li><a href="#industries" className="hover:text-[#00c87f] transition-colors">Automotive</a></li>
              <li><a href="#restaurant-showcase" className="hover:text-[#00c87f] transition-colors">Restaurant</a></li>
              <li><a href="#industries" className="hover:text-[#00c87f] transition-colors">Retail Stores</a></li>
              <li><a href="#industries" className="hover:text-[#00c87f] transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Column 4: Company & CTA */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-[#00c87f] transition-colors">About OrbX</a></li>
              <li><a href="#pricing" className="hover:text-[#00c87f] transition-colors">Pricing (₹2,000/mo)</a></li>
              <li><a href="#contact" className="hover:text-[#00c87f] transition-colors">Contact Engineering</a></li>
              <li>
                <button
                  onClick={onOpenDemo}
                  className="font-bold text-[#00c87f] hover:underline flex items-center gap-1 mt-1"
                >
                  Book a Demo <ArrowRight size={12} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} OrbX Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
