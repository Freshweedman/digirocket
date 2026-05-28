import React, { useState, useMemo } from 'react';
import { ChevronRight, ArrowLeft, Sparkles, Eye } from 'lucide-react';
import { nicheData, NicheOption } from '../data/nicheData';
import { PhoneFrame } from './PhoneFrame';

type Filter = 'todos' | 'food' | 'beauty' | 'service' | 'health' | 'pro';

const filters: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'food', label: 'Alimentação' },
  { id: 'beauty', label: 'Beleza & Estética' },
  { id: 'service', label: 'Serviços' },
  { id: 'health', label: 'Saúde' },
  { id: 'pro', label: 'Profissionais' },
];

// Map each niche to a category for filtering
const categoryMap: Record<string, Filter> = {
  burger: 'food', pizza: 'food', sushi: 'food', acai: 'food', padaria: 'food',
  doceria: 'food', hortifruti: 'food', bebidas: 'food', pastel: 'food',
  barber: 'beauty', salao: 'beauty', estetica: 'beauty', esmalteria: 'beauty', tattoo: 'beauty',
  pet: 'service', oficina: 'service', arcon: 'service', foto: 'service', moda: 'service',
  imoveis: 'service', solar: 'service', seguros: 'service', celular: 'service',
  dentista: 'health', clinica: 'health', psicologo: 'health', massagem: 'health',
  personal: 'health', nutri: 'health', academia: 'health',
  advogado: 'pro', mentoria: 'pro', curso: 'pro', contabil: 'pro', arquiteto: 'pro',
};

// Persuasive subtitle per niche (overrides default if needed)
const persuasiveCopy: Partial<Record<string, { tagline: string; result: string }>> = {
  burger: { tagline: 'Cardápio digital que transforma fome em pedido em 30s.', result: 'até 3x mais pedidos no WhatsApp' },
  pizza: { tagline: 'A pizzaria que aparece primeiro quando bate a vontade.', result: 'pedidos crescem na sexta e no sábado' },
  sushi: { tagline: 'A experiência japonesa antes mesmo da primeira mordida.', result: 'ticket médio +40% com combos visuais' },
  barber: { tagline: 'Agenda lotada toda semana, sem ligação, sem complicação.', result: 'agendamentos diários no automático' },
  esmalteria: { tagline: 'Suas clientes marcam horário direto pelo celular.', result: 'menos no-show, mais agenda cheia' },
  estetica: { tagline: 'Autoridade visual que justifica seu preço premium.', result: 'leads qualificados todos os dias' },
  dentista: { tagline: 'Pacientes que chegam decididos a fechar o tratamento.', result: 'consultas de avaliação com fila de espera' },
  pet: { tagline: 'Os tutores agendam banho e tosa em 2 toques.', result: 'agenda mensal lotada' },
  oficina: { tagline: 'Aparece no Google quando o cliente precisa urgente.', result: 'orçamentos no WhatsApp 24h' },
  advogado: { tagline: 'Posicionamento de especialista que o caso merece.', result: 'clientes premium prospectados' },
  academia: { tagline: 'Prova social e plano fechado direto pelo celular.', result: 'matrículas todo dia 1º' },
  imoveis: { tagline: 'Catálogo de imóveis com WhatsApp em cada anúncio.', result: 'leads quentes diariamente' },
  solar: { tagline: 'Simulação de economia que vende sozinha.', result: 'orçamentos qualificados toda semana' },
  moda: { tagline: 'Sua coleção em vitrine 24h, com checkout instantâneo.', result: 'vendas fora do horário comercial' },
  nutri: { tagline: 'A consulta começa antes do paciente chegar.', result: 'agenda preenchida 30 dias à frente' },
  contabil: { tagline: 'Posicionamento de autoridade pra empresários sérios.', result: 'leads premium em alta recorrência' },
  arquiteto: { tagline: 'Portfólio premium que justifica seu honorário.', result: 'projetos de alto ticket' },
  arcon: { tagline: 'Cliente acha, pede orçamento e fecha no mesmo dia.', result: 'agenda de instalações cheia' },
  celular: { tagline: 'Catálogo no celular do cliente com 1 clique.', result: 'vendas e assistências o dia todo' },
  fotografo: { tagline: 'Ensaios reservados 60 dias antes da data.', result: 'agenda fechada com antecedência' },
};

