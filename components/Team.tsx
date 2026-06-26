import React from 'react';
import {
  Sparkles, Award, Calendar, Rocket
} from 'lucide-react';

type Service = {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  tag: string;
};

const stats = [
  { value: '5+', suffix: 'anos', label: 'Cuidando de cliente todo dia', icon: Calendar },
  { value: '200+', suffix: 'sites', label: 'No ar e funcionando', icon: Rocket },
  { value: '#1', suffix: 'Google', label: 'Pra quem busca site em POA', icon: Award },
];

export const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-1/3 bg-brand-green/[0.04] blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20 space-y-5 reveal-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full">
            <Sparkles size={14} className="text-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/90">Squad Completa</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Mais que uma agência, <br className="hidden md:block" />
            <span className="relative inline-block isolate">
              <span aria-hidden className="absolute inset-x-[-6px] bottom-0 md:bottom-1 h-3 md:h-5 bg-brand-green -rotate-1 rounded-sm z-0"></span>
              <span className="relative z-10">somos seus parceiros.</span>
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Time inteiro cuidando do seu site e suas redes.{' '}
            <span className="text-slate-900 font-bold">Você cuida do que faz de melhor. A gente cuida do resto.</span>
          </p>
        </div>

        {/* STATS BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative bg-slate-900 rounded-2xl p-7 md:p-8 overflow-hidden reveal-hidden hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/15 blur-3xl rounded-full group-hover:bg-brand-green/30 transition-colors"></div>

              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-brand-green/10 border border-brand-green/20 text-brand-green">
                  <s.icon size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-green/40">// {String(i + 1).padStart(2, '0')}</span>
              </div>

              <div className="relative z-10 flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">{s.value}</span>
                <span className="text-brand-green font-black text-xs uppercase tracking-[0.25em]">{s.suffix}</span>
              </div>
              <p className="relative z-10 text-slate-400 text-sm font-medium leading-snug">{s.label}</p>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* CTA BAND */}
        <div className="mt-16 md:mt-20 rounded-2xl bg-slate-900 p-8 md:p-12 relative overflow-hidden reveal-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-green/15 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(to right, rgba(163,230,53,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(163,230,53,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                Bora ter um time inteiro <span className="text-brand-green">cuidando do seu negócio?</span>
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-medium mt-3">
                Conversa rápida no WhatsApp, sem compromisso. A gente vê o que dá pra fazer pelo seu negócio.
              </p>
            </div>
            <button
              onClick={() =>
                window.open(
                  'https://wa.me/5551984689725?text=Olá, quero conversar sobre o meu negócio.',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="bg-brand-green text-slate-950 px-8 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] flex items-center gap-3 shrink-0"
            >
              Falar agora
              <Sparkles size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
