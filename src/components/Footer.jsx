import React from 'react';
import { Shield, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenEstimator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00F59B] to-[#00D2FF] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#07090E] rounded-[6px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#00F59B]" />
                </div>
              </div>
              <div className="text-lg font-bold tracking-wider font-mono-tech">
                TACTICAL <span className="text-[#00F59B]">VISION</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Tactical Vision is an international product development &amp; mechanical engineering firm specializing in defence, marine, optics, and consumer hardware solutions.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>📍 1963 A. Rajabli, Baku, AZ1008</div>
              <div>✉️ team@tactical-vision.com</div>
              <div>📞 +994 50 201 0898</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#portfolio" className="hover:text-[#00F59B] transition-colors">Portfolio Showcase</a></li>
              <li><a href="#services" className="hover:text-[#00F59B] transition-colors">Engineering Services</a></li>
              <li><a href="#process" className="hover:text-[#00F59B] transition-colors">Development Roadmap</a></li>
              <li><a href="#about" className="hover:text-[#00F59B] transition-colors">About Our Team</a></li>
              <li><a href="#contact" className="hover:text-[#00F59B] transition-colors">Contact Engineering Desk</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-slate-200">Industrial Design (ID)</span></li>
              <li><span className="hover:text-slate-200">Mechanical Engineering</span></li>
              <li><span className="hover:text-slate-200">Finite Element Analysis (FEA)</span></li>
              <li><span className="hover:text-slate-200">Reverse Engineering & 3D Scan</span></li>
              <li><span className="hover:text-slate-200">Rapid CNC & 3D Prototyping</span></li>
              <li><span className="hover:text-slate-200">Injection Mold Tooling</span></li>
            </ul>
          </div>

          {/* Consultation CTA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-2">
              Start a Project
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a zero-cost technical evaluation with a senior engineer.
            </p>
            <button
              onClick={onOpenEstimator}
              className="btn-primary w-full text-xs py-2.5"
            >
              <span>Get Free Consultation</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Tactical Vision. All rights reserved. Formerly on tactical-vision.com.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F59B]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
