import React from 'react';
import { Check, Rocket, Zap, Sparkles, CreditCard, ShieldCheck, CheckCircle2, MessageCircle, Clock } from 'lucide-react';

const wa = (plan: string, price: string) =>
  `https://wa.me/5551984689725?text=${encodeURIComponent(`Olá, tenho interesse no ${plan} de ${price}`)}`;

const planA = {
  name: 'Site Rápido',
  anchor: 'Agência cobra R$ 2.500',
  price: 'R$ 497',
  sub: 'Pagamento único · 1 ano grátis',
  tag: 'Pra começar já · Ideal pra testar',
  features: [
    'Site de 1 página direto ao ponto',
    'Botão WhatsApp gigante e visível',
    'Perfeito no celular (onde seus clientes estão)',
    'Recebe Pix no site',
    '1 ano de hospedagem grátis incluso',
    'No ar em 48 horas ou menos',
  ],
};

const planB = {
  name: 'Site Completo',
  anchor: 'Agência cobra R$ 4.500',
  price: 'R$ 997',
  sub: 'Uma vez só · 2 anos de hospedagem grátis',
  tag: 'Mais vendido · Melhor custo-benefício',
  features: [
    'Site com várias páginas (quantas você quiser)',
    'Você edita texto e foto sozinho depois',
    'Cardápio/catálogo visual com suas fotos',
    'Google Meu Negócio configurado',
    'Suporte direto no WhatsApp sempre',
    '2 anos de hospedagem 100% grátis',
  ],
};

