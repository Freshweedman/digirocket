import React from 'react';
import { Search, Heart, ShoppingCart, Percent, ChevronRight } from 'lucide-react';

export const PharmaApp: React.FC = () => {
   return (
      <div className="bg-slate-50 min-h-full text-slate-800 pb-10 font-sans">
         <div className="bg-blue-600 px-4 pt-8 pb-12 rounded-b-3xl relative">
            <div className="flex justify-between items-center text-white mb-6">
               <div className="flex flex-col">
                  <span className="text-[10px] opacity-70">Bem-vindo</span>
                  <span className="font-black text-lg">PharmaCare</span>
               </div>
               <ShoppingCart size={18} />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 border border-blue-50">
               <Search size={16} className="text-slate-300" />
               <span className="text-slate-400 text-xs">O que você procura?</span>
            </div>
         </div>

         <div className="mt-10 px-4 grid grid-cols-3 gap-2">
            {[{ icon: Percent, color: 'text-blue-500', bg: 'bg-blue-100', label: 'Ofertas' },
            { icon: Heart, color: 'text-red-500', bg: 'bg-red-100', label: 'Saúde' },
            { icon: ShoppingCart, color: 'text-green-500', bg: 'bg-green-100', label: 'Pedidos' }
            ].map((item, i) => (
               <div key={i} className="bg-white p-3 rounded-2xl shadow-sm flex flex-col items-center gap-1.5 border border-slate-100">
                  <div className={`${item.bg} p-2 rounded-xl`}>
                     <item.icon size={16} className={item.color} />
                  </div>
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-tight">{item.label}</span>
               </div>
            ))}
         </div>

         <div className="mt-8 px-4">
            <h3 className="font-black text-slate-800 text-sm mb-4">Ofertas em Destaque</h3>
            <div className="space-y-3">
               <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                  <img src="https://picsum.photos/seed/vitamin/100/100" className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1 flex flex-col justify-center">
                     <h4 className="font-black text-xs text-slate-800 leading-tight mb-1">Multivitamínico Complex</h4>
                     <div className="flex items-center justify-between">
                        <span className="font-black text-blue-600 text-sm">R$ 45,90</span>
                        <button className="bg-blue-600 p-1 rounded-lg text-white">
                           <ChevronRight size={14} />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Inline CTA */}
         <div className="px-4 py-6">
            <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest shadow-lg">
               Finalizar Pedido <ShoppingCart size={14} />
            </button>
         </div>
      </div>
   );
};