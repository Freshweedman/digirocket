import React from 'react';

export const ContabilidadePreview: React.FC = () => {
  return (
    <div className="bg-indigo-50 h-full overflow-y-auto p-6">
      <h1 className="text-indigo-900 text-2xl font-black mb-6">CONTABILIDADE DIGITAL</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {['Abertura MEI', 'Declaração IR', 'Folha Pagamento', 'Consultoria Fiscal'].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow text-center">
            <p className="text-sm font-bold text-indigo-900 mb-2">{s}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold">CONTRATAR</button>
          </div>
        ))}
      </div>
      <div className="bg-indigo-600 text-white p-6 rounded-2xl text-center">
        <p className="font-bold mb-3">PLANO MENSAL</p>
        <p className="text-3xl font-black">R$ 199/mês</p>
      </div>
    </div>
  );
};
