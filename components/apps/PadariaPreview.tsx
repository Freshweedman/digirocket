import React from 'react';
import { Flame, Clock, Heart } from 'lucide-react';

export const PadariaPreview: React.FC = () => {
  return (
    <div className="bg-amber-50 h-full w-full overflow-y-auto overflow-x-hidden">
      {/* Header Artesanal Warm */}
      <div className="bg-gradient-to-br from-amber-700 to-orange-600 px-4 py-5">
        <div className="text-center">
          <Flame className="w-12 h-12 text-amber-100 mx-auto mb-2" strokeWidth={1.5} />
          <h1 className="text-white text-3xl font-black">Pão Dourado</h1>
          <p className="text-amber-100 text-sm font-medium">Padaria Artesanal</p>
        </div>
      </div>

      {/* Badge Saindo do Forno */}
      <div className="relative -mt-6 px-4">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-4 shadow-2xl flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
            <Flame className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <p className="text-white text-xs font-bold uppercase tracking-wide">Acabou de Sair</p>
            <p className="text-white text-xl font-black">DO FORNO!</p>
          </div>
          <Clock className="w-8 h-8 text-white/80" strokeWidth={1.5} />
        </div>
      </div>

      {/* Pães do Dia */}
      <div className="px-4 py-6">
        <h2 className="text-amber-900 text-lg font-black mb-4 flex items-center gap-2">
          <span className="text-2xl">🍞</span>
          PÃES DO DIA
        </h2>
        
        <div className="space-y-3">
          {[
            { name: 'Pão Francês', desc: 'Crocante e quentinho', price: 0.65, emoji: '🥖' },
            { name: 'Croissant Folhado', desc: 'Manteiga francesa', price: 8.90, emoji: '🥐' },
            { name: 'Baguete Integral', desc: 'Massa madre 24h fermentação', price: 12.90, emoji: '🥖' },
            { name: 'Pão de Queijo Mineiro', desc: 'Tradicional • 6 unidades', price: 15.90, emoji: '🧀' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-md border-2 border-amber-200 active:scale-[0.98] transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-3xl">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-amber-900 font-black text-base mb-0.5">{item.name}</h3>
                  <p className="text-amber-700 text-xs mb-2">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 text-xl font-black">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-xl font-bold text-sm active:scale-95 transition-all">
                      PEDIR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Café da Manhã Combo */}
      <div className="mx-4 mb-6 bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl p-5 shadow-xl">
        <div className="text-center mb-3">
          <p className="text-amber-100 text-xs font-bold uppercase tracking-wider">Combo Especial</p>
          <h3 className="text-white text-2xl font-black mb-1">CAFÉ DA MANHÃ</h3>
          <p className="text-amber-100 text-sm">Café + 2 Pães Frescos + Manteiga</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-amber-200 text-xs line-through">R$ 18,90</p>
            <p className="text-white text-3xl font-black">R$ 12,90</p>
          </div>
          <button className="bg-white text-amber-700 px-6 py-3 rounded-2xl font-black text-sm shadow-lg active:scale-95 transition-all">
            QUERO!
          </button>
        </div>
      </div>

      {/* Vitrine de Destaques */}
      <div className="px-4 pb-6">
        <h2 className="text-amber-900 text-lg font-black mb-4">🎂 Bolos e Doces</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Bolo Caseiro', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop' },
            { name: 'Sonho Recheado', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop' },
            { name: 'Torta Holandesa', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop' },
            { name: 'Brigadeiro', img: 'https://images.unsplash.com/photo-1606312619070-d48b4cbc5b52?w=300&h=300&fit=crop' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-amber-200 active:scale-95 transition-all cursor-pointer">
              <img src={item.img} className="w-full aspect-square object-cover" />
              <div className="p-2.5 text-center">
                <p className="text-amber-900 font-bold text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informações Artesanais */}
      <div className="px-4 pb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <Heart className="w-6 h-6 text-red-500 mx-auto mb-1" fill="#EF4444" strokeWidth={0} />
              <p className="text-amber-900 font-black text-sm">Artesanal</p>
            </div>
            <div className="text-center">
              <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" strokeWidth={2} />
              <p className="text-amber-900 font-black text-sm">15 min</p>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-amber-600 mx-auto mb-1" strokeWidth={2} />
              <p className="text-amber-900 font-black text-sm">6h-20h</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-amber-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-black py-5 rounded-2xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          FAZER PEDIDO
        </button>
      </div>
    </div>
  );
};
