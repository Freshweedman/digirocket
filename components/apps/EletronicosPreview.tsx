import React from 'react';

export const EletronicosPreview: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full overflow-y-auto p-4">
      <h1 className="text-2xl font-black mb-6">TECH STORE</h1>
      <div className="grid grid-cols-2 gap-3">
        {['Smartphone', 'Notebook', 'Fone Bluetooth', 'Smartwatch'].map((e, i) => (
          <div key={i} className="bg-slate-800 rounded-xl p-4">
            <div className="w-full h-32 bg-slate-700 rounded-lg mb-3" />
            <p className="font-bold text-sm mb-2">{e}</p>
            <p className="text-cyan-400 font-black">R$ 1.999</p>
            <button className="w-full mt-2 bg-cyan-600 py-2 rounded-lg text-xs font-bold">COMPRAR</button>
          </div>
        ))}
      </div>
    </div>
  );
};
