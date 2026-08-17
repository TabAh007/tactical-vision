import React from 'react';

const partners = [
  {
    name: 'Bushnell',
    tag: 'Trail Cams & Optics',
    logo: '/images/bushnell_logotype_broundel_lockup_graypms-A8526eWwM4h9Q8Xy.png'
  },
  {
    name: 'Bushnell Golf',
    tag: 'Laser Rangefinders',
    logo: '/images/bushnellgolf_logo_cmyk_fc_white-mxBjx4LZ23cqbzqb.png'
  },
  {
    name: 'Simmons Optics',
    tag: 'Precision Laser HUDs',
    textOnly: true
  },
  {
    name: 'Seven Marine',
    tag: 'Luxury Outboards',
    textOnly: true
  },
  {
    name: 'Primos Hunting',
    tag: 'Acoustic Gear & Cameras',
    textOnly: true
  },
  {
    name: 'Mil-Spec Hardware',
    tag: 'Defence Enclosures',
    textOnly: true
  }
];

export default function PartnersTicker() {
  return (
    <section className="py-6 border-y border-white/10 bg-[#04060A]/80 overflow-hidden relative">
      <div className="site-container">
        <div className="text-center mb-3">
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Trusted by Industry Pioneers & Household Brand Names
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex items-center">
          <div className="ticker-track flex items-center gap-8 py-2">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-2 rounded-lg bg-white/[0.03] border border-white/5 whitespace-nowrap shrink-0 hover:border-[#00F59B]/30 transition-colors"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-5 max-w-[100px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                    {partner.name}
                  </span>
                )}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                  {partner.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
