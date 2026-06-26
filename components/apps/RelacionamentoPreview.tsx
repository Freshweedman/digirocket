import React from 'react';

export const RelacionamentoPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white h-full overflow-y-auto p-6">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">❤️</div>
        <h1 className="text-3xl font-black mb-2">QUIZ DO AMOR</h1>
        <p className="text-lg">Descubra sua linguagem do amor</p>
      </div>
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6">
        <p className="font-black text-xl mb-6">O que mais te faz sentir amado(a)?</p>
        <div className="space-y-3">
          {['Palavras de Afirmação', 'Tempo de Qualidade', 'Presentes', 'Atos de Serviço', 'Toque Físico'].map((l, i) => (
            <button key={i} className="w-full bg-white/30 backdrop-blur hover:bg-white/40 p-5 rounded-2xl font-bold text-left">
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
