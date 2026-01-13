import React from 'react';

export const Footer = ({ config }) => {
  return (
    <footer className="py-8 text-center text-gray-400 border-t border-purple-500/20 relative z-10">
      <p>© 2026 {config.name}. Tous droits réservés.</p>
    </footer>
  );
};