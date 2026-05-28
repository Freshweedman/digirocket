import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto tempo demora para meu site ficar pronto?",
      a: "Entregamos sua estrutura completa em até 48 horas após o envio das informações básicas do seu negócio."
    },
    {
      q: "Preciso pagar mensalidade?",
      a: "Não. Na DigiRocket você paga uma única vez pela criação e desenvolvimento. A estrutura é sua para sempre."
    },
    {
      q: "O site funciona bem no celular?",
      a: "Com certeza. Nossos projetos são 'Mobile-First', o que significa que são otimizados primeiro para celulares, onde ocorre 90% das buscas hoje."
    },
    {
      q: "E se eu precisar mudar algo no futuro?",
      a: "Você recebe um painel administrativo simples para fazer alterações básicas, ou pode contar com nosso suporte VIP para atualizações mais complexas."
    },
    {
      q: "Como meu site vai aparecer no Google?",
      a: "Implementamos as melhores práticas de SEO Local e configuramos seu Google Meu Negócio para que você apareça para clientes da sua região."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-40 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background Texture — LINES for Dark theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(163, 230, 53, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(163, 230, 53, 0.05) 1px, transparent 1px)',
        backgroundSize: '44px 44px'
      }}></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-6 reveal-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
            <HelpCircle size={14} className="text-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Dúvidas Frequentes</span>
          </div>
          <h2 className="font-sans text-4xl md:text-7xl font-black text-white tracking-tight leading-none">
            Tudo o que você <br />
            <span className="text-brand-green font-black">precisa saber.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border rounded-[2.5rem] transition-all duration-500 reveal-hidden bg-slate-900/40 backdrop-blur-xl ${openIndex === index ? 'border-brand-green bg-slate-900/80 shadow-2xl' : 'border-white/5 hover:border-white/10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 md:px-12 py-8 md:py-10 flex items-center justify-between text-left"
              >
                <span className={`text-lg md:text-xl font-black pr-8 transition-colors ${openIndex === index ? 'text-brand-green' : 'text-white'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-brand-green text-slate-950 rotate-0' : 'bg-white/5 text-white rotate-180'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 md:px-12 pb-8 md:pb-10 text-slate-400 text-base md:text-lg font-medium leading-relaxed border-t border-white/5 pt-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal-hidden">
          <p className="text-slate-400 font-medium mb-8">Ainda tem alguma dúvida específica?</p>
          <button
            onClick={() => window.open('https://wa.me/5551984689725', '_blank')}
            className="inline-flex items-center gap-3 bg-white/5 text-white px-10 py-5 rounded-3xl font-black hover:bg-brand-green hover:text-slate-950 transition-all border border-white/10"
          >
            <MessageCircle size={20} />
            Falar com Consultor no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};