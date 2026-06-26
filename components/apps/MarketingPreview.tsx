import React from 'react';

export const MarketingPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 h-full overflow-y-auto p-6 text-white">
      <h1 className="text-4xl font-black mb-8 text-center">MARKETING DIGITAL</h1>
      <div className="space-y-4">
        {['Gestão de Redes Sociais', 'Tráfego Pago', 'Criação de Conteúdo', 'Branding'].map((s, i) => (
          <div key={i} className="bg-white/20 backdrop-blur-lg rounded-2xl p-5">
            <p className="font-black text-lg mb-3">{s}</p>
            <button className="bg-white text-purple-900 px-6 py-2 rounded-full font-bold">SABER MAIS</button>
          </div>
        ))}
      </div>
    </div>
  );
};
