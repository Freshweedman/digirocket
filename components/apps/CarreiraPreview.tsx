import React from 'react';

export const CarreiraPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">🎯</div>
        <h1 className="text-3xl font-black mb-2">QUIZ CARREIRA</h1>
        <p className="text-lg">Encontre sua vocação profissional</p>
      </div>
      <div className="bg-white text-indigo-900 rounded-3xl p-6">
        <p className="font-black text-xl mb-6">Qual área mais te interessa?</p>
        <div className="space-y-3">
          {['Tecnologia', 'Criatividade', 'Negócios', 'Saúde', 'Educação', 'Empreendedorismo'].map((c, i) => (
            <button key={i} className="w-full bg-indigo-50 hover:bg-indigo-100 p-5 rounded-2xl font-bold text-left flex items-center justify-between">
              <span>{c}</span>
              <span className="text-2xl">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
