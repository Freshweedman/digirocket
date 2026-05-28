import React from 'react';
import { ShoppingCart, Plus, Star, ChevronRight } from 'lucide-react';

export const BurgerApp: React.FC = () => {
  return (
    <div className="bg-[#121212] min-h-full text-white pb-10 font-sans">
      {/* Header Image */}
      <div className="relative h-44 w-full">
        <img
          src="https://picsum.photos/seed/burger/400/400"
          alt="Monster Burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="bg-yellow-400 text-black text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Aberto Agora</span>
          <h2 className="text-2xl font-black mt-1 leading-none">Monster Burger</h2>
        </div>
      </div>

      <div className="px-4 mt-2 flex items-center gap-2 text-[10px] text-gray-400">
        <div className="flex items-center gap-1">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white font-bold">4.8</span>
        </div>
        <span>•</span>
        <span>Artesanal</span>
        <span>•</span>
        <span>1.2km</span>
      </div>

      {/* Categories */}
      <div className="flex gap-2 px-4 mt-6 overflow-x-auto no-scrollbar pb-1">
        {['Combos', 'Burger', 'Bebidas'].map((cat, i) => (
          <button key={i} className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap ${i === 1 ? 'bg-white text-black' : 'bg-[#222] text-gray-400 border border-gray-800'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Menu List */}
      <div className="px-4 mt-4 space-y-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-3 bg-[#1e1e1e] p-3 rounded-xl border border-gray-800">
            <img src={`https://picsum.photos/seed/burger${item}/100/100`} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-bold text-sm">X-Bacon Supremo</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-black text-sm text-yellow-400">R$ 32,90</span>
                <button className="bg-brand-green text-black p-1 rounded-lg">
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CTA */}
      <div className="px-4 py-6">
        <button className="w-full bg-brand-green text-black font-black py-4 rounded-xl flex justify-between items-center px-6 text-[10px] uppercase tracking-widest shadow-lg shadow-green-900/20">
          <div className="flex items-center gap-2">
            <ShoppingCart size={14} />
            <span>Ver Sacola</span>
          </div>
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};