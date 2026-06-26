import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Instagram, Facebook, Sparkles, TrendingUp, Eye, Heart, MessageCircle as Comment, Share2 } from 'lucide-react';

interface Creative {
  id: string;
  type: 'feed' | 'story' | 'banner';
  image: string;
  title: string;
  niche: string;
}

// Real creative examples per niche with CORRECT images
const creatives: Creative[] = [
  // Food - usando imagens reais de comida
  { id: '1', type: 'feed', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', title: 'Post Hamburguer', niche: 'Hamburgueria' },
  { id: '2', type: 'story', image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067&fit=crop', title: 'Story Pizza', niche: 'Pizzaria' },
  { id: '3', type: 'feed', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', title: 'Post Sushi', niche: 'Sushi' },
  
  // Beauty - usando imagens reais de salão/barbearia
  { id: '4', type: 'feed', image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', title: 'Post Barbearia', niche: 'Barbearia' },
  { id: '5', type: 'story', image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067&fit=crop', title: 'Story Salão', niche: 'Salão' },
  { id: '6', type: 'feed', image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', title: 'Post Estética', niche: 'Estética' },
  
  // Services - usando imagens reais de serviços
  { id: '7', type: 'banner', image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop', title: 'Banner Pet Shop', niche: 'Pet Shop' },
  { id: '8', type: 'feed', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', title: 'Post Oficina', niche: 'Oficina' },
  { id: '9', type: 'story', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=1067&fit=crop', title: 'Story Personal', niche: 'Personal' },
];

export const CreativePreview: React.FC = () => {
  const [selectedCreative, setSelectedCreative] = useState<Creative | null>(null);

  const openCreative = (creative: Creative) => {
    setSelectedCreative(creative);
    document.body.style.overflow = 'hidden';
  };

  const closeCreative = () => {
    setSelectedCreative(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-green/[0.03] blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-14 space-y-4 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/15 rounded-full border border-brand-green/30">
              <Sparkles size={14} className="text-brand-green" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Criativos profissionais</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Artes que <span className="text-brand-green">vendem sozinhas</span>.
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Posts, stories e banners editados com qualidade profissional pra cada nicho.
            </p>
          </div>

          {/* Creatives Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {creatives.map((creative, i) => (
              <button
                key={creative.id}
                onClick={() => openCreative(creative)}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-green/40 transition-all duration-300 reveal-hidden hover:-translate-y-1 bg-slate-900"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {/* Image */}
                <div className={`relative ${creative.type === 'story' ? 'aspect-[9/16]' : creative.type === 'banner' ? 'aspect-[16/9]' : 'aspect-square'} overflow-hidden`}>
                  <img
                    src={creative.image}
                    alt={creative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Type badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                    <span className="text-white text-[7px] font-black uppercase tracking-widest">
                      {creative.type === 'feed' ? 'Feed' : creative.type === 'story' ? 'Story' : 'Banner'}
                    </span>
                  </div>

                  {/* Social icons */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
                      <Instagram size={10} className="text-white" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <Facebook size={10} className="text-white" />
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-[10px] font-black leading-tight drop-shadow-lg">{creative.title}</p>
                    <p className="text-white/70 text-[8px] font-bold uppercase tracking-widest drop-shadow">{creative.niche}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-1 shadow-[0_0_20px_rgba(163,230,53,0.6)]">
                        <Eye size={16} className="text-slate-950" strokeWidth={2.5} />
                      </div>
                      <p className="text-white text-[8px] font-black uppercase tracking-widest">Ver completo</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-3xl mx-auto reveal-hidden">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-brand-green mb-1">+500</div>
              <div className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white/50">Criativos/mês</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-brand-green mb-1">3x</div>
              <div className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white/50">Mais engajamento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-brand-green mb-1">24h</div>
              <div className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white/50">Pra entregar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCreative && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4" onClick={closeCreative}>
          <button
            onClick={closeCreative}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all z-10"
          >
            <X size={18} className="text-white" />
          </button>

          <div className="relative max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            {/* Instagram-like preview */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="px-4 py-3 flex items-center gap-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs font-black">{selectedCreative.niche.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-xs font-black leading-none">{selectedCreative.niche}</p>
                  <p className="text-white/50 text-[10px] font-medium">Patrocinado</p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedCreative.image}
                  alt={selectedCreative.title}
                  className="w-full"
                />
              </div>

              {/* Actions */}
              <div className="px-4 py-3 space-y-2">
                <div className="flex items-center gap-4">
                  <Heart size={24} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
                  <Comment size={24} className="text-white hover:text-brand-green cursor-pointer transition-colors" />
                  <Share2 size={24} className="text-white hover:text-brand-green cursor-pointer transition-colors" />
                </div>
                <p className="text-white text-xs">
                  <span className="font-black">1.234 curtidas</span>
                </p>
                <p className="text-white text-xs">
                  <span className="font-black">{selectedCreative.niche}</span>{' '}
                  <span className="text-white/70">Arte profissional que converte visitante em cliente. 🚀</span>
                </p>
                <p className="text-white/50 text-[10px]">Ver todos os 89 comentários</p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
