import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, ArrowLeft, Sparkles, Eye, MessageCircle } from 'lucide-react';
import { nicheData, NicheOption } from '../data/nicheData';
import { PhoneFrame } from './PhoneFrame';
import { DeliveryApp } from './apps/DeliveryApp';
import { BookingApp } from './apps/BookingApp';
import { VSLApp } from './apps/VSLApp';
import { LeadApp } from './apps/LeadApp';
import { CatalogApp } from './apps/CatalogApp';
import { QuizApp } from './apps/QuizApp';

type Filter = 'todos' | 'food' | 'beauty' | 'service' | 'health' | 'pro';

const filters: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'food', label: 'Alimentação' },
  { id: 'beauty', label: 'Beleza & Estética' },
  { id: 'service', label: 'Serviços' },
  { id: 'health', label: 'Saúde' },
  { id: 'pro', label: 'Profissionais' },
];

const categoryMap: Record<string, Filter> = {
  burger: 'food', pizza: 'food', sushi: 'food', acai: 'food', padaria: 'food',
  doceria: 'food', hortifruti: 'food', bebidas: 'food', pastel: 'food',
  delivery: 'food', adega: 'food',
  barber: 'beauty', salao: 'beauty', estetica: 'beauty', esmalteria: 'beauty', tattoo: 'beauty',
  pet: 'service', oficina: 'service', arcon: 'service', foto: 'service', moda: 'service',
  imoveis: 'service', corretorImoveis: 'service', solar: 'service', seguros: 'service', celular: 'service',
  dentista: 'health', clinica: 'health', psicologo: 'health', massagem: 'health',
  personal: 'health', nutri: 'health', academia: 'health', planoSaude: 'health',
  advogado: 'pro', mentoria: 'pro', curso: 'pro', contabil: 'pro', arquiteto: 'pro',
};

