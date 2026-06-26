import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Palette, Instagram, Megaphone, Bot, HeartHandshake,
  ClipboardList, MonitorSmartphone, Video, MessageCircle, ArrowRight,
} from 'lucide-react';
import { ServicePage } from './ServicePage';

type Area = {
  num: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  image: string;
  from: string;
  to: string;
  iconColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  ctaMsg: string;
  fullDesc: string;
  benefits: string[];
  problems: string[];
};

const areas: Area[] = [
  {
    num: '01',
    icon: Palette,
    title: 'Logo e Marca',
    desc: 'Logo profissional, paleta de cores e identidade pra sua marca não parecer amadora.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    from: 'from-violet-600/20',
    to: 'to-purple-900/10',
    iconColor: 'text-violet-400',
    borderColor: 'border-violet-500/20 hover:border-violet-400/50',
    badgeBg: 'bg-violet-500/15',
    badgeText: 'text-violet-300',
    ctaMsg: 'Olá, quero criar minha identidade visual com a DigiRocket.',
    fullDesc: 'Sua marca é a primeira impressão que o cliente tem do seu negócio. A gente cria logo profissional, paleta de cores estratégica e identidade visual completa pra você não parecer amador e se destacar da concorrência.',
    benefits: [
      'Logo vetorizado em alta resolução',
      'Paleta de cores estratégica',
      'Manual de identidade visual',
      'Arquivos prontos pra usar em redes sociais',
      'Revisões ilimitadas até você aprovar',
    ],
    problems: [
      'Sua marca parece amadora e não passa confiança?',
      'Cliente não lembra da sua marca?',
      'Suas artes não têm identidade visual?',
    ],
  },
  {
    num: '02',
    icon: Instagram,
    title: 'Instagram e TikTok',
    desc: 'Cuidamos das postagens, legendas e artes pra fazer seu perfil crescer no orgânico.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop',
    from: 'from-pink-600/20',
    to: 'to-rose-900/10',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/20 hover:border-pink-400/50',
    badgeBg: 'bg-pink-500/15',
    badgeText: 'text-pink-300',
    ctaMsg: 'Olá, quero gestão de Instagram e TikTok com a DigiRocket.',
    fullDesc: 'Seu perfil precisa postar todo dia pra crescer, mas você não tem tempo. A gente cuida de tudo: postagens, legendas, artes, stories e reels. Você só aprova e colhe os resultados.',
    benefits: [
      'Postagens diárias no feed e stories',
      'Legendas persuasivas que vendem',
      'Artes profissionais com sua identidade',
      'Planejamento mensal de conteúdo',
      'Crescimento orgânico sem pagar anúncio',
    ],
    problems: [
      'Seu perfil tá parado e não cresce?',
      'Você não tem tempo pra postar todo dia?',
      'Suas postagens não geram engajamento?',
    ],
  },
  {
    num: '03',
    icon: Megaphone,
    title: 'Anúncios no Google e Meta',
    desc: 'Configuramos seus anúncios pra você gastar pouco e vender muito.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    from: 'from-blue-600/20',
    to: 'to-indigo-900/10',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/20 hover:border-blue-400/50',
    badgeBg: 'bg-blue-500/15',
    badgeText: 'text-blue-300',
    ctaMsg: 'Olá, quero gestão de tráfego pago com a DigiRocket.',
    fullDesc: 'Tráfego pago é a forma mais rápida de trazer cliente novo. A gente configura, otimiza e gerencia seus anúncios no Google e Meta (Facebook/Instagram) pra você gastar pouco e vender muito.',
    benefits: [
      'Campanhas otimizadas pra conversão',
      'Segmentação estratégica do público',
      'Relatórios semanais de performance',
      'Ajustes diários pra melhorar resultado',
      'ROI positivo desde o primeiro mês',
    ],
    problems: [
      'Você gasta em anúncio mas não vende?',
      'Não sabe configurar campanha no Google?',
      'Seu custo por lead tá muito alto?',
    ],
  },
  {
    num: '04',
    icon: Bot,
    title: 'WhatsApp Automático',
    desc: 'Atende cliente sozinho 24h. Você não perde venda nem na madrugada.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop',
    from: 'from-emerald-600/20',
    to: 'to-teal-900/10',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20 hover:border-emerald-400/50',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-300',
    ctaMsg: 'Olá, quero automatizar meu WhatsApp com a DigiRocket.',
    fullDesc: 'Cliente manda mensagem de madrugada e você perde a venda porque não respondeu rápido. A gente automatiza seu WhatsApp pra atender 24h, responder perguntas frequentes e encaminhar pro vendedor só quando tá quente.',
    benefits: [
      'Atendimento automático 24/7',
      'Respostas instantâneas pra perguntas frequentes',
      'Qualificação automática de leads',
      'Integração com seu CRM',
      'Relatório de conversas e conversões',
    ],
    problems: [
      'Cliente manda mensagem e você demora pra responder?',
      'Você perde venda porque não atende de madrugada?',
      'Seu time não dá conta de responder todo mundo?',
    ],
  },
  {
    num: '05',
    icon: HeartHandshake,
    title: 'Atendimento ao Cliente',
    desc: 'Cuidamos do seu cliente com carinho, do "olá" até o "obrigado pela compra".',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
    from: 'from-orange-600/20',
    to: 'to-amber-900/10',
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/20 hover:border-orange-400/50',
    badgeBg: 'bg-orange-500/15',
    badgeText: 'text-orange-300',
    ctaMsg: 'Olá, quero suporte de atendimento ao cliente com a DigiRocket.',
    fullDesc: 'Atendimento ruim faz cliente ir embora e nunca mais voltar. A gente cuida do seu cliente com carinho, responde rápido, resolve problema e transforma cliente em fã da sua marca.',
    benefits: [
      'Atendimento humanizado e rápido',
      'Resolução de problemas em até 24h',
      'Acompanhamento pós-venda',
      'Pesquisa de satisfação',
      'Cliente vira promotor da sua marca',
    ],
    problems: [
      'Cliente reclama que você não responde?',
      'Você não tem tempo pra atender todo mundo?',
      'Seu atendimento tá fazendo cliente ir embora?',
    ],
  },
  {
    num: '06',
    icon: ClipboardList,
    title: 'Acompanhamento',
    desc: 'Tudo organizado, com prazo cumprido. Você sabe o que tá acontecendo a cada passo.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    from: 'from-cyan-600/20',
    to: 'to-sky-900/10',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20 hover:border-cyan-400/50',
    badgeBg: 'bg-cyan-500/15',
    badgeText: 'text-cyan-300',
    ctaMsg: 'Olá, quero saber mais sobre o acompanhamento da DigiRocket.',
    fullDesc: 'Você contrata agência e fica no escuro sem saber o que tá acontecendo. Com a gente é diferente: você recebe relatório semanal, tem acesso ao painel de acompanhamento e sabe exatamente o que tá sendo feito.',
    benefits: [
      'Relatórios semanais de progresso',
      'Acesso ao painel de acompanhamento',
      'Reuniões mensais de alinhamento',
      'Prazos cumpridos rigorosamente',
      'Transparência total no processo',
    ],
    problems: [
      'Você contrata agência e fica no escuro?',
      'Não sabe se o trabalho tá sendo feito?',
      'Prazo não é cumprido e você fica na mão?',
    ],
  },
  {
    num: '07',
    icon: MonitorSmartphone,
    title: 'Sites e Sistemas',
    desc: 'Site, página de venda, integrações. Tudo que seu negócio precisa pra funcionar bem online.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
    from: 'from-brand-green/20',
    to: 'to-lime-900/10',
    iconColor: 'text-brand-green',
    borderColor: 'border-brand-green/20 hover:border-brand-green/50',
    badgeBg: 'bg-brand-green/15',
    badgeText: 'text-brand-green',
    ctaMsg: 'Olá, quero criar meu site com a DigiRocket.',
    fullDesc: 'Seu negócio precisa de um site profissional que vende 24h. A gente cria site institucional, loja virtual, página de vendas, sistema de agendamento e tudo que você precisa pra funcionar bem online.',
    benefits: [
      'Site responsivo e rápido',
      'Otimizado pra aparecer no Google',
      'Integração com WhatsApp e redes sociais',
      'Sistema de agendamento ou carrinho',
      'Pronto em 48h ou devolvemos seu dinheiro',
    ],
    problems: [
      'Você não tem site e perde cliente pro concorrente?',
      'Seu site é lento e feio?',
      'Cliente não acha você no Google?',
    ],
  },
  {
    num: '08',
    icon: Video,
    title: 'Reels e Vídeos',
    desc: 'Vídeos pro Instagram, TikTok e YouTube. Roteiro, gravação e edição feitos pra vender.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
    from: 'from-red-600/20',
    to: 'to-rose-900/10',
    iconColor: 'text-red-400',
    borderColor: 'border-red-500/20 hover:border-red-400/50',
    badgeBg: 'bg-red-500/15',
    badgeText: 'text-red-300',
    ctaMsg: 'Olá, quero produção de vídeos com a DigiRocket.',
    fullDesc: 'Vídeo é o formato que mais engaja e vende nas redes sociais. A gente cuida de tudo: roteiro estratégico, gravação profissional e edição que prende atenção do início ao fim.',
    benefits: [
      'Roteiro estratégico que vende',
      'Gravação profissional com equipamento de ponta',
      'Edição dinâmica que prende atenção',
      'Legendas e motion graphics',
      'Formatos otimizados pra cada rede social',
    ],
    problems: [
      'Seus vídeos não geram engajamento?',
      'Você não sabe o que falar na frente da câmera?',
      'Seus reels não viralizam?',
    ],
  },
];

