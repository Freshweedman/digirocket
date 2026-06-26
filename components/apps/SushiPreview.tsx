import React from 'react';
import { Star, Award, ChevronRight } from 'lucide-react';

export const SushiPreview: React.FC = () => {
  return (
    <div className="bg-zinc-900 h-full w-full overflow-y-auto overflow-x-hidden">
      {/* Header Premium Dark */}
      <div className="relative bg-black px-4 py-6 border-b border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-white text-2xl font-light tracking-wider">SAKURA</h1>
            <p className="text-zinc-400 text-xs font-light">Culinária Japonesa Autêntica</p>
          </div>
          <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-yellow-500" fill="#EAB308" strokeWidth={0} />
            <span className="text-white text-xs font-bold">4.9</span>
          </div>
        </div>
      </div>

      {/* Banner Minimalista com Imagem Grande */}
      <div className="relative h-44 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Award className="w-4 h-4 text-white" strokeWidth={2} />
            <span className="text-white text-xs font-bold">Chef Recomenda</span>
          </div>
        </div>
      </div>

      {/* Menu por Categorias - Horizontal Scroll */}
      <div className="px-4 py-5 border-b border-zinc-800">
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
          {['Sashimi', 'Uramaki', 'Temaki', 'Hot Roll', 'Combos', 'Especiais'].map((cat, idx) => (
            <button 
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                idx === 0 
                  ? 'bg-red-600 text-white' 
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Produtos Premium - Cards Horizontais */}
      <div className="px-4 py-6 space-y-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white text-base font-light tracking-wide">SASHIMI PREMIUM</h2>
          <ChevronRight className="w-5 h-5 text-zinc-600" strokeWidth={1.5} />
        </div>

        {[
          { 
            name: 'Sashimi de Salmão', 
            desc: '12 fatias de salmão norueguês', 
            price: 68.90, 
            img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop',
            badge: 'Premium'
          },
          { 
            name: 'Combinado Especial', 
            desc: '30 peças variadas do chef', 
            price: 98.90, 
            img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
            badge: null
          },
          { 
            name: 'Hot Roll Filadélfia', 
            desc: 'Salmão, cream cheese empanado', 
            price: 48.90, 
            img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop',
            badge: 'Popular'
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700/50 backdrop-blur-sm active:scale-[0.98] transition-all cursor-pointer">
            <div className="flex gap-0">
              <div className="relative w-28 h-28 flex-shrink-0">
                <img src={item.img} className="w-full h-full object-cover" />
                {item.badge && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-medium text-sm mb-1">{item.name}</h3>
                  <p className="text-zinc-500 text-xs leading-tight">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white text-lg font-bold">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                  <button className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center active:scale-90 transition-all">
                    <span className="text-xl font-light">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seção Especial - Rodízio */}
      <div className="mx-4 mb-6 bg-gradient-to-br from-red-900/40 to-zinc-900/40 rounded-2xl p-5 border border-red-700/30 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1">Experiência Completa</p>
            <h3 className="text-white text-xl font-bold mb-1">Rodízio Premium</h3>
            <p className="text-zinc-400 text-xs">Sequência do chef • Ilimitado</p>
          </div>
          <Award className="w-10 h-10 text-red-500" strokeWidth={1.5} />
        </div>
        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-zinc-500 text-xs line-through">R$ 129,90</p>
            <p className="text-white text-2xl font-black">R$ 89,90</p>
          </div>
          <button className="bg-red-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm active:scale-95 transition-all">
            RESERVAR
          </button>
        </div>
      </div>

      {/* Informações Premium */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-zinc-800/30 rounded-xl p-3 text-center border border-zinc-700/50">
            <p className="text-white text-lg font-bold">35-45</p>
            <p className="text-zinc-500 text-[10px] uppercase">minutos</p>
          </div>
          <div className="bg-zinc-800/30 rounded-xl p-3 text-center border border-zinc-700/50">
            <p className="text-white text-lg font-bold">4.9★</p>
            <p className="text-zinc-500 text-[10px] uppercase">avaliação</p>
          </div>
          <div className="bg-zinc-800/30 rounded-xl p-3 text-center border border-zinc-700/50">
            <p className="text-white text-lg font-bold">4.2km</p>
            <p className="text-zinc-500 text-[10px] uppercase">distância</p>
          </div>
        </div>
      </div>

      {/* CTA Minimalista */}
      <div className="sticky bottom-0 bg-black/95 backdrop-blur-xl border-t border-zinc-800 p-4">
        <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          FAZER PEDIDO
        </button>
      </div>
    </div>
  );
};
