import React from 'react';
import {
  Sparkles, Utensils, Scissors, Stethoscope, Wrench, Dumbbell, Sun,
  Pizza, PawPrint, Briefcase, Gem, Home, Camera, Pill, Building2,
} from 'lucide-react';

type Brand = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  /** Optional secondary line below the name (descriptor) */
  tag?: string;
};

const brands: Brand[] = [
  { name: 'Burguer Forge', icon: Utensils, tag: 'Hamburgueria' },
  { name: 'Nova Estética', icon: Gem, tag: 'Beleza' },
  { name: 'Zen Sushi', icon: Utensils, tag: 'Restaurante' },
  { name: 'Studio Arq', icon: Building2, tag: 'Arquitetura' },
  { name: 'Premium Auto', icon: Wrench, tag: 'Auto Center' },
  { name: 'Iron Gym', icon: Dumbbell, tag: 'Academia' },
  { name: 'Solar Plus', icon: Sun, tag: 'Energia' },
  { name: 'Bella Pizza', icon: Pizza, tag: 'Pizzaria' },
  { name: 'Top Pet', icon: PawPrint, tag: 'Pet Shop' },
  { name: 'Lex Advocacia', icon: Briefcase, tag: 'Direito' },
  { name: 'Glow Nails', icon: Scissors, tag: 'Esmalteria' },
  { name: 'Hub Imóveis', icon: Home, tag: 'Imobiliária' },
  { name: 'Bright Smile', icon: Stethoscope, tag: 'Odontologia' },
  { name: 'Lens Studio', icon: Camera, tag: 'Fotografia' },
  { name: 'Vida Farma', icon: Pill, tag: 'Farmácia' },
];

const BrandLogo: React.FC<{ brand: Brand }> = ({ brand }) => {
  const Icon = brand.icon;
  return (
    <div className="flex items-center gap-3 shrink-0 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-green/30 hover:bg-white/[0.06] transition-all duration-500 group min-w-[210px]">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-green/15 to-emerald-500/5 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-slate-950 group-hover:border-transparent transition-all">
        <Icon size={20} strokeWidth={1.6} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display font-black text-white/90 text-sm md:text-base tracking-tight whitespace-nowrap">
          {brand.name}
        </span>
        {brand.tag && (
          <span className="font-mono text-[9px] text-brand-green/60 uppercase tracking-widest mt-0.5">
            {brand.tag}
          </span>
        )}
      </div>
    </div>
  );
};

export const TrustedBy: React.FC = () => {
  // Duplicate the list for seamless infinite scroll
  const loop = [...brands, ...brands];

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-green/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30 mb-5">
            <Sparkles size={14} className="text-brand-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Quem confia na DigiRocket</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Empresas que <span className="text-brand-green">dominam o mercado</span>.
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium mt-4 max-w-xl mx-auto">
            Negócios reais que escalaram com a estrutura DigiRocket. Do balcão local à autoridade nacional.
          </p>
        </div>

        {/* Infinite logo carousel */}
        <div className="relative mask-gradient-x">
          <div className="flex gap-4 md:gap-5 animate-scroll">
            {loop.map((b, i) => (
              <BrandLogo key={`${b.name}-${i}`} brand={b} />
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 md:mt-20 grid grid-cols-3 gap-4 md:gap-6">
          {[
            { value: '200+', label: 'Sites entregues' },
            { value: '5+', label: 'Anos no mercado' },
            { value: '#1', label: 'Google Porto Alegre' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="text-center p-5 md:p-6 rounded-2xl bg-slate-900/40 border border-white/5 reveal-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl md:text-5xl font-black text-brand-green tracking-tighter leading-none">{s.value}</div>
              <div className="text-[9px] md:text-xs font-black text-white/50 uppercase tracking-widest mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
