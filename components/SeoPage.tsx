import React from 'react';
import {
  MessageCircle, ChevronRight, ArrowLeft, Search, Smartphone,
  MapPin, Clock, Shield, Star, CheckCircle, Zap, Globe, Instagram, Bot
} from 'lucide-react';
import type { SeoPage } from '../data/seoPages';

interface Props { page: SeoPage; onBack: () => void; }

const WA = 'https://wa.me/5551984689725';
const waSend = (text: string) => `${WA}?text=${encodeURIComponent(text)}`;

/* Image map by slug keyword */
const imageFor = (slug: string): string => {
  const map: Record<string, string> = {
    barbearia:   'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=700&fit=crop',
    salao:       'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&h=700&fit=crop',
    estetica:    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=700&fit=crop',
    spa:         'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=700&fit=crop',
    clinica:     'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=700&fit=crop',
    medico:      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=700&fit=crop',
    dentista:    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=700&fit=crop',
    psicologo:   'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=700&fit=crop',
    fisio:       'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=700&fit=crop',
    nutri:       'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=700&fit=crop',
    advogado:    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=700&fit=crop',
    contador:    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=700&fit=crop',
    consultor:   'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=700&fit=crop',
    arquiteto:   'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=700&fit=crop',
    engenheiro:  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=700&fit=crop',
    imobiliaria: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop',
    construtora: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=700&fit=crop',
    solar:       'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=700&fit=crop',
    academia:    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=700&fit=crop',
    personal:    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=700&fit=crop',
    pet:         'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=700&fit=crop',
    veterinaria: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=1200&h=700&fit=crop',
    auto:        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=700&fit=crop',
    oficina:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop',
    mecanica:    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=700&fit=crop',
    eletricista: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=700&fit=crop',
    delivery:    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=700&fit=crop',
    hamburgueria:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=700&fit=crop',
    pizzaria:    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=700&fit=crop',
    restaurante: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=700&fit=crop',
    sushi:       'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&h=700&fit=crop',
    padaria:     'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=700&fit=crop',
    doceria:     'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=700&fit=crop',
    acai:        'https://images.unsplash.com/photo-1590080875897-b7f74d7d8ca4?w=1200&h=700&fit=crop',
    loja:        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=700&fit=crop',
    moda:        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=700&fit=crop',
    roupas:      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=700&fit=crop',
    ecommerce:   'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=700&fit=crop',
    curso:       'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=700&fit=crop',
    escola:      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=700&fit=crop',
    fotografo:   'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=700&fit=crop',
    'porto-alegre': 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=1200&h=700&fit=crop',
    'sao-paulo': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=700&fit=crop',
    default:     'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=700&fit=crop',
  };
  const key = Object.keys(map).find(k => slug.includes(k));
  return map[key ?? 'default'];
};

const FEATURES = [
  { icon: Smartphone, label: 'Botão WhatsApp' },
  { icon: Globe, label: 'Aparece no Google' },
  { icon: MapPin, label: 'Google Maps' },
  { icon: Star, label: 'Galeria de fotos' },
  { icon: Clock, label: 'Horários e contato' },
  { icon: Instagram, label: 'Links para redes' },
  { icon: Bot, label: 'WhatsApp automático' },
  { icon: Shield, label: 'Site seguro (SSL)' },
];

const STEPS = [
  { n: '01', title: 'Você manda as infos', desc: 'Nome, WhatsApp, endereço e 3 fotos — pelo celular mesmo.' },
  { n: '02', title: 'A gente cria', desc: 'Em até 48h seu site está pronto para você aprovar.' },
  { n: '03', title: 'Colocamos no Google', desc: 'Cadastramos no Google Meu Negócio e você aparece nas buscas.' },
  { n: '04', title: 'Cliente chega no WhatsApp', desc: 'Ele vê seu site, clica no botão e fala direto com você.' },
];

