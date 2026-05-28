import React from 'react';
import { AppConfig } from '../../data/nicheData';
import { Calendar, Clock, MapPin, User, ChevronRight, Star, Plus, ArrowRight } from 'lucide-react';

interface BookingAppProps {
    config: AppConfig;
}

export const BookingApp: React.FC<BookingAppProps> = ({ config }) => {
    return (
        <div className="w-full min-h-full bg-slate-50 font-sans text-slate-900 pb-10">
            {/* Clean Hero */}
            <div className="relative h-48 overflow-hidden">
                <img src={config.heroImage} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h1 className="font-black text-xl mb-1 tracking-tight">{config.heroTitle}</h1>
                    <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><MapPin size={10} /> 1.2km</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> Aberto</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-2 px-4 -mt-4 relative z-10 mb-6">
                {[
                    { icon: Calendar, label: 'Agendar', active: true },
                    { icon: User, label: 'Equipe' },
                    { icon: Star, label: 'Review' },
                    { icon: MapPin, label: 'Local' }
                ].map((act, idx) => (
                    <div key={idx} className="bg-white p-2 rounded-2xl shadow-md flex flex-col items-center gap-1.5 text-center transition-transform">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${act.active ? `${config.primaryColor} text-white` : 'bg-slate-50 text-slate-300'}`}>
                            <act.icon size={14} strokeWidth={3} />
                        </div>
                        <span className="text-[7px] font-black text-slate-900 uppercase tracking-widest">{act.label}</span>
                    </div>
                ))}
            </div>

            {/* Services */}
            <div className="px-4 mb-8">
                <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight mb-4">Serviços</h3>
                <div className="space-y-3">
                    {config.products.slice(0, 3).map((service) => (
                        <div key={service.id} className="group flex justify-between items-center p-3 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all">
                            <div className="flex gap-3 items-center">
                                <img src={service.image} className="w-12 h-12 rounded-xl object-cover shrink-0 bg-slate-50" />
                                <div>
                                    <h4 className="font-black text-[11px] text-slate-800 leading-tight">{service.name}</h4>
                                    <div className="flex items-center gap-2 mt-1 font-bold">
                                        <span className="text-[8px] text-slate-400 uppercase tracking-widest flex items-center gap-1"><Clock size={10} /> 45 MIN</span>
                                        <span className={`text-[8px] uppercase tracking-widest ${config.primaryColor.replace('bg-', 'text-')}`}>{service.price}</span>
                                    </div>
                                </div>
                            </div>
                            <button className={`w-8 h-8 rounded-xl flex items-center justify-center ${config.primaryColor} text-white shadow-lg`}>
                                <Plus size={16} strokeWidth={4} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline Booking CTA */}
            <div className="px-4 pb-6">
                <button className={`w-full flex items-center justify-center gap-3 py-4 ${config.primaryColor} text-white rounded-xl shadow-lg font-black text-[10px] uppercase tracking-widest transition-transform`}>
                    <Calendar size={16} />
                    {config.ctaText}
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};
