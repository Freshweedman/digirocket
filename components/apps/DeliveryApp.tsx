import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  Search, ShoppingBag, Star, ChevronRight, Clock, ArrowRight, MapPin, Phone,
  Bike, Tag, Heart, Instagram, MessageCircle, BadgeCheck,
} from 'lucide-react';

interface DeliveryAppProps {
  config: AppConfig;
}

export const DeliveryApp: React.FC<DeliveryAppProps> = ({ config }) => {
  const accentText = config.primaryColor.replace('bg-', 'text-');
  const products = config.products.length >= 3
    ? config.products
    : [...config.products, ...config.products].slice(0, 4);

  return (
    <div className="w-full min-h-full bg-white font-sans text-slate-900 pb-6">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl ${config.primaryColor} flex items-center justify-center text-white font-black text-base shadow-sm`}>
            {config.heroTitle.charAt(0)}
          </div>
          <div className="leading-tight">
            <h1 className="font-black text-[11px] text-slate-900 uppercase tracking-tight">{config.heroTitle}</h1>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
              <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Aberto agora</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <ShoppingBag size={18} className="text-slate-900" />
          <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${config.primaryColor} text-white text-[8px] flex items-center justify-center font-black border border-white`}>2</span>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-44 w-full overflow-hidden">
        <img src={config.heroImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h2 className="text-lg font-black leading-tight mb-1">{config.heroSubtitle}</h2>
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest opacity-90">
            <span className="flex items-center gap-1"><Clock size={10} /> 20-35 min</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-brand-green"><Bike size={10} /> Frete grátis</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Star size={10} className="fill-yellow-400 text-yellow-400" /> 4.9</span>
          </div>
        </div>
      </div>

      {/* Promo banner */}
      <div className={`mx-4 -mt-5 relative z-10 ${config.primaryColor} rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl`}>
        <Tag size={16} className="text-white" />
        <div className="flex-1 leading-tight">
          <p className="text-white text-[10px] font-black uppercase tracking-wider">15% OFF no 1º pedido</p>
          <p className="text-white/80 text-[8px] font-bold uppercase tracking-widest">Cupom: BEMVINDO</p>
        </div>
        <ChevronRight size={14} className="text-white" />
      </div>

      {/* Search */}
      <div className="px-4 py-4">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full bg-slate-50 border-0 rounded-xl pl-10 pr-4 py-2 text-xs font-bold focus:outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['Destaques', 'Combos', 'Mais Pedidos', 'Bebidas', 'Sobremesas'].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black whitespace-nowrap uppercase tracking-wider ${
                i === 0 ? `${config.primaryColor} text-white shadow-md` : 'bg-slate-100 text-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured grid */}
      <div className="px-4 mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight">Em alta</h3>
          <span className={`text-[9px] font-black uppercase tracking-widest ${accentText}`}>Ver mais</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {products.slice(0, 2).map((p) => (
            <div key={p.id} className="rounded-2xl overflow-hidden border border-slate-100 bg-white">
              <div className="aspect-square relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <button className={`absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 flex items-center justify-center ${accentText}`}>
                  <Heart size={12} />
                </button>
                <span className={`absolute top-2 left-2 ${config.primaryColor} text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest`}>Top</span>
              </div>
              <div className="p-2">
                <p className="text-[10px] font-black text-slate-900 leading-tight line-clamp-1">{p.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] font-black text-slate-900">{p.price}</span>
                  <button className={`w-6 h-6 rounded-lg ${config.primaryColor} text-white flex items-center justify-center`}>
                    <ChevronRight size={12} strokeWidth={4} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full menu list */}
      <div className="px-4 space-y-3 mb-6">
        <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight">Cardápio</h3>
        {products.map((product) => (
          <div
            key={`menu-${product.id}`}
            className="bg-white p-3 rounded-2xl border border-slate-100 flex gap-3"
          >
            <img src={product.image} className="w-16 h-16 rounded-xl object-cover bg-slate-50 shrink-0" />
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <h4 className="font-black text-slate-900 text-[12px] leading-tight mb-0.5 truncate">{product.name}</h4>
              <p className="text-[9px] text-slate-400 font-medium leading-tight line-clamp-1 mb-1.5">Ingredientes selecionados, preparo artesanal.</p>
              <div className="flex justify-between items-center">
                <span className="font-black text-slate-900 text-sm tracking-tight">{product.price}</span>
                <button className={`w-7 h-7 rounded-lg ${config.primaryColor} text-white flex items-center justify-center`}>
                  <ChevronRight size={14} strokeWidth={4} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight">O que dizem</h3>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-[10px] font-black text-slate-700">4.9</span>
          </div>
        </div>
        <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-black text-[10px]">M</div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-slate-900 leading-none">Marcos S.</p>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">há 2 dias</p>
            </div>
            <BadgeCheck size={12} className="text-brand-green" />
          </div>
          <p className="text-[10px] text-slate-600 font-medium leading-snug">"Chegou rápido e quentinho. O melhor da região, sem dúvida."</p>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 mb-6 grid grid-cols-2 gap-2">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <MapPin size={12} className={`${accentText} mb-1`} />
          <p className="text-[9px] font-black text-slate-900 leading-tight">Centro · 1.2km</p>
          <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Ver mapa</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <Clock size={12} className={`${accentText} mb-1`} />
          <p className="text-[9px] font-black text-slate-900 leading-tight">Aberto até 23h</p>
          <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Seg a Dom</p>
        </div>
      </div>

      {/* Social */}
      <div className="px-4 mb-6 flex items-center justify-center gap-3">
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
        <button className={`w-full ${config.primaryColor} text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 text-xs uppercase tracking-widest`}>
          {config.ctaText} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
