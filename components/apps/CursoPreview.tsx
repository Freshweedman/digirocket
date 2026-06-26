import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

export const CursoPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white w-full overflow-x-hidden" style={{ minHeight: 844 }}>
      {/* Hero - COMPACTO */}
      <div className="relative h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop" 
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/70 to-indigo-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4 relative z-10">
            <div className="inline-block bg-red-600 text-white px-2.5 py-0.5 rounded-full text-[9px] font-black mb-2">
              🔥 TURMA ABERTA
            </div>
            <h1 className="text-lg font-black mb-1 leading-tight">DOMINE AS HABILIDADES DO FUTURO</h1>
            <p className="text-xs text-blue-200">Curso Online Completo</p>
          </div>
        </div>
      </div>

      {/* Stats - HORIZONTAL COMPACTO */}
      <div className="px-3 py-3 grid grid-cols-3 gap-2">
        <div className="bg-blue-800/50 rounded-lg p-2 text-center">
          <p className="text-xl font-black text-blue-300">12</p>
          <p className="text-[8px] text-blue-300">Módulos</p>
        </div>
        <div className="bg-blue-800/50 rounded-lg p-2 text-center">
          <p className="text-xl font-black text-blue-300">50+</p>
          <p className="text-[8px] text-blue-300">Aulas</p>
        </div>
        <div className="bg-blue-800/50 rounded-lg p-2 text-center">
          <p className="text-xl font-black text-blue-300">30h</p>
          <p className="text-[8px] text-blue-300">Conteúdo</p>
        </div>
      </div>

      {/* O Que Você Vai Aprender - GRID 2x2 */}
      <div className="px-3 py-3">
        <h2 className="text-sm font-black mb-3 text-center">MÓDULOS</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'Fundamentos', mod: '1-3', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=120&fit=crop' },
            { name: 'Avançado', mod: '4-7', img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=200&h=120&fit=crop' },
            { name: 'Projetos', mod: '8-10', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=120&fit=crop' },
            { name: 'Mercado', mod: '11-12', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=120&fit=crop' },
          ].map((mod, i) => (
            <div key={i} className="bg-blue-800/30 rounded-xl overflow-hidden border border-blue-700/30">
              <div className="relative h-14">
                <img src={mod.img} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" strokeWidth={3} />
                </div>
              </div>
              <div className="p-2">
                <p className="font-bold text-[10px] text-white">{mod.name}</p>
                <p className="text-[8px] text-blue-300">Módulos {mod.mod}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bônus */}
      <div className="px-4 py-6 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-7 h-7 text-yellow-400" strokeWidth={2} />
          <h2 className="text-xl font-black">BÔNUS EXCLUSIVOS</h2>
        </div>
        <div className="space-y-2">
          {[
            'Certificado Digital Reconhecido',
            'Grupo VIP de Alunos no Telegram',
            'Templates e Materiais Extras',
            'Suporte Direto com Professores',
            '1 Ano de Acesso Vitalício',
          ].map((bonus, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur p-3 rounded-xl">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-900 font-black text-sm">✓</span>
              </div>
              <p className="text-sm font-bold">{bonus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-4 py-6">
        <div className="bg-blue-800/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-700/50">
          <div className="flex items-center justify-around text-center">
            <div>
              <Users className="w-8 h-8 text-blue-300 mx-auto mb-2" strokeWidth={2} />
              <p className="text-2xl font-black">2.5K+</p>
              <p className="text-xs text-blue-300">Alunos</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" strokeWidth={2} />
              <p className="text-2xl font-black">4.9★</p>
              <p className="text-xs text-blue-300">Avaliação</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" strokeWidth={2} />
              <p className="text-2xl font-black">97%</p>
              <p className="text-xs text-blue-300">Conclusão</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preço e CTA */}
      <div className="px-4 py-6 bg-gradient-to-br from-green-900/50 to-emerald-900/50">
        <div className="text-center mb-4">
          <p className="text-blue-300 text-xs mb-1">De <span className="line-through">R$ 997,00</span></p>
          <p className="text-xs text-green-400 font-bold mb-1">12x de apenas</p>
          <p className="text-4xl font-black text-white mb-1">R$ 97</p>
          <p className="text-green-400 text-sm font-bold">ou R$ 997 à vista</p>
        </div>
        
        <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all">
          QUERO ME INSCREVER AGORA
        </button>
        
        <div className="text-center mt-3">
          <p className="text-[10px] text-blue-300">✓ Acesso imediato · ✓ Garantia 7 dias</p>
        </div>
      </div>
    </div>
  );
};
