import React from 'react';

export const NaturaisPreview: React.FC = () => {
  return (
    <div className="bg-green-50 h-full overflow-y-auto p-5">
      <h1 className="text-green-900 text-2xl font-black mb-6 text-center">🌿 PRODUTOS NATURAIS</h1>
      <div className="space-y-3">
        {['Suplementos', 'Chás Orgânicos', 'Óleos Essenciais', 'Fitoterápicos'].map((p, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow">
            <div>
              <p className="font-bold text-green-900">{p}</p>
              <p className="text-green-700 text-sm">Natural & Orgânico</p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">VER</button>
          </div>
        ))}
      </div>
    </div>
  );
};
