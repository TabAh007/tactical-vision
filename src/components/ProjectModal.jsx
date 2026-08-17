import React, { useState } from 'react';
import { X, CheckCircle2, ExternalLink, Shield, Cpu, Layers, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenEstimator }) {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState(project.coverImage);

  // Sync activeImage if project changes
  React.useEffect(() => {
    if (project) {
      setActiveImage(project.coverImage);
    }
  }, [project]);

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.coverImage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl bg-[#0D121E] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#080B12] sticky top-0 z-20">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#00F59B]/10 text-[#00F59B] border border-[#00F59B]/30 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Client: <strong className="text-slate-200">{project.client}</strong>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Hero / Gallery Display */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/50 aspect-video max-h-[420px] flex items-center justify-center group">
              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <p className="text-sm font-mono text-slate-300">
                  {project.tagline}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-[#00F59B] flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-md border border-white/10"
                  >
                    <span>Original Hostinger URL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails (if multiple images) */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 shrink-0">
                  <ImageIcon className="w-3.5 h-3.5 text-[#00F59B]" /> Gallery:
                </span>
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                      activeImage === imgUrl 
                        ? 'border-[#00F59B] scale-105 shadow-md shadow-[#00F59B]/20' 
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Summary & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#00F59B]" />
                  Engineering & Design Overview
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description || project.summary}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-base font-bold text-white mb-3">Key Technical Innovations</h4>
                <ul className="space-y-2.5">
                  {(project.features || project.highlights || []).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00F59B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="space-y-6">
              <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#00F59B] font-bold">
                  Technical Specifications
                </h4>
                <div className="space-y-3 divide-y divide-white/5 text-xs">
                  {project.specs.map((spec, idx) => (
                    <div key={idx} className="pt-2 first:pt-0">
                      <div className="text-slate-400 font-mono mb-0.5">{spec.label}</div>
                      <div className="text-slate-100 font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-[#00F59B]/10 to-[#00D2FF]/10 border border-[#00F59B]/30 text-center space-y-3">
                <p className="text-xs text-slate-200">
                  Need a similar hardware solution developed from concept to manufacturing?
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenEstimator();
                  }}
                  className="btn-primary w-full text-xs py-2.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request Engineering Scope</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#080B12] flex items-center justify-between text-xs text-slate-400">
          <span>Project Verified: Tactical Vision Engineering Team</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
