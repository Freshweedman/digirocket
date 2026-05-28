import React from 'react';
import { Scissors, Calendar, Clock, MapPin } from 'lucide-react';

export const BarberApp: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-full text-white pb-10 font-sans">
       <div className="bg-[#262626] p-6 rounded-b-[2rem] shadow-xl relative z-10">
         <div className="flex justify-between items-center mb-6 mt-6">
           <div>
             <h2 className="text-xl font-bold text-amber-500">Vikings Barber</h2>
             <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
               <MapPin size={10} /> Av. Paulista, 1000
             </p>
           </div>
           <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black">
             <Scissors size={20} />
           </div>
         </div>
         
         <div className="bg-[#1a1a1a] p-4 rounded-xl flex justify-between items-center border border-gray-800">
            <div className="text-center">
              <p className="text-[10px] text-gray-400 uppercase">Hoje</p>
              <p className="font-bold text-lg">14</p>
            </div>
            <div className="h-8 w-[1px] bg-gray-700"></div>
            <div className="text-center">
               <p className="text-[10px] text-gray-400 uppercase">Horário</p>
               <p className="font-bold text-lg text-amber-500">16:00</p>
            </div>
            <button className="bg-amber-500 text-black text-xs font-bold px-4 py-2 rounded-lg">
              Agendar
            </button>
         </div>
       </div>

       <div className="px-5 mt-6">
         <h3 className="font-bold mb-4 text-sm text-gray-300">Nossos Serviços</h3>
         <div className="space-y-3">
           {[
             { name: "Corte e Barba", price: "R$ 80", time: "50 min" },
             { name: "Corte Degradê", price: "R$ 50", time: "30 min" },
             { name: "Barba Terapia", price: "R$ 40", time: "20 min" }
           ].map((service, i) => (
             <div key={i} className="flex justify-between items-center p-3 border-b border-gray-800 hover:bg-[#262626] transition-colors rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <Scissors size={14} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{service.name}</p>
                    <p className="text-[10px] text-gray-500 flex items-center gap-1">
                      <Clock size={8} /> {service.time}
                    </p>
                  </div>
                </div>
                <span className="font-bold text-amber-500 text-sm">{service.price}</span>
             </div>
           ))}
         </div>
       </div>

       <div className="mt-6 px-5">
         <h3 className="font-bold mb-4 text-sm text-gray-300">Galeria</h3>
         <div className="grid grid-cols-2 gap-3">
            <img src="https://picsum.photos/seed/barber1/200/200" className="rounded-xl w-full h-32 object-cover" />
            <img src="https://picsum.photos/seed/barber2/200/200" className="rounded-xl w-full h-32 object-cover" />
         </div>
       </div>
    </div>
  );
};