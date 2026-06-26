import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Star, ArrowRight, MessageCircle, Rocket } from 'lucide-react';

interface SEOPageProps {
  city: string;
  state: string;
  service: 'marketing-digital' | 'criacao-sites' | 'gestao-redes-sociais' | 'trafego-pago';
}

const serviceData = {
  'marketing-digital': {
    title: 'Marketing Digital',
    desc: 'Agência de Marketing Digital completa',
    longDesc: 'Transforme seu negócio com estratégias de marketing digital que realmente funcionam. Atendemos empresas de todos os portes com soluções personalizadas.',
    benefits: [
      'Aumento de até 300% em vendas online',
      'Presença digital profissional e consistente',
      'Estratégias baseadas em dados reais',
      'ROI positivo desde o primeiro mês',
      'Suporte dedicado e acompanhamento contínuo',
    ],
    services: [
      'Criação e gestão de sites profissionais',
      'Gestão completa de redes sociais',
      'Campanhas de tráfego pago (Google e Meta)',
      'SEO e otimização para buscadores',
      'Automação de WhatsApp e atendimento',
      'Identidade visual e branding',
    ],
  },
  'criacao-sites': {
    title: 'Criação de Sites',
    desc: 'Sites profissionais que vendem 24h por dia',
    longDesc: 'Seu negócio precisa de um site que converte visitantes em clientes. Criamos sites rápidos, bonitos e otimizados para aparecer no Google.',
    benefits: [
      'Site no ar em até 48 horas',
      'Design profissional e responsivo',
      'Otimizado para Google (SEO)',
      'Integração com WhatsApp e redes sociais',
      'Hospedagem grátis no primeiro ano',
    ],
    services: [
      'Sites institucionais e landing pages',
      'Lojas virtuais e e-commerce',
      'Sistemas de agendamento online',
      'Catálogos digitais e portfólios',
      'Páginas de captura de leads',
      'Manutenção e suporte contínuo',
    ],
  },
  'gestao-redes-sociais': {
    title: 'Gestão de Redes Sociais',
    desc: 'Instagram e TikTok que crescem e vendem',
    longDesc: 'Seu perfil precisa postar todo dia pra crescer, mas você não tem tempo. Cuidamos de tudo: postagens, legendas, artes e estratégia.',
    benefits: [
      'Crescimento orgânico consistente',
      'Postagens diárias profissionais',
      'Aumento de engajamento e alcance',
      'Identidade visual coesa',
      'Mais clientes vindos das redes',
    ],
    services: [
      'Planejamento estratégico de conteúdo',
      'Criação de posts, stories e reels',
      'Legendas persuasivas que vendem',
      'Gestão de comentários e mensagens',
      'Relatórios mensais de performance',
      'Estratégias de crescimento orgânico',
    ],
  },
  'trafego-pago': {
    title: 'Tráfego Pago',
    desc: 'Anúncios que trazem clientes de verdade',
    longDesc: 'Pare de gastar dinheiro em anúncio que não converte. Criamos e gerenciamos campanhas otimizadas no Google e Meta (Facebook/Instagram).',
    benefits: [
      'Custo por lead até 70% menor',
      'Campanhas otimizadas diariamente',
      'Segmentação estratégica do público',
      'ROI positivo desde o início',
      'Relatórios semanais transparentes',
    ],
    services: [
      'Google Ads (Pesquisa e Display)',
      'Meta Ads (Facebook e Instagram)',
      'Remarketing e retargeting',
      'Criação de criativos e copy',
      'Otimização de conversão',
      'Análise e relatórios detalhados',
    ],
  },
};

export const SEOPage: React.FC<SEOPageProps> = ({ city, state, service }) => {
  const data = serviceData[service];
  const cityState = `${city} - ${state}`;
  const pageTitle = `${data.title} em ${cityState} | DigiRocket`;
  const pageDesc = `${data.desc} em ${cityState}. ${data.longDesc.substring(0, 100)}...`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <link rel="canonical" href={`https://digirocket.com.br/${service}/${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase()}`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-brand-dark text-white py-20 md:py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent pointer-events-none"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 rounded-full border border-brand-green/40 mb-6">
              <MapPin size={14} className="text-brand-green" />
              <span className="text-xs font-black uppercase tracking-widest text-brand-green">{cityState}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {data.title} em <span className="text-brand-green">{city}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8 max-w-3xl">
              {data.longDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/5551984689725?text=${encodeURIComponent(`Olá, quero saber mais sobre ${data.title} em ${cityState}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-green text-slate-950 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg"
              >
                <MessageCircle size={18} fill="currentColor" />
                Falar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
              >
                Ver Serviços
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
              Por que escolher a <span className="text-brand-green">DigiRocket</span> em {city}?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-brand-green" />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
              Nossos Serviços de {data.title}
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Atendemos empresas de todos os portes em {cityState} com soluções completas e personalizadas.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.services.map((svc, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-brand-green/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                    <h3 className="font-black text-slate-900 text-sm">{svc}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 md:py-24 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-brand-green mb-2">200+</div>
                <div className="text-slate-600 font-medium">Clientes atendidos</div>
              </div>
              <div>
                <div className="text-5xl font-black text-brand-green mb-2">5+</div>
                <div className="text-slate-600 font-medium">Anos de experiência</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={24} className="fill-brand-green text-brand-green" />
                  ))}
                </div>
                <div className="text-slate-600 font-medium">Avaliação 5 estrelas</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 px-4 bg-brand-dark text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Rocket size={48} className="text-brand-green mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Pronto pra decolar em {city}?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Fale com a gente agora e descubra como podemos transformar seu negócio.
            </p>
            <a
              href={`https://wa.me/5551984689725?text=${encodeURIComponent(`Olá, quero contratar ${data.title} em ${cityState}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green text-slate-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg"
            >
              <MessageCircle size={20} fill="currentColor" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone size={24} className="text-brand-green" />
                <div className="text-sm font-black text-slate-900">(51) 98468-9725</div>
                <div className="text-xs text-slate-600">Atendimento via WhatsApp</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail size={24} className="text-brand-green" />
                <div className="text-sm font-black text-slate-900">contato@digirocket.com.br</div>
                <div className="text-xs text-slate-600">Resposta em até 2h</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock size={24} className="text-brand-green" />
                <div className="text-sm font-black text-slate-900">Seg a Sex: 9h às 18h</div>
                <div className="text-xs text-slate-600">Atendimento 100% remoto</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
