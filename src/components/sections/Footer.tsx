import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-bg-deep">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
            <Terminal size={20} />
          </div>
          <div>
            <div className="font-display font-bold text-lg">Leandro Rebequi</div>
            <div className="text-[10px] font-mono text-text-secondary uppercase tracking-[0.2em]">Full Stack Developer</div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="text-[10px] text-text-secondary opacity-50">
            © {new Date().getFullYear()} — Built with React & GSAP
          </div>
        </div>
      </div>
    </footer>
  );
};
