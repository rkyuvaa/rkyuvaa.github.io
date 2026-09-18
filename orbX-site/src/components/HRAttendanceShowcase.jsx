import { useState, Fragment } from 'react';
import {
  CheckCircle2, ArrowRight, UserCheck
} from 'lucide-react';

const employeesList = [
  {
    name: 'Arun M.',
    role: 'Senior CNC Machinist',
    workingDays: 25,
    dailyWage: 900,
    payable: 22500,
    breakdown: { present: 22, leave: 1, weeklyOff: 4, holidays: 2, onDuty: 0, lop: 1 }
  },
  {
    name: 'Priya S.',
    role: 'Quality Assurance Lead',
    workingDays: 26,
    dailyWage: 1100,
    payable: 28600,
    breakdown: { present: 24, leave: 2, weeklyOff: 4, holidays: 2, onDuty: 0, lop: 0 }
  },
  {
    name: 'Karthik R.',
    role: 'Assembly Line Supervisor',
    workingDays: 24,
    dailyWage: 950,
    payable: 22800,
    breakdown: { present: 21, leave: 2, weeklyOff: 4, holidays: 2, onDuty: 1, lop: 2 }
  },
];

const wageParameters = [
  { label: 'Attendance', desc: 'Biometric fingerprint, facial recognition & geo-fenced GPS mobile punch' },
  { label: 'Leave', desc: 'Paid casual, sick & privilege leave approved through manager workflow' },
  { label: 'Weekly Off', desc: 'Auto-credited weekly offs based on shift roster patterns' },
  { label: 'Holidays', desc: 'Company declared gazetted & festival holidays' },
  { label: 'On Duty (OD)', desc: 'Official client visits, vendor inspections & external delivery duty' },
  { label: 'Loss of Pay (LOP)', desc: 'Unapproved absences or unpaid leave auto-deducted' },
  { label: 'Wages', desc: 'Daily rate, monthly fixed salary, or piece-rate production output' },
  { label: 'Payment', desc: 'Instant salary slip generation and direct bank payout NEFT file' },
];

export default function HRAttendanceShowcase({ onOpenDemo }) {
  const [selectedEmp, setSelectedEmp] = useState(employeesList[0]);

  return (
    <section id="hr-showcase" className="py-24 lg:py-32 bg-[#F7FAF8] relative overflow-hidden">
      <div className="container-orbx">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a86b]/10 border border-[#00a86b]/20 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <UserCheck size={13} className="text-[#00a86b]" />
            <span>Biometric to Bank Direct Integration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Attendance That Connects <br />
            <span className="gradient-text">Directly to Wages.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminate human calculation errors and tedious Excel payroll formulas. OrbX turns biometric punches into bank-ready salary payouts in real-time.
          </p>

          {/* Animated 6-Step Workflow Pipeline */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-bold text-slate-700">
            {[
              'Biometric Attendance',
              'Attendance Calculation',
              'Working Days',
              'Daily Wage',
              'Total Payable',
              'Payment'
            ].map((step, idx) => (
              <Fragment key={idx}>
                <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-[#023020] text-white text-[10px] flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < 5 && <span className="text-[#00a86b] font-extrabold">→</span>}
              </Fragment>
            ))}
          </div>
        </div>

        {/* The Live Interactive Wage Cards & Calculator UI */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Real Employee Wage Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <h3 className="font-extrabold text-slate-900 text-base">
                Real-Time Employee Wage Slips
              </h3>
              <span className="text-xs text-slate-500">Tap to inspect wage calculation</span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {employeesList.map((emp) => {
                const isSelected = selectedEmp.name === emp.name;
                return (
                  <button
                    key={emp.name}
                    onClick={() => setSelectedEmp(emp)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden ${
                      isSelected
                        ? 'bg-white border-[#023020] shadow-lg shadow-[#023020]/10 scale-[1.01]'
                        : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 text-base">{emp.name}</span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {emp.role}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-semibold text-slate-400">Total Net Payable</div>
                        <div className="text-lg font-extrabold text-[#023020]">
                          ₹{emp.payable.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                        <span className="text-[10px] text-slate-400 block uppercase">Working Days</span>
                        <span className="font-bold text-slate-800 text-sm">{emp.workingDays} Days</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                        <span className="text-[10px] text-slate-400 block uppercase">Daily Wage</span>
                        <span className="font-bold text-slate-800 text-sm">₹{emp.dailyWage} / day</span>
                      </div>
                      <div className="bg-emerald-50 p-2.5 rounded-xl text-center">
                        <span className="text-[10px] text-emerald-700 block uppercase font-semibold">Calculation</span>
                        <span className="font-bold text-[#023020] text-sm">
                          {emp.workingDays} × ₹{emp.dailyWage}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: 8 Wage Parameters & Audit Trail */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">
                  Comprehensive Salary Rule Engine
                </h4>
                <p className="text-xs text-slate-500">
                  Configured according to Tamil Nadu & Indian labor compliance.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-[#00a86b]">
                Auto Audit
              </span>
            </div>

            {/* 8 Parameters List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {wageParameters.map((param, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#023020]">
                    <CheckCircle2 size={13} className="text-[#00a86b]" />
                    <span>{param.label}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {param.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={onOpenDemo}
                className="w-full py-3 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>See HR & Payroll Live in Action</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
