import React from 'react';
import { User } from 'lucide-react';

export const About = ({ config }) => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl sm:text-5xl font-bold">À propos</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {config.about.description}
            </p>
            
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Mes valeurs</h3>
              <ul className="space-y-2 text-gray-300">
                {config.about.values.map((value, idx) => (
                  <li key={idx}>{value}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Compétences</h3>
            <div className="flex flex-wrap gap-3">
              {config.about.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};