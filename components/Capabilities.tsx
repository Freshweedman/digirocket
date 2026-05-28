import React from 'react';
import {
  ShieldCheck, Zap, Search, Brush, Lock, Gauge, MapPin, Smartphone, CheckCircle2, Sparkles,
} from 'lucide-react';

type Cap = {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  metric: string;
  desc: string;
  bullets: string[];
};

const caps: Cap[] = [
  {
    icon: Gauge,
    title: 'Performance Elite',
    metric: 'LCP < 1.5s',
    desc: 'Site rápido vende mais. Otimizamos cada imagem, fonte e script para abrir num piscar.',
    bullets: ['CDN global', 'Imagens em WebP', 'Lazy loading inteligente', 'Score 95+ no PageSpeed'],
  },
  {
    icon: Search,
    title: 'SEO Local · Google #1',
    metric: 'Top 1 Porto Alegre',
    desc: 'Estrutura técnica e estratégia de palavra-chave para você dominar o Google da sua cidade.',
    bullets: ['Schema.org otimizado', 'SEO on-page completo', 'Google Meu Negócio', 'Sitemap e robots.txt'],
  },
  {
    icon: Brush,
    title: 'Design que Converte',
    metric: '+24% conversão',
    desc: 'Layouts validados em centenas de projetos. Cada pixel pensado pra levar o visitante à ação.',
    bullets: ['Mobile-first sempre', 'Hierarquia visual', 'Gatilhos de copywriting', 'CTAs estratégicos'],
  },
  {
    icon: ShieldCheck,
    title: 'Segurança & Confiança',
    metric: 'SSL + LGPD',
    desc: 'Seu site protegido, seus dados blindados. Cliente seguro é cliente que compra sem hesitar.',
    bullets: ['SSL grátis vitalício', 'Backup diário', 'Conformidade LGPD', 'Anti-spam embutido'],
  },
  {
    icon: MapPin,
    title: 'Otimizado para Brasil',
    metric: 'Atendimento BR',
    desc: 'Hospedagem com latência baixa, integrações com Pix, WhatsApp e meios de pagamento brasileiros.',
    bullets: ['Pix integrado', 'WhatsApp nativo', 'Moeda em Real', 'Suporte em português'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Real',
    metric: '70% do tráfego',
    desc: 'Maioria dos seus clientes vai ver pelo celular. Tudo é desenhado primeiro pra mobile.',
    bullets: ['Touch otimizado', 'Botões certos pro polegar', 'Leitura confortável', 'Teste em dezenas de devices'],
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20 space-y-5 reveal-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
            <Sparkles size={14} className="text-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Tecnologia que entrega resultado</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Cada site é uma fortaleza <br className="hidden md:block" />
            <span className="text-brand-green">com design que vende</span>.
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Não é só bonito. É rápido, seguro, encontrado pelo Google e pensado pra fazer seu cliente comprar.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {caps.map((c, i) => (
            <article
              key={c.title}
              className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-7 md:p-8 border border-white/5 hover:border-brand-green/40 transition-all duration-500 reveal-hidden hover:-translate-y-1.5 overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-green/15 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-brand-green/35 transition-colors opacity-30"></div>

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="inline-flex p-3.5 rounded-2xl bg-slate-950/60 text-brand-green border border-white/5 group-hover:bg-brand-green group-hover:text-slate-950 transition-all">
                  <c.icon size={22} strokeWidth={1.6} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green bg-brand-green/10 border border-brand-green/30 px-3 py-1.5 rounded-full">
                  {c.metric}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight relative z-10">{c.title}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-5 relative z-10">{c.desc}</p>

              <ul className="space-y-2 relative z-10">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-slate-300 text-xs md:text-sm font-medium">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* TRUST BAR */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-black text-white/50 uppercase tracking-widest">
          <span className="flex items-center gap-2"><Lock size={14} className="text-brand-green" /> SSL Vitalício</span>
          <span className="flex items-center gap-2"><Zap size={14} className="text-brand-green" /> CDN Global</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-green" /> Hospedagem BR</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-green" /> LGPD Compliant</span>
          <span className="flex items-center gap-2"><Search size={14} className="text-brand-green" /> SEO Técnico</span>
        </div>
      </div>
    </section>
  );
};
