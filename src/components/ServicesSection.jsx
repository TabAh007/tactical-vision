import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Compass, Palette, Cpu, Scan, Layers, Factory, CheckCircle2, 
  ArrowRight, Sparkles, ChevronDown, ChevronUp, Clock, Target 
} from 'lucide-react';

const iconMap = {
  Compass,
  Palette,
  Cpu,
  Scan,
  Layers,
  Factory,
  CheckCircle2
};

export default function ServicesSection({ onOpenEstimator }) {
  const [expandedService, setExpandedService] = useState('product-development');

  return (
    <section id="services" className="py-24 bg-[#0A0E17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="tech-badge mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Full-Lifecycle Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            End-to-End Engineering <span className="text-gradient-accent">Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From industrial design and structural FEA analysis to high-volume injection tooling and mass assembly lines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Cpu;
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className={`glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isExpanded ? 'border-[#00F59B]/50 bg-[#0F1626]' : 'hover:border-white/20'
                }`}
              >
                <div>
                  {/* Icon & ID */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F59B]/20 to-[#00D2FF]/20 border border-[#00F59B]/30 flex items-center justify-center text-[#00F59B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/5">
                      {service.timeline}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-[#00F59B] mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400">
                    Target: <span className="text-slate-200">{service.idealFor.split(',')[0]}</span>
                  </div>
                  <button
                    onClick={onOpenEstimator}
                    className="text-xs font-mono text-[#00F59B] hover:text-white flex items-center gap-1 font-semibold group"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
