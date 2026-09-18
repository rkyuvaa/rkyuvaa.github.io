import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  Kanban, CheckCircle2
} from 'lucide-react';

const dependencyTypes = [
  {
    code: 'FS',
    name: 'Finish-to-Start',
    desc: 'Task B cannot start until Task A finishes.',
    example: 'Foundation completed → Wall masonry starts'
  },
  {
    code: 'SS',
    name: 'Start-to-Start',
    desc: 'Task B can start as soon as Task A starts.',
    example: 'Electrical wiring starts → Plumbing ducting starts'
  },
  {
    code: 'FF',
    name: 'Finish-to-Finish',
    desc: 'Task B cannot finish until Task A finishes.',
    example: 'Final inspection cannot finish → Paint curing finishes'
  },
  {
    code: 'SF',
    name: 'Start-to-Finish',
    desc: 'Task B cannot finish until Task A starts.',
    example: 'Old ERP system cannot shut down → OrbX go-live starts'
  },
];

export default function ProjectShowcase({ onOpenDemo }) {
  const [selectedDep, setSelectedDep] = useState('FS');
  const [progress, setProgress] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 96 ? 74 : prev + 2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="project-showcase" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023020]/5 border border-[#023020]/10 text-[#023020] text-xs font-semibold uppercase tracking-wider">
            <Kanban size={13} className="text-[#00a86b]" />
            <span>Interactive Project & Task Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Turn Projects Into <span className="gradient-text">Progress.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Manage multi-tier project deliverables with precision. From Work Breakdown Structure (WBS) to strict task dependencies and interactive Kanban boards.
          </p>

          {/* Visual Flow Chain: Project -> Main Task -> Sub Task -> Dependencies -> Completion */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-slate-700">
            {['Project', 'Main Task', 'Sub Task', 'Dependencies (FS/SS/FF/SF)', 'Completion'].map((step, idx) => (
              <Fragment key={idx}>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-center gap-1.5 text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-[#023020] text-white text-[10px] flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < 4 && <span className="text-[#00a86b] font-extrabold">→</span>}
              </Fragment>
            ))}
          </div>
        </div>

        {/* The Project Management UI Mockup */}
        <div className="bg-[#F7FAF8] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-8">
          {/* Top Project Bar with Auto-Increasing Progress */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#023020] text-white">PRJ-2026-X</span>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Commercial Plant Assembly — Stage 2</h3>
              </div>
              <div className="text-xs text-slate-500">
                18 Subtasks • 4 Milestones • 3 Departmental Dependencies Linked
              </div>
            </div>

            {/* Dynamic Progress Bar */}
            <div className="w-full md:w-64 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-800">
                <span>Total Project Progress</span>
                <span className="text-[#00a86b]">{progress}%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#023020] to-[#00a86b] rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Kanban Board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Column 1: To Do */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-500">To Do (1)</span>
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span className="font-mono font-bold text-slate-600">TSK-104</span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-bold">FF</span>
                </div>
                <div className="font-bold text-xs text-slate-800">Pre-Delivery Quality Inspection</div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200/50">
                  <span>Deepak V.</span>
                  <span>0/3 Subtasks</span>
                </div>
              </div>
            </div>

            {/* Column 2: In Progress */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-xs uppercase tracking-wider text-blue-600">In Progress (1)</span>
                <span className="w-2 h-2 rounded-full bg-blue-500 live-dot" />
              </div>
              <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span className="font-mono font-bold text-slate-600">TSK-103</span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">FS</span>
                </div>
                <div className="font-bold text-xs text-slate-800">Machine Setup & Tooling Calibration</div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-blue-100">
                  <span>Arun M.</span>
                  <span className="text-blue-600 font-semibold">2/5 Subtasks</span>
                </div>
              </div>
            </div>

            {/* Column 3: Review */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-xs uppercase tracking-wider text-amber-600">Review (1)</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-100 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span className="font-mono font-bold text-slate-600">TSK-102</span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">SS</span>
                </div>
                <div className="font-bold text-xs text-slate-800">BOM Cost & Material Requisition</div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-amber-100">
                  <span>Priya S.</span>
                  <span className="text-amber-700 font-semibold">3/4 Subtasks</span>
                </div>
              </div>
            </div>

            {/* Column 4: Completed */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-xs uppercase tracking-wider text-emerald-600">Completed (1)</span>
                <CheckCircle2 size={14} className="text-[#00a86b]" />
              </div>
              <div className="bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span className="font-mono font-bold text-slate-600">TSK-101</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">FS</span>
                </div>
                <div className="font-bold text-xs text-slate-800 line-through opacity-80">Site Structural Audit</div>
                <div className="flex items-center justify-between text-[11px] text-emerald-700 pt-1 border-t border-emerald-100 font-medium">
                  <span>Karthik R.</span>
                  <span>4/4 Passed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dependency Types Interactive Explainer */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/70 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">
                  Strict Task Dependency Types
                </h4>
                <p className="text-xs text-slate-500">
                  OrbX enforces formal project management dependencies to prevent premature work or site bottlenecks.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#00a86b]/10 text-[#00a86b]">
                PMI Standards Compliant
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {dependencyTypes.map((dep) => (
                <button
                  key={dep.code}
                  onClick={() => setSelectedDep(dep.code)}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    selectedDep === dep.code
                      ? 'bg-[#023020] text-white border-[#023020] shadow-md'
                      : 'bg-slate-50 hover:bg-white text-slate-800 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`px-2 py-0.5 rounded font-mono text-xs font-extrabold ${
                      selectedDep === dep.code ? 'bg-[#00a86b] text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {dep.code}
                    </span>
                    <span className="font-bold text-xs">{dep.name}</span>
                  </div>
                  <p className={`text-[11px] leading-snug ${selectedDep === dep.code ? 'text-white/80' : 'text-slate-500'}`}>
                    {dep.desc}
                  </p>
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Supports unlimited task hierarchy, Gantt exports, and milestone tracking.
              </span>
              <button
                onClick={onOpenDemo}
                className="px-5 py-2.5 rounded-xl bg-[#023020] hover:bg-[#011a12] text-white text-xs font-bold transition-all shadow-md"
              >
                Schedule Project Suite Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
