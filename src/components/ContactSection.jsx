import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#07090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="tech-badge mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Engineer Your Next <span className="text-gradient-accent">Breakthrough</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have a new patent idea, CAD assembly to optimize, or need factory mold tooling, our engineering team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-mono">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <a 
                  href="tel:+994502010898"
                  className="flex items-start gap-4 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors border border-white/5 text-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00F59B]/10 text-[#00F59B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Phone / WhatsApp</div>
                    <div className="text-white font-bold">+994 50 201 0898</div>
                  </div>
                </a>

                <a 
                  href="mailto:team@tactical-vision.com"
                  className="flex items-start gap-4 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors border border-white/5 text-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00D2FF]/10 text-[#00D2FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Official Email</div>
                    <div className="text-white font-bold">team@tactical-vision.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-[#00F59B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Global Headquarters</div>
                    <div className="text-white font-bold">1963 A. Rajabli, Narimanov, AZ1008, Baku, Azerbaijan</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Operating Hours</div>
                    <div className="text-slate-200">Mon – Fri: 09:00 – 18:00 (GMT+4)</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#00F59B]" />
                  <span>Confidentiality & NDA guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-3">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              {sent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00F59B]/20 border border-[#00F59B] text-[#00F59B] flex items-center justify-center mx-auto shadow-lg shadow-[#00F59B]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formState.name}</strong>. Your message has been routed to our project engineering desk. We will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormState({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="btn-secondary text-xs py-2 px-6 mt-4"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white font-mono mb-2">
                    Send Us a Project Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Phone / WhatsApp (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Project Details / Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your product idea, existing CAD files, target timelines, or manufacturing requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F59B]"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      * All submissions protected by standard NDA
                    </span>
                    <button
                      type="submit"
                      className="btn-primary text-xs py-3 px-8"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
