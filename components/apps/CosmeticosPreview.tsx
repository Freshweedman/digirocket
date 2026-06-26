import React from 'react';

export const CosmeticosPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-rose-100 h-full overflow-y-auto p-5">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-black text-rose-900">💄 BEAUTY</h1>
      </div>
      <div className="space-y-4">
        {['Maquiagem', 'Skincare', 'Perfumes', 'Tratamentos'].map((c, i) => (
          <div key={i} className="bg-white rounded-3xl p-5 shadow-xl flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-300 to-pink-300" />
            <div className="flex-1">
              <p className="font-black text-rose-900 text-lg">{c}</p>
              <button className="mt-2 bg-rose-500 text-white px-6 py-2 rounded-full font-bold text-sm">EXPLORAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