const persuasiveCopy: Partial<Record<string, { tagline: string; result: string }>> = {
  burger: { tagline: 'Cardápio digital que transforma fome em pedido em 30s.', result: 'até 3x mais pedidos' },
  pizza: { tagline: 'A pizzaria que aparece primeiro quando bate a vontade.', result: 'pedidos crescem na sexta' },
  sushi: { tagline: 'A experiência japonesa antes mesmo da primeira mordida.', result: 'ticket médio +40%' },
  acai: { tagline: 'Açaí no celular do cliente em 2 toques. Pedido na hora.', result: 'pedidos toda tarde' },
  padaria: { tagline: 'Cliente pede o pão fresquinho antes de sair de casa.', result: 'fila no balcão diminui' },
  doceria: { tagline: 'Encomenda fácil pelo celular, sem precisar ligar.', result: 'agenda lotada em datas' },
  hortifruti: { tagline: 'Cesta de frutas chega na porta do cliente, fresquinha.', result: 'novos clientes toda semana' },
  bebidas: { tagline: 'Cerveja gelada na porta em 30 minutos.', result: 'pedidos noturnos sem parar' },
  pastel: { tagline: 'Pastel quentinho a um clique do seu cliente.', result: 'mais pedidos no almoço' },
  delivery: { tagline: 'Cliente pede, você entrega. Tudo no mesmo lugar.', result: 'mais entregas todo dia' },
  adega: { tagline: 'Vinho perfeito direto na porta do cliente.', result: 'ticket médio premium' },
  barber: { tagline: 'Agenda lotada toda semana, sem ligação, sem complicação.', result: 'agendamentos no automático' },
  salao: { tagline: 'Cliente marca corte e cor pelo celular, sem complicação.', result: 'menos no-show' },
  esmalteria: { tagline: 'Suas clientes marcam horário direto pelo celular.', result: 'agenda mais cheia' },
  estetica: { tagline: 'Autoridade visual que justifica seu preço premium.', result: 'leads qualificados todo dia' },
  tattoo: { tagline: 'Portfólio que vende a sessão antes da consulta.', result: 'agenda fechada com antecedência' },
  dentista: { tagline: 'Pacientes que chegam decididos a fechar o tratamento.', result: 'consultas com fila de espera' },
  clinica: { tagline: 'Cliente acha sua clínica, marca consulta e chega no horário.', result: 'consultas todos os dias' },
  psicologo: { tagline: 'Pacientes marcam sessão com sigilo, sem precisar ligar.', result: 'agenda 30 dias à frente' },
  massagem: { tagline: 'Cliente agenda relaxar enquanto trabalha. Em 1 toque.', result: 'agenda cheia no fim de semana' },
  personal: { tagline: 'Aluno acha você antes de baixar app de academia.', result: 'novos alunos toda semana' },
  nutri: { tagline: 'A consulta começa antes do paciente chegar.', result: 'agenda preenchida 30 dias à frente' },
  academia: { tagline: 'Prova social e plano fechado direto pelo celular.', result: 'matrículas todo dia 1º' },
  planoSaude: { tagline: 'Família busca proteção, recebe cotação na hora.', result: 'cotações qualificadas todo dia' },
  pet: { tagline: 'Os tutores agendam banho e tosa em 2 toques.', result: 'agenda mensal lotada' },
  oficina: { tagline: 'Aparece no Google quando o cliente precisa urgente.', result: 'orçamentos no WhatsApp 24h' },
  arcon: { tagline: 'Cliente acha, pede orçamento e fecha no mesmo dia.', result: 'agenda de instalações cheia' },
  foto: { tagline: 'Ensaios reservados 60 dias antes da data.', result: 'agenda fechada com antecedência' },
  moda: { tagline: 'Sua coleção em vitrine 24h, com checkout instantâneo.', result: 'vendas fora do horário comercial' },
  imoveis: { tagline: 'Catálogo de imóveis com WhatsApp em cada anúncio.', result: 'leads quentes diariamente' },
  corretorImoveis: { tagline: 'Você como autoridade, com imóveis e WhatsApp num clique.', result: 'visitas agendadas todo dia' },
  solar: { tagline: 'Simulação de economia que vende sozinha.', result: 'orçamentos qualificados toda semana' },
  seguros: { tagline: 'Cotação rápida que fecha venda no mesmo dia.', result: 'mais clientes pra sua corretora' },
  celular: { tagline: 'Catálogo no celular do cliente com 1 clique.', result: 'vendas e assistências o dia todo' },
  advogado: { tagline: 'Posicionamento de especialista que o caso merece.', result: 'clientes premium prospectados' },
  mentoria: { tagline: 'Mentorados qualificados chegam decididos a comprar.', result: 'turma fechada com antecedência' },
  curso: { tagline: 'Aluno assiste a aula grátis e já se inscreve.', result: 'matrículas crescendo todo lançamento' },
  contabil: { tagline: 'Posicionamento de autoridade pra empresários sérios.', result: 'leads premium em alta recorrência' },
  arquiteto: { tagline: 'Portfólio premium que justifica seu honorário.', result: 'projetos de alto ticket' },
};

