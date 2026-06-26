import React from 'react';
import { Sparkles, Calendar, Clock, Heart, Star } from 'lucide-react';

export const SalaoPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-purple-50 h-full overflow-y-auto overflow-x-hidden">
      {/* Header Feminino Elegante */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 p-8 text-center text-white">
        <Sparkles className="w-14 h-14 mx-auto mb-3" strokeWidth={1.5} />
        <h1 className="text-4xl font-black mb-1">GLAMOUR</h1>
        <p className="text-pink-100 text-sm font-medium tracking-wider">STUDIO DE BELEZA</p>
      </div>

      {/* Banner Promo */}
      <div className="relative -mt-6 px-4">
        <div className="bg-white rounded-3xl p-4 shadow-2xl border-2 border-pink-200">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" fill="white" strokeWidth={0} />
            </div>
            <div className="flex-1">
              <p className="text-pink-900 text-xs font-bold uppercase">Pacote Especial</p>
              <p className="text-pink-900 text-lg font-black">3 Serviços = 20% OFF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Serviços em Cards */}
      <div className="p-4 space-y-3 mt-6">
        {[
          { name: 'Corte Feminino', desc: 'Lavagem + corte + escova', price: 85, icon: '💇‍♀️', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop' },
          { name: 'Hidratação Profunda', desc: 'Tratamento intensivo + selagem', price: 120, icon: '✨', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop' },
          { name: 'Esmaltação em Gel', desc: 'Mãos ou pés • Duração 20 dias', price: 65, icon: '💅', img: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=400&h=300&fit=crop' },
          { name: 'Maquiagem Profissional', desc: 'Make completa para eventos', price: 150, icon: '💄', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop' },
        ].map((serv, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="flex gap-0">
              <img src={serv.img} className="w-32 h-32 object-cover flex-shrink-0" />
              <div className="flex-1 p-4">
                <div className="text-3xl mb-2">{serv.icon}</div>
                <h3 className="text-pink-900 font-black text-base mb-1">{serv.name}</h3>
                <p className="text-pink-700 text-xs mb-3">{serv.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-600 text-xl font-black">R$ {serv.price}</span>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-xl font-bold text-xs active:scale-95 transition-all">
                    AGENDAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pacotes */}
      <div className="px-4 py-6 bg-gradient-to-br from-pink-100 to-purple-100">
        <h2 className="text-pink-900 text-lg font-black mb-4 text-center">💝 PACOTES EXCLUSIVOS</h2>
        <div className="space-y-3">
          {[
            { name: 'Dia de Noiva', preco: 450, itens: 'Make + cabelo + unhas + skin prep' },
            { name: 'Renovação Total', preco: 380, itens: 'Corte + cor + hidratação + escova' },
          ].map((pac, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-md">
              <h3 className="text-pink-900 font-black text-lg mb-2">{pac.name}</h3>
              <p className="text-pink-700 text-sm mb-3">{pac.itens}</p>
              <div className="flex items-center justify-between">
                <span className="text-pink-600 text-2xl font-black">R$ {pac.preco}</span>
                <button className="bg-pink-500 text-white px-5 py-2 rounded-xl font-bold active:scale-95 transition-all">
                  RESERVAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-3 text-center shadow">
            <Star className="w-6 h-6 text-pink-500 mx-auto mb-1" fill="#EC4899" strokeWidth={0} />
            <p className="text-pink-900 font-black">5.0</p>
            <p className="text-pink-700 text-[10px]">Rating</p>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow">
            <Clock className="w-6 h-6 text-pink-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-pink-900 font-black text-xs">Ter-Sáb</p>
            <p className="text-pink-700 text-[10px]">9h-19h</p>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow">
            <Calendar className="w-6 h-6 text-pink-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-pink-900 font-black text-xs">Online</p>
            <p className="text-pink-700 text-[10px]">Agenda</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-pink-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <button className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-pink-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Calendar className="w-6 h-6" />
          AGENDAR HORÁRIO
        </button>
      </div>
    </div>
  );
};
