import React from 'react';

export const CoachingPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white h-full overflow-y-auto p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">⭐</div>
        <h1 className="text-3xl font-black mb-2">COACHING TRANSFORMACIONAL</h1>
        <p className="text-purple-200">Alcance seu máximo potencial</p>
      </div>
      <div className="space-y-4 mb-8">
        {['Sessão de Diagnóstico', '12 Sessões Personalizadas', 'Plano de Ação Individual', 'Acompanhamento 24/7'].map((s, i) => (
          <div key={i} className="bg-purple-800/30 backdrop-blur rounded-2xl p-5 border-l-4 border-yellow-400">
            <p className="font-bold text-lg">{s}</p>
          </div>
        ))}
      </div>
      <div className="bg-yellow-400 text-purple-900 p-6 rounded-2xl text-center mb-6">
        <p className="text-sm font-bold mb-2">INVESTIMENTO</p>
        <p className="text-4xl font-black">R$ 3.997</p>
        <p className="text-sm font-bold mt-2">ou 12x R$ 399</p>
      </div>
      <button className="w-full bg-white text-purple-900 py-5 rounded-2xl font-black">
        AGENDAR SESSÃO ESTRATÉGICA
      </button>
    </div>
  );
};
