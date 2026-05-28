import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { ShoppingBag, Star, ChevronRight, Clock } from 'lucide-react';

interface UniversalAppProps {
    config: AppConfig;
}

export const UniversalApp: React.FC<UniversalAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-white font-sans text-slate-900 pb-10">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${config.primaryColor} flex items-center justify-center text-white font-bold text-sm`}>
                        {config.heroTitle.charAt(0)}
                    </div>
                    <h1 className="font-bold text-[11px] text-slate-900">{config.heroTitle}</h1>
                </div>
                <ShoppingBag size={18} className="text-slate-400" />
            </header>

            {/* Hero */}
            <div className="relative h-44 w-full overflow-hidden">
                <img src={config.heroImage} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-xl font-bold mb-1">{config.heroSubtitle}</h2>
                    <div className="flex items-center gap-2 text-[8px] font-medium opacity-90 uppercase tracking-widest">
                        <span className="flex items-center gap-1">
                            <Star size={10} className="text-yellow-400 fill-yellow-400" /> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={10} /> 30-40 min
                        </span>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="px-4 py-6 space-y-4">
                <h3 className="font-bold text-slate-800 text-sm">Mais Pedidos 🔥</h3>
                <div className="space-y-3">
                    {config.products.map(product => (
                        <div key={product.id} className="bg-white p-3 rounded-2xl border border-slate-100 flex gap-3 shadow-sm">
                            <img src={product.image} className="w-16 h-16 rounded-xl object-cover bg-slate-50" />
                            <div className="flex-1 flex flex-col justify-center">
                                <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1">{product.name}</h4>
                                <div className="flex justify-between items-center">
                                    <span className="font-black text-slate-900 text-sm">{product.price}</span>
                                    <button className={`p-1.5 rounded-lg ${config.primaryColor} text-white`}>
                                        <ChevronRight size={14} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CTA */}
            <div className="px-4 pb-6">
                <button className={`w-full ${config.primaryColor} text-white font-bold py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 text-xs uppercase tracking-widest`}>
                    {config.ctaText}
                </button>
            </div>
        </div>
    );
};
