import React from 'react';
import { Rocket, Target, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-hover text-[10px] font-bold uppercase tracking-widest">
            Behind the code
          </div>
          <h2 className="text-4xl md:text-5xl font-bold italic">Solucionador de <span className="text-primary not-italic">Problemas</span></h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Me llamo Leandro Rebequi y mi enfoque no es solo escribir código, sino diseñar herramientas que potencien negocios. 
            Como Senior Creative Technologist, fusiono la precisión técnica con una visión estética premium.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Target size={16} className="text-primary" /> Enfoque Práctico
              </div>
              <p className="text-xs text-text-secondary">Soluciones directas sin sobre-ingeniería innecesaria.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Lightbulb size={16} className="text-primary" /> Creatividad Técnica
              </div>
              <p className="text-xs text-text-secondary">Interfaces que emocionan y arquitecturas que escalan.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-6 relative">
          <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-20 -z-10" />
          
          <div className="glass p-8 rounded-2xl border-white/5 space-y-4 translate-y-8">
            <div className="text-4xl font-bold text-white">5+</div>
            <div className="text-xs font-mono text-primary uppercase font-bold tracking-widest">Años de Exp</div>
            <p className="text-xs text-text-secondary">Construyendo productos digitales de alto impacto para startups globales.</p>
          </div>
          
          <div className="glass p-8 rounded-2xl border-white/5 bg-primary/10 space-y-4">
            <div className="text-4xl font-bold text-white">50+</div>
            <div className="text-xs font-mono text-primary uppercase font-bold tracking-widest">Proyectos Up</div>
            <p className="text-xs text-text-secondary">Desde MVPs rápidos hasta sistemas de misión crítica escalables.</p>
          </div>
          
          <div className="glass p-8 rounded-2xl border-white/5 space-y-4 translate-y-8">
            <div className="text-4xl font-bold text-white">99%</div>
            <div className="text-xs font-mono text-primary uppercase font-bold tracking-widest">Client Sat</div>
            <p className="text-xs text-text-secondary">Enfoque centrado en la comunicación clara y resultados tangibles.</p>
          </div>
          
          <div className="glass p-8 rounded-2xl border-primary/20 bg-primary/5 space-y-4">
            <Rocket size={40} className="text-primary" />
            <div className="text-xs font-mono text-primary uppercase font-bold tracking-widest">Full-Stack</div>
            <p className="text-xs text-text-secondary">Dominio total del ciclo de vida del desarrollo de software moderno.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
