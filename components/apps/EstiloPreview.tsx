import React from 'react';

export const EstiloPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pink-400 to-purple-500 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-3">QUIZ DE ESTILO</h1>
        <p className="text-xl">Descubra seu estilo perfeito</p>
      </div>
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6">
        <p className="font-black text-2xl mb-6">Como você se veste no dia a dia?</p>
        <div className="grid grid-cols-2 gap-3">
          {['Casual', 'Elegante', 'Esportivo', 'Minimalista'].map((e, i) => (
            <button key={i} className="bg-white/30 backdrop-blur rounded-2xl p-6 text-center font-bold hover:bg-white/40">
              <div className="text-4xl mb-2">👔</div>
              {e}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
