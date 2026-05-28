import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  Play, CheckCircle2, ChevronRight, Star, Shield, Award, Clock, ArrowRight, BadgeCheck,
} from 'lucide-react';

interface VSLAppProps {
  config: AppConfig;
}

export const VSLApp: React.FC<VSLAppProps> = ({ config }) => {
  const accentText = config.primaryColor.replace('bg-', 'text-');

  const benefits = [
    'Resultados a partir da 1ª semana',
    'Método validado em +200 negócios',
    'Acompanhamento próximo e direto',
    'Garantia incondicional de 7 dias',
  ];

  return (
    <div className="w-full min-h-full bg-white font-sans text-slate-900 pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg ${config.primaryColor} flex items-center justify-center text-white font-black text-sm`}>
            {config.heroTitle.charAt(0)}
          </div>
          <h1 className="font-black text-[10px] uppercase tracking-widest text-slate-900">{config.heroTitle}</h1>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-[8px] font-black text-red-600 uppercase tracking-widest">Ao vivo</span>
        </div>
      </header>

      {/* Headline + Video */}
      <div className="px-4 py-6 bg-slate-50 relative overflow-hidden">
        <span className={`inline-block ${config.primaryColor} text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest mb-3`}>
          Vaga limitada
        </span>
        <h2 className="text-xl font-black leading-tight mb-4 text-slate-900 tracking-tight">
          Descubra como <span className={`${accentText} underline decoration-2 underline-offset-4`}>dobrar seus resultados</span> em 30 dias.
        </h2>

        <div className="relative w-full aspect-video bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center mb-4 overflow-hidden border-2 border-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${config.heroImage})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
          <div className={`relative w-14 h-14 ${config.primaryColor} rounded-full flex items-center justify-center text-white shadow-2xl z-10 border-4 border-white/20`}>
            <Play fill="white" size={20} className="ml-0.5" />
          </div>
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[9px] font-black uppercase tracking-widest">
            <span>00:00 / 12:34</span>
            <span className="flex items-center gap-1"><Clock size={10} /> Assista agora</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-500 font-bold text-center leading-snug max-w-[260px] mx-auto uppercase tracking-widest">
          Aperte play e veja o método que está transformando o resultado dos meus clientes.
        </p>
      </div>

      {/* Benefits */}
      <div className="px-4 py-5">
        <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight mb-3">O que você vai descobrir</h3>
        <ul className="space-y-2">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <CheckCircle2 size={14} className={`${accentText} shrink-0 mt-0.5`} />
              <span className="text-[11px] font-bold text-slate-700 leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Authority */}
      <div className="px-4 py-3 mb-3">
        <div className={`${config.primaryColor} rounded-2xl p-4 flex items-center gap-3 shadow-md`}>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
            <Award size={20} />
          </div>
          <div className="text-white leading-tight">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Especialista certificado</p>
            <p className="text-sm font-black mt-0.5">{config.heroTitle}</p>
            <p className="text-[9px] font-bold opacity-90 mt-0.5">+5 anos de experiência</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 mb-5">
        <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight mb-3">Quem já fez</h3>
        <div className="space-y-2">
          {[
            { name: 'Lucas R.', text: 'Em 2 semanas tive resultado. Recomendo demais.' },
            { name: 'Carla M.', text: 'Conteúdo direto ao ponto, sem enrolação.' },
          ].map((r, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-black text-[10px]">{r.name.charAt(0)}</div>
                <div className="flex-1">
                  <p className="text-[10px] font-black text-slate-900 leading-none">{r.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={8} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <BadgeCheck size={12} className="text-brand-green" />
              </div>
              <p className="text-[10px] text-slate-600 font-medium leading-snug">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="px-4 mb-5">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-center gap-3">
          <Shield size={20} className="text-brand-green shrink-0" />
          <div>
            <p className="text-[10px] font-black text-slate-900 leading-tight uppercase tracking-widest">Garantia 7 dias</p>
            <p className="text-[9px] text-slate-500 font-medium leading-snug mt-0.5">Não gostou? 100% do valor de volta.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 space-y-2">
        <button className={`w-full ${config.primaryColor} text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest`}>
          {config.ctaText}
          <ChevronRight size={14} strokeWidth={3} />
        </button>
        <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-widest">
          🔒 Inscrição segura · vagas limitadas
        </p>
      </div>
    </div>
  );
};
