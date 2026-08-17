import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnersTicker from './components/PartnersTicker';
import CadViewer3D from './components/CadViewer3D';
import PortfolioSection from './components/PortfolioSection';
import CadRealitySlider from './components/CadRealitySlider';
import ServicesSection from './components/ServicesSection';
import EngineeringProcess from './components/EngineeringProcess';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import EstimatorModal from './components/EstimatorModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <PartnersTicker />
        
        {/* 3D Interactive WebGL Engineering Lab */}
        <div id="3d-lab">
          <CadViewer3D />
        </div>

        {/* Full Portfolio Case Studies Grid */}
        <PortfolioSection 
          onSelectProject={(project) => setSelectedProject(project)} 
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* Interactive CAD vs Reality Split Comparison Slider */}
        <div id="cad-reality">
          <CadRealitySlider />
        </div>

        {/* Core Capabilities */}
        <ServicesSection onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* 4-Phase Roadmap */}
        <EngineeringProcess onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* Global Team & Offices */}
        <AboutSection onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* Direct Contact Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Case Study Modal with Multi-Image Gallery Switcher */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Free Scoping & Consultation Estimator Modal */}
      <EstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />
    </div>
  );
}
