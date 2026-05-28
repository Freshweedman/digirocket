import React from 'react';
import { Check, Rocket, ArrowRight, Zap, Sparkles, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Pricing: React.FC = () => {
    const whatsappLink = (plan: string, price: string) =>
        `https://wa.me/5551984689725?text=${encodeURIComponent(`Olá, tenho interesse no plano ${plan} de ${price}`)}`;

    return (
        <section id="planos" className="py-24 md:py-40 px-4 bg-white relative overflow-hidden">
            {/* Background Pattern — HANDLED GLOBALLY BY SECTION CSS */}
            <div className="absolute inset-0 z-0 bg-white pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 md:mb-32 space-y-6 reveal-hidden">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full border border-brand-green/20">
                        <Sparkles size={16} className="text-brand-green animate-pulse" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green">Invista no seu Crescimento</span>
                    </div>
                    <h2 className="font-sans text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
                        Escolha sua <br />
                        <span className="text-brand-green">estrutura de lucro.</span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto font-medium">
                        Transparência total. Sem mensalidade. <span className="text-slate-900 font-bold">Seu site, sua máquina, seu lucro.</span>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 md:gap-12 max-w-6xl mx-auto mb-20">
                    {/* PLANO START: LANDING PAGE */}
                    <div className="flex-1 group relative rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 reveal-hidden delay-100 terminal-card">
                        {/* Clean Window Header */}
                        <div className="terminal-header bg-[#1e293b]/80">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <span className="ml-4 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Configuração de Plano</span>
                        </div>

                        <div className="p-6 md:p-14 flex flex-col h-full relative z-10">
                            <div className="space-y-1 mb-10">
                                <h3 className="text-brand-green font-black text-xs uppercase tracking-[0.4em]">
                                    START: Landing Page
                                </h3>
                                <div className="flex flex-col">
                                    <span className="text-white/10 text-sm font-black line-through mb-1">DE R$ 899</span>
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-white text-4xl md:text-7xl font-black tracking-tighter transition-all group-hover:text-brand-green duration-500">R$ 497</span>
                                    </div>
                                    <p className="text-slate-400 text-[10px] md:text-xs mt-4 uppercase font-bold tracking-widest">Estrutura Pronta para Vender</p>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-16 flex-grow">
                                {[
                                    'Página de Alta Conversão', 'Design Mobile-First Elite', 'Botão WhatsApp Estratégico', 'Checkout Instantâneo Pix',
                                    '1 ano de Hospedagem VIP', 'Entrega em 48h'
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-4 items-center group/item">
                                        <div className="bg-brand-green/10 p-2 rounded-xl text-brand-green shrink-0 border border-brand-green/20 group-hover/item:bg-brand-green group-hover/item:text-slate-950 transition-all duration-300">
                                            <Check size={16} strokeWidth={4} />
                                        </div>
                                        <span className="text-slate-300 font-medium text-base group-hover/item:text-white transition-colors">{feat}</span>
                                    </div>
                                ))}
                            </ul>

                            <button
                                onClick={() => window.open(whatsappLink('Landing Page', 'R$ 497'), '_blank')}
                                className="w-full bg-white/5 hover:bg-white text-white hover:text-slate-950 font-black py-6 rounded-2xl transition-all duration-500 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 border border-white/10 hover:border-white shadow-2xl"
                            >
                                QUERO ESTE PLANO <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* PLANO PREMIUM: SITE COMPLETO */}
                    <div className="flex-1 group relative rounded-[2.5rem] overflow-hidden transition-all duration-700 lg:-translate-y-8 reveal-hidden delay-200 terminal-card border-brand-green/30">
                        {/* Internal Glow Accent */}
                        <div className="absolute -left-20 -top-20 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full group-hover:bg-brand-green/20 transition-all duration-1000"></div>

                        {/* Clean Window Header */}
                        <div className="terminal-header bg-brand-green/[0.05] border-b border-brand-green/10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                            </div>
                            <span className="ml-4 text-[10px] font-black text-brand-green/40 uppercase tracking-[0.2em]">Configuração de Elite</span>
                        </div>

                        <div className="p-6 md:p-14 flex flex-col h-full relative z-10 pt-4">
                            <div className="bg-brand-green text-slate-950 font-black px-6 py-2 rounded-full text-[9px] uppercase tracking-[0.3em] self-start mb-8 flex items-center gap-2 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                                <Zap size={14} fill="currentColor" className="animate-pulse" /> MAIS VENDIDO
                            </div>

                            <div className="space-y-1 mb-10">
                                <h3 className="text-brand-green font-black text-xs uppercase tracking-[0.4em]">
                                    PREMIUM: Digital Machine
                                </h3>
                                <div className="flex flex-col">
                                    <span className="text-white/10 text-sm font-black line-through mb-1">DE R$ 1.599</span>
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-white text-5xl md:text-8xl font-black tracking-tighter drop-shadow-[0_0_30px_rgba(163,230,53,0.2)] transition-all duration-500">R$ 997</span>
                                    </div>
                                    <p className="text-brand-green/60 text-[10px] md:text-xs mt-4 uppercase font-bold tracking-widest">Domine seu Mercado Local</p>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-16 flex-grow">
                                {[
                                    'Múltiplas Páginas Estratégicas', 'Painel de Gestão Exclusivo', 'Catálogo/Cardápio Interativo', 'Google Meu Negócio Pro',
                                    'Suporte VIP via WhatsApp', 'Hospedagem Vitalícia HOJE'
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-4 items-center group/item">
                                        <div className="bg-brand-green p-2 rounded-xl text-slate-950 shrink-0 shadow-[0_0_20px_rgba(163,230,53,0.4)] border border-white/20">
                                            <Check size={18} strokeWidth={5} />
                                        </div>
                                        <span className="text-white font-bold text-base group-hover/item:text-brand-green transition-colors">{feat}</span>
                                    </div>
                                ))}
                            </ul>

                            <button
                                onClick={() => window.open(whatsappLink('Máquina de Vendas', 'R$ 997'), '_blank')}
                                className="w-full bg-brand-green text-slate-950 font-black py-7 rounded-2xl transition-all duration-500 text-xs md:text-sm uppercase tracking-[0.25em] shadow-[0_0_50px_rgba(163,230,53,0.3)] hover:bg-white hover:scale-[1.02] flex items-center justify-center gap-4"
                            >
                                <Rocket size={22} className="group-hover:rotate-12 transition-transform" /> QUERO O SITE COMPLETO
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-[10px] md:text-xs text-slate-400 font-black uppercase tracking-[0.4em] py-12 border-t border-slate-100 text-center reveal-hidden delay-300">
                    <span className="flex items-center gap-3"><CreditCard size={18} /> Até 12x no Cartão</span>
                    <span className="flex items-center gap-3"><ShieldCheck size={18} /> Pagamento Blindado</span>
                    <span className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-green" /> SATISFAÇÃO 100%</span>
                </div>
            </div>
        </section>
    );
};