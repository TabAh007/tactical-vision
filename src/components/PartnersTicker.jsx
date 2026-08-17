import React from 'react';

export default function PartnersTicker() {
  const partners = [
    { name: "Bushnell Optics", role: "Trail Cams & Optics", logo: "/images/bushnell_logotype_broundel_lockup_graypms-A8526eWwM4h9Q8Xy.png" },
    { name: "Bushnell Golf", role: "Laser Rangefinders", logo: "/images/bushnellgolf_logo_cmyk_fc_white-mxBjx4LZ23cqbzqb.png" },
    { name: "Seven Marine", role: "Luxury Outboards", badge: "Supercharged V8" },
    { name: "Primos Hunting", role: "Acoustic Gear & Cameras", badge: "50+ SKUs" },
    { name: "Simmons Optics", role: "Precision Laser HUDs", badge: "Optics" },
    { name: "Mil-Spec Hardware", role: "Defence Enclosures", badge: "IP67 / Mil-Std" }
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-[#0A0D15]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Trusted By Industry Pioneers & Household Brand Names
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient fades on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#06080D] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#06080D] to-transparent z-10 pointer-events-none"></div>

        <div className="ticker-track flex items-center gap-12 sm:gap-16">
          {/* Double list for infinite loop */}
          {[...partners, ...partners].map((p, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/5 whitespace-nowrap group hover:border-[#00F59B]/30 transition-all cursor-default"
            >
              {p.logo ? (
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-7 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
                />
              ) : (
                <span className="text-base font-bold font-mono tracking-tight text-slate-200 group-hover:text-[#00F59B] transition-colors">
                  {p.name}
                </span>
              )}
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                {p.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
