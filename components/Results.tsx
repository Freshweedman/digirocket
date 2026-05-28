import React from 'react';
import { Star, TrendingUp, Users, CheckCircle } from 'lucide-react';

export const Results: React.FC = () => {
   return (
      <section id="resultados" className="py-24 md:py-40 px-4 bg-white relative overflow-hidden">
         {/* Background Texture — HANDLED GLOBALLY BY SECTION CSS */}
         <div className="absolute inset-0 z-0 bg-white pointer-events-none"></div>
         <div className="absolute top-1/2 right-0 w-[50%] h-[50%] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10 reveal-hidden">
                  <div className="space-y-6">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full border border-brand-green/20">
                        <Star size={14} className="text-brand-green fill-brand-green" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Resultados Comprovados</span>
                     </div>
                     <h2 className="font-sans text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
                        Não é apenas design.<br />
                        <span className="text-brand-green">É lucro no seu bolso.</span>
                     </h2>
                     <p className="text-slate-500 text-lg md:text-2xl font-medium leading-relaxed max-w-xl">
                        Nossas estruturas são desenhadas com base em dados de comportamento humano, garantindo que o visitante tome a ação que você deseja.
                     </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                     {[
                        { label: 'Novos Leads/Dia', value: '15+', icon: Users },
                        { label: 'Taxa de Conversão', value: '24%', icon: TrendingUp },
                     ].map((stat, i) => (
                        <div key={i} className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 group hover:border-brand-green/30 transition-all shadow-sm">
                           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-green mb-6 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all">
                              <stat.icon size={24} />
                           </div>
                           <div className="text-3xl md:text-5xl font-black text-slate-900 mb-2">{stat.value}</div>
                           <div className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative reveal-hidden delay-200">
                  <div className="absolute -inset-4 bg-brand-green/10 rounded-[4rem] blur-[100px] pointer-events-none"></div>
                  <div className="relative bg-white border border-slate-200 p-8 md:p-12 rounded-[3.5rem] shadow-2xl space-y-8">
                     <div className="flex items-center justify-between border-b border-slate-100 pb-8">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-brand-green shadow-xl">
                              <CheckCircle size={28} />
                           </div>
                           <div>
                              <div className="text-xl font-black text-slate-900 uppercase tracking-widest text-[10px]">Checklist de Sucesso</div>
                              <div className="text-lg font-black text-slate-900">Padrão DigiRocket</div>
                           </div>
                        </div>
                     </div>

                     <ul className="space-y-6">
                        {[
                           'Carregamento em menos de 1.5s',
                           'Copywriting persuasivo (gatilhos mentais)',
                           'Otimização completa para celular',
                           'Botões de CTA estrategicamente posicionados',
                           'Integração direta com WhatsApp e CRM'
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-4 group">
                              <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all shrink-0">
                                 <CheckCircle size={14} />
                              </div>
                              <span className="text-slate-600 font-bold text-base md:text-lg group-hover:text-slate-900 transition-colors">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};