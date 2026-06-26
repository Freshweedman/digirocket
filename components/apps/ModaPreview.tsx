import React from 'react';
import { Heart, ShoppingBag, Star, TrendingUp, Truck, Shield } from 'lucide-react';

export const ModaPreview: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden" style={{ minHeight: 844 }}>
      {/* Header Clean e Minimalista */}
      <div className="relative bg-black text-white p-5 text-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=300&fit=crop" 
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        <div className="relative z-10">
          <h1 className="text-2xl font-light tracking-[0.3em] mb-1">FASHION</h1>
          <p className="text-[10px] tracking-[0.2em] text-gray-300 uppercase">Moda Feminina</p>
          <div className="mt-3 flex items-center justify-center gap-4 text-[10px]">
            <div className="flex items-center gap-1">
              <Truck className="w-3 h-3" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Troca Fácil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Promoção */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center py-3 px-4">
        <p className="text-xs font-black uppercase tracking-wide">🎉 Até 40% OFF em produtos selecionados</p>
      </div>

      {/* Grid de Produtos */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-black uppercase tracking-wider">Novidades</h2>
          <button className="text-xs text-rose-500 font-bold">Ver Tudo →</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Vestido Midi Elegante', price: '189,90', oldPrice: '289,90', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop&q=80', sale: true },
            { name: 'Conjunto Social Chic', price: '249,90', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop&q=80' },
            { name: 'Blusa Soltinha Verão', price: '89,90', oldPrice: '129,90', img: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=600&fit=crop&q=80', sale: true },
            { name: 'Saia Longa Premium', price: '169,90', img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=600&fit=crop&q=80', favorite: true },
            { name: 'Macacão Festa', price: '279,90', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop&q=80' },
            { name: 'Vestido Floral Boho', price: '159,90', oldPrice: '229,90', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop&q=80', sale: true },
          ].map((produto, i) => (
            <div key={i} className="relative group">
              {/* Imagem */}
              <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-2">
                <img 
                  src={produto.img} 
                  alt={produto.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                
                {/* Badges */}
                {produto.sale && (
                  <div className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-black px-2 py-1 rounded-full">
                    PROMOÇÃO
                  </div>
                )}
                
                {/* Botão Favorito */}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <Heart className={`w-4 h-4 ${produto.favorite ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}`} strokeWidth={2} />
                </button>

                {/* Quick Add */}
                <button className="absolute bottom-2 left-2 right-2 bg-black text-white text-[10px] font-black py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                  <ShoppingBag className="w-3 h-3" />
                  COMPRAR
                </button>
              </div>

              {/* Info Produto */}
              <div className="px-1">
                <h3 className="text-xs font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">{produto.name}</h3>
                <div className="flex items-center gap-2 mb-1">
                  {produto.oldPrice && (
                    <span className="text-[10px] text-gray-400 line-through">R$ {produto.oldPrice}</span>
                  )}
                  <span className="text-sm font-black text-rose-600">R$ {produto.price}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500" fill="#EAB308" strokeWidth={0} />
                  <span className="text-[10px] text-gray-600 font-bold">4.8 (24)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Destaques */}
      <div className="p-3 bg-gray-50">
        <h2 className="text-sm font-black uppercase tracking-wider mb-3 text-center">Por que comprar conosco?</h2>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white rounded-xl p-3">
            <TrendingUp className="w-6 h-6 text-rose-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-[9px] font-bold text-gray-700">Lançamentos<br/>Semanais</p>
          </div>
          <div className="bg-white rounded-xl p-3">
            <Shield className="w-6 h-6 text-rose-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-[9px] font-bold text-gray-700">Troca Grátis<br/>30 dias</p>
          </div>
          <div className="bg-white rounded-xl p-3">
            <Truck className="w-6 h-6 text-rose-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-[9px] font-bold text-gray-700">Frete Grátis<br/>Sul e Sudeste</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-white border-t border-gray-200 px-3 py-3 flex items-center gap-2">
        <button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 rounded-lg text-xs transition-all">
          VER CATÁLOGO COMPLETO
        </button>
        <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center relative">
          <ShoppingBag className="w-4 h-4 text-gray-900" strokeWidth={2} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[8px] font-black rounded-full flex items-center justify-center">
            0
          </div>
        </button>
      </div>
    </div>
  );
};