export const Pricing: React.FC = () => (
  <section id="planos" className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
    <div className="absolute inset-0 z-0 bg-white pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none" />

    <div className="max-w-5xl mx-auto relative z-10">

      {/* ── Header ── */}
      <div className="text-center mb-10 md:mb-14 space-y-4 reveal-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full border border-brand-green/20">
          <Sparkles size={14} className="text-brand-green animate-pulse" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Sem mensalidade · Sem pegadinha</span>
        </div>
        <h2 className="font-sans text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
          Outras agências cobram R$ 2.500. <br />
          <span className="text-brand-green">Você paga R$ 497 aqui.</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
          Pagamento único. Sem mensalidade escondida. Hospedagem grátis inclusa. Site pronto em 48h.
        </p>
      </div>

      {/* ── Anchor price bar ── */}
      <div className="reveal-hidden mb-8 md:mb-12">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex-1 sm:pr-6 w-full">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Em outras agências</p>
              <p className="text-slate-400 line-through text-2xl md:text-3xl font-black leading-none">R$ 2.800</p>
              <p className="text-slate-400 text-[10px] font-bold mt-1">média paga por sites parecidos · com mensalidade</p>
            </div>
            <div className="hidden sm:block w-px h-14 bg-slate-200 mx-4 shrink-0" />
            <div className="w-full h-px sm:h-auto bg-slate-200 sm:bg-transparent sm:w-auto" />
            <div className="flex-1 sm:pl-6 w-full">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-green mb-1">Aqui na DigiRocket</p>
              <p className="text-slate-900 text-2xl md:text-3xl font-black leading-none">a partir de R$ 497</p>
              <p className="text-slate-500 text-[10px] font-bold mt-1">uma vez só · hospedagem inclusa</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust strip ABOVE cards ── */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[10px] md:text-xs text-slate-500 font-black uppercase tracking-[0.3em] py-4 mb-8 border-y border-slate-100 reveal-hidden">
        <span className="flex items-center gap-2"><CreditCard size={15} className="text-slate-400" /> Parcele em até 12x</span>
        <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-slate-400" /> Pagamento seguro</span>
        <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-brand-green" /> 7 dias de garantia</span>
        <span className="flex items-center gap-2"><Clock size={15} className="text-slate-400" /> Pronto em 48h</span>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">

        {/* Card A */}
        <div className="group relative flex flex-col rounded-3xl overflow-hidden border border-slate-200 bg-[#0b0f1a] hover:border-brand-green/40 transition-all duration-500 hover:-translate-y-1 shadow-xl reveal-hidden delay-100">
          {/* Header bar */}
          <div className="flex items-center gap-2 px-5 py-3 bg-slate-900/80 border-b border-white/5 shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-2 text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Plano Essencial</span>
          </div>

          <div className="flex flex-col flex-1 p-5 md:p-7">
            {/* Ideal for */}
            <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-3">Perfeito pra: negócio local que quer aparecer no Google</p>

            {/* Plan name */}
            <p className="text-brand-green font-black text-[10px] uppercase tracking-[0.4em] mb-2">{planA.name}</p>

            {/* Price block */}
            <div className="mb-5">
              <p className="text-white/20 text-sm font-black line-through leading-none mb-1">{planA.anchor}</p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-white text-4xl md:text-5xl font-black tracking-tighter group-hover:text-brand-green transition-colors duration-500 leading-none">
                  {planA.price}
                </span>
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">{planA.sub}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span className="text-brand-green text-[9px] font-black uppercase tracking-widest">{planA.tag}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5 mb-5" />

            {/* Features */}
            <ul className="space-y-2.5 flex-1 mb-6">
              {planA.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:border-transparent transition-all duration-300">
                    <Check size={11} strokeWidth={3} className="text-brand-green group-hover:text-slate-950 transition-colors" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee note */}
            <div className="flex items-center gap-2 mb-4 p-2.5 bg-white/5 rounded-xl border border-white/5">
              <ShieldCheck size={14} className="text-brand-green shrink-0" />
              <span className="text-slate-400 text-[10px] font-bold">7 dias de garantia — não gostou, devolvemos 100%</span>
            </div>

            {/* CTA */}
            <a
              href={wa(planA.name, planA.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 hover:bg-white text-white hover:text-slate-950 font-black text-xs uppercase tracking-[0.2em] border border-white/10 hover:border-white transition-all duration-400 shadow-lg"
            >
              <MessageCircle size={16} />
              Quero começar — falar agora
            </a>
          </div>
        </div>

        {/* Card B — destaque */}
        <div className="group relative flex flex-col rounded-3xl overflow-hidden border border-brand-green/30 bg-[#0b0f1a] hover:border-brand-green/60 transition-all duration-500 hover:-translate-y-1 shadow-[0_0_50px_-10px_rgba(163,230,53,0.15)] reveal-hidden delay-200">
          {/* Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-green/8 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-green/15 transition-colors duration-700" />

          {/* Header bar */}
          <div className="flex items-center gap-2 px-5 py-3 bg-brand-green/5 border-b border-brand-green/10 shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.5)]" />
            </div>
            <span className="ml-2 text-[9px] font-black text-brand-green/40 uppercase tracking-[0.2em]">Plano Premium</span>
          </div>

          <div className="flex flex-col flex-1 p-5 md:p-7 relative z-10">
            {/* Badge */}
            <div className="self-start mb-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green text-slate-950 font-black text-[9px] uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(163,230,53,0.3)]">
              <Zap size={11} fill="currentColor" className="animate-pulse" />
              O mais pedido
            </div>

            {/* Ideal for */}
            <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-2">Perfeito pra: negócio sério que quer crescer de verdade</p>

            {/* Plan name */}
            <p className="text-brand-green font-black text-[10px] uppercase tracking-[0.4em] mb-2">{planB.name}</p>

            {/* Price block */}
            <div className="mb-5">
              <p className="text-white/20 text-sm font-black line-through leading-none mb-1">{planB.anchor}</p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-white text-4xl md:text-5xl font-black tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                  {planB.price}
                </span>
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">{planB.sub}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <span className="text-brand-green text-[9px] font-black uppercase tracking-widest">{planB.tag}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-brand-green/10 mb-5" />

            {/* Features */}
            <ul className="space-y-2.5 flex-1 mb-6">
              {planB.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-lg bg-brand-green flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(163,230,53,0.3)]">
                    <Check size={11} strokeWidth={3} className="text-slate-950" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee note */}
            <div className="flex items-center gap-2 mb-4 p-2.5 bg-brand-green/5 rounded-xl border border-brand-green/15">
              <ShieldCheck size={14} className="text-brand-green shrink-0" />
              <span className="text-slate-400 text-[10px] font-bold">7 dias de garantia — não gostou, devolvemos 100%</span>
            </div>

            {/* CTA */}
            <a
              href={wa(planB.name, planB.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-brand-green hover:bg-white text-slate-950 font-black text-xs uppercase tracking-[0.2em] transition-all duration-400 shadow-[0_0_30px_rgba(163,230,53,0.25)] hover:scale-[1.02]"
            >
              <Rocket size={16} />
              Quero o completo — falar agora
            </a>
          </div>
        </div>
      </div>

      {/* ── Help text ── */}
      <div className="text-center reveal-hidden">
        <p className="text-slate-500 text-sm md:text-base font-medium mb-4">
          Em dúvida sobre qual escolher? <span className="text-slate-900 font-bold">Fala com a gente.</span> Em 2 minutos a gente te indica o melhor pro seu caso.
        </p>
        <a
          href="https://wa.me/5551984689725?text=Olá%2C+não+sei+qual+plano+escolher.+Podem+me+ajudar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-green font-black text-xs uppercase tracking-widest hover:underline"
        >
          <MessageCircle size={14} />
          Fale Conosco e tire sua dúvida →
        </a>
      </div>
    </div>
  </section>
);
