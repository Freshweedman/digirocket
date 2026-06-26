import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, DollarSign, Rocket, Smartphone, Zap, Shield } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  role: 'ai' | 'user';
  time: string;
}

const QUICK_REPLIES = [
  { icon: DollarSign, text: 'Preços' },
  { icon: Rocket, text: 'Como funciona' },
  { icon: Smartphone, text: 'Exemplos' },
  { icon: Zap, text: 'Prazo' },
  { icon: Shield, text: 'Garantia' },
];

function getTime() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function getReply(text: string): string {
  const t = text.toLowerCase();
  if (t.includes('preço') || t.includes('preco') || t.includes('valor') || t.includes('custa') || t.includes('quanto')) {
    return 'Nossos planos:\n\n✅ Essencial — R$497 (1 página, 48h)\n✅ Premium — R$997 (multi-páginas, hospedagem vitalícia)\n\nPagamento único, sem mensalidade.\nhttps://wa.me/5551984689725';
  }
  if (t.includes('funciona') || t.includes('como') || t.includes('processo')) {
    return 'Simples:\n\n1️⃣ Manda nome + 3 fotos\n2️⃣ 48h = site pronto\n3️⃣ Você aprova antes\n\nBora?\nhttps://wa.me/5551984689725';
  }
  if (t.includes('prazo') || t.includes('tempo') || t.includes('demora') || t.includes('entrega')) {
    return '48 horas úteis ⚡\n\nVocê aprova antes de publicar. 1 rodada de ajustes inclusa.\nhttps://wa.me/5551984689725';
  }
  if (t.includes('garantia') || t.includes('devol') || t.includes('risco')) {
    return 'Garantia de 7 dias ✅\n\nNão curtiu = 100% devolvido. Sem perguntas.\nhttps://wa.me/5551984689725';
  }
  if (t.includes('exemplo') || t.includes('portfolio') || t.includes('ver site') || t.includes('modelo')) {
    return '+200 projetos entregues ✅\n\nMe conta teu nicho no WhatsApp que mando exemplos:\nhttps://wa.me/5551984689725';
  }
  if (t.includes('whatsapp') || t.includes('falar') || t.includes('contato') || t.includes('humano')) {
    return 'Me chama aqui:\nhttps://wa.me/5551984689725\n\nRespondo em menos de 5 min ✅';
  }
  if (t.includes('obrigad') || t.includes('valeu') || t.includes('vlw')) {
    return 'Por nada! ✅\n\nQuando quiser avançar:\nhttps://wa.me/5551984689725';
  }
  if (t.includes('caro') || t.includes('desconto') || t.includes('parcel')) {
    return 'Agências cobram R$2.500+ com mensalidade.\n\nNosso: R$497 uma vez. Parcelamos 12x ✅\nhttps://wa.me/5551984689725';
  }
  if (t.includes('oi') || t.includes('olá') || t.includes('ola') || t.includes('bom dia') || t.includes('boa tarde') || t.includes('boa noite')) {
    return 'Oi! Tudo bem? ✅\n\nJá tem site ou quer criar um?';
  }
  return 'Entendi ✅\n\nPosso te ajudar melhor pelo WhatsApp:\nhttps://wa.me/5551984689725';
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Só inicializa quando abrir pela primeira vez
  useEffect(() => {
    if (isOpen && !isInitialized) {
      setIsInitialized(true);
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: 'Oi! Sou a Luna da DigiRocket ✅\n\nSite profissional em 48h, R$497. Como ajudo?',
          role: 'ai',
          time: getTime()
        }]);
      }, 300);
    }
  }, [isOpen, isInitialized]);

  useEffect(() => {
    if (messagesRef.current && isOpen) {
      // Debounce scroll para evitar recalcular sempre
      const scrollToBottom = () => {
        messagesRef.current!.scrollTop = messagesRef.current!.scrollHeight;
      };
      const timeoutId = setTimeout(scrollToBottom, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [messages, isTyping, isOpen]);

  const sendMessage = (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isTyping) return;
    setMessages(prev => [...prev, { id: Date.now(), text: msg, role: 'user', time: getTime() }]);
    setInput('');
    setShowQuick(false);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: getReply(msg), role: 'ai', time: getTime() }]);
      setIsTyping(false);
      setShowQuick(true);
    }, 600 + Math.random() * 800);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const renderText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(https:\/\/wa\.me\/\d+)/g);
      return (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {parts.map((part, j) =>
            part.startsWith('https://wa.me/') ? (
              <a key={j} href={part} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-1 bg-green-500/20 text-green-400 rounded-md text-[11px] font-bold hover:bg-green-500/30 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp
              </a>
            ) : part
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 6px 24px rgba(16,185,129,0.5)' }}
        >
          <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white">
            <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed z-[9998] flex flex-col chat-window"
          style={{
            background: 'rgba(12, 12, 16, 0.92)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 px-4 py-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="relative">
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-emerald-500/40">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="Luna" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2" style={{ borderColor: 'rgba(12,12,16,0.92)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold leading-tight">Luna</p>
              <p className="text-green-400 text-[10px] font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />Online
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <X className="w-4 h-4 text-white/60" strokeWidth={2} />
            </button>
          </div>

          {/* Messages */}
          <div ref={messagesRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`} style={{ animation: 'chatIn 0.25s ease-out' }}>
                {msg.role === 'ai' && (
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 self-end ring-1 ring-white/10">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face" alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                )}
                <div className="max-w-[75%]">
                  <div className={`px-3 py-2 text-[12px] leading-[1.5] ${
                    msg.role === 'user'
                      ? 'rounded-2xl rounded-br-sm text-white'
                      : 'rounded-2xl rounded-bl-sm text-white/90'
                  }`} style={{
                    background: msg.role === 'user' ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(255,255,255,0.06)',
                    border: msg.role === 'ai' ? '1px solid rgba(255,255,255,0.08)' : 'none'
                  }}>
                    {renderText(msg.text)}
                  </div>
                  <p className={`text-[9px] mt-0.5 px-1 ${msg.role === 'user' ? 'text-right' : ''}`} style={{ color: 'rgba(255,255,255,0.25)' }}>{msg.time}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 items-end" style={{ animation: 'chatIn 0.25s ease-out' }}>
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face" alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="px-3 py-2.5 rounded-2xl rounded-bl-sm flex gap-1.5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDuration: '0.7s' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: '0.15s', animationDuration: '0.7s' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '0.7s' }} />
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {showQuick && messages.length > 0 && (
            <div className="flex gap-1.5 px-3 py-2 overflow-x-auto flex-shrink-0 chat-quick" style={{ scrollbarWidth: 'none' }}>
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q.text}
                  onClick={() => sendMessage(q.text)}
                  className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-semibold text-white/70 whitespace-nowrap hover:text-white active:scale-95 transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <q.icon className="w-3 h-3 text-emerald-400" strokeWidth={2} />
                  {q.text}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 px-3 flex-shrink-0 chat-input" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex-1 flex items-center rounded-full px-3 py-2" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Mensagem..."
                rows={1}
                className="flex-1 bg-transparent text-white text-[13px] resize-none outline-none placeholder:text-white/25 max-h-[50px]"
                style={{ lineHeight: '1.3', scrollbarWidth: 'none' }}
              />
            </div>
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-20 active:scale-90"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
            >
              <Send className="w-4 h-4 text-white" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatIn { from { opacity: 0; transform: translateY(6px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

        /* MOBILE: fullscreen bottom sheet */
        @media (max-width: 640px) {
          .chat-window {
            inset: 0;
            width: 100vw;
            height: 100dvh;
            border-radius: 0;
            border: none;
          }
          .chat-input {
            padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
            padding-top: 8px;
          }
          .chat-messages {
            -webkit-overflow-scrolling: touch;
          }
          .chat-quick::-webkit-scrollbar { display: none; }
        }

        /* DESKTOP: floating widget */
        @media (min-width: 641px) {
          .chat-window {
            bottom: 88px;
            right: 24px;
            width: 360px;
            height: 560px;
            max-height: calc(100vh - 120px);
            border-radius: 24px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }
          .chat-input {
            padding-bottom: 12px;
            padding-top: 8px;
          }
        }
      `}</style>
    </>
  );
};
