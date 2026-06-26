import React from 'react';
import { Plus, Check, Zap } from 'lucide-react';

export const AcaiPreview: React.FC = () => {
  return (
    <div className="bg-purple-950 h-full w-full overflow-y-auto overflow-x-hidden">
      {/* Header Colorido */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 px-4 py-5">
        <div className="text-center">
          <h1 className="text-white text-3xl font-black">Açaí da Praia</h1>
          <p className="text-purple-100 text-sm font-medium">Monte seu bowl perfeito</p>
        </div>
      </div>

      {/* Builder Visual - Escolha Tamanho */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-black text-sm">1</div>
          <h2 className="text-white text-lg font-black">ESCOLHA O TAMANHO</h2>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { size: '300ml', price: 14.90, label: 'PEQUENO' },
            { size: '500ml', price: 19.90, label: 'MÉDIO', popular: true },
            { size: '700ml', price: 24.90, label: 'GRANDE' },
          ].map((item, idx) => (
            <button key={idx} className={`rounded-2xl p-4 text-center transition-all ${
              item.popular 
                ? 'bg-gradient-to-br from-purple-600 to-pink-600 scale-105 shadow-2xl shadow-purple-500/50 border-2 border-purple-400' 
                : 'bg-purple-900/50 border-2 border-purple-700 hover:border-purple-500 active:scale-95'
            }`}>
              <div className="text-3xl mb-2">🥤</div>
              <p className="text-white font-black text-xs mb-1">{item.label}</p>
              <p className="text-purple-300 text-[10px] mb-2">{item.size}</p>
              <p className="text-white text-base font-black">R$ {item.price.toFixed(2).replace('.', ',')}</p>
              {item.popular && (
                <div className="mt-2 bg-yellow-400 text-purple-900 text-[9px] font-black px-2 py-1 rounded-full inline-block">
                  POPULAR
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Adicionais Coloridos */}
      <div className="px-4 py-6 bg-purple-900/30">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-black text-sm">2</div>
          <h2 className="text-white text-lg font-black">TOPPINGS GRÁTIS (3)</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Granola', emoji: '🥜', selected: true },
            { name: 'Banana', emoji: '🍌', selected: true },
            { name: 'Morango', emoji: '🍓', selected: true },
            { name: 'Leite Ninho', emoji: '🥛', selected: false },
            { name: 'Paçoca', emoji: '🥜', selected: false },
            { name: 'Coco', emoji: '🥥', selected: false },
          ].map((topping, idx) => (
            <button key={idx} className={`rounded-xl p-3 flex items-center gap-3 transition-all ${
              topping.selected
                ? 'bg-gradient-to-r from-green-600 to-green-500 shadow-lg scale-[1.02]'
                : 'bg-purple-800/50 border border-purple-600 hover:bg-purple-800 active:scale-95'
            }`}>
              <div className="text-2xl">{topping.emoji}</div>
              <span className="text-white font-bold text-sm flex-1 text-left">{topping.name}</span>
              {topping.selected && (
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Adicionais Pagos */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-black text-sm">3</div>
          <h2 className="text-white text-lg font-black">EXTRAS PREMIUM</h2>
        </div>

        <div className="space-y-2">
          {[
            { name: 'Pasta de Amendoim', price: 3.50, emoji: '🥜' },
            { name: 'Whey Protein', price: 5.00, emoji: '💪' },
            { name: 'Nutella', price: 4.50, emoji: '🍫' },
            { name: 'Mel Orgânico', price: 2.50, emoji: '🍯' },
          ].map((extra, idx) => (
            <div key={idx} className="bg-purple-900/50 border border-purple-700 rounded-xl p-3 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{extra.emoji}</div>
                <div>
                  <p className="text-white font-bold text-sm">{extra.name}</p>
                  <p className="text-purple-400 text-xs">+ R$ {extra.price.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>
              <button className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center active:scale-90 transition-all">
                <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Combos Fitness */}
      <div className="px-4 py-6 bg-gradient-to-br from-green-900/30 to-purple-900/30">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-6 h-6 text-yellow-400" strokeWidth={2} />
          <h2 className="text-white text-lg font-black">COMBOS FITNESS</h2>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Bowl Proteico', desc: 'Açaí + whey + pasta amendoim + banana', price: 26.90 },
            { name: 'Bowl Detox', desc: 'Açaí + frutas vermelhas + chia + mel', price: 24.90 },
          ].map((combo, idx) => (
            <div key={idx} className="bg-purple-900/70 backdrop-blur-sm border-2 border-green-500/50 rounded-2xl p-4 active:scale-[0.98] transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-black text-base">{combo.name}</h3>
                <span className="text-green-400 text-lg font-black">R$ {combo.price.toFixed(2).replace('.', ',')}</span>
              </div>
              <p className="text-purple-300 text-xs mb-3">{combo.desc}</p>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-2.5 rounded-xl active:scale-95 transition-all">
                ADICIONAR
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Preview do Pedido */}
      <div className="px-4 py-6 bg-purple-900/50">
        <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-600 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-purple-300 text-sm font-bold">Seu Pedido</p>
            <p className="text-white text-xl font-black">R$ 19,90</p>
          </div>
          <div className="text-purple-300 text-xs space-y-1 mb-4">
            <p>✓ Açaí 500ml</p>
            <p>✓ Granola, Banana, Morango</p>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white font-black py-4 rounded-2xl shadow-2xl shadow-purple-500/50 active:scale-95 transition-all">
            FINALIZAR PEDIDO
          </button>
        </div>
      </div>

      {/* CTA WhatsApp */}
      <div className="sticky bottom-0 bg-purple-950/95 backdrop-blur-xl border-t border-purple-800 p-4">
        <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-black py-5 rounded-2xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          PEDIR NO WHATSAPP
        </button>
      </div>
    </div>
  );
};
