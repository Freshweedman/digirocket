import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { Play, CheckCircle2, ChevronRight, Star } from 'lucide-react';

interface VSLAppProps {
    config: AppConfig;
}

export const VSLApp: React.FC<VSLAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-white font-sans text-slate-900 pb-10">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${config.primaryColor} flex items-center justify-center text-white font-black text-sm`}>V</div>
                    <h1 className="font-black text-[10px] uppercase tracking-widest text-slate-900">{config.heroTitle}</h1>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
            </header>

            {/* Video Preview */}
            <div className="px-4 py-8 bg-slate-50 relative overflow-hidden">
                <h2 className="text-xl font-black text-center leading-tight mb-6 text-slate-900 tracking-tight">
                    Descubra Como <span className="text-red-600 underline decoration-red-200 underline-offset-4">Dobrar Seus Resultados</span>
                </h2>

                <div className="relative w-full aspect-video bg-slate-900 rounded-3xl shadow-xl flex items-center justify-center mb-6 overflow-hidden border-2 border-white">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 px-4" style={{ backgroundImage: `url(${config.heroImage})` }}></div>
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl z-10 transition-all border-4 border-white/20">
                        <Play fill="white" size={24} className="ml-1" />
                    </div>
                </div>

                <p className="text-[10px] text-slate-500 font-bold text-center leading-relaxed max-w-[220px] mx-auto opacity-80 uppercase tracking-widest">
                    Assista agora e veja o segredo de {config.heroTitle}.
                </p>
            </div>

            {/* Social Proof */}
            <div className="px-4 py-6 space-y-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={`https://api.dicebear.com/7.x/lorelei/svg?seed=vsl1`} className="w-8 h-8 rounded-full bg-white border border-slate-100" />
                        <div>
                            <p className="font-black text-[9px] text-slate-900 uppercase">Usuário Verificado</p>
                            <div className="flex text-yellow-500 gap-0.5 mt-0.5">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={8} fill="currentColor" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CTA */}
            <div className="px-4 py-6">
                <button className={`w-full ${config.primaryColor} text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest`}>
                    {config.ctaText} <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
};
