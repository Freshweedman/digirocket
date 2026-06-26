import React from 'react';

export const InfoprodutoPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-600 to-emerald-700 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-3">MÉTODO COMPROVADO</h1>
        <p className="text-xl">Transforme sua vida em 30 dias</p>
      </div>
      <div className="bg-white/10 backdrop-blur rounded-3xl p-6 mb-6">
        <h2 className="text-2xl font-black mb-4">O QUE VOCÊ VAI RECEBER:</h2>
        <div className="space-y-3">
          {['Módulo 1: Fundamentos', 'Módulo 2: Prática', 'Módulo 3: Resultados', 'Bônus: Templates'].map((m, i) => (
            <div key={i} className="bg-white/10 p-3 rounded-xl">
              <p className="font-bold">✓ {m}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-6">
        <p className="text-3xl font-black mb-2">12x R$ 29,70</p>
        <p className="text-lg">ou R$ 297 à vista</p>
      </div>
      <button className="w-full bg-yellow-400 text-green-900 py-5 rounded-2xl font-black text-lg">
        QUERO COMEÇAR AGORA
      </button>
    </div>
  );
};
