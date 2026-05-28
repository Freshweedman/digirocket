import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 left-0 right-0 z-[100] flex justify-center px-6 animate-fade-in-up">
            <a
                href="https://wa.me/5551984689725?text=Olá, quero meu site em 48h!"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 bg-slate-950/80 backdrop-blur-2xl border border-white/10 px-8 py-5 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] hover:shadow-brand-green/20 transition-all active:scale-95 relative overflow-hidden"
            >
                {/* Neon Glow */}
                <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex items-center gap-4">
                    <div className="bg-brand-green p-2 rounded-xl shadow-[0_0_20px_rgba(163,230,53,0.4)] group-hover:rotate-12 transition-transform">
                        <Rocket size={18} className="text-slate-950 fill-slate-950" />
                    </div>
                    <span className="text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">
                        QUERO MEU SITE EM 48H
                    </span>

                    {/* Living indicator */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full border border-brand-green/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                        </span>
                        <span className="text-[10px] font-black text-brand-green uppercase tracking-widest hidden md:block">ONLINE</span>
                    </div>
                </div>
            </a>
        </div>
    );
};
