import React from 'react';
import { Scissors, Calendar, Clock, Star, MapPin, Award } from 'lucide-react';

export const BarbeariaPreview: React.FC = () => {
  return (
    <div className="bg-black w-full overflow-x-hidden" style={{ minHeight: 844 }}>
      {/* Header Dourado Masculino */}
      <div className="relative bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700 p-6">
        <div className="text-center">
          <Scissors className="w-16 h-16 text-black mx-auto mb-3 rotate-45" strokeWidth={2} />
          <h1 className="text-black text-3xl font-black mb-1 tracking-wider">BARBER KINGS</h1>
          <p className="text-amber-900 text-sm font-bold uppercase tracking-wide">Barbearia Moderna</p>
        </div>
        <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white text-xs font-bold">ABERTO</span>
          </div>
        </div>
      </div>

      {/* Banner Promoção */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-black text-xs font-black uppercase">Oferta Especial</p>
          <p className="text-black text-lg font-black">1º Corte = R$ 35</p>
        </div>
        <Award className="w-10 h-10 text-black" strokeWidth={2} />
      </div>

      {/* Serviços Principais */}
      <div className="p-4 space-y-3">
        <h2 className="text-amber-500 text-lg font-black mb-3 flex items-center gap-2">
          <Scissors className="w-5 h-5" strokeWidth={2} />
          NOSSOS SERVIÇOS
        </h2>

        {[
          { name: 'Corte Clássico', desc: 'Tesoura + máquina + finalização', price: 45, img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop' },
          { name: 'Barba Modelada', desc: 'Navalha + toalha quente + pós-barba', price: 35, img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop' },
          { name: 'Corte + Barba', desc: 'Combo completo com bebida inclusa', price: 70, popular: true, img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop' },
          { name: 'Degradê Premium', desc: 'Corte estilizado + desenho', price: 55, img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop' },
        ].map((serv, i) => (
          <div key={i} className={`bg-zinc-900 rounded-xl overflow-hidden ${serv.popular ? 'border-2 border-amber-500' : 'border border-zinc-800'}`}>
            <div className="flex gap-0">
              <div className="relative w-24 h-24 flex-shrink-0">
                <img src={serv.img} alt={serv.name} className="w-full h-full object-cover" />
                {serv.popular && (
                  <div className="absolute top-1 left-1 bg-amber-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded-full">
                    TOP
                  </div>
                )}
              </div>
              <div className="flex-1 p-3">
                <h3 className="text-white font-black text-sm mb-0.5">{serv.name}</h3>
                <p className="text-zinc-400 text-[10px] mb-2">{serv.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 text-lg font-black">R$ {serv.price}</span>
                  <button className="bg-amber-600 text-black px-3 py-1.5 rounded-lg font-black text-[10px] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    AGENDAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Horários */}
      <div className="px-5 py-4 bg-zinc-900 mx-4 rounded-2xl mb-4">
        <h3 className="text-amber-500 font-black mb-3 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          HORÁRIO DE FUNCIONAMENTO
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-white">
            <span>Segunda a Sexta</span>
            <span className="font-bold">9h - 20h</span>
          </div>
          <div className="flex justify-between text-white">
            <span>Sábado</span>
            <span className="font-bold">9h - 18h</span>
          </div>
          <div className="flex justify-between text-zinc-500">
            <span>Domingo</span>
            <span className="font-bold">Fechado</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 py-4 grid grid-cols-3 gap-3 mb-6">
        <div className="bg-zinc-900 rounded-xl p-3 text-center">
          <Star className="w-6 h-6 text-amber-500 mx-auto mb-1" fill="#F59E0B" strokeWidth={0} />
          <p className="text-white font-black text-lg">4.9</p>
          <p className="text-zinc-400 text-[10px]">Avaliação</p>
        </div>
        <div className="bg-zinc-900 rounded-xl p-3 text-center">
          <Award className="w-6 h-6 text-amber-500 mx-auto mb-1" strokeWidth={2} />
          <p className="text-white font-black text-lg">8 anos</p>
          <p className="text-zinc-400 text-[10px]">Experiência</p>
        </div>
        <div className="bg-zinc-900 rounded-xl p-3 text-center">
          <MapPin className="w-6 h-6 text-amber-500 mx-auto mb-1" strokeWidth={2} />
          <p className="text-white font-black text-lg">Centro</p>
          <p className="text-zinc-400 text-[10px]">Localização</p>
        </div>
      </div>

      {/* CTA WhatsApp Compacto */}
      <div className="bg-black border-t border-amber-600/30 px-4 py-3">
        <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-xs transition-all">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Agendar via WhatsApp
        </button>
      </div>
    </div>
  );
};
