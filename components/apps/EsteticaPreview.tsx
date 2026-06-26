import React from 'react';
import { Sparkles, Star, Calendar, Award } from 'lucide-react';

export const EsteticaPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-cyan-50 h-full overflow-y-auto overflow-x-hidden">
      {/* Header Premium */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white text-center">
        <Sparkles className="w-12 h-12 mx-auto mb-3" strokeWidth={1.5} />
        <h1 className="text-3xl font-black mb-1">ESTÉTICA AVANÇADA</h1>
        <p className="text-blue-100 text-sm font-medium">Tratamentos Premium</p>
      </div>

      {/* Badge Certificação */}
      <div className="relative -mt-5 px-4">
        <div className="bg-white rounded-2xl p-3 shadow-xl border-2 border-blue-200 flex items-center justify-center gap-2">
          <Award className="w-5 h-5 text-blue-600" strokeWidth={2} />
          <span className="text-blue-900 font-black text-sm">CERTIFICADA ANVISA</span>
        </div>
      </div>

      {/* Procedimentos com Imagens */}
      <div className="p-5 space-y-4 mt-6">
        <h2 className="text-blue-900 text-lg font-black mb-4">PROCEDIMENTOS FACIAIS</h2>
        
        {[
          { name: 'Botox Facial', desc: 'Aplicação em testa, glabela e periorbital', preco: 450, img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop', popular: true },
          { name: 'Preenchimento Labial', desc: 'Ácido hialurônico premium • Efeito natural', preco: 890, img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop' },
          { name: 'Limpeza de Pele Profunda', desc: 'Extração + peeling + máscara', preco: 180, img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop' },
          { name: 'Peeling Químico', desc: 'Renovação celular • 3 sessões', preco: 650, img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop' },
        ].map((proc, i) => (
          <div key={i} className={`bg-white rounded-2xl overflow-hidden shadow-lg ${proc.popular ? 'border-2 border-blue-500' : ''}`}>
            <div className="flex gap-0">
              <div className="relative w-28 h-28 flex-shrink-0">
                <img src={proc.img} className="w-full h-full object-cover" />
                {proc.popular && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
              </div>
              <div className="flex-1 p-3">
                <h3 className="text-blue-900 font-black text-sm mb-1">{proc.name}</h3>
                <p className="text-blue-700 text-xs mb-3">{proc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-lg font-black">R$ {proc.preco}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-xs active:scale-95 transition-all">
                    AGENDAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Procedimentos Corporais */}
      <div className="px-5 py-6 bg-blue-100">
        <h2 className="text-blue-900 text-lg font-black mb-4">TRATAMENTOS CORPORAIS</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { nome: 'Criolipólise', icon: '❄️' },
            { nome: 'Drenagem Linfática', icon: '💆‍♀️' },
            { nome: 'Massagem Modeladora', icon: '✨' },
            { nome: 'Radiofrequência', icon: '🔥' },
          ].map((trat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 text-center shadow">
              <div className="text-3xl mb-2">{trat.icon}</div>
              <p className="text-blue-900 font-bold text-sm mb-3">{trat.nome}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-xl text-xs font-bold">
                CONSULTAR
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais */}
      <div className="px-5 py-6">
        <h3 className="text-blue-900 font-black mb-4 text-center">POR QUE NOS ESCOLHER?</h3>
        <div className="space-y-3">
          {[
            'Profissionais certificados',
            'Equipamentos de última geração',
            'Produtos importados premium',
            'Ambiente climatizado',
          ].map((diff, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black">✓</span>
              </div>
              <p className="text-blue-900 font-bold text-sm">{diff}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center shadow">
            <Star className="w-6 h-6 text-blue-600 mx-auto mb-1" fill="#2563EB" strokeWidth={0} />
            <p className="text-blue-900 font-black">5.0</p>
            <p className="text-blue-700 text-[10px]">Rating</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow">
            <Award className="w-6 h-6 text-blue-600 mx-auto mb-1" strokeWidth={2} />
            <p className="text-blue-900 font-black">10+</p>
            <p className="text-blue-700 text-[10px]">Anos</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow">
            <Sparkles className="w-6 h-6 text-blue-600 mx-auto mb-1" strokeWidth={2} />
            <p className="text-blue-900 font-black">5K+</p>
            <p className="text-blue-700 text-[10px]">Clientes</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-blue-200 p-4">
        <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Calendar className="w-6 h-6" />
          AGENDAR AVALIAÇÃO GRATUITA
        </button>
      </div>
    </div>
  );
};
