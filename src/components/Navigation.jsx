import React from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../hooks/useScrollTracking';

export const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, config }) => {
  const menuItems = ['accueil', 'à propos', 'projets', 'experience', 'contact'];

  const handleClick = (item) => {
    scrollToSection(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {config.name.split(' ')[0]}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                  activeSection === item ? 'text-purple-400 font-semibold' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="block w-full text-left capitalize py-2 px-4 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};