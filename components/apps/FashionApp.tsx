import React from 'react';
import { AppConfig } from '../../data/nicheData';
import {
  ShoppingBag, Menu, Heart, Star, Truck, ShieldCheck, Instagram, MessageCircle, BadgeCheck,
} from 'lucide-react';

interface FashionAppProps {
  config: AppConfig;
}

export const FashionApp: React.FC<FashionAppProps> = ({ config }) => {
  const products = config.products.length >= 4
    ? config.products
    : [...config.products, ...config.products].slice(0, 4);

  return (
    <div className="bg-white min-h-full text-slate-900 pb-6 font-sans">
      {/* Editorial Navbar */}
      <div className="px-4 py-4 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-100">
        <Menu size={18} className="text-slate-400" />
        <h2 className="font-display text-base font-black tracking-[0.2em] uppercase">{config.heroTitle}</h2>
        <div className="relative">
          <ShoppingBag size={18} />
          <span className="absolute -top-1 -right-1 bg-black text-white text-[7px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-black">2</span>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 py-4">
        <div className="relative w-full h-[260px] rounded-3xl overflow-hidden group shadow-lg">
          <img src={config.heroImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-3 right-3 bg-white/90 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star size={9} className="fill-yellow-500 text-yellow-500" />
            <span className="text-[9px] font-black text-slate-900">4.9</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-[8px] tracking-[0.3em] uppercase font-black mb-1.5 opacity-90">Nova Coleção</p>
            <h3 className="text-2xl font-display mb-3 italic leading-tight">{config.heroSubtitle}</h3>
            <button className="bg-white text-black text-[9px] font-black py-2.5 px-5 rounded-full uppercase tracking-widest shadow-lg">
              Ver coleção
            </button>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="px-4 mb-4 grid grid-cols-3 gap-2">
        <div className="bg-slate-50 rounded-xl p-2 flex flex-col items-center text-center">
          <Truck size={14} className="text-slate-900 mb-1" />
          <p className="text-[8px] font-black text-slate-900 uppercase tracking-widest leading-tight">Frete grátis</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-2 flex flex-col items-center text-center">
          <ShieldCheck size={14} className="text-slate-900 mb-1" />
          <p className="text-[8px] font-black text-slate-900 uppercase tracking-widest leading-tight">Compra segura</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-2 flex flex-col items-center text-center">
          <BadgeCheck size={14} className="text-slate-900 mb-1" />
          <p className="text-[8px] font-black text-slate-900 uppercase tracking-widest leading-tight">Troca fácil</p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-6 px-4 overflow-x-auto no-scrollbar mb-5 pb-2">
        {['Verão', 'Best Sellers', 'Novidades', 'Sale'].map((cat, i) => (
          <span
            key={cat}
            className={`text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${
              i === 2 ? 'text-slate-900 border-b-2 border-slate-900 pb-1' : 'text-slate-300'
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 px-4 mb-6">
        {products.map((product, i) => (
          <div key={`${product.id}-${i}`} className="group">
            <div className="relative overflow-hidden rounded-2xl mb-2 aspect-[3/4] bg-slate-50">
              <img src={product.image} className="w-full h-full object-cover" />
              <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 flex items-center justify-center text-slate-900">
                <Heart size={12} />
              </button>
              {i === 0 && (
                <span className="absolute top-2 left-2 bg-slate-900 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Novo</span>
              )}
            </div>
            <h4 className="font-display text-sm font-bold text-slate-900 leading-tight line-clamp-1">{product.name}</h4>
            <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Review */}
      <div className="px-4 mb-5">
        <h3 className="font-black text-[11px] uppercase tracking-widest text-slate-700 mb-2">Quem comprou</h3>
        <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-black text-[10px]">B</div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-slate-900 leading-none">Beatriz L.</p>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={8} className="fill-slate-900 text-slate-900" />)}
              </div>
            </div>
            <BadgeCheck size={12} className="text-emerald-500" />
          </div>
          <p className="text-[10px] text-slate-600 font-medium leading-snug">"Tecido top, caimento perfeito. Já é minha loja favorita."</p>
        </div>
      </div>

      {/* Social */}
      <div className="px-4 mb-5 flex items-center justify-center gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white">
          <Instagram size={14} />
        </div>
        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white">
          <MessageCircle size={14} fill="currentColor" />
        </div>
      </div>

      {/* CTA */}
      <div className="px-4">
        <button className="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg text-[9px] uppercase tracking-[0.2em]">
          {config.ctaText}
        </button>
      </div>
    </div>
  );
};
