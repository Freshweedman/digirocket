import React from 'react';
import { Heart, Instagram, Sparkles, Gift } from 'lucide-react';

export const DoceriaPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-rose-50 h-full w-full overflow-y-auto overflow-x-hidden">
      {/* Header Instagram Style */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-4 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-black">Doce Encanto</h1>
            <p className="text-pink-100 text-sm font-medium flex items-center gap-1">
              <Instagram className="w-4 h-4" strokeWidth={2} />
              @doceencanto
            </p>
          </div>
          <Heart className="w-10 h-10 text-white" fill="white" strokeWidth={2} />
        </div>
      </div>

      {/* Galeria Instagram Grid - FOCO VISUAL */}
      <div className="px-2 py-6">
        <div className="grid grid-cols-2 gap-2">
          {[
            'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1606312619070-d48b4cbc5b52?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop',
          ].map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg active:scale-95 transition-all cursor-pointer">
              <img src={img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <Heart className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-white text-xs font-bold bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                  R$ {(12.90 + idx * 5).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bolos Grandes Destaque */}
      <div className="px-4 py-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-pink-900 text-lg font-black flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-500" strokeWidth={2} />
            BOLOS ESPECIAIS
          </h2>
          <div className="text-pink-600 text-sm font-bold">VER TODOS →</div>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Red Velvet Luxo', desc: 'Cobertura cream cheese • Serve 12 fatias', price: 89.90, img: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=400&fit=crop' },
            { name: 'Chocolate Belga', desc: 'Recheio trufa • Decoração premium', price: 95.90, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
          ].map((bolo, idx) => (
            <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-4 shadow-md border-2 border-pink-200 active:scale-[0.98] transition-all cursor-pointer">
              <div className="flex gap-4">
                <img src={bolo.img} className="w-28 h-28 rounded-2xl object-cover shadow-lg" />
                <div className="flex-1">
                  <h3 className="text-pink-900 font-black text-base mb-1">{bolo.name}</h3>
                  <p className="text-pink-700 text-xs mb-3">{bolo.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-pink-600 text-xl font-black">R$ {bolo.price.toFixed(2).replace('.', ',')}</span>
                    <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all">
                      ENCOMENDAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kits Festa */}
      <div className="px-4 py-6 bg-gradient-to-br from-pink-100 to-rose-100">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="w-6 h-6 text-pink-600" strokeWidth={2} />
          <h2 className="text-pink-900 text-lg font-black">KITS FESTA</h2>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Kit Festa 50 Doces', price: 99.90, items: 'Brigadeiros, beijinhos, cajuzinhos' },
            { name: 'Kit Aniversário Completo', price: 189.90, items: 'Bolo + 100 doces + decoração' },
            { name: 'Kit Premium 200 Doces', price: 349.90, items: 'Mix gourmet variados' },
          ].map((kit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-md border-2 border-pink-300 active:scale-[0.98] transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-pink-900 font-black text-sm">{kit.name}</h3>
                <span className="text-pink-600 text-lg font-black">R$ {kit.price.toFixed(2).replace('.', ',')}</span>
              </div>
              <p className="text-pink-700 text-xs mb-2">{kit.items}</p>
              <button className="w-full bg-pink-500 text-white font-bold py-2 rounded-xl active:scale-95 transition-all">
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-4 py-6 bg-white">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-pink-50 rounded-2xl p-3 border border-pink-200">
            <p className="text-pink-600 text-2xl font-black">2.5K+</p>
            <p className="text-pink-700 text-[10px] font-bold">Seguidores</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-3 border border-pink-200">
            <p className="text-pink-600 text-2xl font-black">5.0★</p>
            <p className="text-pink-700 text-[10px] font-bold">Avaliação</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-3 border border-pink-200">
            <p className="text-pink-600 text-2xl font-black">500+</p>
            <p className="text-pink-700 text-[10px] font-bold">Pedidos</p>
          </div>
        </div>
      </div>

      {/* CTA Instagramável */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-pink-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <button className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-pink-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Heart className="w-6 h-6" fill="white" strokeWidth={0} />
          FAZER ENCOMENDA
        </button>
      </div>
    </div>
  );
};
