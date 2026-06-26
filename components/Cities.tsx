import React from 'react';
import { MapPin, Sparkles, Globe } from 'lucide-react';

const states = [
  'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina',
  'Rio Grande do Sul', 'Bahia', 'Ceará', 'Pernambuco', 'Goiás',
  'Distrito Federal', 'Espírito Santo', 'Mato Grosso', 'Pará', 'Amazonas',
];

export const Cities: React.FC = () => {
  return (
    <section
      id="cidades"
      aria-labelledby="cities-heading"
      className="py-20 md:py-28 px-4 bg-white relative overflow-hidden border-y border-slate-100"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-1/2 bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4 reveal-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full border border-brand-green/20">
            <Globe size={14} className="text-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Atendimento 100% remoto</span>
          </div>
          <h2 id="cities-heading" className="font-sans text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Atendemos <span className="text-brand-green">todo o Brasil</span>.
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Não importa onde você esteja. A gente cria seu site, coloca no Google e entrega em 48 horas — tudo pelo WhatsApp, sem precisar sair de casa.
          </p>
        </div>

        {/* State pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 reveal-hidden">
          {states.map((state, i) => (
            <span
              key={state}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:border-brand-green hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <MapPin size={12} className="text-brand-green group-hover:fill-brand-green transition-all" />
              <span className="font-black text-xs md:text-sm tracking-tight">{state}</span>
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 reveal-hidden">
          <p className="text-slate-500 font-medium text-sm md:text-base text-center max-w-xl">
            Seu estado não apareceu? Tranquilo. A gente atende qualquer lugar do Brasil.
          </p>
          <a
            href="https://wa.me/5551984689725?text=Oi%2C+quero+um+site+pro+meu+neg%C3%B3cio.+Podem+me+ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-brand-green hover:text-slate-950 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl"
          >
            <Sparkles size={14} />
            Quero meu site — falar agora
          </a>
        </div>
      </div>
    </section>
  );
};
