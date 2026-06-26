import React from 'react';

export const MentoriaPreview: React.FC = () => {
  return (
    <div className="bg-black text-white h-full overflow-y-auto p-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎯</div>
        <h1 className="text-4xl font-black mb-2">MENTORIA EXCLUSIVA</h1>
        <p className="text-gray-400">Apenas 10 vagas por mês</p>
      </div>
      <div className="space-y-6">
        {['Sessões 1:1', 'Grupo VIP', 'Materiais Exclusivos'].map((b, i) => (
          <div key={i} className="border-2 border-yellow-500 rounded-2xl p-6 text-center">
            <p className="text-2xl font-bold mb-2">{b}</p>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-5 rounded-2xl font-black text-lg">
        CANDIDATAR-SE AGORA
      </button>
    </div>
  );
};
