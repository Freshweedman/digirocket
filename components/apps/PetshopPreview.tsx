import React from 'react';

export const PetshopPreview: React.FC = () => {
  return (
    <div className="bg-orange-50 h-full overflow-y-auto p-5">
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">🐶</div>
        <h1 className="text-orange-900 text-2xl font-black">PET SHOP</h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {['Ração Premium', 'Brinquedos', 'Acessórios', 'Higiene', 'Roupinhas', 'Casinhas'].map((p, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 text-center shadow">
            <div className="w-full h-24 bg-orange-200 rounded-xl mb-3" />
            <p className="text-sm font-bold text-orange-900">{p}</p>
            <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded-lg text-xs font-bold">VER</button>
          </div>
        ))}
      </div>
    </div>
  );
};
