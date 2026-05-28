import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
    const testimonials = [
        { name: "Carlos Silva", role: "Monster Burger", text: "Começamos como um delivery simples e hoje somos a maior hamburgueria da região. O site da DigiRocket foi o divisor de águas.", initials: "CS", color: "bg-orange-500" },
        { name: "Mariana Costa", role: "Studio Glamour", text: "Minha agenda vivia vazia. Depois que o site foi pro ar, recebo agendamentos automáticos todos os dias pelo WhatsApp.", initials: "MC", color: "bg-pink-500" },
        { name: "Roberto Mendes", role: "Auto Center Top", text: "A facilidade do cliente agendar o serviço pelo site mudou meu negócio. Menos tempo no telefone, mais tempo faturando.", initials: "RM", color: "bg-blue-600" },
        { name: "Ana Paula", role: "Clínica Bem-Estar", text: "O design do site passa uma autoridade incrível. Meus clientes já chegam confiando no meu trabalho.", initials: "AP", color: "bg-teal-500" },
        { name: "Julio Cesar", role: "Advocacia Digital", text: "Precisava de algo profissional e rápido. Entregaram em 48h um site que converte consultas de alto ticket todos os dias.", initials: "JC", color: "bg-slate-800" },
        { name: "Fernanda Lima", role: "Boutique Bella", text: "Minhas vendas online subiram 40% no primeiro mês. O checkout deles pelo WhatsApp é extremamente veloz.", initials: "FL", color: "bg-rose-500" },
        { name: "Ricardo Santos", role: "Academia Iron", text: "O melhor investimento que fiz este ano. O suporte deles é impecável e o site é super rápido no celular.", initials: "RS", color: "bg-emerald-600" }
    ];

    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            {/* Background Texture — DOTS for White theme */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            {/* Soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20 md:mb-32 space-y-6 reveal-hidden">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full border border-brand-green/20">
                        <Star size={14} className="text-brand-green fill-brand-green" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Recomendado por Quem Vence</span>
                    </div>
                    <h2 className="font-sans text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
                        Empresas que <span className="text-brand-green">Dominam o Mercado.</span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Junte-se a centenas de negócios que já escalaram com a <span className="text-slate-900 font-bold">tecnologia DigiRocket.</span>
                    </p>
                </div>

                <div className="relative w-full overflow-hidden mask-gradient-x -mx-4 px-4 reveal-hidden">
                    <div className="flex gap-6 md:gap-10 w-max animate-scroll py-8">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="w-[320px] md:w-[500px] relative flex-shrink-0 rounded-[2.5rem] p-10 md:p-12 group overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl"
                            >
                                {/* Dot texture */}
                                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
                                <Quote className="absolute top-8 right-10 text-brand-green/10 w-14 h-14 group-hover:text-brand-green/20 transition-all duration-500" />

                                <div className="flex gap-1 mb-6 relative z-10">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="text-brand-green fill-brand-green" />)}
                                </div>

                                <p className="text-slate-600 mb-10 leading-relaxed font-medium relative z-10 text-base md:text-xl italic">"{t.text}"</p>

                                <div className="flex items-center gap-5 border-t border-slate-100 pt-8 relative z-10">
                                    <div className={`w-14 h-14 rounded-xl ${t.color} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-black text-lg tracking-tight leading-none mb-1">{t.name}</p>
                                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};