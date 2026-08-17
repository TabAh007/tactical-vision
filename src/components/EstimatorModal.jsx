import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, Calculator, Clock, DollarSign } from 'lucide-react';

export default function EstimatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [serviceType, setServiceType] = useState('full-development');
  const [projectStage, setProjectStage] = useState('concept');
  const [targetUnits, setTargetUnits] = useState('1000-5000');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Dynamic estimate calculations
  const estimates = {
    'full-development': { timeline: '8 - 16 Weeks', costRange: '$8,000 - $25,000+', phases: 'Full 3D CAD, DFM, Tooling & Sourcing' },
    'industrial-design': { timeline: '3 - 6 Weeks', costRange: '$4,000 - $12,000', phases: 'Sketches, 3D Surfacing & CMF' },
    'mechanical-cad': { timeline: '4 - 8 Weeks', costRange: '$5,000 - $15,000', phases: 'FEA, Tolerance Analysis & Production 2D' },
    'prototyping': { timeline: '1 - 2 Weeks', costRange: '$1,500 - $6,000', phases: 'SLA/SLS 3D Print & CNC Aluminum' },
    'reverse-engineering': { timeline: '1 - 3 Weeks', costRange: '$2,500 - $8,000', phases: '3D Scanning & Parametric CAD' }
  };

  const currentEst = estimates[serviceType] || estimates['full-development'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Overlay click */}
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl bg-[#0D121E] border border-[#00F59B]/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#080B12] sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#00F59B]/10 text-[#00F59B] border border-[#00F59B]/30">
                Direct Engineering Evaluation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Project Scoping & Free Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00F59B]/20 border border-[#00F59B] text-[#00F59B] flex items-center justify-center mx-auto shadow-lg shadow-[#00F59B]/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong>{formData.name || 'Partner'}</strong>. A senior engineering manager from Tactical Vision will review your project parameters and contact you at <strong>{formData.email}</strong> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-primary text-sm py-2.5 px-6"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#00F59B] font-bold mb-2">
                  1. What engineering service do you need?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  {[
                    { id: 'full-development', label: 'Full Product Dev' },
                    { id: 'industrial-design', label: 'Industrial Design & CMF' },
                    { id: 'mechanical-cad', label: 'Mechanical CAD & FEA' },
                    { id: 'prototyping', label: 'Rapid Prototyping' },
                    { id: 'reverse-engineering', label: 'Reverse Engineering' },
                    { id: 'tooling-mfg', label: 'Factory Tooling / Sourcing' }
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setServiceType(s.id)}
                      className={`p-3 rounded-lg border text-left font-mono transition-all ${
                        serviceType === s.id
                          ? 'border-[#00F59B] bg-[#00F59B]/10 text-white font-bold'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Project Stage */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#00F59B] font-bold mb-2">
                  2. Current Stage of Your Project
                </label>
                <div className="grid grid-cols-3 gap-2.5 text-xs">
                  {[
                    { id: 'concept', label: 'Rough Concept / Idea' },
                    { id: 'cad-ready', label: 'CAD Model Ready' },
                    { id: 'scaling', label: 'Ready for Manufacturing' }
                  ].map((st) => (
                    <button
                      type="button"
                      key={st.id}
                      onClick={() => setProjectStage(st.id)}
                      className={`p-3 rounded-lg border text-center font-mono transition-all ${
                        projectStage === st.id
                          ? 'border-[#00F59B] bg-[#00F59B]/10 text-white font-bold'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Scoping Estimates Box */}
              <div className="p-5 rounded-xl glass-panel border border-[#00F59B]/30 bg-gradient-to-br from-[#00F59B]/5 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00F59B]/20 text-[#00F59B] flex items-center justify-center">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Estimated Roadmap:</div>
                    <div className="text-sm font-bold text-white">{currentEst.phases}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-xs font-mono">
                  <div>
                    <div className="text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3 text-[#00F59B]" /> Timeline</div>
                    <div className="text-slate-100 font-bold">{currentEst.timeline}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#00F59B]" /> NDA Protected</div>
                    <div className="text-emerald-400 font-bold">100% Confidential</div>
                  </div>
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  3. Contact & Project Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Business Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name / Product Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your product goals, target materials, or problem to solve..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00F59B]" />
                  <span>Strict NDA Guarantee</span>
                </div>
                <button
                  type="submit"
                  className="btn-primary text-xs py-3 px-8"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit For Free Scoping</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
