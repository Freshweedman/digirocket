import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Star, BadgeCheck, Award, Phone, Instagram, MessageCircle,
} from 'lucide-react';

interface LeadCaptureAppProps {
  config: AppConfig;
}

export const LeadCaptureApp: React.FC<LeadCaptureAppProps> = ({ config }) => {
  const accentText = config.primaryColor.replace('bg-', 'text-');

  const benefits = [
    { t: 'Diagnóstico gratuito', d: 'Sem compromisso, sem pegadinha.' },
    { t: 'Plano sob medida', d: 'Estratégia desenhada pro seu caso.' },
    { t: 'Acompanhamento próximo', d: 'Suporte direto com especialistas.' },
    { t: 'Garantia de resultado', d: 'Retorno mensurável e claro.' },
  ];

  return (
    <div className="w-full min-h-full bg-white font-sans text-slate-900 pb-6">
      {/* Hero */}
      <div className="relative h-44 w-full overflow-hidden">
        <img src={config.heroImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl ${config.primaryColor} flex items-center justify-center text-white font-black text-sm shadow-md`}>
            {config.heroTitle.charAt(0)}
          </div>
        </div>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className={`inline-block ${config.primaryColor} text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest mb-1.5`}>
            Vagas limitadas
          </span>
          <h1 className="text-lg font-black mb-1 leading-tight tracking-tight">{config.heroTitle}</h1>
          <p className="text-[10px] font-medium opacity-90 leading-snug">{config.heroSubtitle}</p>
        </div>
      </div>

      {/* Trust strip */}
      <div className="px-4 -mt-3 relative z-10 mb-4">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-3 flex items-center gap-3">
          <div className="flex">
            {['A', 'B', 'C'].map((l, i) => (
              <div
                key={l}
                className={`w-6 h-6 rounded-full ${config.primaryColor} border-2 border-white flex items-center justify-center text-white font-black text-[8px]`}
                style={{ marginLeft: i > 0 ? '-6px' : 0 }}
              >
                {l}
              </div>
            ))}
          </div>
          <div className="flex-1 leading-tight">
            <p className="text-[10px] font-black text-slate-900">+200 pessoas atendidas</p>
            <div className="flex items-center gap-1 mt-0.5">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={9} className="fill-yellow-400 text-yellow-400" />)}
              <span className="text-[8px] font-black text-slate-500">4.9</span>
            </div>
          </div>
          <BadgeCheck size={14} className="text-brand-green" />
        </div>
      </div>

      {/* Form */}
      <div className="px-4 mb-5">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
          <div className="flex items-center gap-1.5 mb-3">
            <Sparkles size={12} className={accentText} />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Solicite agora</span>
          </div>
          <h3 className="text-sm font-black text-slate-900 mb-3 leading-tight">Quero receber o diagnóstico gratuito.</h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Seu Nome</label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full bg-white border border-slate-100 rounded-xl px-3 py-2 text-[11px] font-bold focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">WhatsApp</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full bg-white border border-slate-100 rounded-xl px-3 py-2 text-[11px] font-bold focus:outline-none"
              />
            </div>
            <button className={`w-full ${config.primaryColor} text-white font-black py-3 rounded-xl shadow-lg flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest mt-2`}>
              {config.ctaText} <ArrowRight size={12} />
            </button>
            <p className="text-[8px] text-slate-400 font-bold text-center uppercase tracking-widest flex items-center justify-center gap-1">
              <ShieldCheck size={9} /> Seus dados estão seguros
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-4 mb-5">
        <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight mb-3">Por que escolher</h3>
        <div className="space-y-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-2.5 p-2.5 bg-white rounded-xl border border-slate-100">
              <CheckCircle2 size={14} className={`${accentText} shrink-0 mt-0.5`} />
              <div>
                <h4 className="text-[11px] font-black text-slate-900 leading-tight">{b.t}</h4>
                <p className="text-[9px] text-slate-500 font-medium mt-0.5 leading-snug">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authority bar */}
      <div className="px-4 mb-5 grid grid-cols-2 gap-2">
        <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
          <Award size={12} className={accentText} />
          <p className="text-[9px] font-black text-slate-900 leading-tight">+5 anos<br />de mercado</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
          <ShieldCheck size={12} className={accentText} />
          <p className="text-[9px] font-black text-slate-900 leading-tight">Conformidade<br />LGPD</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="px-4 mb-5">
        <div className="bg-white rounded-2xl p-3 border border-slate-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-black text-[10px]">R</div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-slate-900 leading-none">Roberto F.</p>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Cliente desde 2024</p>
            </div>
            <BadgeCheck size={12} className="text-brand-green" />
          </div>
          <p className="text-[10px] text-slate-600 font-medium leading-snug">"Atendimento humano e estratégia que realmente funciona."</p>
        </div>
      </div>

      {/* Social */}
      <div className="px-4 mb-5 flex items-center justify-center gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white">
          <Instagram size={14} />
        </div>
        <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center text-slate-900">
          <MessageCircle size={14} fill="currentColor" />
        </div>
        <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white">
          <Phone size={14} />
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-4">
        <button className={`w-full ${config.primaryColor} text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest`}>
          {config.ctaText} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
