import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Quanto tempo demora pra ficar pronto?',
      a: 'Dois dias úteis. Você manda as informações hoje, site no ar depois de amanhã. Você aprova o rascunho antes de ir ao ar — se demorar mais, avisamos antes e combinamos o que fazer.',
    },
    {
      q: 'Vou ter que pagar mensalidade?',
      a: 'Não. Você paga uma vez só. Hospedagem está inclusa no plano — não chega boleto no fim do mês. No Plano Começa Agora a hospedagem é grátis por 1 ano. No Plano Cresce de Verdade é grátis pra sempre.',
    },
    {
      q: 'Funciona bem no celular?',
      a: 'Sim. Na verdade, é feito primeiro pro celular, porque 7 em cada 10 clientes vão acessar pelo telefone. Botão grande, texto legível, foto que carrega rápido mesmo em 3G.',
    },
    {
      q: 'Quando meu cliente pesquisar "padaria perto de mim", vai me achar?',
      a: 'É exatamente pra isso que serve. A gente cadastra seu negócio no Google Maps e no Google Meu Negócio. Quando alguém buscar pelo que você vende na sua cidade ou bairro, seu nome aparece.',
    },
    {
      q: 'Preciso ter fotos profissionais do meu negócio?',
      a: 'Não. Foto do celular serve perfeitamente. A gente otimiza as imagens pra ficarem bonitas no site. Você não precisa contratar fotógrafo nem nada do tipo.',
    },
    {
      q: 'E se eu quiser mudar alguma coisa depois?',
      a: 'No Plano Cresce de Verdade você mesmo edita: troca foto, muda texto, atualiza preço, sem precisar chamar ninguém — é simples como o Instagram. No Plano Começa Agora você manda mensagem no WhatsApp e a gente faz por você.',
    },
    {
      q: 'Tenho que contratar hospedagem separado?',
      a: 'Nem se preocupe. Está tudo incluso. Você não precisa comprar nada a mais nem entender de tecnologia.',
    },
    {
      q: 'E se eu não gostar do resultado?',
      a: '7 dias de garantia. Se não gostar, devolvemos 100% do valor. Sem pergunta, sem burocracia. E antes de ir ao ar, você aprova o rascunho — então você já sabe o que vai receber.',
    },
    {
      q: 'Meu negócio é pequeno. Vale a pena ter site?',
      a: 'Se você tem WhatsApp de negócio, você já precisa de site. O site é o que faz o cliente te achar antes de mandar mensagem. Sem site, você só vende pra quem já te conhece.',
    },
    {
      q: 'Vocês atendem fora da minha cidade?',
      a: 'Sim. Atendemos todo o Brasil de forma 100% remota. Você manda as informações pelo WhatsApp, a gente cria o site e coloca no Google — não importa onde você esteja.',
    },
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
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Perguntas que sempre fazem</span>
          </div>
          <h2 className="font-sans text-4xl md:text-7xl font-black text-white tracking-tight leading-none">
            Pode perguntar. <br />
            <span className="text-brand-green font-black">A gente responde direto.</span>
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
          <p className="text-slate-400 font-medium mb-8">Tem outra dúvida? Manda mensagem que a gente responde rapidinho.</p>
          <button
            onClick={() => window.open('https://wa.me/5551984689725', '_blank')}
            className="inline-flex items-center gap-3 bg-white/5 text-white px-10 py-5 rounded-3xl font-black hover:bg-brand-green hover:text-slate-950 transition-all border border-white/10"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};