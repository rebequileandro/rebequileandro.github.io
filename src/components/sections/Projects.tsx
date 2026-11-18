import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
  github?: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Deenex',
    description: 'Plataforma para que los comercios recuperen a los clientes que hoy compran a través de las apps de delivery.',
    stack: ['Astro', 'TypeScript', 'Cloudflare'],
    image: 'https://deenex.tech/og-image.jpg',
    link: 'https://deenex.tech/',
  },
  {
    id: 2,
    title: 'Dra. Luciana Comerci',
    description: 'Sitio profesional para estudio jurídico penalista en CABA y PBA, optimizado para SEO y captación de consultas.',
    stack: ['Web', 'SEO', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    link: 'https://abogadalucianacomerci.com/',
  },
  {
    id: 3,
    title: 'Turnos Online · Kinesiología',
    description: 'Demo de sistema de reserva de turnos online para profesionales de la salud, desplegado en el edge.',
    stack: ['Cloudflare Workers', 'Reservas', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    link: 'https://turnos-demo.elbolson.workers.dev/',
  },
];

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
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
    <section id="proyectos" ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto min-h-[500px]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-hover text-[10px] font-bold uppercase tracking-[0.2em]">
            Portfolio de Ingeniería
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Proyectos <span className="text-primary italic">Destacados</span></h2>
          <p className="text-text-secondary max-w-xl text-lg">
            Sistemas robustos diseñados con enfoque en escalabilidad, rendimiento y estética premium.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="project-card group relative cursor-pointer glass-card has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary border-white/5 bg-white/2 hover:bg-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full opacity-0 translate-y-10"
          >
            {/* Image Preview */}
            <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-deep/80 to-transparent" />
              
              {project.github && (
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-primary transition-colors hover:text-white"
                    aria-label="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-widest">
                <Layers size={14} />
                Module ID: 00{project.id}
              </div>
              
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-text-secondary group-hover:border-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-all group/btn after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none"
                >
                  Ver proyecto
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
