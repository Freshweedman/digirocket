import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { ShoppingBag, Star, ChevronRight, Clock, Heart, Award } from 'lucide-react';

interface SushiAppProps {
    config: AppConfig;
}

export const SushiApp: React.FC<SushiAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-zinc-950 font-sans text-zinc-100 pb-10">
            {/* Minimal Header */}
            <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-900 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white font-black text-sm">
                        {config.heroTitle.charAt(0)}
                    </div>
                    <div className="leading-tight">
                        <h1 className="font-black text-[10px] uppercase tracking-[0.2em]">{config.heroTitle}</h1>
                    </div>
                </div>
                <ShoppingBag size={18} className="text-zinc-500" />
            </header>

            {/* Elegant Hero */}
            <div className="relative h-48 w-full overflow-hidden">
                <img src={config.heroImage} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-black leading-tight mb-1">{config.heroSubtitle}</h2>
                    <div className="flex items-center gap-3 text-[8px] font-black text-rose-500 uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Star size={10} fill="currentColor" /> 4.9</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> 40 MIN</span>
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div className="px-4 py-6 space-y-6">
                <div className="space-y-6">
                    {config.products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-3 bg-zinc-900">
                                <img src={product.image} className="w-full h-full object-cover" />
                                <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-lg">
                                    <span className="text-sm font-black text-white">{product.price}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="text-sm font-black tracking-tight">{product.name}</h4>
                                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Peixe Fresco • Premium</p>
                                </div>
                                <button className="bg-rose-600 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg">
                                    <ChevronRight size={18} className="text-white" strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CTA */}
            <div className="px-4 pb-6">
                <button className="w-full bg-white text-zinc-950 font-black py-4 rounded-xl flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest">
                    {config.ctaText} <ShoppingBag size={14} />
                </button>
            </div>
        </div>
    );
};
