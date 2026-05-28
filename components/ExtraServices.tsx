import React from 'react';
import {
  Search, Globe, Instagram, Sparkles, FastForward, Palette,
  PenTool, CheckCircle2, Megaphone, Bot, Video, Compass, Smartphone, MonitorSmartphone,
  Target, Rocket, ArrowRight, ShieldCheck, Zap
} from 'lucide-react';

type Service = {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  badge: string;
  pain: string;
  desc: string;
  features: string[];
  ctaLabel: string;
  ctaMessage: string;
  highlight?: boolean;
};

const services: Service[] = [
  {
    icon: Instagram,
    title: 'Gestão de Mídias Sociais',
    badge: 'Presença Digital',
    pain: 'Cansado de não saber o que postar e ver seu perfil parado enquanto o concorrente cresce?',
    desc: 'Cuidamos do seu Instagram, TikTok e Facebook com estratégia, copy e arte. Conteúdo autêntico que vira venda.',
    features: [
      'Personalização completa do perfil',
      'Criação de legendas e copy',
      'Artes profissionais (8 a 16 posts/mês)',
      'Roteiros, gravação e edição de Reels',
      'Postagem programada automática',
      'Aprovação prévia em painel exclusivo',
    ],
    ctaLabel: 'Quero gerenciar',
    ctaMessage: 'Olá, quero gerenciar minhas redes sociais com a DigiRocket.',
  },
  {
    icon: Megaphone,
    title: 'Gestão de Tráfego Pago',
    badge: 'Campanhas Estratégicas',
    pain: 'Cansado de jogar dinheiro fora em anúncios que não vendem nada?',
    desc: 'Anúncios no Google, Meta (Facebook/Instagram) e TikTok com otimização diária e foco em ROI real.',
    features: [
      'Configuração completa de campanhas',
      'Estratégia personalizada por nicho',
      'Otimizações diárias de performance',
      'Relatórios semanais detalhados',
      'Análise de ROI e CAC',
      'Gestão profissional do orçamento',
      'Suporte contínuo e ajustes',
    ],
    ctaLabel: 'Quero vender mais',
    ctaMessage: 'Olá, quero contratar gestão de tráfego pago com a DigiRocket.',
    highlight: true,
  },
  {
    icon: Bot,
    title: 'Automação WhatsApp',
    badge: 'Atendimento 24h',
    pain: 'Cansado de perder cliente por não responder a tempo? Ou de atender o WhatsApp na madrugada?',
    desc: 'Transforme seu WhatsApp Business em uma central de vendas que atende sozinha enquanto você dorme.',
    features: [
      'Configuração do WhatsApp Business',
      'Fluxo de atendimento automatizado',
      'Respostas rápidas personalizadas',
      'Organização e qualificação de leads',
      'Agendamento de reuniões automático',
      'Follow-up programado',
      'Relatórios de atendimento',
    ],
    ctaLabel: 'Automatizar agora',
    ctaMessage: 'Olá, quero automatizar meu WhatsApp Business.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Desenvolvimento de Sites',
    badge: 'Presença Profissional',
    pain: 'Cansado de não parecer profissional no digital e perder venda pra quem tem site?',
    desc: 'Sites institucionais, landing pages e e-commerce com design moderno, SEO técnico e velocidade de elite.',
    features: [
      'Design responsivo (mobile-first)',
      'SEO técnico on-page',
      'Integração com redes sociais',
      'Formulários e captação de leads',
      'Painel administrativo simples',
      'Hospedagem e domínio inclusos',
      'Suporte técnico contínuo',
    ],
    ctaLabel: 'Quero meu site',
    ctaMessage: 'Olá, quero criar meu site com a DigiRocket.',
  },
  {
    icon: Video,
    title: 'Produção de Vídeos',
    badge: 'Conteúdo Audiovisual',
    pain: 'Cansado de gravar reels que ninguém vê e parecer amador na frente da câmera?',
    desc: 'Reels, VSLs e vídeos institucionais com roteiro, gravação e edição. Pensados para vender, não só para encantar.',
    features: [
      'Roteiro persuasivo personalizado',
      'Gravação profissional',
      'Edição com cortes dinâmicos',
      'Trilha sonora licenciada',
      'Legendas e textos animados',
      'Adaptação para todas as plataformas',
    ],
    ctaLabel: 'Produzir vídeos',
    ctaMessage: 'Olá, quero produzir vídeos com a DigiRocket.',
  },
  {
    icon: Compass,
    title: 'Consultoria Digital',
    badge: 'Planejamento Estratégico',
    pain: 'Cansado de tentar tudo no escuro e não saber o que realmente funciona pro seu negócio?',
    desc: 'Diagnóstico completo do seu negócio digital com plano de ação mensal e acompanhamento próximo.',
    features: [
      'Análise da concorrência',
      'Definição de público-alvo',
      'Planejamento estratégico 360°',
      'Cronograma de execução',
      'Definição de métricas e KPIs',
      'Acompanhamento mensal',
    ],
    ctaLabel: 'Quero consultoria',
    ctaMessage: 'Olá, quero uma consultoria estratégica com a DigiRocket.',
  },
];

