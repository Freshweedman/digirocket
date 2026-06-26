import React from 'react';

export const ArquiteturaPreview: React.FC = () => {
  return (
    <div className="bg-stone-100 h-full overflow-y-auto">
      <div className="h-64 bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center text-white">
        <h1 className="text-4xl font-light">ARQUITETURA & DESIGN</h1>
      </div>
      <div className="p-6 space-y-4">
        {['Projeto Residencial', 'Projeto Comercial', 'Interiores'].map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-none shadow-lg">
            <p className="text-2xl font-light text-stone-900 mb-4">{p}</p>
            <button className="border-2 border-stone-900 text-stone-900 px-8 py-3 font-bold hover:bg-stone-900 hover:text-white transition">
              CONSULTAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
