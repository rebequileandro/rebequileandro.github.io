import React, { useEffect, useState } from 'react';
import { Activity, Database, Globe, Cpu } from 'lucide-react';
import { cn } from '../../lib/utils';

const TELEMETRY_LOGS = [
  'Procesando pedido distribuido...',
  'Actualizando estado del cluster...',
  'Sincronizando endpoints de la API...',
  'Minimizando latencia IO...',
  'Optimizando consulta de base de datos...',
  'Validando handshake SSL...',
  'Desplegando contenedor edge...',
  'Verificando consistencia de datos...',
  'Actualizando métricas de rendimiento...',
  'Sincronizando cache global...',
];

export const LiveTelemetry: React.FC = () => {
  const [logs, setLogs] = useState<string[]>(TELEMETRY_LOGS.slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = TELEMETRY_LOGS[Math.floor(Math.random() * TELEMETRY_LOGS.length)];
      setLogs((prev) => [randomLog, ...prev].slice(0, 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 overflow-hidden bg-bg-deep border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            <span className="text-sm font-mono font-bold text-success uppercase tracking-[0.3em]">System Live</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">Telemetría de <br /> <span className="text-gradient">Sistema Activo</span></h2>
          <p className="text-text-secondary text-lg max-w-md">
            Monitoreo en tiempo real de operaciones backend y estados de integración. Transparencia técnica total.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="glass p-4 rounded-xl border-white/5 space-y-2">
              <Activity size={20} className="text-primary" />
              <div className="text-2xl font-bold font-mono">99.9%</div>
              <div className="text-[10px] text-text-secondary uppercase font-bold">Uptime</div>
            </div>
            <div className="glass p-4 rounded-xl border-white/5 space-y-2">
              <Globe size={20} className="text-primary" />
              <div className="text-2xl font-bold font-mono">124ms</div>
              <div className="text-[10px] text-text-secondary uppercase font-bold">Latency</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20 animate-pulse" />
          
          <div className="relative glass bg-black/40 border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database size={14} className="text-text-secondary" />
                <span className="text-[10px] font-mono text-text-secondary uppercase font-bold tracking-widest">Live_Logs.db</span>
              </div>
              <Cpu size={14} className="text-primary animate-pulse" />
            </div>
            
            <div className="p-6 font-mono text-xs space-y-4">
              {logs.map((log, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex items-start gap-3 transition-all duration-1000 transform animate-in fade-in slide-in-from-top-2",
                    i === 0 ? "text-primary opacity-100" : "text-text-secondary opacity-40"
                  )}
                >
                  <span className="text-[8px] mt-1 opacity-50 px-1 py-0.5 border border-current rounded uppercase">LOG</span>
                  <span className="flex-1">{log}</span>
                  <span className="text-[10px] tabular-nums">{new Date().toLocaleTimeString('es-ES', { hour12: false })}</span>
                </div>
              ))}
            </div>
            
            <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex gap-4">
              <div className="h-1.5 w-1/3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[75%] animate-pulse" />
              </div>
              <div className="h-1.5 w-1/3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-success w-[40%] animate-pulse" />
              </div>
              <div className="h-1.5 w-1/3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary-hover w-[90%] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
