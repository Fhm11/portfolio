import React, { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, Loader2 } from 'lucide-react';

export const Contact = ({ config }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // 1. Récupère les données du formulaire
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    // 2. Envoie les données à FormSubmit
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${config.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.user_name,
          email: data.user_email,
          subject: data.subject,
          message: data.message,
          _subject: `Nouveau message de ${data.user_name} (Portfolio)` // Sujet du mail que tu recevras
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message envoyé avec succès !' });
        form.current.reset();
      } else {
        setStatus({ type: 'error', message: 'Une erreur est survenue.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Erreur de connexion.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto w-full">
        {/* ... (Le début du JSX reste identique : Titres, Intro...) */}
        <div className="flex items-center gap-3 mb-12">
           <Send className="w-8 h-8 text-purple-400" />
           <h2 className="text-4xl sm:text-5xl font-bold">Contact</h2>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
          
          {/* ... (Texte d'intro reste identique) */}

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Nom"
                required
                className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            
            {/* Champ caché pour désactiver le captcha (optionnel) */}
            <input type="hidden" name="_captcha" value="false" />
            
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              required
              className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
            />
            
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full px-6 py-4 bg-white/10 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 transition-colors resize-none"
            />
            
            {status.message && (
              <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50 flex justify-center items-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Envoi...
                </>
              ) : (
                'Envoyer le message'
              )}
            </button>
          </form>

          {/* ... (La section réseaux sociaux reste identique) */}
           <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-purple-500/20">
            <a href={config.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Github className="w-6 h-6" /></a>
            <a href={config.linkedin} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${config.email}`} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Mail className="w-6 h-6" /></a>
          </div>

        </div>
      </div>
    </section>
  );
};