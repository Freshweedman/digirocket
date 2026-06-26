import React from 'react';

export const WebinarPreview: React.FC = () => {
  return (
    <div className="bg-red-600 text-white h-full overflow-y-auto">
      <div className="p-8 text-center">
        <div className="inline-block bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-black mb-4">
          🔴 AO VIVO
        </div>
        <h1 className="text-4xl font-black mb-4">WEBINAR GRATUITO</h1>
        <p className="text-2xl mb-6">23 de Junho • 20h</p>
        <div className="text-xl font-bold mb-8">
          "Como Triplicar Seus Resultados em 90 Dias"
        </div>
      </div>
      <div className="bg-white text-red-900 p-8">
        <h2 className="text-2xl font-black mb-4">Você vai aprender:</h2>
        <div className="space-y-3">
          {['Estratégia Secreta #1', 'Framework Exclusivo', 'Plano de Ação'].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center font-bold">{i+1}</div>
              <p className="font-bold">{t}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-8 bg-red-600 text-white py-5 rounded-2xl font-black text-lg">
          GARANTIR MINHA VAGA GRÁTIS
        </button>
      </div>
    </div>
  );
};