export const SeoPageView: React.FC<Props> = ({ page, onBack }) => {
  const img = imageFor(page.slug);
  const waMsg = waSend(`Oi! Vim da página "${page.h1}" e quero saber mais sobre meu site.`);

  return (
    <div className="min-h-screen text-white" style={{ background: '#020617' }}>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity: page.faqs.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{'@type':'Answer',text:f.a} }))
      })}} />

      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b border-white/5 px-4 py-3" style={{ background:'rgba(2,6,23,0.95)', backdropFilter:'blur(20px)' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-1.5 text-emerald-400 text-sm font-bold hover:text-white transition-colors">
            <ArrowLeft size={16} /> Voltar
          </button>
          <span className="text-white font-black text-base tracking-tight">DigiRocket</span>
          <a href={waMsg} target="_blank" rel="noopener noreferrer"
             className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-full text-xs font-black transition-all">
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0">
          <img src={img} alt={page.h1} className="w-full h-full object-cover" loading="lazy"
               onError={e => { (e.target as HTMLImageElement).style.display='none'; }} />
          <div className="absolute inset-0" style={{ background:'linear-gradient(135deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.7) 60%, rgba(2,6,23,0.4) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-emerald-400/70 mb-6">
              <button onClick={onBack} className="hover:text-emerald-400 transition-colors">DigiRocket</button>
              <ChevronRight size={12} />
              <span className="text-emerald-400">{page.h1}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">
              {page.h1} <span className="text-emerald-400">pronto em 48h</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">{page.intro}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['✓ Pronto em 48h','✓ A partir de R$497','✓ Sem mensalidade','✓ Aparece no Google'].map(b => (
                <span key={b} className="text-xs font-bold px-3 py-1.5 rounded-full border" style={{ background:'rgba(16,185,129,0.12)', borderColor:'rgba(16,185,129,0.3)', color:'#34d399' }}>{b}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href={waMsg} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3.5 rounded-xl font-black text-sm transition-all hover:scale-105 shadow-lg shadow-emerald-500/30">
                <MessageCircle size={16} />
                {page.cta}
              </a>
              <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3.5 rounded-xl border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all">
                Ver planos
              </button>
            </div>
          </div>

          {/* Right — mini stats */}
          <div className="hidden md:grid grid-cols-2 gap-3">
            {[
              { v:'+200', l:'Sites entregues' },
              { v:'48h', l:'Prazo de entrega' },
              { v:'4.9★', l:'Avaliação média' },
              { v:'R$497', l:'Preço a partir de' },
            ].map(s => (
              <div key={s.l} className="rounded-2xl p-5 text-center" style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(10px)' }}>
                <p className="text-3xl font-black text-emerald-400">{s.v}</p>
                <p className="text-xs text-slate-400 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <div className="max-w-5xl mx-auto px-4 pb-20">

        {/* SECTIONS — cards */}
        <div className="mt-12 space-y-5">
          {page.sections.map((sec, i) => (
            <div key={i} className="rounded-2xl p-6 md:p-8" style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="text-lg md:text-xl font-black text-white mb-3">{sec.title}</h2>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">{sec.content}</p>
            </div>
          ))}
        </div>

        {/* O QUE SEU SITE PODE TER */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-black text-white mb-6 text-center">O que seu site pode ter</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FEATURES.map(f => (
              <div key={f.label} className="flex flex-col items-center gap-2 p-4 rounded-xl text-center" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background:'rgba(16,185,129,0.15)' }}>
                  <f.icon size={18} className="text-emerald-400" strokeWidth={2} />
                </div>
                <p className="text-xs font-bold text-white">{f.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-black text-white mb-6 text-center">Como funciona</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STEPS.map(s => (
              <div key={s.n} className="p-5 rounded-2xl" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-2xl font-black text-emerald-400/30 mb-2">{s.n}</div>
                <h3 className="text-sm font-black text-white mb-1">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PLANOS */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-black text-white mb-6 text-center">Escolha seu plano</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Essencial */}
            <div className="rounded-2xl p-6 md:p-8" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Plano Essencial</div>
              <div className="text-4xl font-black text-white mb-1">R$497</div>
              <div className="text-xs text-slate-500 mb-6">Pagamento único · Sem mensalidade</div>
              <ul className="space-y-2.5 mb-8">
                {['Site de 1 página','Botão de WhatsApp','Design responsivo','Entrega em 48h','Hospedagem 1 ano','7 dias de garantia'].map(i => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <a href={waSend('Quero o Plano Essencial de R$497')} target="_blank" rel="noopener noreferrer"
                 className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black py-3.5 rounded-xl font-black text-sm transition-all">
                <Zap size={16} /> Quero por R$497
              </a>
            </div>

            {/* Premium */}
            <div className="rounded-2xl p-6 md:p-8 relative" style={{ background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.3)' }}>
              <div className="absolute -top-3 left-6 bg-emerald-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Mais Completo</div>
              <div className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-3">Plano Premium</div>
              <div className="text-4xl font-black text-white mb-1">R$997</div>
              <div className="text-xs text-slate-500 mb-6">Pagamento único · Sem mensalidade</div>
              <ul className="space-y-2.5 mb-8">
                {['Várias páginas','Você edita o conteúdo','Google Meu Negócio','Suporte no WhatsApp','Hospedagem vitalícia','7 dias de garantia'].map(i => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <a href={waSend('Quero o Plano Premium de R$997')} target="_blank" rel="noopener noreferrer"
                 className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-sm transition-all border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                <Zap size={16} /> Quero por R$997
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-black text-white mb-6">Perguntas Frequentes</h2>
          <div className="space-y-2">
            {page.faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl overflow-hidden" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-bold text-sm text-white">
                  {faq.q}
                  <ChevronRight size={15} className="text-emerald-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-12 rounded-3xl p-8 md:p-12 text-center" style={{ background:'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.06))', border:'1px solid rgba(16,185,129,0.2)' }}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{page.cta}</h2>
          <p className="text-slate-400 text-sm mb-6">Pagamento único · Sem mensalidade · Garantia de 7 dias</p>
          <a href={waMsg} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-emerald-500/30">
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t px-4 py-6 text-center text-slate-500 text-xs" style={{ borderColor:'rgba(255,255,255,0.05)' }}>
        <p className="font-bold text-slate-400">DigiRocket</p>
        <p className="mt-1">Porto Alegre, RS · Atendemos todo o Brasil · Sites em 48h a partir de R$497</p>
        <p className="mt-1">(51) 98468-9725</p>
      </footer>
    </div>
  );
};