const NicheCard: React.FC<{
  niche: NicheOption;
  index: number;
  onClick: () => void;
}> = ({ niche, index, onClick }) => {
  const copy = persuasiveCopy[niche.id];
  const tagline = copy?.tagline || niche.appConfig.heroSubtitle;
  const result = copy?.result;

  return (
    <button
      onClick={onClick}
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-green/40 transition-all duration-300 cursor-pointer text-left flex flex-col reveal-hidden hover:-translate-y-1.5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(163,230,53,0.3)]"
      style={{ transitionDelay: `${(index % 8) * 50}ms` }}
    >
      {/* Card with blurred background image */}
      <div className="aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/3] relative overflow-hidden">
        {/* Background image — blurred */}
        {niche.appConfig.heroImage && (
          <img
            src={niche.appConfig.heroImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] brightness-[0.4] group-hover:scale-125 group-hover:brightness-[0.5] transition-all duration-700"
          />
        )}
        {/* Fallback gradient if no image */}
        {!niche.appConfig.heroImage && (
          <div className={`absolute inset-0 bg-gradient-to-br ${niche.color.split(' ')[0].replace('bg-', 'from-')} to-slate-900`}></div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/30 pointer-events-none"></div>

        {/* Top badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-1.5 z-10">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] text-white/90">Demo</span>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/15">
            <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-white/70">{niche.template}</span>
          </div>
        </div>

        {/* Center icon + label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
            <niche.icon size={24} strokeWidth={1.4} className="sm:w-7 sm:h-7 text-white drop-shadow-lg" />
          </div>
          <p className="mt-2 sm:mt-3 text-white font-black text-xs sm:text-sm text-center px-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
            {niche.label}
          </p>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-10 z-10">
          <p className="text-white/70 text-[8px] sm:text-[9px] font-medium leading-snug line-clamp-2 mb-1.5">
            {tagline}
          </p>
          {result && (
            <div className="inline-flex items-center gap-1 bg-brand-green/20 border border-brand-green/40 rounded-full px-2 py-0.5">
              <div className="w-1 h-1 rounded-full bg-brand-green animate-pulse shrink-0"></div>
              <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider text-brand-green truncate">{result}</span>
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 bg-slate-950/50">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-green rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_30px_rgba(163,230,53,0.6)] scale-75 group-hover:scale-100 transition-transform duration-300">
            <Eye size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </button>
  );
};

// Auto-scrolling niche carousel component - REMOVED to avoid duplication

export const NicheDemo: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('todos');
  const [selectedNiche, setSelectedNiche] = useState('burger');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (activeFilter === 'todos') return nicheData;
    return nicheData.filter((n) => categoryMap[n.id] === activeFilter);
  }, [activeFilter]);

  const visible = useMemo(() => {
    if (showAll || activeFilter !== 'todos') return filtered;
    return filtered.slice(0, 8);
  }, [filtered, showAll, activeFilter]);

  const selectedNicheData = nicheData.find((n) => n.id === selectedNiche) || nicheData[0];

  const handleNicheClick = (nicheId: string) => {
    setSelectedNiche(nicheId);
    setIsPreviewOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    document.body.style.overflow = '';
  };

  const renderApp = (niche: NicheOption) => {
    switch (niche.template) {
      case 'delivery': return <DeliveryApp config={niche.appConfig} />;
      case 'booking': return <BookingApp config={niche.appConfig} />;
      case 'vsl': return <VSLApp config={niche.appConfig} />;
      case 'lead': return <LeadApp config={niche.appConfig} />;
      case 'catalog': return <CatalogApp config={niche.appConfig} />;
      case 'quiz': return <QuizApp config={niche.appConfig} />;
      default: return <DeliveryApp config={niche.appConfig} />;
    }
  };

  return (
    <>
      <section id="nichos" className="py-24 md:py-32 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <div className="text-center mb-10 md:mb-14 space-y-4 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
              <Sparkles size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">+200 negócios no ar em todo o Brasil</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Veja como fica o site <br className="hidden md:block" />
              <span className="text-brand-green">do seu negócio.</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Cada modelo foi testado em comércio real. <span className="text-white font-bold">Clica no seu nicho pra ver ao vivo.</span>
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12 reveal-hidden">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  setShowAll(false);
                }}
                className={`px-4 md:px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.18em] transition-all border ${
                  activeFilter === f.id
                    ? 'bg-brand-green text-slate-950 border-brand-green shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                    : 'bg-slate-900/40 text-white/60 border-white/10 hover:border-brand-green/40 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {visible.map((niche, idx) => (
              <NicheCard key={niche.id} niche={niche} index={idx} onClick={() => handleNicheClick(niche.id)} />
            ))}
          </div>

          {/* SHOW MORE */}
          {activeFilter === 'todos' && filtered.length > 8 && !showAll && (
            <div className="mt-10 flex justify-center reveal-hidden">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-4 rounded-2xl border-2 border-brand-green/30 hover:bg-brand-green hover:text-slate-950 hover:border-brand-green text-brand-green font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3 group"
              >
                Ver todos os {filtered.length} modelos
                <ChevronRight size={14} strokeWidth={3} className="rotate-90 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 md:mt-20 flex flex-col items-center gap-4 reveal-hidden">
            <p className="text-slate-400 text-sm md:text-base font-medium text-center max-w-xl">
              Não viu o seu tipo de negócio? A gente faz sob medida pra qualquer ramo.
            </p>
            <a
              href="https://wa.me/5551984689725?text=Olá%2C+vi+os+modelos+de+site+e+quero+um+para+meu+negócio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-brand-green text-slate-950 font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] hover:scale-105 hover:bg-white"
            >
              <MessageCircle size={16} fill="currentColor" />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PREVIEW MODAL */}
      {isPreviewOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col" style={{ animation: 'fade-in-up 0.3s ease-out' }}>
          {/* Top Bar */}
          <div className="w-full px-4 md:px-6 h-14 flex items-center justify-between border-b border-white/10 bg-slate-950/98 backdrop-blur-md shrink-0 relative z-20">
            <button
              onClick={closePreview}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                <ArrowLeft size={15} />
              </div>
              <span className="font-black text-[10px] uppercase tracking-widest hidden sm:inline">Voltar</span>
            </button>

            <div className="flex flex-col items-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">{selectedNicheData.label}</span>
              <span className="text-brand-green font-black text-[8px] uppercase tracking-[0.3em] mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                Preview ao vivo
              </span>
            </div>

            <a
              href={`https://wa.me/5551984689725?text=Olá%2C+gostei+do+modelo+${encodeURIComponent(selectedNicheData.label)}+e+quero+saber+mais.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-slate-950 px-4 md:px-5 py-2 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
            >
              <span className="hidden sm:inline">Fale Conosco</span>
              <span className="sm:hidden flex items-center gap-1"><MessageCircle size={14} fill="currentColor" /> Falar</span>
            </a>
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0 relative overflow-hidden bg-slate-900">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-brand-green/[0.03] blur-[120px] rounded-full"></div>
            </div>

            {/* DESKTOP — scrollable site preview centered */}
            <div className="hidden md:flex relative z-10 h-full w-full items-start justify-center overflow-y-auto">
              <div className="w-full max-w-[420px] min-h-full bg-white shadow-[0_0_60px_-10px_rgba(163,230,53,0.15)] overflow-hidden">
                {/* Browser chrome */}
                <div className="sticky top-0 z-50 bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center gap-2 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-2 bg-white rounded-md px-2.5 py-1 text-[10px] font-mono text-slate-500 border border-slate-200 truncate flex items-center gap-1.5">
                    <span className="text-green-500 text-[10px]">🔒</span>
                    {selectedNicheData.label.toLowerCase().replace(/\s+/g, '').replace(/[&]/g, 'e')}.com.br
                  </div>
                </div>
                {/* App content */}
                <div className="w-full">
                  {renderApp(selectedNicheData)}
                </div>
              </div>
            </div>

            {/* MOBILE — phone frame centered, fixed size, no overflow */}
            <div className="flex md:hidden relative z-10 h-full w-full items-center justify-center p-4">
              <div
                className="relative"
                style={{
                  height: 'min(calc(100dvh - 4rem), 580px)',
                  aspectRatio: '9 / 19',
                  maxWidth: '280px',
                  width: '100%',
                }}
              >
                <PhoneFrame niche={selectedNicheData} />
              </div>
            </div>
          </div>

          {/* Bottom CTA bar — mobile only */}
          <div className="md:hidden shrink-0 px-4 py-3 bg-slate-950/98 border-t border-white/10">
            <a
              href={`https://wa.me/5551984689725?text=Olá%2C+gostei+do+modelo+${encodeURIComponent(selectedNicheData.label)}+e+quero+saber+mais.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-green text-slate-950 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle size={16} fill="currentColor" />
              Quero um site assim — Fale Conosco
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
