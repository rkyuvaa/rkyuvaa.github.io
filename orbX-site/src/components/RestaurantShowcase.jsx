import { useState } from 'react';
import {
  UtensilsCrossed, Clock, ArrowRight, ChefHat
} from 'lucide-react';

const tablesList = [
  { id: 'T1', seats: '4 Seats', status: 'Occupied', order: '₹1,850', time: '24m', items: 5 },
  { id: 'T2', seats: '2 Seats', status: 'Billed', order: '₹920', time: '42m', items: 3 },
  { id: 'T3', seats: '6 Seats', status: 'Kitchen Prep', order: '₹3,400', time: '12m', items: 8 },
  { id: 'T4', seats: '4 Seats', status: 'Vacant', order: '-', time: '-', items: 0 },
  { id: 'T5', seats: '2 Seats', status: 'Occupied', order: '₹1,150', time: '18m', items: 4 },
  { id: 'T6', seats: '8 Seats', status: 'Reserved', order: '-', time: '8:00 PM', items: 0 },
];

const kitchenTickets = [
  { id: 'KOT #142', table: 'Table T3', timer: '8m 20s', items: ['2x Paneer Tikka', '3x Butter Naan', '1x Dal Makhani'], status: 'Cooking' },
  { id: 'KOT #143', table: 'Table T1', timer: '3m 10s', items: ['1x Crispy Corn', '2x Fresh Lime Soda'], status: 'Ready to Serve' },
  { id: 'KOT #144', table: 'Table T5', timer: '1m 05s', items: ['2x Veg Biryani', '1x Raita'], status: 'Queued' },
];

export default function RestaurantShowcase({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('tables');

  return (
    <section id="restaurant-showcase" className="py-24 lg:py-32 bg-gradient-to-b from-[#011a12] to-[#023020] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#00a86b]/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 left-10 w-[400px] h-[400px] bg-[#84cc16]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00c87f] text-xs font-semibold uppercase tracking-wider">
            <ChefHat size={14} />
            <span>Dedicated Hospitality Edition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Run Your Restaurant <span className="text-[#00c87f]">From One Place.</span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Eliminate communication gaps between captains, kitchen staff, and cashiers. From live table seating and KDS displays to recipe inventory deduction.
          </p>

          {/* Module Capabilities Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
            {['Table Management', 'Orders & KDS', 'Kitchen Screen', 'Menu Recipes', 'Raw Inventory', 'Vendor Purchase', 'GST Split Bills', 'Staff Shifts', 'Food Cost Reports'].map((pill, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 rounded-full border border-white/15 text-white/90">
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* The Restaurant Console Mockup */}
        <div className="bg-slate-900/90 rounded-3xl border border-white/15 p-5 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl space-y-6">
          {/* Top Bar with Live Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00a86b] text-white flex items-center justify-center shadow-lg">
                <UtensilsCrossed size={20} />
              </div>
              <div>
                <div className="font-bold text-sm text-white">OrbX Dine & Kitchen Command</div>
                <div className="text-[11px] text-white/60">Live POS & Kitchen Display System</div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 text-xs">
              <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <span className="text-white/50 block text-[10px] uppercase">Today's Sales</span>
                <span className="font-bold text-white text-sm">₹68,450</span>
              </div>
              <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <span className="text-white/50 block text-[10px] uppercase">Active Tables</span>
                <span className="font-bold text-[#00c87f] text-sm">5 / 8</span>
              </div>
              <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <span className="text-white/50 block text-[10px] uppercase">Avg Kitchen Prep</span>
                <span className="font-bold text-amber-400 text-sm">9.2 Mins</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <button
              onClick={() => setActiveTab('tables')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'tables'
                  ? 'bg-[#00a86b] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Floor & Table Layout (6)
            </button>
            <button
              onClick={() => setActiveTab('kds')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'kds'
                  ? 'bg-[#00a86b] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Kitchen Display Tickets (3)
            </button>
            <button
              onClick={() => setActiveTab('recipe')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'recipe'
                  ? 'bg-[#00a86b] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Recipe Inventory BOM
            </button>
          </div>

          {/* Tab 1: Live Tables Grid */}
          {activeTab === 'tables' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {tablesList.map((tbl) => (
                <div
                  key={tbl.id}
                  className={`rounded-2xl p-4 border transition-all cursor-default relative ${
                    tbl.status === 'Occupied'
                      ? 'bg-emerald-950/40 border-emerald-500/40'
                      : tbl.status === 'Kitchen Prep'
                      ? 'bg-amber-950/40 border-amber-500/40'
                      : tbl.status === 'Billed'
                      ? 'bg-blue-950/40 border-blue-500/40'
                      : 'bg-white/5 border-white/10 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-base text-white">{tbl.id}</span>
                    <span className="text-[10px] text-white/60">{tbl.seats}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#00c87f]">
                      {tbl.status}
                    </div>
                    <div className="text-sm font-bold text-white">{tbl.order}</div>
                    <div className="text-[10px] text-white/50 flex items-center gap-1">
                      <Clock size={10} /> {tbl.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Kitchen Display System (KDS) */}
          {activeTab === 'kds' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {kitchenTickets.map((kot) => (
                <div key={kot.id} className="bg-slate-800/80 rounded-2xl p-4 border border-white/15 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="font-bold text-xs text-white">{kot.id}</div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300">
                      {kot.table}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {kot.items.map((item, idx) => (
                      <div key={idx} className="text-xs text-white/90 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-white/50 flex items-center gap-1">
                      <Clock size={12} /> {kot.timer}
                    </span>
                    <span className="font-bold text-[#00c87f]">{kot.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Recipe BOM & Auto Inventory */}
          {activeTab === 'recipe' && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Recipe: Butter Chicken Masala (Full)</h4>
                  <p className="text-xs text-white/60">Automated ingredient subtraction upon Captain order punch</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-[#00a86b]/20 text-[#00c87f] rounded-full border border-[#00a86b]/40">
                  Active Recipe BOM
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-white/5 p-3 rounded-xl">
                  <span className="text-white/50 block text-[10px]">Chicken (Raw)</span>
                  <span className="font-bold text-white text-sm">450g deducted</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl">
                  <span className="text-white/50 block text-[10px]">Dairy Butter & Cream</span>
                  <span className="font-bold text-white text-sm">80g deducted</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl">
                  <span className="text-white/50 block text-[10px]">Tomato & Onion Puree</span>
                  <span className="font-bold text-white text-sm">180g deducted</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl">
                  <span className="text-white/50 block text-[10px]">Calculated Cost</span>
                  <span className="font-bold text-[#00c87f] text-sm">₹112 / Plate</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Bar Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/70 text-center sm:text-left">
              Includes kitchen printer integration, split billing by seats, and QR menu ordering.
            </div>
            <button
              onClick={onOpenDemo}
              className="px-6 py-3 rounded-xl bg-[#00a86b] hover:bg-[#059669] text-white text-xs font-bold shadow-lg flex items-center gap-2 transition-all"
            >
              <span>Schedule Restaurant Live Demo</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
