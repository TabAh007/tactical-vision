import React from 'react';
import { Users, Globe2, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenEstimator }) {
  const globalHubs = [
    { country: "Azerbaijan", city: "Baku HQ", role: "Engineering & CAD Center" },
    { country: "United States", city: "Strategic Sales & Testing", role: "Field Trials & Compliance" },
    { country: "Canada", city: "Industrial Design", role: "Ergonomic & Concept Labs" },
    { country: "China & East Asia", city: "Shenzhen / Dongguan", role: "Tooling, Molds & Sourcing" }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0D15] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <div className="tech-badge">
              <Users className="w-3.5 h-3.5" />
              <span>Multicultural Global Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              22+ Elite Engineers, Designers &amp; <br />
              <span className="text-gradient-accent">Manufacturing Specialists</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              With a multidisciplinary team spanning Azerbaijan, North America, and East Asia, Tactical Vision delivers an unfair advantage to inventors, startup founders, and industry-leading enterprises.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We eliminate the friction between initial styling and mass manufacturability. By collaborating directly with top-tier international factories, we guarantee your CAD designs transition seamlessly into steel tooling, passing rigorous quality standards without expensive rework.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "12+ Years Product Experience",
                "Strict Mutual NDA Compliance",
                "ISO-Certified Factory Network",
                "Precision ASME CAD Standards",
                "Direct Factory Tooling Oversight",
                "Zero-Fee Initial Scoping"
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00F59B] shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEstimator}
                className="btn-primary text-xs py-3 px-6"
              >
                <span>Partner With Our Engineering Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Global Network Map / Cards */}
          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
                  <Globe2 className="w-4 h-4 text-[#00F59B]" />
                  <span>Global Operations &amp; Sourcing Network</span>
                </div>
                <span className="text-xs font-mono text-[#00F59B] bg-[#00F59B]/10 px-2.5 py-0.5 rounded-full border border-[#00F59B]/20">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {globalHubs.map((hub, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00F59B]/30 transition-colors"
                  >
                    <div className="text-xs font-mono text-[#00F59B] font-bold mb-1">
                      {hub.country}
                    </div>
                    <div className="text-sm font-bold text-white mb-1">
                      {hub.city}
                    </div>
                    <div className="text-xs text-slate-400">
                      {hub.role}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#06080D] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Headquarters:</span>
                <span className="text-slate-200">1963 A. Rajabli, Baku, AZ1008</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
