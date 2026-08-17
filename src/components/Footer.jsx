import React from 'react';
import { Shield, Sparkles, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenEstimator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060A] border-t border-white/10 text-slate-400 text-xs font-mono py-12">
      <div className="site-container space-y-8">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div 
                style={{ width: '32px', height: '32px' }}
                className="rounded-lg bg-gradient-to-br from-[#00F59B] to-[#00D2FF] p-0.5 flex items-center justify-center"
              >
                <div className="w-full h-full bg-[#07090E] rounded-[6px] flex items-center justify-center p-1">
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-wider font-mono">
                TACTICAL <span className="text-[#00F59B]">VISION</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Global turnkey product development, mechanical engineering, CAD modeling, reverse engineering, and factory tooling production.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Navigation</div>
            <ul className="space-y-1.5">
              <li><a href="#3d-lab" className="hover:text-[#00F59B] transition-colors">3D CAD Lab</a></li>
              <li><a href="#portfolio" className="hover:text-[#00F59B] transition-colors">Portfolio Case Studies</a></li>
              <li><a href="#cad-reality" className="hover:text-[#00F59B] transition-colors">CAD vs. Reality</a></li>
              <li><a href="#services" className="hover:text-[#00F59B] transition-colors">Capabilities & Services</a></li>
              <li><a href="#process" className="hover:text-[#00F59B] transition-colors">4-Phase Roadmap</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Global HQ</div>
            <p className="text-slate-400">Baku, Azerbaijan</p>
            <p className="text-slate-300 font-bold">+994 50 201 0898</p>
            <p className="text-[#00F59B]">team@tactical-vision.com</p>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Tactical Vision. All rights reserved. Precision Turnkey Engineering.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#00F59B] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
