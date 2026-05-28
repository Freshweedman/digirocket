import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { ShoppingBag, Menu } from 'lucide-react';

interface FashionAppProps {
  config: AppConfig;
}

export const FashionApp: React.FC<FashionAppProps> = ({ config }) => {
  return (
    <div className="bg-white min-h-full text-slate-900 pb-10 font-sans">
      {/* Editorial Navbar */}
      <div className="px-4 py-4 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-50">
        <Menu size={18} className="text-slate-400" />
        <h2 className="font-serif text-lg font-black tracking-[0.2em] uppercase">{config.heroTitle}</h2>
        <div className="relative">
          <ShoppingBag size={18} />
          <span className="absolute -top-1 -right-1 bg-black text-white text-[7px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-black">2</span>
        </div>
      </div>

      {/* Clean Hero */}
      <div className="px-4 py-4">
        <div className="relative w-full h-[280px] rounded-3xl overflow-hidden group shadow-lg">
          <img src={config.heroImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-[8px] tracking-[0.3em] uppercase font-black mb-1.5 opacity-80">Nova Coleção</p>
            <h3 className="text-2xl font-serif mb-4 italic leading-tight">{config.heroSubtitle}</h3>
            <button className="bg-white text-black text-[9px] font-black py-2.5 px-5 rounded-full uppercase tracking-widest shadow-lg">
              VER MAIS
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-6 px-4 overflow-x-auto no-scrollbar mb-6 pb-2">
        {['Verão', 'Best Sellers', 'Novidades'].map((cat, i) => (
          <span key={i} className={`text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${i === 2 ? 'text-slate-900 border-b border-slate-900 pb-1' : 'text-slate-300'}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-4">
        {config.products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-2xl mb-2 aspect-[3/4] bg-slate-50">
              <img src={product.image} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-serif text-sm font-bold text-slate-900 leading-tight">{product.name}</h4>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Inline CTA */}
      <div className="px-4 py-6">
        <button className="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg text-[9px] uppercase tracking-[0.2em]">
          {config.ctaText}
        </button>
      </div>
    </div>
  );
};