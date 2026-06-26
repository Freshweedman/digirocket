import React from 'react';

export const DecoracaoPreview: React.FC = () => {
  return (
    <div className="bg-amber-50 h-full overflow-y-auto">
      <div className="p-6 text-center">
        <h1 className="text-3xl font-light text-amber-900 mb-2">HOME DECOR</h1>
        <p className="text-amber-700 text-sm">Transforme seu lar</p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {['Quadros', 'Almofadas', 'Vasos', 'Luminárias', 'Tapetes', 'Cortinas'].map((d, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-40 bg-gradient-to-br from-amber-200 to-orange-200" />
            <div className="p-3">
              <p className="font-bold text-amber-900">{d}</p>
              <button className="mt-2 text-amber-700 font-bold text-sm">Ver mais →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
