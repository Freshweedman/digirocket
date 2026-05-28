import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export const Comparison: React.FC = () => {
  const problems = [
    'Invisível nas buscas locais do Google',
    'Dependente 100% de indicações lentas',
    'Perdendo vendas fora do horário comercial',
    'Parecendo menor do que realmente é',
  ];

  const solutions = [
    'Aparece no Google Local & Mapas',
    'Recebe pedidos direto no WhatsApp',
    'Vende 24h por dia automaticamente',
    'Passa autoridade instantânea',
  ];

  return (
    <section id="comparativo" className="py-24 md:py-40 px-4 bg-slate-50 relative overflow-hidden">
      {/* Background Texture — HANDLED GLOBALLY BY SECTION CSS */}
      <div className="absolute inset-0 z-0 bg-white pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-5 reveal-hidden">
          <h2 className="font-sans text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
            Enquanto você decide, seu <br />
            <span className="text-brand-green">concorrente aparece no Google.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium">
            Sem um site profissional, você está deixando dinheiro na mesa todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* CARD 1: O JEITO VELHO */}
          <div className="w-full bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-500 reveal-hidden delay-100">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 via-red-400/30 to-transparent rounded-t-[2.5rem]"></div>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-red-50 text-red-500 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-red-200">
                <XCircle size={14} />
                O Grande Risco
              </span>
              <h3 className="mt-5 text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                Sem Site Profissional
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-red-50/50 rounded-2xl border border-red-100 group/item">
                  <XCircle size={18} className="text-red-400 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-slate-600 font-semibold text-base">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 2: SOLUÇÃO DIGIROCKET */}
          <div className="w-full bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(163,230,53,0.2)] hover:shadow-[0_40px_120px_-15px_rgba(163,230,53,0.35)] transition-all duration-500 lg:-translate-y-6 reveal-hidden delay-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-green-400 to-brand-green rounded-t-[2.5rem]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
            <div className="mb-8 relative z-10">
              <span className="inline-flex items-center gap-2 bg-brand-green/15 text-brand-green font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-brand-green/30">
                <Zap size={14} fill="currentColor" className="animate-pulse" />
                Máquina de Vendas
              </span>
              <h3 className="mt-5 text-2xl md:text-3xl font-black text-white leading-tight">
                Com DigiRocket
              </h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-brand-green/10 rounded-2xl border border-brand-green/20 group/item">
                  <CheckCircle2 size={18} className="text-brand-green shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-slate-200 font-semibold text-base">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 relative z-10">
              <button
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-brand-green text-slate-950 font-black py-4 rounded-2xl text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:shadow-none group/btn"
              >
                Quero a solução DigiRocket
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};