const upgrades = [
  {
    icon: Search,
    title: 'SEO + Google Maps',
    features: ['Otimização do perfil', 'Cadastro de produtos', 'Gestão de fotos', 'Meta: Top 1 no Maps'],
  },
  {
    icon: Palette,
    title: 'Identidade Visual',
    features: ['Paleta de cores', 'Tipografia', 'Social Media Kit', 'Brand Book'],
  },
  {
    icon: PenTool,
    title: 'Logo Profissional',
    features: ['Design exclusivo', 'Vetor (alta resolução)', 'Manual da marca', 'Entrega expressa'],
  },
  {
    icon: FastForward,
    title: 'Velocidade Máxima',
    features: ['Otimização de imagens', 'Cache avançado', 'CDN global', 'LCP < 1.0s'],
  },
  {
    icon: Smartphone,
    title: 'Landing p/ Ads',
    features: ['Página de campanha', 'Pixel + Tags', 'Foco em conversão', 'Teste A/B'],
  },
  {
    icon: Globe,
    title: 'Domínio + E-mail Pro',
    features: ['Domínio .com.br', 'E-mails @suaempresa', 'Configuração DNS', 'SSL incluso'],
  },
];

const whatsappBase = 'https://wa.me/5551984689725';

export const ExtraServices: React.FC = () => {
  const open = (msg: string) =>
    window.open(`${whatsappBase}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');

  return (
    <section id="servicos" className="py-24 md:py-32 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-8 reveal-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
              <Sparkles size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Ecossistema 360°</span>
            </div>
            <h2 className="font-sans text-3xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Soluções completas para <br />
              <span className="text-brand-green">dominar o digital.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
              Site é só o começo. Aqui você tem tudo que precisa pra vender mais: tráfego, conteúdo, automação,
              vídeo e estratégia. <span className="text-white font-bold">Tudo no mesmo lugar.</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex items-center gap-3 text-white/80">
              <div className="flex">
                {['A', 'B', 'C'].map((l, i) => (
                  <div
                    key={l}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-green to-emerald-500 border-2 border-brand-dark flex items-center justify-center font-black text-slate-950 text-xs"
                    style={{ marginLeft: i > 0 ? '-10px' : 0 }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">+200 projetos entregues</span>
            </div>
            <div className="flex items-center gap-2 text-brand-green text-[10px] md:text-xs font-black uppercase tracking-widest">
              <ShieldCheck size={14} /> 5 anos de mercado
            </div>
          </div>
        </div>

        {/* MAIN SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-20">
          {services.map((s, idx) => (
            <article
              key={s.title}
              className={`group relative p-7 md:p-8 rounded-3xl border transition-all duration-500 flex flex-col reveal-hidden overflow-hidden hover:-translate-y-2 ${
                s.highlight
                  ? 'bg-gradient-to-br from-brand-green/15 via-slate-900/60 to-slate-900/40 border-brand-green/40 shadow-[0_0_60px_rgba(163,230,53,0.08)]'
                  : 'bg-slate-900/50 backdrop-blur-xl border-white/5 hover:border-brand-green/40'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {s.highlight && (
                <div className="absolute top-5 right-5 bg-brand-green text-slate-950 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(163,230,53,0.4)]">
                  Mais procurado
                </div>
              )}

              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-brand-green/30 transition-colors opacity-30"></div>

              <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-slate-950/60 text-brand-green border border-white/5 self-start group-hover:bg-brand-green group-hover:text-slate-950 transition-all">
                <s.icon size={24} strokeWidth={1.6} />
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green/70 mb-2">{s.badge}</span>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">{s.title}</h3>
              <p className="text-brand-green/90 italic font-medium text-xs md:text-sm leading-relaxed mb-3 border-l-2 border-brand-green/30 pl-3">
                "{s.pain}"
              </p>
              <p className="text-slate-400 font-medium leading-relaxed mb-5 text-sm">{s.desc}</p>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-slate-300 text-sm font-medium group/li">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="group-hover/li:text-white transition-colors">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-4 pt-5 border-t border-white/5">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 font-black mb-0.5">Investimento</p>
                  <p className="text-white font-black text-sm leading-tight">Personalizado</p>
                </div>
                <button
                  onClick={() => open(s.ctaMessage)}
                  className="bg-brand-green text-slate-950 px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(163,230,53,0.25)] flex items-center gap-2 shrink-0"
                >
                  {s.ctaLabel}
                  <ArrowRight size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* COMBO HIGHLIGHT */}
        <div className="mb-20 rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-slate-900/60 to-slate-900/40 p-8 md:p-12 relative overflow-hidden reveal-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/15 blur-[120px] rounded-full"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green text-slate-950 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                <Zap size={12} fill="currentColor" />
                Combo Acelerador
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight">
                Site + Tráfego Pago + Automação WhatsApp.
                <br />
                <span className="text-brand-green">Tudo integrado, do clique à venda.</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base font-medium max-w-2xl">
                A estrutura completa para transformar visitantes em clientes pagantes. Estratégia única, equipe única,
                resultado real. Plano sob medida pro tamanho do seu negócio.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Setup em 7 dias', 'Sem fidelidade', 'Suporte VIP', 'Relatórios reais'].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-black uppercase tracking-widest text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-2">Investimento</p>
                <div className="text-white text-2xl md:text-3xl font-black tracking-tight leading-none">Sob consulta</div>
                <p className="text-slate-400 text-xs mt-2 font-medium">Estratégia desenhada pro seu nicho e meta de vendas</p>
              </div>
              <button
                onClick={() => open('Olá, quero contratar o Combo Acelerador (site + tráfego + automação).')}
                className="w-full bg-brand-green text-slate-950 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] flex items-center justify-center gap-3"
              >
                <Rocket size={16} /> Quero o combo completo
              </button>
            </div>
          </div>
        </div>

        {/* UPGRADES */}
        <div className="pt-12 border-t border-white/5">
          <div className="mb-12 reveal-hidden flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-3">Upgrades sob demanda</h3>
              <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest">
                Turbine sua estrutura ponto a ponto
              </p>
            </div>
            <div className="text-slate-400 text-sm max-w-md">
              Adicione qualquer item ao seu plano principal. Ativação imediata.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {upgrades.map((up, i) => (
              <div
                key={up.title}
                className="group relative bg-[#0f172a]/40 backdrop-blur-xl p-7 rounded-2xl border border-white/5 hover:border-brand-green/50 transition-all duration-500 flex flex-col justify-between reveal-hidden overflow-hidden hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/15 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-brand-green/30 transition-colors opacity-20"></div>

                <div>
                  <div className="mb-6">
                    <div className="inline-flex p-3.5 bg-slate-900 rounded-2xl text-brand-green border border-white/5 group-hover:bg-brand-green group-hover:text-slate-950 transition-all">
                      <up.icon size={22} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h4 className="text-base md:text-lg font-black text-white mb-4 uppercase tracking-widest leading-tight">
                    {up.title}
                  </h4>

                  <ul className="space-y-2.5 mb-8">
                    {up.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-slate-400 font-medium text-sm group/li">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green/40 group-hover/li:bg-brand-green transition-colors"></div>
                        <span className="group-hover/li:text-white transition-colors">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => open(`Olá, quero ativar o upgrade: ${up.title}.`)}
                  className="w-full bg-white/5 text-white/80 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest group-hover:bg-brand-green group-hover:text-slate-950 transition-all border border-white/10 group-hover:border-transparent flex items-center justify-center gap-2"
                >
                  Pedir orçamento
                  <FastForward size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center reveal-hidden">
          <p className="text-slate-400 text-base md:text-lg font-medium max-w-2xl mx-auto mb-6">
            Não sabe por onde começar? Conte seu desafio e a gente desenha a estratégia ideal pro seu negócio.
          </p>
          <button
            onClick={() => open('Olá, quero conversar sobre uma estratégia digital pro meu negócio.')}
            className="inline-flex items-center gap-3 bg-white text-slate-950 px-9 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-green transition-all shadow-2xl"
          >
            <Target size={16} /> Quero minha estratégia
          </button>
        </div>
      </div>
    </section>
  );
};
