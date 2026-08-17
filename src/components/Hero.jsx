import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Award, Zap, Compass, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenEstimator }) {
  const metrics = [
    { label: 'Years Field Experience', value: '12+' },
    { label: 'Products Mass-Produced', value: '50+' },
    { label: 'Global Team of Engineers', value: '22+' },
    { label: 'First-Run Tooling Success', value: '100%' },
  ];

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-radial-glow">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none"></div>

      <div className="site-container relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F59B]/10 border border-[#00F59B]/30 text-[#00F59B] text-xs font-mono tracking-wider uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-pulse"></span>
            <span>Turnkey Engineering • Defense, Marine & Consumer Tech</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Complete Product Development for{' '}
            <span className="text-gradient-accent">BIG Success</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We transform bold concepts into market-dominant physical hardware through precision industrial design, robust mechanical CAD, rapid prototyping, and turnkey factory production.
          </p>

          {/* CTA Button Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#portfolio"
              className="btn-primary text-xs sm:text-sm py-3 px-6 shadow-lg shadow-[#00F59B]/25"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenEstimator}
              className="btn-secondary text-xs sm:text-sm py-3 px-6"
            >
              <Zap className="w-4 h-4 text-[#00F59B]" />
              <span>Free Technical Scoping</span>
            </button>
          </div>

        </div>

        {/* 4 Metrics Strip */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-4 sm:p-5 rounded-xl border border-white/10 text-center flex flex-col items-center justify-center space-y-1 hover:border-[#00F59B]/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00F59B] font-mono tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-mono leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
