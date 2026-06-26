import React from 'react';
import { Target, CheckCircle, TrendingUp, Users, Award, BarChart3, Lightbulb, Calendar } from 'lucide-react';

export const ConsultoriaPreview: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white w-full" style={{ minHeight: 844 }}>

      {/* HERO com imagem */}
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-slate-900/70 to-slate-950" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[9px] font-black px-2.5 py-1 rounded-full mb-2 uppercase tracking-wider">
            Consultoria Estratégica
          </div>
          <h1 className="text-white text-xl font-black leading-tight mb-1">Transforme seu<br/>negócio com dados</h1>
          <p className="text-slate-300 text-[10px]">Diagnóstico + Plano de ação + Acompanhamento</p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-0 border-b border-slate-800">
        {[
          { v: '127%', l: 'Crescimento' },
          { v: '84+', l: 'Empresas' },
          { v: '4.9★', l: 'Avaliação' },
        ].map((s, i) => (
          <div key={i} className="py-3 text-center border-r border-slate-800 last:border-r-0">
            <p className="text-base font-black text-emerald-400">{s.v}</p>
            <p className="text-[8px] text-slate-500 mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>

      {/* COMO FUNCIONA - grid 2x2 */}
      <div className="px-4 py-4">
        <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-3">Como funciona</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { n: '01', icon: BarChart3, title: 'Diagnóstico', desc: 'Análise completa do negócio e mercado' },
            { n: '02', icon: Target, title: 'Objetivos', desc: 'Metas claras baseadas em dados reais' },
            { n: '03', icon: Lightbulb, title: 'Estratégias', desc: 'Plano de ação sob medida pra você' },
            { n: '04', icon: Calendar, title: 'Suporte', desc: '3 meses de acompanhamento incluso' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 rounded-xl p-3 border border-slate-800">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
                </div>
                <span className="text-[9px] font-black text-slate-500">{item.n}</span>
              </div>
              <h3 className="text-white text-[11px] font-bold mb-0.5">{item.title}</h3>
              <p className="text-slate-500 text-[9px] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* O QUE INCLUI */}
      <div className="px-4 pb-4">
        <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-3">O que você recebe</p>
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
          {[
            'Relatório completo de diagnóstico',
            'Plano de ação detalhado (90 dias)',
            'Análise de concorrência',
            'Definição de métricas e KPIs',
            'Roadmap de crescimento',
            'Suporte via WhatsApp por 3 meses',
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-2.5 px-3 py-2.5 ${i < 5 ? 'border-b border-slate-800' : ''}`}>
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-slate-300 text-[10px] font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PREÇO E CTA */}
      <div className="px-4 pb-6">
        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-xl border border-emerald-500/20 p-4 text-center">
          <p className="text-slate-500 text-[9px] uppercase tracking-wider mb-1">Investimento</p>
          <p className="text-3xl font-black text-white mb-0.5">R$ 1.997</p>
          <p className="text-emerald-400 text-[10px] font-bold mb-4">Ou 3x de R$ 697 sem juros</p>
          <button className="w-full bg-green-600 text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agendar Consultoria
          </button>
          <p className="text-slate-600 text-[9px] mt-2">✓ Garantia 7 dias · ✓ Primeira reunião em 48h</p>
        </div>
      </div>

    </div>
  );
};
