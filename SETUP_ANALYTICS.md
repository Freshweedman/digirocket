# 📊 CONFIGURAÇÃO DE ANALYTICS E TRACKING

## ✅ O QUE JÁ FOI IMPLEMENTADO

### 1. Google Analytics 4
- ✅ Script instalado no `index.html`
- ✅ Utility functions em `utils/analytics.ts`
- ✅ Tracking de eventos prontos

### 2. Meta Pixel (Facebook)
- ✅ Script instalado no `index.html`
- ✅ Eventos automáticos (PageView, Contact, Lead)
- ✅ Integrado com funções de tracking

### 3. Microsoft Clarity
- ✅ Script instalado (heatmaps grátis!)
- ✅ Session recordings prontos

### 4. Tracking Events
- ✅ WhatsApp clicks
- ✅ CTA clicks
- ✅ Niche preview views
- ✅ Scroll depth
- ✅ Form submissions

---

## 🔧 PASSOS PARA CONFIGURAR

### 1. Google Analytics 4 (15 minutos)

#### a) Criar conta:
1. Acesse: https://analytics.google.com/
2. Clique em "Começar a medir"
3. Crie uma conta e propriedade
4. Selecione "Web"
5. Copie o **ID de medição** (formato: `G-XXXXXXXXXX`)

#### b) Configurar no código:
```bash
# Abra: digirocket-lp/index.html
# Procure por: G-XXXXXXXXXX (2 ocorrências)
# Substitua pelo seu ID real
```

**Linha 166:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID_AQUI"></script>
```

**Linha 171:**
```javascript
gtag('config', 'G-SEU_ID_AQUI', {
```

#### c) Testar:
```bash
1. npm run dev
2. Abra o site
3. Acesse Analytics → Relatórios em tempo real
4. Deve aparecer 1 usuário ativo (você!)
```

---

### 2. Meta Pixel (Facebook) (15 minutos)

#### a) Criar Pixel:
1. Acesse: https://business.facebook.com/
2. Menu → Gerenciador de Eventos
3. Conectar fontes de dados → Web → Meta Pixel
4. Clique em "Configurar manualmente o Pixel"
5. Copie o **Pixel ID** (número tipo: `123456789012345`)

#### b) Configurar no código:
```bash
# Abra: digirocket-lp/index.html
# Procure por: YOUR_PIXEL_ID_HERE (2 ocorrências)
# Substitua pelo seu Pixel ID
```

**Linha 179:**
```javascript
fbq('init', 'SEU_PIXEL_ID_AQUI');
```

**Linha 196:**
```html
<img ... src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView..." />
```

#### c) Testar:
```bash
1. Instale extensão: Facebook Pixel Helper (Chrome)
2. npm run dev
3. Abra o site
4. Extensão deve mostrar pixel verde ✅
```

---

### 3. Microsoft Clarity (10 minutos)

#### a) Criar projeto:
1. Acesse: https://clarity.microsoft.com/
2. Criar novo projeto
3. Nome: "DigiRocket LP"
4. Website: seu domínio
5. Copie o **Clarity ID** (formato: `abcdefghij`)

#### b) Configurar no código:
```bash
# Abra: digirocket-lp/index.html
# Procure por: YOUR_CLARITY_ID
# Substitua pelo seu ID
```

**Linha 187:**
```javascript
})(window, document, "clarity", "script", "SEU_CLARITY_ID");
```

#### c) Testar:
```bash
1. npm run dev
2. Abra o site e navegue
3. Clarity dashboard deve mostrar sessão ativa
4. Heatmaps aparecem após ~100 visitas
```

---

## 📈 EVENTOS QUE ESTÃO SENDO RASTREADOS

### Automáticos:
- ✅ **PageView** - Toda vez que carrega a página
- ✅ **Scroll Depth** - 25%, 50%, 75%, 100%

### WhatsApp Clicks:
```typescript
// Hero CTA principal
trackWhatsAppClick('hero_main_cta')

// Hero CTA secundário
trackWhatsAppClick('hero_secondary_cta')

// FloatingCTA
trackWhatsAppClick('floating_cta')

// Footer
trackWhatsAppClick('footer')
```

### CTA Clicks:
```typescript
trackCTAClick('Falar no WhatsApp', 'hero')
trackCTAClick('Ver exemplos', 'hero_secondary')
```

### Niche Previews:
```typescript
trackNicheView('delivery')
trackNicheView('booking')
// etc...
```

---

## 🎯 COMO ADICIONAR TRACKING EM NOVOS BOTÕES

### Exemplo 1: Botão de WhatsApp
```tsx
import { trackWhatsAppClick, trackCTAClick } from '../utils/analytics';

<a 
  href="https://wa.me/5551984689725?text=..."
  onClick={() => {
    trackWhatsAppClick('nome_da_localizacao');
    trackCTAClick('Texto do botão', 'secao');
  }}
