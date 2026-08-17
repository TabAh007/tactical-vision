import React from 'react';
import { Sparkles, FileCode, Wrench, ShieldCheck, Factory, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Discovery & Engineering PRD',
    timeline: 'Week 1 - 2',
    icon: FileCode,
    desc: 'We analyze your target market, benchmark competitors, evaluate patents, and build a Product Requirement Document (PRD) with full BOM cost targets.',
    outputs: ['Technical Specification Document', 'BOM & Unit Cost Projections', 'Regulatory Compliance Roadmap']
  },
  {
    step: '02',
    title: 'Parametric CAD & FEA Simulation',
    timeline: 'Week 2 - 5',
    icon: Wrench,
    desc: 'Our mechanical engineers build production-ready 3D SolidWorks assemblies, run finite element stress analysis (FEA), thermal CFD, and draft DFM mold layouts.',
    outputs: ['Native 3D CAD Parametric Files', 'FEA Stress & Drop Simulation Reports', '2D Dimensioned Blueprint Drawings']
  },
  {
    step: '03',
    title: 'Functional Prototyping & DFM',
    timeline: 'Week 5 - 8',
    icon: ShieldCheck,
    desc: 'High-precision SLA/SLS 3D prints, CNC metal prototypes, and silicone soft tooling to validate form, fit, ergonomics, and real-world durability.',
    outputs: ['Functional Hardware Prototypes', 'Pre-Production Fit Review', 'DFM Tooling Optimization Audit']
  },
  {
    step: '04',
    title: 'Tooling, Mass Production & QA',
    timeline: 'Week 8 - 16+',
    icon: Factory,
    desc: 'Hardened steel injection mold fabrication, pilot runs (T1 samples), full automated assembly, custom packaging, and factory QA inspection.',
    outputs: ['Hardened Steel Tooling Molds', 'T1 & Golden Production Samples', 'Factory Scaled Mass Production']
  }
];

export default function EngineeringProcess({ onOpenEstimator }) {
  return (
    <section id="process" className="py-20 bg-[#07090E] relative border-t border-white/5">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tech-badge mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Execution Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            How We Take Products from <span className="text-gradient-accent">Napkin to Factory</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Our disciplined 4-stage engineering roadmap eliminates costly redesigns, minimizes tooling risk, and accelerates time-to-market.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-xl border border-white/10 relative flex flex-col justify-between hover:border-[#00F59B]/40 transition-all group shadow-lg"
              >
                <div>
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black font-mono text-[#00F59B] bg-[#00F59B]/10 px-2.5 py-0.5 rounded-md border border-[#00F59B]/20">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00F59B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Outputs checklist */}
                <div className="pt-3 border-t border-white/5 space-y-1">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                    Deliverables:
                  </span>
                  {item.outputs.map((out, oIdx) => (
                    <div key={oIdx} className="text-[11px] font-mono text-slate-300 flex items-start gap-1">
                      <span className="text-[#00F59B] font-bold">✓</span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
