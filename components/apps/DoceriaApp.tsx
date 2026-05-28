import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { ShoppingBag, Star, Plus, Heart, Sparkles } from 'lucide-react';

interface DoceriaAppProps {
    config: AppConfig;
}

export const DoceriaApp: React.FC<DoceriaAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-white font-sans text-pink-900 pb-10">
            {/* Playful Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 py-3 flex justify-between items-center border-b border-pink-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-pink-500 flex items-center justify-center text-white font-black text-sm">
                        {config.heroTitle.charAt(0)}
                    </div>
                    <div>
                        <h1 className="font-extrabold text-[12px] lowercase tracking-tight">{config.heroTitle}</h1>
                    </div>
                </div>
                <ShoppingBag size={18} className="text-pink-400" />
            </header>

            {/* Clean Hero */}
            <div className="px-4 py-4">
                <div className="relative h-44 w-full overflow-hidden rounded-3xl">
                    <img src={config.heroImage} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-lg font-black leading-tight">{config.heroSubtitle}</h2>
                    </div>
                </div>
            </div>

            {/* Grid Cards - More Fluid */}
            <div className="px-4 grid grid-cols-2 gap-3">
                {config.products.map((product) => (
                    <div key={product.id} className="bg-pink-50/30 rounded-3xl p-3 border border-pink-50 flex flex-col items-center text-center">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-2">
                            <img src={product.image} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-extrabold text-[11px] text-pink-950 mb-1 leading-tight">{product.name}</h4>
                        <div className="w-full flex justify-between items-center mt-auto">
                            <span className="font-black text-pink-600 text-[12px] tracking-tighter">{product.price}</span>
                            <button className="bg-pink-500 p-1.5 rounded-lg text-white">
                                <Plus size={14} strokeWidth={4} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inline CTA */}
            <div className="px-4 py-6">
                <button className="w-full bg-pink-500 text-white font-black py-4 rounded-xl flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest">
                    {config.ctaText} <Sparkles size={14} />
                </button>
            </div>
        </div>
    );
};
