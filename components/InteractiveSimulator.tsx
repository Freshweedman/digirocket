import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { HamburgueriaPreview } from './apps/HamburgueriaPreview';
import { BarbeariaPreview } from './apps/BarbeariaPreview';
import { ConsultoriaPreview } from './apps/ConsultoriaPreview';
import { ModaPreview } from './apps/ModaPreview';
import { CursoPreview } from './apps/CursoPreview';
import { PizzariaPreview } from './apps/PizzariaPreview';

const templates = [
  { 
    id: 'hamburgueria', 
    name: 'Delivery', 
    category: 'delivery',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    component: HamburgueriaPreview 
  },
  { 
    id: 'barbearia', 
    name: 'Barbearia', 
    category: 'agendamento',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop',
    component: BarbeariaPreview 
  },
  { 
    id: 'consultoria', 
    name: 'Consultoria', 
    category: 'serviços',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop',
    component: ConsultoriaPreview 
  },
  { 
    id: 'moda', 
    name: 'Loja Online', 
    category: 'catálogo',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    component: ModaPreview 
  },
  { 
    id: 'curso', 
    name: 'Curso Online', 
    category: 'vendas',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
    component: CursoPreview 
  },
  { 
    id: 'pizzaria', 
    name: 'Pizzaria', 
    category: 'delivery',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    component: PizzariaPreview 
  },
];

export const InteractiveSimulator: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = templates.find(t => t.id === selectedId);

  return (
    <section className="relative w-full bg-black py-16 md:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* HEADLINE */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight">
            Veja como fica <span className="text-emerald-400">o seu site</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Clique em um exemplo pra ver o preview completo. Fazemos pra <span className="text-white font-bold">qualquer tipo de negócio</span>.
          </p>
        </div>

        {/* GRID DE TEMPLATES - 3x2 no mobile, 6 no desktop */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 md:gap-4 mb-8">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedId(selectedId === t.id ? null : t.id)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                selectedId === t.id
                  ? 'ring-3 ring-emerald-400 scale-105 shadow-2xl shadow-emerald-500/40'
                  : 'hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 ring-1 ring-white/10 hover:ring-emerald-400/50'
              }`}
            >
              {/* Imagem */}
              <div className="aspect-[3/4] relative">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  selectedId === t.id 
                    ? 'bg-emerald-500/30' 
                    : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60'
                }`} />
                
                {/* Botão "VER SITE" centralizado */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  selectedId === t.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="bg-emerald-500 text-black px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-emerald-500/50">
                    <Eye className="w-3 h-3 md:w-4 md:h-4" strokeWidth={2.5} />
                    <span className="hidden md:inline">Ver Site</span>
                    <span className="md:hidden">Ver</span>
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all ${
                selectedId === t.id 
                  ? 'bg-emerald-500' 
                  : 'bg-gradient-to-t from-black to-transparent'
              }`}>
                <p className={`text-xs md:text-sm font-black uppercase tracking-wide ${
                  selectedId === t.id ? 'text-black' : 'text-white'
                }`}>
                  {t.name}
                </p>
                <p className={`text-[9px] md:text-[11px] font-bold ${
                  selectedId === t.id ? 'text-black/70' : 'text-emerald-400'
                }`}>
                  {t.category}
                </p>
              </div>

              {/* Pulsing indicator quando não selecionado */}
              {!selectedId && (
                <div className="absolute top-2 right-2 w-5 h-5 md:w-6 md:h-6">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 animate-ping"></span>
                  <span className="relative inline-flex rounded-full w-5 h-5 md:w-6 md:h-6 bg-emerald-500 items-center justify-center">
                    <Eye className="w-2.5 h-2.5 md:w-3 md:h-3 text-black" strokeWidth={3} />
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Instrução */}
        {!selected && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full animate-pulse">
              <span className="text-emerald-400 text-xs md:text-sm font-bold">👆 Clique em um exemplo para ver o site completo</span>
            </div>
          </div>
        )}

        {/* PREVIEW EXPANDIDO */}
        {selected && (
          <div style={{ animation: 'chatIn 0.3s ease-out' }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                <span className="text-emerald-400 text-sm font-black uppercase tracking-wider">{selected.name} — Preview ao Vivo</span>
              </div>
              <button onClick={() => setSelectedId(null)} className="text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5">
                Fechar ✕
              </button>
            </div>

            {/* Layout: celular + info lado a lado no desktop */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12">

              {/* CELULAR — tamanho maior no desktop */}
              <div className="flex-shrink-0">
                {/* Mobile: 260×530 | Desktop: 340×694 */}
                <div className="relative hidden md:block" style={{ width: 340, height: 694 }}>
                  <div className="absolute -inset-6 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute inset-0 rounded-[52px] shadow-2xl overflow-hidden"
                       style={{ background: 'linear-gradient(145deg, #3a3a3a, #111)' }}>
                    <div className="absolute inset-[4px] rounded-[48px] overflow-hidden bg-white">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl" style={{ width: 110, height: 22 }} />
                      <div style={{ width: 390, transform: 'scale(0.846)', transformOrigin: 'top left', overflow: 'hidden' }}>
                        {/* 332 / 390 = 0.851 */}                        <div className="overflow-y-scroll scrollbar-none" style={{ height: 820 }}>
                          <selected.component />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-black/20 rounded-full" style={{ width: 100, height: 4 }} />
                    </div>
                  </div>
                </div>

                {/* Mobile version (smaller) */}
                <div className="relative md:hidden" style={{ width: 260, height: 530 }}>
                  <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute inset-0 rounded-[44px] shadow-2xl overflow-hidden"
                       style={{ background: 'linear-gradient(145deg, #2a2a2a, #111)' }}>
                    <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-white">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl" style={{ width: 90, height: 18 }} />
                      <div style={{ width: 390, transform: 'scale(0.647)', transformOrigin: 'top left', overflow: 'hidden' }}>
                        <div className="overflow-y-scroll scrollbar-none" style={{ height: 820 }}>
                          <selected.component />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-black/30 rounded-full" style={{ width: 80, height: 4 }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* INFO — só aparece no desktop */}
              <div className="hidden md:flex flex-col justify-center gap-6 max-w-xs">
                <div>
                  <p className="text-xs text-emerald-400/60 uppercase tracking-widest font-bold mb-1">{selected.category}</p>
                  <h3 className="text-2xl font-black text-white mb-2">{selected.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Esse é um exemplo real de como o site do seu negócio pode ficar. Design único, responsivo e pronto para converter visitantes em clientes.</p>
                </div>

                <div className="space-y-2.5">
                  {[
                    '✓ Pronto em 48 horas',
                    '✓ A partir de R$497',
                    '✓ Sem mensalidade',
                    '✓ Aparece no Google',
                    '✓ Botão WhatsApp incluso',
                    '✓ Funciona no celular',
                  ].map(item => (
                    <div key={item} className="text-sm font-medium text-emerald-400">{item}</div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5551984689725?text=Oi%2C+quero+um+site+igual+a+esse+exemplo!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3.5 rounded-xl font-black text-sm transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Quero este estilo
                </a>

                <p className="text-xs text-zinc-600 text-center">Fazemos sob medida pra <span className="text-emerald-400 font-bold">qualquer ramo</span></p>
              </div>
            </div>
          </div>
        )}

        {/* Nota final */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-xs md:text-sm">
            Não viu seu negócio? <span className="text-emerald-400 font-bold">Fazemos sob medida pra qualquer ramo.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
