import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Sparkles, Play, Calendar, ShoppingBag, FileText, ArrowLeft, MessageCircle,
  Rocket, Eye, ArrowRight, X,
} from 'lucide-react';
import { nicheData } from '../data/nicheData';
import { PhoneFrame } from './PhoneFrame';
import { DeliveryApp } from './apps/DeliveryApp';
import { BookingApp } from './apps/BookingApp';
import { VSLApp } from './apps/VSLApp';
import { LeadApp } from './apps/LeadApp';
import { CatalogApp } from './apps/CatalogApp';
import { QuizApp } from './apps/QuizApp';

type Template = {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  desc: string;
  examples: string[];
  gradient: string;
  border: string;
  nicheId: string;
};

const templates: Template[] = [
  {
    id: 'delivery',
    icon: ShoppingBag,
    title: 'Cardapio & Delivery',
    subtitle: 'Pedidos direto no WhatsApp',
    desc: 'Cardapio digital com fotos, precos, categorias e botao de pedir. Perfeito pra food service.',
    examples: ['Hamburgueria', 'Pizzaria', 'Sushi', 'Acai', 'Padaria'],
    gradient: 'from-orange-500 via-red-500 to-rose-600',
    border: 'border-orange-500/20 hover:border-orange-400/50',
    nicheId: 'burger',
  },
  {
    id: 'booking',
    icon: Calendar,
    title: 'Agendamento Online',
    subtitle: 'Agenda lotada no automatico',
    desc: 'Servicos, equipe, horarios disponiveis e agendamento direto. Zero no-show.',
    examples: ['Barbearia', 'Salao', 'Estetica', 'Pet Shop', 'Oficina'],
    gradient: 'from-fuchsia-500 via-purple-600 to-indigo-700',
    border: 'border-fuchsia-500/20 hover:border-fuchsia-400/50',
    nicheId: 'barber',
  },
  {
    id: 'vsl',
    icon: Play,
    title: 'VSL & Autoridade',
    subtitle: 'Video que vende sozinho',
    desc: 'Pagina de vendas com video, prova social, garantia e CTA forte. Converte visitante em cliente.',
    examples: ['Academia', 'Advocacia', 'Mentoria', 'Curso', 'Personal'],
    gradient: 'from-blue-600 via-indigo-700 to-violet-800',
    border: 'border-blue-500/20 hover:border-blue-400/50',
    nicheId: 'academia',
  },
  {
    id: 'lead',
    icon: FileText,
    title: 'Captacao de Leads',
    subtitle: 'Formulario + WhatsApp',
    desc: 'Landing page com formulario, beneficios, prova social e CTA direto pro WhatsApp.',
    examples: ['Odontologia', 'Clinica', 'Psicologia', 'Nutricionista'],
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    border: 'border-emerald-500/20 hover:border-emerald-400/50',
    nicheId: 'dentista',
  },
  {
    id: 'catalog',
    icon: ShoppingBag,
    title: 'Catalogo & Vitrine',
    subtitle: 'Loja online no WhatsApp',
    desc: 'Catalogo com grid de produtos, filtros, busca e botao de comprar direto.',
    examples: ['Moda', 'Celulares', 'Imobiliaria', 'Joias'],
    gradient: 'from-zinc-600 via-slate-700 to-zinc-900',
    border: 'border-zinc-500/20 hover:border-zinc-400/50',
    nicheId: 'moda',
  },
  {
    id: 'quiz',
    icon: FileText,
    title: 'Quiz & Simulador',
    subtitle: 'Qualifica antes de vender',
    desc: 'Perguntas interativas que qualificam o lead e entregam resultado personalizado.',
    examples: ['Energia Solar', 'Seguros', 'Plano de Saude'],
    gradient: 'from-yellow-500 via-amber-600 to-orange-700',
    border: 'border-yellow-500/20 hover:border-yellow-400/50',
    nicheId: 'solar',
  },
];

