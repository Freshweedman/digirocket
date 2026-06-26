import React from 'react';

export const SaudePreview: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">🏥</div>
        <h1 className="text-3xl font-black mb-2">QUIZ SAÚDE</h1>
        <p className="text-lg">Avalie seu bem-estar</p>
      </div>
      <div className="bg-white text-blue-900 rounded-3xl p-6">
        <p className="font-black text-xl mb-6">Como está sua qualidade de sono?</p>
        <div className="space-y-3">
          {['Excelente (8h+)', 'Boa (6-8h)', 'Regular (4-6h)', 'Ruim (menos de 4h)'].map((s, i) => (
            <button key={i} className="w-full bg-blue-50 hover:bg-blue-100 p-5 rounded-2xl font-bold text-left">
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">Questão 2 de 8</p>
      </div>
    </div>
  );
};