>
  Falar no WhatsApp
</a>
```

### Exemplo 2: Botão qualquer
```tsx
import { trackEvent } from '../utils/analytics';

<button 
  onClick={() => {
    trackEvent('click_ver_portfolio', {
      event_category: 'engagement',
      event_label: 'portfolio_button'
    });
  }}
>
  Ver Portfólio
</button>
```

### Exemplo 3: Scroll de seção
```tsx
import { trackSectionView } from '../utils/analytics';
import { useEffect, useRef } from 'react';

const MySection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        trackSectionView('minha_secao');
      }
    }, { threshold: 0.5 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return <section ref={sectionRef}>...</section>;
};
```

---

## 📊 RELATÓRIOS RECOMENDADOS

### Google Analytics:
1. **Tempo real** - Usuários ativos agora
2. **Aquisição** - De onde vêm os visitantes
3. **Engajamento** - Páginas mais visitadas
4. **Conversões** - Eventos personalizados
   - click_whatsapp
   - click_cta
   - view_niche_preview

### Meta Pixel:
1. **Eventos** - Ver todos os eventos disparados
2. **Conversões** - Contact, Lead events
3. **Públicos** - Criar audiences para remarketing

### Microsoft Clarity:
1. **Heatmaps** - Onde as pessoas clicam
2. **Session Recordings** - Ver navegação real
3. **Scroll Maps** - Até onde rolam a página

---

## 🎯 METAS DE CONVERSÃO

### Configurar no Google Analytics:
1. Admin → Eventos → Criar evento
2. Nome: `conversion_whatsapp`
3. Condição: event_name = `click_whatsapp`
4. Marcar como conversão

### Configurar no Facebook:
1. Gerenciador de Eventos → Eventos personalizados
2. Criar novo evento: `Contato_WhatsApp`
3. Regra: URL contém "wa.me"
4. Usar para otimização de anúncios

---

## ⚠️ IMPORTANTE - LGPD / GDPR

### Banner de Cookies (ADICIONAR):
```tsx
// Criar componente: CookieConsent.tsx
const CookieConsent = () => {
  const [accepted, setAccepted] = useState(
    localStorage.getItem('cookie_consent') === 'true'
  );
  
  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setAccepted(true);
    // Inicializar Analytics aqui
  };
  
  if (accepted) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm text-white">
          Usamos cookies para melhorar sua experiência. 
          <a href="/privacidade" className="underline ml-1">Saiba mais</a>
        </p>
        <button 
          onClick={handleAccept}
          className="bg-brand-green text-slate-950 px-6 py-2 rounded-lg font-bold"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};
```

---

## 🚀 PRÓXIMOS PASSOS

### Hoje:
- [ ] Configurar Google Analytics ID
- [ ] Configurar Meta Pixel ID
- [ ] Configurar Clarity ID
- [ ] Testar eventos no console

### Amanhã:
- [ ] Criar dashboard personalizado no Analytics
- [ ] Configurar públicos de remarketing
- [ ] Adicionar banner de cookies (LGPD)

### Semana que vem:
- [ ] Análise de conversão
- [ ] A/B testing baseado em dados
- [ ] Otimização de CTAs

---

## 📱 TESTAR NO MOBILE

```bash
1. Build: npm run build
2. Preview: npm run preview
3. Acessar de outro device na mesma rede
4. Verificar eventos no Analytics (tempo real)
```

---

## 🆘 TROUBLESHOOTING

### Analytics não aparece:
1. Verificar ID correto (G-XXXXXXXXXX)
2. Abrir console: `window.gtag` deve existir
3. Desabilitar AdBlock
4. Aguardar até 24h para relatórios completos

### Pixel não funciona:
1. Instalar Facebook Pixel Helper
2. Verificar ID correto (números apenas)
3. Abrir console: `window.fbq` deve existir
4. Testar em navegador anônimo

### Clarity não grava:
1. Verificar ID correto
2. Aguardar ~15 minutos após primeiro acesso
3. Precisa de mínimo 10 sessões

---

## ✅ CHECKLIST FINAL

Antes de considerar completo:
- [ ] Google Analytics configurado e testado
- [ ] Meta Pixel configurado e testado
- [ ] Clarity configurado
- [ ] Eventos de WhatsApp funcionando
- [ ] Scroll depth tracking ativo
- [ ] Console sem erros de tracking
- [ ] Extensões de teste instaladas
- [ ] Primeiro relatório gerado

---

**Status:** 🟡 CONFIGURAÇÃO PENDENTE  
**Próximo passo:** Substituir os IDs placeholder pelos reais  
**Tempo estimado:** 40 minutos total

---

**Dúvidas?** Leia a documentação oficial:
- [Google Analytics 4](https://support.google.com/analytics/)
- [Meta Pixel](https://www.facebook.com/business/help/742478679120153)
- [Microsoft Clarity](https://docs.microsoft.com/en-us/clarity/)
