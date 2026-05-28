import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  ShoppingBag, Star, ChevronRight, Clock, Flame, Plus, MapPin, Phone,
  Instagram, MessageCircle, BadgeCheck,
} from 'lucide-react';

interface PizzaAppProps {
  config: AppConfig;
}

export const PizzaApp: React.FC<PizzaAppProps> = ({ config }) => {
  const products = config.products.length >= 3
    ? config.products
    : [...config.products, ...config.products].slice(0, 4);

  return (
    <div className="w-full min-h-full bg-[#1a0f08] font-sans text-orange-50 pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a0f08]/95 backdrop-blur border-b border-orange-900/20 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center text-white font-black text-sm border border-red-500/30">
            {config.heroTitle.charAt(0)}
          </div>
          <div className="leading-tight">
            <h1 className="font-black text-[10px] uppercase tracking-wider">{config.heroTitle}</h1>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[8px] text-orange-400 font-bold uppercase tracking-widest">Aberto</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <ShoppingBag size={18} className="text-orange-400" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-700 text-white text-[8px] flex items-center justify-center font-black border border-[#1a0f08]">3</span>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-44 w-full overflow-hidden">
        <img src={config.heroImage} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08] via-[#1a0f08]/50 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <h2 className="text-xl font-black italic leading-tight">{config.heroSubtitle}</h2>
          <div className="flex items-center gap-2 text-[8px] font-black text-orange-400 uppercase tracking-widest mt-1">
            <span className="flex items-center gap-1"><Flame size={10} className="text-red-500" /> Forno a lenha</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={10} /> 25 min</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Star size={10} className="fill-orange-400 text-orange-400" /> 4.8</span>
          </div>
        </div>
      </div>

      {/* Promo */}
      <div className="mx-4 -mt-3 relative z-10 bg-gradient-to-r from-red-800 to-red-600 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
        <Flame size={18} className="text-white" />
        <div className="flex-1 leading-tight">
          <p className="text-white text-[10px] font-black uppercase tracking-wider">Sabores grandes 30% OFF</p>
          <p className="text-white/80 text-[8px] font-bold uppercase tracking-widest">Hoje, das 18h às 22h</p>
        </div>
        <ChevronRight size={14} className="text-white" />
      </div>

      {/* Categories */}
      <div className="px-4 py-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['Tradicionais', 'Especiais', 'Doces', 'Bebidas'].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black whitespace-nowrap uppercase tracking-wider ${
                i === 0 ? 'bg-red-700 text-white shadow-md' : 'bg-orange-950/40 text-orange-400 border border-orange-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-4 space-y-5 mb-6">
        <h3 className="font-black text-[11px] uppercase tracking-widest text-orange-300">Cardápio</h3>
        {products.map((product, i) => (
          <div key={`${product.id}-${i}`} className="group">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-2 border border-orange-900/30 shadow-lg">
              <img src={product.image} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-orange-50 text-red-700 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Artesanal</span>
              <div className="absolute bottom-2 right-2 bg-[#1a0f08]/85 backdrop-blur px-2.5 py-0.5 rounded-md">
                <span className="text-xs font-black text-orange-400">{product.price}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-black italic tracking-tight truncate">{product.name}</h4>
                <p className="text-[8px] text-orange-500 font-bold uppercase tracking-widest mt-0.5">Massa artesanal</p>
              </div>
              <button className="bg-red-700 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-all shrink-0 ml-2">
                <Plus size={16} className="text-white" strokeWidth={4} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="px-4 mb-5 grid grid-cols-2 gap-2">
        <div className="bg-orange-950/30 rounded-xl p-2.5 border border-orange-900/30">
          <MapPin size={12} className="text-orange-400 mb-1" />
          <p className="text-[9px] font-black leading-tight">Bairro Centro</p>
          <p className="text-[8px] text-orange-500 font-bold uppercase tracking-widest mt-0.5">Ver mapa</p>
        </div>
        <div className="bg-orange-950/30 rounded-xl p-2.5 border border-orange-900/30">
          <Clock size={12} className="text-orange-400 mb-1" />
          <p className="text-[9px] font-black leading-tight">18h - 23h</p>
          <p className="text-[8px] text-orange-500 font-bold uppercase tracking-widest mt-0.5">Todos os dias</p>
        </div>
      </div>

      {/* Review */}
      <div className="px-4 mb-5">
        <h3 className="font-black text-[11px] uppercase tracking-widest text-orange-300 mb-2">Avaliações</h3>
        <div className="bg-orange-950/30 rounded-2xl p-3 border border-orange-900/30">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-orange-950 flex items-center justify-center text-orange-300 font-black text-[10px]">M</div>
            <div className="flex-1">
              <p className="text-[10px] font-black leading-none text-orange-100">Mariana V.</p>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={8} className="fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <BadgeCheck size={12} className="text-emerald-400" />
          </div>
          <p className="text-[10px] text-orange-200/80 font-medium leading-snug">"Pizza no nível das melhores que já comi. Massa fininha e sabor real."</p>
        </div>
      </div>

      {/* Social */}
      <div className="px-4 mb-5 flex items-center justify-center gap-3">
        <div className="w-9 h-9 rounded-full bg-orange-950/40 border border-orange-900/30 flex items-center justify-center text-orange-300">
          <Instagram size={14} />
        </div>
        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-950">
          <MessageCircle size={14} fill="currentColor" />
        </div>
        <div className="w-9 h-9 rounded-full bg-orange-950/40 border border-orange-900/30 flex items-center justify-center text-orange-300">
          <Phone size={14} />
        </div>
      </div>

      {/* CTA */}
      <div className="px-4">
        <button className="w-full bg-gradient-to-r from-red-800 to-red-600 text-white font-black py-4 rounded-xl shadow-xl flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest">
          {config.ctaText} <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
