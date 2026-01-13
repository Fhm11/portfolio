import React, { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollTracking, useMousePosition } from './hooks/useScrollTracking';
import { portfolioConfig } from './config/portfolio.config';
import './styles/animations.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollTracking(['home', 'about', 'projects', 'experience', 'contact']);
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <SpeedInsights />
      <Analytics />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 right-0 top-1/3" />
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 left-1/3 bottom-0" />
      </div>

      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        config={portfolioConfig}
      />
      
      <Hero config={portfolioConfig} />
      <About config={portfolioConfig} />
      <Projects config={portfolioConfig} />
      <Experience config={portfolioConfig} />
      <Contact config={portfolioConfig} />
      <Footer config={portfolioConfig} />
    </div>
  );
}