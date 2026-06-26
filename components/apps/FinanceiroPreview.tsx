import React from 'react';

export const FinanceiroPreview: React.FC = () => {
  return (
    <div className="bg-green-700 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">💰</div>
        <h1 className="text-3xl font-black mb-2">QUIZ FINANCEIRO</h1>
        <p className="text-lg">Qual seu perfil de investidor?</p>
      </div>
      <div className="bg-white text-green-900 rounded-3xl p-6">
        <p className="font-black text-xl mb-6">Quanto você consegue poupar por mês?</p>
        <div className="space-y-3">
          {['Até R$ 500', 'R$ 500 - R$ 2.000', 'R$ 2.000 - R$ 5.000', 'Mais de R$ 5.000'].map((v, i) => (
            <button key={i} className="w-full bg-green-100 hover:bg-green-200 p-4 rounded-2xl font-bold text-left flex items-center justify-between">
              <span>{v}</span>
              <span className="text-2xl">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
