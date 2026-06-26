import React from 'react';
import { Quote, Star, MapPin, TrendingUp } from 'lucide-react';

type Testimonial = {
  name: string;
  city: string;
  business: string;
  niche: string;
  before: string;
  after: string;
  quote: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Carlos S.',
    city: 'São Paulo/SP',
    business: 'Monster Burger',
    niche: 'Hamburgueria',
    before: '15 pedidos / semana',
    after: '40 pedidos / semana',
    quote: 'Antes eu dependia só de indicação. Depois que a DigiRocket colocou meu site no ar, cheguei a 40 pedidos. E ficou pronto em dois dias mesmo.',
    initials: 'CS',
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Mariana C.',
    city: 'Belo Horizonte/MG',
    business: 'Studio Glamour',
    niche: 'Salão de Beleza',
    before: 'agenda com buracos',
    after: 'agenda lotada 2 semanas antes',
    quote: 'Hoje minha agenda tá lotada com duas semanas de antecedência. As clientes me acham no Google quando pesquisam salão aqui no bairro.',
    initials: 'MC',
    color: 'from-pink-500 to-fuchsia-600',
  },
  {
    name: 'Roberto M.',
    city: 'Curitiba/PR',
    business: 'Auto Center Top',
    niche: 'Auto Center',
    before: 'dia inteiro no telefone',
    after: 'cliente chega quase decidido',
    quote: 'Eu ficava no telefone o dia inteiro passando orçamento. Agora o cliente me acha no Google, já vê o que eu faço e chega no WhatsApp quase decidido.',
    initials: 'RM',
    color: 'from-blue-700 to-slate-900',
  },
  {
    name: 'Ana Paula',
    city: 'Fortaleza/CE',
    business: 'Clínica Bem-Estar',
    niche: 'Estética',
    before: 'cliente não confiava',
    after: 'paciente chega confiando',
    quote: 'O design do site passa autoridade. Meus pacientes já chegam confiando no meu trabalho antes mesmo da primeira consulta.',
    initials: 'AP',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    name: 'Julio C.',
    city: 'Brasília/DF',
    business: 'Advocacia Digital',
    niche: 'Advocacia',
    before: 'sem presença online',
    after: 'consultas de alto ticket',
    quote: 'Precisava de algo profissional e rápido. Entregaram em 48h um site que traz consultas de alto ticket todos os dias.',
    initials: 'JC',
    color: 'from-stone-700 to-slate-900',
  },
  {
    name: 'Fernanda L.',
    city: 'Recife/PE',
    business: 'Boutique Bella',
    niche: 'Moda',
    before: 'só vendia presencial',
    after: '+40% vendas online',
    quote: 'Minhas vendas online subiram 40% no primeiro mês. As clientes veem a peça no celular e fecham comigo no WhatsApp.',
    initials: 'FL',
    color: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Ricardo S.',
    city: 'Goiânia/GO',
    business: 'Academia Iron',
    niche: 'Academia',
    before: 'matrícula só no balcão',
    after: 'matrículas pelo celular',
    quote: 'O melhor investimento que fiz esse ano. O suporte é impecável e o site é super rápido no celular do aluno.',
    initials: 'RS',
    color: 'from-blue-700 to-indigo-800',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full border border-brand-green/20 mb-4">
            <Star size={14} className="text-brand-green fill-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Negócios reais · Brasil</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Quem já tá vendendo <br className="hidden md:block"/>
            <span className="text-brand-green">com site da gente</span>
          </h2>
        </div>

        {/* Carrossel - Cards menores passando */}
        <div className="relative overflow-hidden mask-gradient-x-white">
          <div className="flex gap-4 animate-scroll-testimonials">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[300px] md:w-[350px] bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-brand-green/30 hover:shadow-xl transition-all group"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={12} className="text-brand-green fill-brand-green" />
                  ))}
                </div>

                {/* Before/After */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <TrendingUp size={12} className="text-slate-400" />
                    <span className="text-slate-500 line-through">{t.before}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <TrendingUp size={14} className="text-brand-green" />
                    <span className="text-slate-900">{t.after}</span>
                  </div>
                </div>

                {/* Quote */}
                <Quote size={18} className="text-brand-green/20 mb-2" />
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-black">{t.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 text-sm truncate">{t.name}</p>
                    <p className="text-xs text-brand-green font-bold truncate">{t.business} · {t.niche}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={10} className="text-slate-400" />
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">{t.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-xs text-slate-500 uppercase tracking-wider font-bold">
          Negócios reais de todo o Brasil · Depoimentos com fotos disponíveis sob solicitação
        </p>
      </div>

      <style>{`
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-testimonials {
          animation: scroll-testimonials 40s linear infinite;
        }

        .animate-scroll-testimonials:hover {
          animation-play-state: paused;
        }

        .mask-gradient-x-white {
          -webkit-mask-image: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
          mask-image: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
        }
      `}</style>
    </section>
  );
};
