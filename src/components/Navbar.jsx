import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight, Phone, Sparkles, Box } from 'lucide-react';

export default function Navbar({ onOpenEstimator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '3D CAD Lab', href: '#3d-lab', highlight: true },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'CAD vs Reality', href: '#cad-reality' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div 
            style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px' }}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F59B] to-[#00D2FF] p-0.5 flex items-center justify-center shadow-lg shadow-[#00F59B]/20 group-hover:scale-105 transition-transform overflow-hidden shrink-0"
          >
            <div className="w-full h-full bg-[#07090E] rounded-[7px] flex items-center justify-center p-1 overflow-hidden">
              <img 
                src="/images/logo.png" 
                alt="Tactical Vision" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                className="w-full h-full object-contain max-h-8"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }}
              />
              <Shield className="w-5 h-5 text-[#00F59B] hidden" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold tracking-wider font-mono-tech flex items-center gap-1.5 leading-none mb-1">
              <span>TACTICAL</span>
              <span className="text-[#00F59B]">VISION</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase leading-none">Product Engineering</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 group flex items-center gap-1.5 ${
                link.highlight 
                  ? 'text-[#00F59B] font-bold font-mono' 
                  : 'text-slate-300 hover:text-[#00F59B]'
              }`}
            >
              {link.highlight && <Box className="w-3.5 h-3.5 animate-pulse" />}
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F59B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+994502010898" 
            className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-[#00F59B] px-3 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#00F59B]" />
            <span>+994 50 201 0898</span>
          </a>

          <button
            onClick={onOpenEstimator}
            className="btn-primary text-xs py-2.5 px-4 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenEstimator}
            className="btn-primary text-xs py-2 px-3"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 bg-[#07090E]/95">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.highlight 
                  ? 'text-[#00F59B] font-bold bg-[#00F59B]/10' 
                  : 'text-slate-200 hover:text-[#00F59B] hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a 
              href="tel:+994502010898"
              className="flex items-center gap-2 text-sm text-slate-300 px-3 py-2 bg-white/5 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#00F59B]" />
              <span>+994 50 201 0898</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="btn-primary w-full py-3 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Free Scoping</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
