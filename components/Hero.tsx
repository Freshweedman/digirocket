import React, { useState, useEffect } from 'react';
import { Rocket, TrendingUp, CheckCircle2, ArrowRight, Star, MessageCircle, AlertCircle } from 'lucide-react';
import { trackWhatsAppClick, trackCTAClick } from '../utils/analytics';

const TypingHeadline: React.FC = () => {
  const fullText = 'Quando seu cliente busca no Google agora, é você ou o concorrente?';
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 25); // Otimizado: 20ms → 25ms (menos recalculos)
      return () => clearTimeout(timeout);
    }
  }, [text, fullText.length]); // Dependências corretas

  // Memoiza cálculo de posição para evitar re-calculos
  const greenStart = React.useMemo(() => fullText.indexOf('é você'), [fullText]);
  const isGreenVisible = text.length >= greenStart;

  return (
    <h1 className="font-sans text-[2.5rem] leading-[1.05] md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tight">
      {text.slice(0, greenStart)}
      {isGreenVisible && <br className="hidden md:block" />}
      <span className="text-brand-green drop-shadow-[0_0_20px_rgba(163,230,53,0.5)]">
        {isGreenVisible ? text.slice(greenStart) : ''}
      </span>
      <span className="inline-block w-2 md:w-3 h-[0.8em] bg-brand-green ml-1 animate-pulse align-baseline shadow-[0_0_15px_rgba(163,230,53,0.8)]"></span>
    </h1>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 md:pt-36 pb-20 overflow-hidden bg-brand-dark px-4">
      {/* BACKGROUND ARCHITECTURE — HANDLED GLOBALLY BY SECTION CSS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Glow Orbs — Enhanced for depth */}
        <div className="absolute top-1/4 -left-20 w-[800px] h-[800px] bg-brand-green/20 blur-[200px] rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-brand-green/10 blur-[200px] rounded-full animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-950/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* URGÊNCIA - VAGAS LIMITADAS */}
        <div className="mb-8 reveal-hidden animate-pulse-slow">
          <div className="inline-flex items-center gap-3 bg-red-500/10 border-2 border-red-500/30 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <AlertCircle size={18} className="text-red-400" />
            <span className="text-red-400 font-black text-xs md:text-sm uppercase tracking-[0.25em]">
              ÚLTIMAS 2 VAGAS ESTA SEMANA
            </span>
          </div>
        </div>

        {/* Trust Badge - Clean */}
        <div className="mb-10 reveal-hidden">
          <div className="bg-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl border border-slate-100 group hover:scale-105 transition-transform">
            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" className="w-5 h-5" alt="Google" loading="lazy" decoding="async" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-700">+200 negócios no Google</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* STRATEGIC BADGES - Simplificado */}
        <div className="mb-12 md:mb-16 reveal-hidden delay-100">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
              <Rocket size={12} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/80">48h no ar</span>
            </div>
            <div className="bg-brand-green/15 px-4 py-2 rounded-full border border-brand-green/30 flex items-center gap-2">
              <TrendingUp size={12} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-green">R$497</span>
            </div>
          </div>
        </div>

        {/* HEADLINE */}
        <div className="relative mb-10 md:mb-14 max-w-6xl reveal-hidden delay-200">
          <TypingHeadline />
        </div>

        {/* SUBHEADLINE */}
        <div className="mb-14 md:mb-24 max-w-4xl reveal-hidden delay-300">
          <p className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed">
            Site profissional em 48h. Seu cliente clica e <span className="text-white font-bold">fala direto no seu WhatsApp</span>. Sem mensalidade. Sem contrato. Sem enrolação.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12 md:mt-16">
            {[
              { text: '+200 sites no ar' },
              { text: '48h ou seu dinheiro de volta' },
              { text: '70% dos clientes buscam no celular' },
            ].map((perk, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-brand-green shrink-0" />
                <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.18em] text-white/70 text-left">{perk.text}</span>
              </div>
            ))}
          </div>

          {/* TRUST STATS STRIP - Melhor espaçamento */}
          <div className="mt-16 md:mt-24 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
            {[
              { value: '200+', label: 'Clientes' },
              { value: '48h', label: 'Entrega' },
              { value: 'R$497', label: 'A partir de' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-4xl font-black text-brand-green tracking-tighter leading-none">{s.value}</div>
                <div className="text-[9px] md:text-xs font-black text-white/40 uppercase tracking-widest mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Espaço maior antes do CTA */}
        <div className="h-8 md:h-12" />

        {/* CTA BOX */}
        <div className="relative group reveal-hidden delay-500 mb-16 w-full max-w-4xl">
          <div className="absolute -inset-4 bg-brand-green/15 rounded-[3rem] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="relative bg-[#020617]/80 backdrop-blur-xl p-7 md:p-12 rounded-[2.5rem] border border-white/10 shadow-3xl flex flex-col md:flex-row items-center gap-x-12 gap-y-8 transition-all duration-700">
            <div className="text-center md:text-left space-y-3 flex-1">
              {/* Scarcity */}
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                <span className="text-red-400 font-black text-[10px] uppercase tracking-[0.3em]">Só 2 vagas disponíveis</span>
              </div>
              <h3 className="text-white text-2xl md:text-4xl font-black tracking-tight leading-[1.05]">
                Seu site em 48h. <br className="hidden md:block" />
                <span className="text-brand-green">Fala com a gente agora.</span>
              </h3>
              <p className="text-slate-400 text-sm font-medium max-w-md">
                Atendemos 4 clientes por semana. Resposta em até 2 horas.
              </p>
            </div>

            <div className="w-px h-20 bg-white/10 hidden md:block shrink-0"></div>

            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/5551984689725?text=Oi%2C+vi+o+site+de+voc%C3%AAs+e+quero+um+site+para+meu+neg%C3%B3cio+em+Porto+Alegre.+Podem+me+ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('hero_main_cta');
                  trackCTAClick('Falar no WhatsApp', 'hero');
                }}
                className="bg-brand-green hover:bg-white text-slate-950 px-8 py-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-[0.15em] transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)] flex items-center justify-center gap-3 group/btn"
              >
                <MessageCircle size={20} className="fill-slate-950" />
                Falar no WhatsApp
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>

              <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                ⚡ Sem compromisso · Resposta em menos de 2h
              </p>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 reveal-hidden delay-500">
          <button
            onClick={() => document.getElementById('nichos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/15 hover:border-brand-green/40 hover:bg-brand-green/5 text-white/70 hover:text-white font-black text-xs uppercase tracking-[0.2em] transition-all"
          >
            <span className="text-base">👀</span>
            Ver exemplos de sites
          </button>

          <a
            href="https://wa.me/5551984689725?text=Oi%2C+quero+conversar+sobre+o+que+a+DigiRocket+pode+fazer+pelo+meu+neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsAppClick('hero_secondary_cta');
              trackCTAClick('Quero falar primeiro', 'hero_secondary');
            }}
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-500/5 text-emerald-400 hover:text-emerald-300 font-black text-xs uppercase tracking-[0.2em] transition-all"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
              <span className="relative w-2 h-2 rounded-full bg-emerald-400"></span>
            </span>
            Quero falar primeiro
          </a>
        </div>
      </div>
    </section>
  );
};