import React from 'react';

export const VeterinariaPreview: React.FC = () => {
  return (
    <div className="bg-cyan-50 h-full overflow-y-auto p-5">
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">🐾</div>
        <h1 className="text-cyan-900 text-2xl font-black">PET CARE CLINIC</h1>
      </div>
      {['Consulta Veterinária', 'Vacinação', 'Cirurgia', 'Banho & Tosa'].map((s, i) => (
        <div key={i} className="bg-white border-2 border-cyan-500 rounded-2xl p-4 mb-3">
          <p className="font-bold text-cyan-900 mb-2">{s}</p>
          <button className="w-full bg-cyan-600 text-white py-2 rounded-xl font-bold">AGENDAR</button>
        </div>
      ))}
    </div>
  );
};
