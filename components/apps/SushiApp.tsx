import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  ShoppingBag, Star, ChevronRight, Clock, MapPin, Phone, Instagram, MessageCircle, BadgeCheck,
} from 'lucide-react';

interface SushiAppProps {
  config: AppConfig;
}

export const SushiApp: React.FC<SushiAppProps> = ({ config }) => {
  const products = config.products.length >= 3
    ? config.products
    : [...config.products, ...config.products].slice(0, 3);

  return (
    <div className="w-full min-h-full bg-zinc-950 font-sans text-zinc-100 pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur border-b border-zinc-900 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white font-black text-sm">
            {config.heroTitle.charAt(0)}
          </div>
          <div className="leading-tight">
            <h1 className="font-black text-[10px] uppercase tracking-[0.2em]">{config.heroTitle}</h1>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">Aberto</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <ShoppingBag size={18} className="text-zinc-400" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[8px] flex items-center justify-center font-black border border-zinc-950">2</span>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-48 w-full overflow-hidden">
        <img src={config.heroImage} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <h2 className="text-xl font-black leading-tight mb-1 tracking-tight">{config.heroSubtitle}</h2>
          <div className="flex items-center gap-2 text-[8px] font-black text-rose-400 uppercase tracking-widest">
            <span className="flex items-center gap-1"><Star size={10} fill="currentColor" /> 4.9</span>
            <span className="text-zinc-500">·</span>
            <span className="flex items-center gap-1"><Clock size={10} /> 40 min</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-300">Frete grátis</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['Combos', 'Sashimi', 'Hot Roll', 'Temaki', 'Bebidas'].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black whitespace-nowrap uppercase tracking-wider ${
                i === 0 ? 'bg-rose-600 text-white shadow-md' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-4 space-y-5 mb-6">
        <h3 className="font-black text-[11px] uppercase tracking-widest text-zinc-300">Cardápio</h3>
        {products.map((product, i) => (
          <div key={`${product.id}-${i}`} className="group">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-2 bg-zinc-900">
              <img src={product.image} className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-zinc-950/85 backdrop-blur px-2.5 py-0.5 rounded-md">
                <span className="text-xs font-black text-white">{product.price}</span>
              </div>
              <span className="absolute top-2 right-2 bg-rose-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Premium</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-black tracking-tight truncate">{product.name}</h4>
                <p className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">Peixe fresco · Premium</p>
              </div>
              <button className="bg-rose-600 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg shrink-0 ml-2">
                <ChevronRight size={16} className="text-white" strokeWidth={3} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="px-4 mb-5 grid grid-cols-2 gap-2">
        <div className="bg-zinc-900/60 rounded-xl p-2.5 border border-zinc-800">
          <MapPin size={12} className="text-rose-400 mb-1" />
          <p className="text-[9px] font-black leading-tight">Centro · 1.5km</p>
          <p className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">Ver mapa</p>
        </div>
        <div className="bg-zinc-900/60 rounded-xl p-2.5 border border-zinc-800">
          <Clock size={12} className="text-rose-400 mb-1" />
          <p className="text-[9px] font-black leading-tight">Aberto 18h-23h</p>
          <p className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">Ter a Dom</p>
        </div>
      </div>

      {/* Review */}
      <div className="px-4 mb-5">
        <h3 className="font-black text-[11px] uppercase tracking-widest text-zinc-300 mb-2">Avaliações</h3>
        <div className="bg-zinc-900/60 rounded-2xl p-3 border border-zinc-800">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-black text-[10px]">L</div>
            <div className="flex-1">
              <p className="text-[10px] font-black leading-none">Lucas N.</p>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={8} className="fill-rose-400 text-rose-400" />)}
              </div>
            </div>
            <BadgeCheck size={12} className="text-emerald-400" />
          </div>
          <p className="text-[10px] text-zinc-400 font-medium leading-snug">"Sushi de altíssimo nível. A apresentação faz toda a diferença."</p>
        </div>
      </div>

      {/* Social */}
      <div className="px-4 mb-5 flex items-center justify-center gap-3">
        <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-300 border border-zinc-800">
          <Instagram size={14} />
        </div>
        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-950">
          <MessageCircle size={14} fill="currentColor" />
        </div>
        <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-300 border border-zinc-800">
          <Phone size={14} />
        </div>
      </div>

      {/* CTA */}
      <div className="px-4">
        <button className="w-full bg-white text-zinc-950 font-black py-4 rounded-xl flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest">
          {config.ctaText} <ShoppingBag size={14} />
        </button>
      </div>
    </div>
  );
};
