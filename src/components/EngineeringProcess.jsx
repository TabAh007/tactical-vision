import React from 'react';
import { Compass, Palette, Cpu, Factory, ArrowRight, ShieldCheck } from 'lucide-react';

export default function EngineeringProcess({ onOpenEstimator }) {
  const steps = [
    {
      num: "01",
      title: "Technical Scoping & PRD",
      subtitle: "Milestones, Target Cost & Requirements",
      desc: "We analyze regulatory requirements (IP rating, Mil-Std, CE/FCC), structural constraints, target BOM costs, and establish clear engineering timelines.",
      icon: Compass
    },
    {
      num: "02",
      title: "Industrial Design & Parametric CAD",
      subtitle: "Class-A Surfacing & FEA Analysis",
      desc: "Our designers craft ergonomic silhouettes while mechanical engineers build robust SolidWorks assemblies with tolerance stack-up and structural FEA simulations.",
      icon: Palette
    },
    {
      num: "03",
      title: "Rapid Prototyping & DFM Testing",
      subtitle: "3D Prints, CNC Prototypes & Drop Tests",
      desc: "We produce functional SLA/SLS and CNC aluminum prototypes for fit checks, ergonomic evaluation, destructive drop tests, and pre-tooling validation.",
      icon: Cpu
    },
    {
      num: "04",
      title: "Tooling, Scaling & Mass Production",
      subtitle: "Steel Molds, QA Inspection & Factory Shipments",
      desc: "We oversee steel injection molds, first-shot T1 samples, CMM dimensional verification, strict AQL 1.0 quality audits, and bulk global fulfillment.",
      icon: Factory
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#07090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="tech-badge mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Take Your Idea to <span className="text-gradient-accent">Scale</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested 4-phase development process eliminating costly manufacturing errors before cutting steel.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl relative flex flex-col justify-between group hover:border-[#00F59B]/50 transition-all duration-300"
              >
                {/* Step Number Background */}
                <div className="text-5xl font-black font-mono-tech text-white/[0.04] absolute top-4 right-4 select-none group-hover:text-[#00F59B]/10 transition-colors">
                  {step.num}
                </div>

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F59B] mb-6 group-hover:bg-[#00F59B]/10 group-hover:border-[#00F59B]/30 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-[#00F59B] font-semibold tracking-wider">
                    PHASE {step.num}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-1 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Guaranteed Deliverable</span>
                  <span className="text-[#00F59B]">&check;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
