import React, { useState } from 'react';
import { SlidersHorizontal, Sparkles, Cpu, Eye, CheckCircle2 } from 'lucide-react';

const comparisonData = [
  {
    id: "choke-tube",
    title: "JELLY HEAD™ CNC Shotgun Choke",
    client: "Primos Hunting",
    cadImage: "/images/primos-608-jelly-head-turkey-choke-tube-mossberg-12ga-01013500608_image1__72578-dOqlyrRKxXTgB85N.jpeg",
    realityImage: "/images/jellyhead_in-use-mjEPvja0pyCQol9D.jpeg",
    cadLabel: "Parametric CNC Solid Model (17-4 PH)",
    realityLabel: "Field Production Unit with Black-T Finish",
    engineeringHighlight: "Multi-axis CNC turning with ±0.0005\" inner constriction tolerance."
  },
  {
    id: "revolver-grunt",
    title: "Primos Revolver Grunt Call",
    client: "Primos Hunting",
    cadImage: "/images/640e5816013715.5629a051652ed-YbNnvOKZN2HPQ23x.jpeg",
    realityImage: "/images/8cf8d130193573.56175e8d7c462-m5Klr53XMVCO65EL.jpg",
    cadLabel: "Exploded Mechanism Assembly & Dial Cam",
    realityLabel: "Overmolded Elastomer Finished Retail Product",
    engineeringHighlight: "Rotary indexing cam shifting internal reed tension smoothly across 6 vocalizations."
  },
  {
    id: "chicken-stick",
    title: "Primos Chicken on a Stick Decoy Bracket",
    client: "Primos Hunting",
    cadImage: "/images/1f4f4f4e-6000-4812-acdb-4b24230cdfbc_1.adac7d772ad63b913118547d33a3b9f8-m6LPw8kw4PcXNEKa.jpeg",
    realityImage: "/images/6142300c4eff5e87ab3397e1621541049161ca1d177c7-YX41akpx9MUXe7a8.jpg",
    cadLabel: "Glass-Reinforced Nylon Clamp Topology",
    realityLabel: "Gun-Mounted Active Field Deployment",
    engineeringHighlight: "Universal rubber-lined clamp preventing barrel scratches while holding action cam."
  }
];

export default function CadRealitySlider() {
  const [activeItem, setActiveItem] = useState(comparisonData[0]);
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-20 bg-[#07090E] relative border-t border-white/5">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="tech-badge mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive CAD vs. Reality Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            From Digital Blueprint to <span className="text-gradient-accent">Physical Production</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Drag the interactive slider below to compare our raw parametric 3D CAD assemblies directly against the final mass-manufactured hardware.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {comparisonData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeItem.id === item.id
                  ? 'bg-[#00F59B] text-black shadow-md shadow-[#00F59B]/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Split Box */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl overflow-hidden border border-white/15 shadow-2xl p-4 sm:p-5 space-y-3">
            
            {/* Split Image Canvas */}
            <div 
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden select-none cursor-ew-resize bg-black"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const touch = e.touches[0];
                const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
            >
              {/* Layer 1: Final Physical Reality (Base) */}
              <img
                src={activeItem.realityImage}
                alt="Reality"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white border border-white/10 pointer-events-none">
                {activeItem.realityLabel}
              </div>

              {/* Layer 2: Raw CAD / Exploded (Clipped overlay) */}
              <div 
                className="absolute inset-0 overflow-hidden border-r-2 border-[#00F59B] shadow-[0_0_20px_rgba(0,245,155,0.6)]"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={activeItem.cadImage}
                  alt="CAD"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-[#00F59B] border border-[#00F59B]/30 pointer-events-none">
                  {activeItem.cadLabel}
                </div>
              </div>

              {/* Central Divider Handle Knob */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-[#00F59B] pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-[#00F59B] text-black font-bold flex items-center justify-center shadow-lg shadow-black/80 -ml-4 scale-90 sm:scale-100">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Touch Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none bg-black/60 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/10 text-[9px] font-mono text-slate-300">
                &larr; Drag Slider Across &rarr;
              </div>
            </div>

            {/* Engineering Highlight Note */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B] shrink-0" />
                <span><strong>Engineering Execution:</strong> {activeItem.engineeringHighlight}</span>
              </div>
              <span className="text-[#00F59B] shrink-0 font-bold text-[11px]">100% CAD Fidelity</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
