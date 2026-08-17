import React, { useState } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { Search, ArrowUpRight, CheckCircle, SlidersHorizontal, Layers, Sparkles } from 'lucide-react';

export default function PortfolioSection({ onSelectProject, onOpenEstimator }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = portfolioData.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.categoryKey === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#07090E] relative">
      {/* Background decorations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="tech-badge mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies & Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proven Engineering in the <span className="text-gradient-accent">Wild</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore our track record of battle-tested hardware, consumer gear, rugged optics, and high-performance marine systems.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#00F59B] text-black font-bold shadow-lg shadow-[#00F59B]/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, client, CAD..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F59B] transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group glass-panel rounded-2xl overflow-hidden cursor-pointer hover:border-[#00F59B]/50 transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#00F59B]/10"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D121E] via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[#00F59B] border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Client Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-300 font-semibold drop-shadow">
                      {project.client}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#00F59B] text-black flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00F59B] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {project.summary || project.description}
                    </p>
                  </div>

                  {/* Tags & Quick Specs */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-mono text-[#00F59B] font-semibold flex items-center gap-1 group-hover:underline">
                      View Specs &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl p-8 max-w-lg mx-auto">
            <p className="text-slate-400 text-sm mb-4">No projects matched your filter query.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-secondary text-xs py-2 px-4"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl glass-panel border border-[#00F59B]/20 bg-gradient-to-r from-[#00F59B]/5 via-[#00D2FF]/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Have an idea or existing physical product to modernize?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We offer free confidential technical evaluations for startups, patent holders, and engineering directors.
            </p>
          </div>
          <button
            onClick={onOpenEstimator}
            className="btn-primary shrink-0 text-sm py-3 px-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Free Scoping Call</span>
          </button>
        </div>

      </div>
    </section>
  );
}
