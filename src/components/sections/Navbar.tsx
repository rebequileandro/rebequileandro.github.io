import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[95%] max-w-5xl',
        isScrolled ? 'top-4' : 'top-6'
      )}
    >
      <div
        className={cn(
          'glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300',
          isScrolled ? 'bg-bg-secondary/80 py-2 shadow-2xl' : 'bg-white/5'
        )}
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary-hover transition-colors">
            <Terminal size={18} className="text-white" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Leandro<span className="text-primary">.dev</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            Agendar llamada
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-text-secondary hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-primary text-white text-center font-bold py-3 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agendar llamada
          </a>
        </div>
      )}
    </nav>
  );
};
