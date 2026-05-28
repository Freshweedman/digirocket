import React from 'react';
import { Search, Globe, Instagram, Zap, Sparkles, MessageSquare, FastForward, MapPin, Palette, PenTool, CheckCircle2 } from 'lucide-react';

export const ExtraServices: React.FC = () => {
  const mainServices = [
    {
      icon: Search,
      title: "Google Local (SEO)",
      desc: "Colocamos sua empresa no topo do Google Maps para que todos te encontrem.",
      price: "Incluso no Premium",
      highlight: true
    },
    {
      icon: Instagram,
      title: "Landing Pages p/ Ads",
      desc: "Páginas específicas para campanhas de Meta Ads e TikTok Ads de alta performance.",
      price: "Sob Consulta"
    },
    {
      icon: Globe,
      title: "Registro de Domínio",
      desc: "Cuidamos de toda a burocracia para sua empresa ter um .com.br profissional.",
      price: "Consultoria Grátis"
    }
  ];

  const upgrades = [
    {
      icon: Palette,
      title: "Identidade Visual",
      price: "R$ 500",
      features: ["Paleta de Cores", "Tipografia", "Social Media Kit", "Brand Book"]
    },
    {
      icon: MessageSquare,
      title: "Bot WhatsApp",
      price: "R$ 450",
      features: ["Atendimento 24h", "Menu Automático", "Respostas Rápidas", "Filtro de Leads"]
    },
    {
      icon: FastForward,
      title: "Velocidade Max",
      price: "R$ 200",
      features: ["Otimização de Imagens", "Cache Avançado", "CDN Global", "LCP < 1.0s"]
    },
    {
      icon: MapPin,
      title: "Google Meu Negócio",
      price: "R$ 200",
      features: ["Otimização do Perfil", "Cadastro de Produtos", "Gestão de Fotos", "Meta: Top 1 no Maps"]
    },
    {
      icon: PenTool,
      title: "Logo Profissional",
      price: "R$ 300",
      features: ["Design Exclusivo", "Vetor (Alta Res.)", "Manual da Marca", "Entrega Expressa"]
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-40 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background decoration — LINES for Dark theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(163, 230, 53, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(163, 230, 53, 0.05) 1px, transparent 1px)',
        backgroundSize: '44px 44px'
      }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8 reveal-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
              <Sparkles size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Estratégia 360°</span>
            </div>
            <h2 className="font-sans text-4xl md:text-7xl font-black text-white tracking-tight leading-none">
              Serviços que <br />
              <span className="text-brand-green">aceleram seu lucro.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Soluções complementares para garantir que seu negócio domine o mercado digital.
            </p>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div key={index} className={`group relative p-10 md:p-12 rounded-[3.5rem] border transition-all duration-500 flex flex-col items-center text-center reveal-hidden ${service.highlight ? 'bg-white border-white shadow-2xl scale-105 z-10' : 'bg-slate-900/50 backdrop-blur-xl border-white/5'}`}>
              <div className={`mb-8 p-6 rounded-3xl transition-all transform group-hover:scale-110 ${service.highlight ? 'bg-brand-green text-slate-950' : 'bg-slate-800 text-brand-green shadow-sm'}`}>
                <service.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className={`text-2xl font-black mb-4 ${service.highlight ? 'text-slate-900' : 'text-white'}`}>{service.title}</h3>
              <p className={`font-medium leading-relaxed mb-8 ${service.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                {service.desc}
              </p>
              <div className={`mt-auto px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${service.highlight ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-green/10 text-brand-green'}`}>
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* Upgrades Section */}
        <div className="pt-20 border-t border-white/5">
          <div className="mb-16 text-center lg:text-left reveal-hidden">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Upgrades Individuais</h3>
            <p className="text-slate-400 font-bold text-lg uppercase tracking-widest">Turbine sua estrutura sob demanda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {upgrades.map((up, i) => (
              <div
                key={i}
                className="group relative bg-[#0f172a]/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-green/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between reveal-hidden overflow-hidden"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Background Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-brand-green/40 transition-colors opacity-20"></div>

                <div>
                  <div className="flex items-start justify-between mb-10">
                    <div className="p-5 bg-slate-900 rounded-2xl text-brand-green border border-white/5 group-hover:bg-brand-green group-hover:text-slate-950 transition-all shadow-xl">
                      <up.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-3xl font-black text-white tracking-tighter">{up.price}</div>
                      <div className="text-[10px] font-mono text-brand-green/40 uppercase tracking-widest mt-1">$ run_upgrade</div>
                    </div>
                  </div>

                  <h4 className="text-xl font-black text-white mb-6 uppercase tracking-widest leading-none flex items-center gap-2">
                    {up.title}
                    <div className="h-1 w-8 bg-brand-green/20 rounded-full group-hover:w-16 transition-all duration-700"></div>
                  </h4>

                  <ul className="space-y-4 mb-12">
                    {up.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-slate-400 font-medium group/li">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green/30 group-hover/li:bg-brand-green transition-colors"></div>
                        <span className="group-hover/li:text-white transition-colors text-sm md:text-base">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <button
                    onClick={() => window.open('https://wa.me/5551984689725', '_blank')}
                    className="w-full bg-white/5 text-white/80 py-5 rounded-2xl font-black text-xs uppercase tracking-widest group-hover:bg-brand-green group-hover:text-slate-950 transition-all border border-white/10 group-hover:border-transparent flex items-center justify-center gap-3 overflow-hidden"
                  >
                    Ativar Upgrade
                    <FastForward size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};