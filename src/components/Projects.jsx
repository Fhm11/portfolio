import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

export const Projects = ({ config }) => {
  return (
    <section id="projets" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl sm:text-5xl font-bold">Projets</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  className="flex items-center gap-2 text-purple-400 hover:gap-3 transition-all"
                >
                  Voir le projet <ExternalLink className="w-4 h-4" />
                </a>
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:gap-3 transition-all"
                  >
                    Code <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};