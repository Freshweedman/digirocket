import React from 'react';
import { MousePointer2, Layout, Zap, Rocket, ChevronRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MousePointer2,
      title: 'Você manda as informações',
      description: 'A gente manda um formulário simples pelo WhatsApp. Leva menos de 10 minutos. Só precisa do nome do negócio, endereço, WhatsApp e 3 fotos do celular mesmo — fotógrafo não precisa.',
      color: 'blue',
      time: '10 min',
    },
    {
      icon: Layout,
      title: 'A gente cria o site (48h)',
      description: 'Em dois dias úteis seu site está pronto. Você aprova o rascunho antes de ir ao ar — 1 rodada de ajustes inclusa. Só vai ao ar quando você aprovar.',
      color: 'brand-green',
      time: '48 horas',
    },
    {
      icon: Zap,
      title: 'Cadastramos no Google',
      description: 'Colocamos seu negócio no Google Maps e no Google Meu Negócio. Quando alguém buscar pelo que você vende na sua cidade, você aparece antes do concorrente.',
      color: 'orange',
      time: '24h após o site',
    },
    {
      icon: Rocket,
      title: 'Cliente chega no WhatsApp',
      description: 'Pronto. O telefone começa a tocar, o WhatsApp começa a vibrar, e você cuida do que faz de melhor. Suporte direto no WhatsApp por 30 dias após a entrega.',
      color: 'purple',
      time: 'Imediato',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-40 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background Texture — HANDLED GLOBALLY BY SECTION CSS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 font-sans">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-8">
          <div className="max-w-2xl space-y-6 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full border border-brand-green/20">
              <Zap size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Como funciona</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight">
              Em 4 passos. <br />
              <span className="text-brand-green">Sem burocracia.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-sm leading-relaxed border-l-2 border-brand-green/30 pl-6 reveal-hidden delay-200">
            Sem reunião de uma hora. Sem formulário gigante. Você manda as infos, a gente faz o trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative reveal-hidden"
              style={{ transitionDelay: `${index * 400}ms` }}
            >
              <div className="bg-[#0f172a]/40 backdrop-blur-xl p-10 md:p-12 rounded-[3.5rem] border border-white/5 transition-all duration-700 hover:border-brand-green/50 hover:shadow-[0_40px_100px_-20px_rgba(163,230,53,0.1)] hover:-translate-y-4 flex flex-col items-center text-center h-full relative overflow-hidden">
                {/* Step Number */}
                <span className="absolute top-8 right-10 text-7xl font-black text-white/[0.03] group-hover:text-brand-green/[0.05] transition-colors duration-700">0{index + 1}</span>

                <div className="mb-8 p-6 bg-slate-900 rounded-3xl text-brand-green border border-white/5 group-hover:bg-brand-green group-hover:text-slate-950 transition-all duration-500 transform group-hover:rotate-[12deg] shadow-2xl">
                  <step.icon size={40} strokeWidth={1.2} />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-brand-green transition-colors duration-500 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors duration-500 mb-4">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 mb-10">
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-green/60 bg-brand-green/10 border border-brand-green/20 px-2.5 py-1 rounded-full">
                    ⏱ {step.time}
                  </span>
                </div>

                <button
                  onClick={() => window.open('https://wa.me/5551984689725', '_blank')}
                  className="mt-auto group/btn flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-brand-green text-white hover:text-slate-950 rounded-2xl transition-all duration-500 border border-white/10 hover:border-brand-green text-[10px] font-black uppercase tracking-[.25em]"
                >
                  Tirar dúvida
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};