import React from 'react';
import { Globe, Users, Award, Shield, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

const hubs = [
  { city: 'Baku, Azerbaijan', role: 'Headquarters & Core CAD Engineering' },
  { city: 'United States', role: 'Field Testing, Client Relations & Distribution' },
  { city: 'Canada', role: 'Industrial Design & Opto-Mechanics Studio' },
  { city: 'Shenzhen & East Asia', role: 'High-Precision Tooling & Contract Manufacturing' }
];

export default function AboutSection({ onOpenEstimator }) {
  return (
    <section id="about" className="py-20 bg-[#06080D] relative border-t border-white/5">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tech-badge mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Engineering Strength</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            22+ Engineers Across <span className="text-gradient-accent">4 Global Hubs</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Headquartered in Baku with strategic engineering studios and manufacturing oversight across North America and Asia.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Global Hubs (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hubs.map((hub, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10 space-y-1.5 hover:border-[#00F59B]/40 transition-colors shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-white font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#00F59B]" />
                    <span>{hub.city}</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {hub.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Credential highlights */}
            <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-2 mt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00F59B] font-bold">
                Why Industry Leaders Choose Tactical Vision
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B]" />
                  <span>100% Strict NDA & IP Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B]" />
                  <span>Direct Factory Floor Oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B]" />
                  <span>Zero-Loss CAD File Handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B]" />
                  <span>Rapid 48-Hour Scoping Turnaround</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder / Philosophy Card (5 Cols) */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/15 bg-gradient-to-b from-[#0D121E] to-[#070A10] space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#00F59B]/10 border border-[#00F59B]/30 flex items-center justify-center text-[#00F59B] font-black font-mono text-lg">
                TV
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Tabriz Ahmadli</h4>
                <p className="text-xs font-mono text-slate-400">Founder & Principal Design Engineer</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-[#00F59B] pl-3 py-1">
              "We don't build pretty 3D pictures that can't be molded. Every surface, wall thickness, draft angle, and screw boss we design is engineered from day one for seamless steel tooling and flawless mass factory production."
            </p>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500">12+ Years Hardware Excellence</span>
              <button
                onClick={onOpenEstimator}
                className="text-xs font-mono text-[#00F59B] font-bold hover:underline cursor-pointer"
              >
                Schedule Direct Call &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
