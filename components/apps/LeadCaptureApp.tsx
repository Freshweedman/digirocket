import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface LeadCaptureAppProps {
    config: AppConfig;
}

export const LeadCaptureApp: React.FC<LeadCaptureAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-white font-sans text-slate-900 pb-10">
            {/* Clean Hero */}
            <div className="relative h-48 w-full overflow-hidden">
                <img src={config.heroImage} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h1 className="text-xl font-black mb-1">{config.heroTitle}</h1>
                    <p className="text-[10px] font-bold opacity-90">{config.heroSubtitle}</p>
                </div>
            </div>

            {/* Form */}
            <div className="px-4 py-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seu Nome</label>
                            <input type="text" placeholder="Nome completo" className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp</label>
                            <input type="tel" placeholder="(00) 00000-0000" className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none" />
                        </div>
                        <button className={`w-full ${config.primaryColor} text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest mt-4`}>
                            {config.ctaText} <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="px-4 py-4 space-y-4">
                {[
                    { t: 'Segurança Total', d: 'Dados protegidos.' },
                    { t: 'Suporte VIP', d: 'Time pronto 24/7.' }
                ].map((b, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <CheckCircle2 size={16} className={`${config.primaryColor.replace('bg-', 'text-')}`} />
                        <div>
                            <h4 className="text-[11px] font-black text-slate-900">{b.t}</h4>
                            <p className="text-[10px] text-slate-500 font-bold">{b.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
