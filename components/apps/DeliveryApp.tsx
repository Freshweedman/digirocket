import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { Search, ShoppingBag, Star, ChevronRight, Clock, ArrowRight } from 'lucide-react';

interface DeliveryAppProps {
    config: AppConfig;
}

export const DeliveryApp: React.FC<DeliveryAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-white font-sans text-slate-900 pb-20">
            {/* Fluid Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl ${config.primaryColor} flex items-center justify-center text-white font-black text-base shadow-sm`}>
                        {config.heroTitle.charAt(0)}
                    </div>
                    <div className="leading-tight">
                        <h1 className="font-black text-[11px] text-slate-900 uppercase tracking-tight">{config.heroTitle}</h1>
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Aberto agora</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <ShoppingBag size={18} className="text-slate-900" />
                    <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${config.primaryColor} text-white text-[8px] flex items-center justify-center font-black border border-white shadow-sm`}>2</span>
                </div>
            </header>

            {/* Clean Hero */}
            <div className="relative h-44 w-full overflow-hidden">
                <img src={config.heroImage} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-xl font-black leading-tight mb-1">{config.heroSubtitle}</h2>
                    <p className="text-[10px] font-bold opacity-90 uppercase tracking-widest flex items-center gap-2">
                        <Clock size={10} /> 20-35 min • <span className="text-brand-green">Frete Grátis</span>
                    </p>
                </div>
            </div>

            {/* Compact Search */}
            <div className="px-4 py-4">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="w-full bg-slate-50 border-0 rounded-xl pl-10 pr-4 py-2 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-brand-green/20"
                    />
                </div>
            </div>

            {/* Product List - Better Proportions */}
            <div className="px-4 space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-black text-slate-900 text-sm uppercase tracking-tight">Destaques</h3>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${config.primaryColor.replace('bg-', 'text-')}`}>Ver Mais</span>
                </div>

                <div className="space-y-3">
                    {config.products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white p-3 rounded-2xl border border-slate-100 flex gap-3 transition-all hover:border-brand-green/20"
                        >
                            <img
                                src={product.image}
                                className="w-16 h-16 rounded-xl object-cover bg-slate-50"
                            />
                            <div className="flex-1 flex flex-col justify-center">
                                <h4 className="font-black text-slate-900 text-[13px] leading-tight mb-1">{product.name}</h4>
                                <div className="flex justify-between items-center">
                                    <span className="font-black text-slate-900 text-sm tracking-tighter">{product.price}</span>
                                    <button className={`w-8 h-8 rounded-lg ${config.primaryColor} text-white flex items-center justify-center`}>
                                        <ChevronRight size={16} strokeWidth={4} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CTA instead of Fixed */}
            <div className="p-4 mt-6">
                <button className={`w-full ${config.primaryColor} text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 text-xs uppercase tracking-widest`}>
                    {config.ctaText} <ArrowRight size={14} />
                </button>
            </div>
        </div>
    );
};
