import React from 'react';
import { ArrowLeft, CheckCircle2, X, AlertTriangle, TrendingUp, MessageCircle, ArrowRight, Shield, Clock, Award } from 'lucide-react';

interface ServicePageProps {
  service: {
    num: string;
    icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
    title: string;
    subtitle: string;
    fullDesc: string;
    benefits: string[];
    problems: string[];
    iconColor: string;
    badgeBg: string;
    gradient: string;
    ctaMsg: string;
  };
  onClose: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service, onClose }) => {
  const wa = 'https://wa.me/5551984689725';

  return (
    <div className="fixed inset-0 z-[9999] bg-brand-dark overflow-y-auto">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
              <ArrowLeft size={16} />
            </div>
            <span className="font-black text-xs uppercase tracking-widest hidden sm:inline">Voltar</span>
          </button>

          <div className="text-center">
            <h1 className="text-white font-black text-sm uppercase tracking-widest">{service.title}</h1>
            <p className="text-brand-green text-[8px] font-black uppercase tracking-[0.3em] mt-0.5">{service.subtitle}</p>
          </div>

          <a
            href={`${wa}?text=${encodeURIComponent(service.ctaMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-slate-950 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            <span className="hidden sm:inline">Quero Agora</span>
            <span className="sm:hidden">Quero</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`relative py-20 md:py-32 overflow-hidden bg-gradient-to-br ${service.gradient}`}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className={`inline-flex p-6 rounded-3xl ${service.badgeBg} shadow-2xl`}>
              <service.icon size={48} strokeWidth={1.6} className={service.iconColor} />
            </div>

            {/* Title */}
            <h2 className="font-sans text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              {service.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed">
              {service.subtitle}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
              {service.fullDesc}
            </p>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={`${wa}?text=${encodeURIComponent(service.ctaMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl"
              >
                <MessageCircle size={20} fill="currentColor" />
                Falar no WhatsApp Agora
                <ArrowRight size={18} />
              </a>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-3">
                Resposta em menos de 2 horas · Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="py-20 md:py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/15 rounded-full border border-red-500/30 mb-4">
              <AlertTriangle size={14} className="text-red-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-red-400">Problemas comuns</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Esses problemas estão <span className="text-red-400">matando seu negócio</span>
            </h3>
            <p className="text-slate-400 text-base md:text-lg font-medium max-w-2xl mx-auto">
              Enquanto você não resolve isso, seu concorrente está crescendo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.problems.map((problem, i) => (
              <div key={i} className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X size={20} className="text-red-400" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white text-base font-bold leading-relaxed">{problem}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2">73%</div>
              <div className="text-xs md:text-sm font-bold text-white/60 uppercase tracking-widest">Perdem clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2">R$15k</div>
              <div className="text-xs md:text-sm font-bold text-white/60 uppercase tracking-widest">Prejuízo/mês</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2">2x</div>
              <div className="text-xs md:text-sm font-bold text-white/60 uppercase tracking-widest">Mais caro depois</div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-20 md:py-24 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30 mb-4">
              <TrendingUp size={14} className="text-brand-green" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">A solução</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              O que você <span className="text-brand-green">recebe com a gente</span>
            </h3>
            <p className="text-slate-400 text-base md:text-lg font-medium max-w-2xl mx-auto">
              Tudo que você precisa pra resolver de vez e começar a crescer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-slate-900/50 border border-brand-green/20 rounded-2xl p-6 hover:border-brand-green/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} className="text-brand-green" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white text-base font-bold leading-relaxed">{benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-20 md:py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Por que escolher a <span className="text-brand-green">DigiRocket</span>?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 text-center hover:border-brand-green/40 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-brand-green" />
              </div>
              <h4 className="text-xl font-black text-white mb-2">Entrega Rápida</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Pronto em 48h ou devolvemos seu dinheiro. Sem enrolação.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 text-center hover:border-brand-green/40 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-brand-green" />
              </div>
              <h4 className="text-xl font-black text-white mb-2">+200 Clientes</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Mais de 200 negócios crescendo com a gente em todo o Brasil.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 text-center hover:border-brand-green/40 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-brand-green" />
              </div>
              <h4 className="text-xl font-black text-white mb-2">Garantia 7 Dias</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Não gostou? Devolvemos 100% do valor. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-brand-green/20 to-brand-dark border-t border-brand-green/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.05]">
            Bora resolver isso <span className="text-brand-green">agora</span>?
          </h3>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
            Enquanto você pensa, seu concorrente já está crescendo. Não deixa pra depois.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={`${wa}?text=${encodeURIComponent(service.ctaMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green text-slate-950 px-12 py-6 rounded-2xl font-black text-base uppercase tracking-[0.2em] hover:scale-105 hover:bg-white transition-all shadow-[0_0_60px_rgba(163,230,53,0.4)]"
            >
              <MessageCircle size={22} fill="currentColor" />
              Falar no WhatsApp Agora
              <ArrowRight size={20} />
            </a>
            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
              ⚡ Resposta em menos de 2 horas · Sem compromisso · Sem enrolação
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {['Pronto em 48h', 'A partir de R$497', 'Garantia 7 dias', '+200 clientes'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 size={14} className="text-brand-green" />
                <span className="text-xs font-black uppercase tracking-widest text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
