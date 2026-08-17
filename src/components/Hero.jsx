import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Layers, Sparkles, Award } from 'lucide-react';
import { companyMetrics } from '../data/servicesData';

export default function Hero({ onOpenEstimator }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tactical-grid bg-radial-glow">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00F59B]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#00D2FF]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="tech-badge">
            <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-ping"></span>
            <span>Defence • Marine • Outdoor • Consumer Tech</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Over 12+ Years of Engineering Excellence</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Complete Product Development for <br className="hidden sm:inline" />
            <span className="text-gradient-accent glow-text">BIG Success</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            We transform bold ideas into market-dominant physical products through precision industrial design, robust mechanical engineering, rapid prototyping, and scaled manufacturing.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            className="btn-primary w-full sm:w-auto text-base py-3.5 px-8"
          >
            <span>Explore Portfolio Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenEstimator}
            className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8"
          >
            <Sparkles className="w-4 h-4 text-[#00F59B]" />
            <span>Free Technical Scoping</span>
          </button>
        </div>

        {/* Highlight Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {companyMetrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-5 rounded-xl text-center relative overflow-hidden group hover:border-[#00F59B]/40 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00F59B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-accent font-mono-tech mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
