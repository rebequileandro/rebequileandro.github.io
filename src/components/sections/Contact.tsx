import { useState, type FormEvent } from 'react';
import { Mail, MessageSquare, Send, Linkedin } from 'lucide-react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error('Missing VITE_WEB3FORMS_ACCESS_KEY: the contact form cannot send messages.');
      setStatus('error');
      return;
    }

    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `Nuevo mensaje de ${formData.get('name')} desde el portfolio`);
    formData.append('from_name', 'Portfolio Leandro Rebequi');

    setStatus('sending');
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result: { success?: boolean } = await response.json();
      if (!response.ok || !result.success) throw new Error('Web3Forms rejected the submission');

      form.reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-card bg-bg-secondary/50 border border-white/10 p-8 md:p-16 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="grid lg:grid-cols-2 gap-16 relative">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6">¿Listo para <span className="text-primary italic">escalar</span>?</h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                Hablemos sobre tu próximo proyecto. Estoy disponible para colaboraciones freelancing y consultoría técnica.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:rebequileandro@gmail.com" className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary uppercase font-bold tracking-widest mb-1">Email</div>
                  <div className="text-white font-medium">rebequileandro@gmail.com</div>
                </div>
              </a>
              
              <a href="https://wa.me/5493435442575" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary uppercase font-bold tracking-widest mb-1">WhatsApp</div>
                  <div className="text-white font-medium">+54 343 544-2575</div>
                </div>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/leandro-rebequi/', label: 'LinkedIn' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot: hidden from people, bots that fill it are rejected by Web3Forms */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-[10px] font-mono text-text-secondary uppercase font-bold tracking-widest ml-1">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-[10px] font-mono text-text-secondary uppercase font-bold tracking-widest ml-1">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-[10px] font-mono text-text-secondary uppercase font-bold tracking-widest ml-1">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="¿En qué puedo ayudarte?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              <Send size={18} />
            </button>

            <p role="status" aria-live="polite" className="text-sm text-center min-h-5">
              {status === 'success' && (
                <span className="text-success">¡Gracias! Recibí tu mensaje y te respondo a la brevedad.</span>
              )}
              {status === 'error' && (
                <span className="text-red-400">
                  No se pudo enviar el mensaje. Escribime a rebequileandro@gmail.com o por WhatsApp.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