const NicheCard: React.FC<{
  niche: NicheOption;
  index: number;
  onClick: () => void;
}> = ({ niche, index, onClick }) => {
  const copy = persuasiveCopy[niche.id];
  const tagline = copy?.tagline || niche.appConfig.heroSubtitle;
  const result = copy?.result;
  const [imgState, setImgState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <button
      onClick={onClick}
      className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-brand-green/40 transition-all duration-500 cursor-pointer text-left flex flex-col reveal-hidden hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(163,230,53,0.25)]"
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      {/* Browser dots header */}
      <div className="bg-slate-950/80 px-3 py-2 flex items-center gap-1 border-b border-white/5">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div>
        <span className="ml-auto text-[8px] font-black uppercase tracking-widest text-brand-green/60 truncate max-w-[80%]">{niche.label.toLowerCase().replace(/\s+/g, '')}.app</span>
      </div>

      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
        {/* Loading skeleton */}
        {imgState === 'loading' && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 animate-pulse"></div>
        )}

        {/* Error fallback — branded gradient + niche icon */}
        {imgState === 'error' && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
            <div className={`w-16 h-16 rounded-2xl ${niche.color} flex items-center justify-center opacity-40`}>
              <niche.icon size={28} strokeWidth={1.5} />
            </div>
          </div>
        )}

        {/* Image */}
        <img
          src={niche.appConfig.heroImage}
          className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
            imgState === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          alt={niche.label}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgState('loaded')}
          onError={() => setImgState('error')}
        />

        <div className={`absolute inset-0 ${niche.color} opacity-25 mix-blend-multiply group-hover:opacity-10 transition-opacity duration-500`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

        {/* Niche icon */}
        <div className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-slate-950/80 backdrop-blur border border-white/10 flex items-center justify-center text-brand-green">
          <niche.icon size={13} strokeWidth={2} />
        </div>

        {/* Result badge */}
        {result && (
          <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur border border-brand-green/30 rounded-lg px-2 py-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-brand-green animate-pulse shadow-[0_0_6px_#a3e635] shrink-0"></div>
              <span className="text-[9px] font-black uppercase tracking-wider text-brand-green truncate">{result}</span>
            </div>
          </div>
        )}

        {/* Hover Eye */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-11 h-11 bg-brand-green rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_25px_rgba(163,230,53,0.6)]">
            <Eye size={18} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-white font-black text-sm md:text-base tracking-tight leading-tight">{niche.label}</h3>
        <p className="text-slate-400 text-[11px] md:text-xs font-medium leading-snug line-clamp-2 flex-grow">
          {tagline}
        </p>

        <div className="pt-2 mt-auto border-t border-white/5 flex items-center justify-between text-brand-green font-black text-[9px] uppercase tracking-[0.2em] group-hover:text-white transition-all">
          <span>Ver demo</span>
          <ChevronRight size={12} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
};

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

  return (
    <>
      <section id="nichos" className="py-24 md:py-32 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <div className="text-center mb-10 md:mb-14 space-y-4 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
              <Sparkles size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">+200 sites entregues</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Templates que <span className="text-brand-green">já dominam o mercado</span>.
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Cada estrutura é desenhada para o comportamento do seu cliente.{' '}
              <span className="text-white font-bold">Você escolhe o nicho. A gente entrega a máquina.</span>
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
                    ? 'bg-brand-green text-slate-950 border-brand-green shadow-[0_0_25px_rgba(163,230,53,0.35)]'
                    : 'bg-slate-900/40 text-white/60 border-white/10 hover:border-brand-green/40 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* GRID — denser */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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
              Não encontrou seu nicho? Tudo bem. Criamos a estrutura sob medida pro seu negócio.
            </p>
            <button
              onClick={() =>
                window.open(
                  'https://wa.me/5551984689725?text=Olá, quero um site exclusivo para meu nicho.',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="px-10 py-5 rounded-2xl bg-brand-green text-slate-950 font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] hover:scale-105 hover:bg-white flex items-center gap-3"
            >
              <Sparkles size={16} />
              Quero um site exclusivo
            </button>
          </div>
        </div>
      </section>

      {/* PREVIEW MODAL */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col animate-fade-in-up">
          {/* Top Bar */}
          <div className="w-full px-4 md:px-8 h-16 md:h-20 flex items-center justify-between border-b border-white/10 bg-slate-950 shrink-0">
            <button
              onClick={closePreview}
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <span className="font-black text-[10px] md:text-xs uppercase tracking-widest hidden sm:inline">Voltar</span>
            </button>

            <div className="flex flex-col items-center">
              <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest">{selectedNicheData.label}</span>
              <span className="text-brand-green font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                Preview ao vivo
              </span>
            </div>

            <button
              onClick={() => {
                closePreview();
                setTimeout(() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="bg-brand-green text-slate-950 px-4 md:px-7 py-2.5 md:py-3 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
            >
              <span className="hidden sm:inline">Garantir meu site</span>
              <span className="sm:hidden">Quero</span>
            </button>
          </div>

          {/* Phone area — always fills the remaining viewport */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-slate-950">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/[0.06] blur-[180px] rounded-full pointer-events-none"></div>
            <div className="w-full max-w-[300px] md:max-w-[340px] relative z-10 animate-fade-in-up">
              <PhoneFrame niche={selectedNicheData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
