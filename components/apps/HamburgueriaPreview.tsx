import React from 'react';
import { ShoppingCart, Star, Flame, Clock } from 'lucide-react';

export const HamburgueriaPreview: React.FC = () => {
  return (
    <div className="bg-zinc-950 w-full overflow-x-hidden" style={{ minHeight: 844 }}>
      {/* Banner Dark Agressivo */}
      <div className="relative h-56 bg-gradient-to-br from-red-900 to-orange-600">
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop" 
          alt=""
          className="w-full h-full object-cover mix-blend-overlay opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full inline-block mb-2">
            🔥 PROMO RELÂMPAGO
          </div>
          <h1 className="text-white text-3xl font-black mb-2">2 MONSTER<br/>BURGERS</h1>
          <p className="text-yellow-400 text-2xl font-black">R$ 39,90</p>
        </div>
        <button className="absolute top-4 right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
          <ShoppingCart className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* Combos Grandes */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-black">🍔 COMBOS GIGANTES</h2>
          <div className="text-yellow-400 text-sm font-bold">VER TODOS →</div>
        </div>

        {/* Combo Cards Horizontais */}
        <div className="space-y-3">
          <div className="bg-zinc-900 rounded-2xl p-4 border-2 border-red-600">
            <div className="flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop"
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded mb-1 inline-block">
                  MAIS VENDIDO
                </div>
                <h3 className="text-white font-black text-base mb-1">COMBO MONSTER</h3>
                <p className="text-gray-400 text-xs mb-2">Duplo smash + fritas + refri</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-xl font-black">R$ 32,90</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
                    PEDIR
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-4">
            <div className="flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop"
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="text-white font-black text-base mb-1">BACON LOVERS</h3>
                <p className="text-gray-400 text-xs mb-2">Triplo bacon + onion rings</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-xl font-black">R$ 36,90</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
                    PEDIR
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-4">
            <div className="flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1562059390-a761a084768e?w=300&h=300&fit=crop"
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="text-white font-black text-base mb-1">CHICKEN CRISPY</h3>
                <p className="text-gray-400 text-xs mb-2">Frango + molho especial</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-xl font-black">R$ 28,90</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
                    PEDIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cupom Destacado */}
        <div className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 text-center">
          <Flame className="w-8 h-8 text-red-900 mx-auto mb-2" />
          <p className="text-red-900 font-black text-lg mb-1">USE O CUPOM</p>
          <p className="text-red-900 font-black text-2xl mb-2">MONSTER20</p>
          <p className="text-red-800 text-xs font-bold">20% OFF na primeira compra</p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="bg-zinc-900 rounded-xl p-3 text-center">
            <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" fill="#FACC15" strokeWidth={0} />
            <p className="text-white font-black text-lg">4.9</p>
            <p className="text-gray-400 text-[10px]">Avaliação</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 text-center">
            <Clock className="w-5 h-5 text-green-400 mx-auto mb-1" strokeWidth={2} />
            <p className="text-white font-black text-lg">25min</p>
            <p className="text-gray-400 text-[10px]">Entrega</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 text-center">
            <Flame className="w-5 h-5 text-red-400 mx-auto mb-1" strokeWidth={2} />
            <p className="text-white font-black text-lg">10K+</p>
            <p className="text-gray-400 text-[10px]">Pedidos</p>
          </div>
        </div>
      </div>

      {/* Footer CTA Compacto */}
      <div className="bg-zinc-950 border-t border-zinc-800 px-4 py-3">
        <button className="w-full bg-green-600 hover:bg-green-500 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Pedir no WhatsApp
        </button>
      </div>
    </div>
  );
};
