import React, { useState, useEffect } from 'react';
import { Rocket, MessageCircle, X } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-5 right-5 z-[100] animate-fade-in-up pointer-events-none">
            <div className="flex items-end gap-3 pointer-events-auto">

                {/* Expanded chat-like preview (desktop) */}
                {isExpanded && (
                    <div className="hidden md:flex animate-fade-in-up">
                        <div className="bg-white text-slate-900 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] w-72 p-4 relative">
                            <button
                                onClick={() => setIsExpanded(false)}
                                aria-label="Fechar"
                                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
                            >
                                <X size={14} />
                            </button>

                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green to-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
                                        <Rocket size={18} fill="currentColor" />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                                </div>
                                <div className="leading-tight">
                                    <p className="text-sm font-black text-slate-900">DigiRocket</p>
                                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Online agora
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-3 mb-3">
                                <p className="text-xs font-medium text-slate-700 leading-relaxed">
                                    Olá! 👋 Quer um site igual aos da nossa demo? Manda mensagem que a gente responde em 5 minutos.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/5551984689725?text=Olá, quero meu site em 48h!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] transition-all"
                            >
                                <MessageCircle size={14} fill="currentColor" />
                                Iniciar conversa
                            </a>

                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center mt-2">
                                Resposta média · 5 minutos
                            </p>
                        </div>
                    </div>
                )}

                {/* WhatsApp pill */}
                <button
                    onClick={() => {
                        if (window.innerWidth >= 768) {
                            setIsExpanded((v) => !v);
                        } else {
                            window.open('https://wa.me/5551984689725?text=Olá, quero meu site em 48h!', '_blank');
                        }
                    }}
                    aria-label="Falar com a DigiRocket"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-[0_15px_40px_-10px_rgba(16,185,129,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.8)] transition-all active:scale-95 overflow-hidden"
                >
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30"></span>

                    {/* Notification bubble */}
                    {!isExpanded && (
                        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 border-2 border-slate-950 text-white text-[9px] font-black flex items-center justify-center">
                            1
                        </span>
                    )}

                    <MessageCircle size={24} className="relative text-white fill-white" strokeWidth={2} />
                </button>
            </div>
        </div>
    );
};