const wa = 'https://wa.me/5551984689725';

export const Capabilities: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  const openService = (area: Area) => {
    setSelectedArea(area);
    document.body.style.overflow = 'hidden';
  };

  const closeService = () => {
    setSelectedArea(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="servicos-capabilities-unico" className="py-24 md:py-32 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20 space-y-4 reveal-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
            <MonitorSmartphone size={14} className="text-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">8 áreas de atuação</span>
          </div>
          <h2 id="titulo-servicos-unico" className="font-sans text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Serviços que fornecemos.{' '}
            <span className="text-brand-green">Tudo que seu negócio precisa pra crescer online, no mesmo lugar.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Do logo ao vídeo, do site ao WhatsApp automático. Um time inteiro cuidando do seu negócio.
          </p>
        </div>

        {/* GRID 2x2 mobile, 4 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-14">
          {areas.map((a, i) => (
            <article
              key={a.num}
              className={`group relative bg-gradient-to-br ${a.from} ${a.to} rounded-xl p-4 border ${a.borderColor} transition-all duration-300 reveal-hidden hover:-translate-y-1 overflow-hidden cursor-pointer`}
              style={{ transitionDelay: `${i * 30}ms` }}
              onClick={() => openService(a)}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 pointer-events-none"></div>

              {/* Icon with image background */}
              <div className="relative mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute -inset-2 rounded-lg overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
                  {a.image && (
                    <img src={a.image} alt="" className="w-full h-full object-cover blur-[1px]" />
                  )}
                </div>
                <div className={`relative inline-flex p-2.5 rounded-lg ${a.badgeBg} backdrop-blur-sm border border-white/10 z-10`}>
                  <a.icon size={18} strokeWidth={1.6} className={a.iconColor} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-black text-white mb-1.5 leading-tight tracking-tight relative z-10">{a.title}</h3>

              {/* Desc */}
              <p className="text-slate-400 text-[10px] font-medium leading-relaxed mb-3 group-hover:text-slate-300 transition-colors relative z-10 line-clamp-2">
                {a.desc}
              </p>

              {/* CTA Button */}
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 group-hover:bg-brand-green group-hover:text-slate-950 text-white border border-white/20 group-hover:border-brand-green transition-all duration-300">
                  <span className="text-[9px] font-black uppercase tracking-widest">Saiba mais</span>
                  <ArrowRight size={10} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center reveal-hidden">
          <p className="text-slate-400 text-base md:text-lg font-medium max-w-xl mx-auto mb-6">
            Bora ter um time inteiro cuidando do seu negócio?
          </p>
          <p className="text-slate-500 text-sm font-medium max-w-lg mx-auto mb-8">
            Conversa rápida no WhatsApp, sem compromisso. A gente vê o que dá pra fazer pelo seu negócio.
          </p>
          <a
            href={`${wa}?text=${encodeURIComponent('Olá, quero conversar sobre o que a DigiRocket pode fazer pelo meu negócio.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-green text-slate-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)] hover:scale-105"
          >
            <MessageCircle size={18} fill="currentColor" />
            Falar agora
          </a>
        </div>
      </div>

      {/* Service Page */}
      {selectedArea && createPortal(
        <ServicePage service={selectedArea} onClose={closeService} />,
        document.body
      )}
    </section>
  );
};
