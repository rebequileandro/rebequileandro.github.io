import React, { useEffect, useRef, useState } from 'react';
import { Terminal as TerminalIcon, Shield, Zap, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { cn } from '../../lib/utils';

const LOG_MESSAGES = [
  { type: 'info', text: '[INFO] Initializing system core...' },
  { type: 'info', text: '[INFO] Loading frontend assets...' },
  { type: 'success', text: '[SUCCESS] React 19 hydrated' },
  { type: 'info', text: '[INFO] Optimizing bundle size...' },
  { type: 'info', text: '[INFO] Connecting to backend services...' },
  { type: 'success', text: '[SUCCESS] API Pipeline active' },
  { type: 'info', text: '[INFO] Loading creative components...' },
  { type: 'success', text: '[SUCCESS] Dashboard ready' },
  { type: 'info', text: '[LIVE] Users active: 1,428' },
  { type: 'info', text: '[LIVE] Latency: 12ms' },
];

export const Hero: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const logIndexRef = useRef(0);

  useEffect(() => {
    // Terminal Log Animation
    const interval = setInterval(() => {
      if (logIndexRef.current < LOG_MESSAGES.length) {
        const nextLog = LOG_MESSAGES[logIndexRef.current].text;
        setLogs((prev) => [...prev, nextLog].slice(-8));
        logIndexRef.current++;
      } else {
        logIndexRef.current = 0;
        setLogs([]);
      }
    }, 1500);

    // GSAP Intro Animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      if (terminalRef.current) {
        gsap.from(terminalRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          delay: 0.5,
          ease: 'power3.out',
        });
      }
    }, heroRef);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="hero-content space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-hover text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
            Construyo <span className="text-primary italic">productos</span> <br />
            digitales que <span className="text-gradient">funcionan</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed font-sans">
            Frontend especializado en experiencias modernas y de alto rendimiento. 
            Backend sólido cuando hace falta.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contacto"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/40 active:scale-95 flex items-center gap-2"
            >
              Agendar una llamada
              <Zap size={18} fill="currentColor" />
            </a>
            <a
              href="#proyectos"
              className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 border-white/10"
            >
              Ver proyectos
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-text-secondary">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider">Secure Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={16} className="text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider">Optimized Performance</span>
            </div>
          </div>
        </div>

        {/* Right Terminal Visual */}
        <div ref={terminalRef} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/30 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
          
          <div className="relative glass glass-card border border-white/10 bg-bg-secondary/90 overflow-hidden min-h-[400px] flex flex-col p-0">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-text-secondary uppercase tracking-widest">
                <TerminalIcon size={12} />
                system_console.logs
              </div>
              <div className="w-10" />
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm space-y-3 flex-1 overflow-hidden">
              {logs.map((log, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "animate-in fade-in slide-in-from-left-2 duration-300",
                    log?.includes('SUCCESS') ? 'text-success' : 'text-text-primary'
                  )}
                >
                  <span className="text-primary opacity-50 mr-2">$</span>
                  {log}
                </div>
              ))}
              <div className="flex items-center gap-1">
                <span className="text-primary opacity-50 mr-2">$</span>
                <span className="w-2 h-4 bg-primary animate-blink" />
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="p-4 border-t border-white/5 bg-white/2">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Memory Usage</div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-text-secondary uppercase tracking-tighter">CPU Load</div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-hover w-[32%] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-text-secondary uppercase tracking-tighter">Disk IO</div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-success w-[12%] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
