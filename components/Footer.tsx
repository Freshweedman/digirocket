import React from 'react';
import { Rocket, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 md:py-40 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Visible Particles Texture */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(163,230,53,0.4) 1px, transparent 1px)', backgroundSize: '44px 44px' }}></div>
      <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 relative z-10">

        {/* Brand Column */}
        <div className="space-y-8 reveal-hidden">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-green p-3 rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.4)] group-hover:scale-110 transition-all duration-500">
              <Rocket size={28} className="text-slate-950 fill-slate-950 transform group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-sans font-black text-3xl tracking-tighter text-white">
              DigiRocket
            </span>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed font-medium">
            O site que coloca seu negócio no Google <br />
            <span className="text-white font-bold italic drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">e faz o cliente chegar no WhatsApp.</span>
          </p>
          <div className="flex gap-4">
            {[
              { icon: Instagram, link: 'https://www.instagram.com/ojuangoes' },
              { icon: MessageCircle, link: 'https://wa.me/5551984689725' },
              { icon: Mail, link: 'mailto:contato@digirocket.site' }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-brand-green hover:text-slate-950 transition-all text-white hover:-translate-y-2 group shadow-xl">
                <social.icon size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px] flex items-center gap-3">
            <div className="w-8 h-px bg-brand-green/40"></div>
            Mapa Estratégico
          </h4>
          <ul className="space-y-5 text-sm font-medium">
            {['Como Funciona', 'Nichos', 'Resultados', 'Planos', 'FAQ'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-green transition-all hover:pl-3 flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-brand-green/10 rounded-full group-hover:bg-brand-green group-hover:shadow-[0_0_8px_#a3e635] transition-all"></div>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px] flex items-center gap-3">
            <div className="w-8 h-px bg-brand-green/40"></div>
            Suporte VIP
          </h4>
          <ul className="space-y-7 text-sm font-medium">
            <li className="flex items-center gap-5 group cursor-pointer hover:text-white transition-all">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-green group-hover:bg-brand-green group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-all">
                <Mail size={18} />
              </div>
              contato@digirocket.site
            </li>
            <li className="flex items-center gap-5 group cursor-pointer hover:text-white transition-all">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-green group-hover:bg-brand-green group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-all">
                <Phone size={18} />
              </div>
              (51) 98468-9725
            </li>
            <li className="flex items-center gap-5 group">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-green">
                <MapPin size={18} />
              </div>
              Porto Alegre, RS — Atendemos todo o Brasil
            </li>
          </ul>
        </div>

        {/* High-Tech Newsletter Column */}
        <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
          {/* texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(163,230,53,1) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>

          <h4 className="text-white font-black mb-6 uppercase tracking-[0.3em] text-[11px] relative z-10">News de Elite</h4>
          <p className="text-xs text-slate-500 mb-8 font-medium leading-relaxed relative z-10">Assine para receber estratégias de vendas semanais diretamente de nossos especialistas.</p>
          <div className="space-y-4 relative z-10">
            <div className="relative group">
              <input type="email" placeholder="Seu melhor email" className="bg-black/40 border border-white/5 text-sm py-4 px-5 rounded-2xl w-full outline-none focus:border-brand-green/40 text-white transition-all" />
              <div className="absolute inset-0 bg-brand-green/2 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <button className="w-full bg-brand-green text-slate-950 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:scale-[1.02] active:scale-95 transition-all">
              Assinar Agora
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-slate-600">
        <span className="text-center md:text-left leading-relaxed">© 2026 DIGIROCKET · Sites em 48h pra todo o Brasil</span>
        <div className="flex gap-10">
          <a href="#" className="hover:text-brand-green transition-colors">Privacidade</a>
          <a href="#cidades" className="hover:text-brand-green transition-colors">Cidades</a>
          <a href="#" className="hover:text-brand-green transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};