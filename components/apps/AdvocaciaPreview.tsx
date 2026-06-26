import React from 'react';

export const AdvocaciaPreview: React.FC = () => {
  return (
    <div className="bg-blue-950 text-white h-full overflow-y-auto p-8">
      <div className="text-center mb-8">
        <div className="text-4xl mb-3">⚖️</div>
        <h1 className="text-2xl font-bold">ADVOCACIA ESPECIALIZADA</h1>
      </div>
      <div className="space-y-3">
        {['Direito Trabalhista', 'Direito Civil', 'Direito de Família', 'Direito Criminal'].map((a, i) => (
          <div key={i} className="bg-blue-900 p-4 rounded-lg">
            <p className="font-bold">{a}</p>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 bg-amber-500 text-blue-950 py-4 rounded-lg font-black">
        CONSULTA INICIAL GRATUITA
      </button>
    </div>
  );
};
