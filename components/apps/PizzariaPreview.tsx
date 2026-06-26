import React from 'react';
import { Pizza, Flame, ChevronRight } from 'lucide-react';

export const PizzariaPreview: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden" style={{ minHeight: 844 }}>
      {/* Header Clean Domino's Style */}
      <div className="bg-red-700 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-black">Nonna Bella</h1>
            <p className="text-red-200 text-xs font-medium">Pizzaria Napoletana</p>
          </div>
          <Pizza className="w-10 h-10 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Banner Promocional Horizontal */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-red-900 text-[10px] font-black uppercase">Oferta Imperdível</p>
          <p className="text-white text-lg font-black">2 PIZZAS GRANDES</p>
          <p className="text-red-900 text-sm font-bold">a partir de R$ 79,90</p>
        </div>
        <Flame className="w-16 h-16 text-red-900" strokeWidth={2.5} />
      </div>

      {/* Seletor de Tamanho - Grid Circular */}
      <div className="px-4 py-6">
        <h2 className="text-gray-900 text-lg font-black mb-4">Escolha o Tamanho</h2>
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-gray-100 rounded-2xl p-4 text-center border-2 border-transparent hover:border-red-600 active:scale-95 transition-all">
            <div className="w-12 h-12 rounded-full bg-red-100 mx-auto mb-2 flex items-center justify-center">
              <Pizza className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-gray-900 font-black text-xs">PEQUENA</p>
            <p className="text-gray-600 text-[10px]">25cm</p>
          </button>
          <button className="bg-red-600 rounded-2xl p-4 text-center border-2 border-red-700 shadow-lg scale-105">
            <div className="w-12 h-12 rounded-full bg-white mx-auto mb-2 flex items-center justify-center">
              <Pizza className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-white font-black text-xs">MÉDIA</p>
            <p className="text-red-200 text-[10px]">30cm</p>
          </button>
          <button className="bg-gray-100 rounded-2xl p-4 text-center border-2 border-transparent hover:border-red-600 active:scale-95 transition-all">
            <div className="w-12 h-12 rounded-full bg-red-100 mx-auto mb-2 flex items-center justify-center">
              <Pizza className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-gray-900 font-black text-xs">GRANDE</p>
            <p className="text-gray-600 text-[10px]">35cm</p>
          </button>
        </div>
      </div>

      {/* Pizzas em Grid Circular - Estilo Domino's */}
      <div className="px-4 pb-6">
        <h2 className="text-gray-900 text-lg font-black mb-4">Sabores Tradicionais</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Margherita DOP', price: 52.90, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop', hot: true },
            { name: 'Pepperoni Suprema', price: 58.90, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop', hot: false },
            { name: 'Quattro Formaggi', price: 56.90, img: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=400&fit=crop', hot: false },
            { name: 'Portuguesa Premium', price: 54.90, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop', hot: false },
          ].map((pizza, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 active:scale-95 transition-all cursor-pointer">
              <div className="relative">
                <img src={pizza.img} className="w-full aspect-square object-cover" />
                {pizza.hot && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3" strokeWidth={2.5} />
                    TOP
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-gray-900 font-black text-sm mb-1 line-clamp-1">{pizza.name}</h3>
                <p className="text-red-600 text-lg font-black">R$ {pizza.price.toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Meio a Meio - Exclusivo Pizzaria */}
      <div className="bg-red-50 px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900 text-lg font-black">Monte Meio a Meio</h2>
          <ChevronRight className="w-5 h-5 text-red-600" strokeWidth={2.5} />
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-red-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center">
              <span className="text-white text-2xl font-black">½</span>
            </div>
            <div>
              <p className="text-gray-900 font-black text-base">Pizza Meio a Meio</p>
              <p className="text-gray-600 text-xs">Escolha 2 sabores diferentes</p>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white font-black py-3 rounded-xl active:scale-95 transition-all">
            MONTAR MINHA PIZZA
          </button>
        </div>
      </div>

      {/* Bordas Recheadas */}
      <div className="px-4 py-6">
        <h2 className="text-gray-900 text-lg font-black mb-4">Adicione Borda Recheada</h2>
        <div className="space-y-2">
          {[
            { name: 'Catupiry Original', price: 8.90 },
            { name: 'Cheddar Cremoso', price: 8.90 },
            { name: 'Chocolate Branco', price: 9.90 },
          ].map((borda, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-200 active:scale-[0.98] transition-all cursor-pointer">
              <div>
                <p className="text-gray-900 font-bold text-sm">{borda.name}</p>
                <p className="text-red-600 font-black text-sm">+ R$ {borda.price.toFixed(2).replace('.', ',')}</p>
              </div>
              <div className="w-6 h-6 rounded-md border-2 border-gray-300" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-white border-t border-gray-200 p-3">
        <button className="w-full bg-green-600 text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Fazer Pedido
        </button>
      </div>
    </div>
  );
};
