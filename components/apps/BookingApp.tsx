import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  Calendar, Clock, MapPin, User, Star, Plus, ArrowRight, BadgeCheck,
  Phone, Instagram, MessageCircle, Award, ShieldCheck,
} from 'lucide-react';

interface BookingAppProps {
  config: AppConfig;
}

export const BookingApp: React.FC<BookingAppProps> = ({ config }) => {
  const accentText = config.primaryColor.replace('bg-', 'text-');
  const services = config.products.length >= 3
    ? config.products
    : [...config.products, ...config.products].slice(0, 3);

  const slots = ['09:00', '10:30', '14:00', '15:30', '17:00', '18:30'];
  const team = [
    { name: 'Ana', role: 'Senior' },
    { name: 'João', role: 'Master' },
    { name: 'Bia', role: 'Pro' },
  ];

  return (
    <div className="w-full min-h-full bg-slate-50 font-sans text-slate-900 pb-6">
      {/* Hero */}
      <div className="relative h-44 overflow-hidden">
        <img src={config.heroImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent"></div>
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl ${config.primaryColor} flex items-center justify-center text-white font-black text-sm shadow-md`}>
            {config.heroTitle.charAt(0)}
          </div>
        </div>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h1 className="font-black text-lg mb-1 tracking-tight leading-tight">{config.heroTitle}</h1>
          <p className="text-[10px] opacity-90 font-medium leading-tight mb-1">{config.heroSubtitle}</p>
          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-1"><MapPin size={9} /> 1.2km</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={9} /> Aberto</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Star size={9} className="fill-yellow-400 text-yellow-400" /> 4.9</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2 px-4 -mt-4 relative z-10 mb-5">
        {[
          { icon: Calendar, label: 'Agendar', active: true },
          { icon: User, label: 'Equipe' },
          { icon: Star, label: 'Review' },
          { icon: MapPin, label: 'Local' },
        ].map((act, idx) => (
          <div
            key={idx}
            className="bg-white p-2 rounded-2xl shadow-sm flex flex-col items-center gap-1.5 text-center"
          >
            <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${act.active ? `${config.primaryColor} text-white` : 'bg-slate-50 text-slate-400'}`}>
              <act.icon size={12} strokeWidth={2.5} />
            </div>
            <span className="text-[7px] font-black text-slate-900 uppercase tracking-widest">{act.label}</span>
          </div>
        ))}
      </div>

      {/* Services list */}
      <div className="px-4 mb-5">
        <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight mb-3">Serviços</h3>
        <div className="space-y-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex justify-between items-center p-2.5 bg-white rounded-2xl border border-slate-100"
            >
              <div className="flex gap-2.5 items-center min-w-0">
                <img src={service.image} className="w-11 h-11 rounded-xl object-cover shrink-0 bg-slate-50" />
                <div className="min-w-0">
                  <h4 className="font-black text-[11px] text-slate-900 leading-tight truncate">{service.name}</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-0.5"><Clock size={9} /> 45min</span>
                    <span className={`text-[9px] font-black ${accentText}`}>{service.price}</span>
                  </div>
                </div>
              </div>
              <button className={`w-7 h-7 rounded-xl flex items-center justify-center ${config.primaryColor} text-white shadow-md shrink-0 ml-2`}>
                <Plus size={14} strokeWidth={4} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="px-4 mb-5">
        <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight mb-3">Equipe</h3>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {team.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-3 flex flex-col items-center gap-1.5 border border-slate-100 min-w-[80px] shrink-0">
              <div className={`w-10 h-10 rounded-full ${config.primaryColor} flex items-center justify-center text-white font-black text-sm`}>
                {m.name.charAt(0)}
              </div>
              <p className="text-[10px] font-black text-slate-900 leading-none">{m.name}</p>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Available slots */}
      <div className="px-4 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight">Hoje · Horários</h3>
          <span className={`text-[9px] font-black uppercase tracking-widest ${accentText}`}>Mais dias</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {slots.map((s, i) => (
            <button
              key={s}
              className={`py-2 rounded-xl text-[10px] font-black border ${
                i === 1
                  ? `${config.primaryColor} text-white border-transparent shadow-md`
                  : 'bg-white text-slate-700 border-slate-100'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div className="px-4 mb-5 grid grid-cols-2 gap-2">
        <div className="bg-white rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
          <ShieldCheck size={14} className={accentText} />
          <p className="text-[9px] font-black text-slate-900 leading-tight">Confirmação<br />instantânea</p>
        </div>
        <div className="bg-white rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
          <Award size={14} className={accentText} />
          <p className="text-[9px] font-black text-slate-900 leading-tight">+5 anos<br />de mercado</p>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight">Avaliações</h3>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={9} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-[10px] font-black text-slate-700">4.9</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-3 border border-slate-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-black text-[10px]">P</div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-slate-900 leading-none">Patricia M.</p>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Cliente VIP</p>
            </div>
            <BadgeCheck size={12} className="text-brand-green" />
          </div>
          <p className="text-[10px] text-slate-600 font-medium leading-snug">"Atendimento impecável. Já virei cliente fixa."</p>
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

      {/* CTA */}
      <div className="px-4">
        <button className={`w-full flex items-center justify-center gap-3 py-4 ${config.primaryColor} text-white rounded-xl shadow-lg font-black text-[10px] uppercase tracking-widest`}>
          <Calendar size={16} />
          {config.ctaText}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
