import React from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Sparkles, CheckCircle2, ArrowRight, Clock, Shield, 
  Layers, Cpu, Wrench, RefreshCw, PenTool, Factory, HelpCircle 
} from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  PenTool: PenTool,
  Wrench: Wrench,
  RefreshCw: RefreshCw,
  Layers: Layers,
  Factory: Factory,
  HelpCircle: HelpCircle
};

export default function ServicesSection({ onOpenEstimator }) {
  return (
    <section id="services" className="py-20 bg-[#06080D] relative border-t border-white/5">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tech-badge mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Full-Lifecycle Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            End-to-End Engineering <span className="text-gradient-accent">Services</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            From industrial design and structural FEA analysis to high-volume injection tooling and mass assembly lines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Cpu;
            return (
              <div
                key={service.id}
                className="glass-panel p-6 rounded-xl border border-white/10 hover:border-[#00F59B]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group shadow-lg"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00F59B]/10 text-[#00F59B] flex items-center justify-center border border-[#00F59B]/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      <Clock className="w-3 h-3 text-[#00F59B]" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#00F59B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#00D2FF] mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    {service.metric}
                  </span>
                  <button
                    onClick={onOpenEstimator}
                    className="text-xs font-mono text-[#00F59B] font-semibold flex items-center gap-1 group-hover:underline cursor-pointer"
                  >
                    <span>Scope Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
