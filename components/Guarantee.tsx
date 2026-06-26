import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-4 bg-white relative overflow-hidden">
      {/* Background Texture — DOTS for White theme */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-1/2 left-0 w-[50%] h-[50%] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 text-center md:text-left relative z-10">
        <div className="relative group reveal-hidden">
          <div className="absolute -inset-10 bg-brand-green/30 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-40 transition-all duration-1000"></div>

          <div className="relative shrink-0 rounded-[4rem] p-1 shadow-2xl transition-transform group-hover:scale-105 duration-700"
            style={{ background: 'linear-gradient(135deg, rgba(163,230,53,0.4), rgba(163,230,53,0.1))' }}>
            <div className="bg-slate-900 md:p-20 p-14 rounded-[3.8rem] relative overflow-hidden">
              {/* mesh texture */}
              <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(163,230,53,1) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
              <ShieldCheck size={120} className="text-brand-green relative z-10 drop-shadow-[0_0_20px_rgba(163,230,53,0.4)]" strokeWidth={1} />

              <div className="absolute -bottom-2 -right-2 bg-brand-green text-slate-950 px-6 py-4 rounded-3xl shadow-2xl font-black text-[10px] uppercase tracking-[0.3em] z-20 hidden md:block border-4 border-slate-900">
                Sem risco
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 flex-grow xl:pl-10 reveal-hidden delay-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full border border-brand-green/20">
            <CheckCircle2 size={16} className="text-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">100% garantido</span>
          </div>
          <h2 className="font-sans text-4xl md:text-7xl font-black text-slate-900 leading-none tracking-tight">
            Não gostou? <br />
            <span className="text-brand-green">Dinheiro de volta.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl leading-relaxed font-medium max-w-3xl">
            <span className="font-black text-slate-900 decoration-brand-green decoration-4 underline underline-offset-8">7 dias</span> pra testar. Não curtiu? É só falar. <strong className="text-slate-900">Devolvemos 100%. Zero burocracia.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};