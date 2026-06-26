import React from 'react';
import { Sparkles, Heart, Calendar, Star } from 'lucide-react';

export const NailsPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-rose-50 to-pink-50 h-full overflow-y-auto overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 p-6 text-center text-white">
        <div className="text-5xl mb-3">💅</div>
        <h1 className="text-3xl font-black mb-1">NAIL STUDIO</h1>
        <p className="text-rose-100 text-sm">Arte nas unhas</p>
      </div>

      {/* Serviços Principais */}
      <div className="p-5 space-y-4">
        {[
          { nome: 'Manicure Completa', desc: 'Cutilagem + esmaltação + hidratação', preco: 45, img: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=400&h=300&fit=crop', icon: '💅' },
          { nome: 'Pedicure Spa', desc: 'Esfoliação + massagem + esmaltação', preco: 55, img: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=400&h=300&fit=crop', icon: '🦶' },
          { nome: 'Alongamento em Gel', desc: 'Unhas de fibra + esmaltação em gel', preco: 120, img: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=300&fit=crop', icon: '✨', popular: true },
          { nome: 'Nail Art Premium', desc: 'Desenhos personalizados + pedrarias', preco: 80, img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&h=300&fit=crop', icon: '🎨' },
        ].map((serv, i) => (
          <div key={i} className={`bg-white rounded-3xl overflow-hidden shadow-lg ${serv.popular ? 'border-2 border-rose-500' : ''}`}>
            <div className="flex gap-0">
              <div className="relative w-28 h-28 flex-shrink-0">
                <img src={serv.img} className="w-full h-full object-cover" />
                {serv.popular && (
                  <div className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-black px-2 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
              </div>
              <div className="flex-1 p-3">
                <div className="text-2xl mb-1">{serv.icon}</div>
                <h3 className="text-rose-900 font-black text-sm mb-1">{serv.nome}</h3>
                <p className="text-rose-700 text-xs mb-3">{serv.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-600 text-xl font-black">R$ {serv.preco}</span>
                  <button className="bg-rose-500 text-white px-4 py-2 rounded-xl font-bold text-xs active:scale-95 transition-all">
                    AGENDAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Galeria de Estilos */}
      <div className="px-5 py-6 bg-gradient-to-br from-rose-100 to-pink-100">
        <h2 className="text-rose-900 text-lg font-black mb-4 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" strokeWidth={2} />
          ESTILOS DISPONÍVEIS
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {[
            { style: 'Francesa', cor: 'from-white to-pink-100' },
            { style: 'Nude', cor: 'from-amber-100 to-rose-100' },
            { style: 'Vermelho', cor: 'from-red-400 to-red-600' },
            { style: 'Glitter', cor: 'from-purple-300 to-pink-400' },
            { style: 'Degradê', cor: 'from-blue-300 to-purple-400' },
            { style: 'Pedrarias', cor: 'from-pink-200 to-rose-300' },
          ].map((est, i) => (
            <div key={i} className="bg-white rounded-2xl p-3 text-center shadow-md">
              <div className={`w-full h-20 rounded-xl mb-2 bg-gradient-to-br ${est.cor}`} />
              <p className="text-xs font-bold text-rose-900">{est.style}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pacotes */}
      <div className="px-5 py-6">
        <h2 className="text-rose-900 text-lg font-black mb-4">PACOTES MENSAIS</h2>
        <div className="space-y-3">
          {[
            { nome: 'Pacote Básico', servicos: '4 manicures', preco: 150, economia: 30 },
            { nome: 'Pacote Premium', servicos: '4 manicures + 4 pedicures', preco: 350, economia: 100 },
          ].map((pac, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-rose-900 font-black">{pac.nome}</h3>
                  <p className="text-rose-700 text-sm">{pac.servicos}</p>
                </div>
                <Heart className="w-8 h-8 text-rose-500" fill="#F43F5E" strokeWidth={0} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-rose-600 text-xs">Economize R$ {pac.economia}</p>
                  <p className="text-rose-600 text-2xl font-black">R$ {pac.preco}/mês</p>
                </div>
                <button className="bg-rose-500 text-white px-5 py-2 rounded-xl font-bold">
                  ASSINAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 pb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center shadow">
            <Star className="w-6 h-6 text-rose-500 mx-auto mb-1" fill="#F43F5E" strokeWidth={0} />
            <p className="text-rose-900 font-black">5.0</p>
            <p className="text-rose-700 text-[10px]">Rating</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow">
            <Sparkles className="w-6 h-6 text-rose-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-rose-900 font-black">2K+</p>
            <p className="text-rose-700 text-[10px]">Clientes</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow">
            <Heart className="w-6 h-6 text-rose-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-rose-900 font-black">5 anos</p>
            <p className="text-rose-700 text-[10px]">Mercado</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-rose-200 p-4">
        <button className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white font-black py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Calendar className="w-6 h-6" />
          AGENDAR HORÁRIO
        </button>
      </div>
    </div>
  );
};
