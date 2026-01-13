import React from 'react';
import { Briefcase } from 'lucide-react';

export const Experience = ({ config }) => {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl sm:text-5xl font-bold">Expérience</h2>
        </div>

        <div className="space-y-8">
          {config.experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 pb-8 border-l-2 border-purple-500/30 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full -translate-x-[9px]" />
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 hover:bg-white/10 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <h3 className="text-2xl font-semibold text-purple-400">{exp.role}</h3>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};