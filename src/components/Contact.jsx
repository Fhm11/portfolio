import React from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export const Contact = ({ config }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('MEssage envoyé');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-12">
          <Send className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl sm:text-5xl font-bold">Contact</h2>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
          <p className="text-xl text-gray-300 mb-8">
            Si besoin de me contacter, n'hésitez pas à remplir le formulaire ci-dessous ou à utiliser les liens vers mes réseaux sociaux.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            
            <input
              type="text"
              placeholder="Sujet"
              className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
            />
            
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors resize-none"
            />
            
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
            >
              Envoyer le message
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-purple-500/20">
            <a href={config.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={config.linkedin} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${config.email}`} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};