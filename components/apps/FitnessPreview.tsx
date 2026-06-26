import React from 'react';

export const FitnessPreview: React.FC = () => {
  return (
    <div className="bg-orange-500 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-3">QUIZ FITNESS</h1>
        <p className="text-xl">Descubra seu biotipo ideal</p>
      </div>
      <div className="space-y-4">
        <div className="bg-white text-orange-900 rounded-2xl p-6">
          <p className="font-bold mb-4">Qual seu objetivo principal?</p>
          {['Perder Peso', 'Ganhar Massa', 'Definição', 'Saúde Geral'].map((o, i) => (
            <button key={i} className="w-full bg-orange-100 hover:bg-orange-200 p-4 rounded-xl mb-2 text-left font-bold">
              {o}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-white text-orange-900 p-6 rounded-2xl text-center">
        <p className="font-bold mb-2">Questão 1 de 5</p>
        <div className="w-full bg-orange-200 h-2 rounded-full">
          <div className="w-1/5 bg-orange-600 h-2 rounded-full" />
        </div>
      </div>
    </div>
  );
};
