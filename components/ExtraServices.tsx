import React, { useState } from 'react';
import {
  MonitorSmartphone, Megaphone, Instagram, Bot, Video, Compass,
  CheckCircle2, Sparkles, ShieldCheck, Rocket, Target, MessageCircle
} from 'lucide-react';

type Service = {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  badge: string;
  desc: string;
  price: string;
  highlight?: boolean;
};

const services: Service[] = [
  {
    id: 'site',
    icon: MonitorSmartphone,
    title: 'Site Profissional',
    badge: 'Presença Online',
    desc: 'Seu negócio precisa de um endereço na internet. Site responsivo, rápido e com SEO.',
    price: 'a partir de R$ 497',
  },
  {
    id: 'trafego',
    icon: Megaphone,
    title: 'Tráfego Pago',
    badge: 'Venda Mais',
    desc: 'Anúncios no Google e Meta que trazem cliente pronto pra comprar, não só visualização.',
    price: 'a partir de R$ 797/mês',
    highlight: true,
  },
  {
    id: 'social',
    icon: Instagram,
    title: 'Gestão de Redes',
    badge: 'Presença Digital',
    desc: 'Cuida do Instagram e TikTok com post, legenda e arte. Você só aprova.',
    price: 'a partir de R$ 497/mês',
  },
  {
    id: 'whatsapp',
    icon: Bot,
    title: 'WhatsApp Automático',
    badge: 'Atende 24h',
    desc: 'Atende cliente sozinho, dia e noite. Você não perde venda nem nas férias.',
    price: 'a partir de R$ 297/mês',
  },
  {
    id: 'video',
    icon: Video,
    title: 'Produção de Vídeo',
    badge: 'Conteúdo',
    desc: 'Reels e vídeos com roteiro, gravação e edição. Feito pra vender, não só pra encantar.',
    price: 'a partir de R$ 397',
  },
  {
    id: 'consultoria',
    icon: Compass,
    title: 'Consultoria',
    badge: 'Estratégia',
    desc: 'Diagnóstico do seu negócio + plano de ação. Pra você saber exatamente o que fazer.',
    price: 'a partir de R$ 497',
  },
];

const whatsappBase = 'https://wa.me/5551984689725';

export const ExtraServices: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const sendToWhatsApp = () => {
    if (selectedServices.length === 0) {
      window.open(`${whatsappBase}?text=${encodeURIComponent('Olá! Quero saber mais sobre os serviços da DigiRocket.')}`, '_blank');
      return;
    }

    const selectedNames = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => `• ${s.title}`)
      .join('\n');

    const message = `Olá! Quero contratar os seguintes serviços:\n\n${selectedNames}\n\nPode me enviar mais informações?`;
    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 md:py-28 px-4 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-8">
            <Sparkles size={18} className="text-emerald-400" />
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Outros Serviços</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Além do site,<br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">fazemos tudo</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Do logo ao vídeo, do Instagram ao Google Ads. <br className="hidden md:block" />
            <span className="text-white font-bold">Seu negócio completo no digital.</span>
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((s) => {
            const isSelected = selectedServices.includes(s.id);
            
            return (
              <button
                key={s.id}
                onClick={() => toggleService(s.id)}
                className={`group relative p-7 md:p-8 rounded-3xl border-2 transition-all duration-300 text-left overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border-emerald-500 shadow-2xl shadow-emerald-500/30 scale-[1.02]'
                    : s.highlight
                    ? 'bg-zinc-900 border-emerald-500/40 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20'
                    : 'bg-zinc-900/60 backdrop-blur-xl border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                }`}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isSelected ? 'opacity-100' : ''}`} />
                
                {/* Most Popular Badge */}
                {s.highlight && !isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-zinc-950 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg shadow-emerald-500/50 animate-pulse">
                    Mais Pedido
                  </div>
                )}

                {/* Selected Checkmark */}
                {isSelected && (
                  <div className="absolute top-5 right-5 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50 animate-in zoom-in duration-300">
                    <CheckCircle2 size={18} className="text-zinc-950" strokeWidth={3} />
                  </div>
                )}

                {/* Icon */}
                <div className={`relative mb-6 inline-flex p-4 rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-emerald-500 text-zinc-950 shadow-xl shadow-emerald-500/40'
                    : 'bg-zinc-800 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 group-hover:scale-110'
                }`}>
                  <s.icon size={28} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Badge */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/80 block mb-3">
                    {s.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  
                  {/* Price */}
                  <div className="pt-5 border-t border-zinc-800">
                    <p className="text-white font-black text-base md:text-lg">
                      {s.price}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 rounded-3xl p-10 md:p-14 text-center backdrop-blur-xl shadow-2xl shadow-emerald-500/20">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              {selectedServices.length > 0 ? (
                <>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50">
                      <span className="text-zinc-950 font-black text-xl">{selectedServices.length}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">
                      {selectedServices.length === 1 ? 'Serviço Selecionado' : 'Serviços Selecionados'}
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    Clique no botão abaixo e vamos conversar sobre seu projeto no WhatsApp
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Selecione os serviços que precisa
                  </h3>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    Ou clique direto no botão pra conversar com a gente
                  </p>
                </>
              )}
            </div>
            
            <button
              onClick={sendToWhatsApp}
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-zinc-950 px-10 py-5 rounded-2xl font-black text-base uppercase tracking-wider transition-all shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95"
            >
              <MessageCircle size={24} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
              {selectedServices.length > 0 ? 'Falar no WhatsApp' : 'Quero Contratar'}
            </button>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { icon: ShieldCheck, text: '5 anos no mercado' },
            { icon: Rocket, text: '+200 projetos' },
            { icon: Target, text: 'Foco em resultado' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-colors group">
              <badge.icon size={20} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base font-bold">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
