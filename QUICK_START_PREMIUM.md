# ⚡ GUIA RÁPIDO - PREMIUM PREVIEW

## 🎯 COMO USAR

### Ver os efeitos em ação:

1. **Inicie o dev server:**
```bash
npm run dev
```

2. **Abra no navegador:**
```
http://localhost:3000/
```

3. **Role até a seção "Simulador Interativo"**

4. **Interaja com o preview:**
   - 🖱️ **Mova o mouse sobre o iPhone** → Tilt 3D ativa
   - 👆 **Clique nos cards laterais** → Troca de preview
   - 🌟 **Observe o glare** → Brilho segue o cursor
   - 💎 **Veja os reflexos** → Bordas reagem ao movimento
   - 🎨 **Note as sombras** → Cores pulsam e se movem

---

## 📝 ARQUIVOS PRINCIPAIS

### Código:
```
components/InteractiveSimulator.tsx  → Simulador com efeitos 3D
components/apps/*.tsx                → Apps de preview
```

### Documentação:
```
PREMIUM_PREVIEW_GUIDE.md   → Guia completo (16k+ palavras)
CHANGELOG_PREMIUM.md       → Changelog detalhado
SUMMARY.txt                → Resumo visual
```

---

## 🎨 CUSTOMIZAÇÃO RÁPIDA

### Ajustar intensidade do tilt:
```typescript
// Em InteractiveSimulator.tsx, linha ~30
const maxTilt = 8; // Mude para 4 (sutil) ou 12 (extremo)
```

### Mudar cor do glare:
```tsx
// Linha ~400
background: `radial-gradient(
  circle at ${x}% ${y}%, 
  rgba(255,255,255,0.3) 0%,  // ← Mude essa cor
  transparent 50%
)`
```

### Desativar efeito específico:
```tsx
// Para desativar o glare:
style={{
  opacity: 0,  // ← Mude de isHovering ? 0.5 : 0
```

---

## 🐛 TROUBLESHOOTING

### Efeito 3D não funciona:
1. Verifique se está usando Chrome/Firefox/Safari atualizado
2. Abra DevTools → Console → procure por erros
3. Teste `prefers-reduced-motion` no sistema

### Performance ruim:
1. Abra DevTools → Performance tab
2. Grave interação com o preview
3. Verifique se FPS está abaixo de 60
4. Considere reduzir `maxTilt` ou blur

### Build falha:
```bash
# Limpe e reinstale
rm -rf node_modules dist
npm install
npm run build
```

---

## 📊 TESTAR PERFORMANCE

### Chrome DevTools:
```
1. F12 → Performance tab
2. Clique Record (●)
3. Interaja com o preview por 10s
4. Pare gravação
5. Verifique FPS (deve ser ~60)
```

### Lighthouse:
```
1. F12 → Lighthouse tab
2. Selecione "Performance"
3. Run audit
4. Score deve ser >90
```

---

## 🚀 DEPLOY

### Build de produção:
```bash
npm run build
```

### Preview da build:
```bash
npm run preview
```

### Deploy (Vercel):
```bash
vercel --prod
```

---

## 💡 DICAS PRO

### 1. Adicionar novo niche:
```typescript
// 1. Adicione tipo
type NicheType = 'delivery' | 'booking' | 'seu-niche';

// 2. Adicione imagem
const nicheImages = {
  'seu-niche': 'https://images.unsplash.com/photo-...'
};

// 3. Crie card
<div onClick={() => handleNicheChange('seu-niche')}>
  ...
</div>

// 4. Renderize app
{activeNiche === 'seu-niche' && <SeuNicheApp />}
```

### 2. Mudar cores do tema:
```tsx
// Busque por:
activeNiche === 'delivery' ? 'bg-orange-500/15' : ...

// Substitua cores:
'bg-purple-500/15'  // Background
'border-purple-500/60'  // Border
'shadow-purple-500/20'  // Shadow
'text-purple-400'  // Text
```

### 3. Adicionar nova animação:
```css
/* No final do <style> tag */
@keyframes sua-animacao {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

```tsx
<div className="animate-sua-animacao">
```

---

## 📱 TESTAR EM MOBILE

### Desktop Chrome (simular mobile):
```
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Selecione iPhone 14 Pro
3. Rotacione (Ctrl+Shift+R)
4. Teste touch interactions
```

### Real device:
```
1. Conecte mesmo WiFi
2. Encontre IP local: ipconfig (Windows) / ifconfig (Mac)
3. Acesse: http://192.168.X.X:3000
4. Teste gyroscope (Fase 2)
```

---

## 🆘 PRECISA DE AJUDA?

### Consulte:
- 📚 `PREMIUM_PREVIEW_GUIDE.md` → Documentação completa
- 📝 `CHANGELOG_PREMIUM.md` → Mudanças detalhadas
- 🌐 [TypeUI GitHub](https://github.com/bergside/typeui) → Inspiração

### Debug comum:
```typescript
// Adicione logs para debug
console.log('Mouse:', mousePosition);
console.log('Tilt:', tilt);
console.log('Is hovering:', isHovering);
```

---

## ✅ CHECKLIST ANTES DE DEPLOY

- [ ] `npm run build` sem erros
- [ ] Lighthouse score >90
- [ ] Testado em Chrome, Firefox, Safari
- [ ] Testado em mobile (responsive)
- [ ] Efeitos funcionando
- [ ] Transições suaves
- [ ] Performance 60fps
- [ ] Sem console errors

---

## 🎉 PRONTO!

Seu preview agora está no **NÍVEL PREMIUM AAA**! 🚀

Aproveite os efeitos 3D incríveis e veja sua taxa de conversão subir! 📈

---

**Dúvidas?** Leia `PREMIUM_PREVIEW_GUIDE.md` para detalhes técnicos completos.

**Quer mais?** Implemente as features da Fase 2 (gyroscope, skeleton loading, etc.)

---

Desenvolvido com 💎 por **Kiro AI**  
Junho 2026 | Versão 2.0 Premium Edition
