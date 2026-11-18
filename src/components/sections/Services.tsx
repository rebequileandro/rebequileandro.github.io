import React, { useEffect, useRef } from 'react';
import { Code2, Server, Layout, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: 'Desarrollo Frontend',
    description: 'Interfaces de usuario modernas, rápidas y altamente interactivas con React, Next.js y GSAP. Enfoque en UX y rendimiento.',
    icon: Layout,
    features: ['Single Page Applications', 'Animaciones Premium', 'Core Web Vitals', 'Responsive Design'],
  },
  {
    title: 'Integraciones & Backend',
    description: 'Arquitecturas sólidas en Node.js, integraciones de API de terceros y gestión de bases de datos escalables.',
    icon: Server,
    features: ['RESTful / GraphQL APIs', 'Autenticación Segura', 'Optimización de DB', 'Arquitectura Serverless'],
  },
  {
    title: 'Sistemas a Medida',
    description: 'Soluciones end-to-end diseñadas específicamente para las necesidades de tu negocio o startup.',
    icon: Code2,
    features: ['Dashboards Corporativos', 'E-commerce Avanzado', 'SaaS Multitenant', 'Automatización de Flujos'],
  },
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card');
      if (cards.length > 0) {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-24 px-6 bg-bg-secondary/30 relative min-h-[500px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest">Servicios Técnicos</div>
          <h2 className="text-4xl md:text-6xl font-bold">Arquitectura de <span className="text-primary italic">Soluciones</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg pt-4">
            Combinando diseño creativo con ingeniería de software robusta para construir el futuro digital.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group glass-card p-10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden opacity-0 translate-y-10"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon size={120} />
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-primary/80">
                      <CheckCircle2 size={16} className="text-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