export const Portfolio: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('delivery');

  const openPreview = (templateId: string) => {
    setActiveTemplate(templateId);
    setPreviewOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setPreviewOpen(false);
    document.body.style.overflow = '';
  };

  const activeNiche = nicheData.find(
    (n) => n.id === templates.find((t) => t.id === activeTemplate)?.nicheId
  ) || nicheData[0];

  const renderApp = () => {
    switch (activeTemplate) {
      case 'delivery': return <DeliveryApp config={activeNiche.appConfig} />;
      case 'booking': return <BookingApp config={activeNiche.appConfig} />;
      case 'vsl': return <VSLApp config={activeNiche.appConfig} />;
      case 'lead': return <LeadApp config={activeNiche.appConfig} />;
      case 'catalog': return <CatalogApp config={activeNiche.appConfig} />;
      case 'quiz': return <QuizApp config={activeNiche.appConfig} />;
      default: return <DeliveryApp config={activeNiche.appConfig} />;
    }
  };

  // Mini preview component
  const MiniPreview: React.FC<{ template: Template }> = ({ template }) => {
    const niche = nicheData.find((n) => n.id === template.nicheId) || nicheData[0];
    
    return (
      <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-950 border border-white/10">
        {/* Phone mockup with real preview */}
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
          <div className="relative w-28 sm:w-32 h-full max-h-36 sm:max-h-44 bg-slate-900 rounded-2xl border-2 border-slate-700 shadow-2xl overflow-hidden">
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3 sm:h-4 bg-slate-950 rounded-b-2xl z-10"></div>
            
            {/* App preview - scaled down */}
            <div className="w-full h-full overflow-hidden" style={{ transform: 'scale(0.35)', transformOrigin: 'top left', width: '285%', height: '285%' }}>
              {template.id === 'delivery' && <DeliveryApp config={niche.appConfig} />}
              {template.id === 'booking' && <BookingApp config={niche.appConfig} />}
              {template.id === 'vsl' && <VSLApp config={niche.appConfig} />}
              {template.id === 'lead' && <LeadApp config={niche.appConfig} />}
              {template.id === 'catalog' && <CatalogApp config={niche.appConfig} />}
              {template.id === 'quiz' && <QuizApp config={niche.appConfig} />}
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-20 mix-blend-overlay pointer-events-none`}></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-2 shadow-[0_0_30px_rgba(163,230,53,0.6)]">
              <Eye size={18} className="sm:w-5 sm:h-5 text-slate-950" strokeWidth={2.5} />
            </div>
            <p className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Ver ao vivo</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/[0.04] blur-[200px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-14 md:mb-18 space-y-4 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
              <Rocket size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">6 modelos testados e validados</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Sites que já estão <span className="text-brand-green">vendendo todo dia</span>.
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Clica em qualquer um pra ver o preview ao vivo no celular.
            </p>
          </div>

          {/* Template Cards Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {templates.map((t, i) => (
              <button
                key={t.id}
                onClick={() => openPreview(t.id)}
                className={`group relative text-left rounded-3xl border ${t.border} bg-slate-900/50 backdrop-blur overflow-hidden transition-all duration-300 reveal-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(163,230,53,0.2)]`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Mini preview at top */}
                <MiniPreview template={t} />

                {/* Content */}
                <div className="p-4 sm:p-5">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                    <div className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-lg`}>
                      <t.icon size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-black text-white mb-0.5 leading-tight">{t.title}</h3>
                      <p className="text-brand-green text-[8px] sm:text-[9px] font-black uppercase tracking-widest">{t.subtitle}</p>
                    </div>
                  </div>

                  {/* Desc */}
                  <p className="text-slate-400 text-[11px] sm:text-xs font-medium leading-relaxed mb-2.5 sm:mb-3">{t.desc}</p>

                  {/* Examples */}
                  <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                    {t.examples.map((ex) => (
                      <span key={ex} className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                        {ex}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-brand-green text-[9px] sm:text-[10px] font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                    <Eye size={11} className="sm:w-3 sm:h-3" />
                    <span>Ver preview completo</span>
                    <ArrowRight size={10} className="sm:w-[11px] sm:h-[11px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </button>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col items-center gap-4 reveal-hidden">
            <p className="text-slate-400 text-sm md:text-base font-medium text-center max-w-xl">
              Quer um desses pro seu negócio? Manda mensagem que a gente mostra como fica.
            </p>
            <a
              href="https://wa.me/5551984689725?text=Oi%2C+quero+ver+um+modelo+de+site+pro+meu+neg%C3%B3cio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-slate-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] hover:scale-105 hover:bg-white flex items-center gap-3"
            >
              <MessageCircle size={16} fill="currentColor" />
              Fale Conosco no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-sm flex flex-col" style={{ animation: 'fade-in-up 0.25s ease-out' }}>
          {/* Top bar */}
          <div className="w-full px-4 md:px-6 h-14 flex items-center justify-between border-b border-white/10 bg-slate-950/98 shrink-0 z-20">
            <button onClick={closePreview} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                <ArrowLeft size={15} />
              </div>
              <span className="font-black text-[10px] uppercase tracking-widest hidden sm:inline">Voltar</span>
            </button>

            <div className="flex flex-col items-center">
              <span className="text-white font-black text-xs uppercase tracking-widest">
                {templates.find((t) => t.id === activeTemplate)?.title}
              </span>
              <span className="text-brand-green font-black text-[8px] uppercase tracking-[0.3em] mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                Preview ao vivo
              </span>
            </div>

            <a
              href="https://wa.me/5551984689725?text=Oi%2C+gostei+do+modelo+e+quero+saber+mais."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-slate-950 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
            >
              <span className="hidden sm:inline">Fale Conosco</span>
              <span className="sm:hidden">Quero</span>
            </a>
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0 relative overflow-hidden">
            {/* Desktop */}
            <div className="hidden md:flex relative z-10 h-full w-full items-start justify-center overflow-y-auto bg-slate-900/30">
              <div className="w-full max-w-[420px] min-h-full bg-white shadow-[0_0_80px_-10px_rgba(163,230,53,0.1)] overflow-hidden">
                <div className="sticky top-0 z-50 bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center gap-2 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-2 bg-white rounded-md px-2.5 py-1 text-[10px] font-mono text-slate-500 border border-slate-200 truncate flex items-center gap-1.5">
                    <span className="text-green-500">🔒</span>
                    seunegocio.com.br
                  </div>
                </div>
                <div className="w-full">{renderApp()}</div>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden relative z-10 h-full w-full items-center justify-center p-4">
              <div className="relative" style={{ height: 'min(calc(100dvh - 4rem), 580px)', aspectRatio: '9 / 19', maxWidth: '280px', width: '100%' }}>
                <PhoneFrame niche={activeNiche} />
              </div>
            </div>
          </div>

          {/* Bottom CTA mobile */}
          <div className="md:hidden shrink-0 px-4 py-3 bg-slate-950/98 border-t border-white/10">
            <a
              href="https://wa.me/5551984689725?text=Oi%2C+gostei+do+modelo+e+quero+saber+mais."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-green text-slate-950 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle size={16} fill="currentColor" />
              Quero um site assim
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
