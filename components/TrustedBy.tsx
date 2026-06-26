import React from 'react';
import { Rocket, Trophy, Star, TrendingUp } from 'lucide-react';

const niches = [
  'Hamburgueria', 'Pizzaria', 'Sushi', 'Acaiteria', 'Padaria', 'Barbearia', 
  'Salão de Beleza', 'Estética', 'Odontologia', 'Clínica', 'Pet Shop', 
  'Advocacia', 'Academia', 'Delivery', 'Auto Center', 'Fotografia',
];

const stats = [
  { value: '200+', label: 'Sites no ar', icon: Rocket },
  { value: '5+', label: 'Anos', icon: Star },
  { value: '24%', label: 'Conversão', icon: TrendingUp },
  { value: '#1', label: 'Google POA', icon: Trophy },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Clean - Menor */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 reveal-hidden">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-green/20 transition-all"
            >
              <s.icon size={16} className="text-brand-green mx-auto mb-1" strokeWidth={2.5} />
              <div className="text-xl md:text-3xl font-black text-white tracking-tight">{s.value}</div>
              <div className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Nichos passando - Menor e mais rápido */}
        <div className="relative mask-gradient-x overflow-hidden">
          <div className="flex gap-2 animate-scroll-fast">
            {[...niches, ...niches, ...niches].map((n, i) => (
              <span 
                key={i}
                className="shrink-0 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-white/50 text-[10px] font-bold whitespace-nowrap hover:border-brand-green/20 hover:text-white/70 transition-all"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-scroll-fast {
          animation: scroll-fast 25s linear infinite;
        }

        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }

        .mask-gradient-x {
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};
