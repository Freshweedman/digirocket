import React from 'react';
import {
  Palette, Instagram, Megaphone, Bot, MessageSquare, Briefcase, Code2, Video,
  Sparkles, Award, Calendar, Rocket, ArrowUpRight
} from 'lucide-react';

type Service = {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  tag: string;
};

const services: Service[] = [
  { icon: Palette, title: 'Design & Identidade', desc: 'Identidade visual, paleta e Brand Book com a cara do seu negócio.', tag: '01' },
  { icon: Instagram, title: 'Mídias Sociais', desc: 'Estratégia de conteúdo, copy e arte para crescer no orgânico.', tag: '02' },
  { icon: Megaphone, title: 'Tráfego Pago', desc: 'Campanhas Google e Meta otimizadas com foco em ROI real.', tag: '03' },
  { icon: Bot, title: 'Automação WhatsApp', desc: 'Bots e fluxos de atendimento que vendem 24h por dia.', tag: '04' },
  { icon: MessageSquare, title: 'Atendimento', desc: 'Relacionamento e suporte humanizado pro seu cliente final.', tag: '05' },
  { icon: Briefcase, title: 'Gestão de Projetos', desc: 'Coordenação ponta a ponta, prazos e entregas no compromisso.', tag: '06' },
  { icon: Code2, title: 'Desenvolvimento', desc: 'Sites, landing pages e integrações com tecnologia de ponta.', tag: '07' },
  { icon: Video, title: 'Edição de Vídeo', desc: 'Reels, VSLs e institucionais com roteiro e edição profissional.', tag: '08' },
];

const stats = [
  { value: '5+', suffix: 'anos', label: 'No mercado digital', icon: Calendar },
  { value: '200+', suffix: 'projetos', label: 'Sites e campanhas entregues', icon: Rocket },
  { value: '#1', suffix: 'Google', label: 'Em Porto Alegre · Sites', icon: Award },
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
            <span className="text-brand-green">somos seus parceiros.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Uma equipe inteira cuidando do seu projeto.{' '}
            <span className="text-slate-900 font-bold">Você foca em vender. A gente cuida do resto.</span>
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

        {/* SERVICES — clean monochrome with brand accent */}
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 gap-4 reveal-hidden">
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Serviços que <span className="text-brand-green">fornecemos</span>.
              </h3>
              <p className="text-slate-500 font-medium text-sm md:text-base mt-2">
                Tudo que seu negócio precisa pra crescer no digital, no mesmo lugar.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
              {services.length} áreas de atuação
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden reveal-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_20px_50px_-15px_rgba(2,6,23,0.25)]"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Top: dark band with icon */}
                <div className="relative h-28 md:h-32 bg-slate-900 overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(163,230,53,0.4) 1px, transparent 1px)',
                    backgroundSize: '14px 14px'
                  }}></div>

                  {/* Glow */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-green/15 blur-3xl rounded-full group-hover:bg-brand-green/30 transition-colors"></div>

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-green/10 border border-brand-green/20 backdrop-blur flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-slate-950 group-hover:border-transparent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon size={26} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Tag number */}
                  <div className="absolute top-3 right-3 text-[9px] font-mono font-black tracking-widest text-brand-green/40 group-hover:text-brand-green transition-colors">
                    /{s.tag}
                  </div>

                  {/* Bottom hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col gap-2 flex-grow">
                  <h4 className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-tight">
                    {s.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-snug flex-grow">
                    {s.desc}
                  </p>
                  <div className="pt-3 mt-auto flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                    Saiba mais
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
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
                Pronto pra ter um time inteiro <span className="text-brand-green">cuidando do seu negócio?</span>
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-medium mt-3">
                Diagnóstico gratuito. Estratégia desenhada pro seu nicho. Sem compromisso.
              </p>
            </div>
            <button
              onClick={() =>
                window.open(
                  'https://wa.me/5551984689725?text=Olá, quero um diagnóstico gratuito da DigiRocket.',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="bg-brand-green text-slate-950 px-8 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] flex items-center gap-3 shrink-0"
            >
              Quero falar agora
              <Sparkles size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
