import React from 'react';

export const EbookPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <div className="w-48 h-64 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-2xl mb-6" />
        <h1 className="text-3xl font-black mb-2">E-BOOK DIGITAL</h1>
        <p className="text-purple-200">O Guia Definitivo</p>
      </div>
      <div className="space-y-3 mb-8">
        {['200+ Páginas', 'Exemplos Práticos', 'Bônus Exclusivos'].map((d, i) => (
          <div key={i} className="bg-purple-800/50 backdrop-blur rounded-xl p-4">
            <p className="font-bold">✓ {d}</p>
          </div>
        ))}
      </div>
      <div className="text-center mb-6">
        <p className="text-purple-300 line-through mb-2">De R$ 97,00</p>
        <p className="text-5xl font-black">R$ 47,00</p>
      </div>
      <button className="w-full bg-white text-purple-900 py-5 rounded-2xl font-black">COMPRAR AGORA</button>
    </div>
  );
};
