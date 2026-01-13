import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../hooks/useScrollTracking';

export const Hero = ({ config }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-6 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
          <span className="text-purple-300">Bienvenue sur mon portfolio</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {config.name}
          </span>
        </h1>
        
        <p className="text-2xl sm:text-3xl text-gray-300 mb-4">{config.title}</p>
        <p className="text-lg sm:text-xl text-gray-400 mb-8">{config.tagline}</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            Me contacter
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a href={config.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:scale-110 transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href={config.linkedin} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${config.email}`} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:scale-110 transform duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </section>
  );
};