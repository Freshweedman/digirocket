import React, { useState } from 'react';
import { Menu, X, Rocket, ArrowRight, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'O Que Fazemos', href: '#como-funciona' },
    { label: 'Exemplos', href: '#nichos' },
    { label: 'Cases', href: '#resultados' },
    { label: 'Investimento', href: '#planos' },
  ];

  return (
    <>
      {/* NEON URGENCY ALERT BANNER */}
      <div
        className="fixed top-0 w-full z-[100] h-10 flex items-center justify-center overflow-hidden bg-black"
      >
        {/* NEON GREEN SWEEP EFFECT */}
        <div
          className="absolute top-0 bottom-0 left-0 z-10 w-full animate-neon-sweep pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(163,230,53,0.05) 30%, rgba(163,230,53,0.5) 50%, rgba(163,230,53,0.05) 70%, transparent 100%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Content Layer */}
        <div className="relative flex items-center gap-2 md:gap-4 px-4 text-[9px] md:text-[11px] font-black tracking-[0.1em] md:tracking-[0.3em] uppercase whitespace-nowrap z-20">
          {/* Status Dot */}
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-brand-green rounded-full opacity-40 animate-ping"></div>
            <div className="relative w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]"></div>
          </div>

          <span className="text-brand-green">
            ATENDIMENTO HUMANIZADO
          </span>
          <span className="text-white opacity-40">
            ·
          </span>
          <span className="text-white">
            ENTREGA EM 48H · #1 NO GOOGLE
          </span>
        </div>
      </div>

      <header className="fixed top-10 w-full z-[90] transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Rocket size={32} className="text-brand-green fill-brand-green transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-display font-black text-2xl tracking-tighter text-[#1e293b]">
                DigiRocket
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-10 items-center">
              {[
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Equipe', href: '#equipe' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Nichos', href: '#nichos' },
                { label: 'Planos', href: '#planos' },
                { label: 'FAQ', href: '#faq' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[12px] font-black text-[#1e293b] hover:text-brand-green transition-all uppercase tracking-tight relative group py-2"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0f172a] hover:bg-slate-950 text-white px-8 py-4 rounded-full font-black text-[12px] transition-all shadow-xl hover:scale-105 flex items-center gap-3 group uppercase tracking-tight border border-transparent shadow-slate-200"
              >
                QUERO CRIAR MEU SITE AGORA
                <Zap size={14} className="text-brand-green fill-brand-green group-hover:animate-pulse" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 p-2 transition-colors hover:bg-slate-100 rounded-lg"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute w-full bg-white border-b border-slate-200 animate-fade-in-down shadow-2xl">
            <div className="px-6 py-8 space-y-4">
              {[
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Equipe', href: '#equipe' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Nichos', href: '#nichos' },
                { label: 'Planos', href: '#planos' },
                { label: 'FAQ', href: '#faq' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-4 text-sm font-black text-slate-900 hover:bg-slate-50 rounded-2xl transition-all uppercase tracking-[0.1em]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-[#0f172a] text-white px-8 py-5 rounded-2xl font-black text-center shadow-xl active:scale-95 transition-transform flex justify-center items-center gap-3 uppercase tracking-tight"
                >
                  QUERO CRIAR MEU SITE AGORA
                  <Zap size={20} className="text-brand-green fill-brand-green" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-[104px] md:h-[136px]"></div>
    </>
  );
};