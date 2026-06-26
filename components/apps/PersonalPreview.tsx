import React from 'react';

export const PersonalPreview: React.FC = () => {
  return (
    <div className="bg-black h-full overflow-y-auto">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white text-center">
        <div className="text-5xl mb-2">💪</div>
        <h1 className="text-3xl font-black">PERSONAL TRAINER</h1>
        <p className="text-sm">Resultados Garantidos</p>
      </div>
      <div className="p-6 space-y-4">
        {['Avaliação Física', 'Treino Personalizado', 'Acompanhamento Nutricional'].map((s, i) => (
          <div key={i} className="bg-zinc-900 rounded-2xl p-5 border-l-4 border-red-600">
            <p className="text-white font-bold text-lg">{s}</p>
          </div>
        ))}
      </div>
      <div className="p-6">
        <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-5 rounded-2xl font-black text-lg">
          AGENDAR AVALIAÇÃO GRÁTIS
        </button>
      </div>
    </div>
  );
};
