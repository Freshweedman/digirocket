import React from 'react';
import { Leaf, Droplet, Heart, Star, Package } from 'lucide-react';

export const SpaPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-900 to-emerald-900 h-full overflow-y-auto text-white overflow-x-hidden">
      {/* Hero Zen */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Leaf className="w-16 h-16 mx-auto mb-4 text-green-300" strokeWidth={1} />
            <h1 className="text-5xl font-light mb-2 tracking-wider">SERENITY</h1>
            <p className="text-green-200 text-sm tracking-widest">SPA & WELLNESS</p>
          </div>
        </div>
      </div>

      {/* Massagens Premium */}
      <div className="p-6 space-y-4">
        {[
          { nome: 'Massagem Relaxante', tempo: '60 minutos', preco: 180, desc: 'Técnicas suecas com óleos essenciais', icon: '🌿' },
          { nome: 'Day Spa Completo', tempo: '4 horas', preco: 450, desc: 'Massagem + facial + esfoliação + aromaterapia', icon: '✨', popular: true },
          { nome: 'Aromaterapia', tempo: '90 minutos', preco: 220, desc: 'Massagem terapêutica com óleos especiais', icon: '🌸' },
          { nome: 'Pedras Quentes', tempo: '75 minutos', preco: 250, desc: 'Terapia com pedras vulcânicas', icon: '🔥' },
        ].map((mass, i) => (
          <div key={i} className={`bg-green-800/50 backdrop-blur rounded-3xl p-6 ${mass.popular ? 'border-2 border-green-400' : ''}`}>
            {mass.popular && (
              <div className="inline-block bg-green-400 text-green-900 text-xs font-black px-3 py-1 rounded-full mb-3">
                MAIS PROCURADO
              </div>
            )}
            <div className="flex items-start gap-4">
              <div className="text-4xl">{mass.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-light mb-1">{mass.nome}</h3>
                <p className="text-green-300 text-sm mb-2">{mass.desc}</p>
                <div className="flex items-center gap-2 text-xs text-green-400 mb-4">
                  <Droplet className="w-4 h-4" strokeWidth={1.5} />
                  <span>{mass.tempo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-light">R$ {mass.preco}</span>
                  <button className="bg-white text-green-900 px-6 py-3 rounded-full font-bold active:scale-95 transition-all">
                    RESERVAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pacotes */}
      <div className="px-6 py-6 bg-green-950/50">
        <h2 className="text-2xl font-light text-center mb-6">PACOTES WELLNESS</h2>
        <div className="space-y-3">
          {[
            { nome: 'Pacote Mensal', sessoes: '4 massagens', preco: 600, economia: 120 },
            { nome: 'Pacote Trimestral', sessoes: '12 massagens', preco: 1600, economia: 560 },
          ].map((pac, i) => (
            <div key={i} className="bg-green-800/30 backdrop-blur border border-green-700 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-light mb-1">{pac.nome}</h3>
                  <p className="text-green-300 text-sm">{pac.sessoes}</p>
                </div>
                <Package className="w-10 h-10 text-green-400" strokeWidth={1.5} />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-green-400 text-xs">Economia de R$ {pac.economia}</p>
                  <p className="text-3xl font-light">R$ {pac.preco}</p>
                </div>
                <button className="bg-green-600 text-white px-5 py-2 rounded-full font-bold text-sm">
                  ADQUIRIR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambiente */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-light text-center mb-4">NOSSO ESPAÇO</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { feat: 'Salas Privativas', icon: '🚪' },
            { feat: 'Música Ambiente', icon: '🎵' },
            { feat: 'Aromatização', icon: '🌺' },
            { feat: 'Chá Incluso', icon: '🍵' },
          ].map((f, i) => (
            <div key={i} className="bg-green-800/30 rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="text-sm font-light">{f.feat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-green-800/50 rounded-xl p-3 text-center">
            <Star className="w-6 h-6 text-green-300 mx-auto mb-1" fill="#86EFAC" strokeWidth={0} />
            <p className="font-light">4.9★</p>
          </div>
          <div className="bg-green-800/50 rounded-xl p-3 text-center">
            <Heart className="w-6 h-6 text-green-300 mx-auto mb-1" strokeWidth={1.5} />
            <p className="font-light">3K+ clientes</p>
          </div>
          <div className="bg-green-800/50 rounded-xl p-3 text-center">
            <Leaf className="w-6 h-6 text-green-300 mx-auto mb-1" strokeWidth={1.5} />
            <p className="font-light">12 anos</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 bg-green-950/95 backdrop-blur border-t border-green-800 p-4">
        <button className="w-full bg-white text-green-900 py-5 rounded-full font-bold text-lg active:scale-95 transition-all">
          RESERVAR EXPERIÊNCIA
        </button>
      </div>
    </div>
  );
};
