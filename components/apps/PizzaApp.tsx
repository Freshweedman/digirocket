import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { ShoppingBag, Star, ChevronRight, Clock, Flame } from 'lucide-react';

interface PizzaAppProps {
    config: AppConfig;
}

export const PizzaApp: React.FC<PizzaAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-[#1a0f08] font-sans text-orange-50 pb-10">
            {/* Rustic Header */}
            <header className="sticky top-0 z-50 bg-[#1a0f08]/90 backdrop-blur-md border-b border-orange-900/20 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center text-white font-black text-sm border border-red-500/30">
                        {config.heroTitle.charAt(0)}
                    </div>
                    <h1 className="font-black text-[10px] uppercase tracking-wider">{config.heroTitle}</h1>
                </div>
                <ShoppingBag size={18} className="text-orange-500" />
            </header>

            {/* Clean Hero */}
            <div className="relative h-44 w-full overflow-hidden">
                <img src={config.heroImage} className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-black italic">{config.heroSubtitle}</h2>
                    <div className="flex items-center gap-2 text-[8px] font-black text-orange-400 uppercase tracking-widest">
                        <Flame size={10} className="text-red-500" /> Artesanal • 25 MIN
                    </div>
                </div>
            </div>

            {/* Products List */}
            <div className="px-4 py-6 space-y-8">
                {config.products.map((product) => (
                    <div key={product.id} className="relative group">
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-3 border border-orange-900/30 shadow-lg">
                            <img src={product.image} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="text-base font-black italic tracking-tight">{product.name}</h4>
                                <span className="text-lg font-black text-orange-500 tracking-tighter">{product.price}</span>
                            </div>
                            <button className="bg-red-700 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-all">
                                <PlusIcon size={18} className="text-white" strokeWidth={4} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inline CTA */}
            <div className="px-4 pb-6">
                <button className="w-full bg-gradient-to-r from-red-800 to-red-600 text-white font-black py-4 rounded-xl shadow-xl flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest">
                    {config.ctaText} <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

const PlusIcon = ({ size, className, strokeWidth }: any) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);
