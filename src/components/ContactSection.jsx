import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Shield } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: 'Concept Ideation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#07090E] relative border-t border-white/5">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="tech-badge mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Engineering Desk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Let's Build Something <span className="text-gradient-accent">Dominant</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Whether you have a rough sketch on a napkin or an existing CAD model ready for DFM optimization, let's connect.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left: Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Direct Contact Points
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <a 
                  href="tel:+994502010898"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-[#00F59B]/10 border border-white/5 hover:border-[#00F59B]/30 transition-all text-slate-200"
                >
                  <Phone className="w-4 h-4 text-[#00F59B]" />
                  <div>
                    <div className="text-[10px] text-slate-500">Phone / WhatsApp</div>
                    <div className="font-bold">+994 50 201 0898</div>
                  </div>
                </a>

                <a 
                  href="mailto:team@tactical-vision.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-[#00F59B]/10 border border-white/5 hover:border-[#00F59B]/30 transition-all text-slate-200"
                >
                  <Mail className="w-4 h-4 text-[#00F59B]" />
                  <div>
                    <div className="text-[10px] text-slate-500">Direct Email</div>
                    <div className="font-bold">team@tactical-vision.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-slate-200">
                  <MapPin className="w-4 h-4 text-[#00F59B]" />
                  <div>
                    <div className="text-[10px] text-slate-500">Global Headquarters</div>
                    <div className="font-bold">Baku, Azerbaijan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA Guarantee */}
            <div className="p-4 rounded-xl bg-[#00F59B]/5 border border-[#00F59B]/20 flex items-center gap-3 text-xs font-mono text-slate-300">
              <Shield className="w-5 h-5 text-[#00F59B] shrink-0" />
              <span>We sign standard mutual NDAs before reviewing any patent diagrams or confidential IP.</span>
            </div>
          </div>

          {/* Right: Message Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#00F59B]/10 text-[#00F59B] flex items-center justify-center mx-auto border border-[#00F59B]/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Thank you! An engineering project lead will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs py-1.5 px-4 mt-2"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Miller"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Company / Project Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Optics Inc"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Current Stage</label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0D121E] border border-white/10 text-white focus:outline-none focus:border-[#00F59B]"
                    >
                      <option>Concept Ideation</option>
                      <option>Industrial Design Phase</option>
                      <option>Mechanical CAD Modeling</option>
                      <option>DFM & Prototyping</option>
                      <option>Tooling & Mass Production</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Project Brief / Scope *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the product, timeline targets, materials, and quantities..."
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00F59B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-2.5 text-xs font-bold font-mono tracking-wide"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Confidential Engineering Brief</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
