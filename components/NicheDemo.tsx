import React, { useState } from 'react';
import { X, ChevronRight, Play, ArrowLeft, Sparkles } from 'lucide-react';
import { nicheData } from '../data/nicheData';
import { PhoneFrame } from './PhoneFrame';

export const NicheDemo: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState('burger');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const selectedNicheData = nicheData.find(n => n.id === selectedNiche) || nicheData[0];

  const handleNicheClick = (nicheId: string) => {
    setSelectedNiche(nicheId);
    setIsPreviewOpen(true);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <React.Fragment>
      <section id="nichos" className="py-24 md:py-40 px-4 bg-brand-dark relative overflow-hidden">
        {/* Background Texture — HANDLED GLOBALLY BY SECTION CSS */}
        <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 md:mb-32 space-y-6 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
              <Sparkles size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Designs que Convertem</span>
            </div>
            <h2 className="font-sans text-4xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Templates já validados <br />
              <span className="text-brand-green">para seu nicho.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Estruturas profissionais desenhadas especificamente para o seu modelo de negócio, garantindo <span className="text-white font-bold">autoridade e vendas.</span>
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nicheData.slice(0, visibleCount).map((niche, idx) => (
              <div
                key={niche.id}
                onClick={() => handleNicheClick(niche.id)}
                className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-green/40 transition-all duration-500 cursor-pointer reveal-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                style={{ transitionDelay: `${(idx % 6) * 150}ms` }}
              >
                {/* Browser Header dots */}
                <div className="bg-slate-900 px-6 py-4 flex items-center gap-1.5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                  <div className="ml-4 h-3 w-32 bg-white/5 rounded-full"></div>
                </div>

                {/* Card Content Image */}
                <div className="aspect-[16/11] relative overflow-hidden">
                  <img
                    src={niche.appConfig.heroImage}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    alt={niche.label}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_30px_rgba(163,230,53,0.5)]">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-black text-xl tracking-tight leading-none">{niche.label}</h3>
                    <div className="px-3 py-1 bg-brand-green/10 rounded-full text-[9px] font-black text-brand-green uppercase tracking-widest border border-brand-green/20">Elite</div>
                  </div>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed line-clamp-2 italic">
                    {niche.appConfig.heroSubtitle || `Página de alta conversão para o nicho de ${niche.label.toLowerCase()} com design premium.`}
                  </p>

                  <div className="pt-4 flex items-center gap-3 text-brand-green font-black text-xs uppercase tracking-[.25em] group-hover:text-white transition-all">
                    TESTAR PREVIEW <ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center reveal-hidden">
            {visibleCount < nicheData.length ? (
              <button
                onClick={handleLoadMore}
                className="px-12 py-6 rounded-2xl border-2 border-brand-green/30 hover:bg-brand-green hover:text-slate-950 text-brand-green font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-brand-green/20 flex items-center gap-3 group"
              >
                CARREGAR MAIS PROJETOS
                <Play size={14} className="rotate-90 group-hover:translate-y-1 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => window.open('https://wa.me/5551984689725?text=Olá, quero um site exclusivo para meu nicho.', '_blank')}
                className="px-12 py-6 rounded-2xl bg-brand-green text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand-green/20 hover:scale-105 flex items-center gap-3"
              >
                <Sparkles size={16} />
                QUERO UM SITE EXCLUSIVO
              </button>
            )}
          </div>
        </div>

        {/* Fullscreen Preview Modal */}
        {isPreviewOpen && (
          <div className="fixed inset-0 z-[9990] bg-[#020617] flex flex-col items-center justify-start overflow-y-auto">
            {/* Top Bar with Back Button */}
            <div className="w-full h-20 px-6 md:px-12 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#020617]/90 backdrop-blur-xl z-[100]">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowLeft size={20} />
                </div>
                <span className="font-black text-[10px] md:text-xs uppercase tracking-widest">VOLTAR PARA OS PROJETOS</span>
              </button>

              <div className="hidden md:flex flex-col items-center">
                <span className="text-white font-black text-sm uppercase tracking-widest">{selectedNicheData.label}</span>
                <span className="text-brand-green font-black text-[9px] uppercase tracking-[0.4em]">PREVIEW MOBILE LIVE</span>
              </div>

              <button
                onClick={() => {
                  setIsPreviewOpen(false);
                  document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-brand-green text-slate-950 px-8 py-3.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
              >
                GARANTIR MEU SITE
              </button>
            </div>

            <div className="w-full flex-grow flex items-center justify-center p-8 md:p-20 relative min-h-screen">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

              <div className="w-full max-w-[420px] relative z-10 animate-fade-in-up">
                <PhoneFrame niche={selectedNicheData} />
              </div>
            </div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};