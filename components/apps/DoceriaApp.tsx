import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  ShoppingBag, Star, Plus, Sparkles, Clock, MapPin, Phone, Instagram, MessageCircle, BadgeCheck,
} from 'lucide-react';

interface DoceriaAppProps {
  config: AppConfig;
}

export const DoceriaApp: React.FC<DoceriaAppProps> = ({ config }) => {
  const products = config.products.length >= 3
    ? config.products
    : [...config.products, ...config.products].slice(0, 4);

  return (
    <div className="w-full min-h-full bg-white font-sans text-pink-900 pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur px-4 py-3 flex justify-between items-center border-b border-pink-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-pink-500 flex items-center justify-center text-white font-black text-sm">
            {config.heroTitle.charAt(0)}
          </div>
          <div className="leading-tight">
            <h1 className="font-extrabold text-[11px] tracking-tight">{config.heroTitle}</h1>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-pink-500 animate-pulse"></span>
              <span className="text-[8px] text-pink-400 font-bold uppercase tracking-widest">Aberto</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <ShoppingBag size={18} className="text-pink-400" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-white text-[8px] flex items-center justify-center font-black border border-white">2</span>
        </div>
      </header>

      {/* Hero */}
      <div className="px-4 py-4">
        <div className="relative h-44 w-full overflow-hidden rounded-3xl">
          <img src={config.heroImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent"></div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star size={9} className="fill-pink-500 text-pink-500" />
            <span className="text-[9px] font-black text-pink-900">4.9</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-lg font-black leading-tight">{config.heroSubtitle}</h2>
            <p className="text-[9px] font-bold mt-0.5 opacity-90 uppercase tracking-widest">Feito com carinho</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['Bolos', 'Doces Finos', 'Brigadeiros', 'Tortas', 'Especiais'].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black whitespace-nowrap uppercase tracking-wider ${
                i === 0 ? 'bg-pink-500 text-white shadow-md' : 'bg-pink-50 text-pink-500 border border-pink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="px-4 grid grid-cols-2 gap-3 mb-6">
        {products.map((product, i) => (
          <div key={`${product.id}-${i}`} className="bg-pink-50/40 rounded-3xl p-3 border border-pink-50 flex flex-col items-center text-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-2">
              <img src={product.image} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-extrabold text-[11px] text-pink-950 mb-1 leading-tight line-clamp-1">{product.name}</h4>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="font-black text-pink-600 text-[12px] tracking-tighter">{product.price}</span>
              <button className="bg-pink-500 p-1.5 rounded-lg text-white">
                <Plus size={12} strokeWidth={4} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="px-4 mb-5 grid grid-cols-2 gap-2">
        <div className="bg-pink-50/50 rounded-xl p-2.5 border border-pink-50">
          <MapPin size={12} className="text-pink-500 mb-1" />
          <p className="text-[9px] font-black leading-tight">Centro · 1km</p>
          <p className="text-[8px] text-pink-400 font-bold uppercase tracking-widest mt-0.5">Ver mapa</p>
        </div>
        <div className="bg-pink-50/50 rounded-xl p-2.5 border border-pink-50">
          <Clock size={12} className="text-pink-500 mb-1" />
          <p className="text-[9px] font-black leading-tight">9h às 19h</p>
          <p className="text-[8px] text-pink-400 font-bold uppercase tracking-widest mt-0.5">Seg a Sáb</p>
        </div>
      </div>

      {/* Review */}
      <div className="px-4 mb-5">
        <div className="bg-pink-50/40 rounded-2xl p-3 border border-pink-50">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-black text-[10px]">A</div>
            <div className="flex-1">
              <p className="text-[10px] font-black leading-none">Ana V.</p>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={8} className="fill-pink-400 text-pink-400" />)}
              </div>
            </div>
            <BadgeCheck size={12} className="text-emerald-500" />
          </div>
          <p className="text-[10px] text-pink-800/80 font-medium leading-snug">"Doces lindos e saborosos. Encomendei pra festa e amaram."</p>
        </div>
      </div>

      {/* Social */}
      <div className="px-4 mb-5 flex items-center justify-center gap-3">
        <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
          <Instagram size={14} />
        </div>
        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white">
          <MessageCircle size={14} fill="currentColor" />
        </div>
        <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
          <Phone size={14} />
        </div>
      </div>

      {/* CTA */}
      <div className="px-4">
        <button className="w-full bg-pink-500 text-white font-black py-4 rounded-xl flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest shadow-lg">
          {config.ctaText} <Sparkles size={14} />
        </button>
      </div>
    </div>
  );
};
