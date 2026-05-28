import React, { useState, useEffect } from 'react';
import { Rocket, TrendingUp, CheckCircle2, ArrowRight, Star } from 'lucide-react';

const TypingHeadline: React.FC = () => {
  const fullText = "Transforme seu negócio em uma máquina de vendas.";
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  const machineIndex = fullText.indexOf("máquina");
  const isMachineVisible = text.length >= machineIndex;

  return (
    <h1 className="font-sans text-[2.8rem] leading-[1] md:text-8xl lg:text-9xl font-black text-white tracking-tight min-h-[3.6em] md:min-h-[2.4em] lg:min-h-[2.4em]">
      {text.slice(0, machineIndex)}
      {isMachineVisible && <br className="hidden lg:block" />}
      <span className="text-brand-green">
        {isMachineVisible ? text.slice(machineIndex) : ""}
      </span>
      <span className="inline-block w-2 md:w-4 h-[0.8em] bg-brand-green ml-1 animate-pulse align-baseline"></span>
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

        {/* Google Authority Badge as seen in screenshot */}
        <div className="mb-10 reveal-hidden">
          <div className="bg-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl border border-slate-100 group hover:scale-105 transition-transform">
            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" className="w-5 h-5" alt="Google" loading="lazy" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-700">AUTORIDADE MÁXIMA GOOGLE LOCAL</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* STRATEGIC BADGES */}
        <div className="mb-10 md:mb-14 reveal-hidden delay-100">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-2 backdrop-blur-sm">
              <Rocket size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-white/80">Entrega Recorde 48h</span>
            </div>
            <div className="bg-brand-green/15 px-5 py-2.5 rounded-full border border-brand-green/30 flex items-center gap-2">
              <TrendingUp size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-brand-green">Foco Total em Conversão</span>
            </div>
          </div>
        </div>

        {/* HEADLINE */}
        <div className="relative mb-10 md:mb-14 max-w-6xl reveal-hidden delay-200">
          <TypingHeadline />
        </div>

        {/* SUBHEADLINE */}
        <div className="mb-14 md:mb-24 max-w-4xl reveal-hidden delay-300">
          <p className="text-slate-400 text-lg md:text-3xl font-medium leading-relaxed">
            Sua vitrine digital aberta 24h por dia, atraindo clientes e fechando negócios enquanto você foca na operação.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12 md:mt-16">
            {[
              { text: "Sem mensalidade", icon: CheckCircle2 },
              { text: "Entrega em 48h", icon: CheckCircle2 },
              { text: "Otimizado para celular", icon: CheckCircle2 }
            ].map((perk, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-brand-green" />
                <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.2em] text-white/60">{perk.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BOX */}
        <div className="relative group reveal-hidden delay-500 mb-24">
          <div className="absolute -inset-6 bg-brand-green/20 rounded-[4.5rem] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="relative bg-[#020617]/80 backdrop-blur-xl p-10 md:p-16 rounded-[4.5rem] border border-white/10 shadow-3xl flex flex-col md:flex-row items-center gap-x-16 gap-y-12 transition-all duration-700">
            <div className="text-center md:text-left space-y-3">
              <span className="text-white/40 font-black text-sm line-through block tracking-widest">DE R$ 899</span>
              <div className="flex items-baseline gap-5 justify-center md:justify-start">
                <span className="text-white text-6xl md:text-9xl font-black tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">R$ 497</span>
                <span className="text-brand-green font-black text-xs md:text-base uppercase tracking-[0.4em] leading-none">Única Vez</span>
              </div>
            </div>

            <div className="w-px h-24 bg-white/10 hidden md:block"></div>

            <button
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-green hover:bg-white text-slate-950 px-14 py-8 rounded-[2.5rem] font-black text-base md:text-2xl uppercase tracking-[0.2em] transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] flex items-center gap-5 group/btn"
            >
              Começar Agora
              <ArrowRight size={28} className="group-hover/btn:translate-x-3 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};