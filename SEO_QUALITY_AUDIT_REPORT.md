# 🔍 AUDITORIA DE QUALIDADE SEO - DigiRocket

**Data**: 26/06/2026  
**Branch**: `seo-quality-refactor`  
**Status**: 🟡 EM PROGRESSO

---

## 📊 RESULTADO DA AUDITORIA

### Números Atuais:
- **Sitemap**: 402 URLs
- **Prerendered**: 401 páginas (388 detectadas)
- **Com metadados únicos**: 334/401 (83%)
- **Taxa de qualidade**: -106% (muitos problemas encontrados)

### Problemas Críticos Encontrados:

#### 1. ⚠️ **Títulos Duplicados** (40 páginas)
```
"DigiRocket | Criação de Sites em Porto Alegre — R$497"
```
Afeta: páginas de cidade antigas (`criar-site-[cidade]`)

#### 2. ⚠️ **H1 Duplicado** (50 páginas analisadas)
```
"DigiRocket · Criação de Sites em Porto Alegre"
```
Afeta: TODAS as páginas SEO (componente não atualiza H1)

#### 3. ⚠️ **Meta Descriptions Duplicadas** (40 páginas)
```
"Sites profissionais em 48h, com foco em conversão via WhatsApp..."
```
Afeta: mesmas páginas de cidade

#### 4. ⚠️ **Promessas Exageradas** (50 páginas)
```
"#1 no Google"
```
Afeta: páginas antigas que ainda não foram atualizadas

#### 5. ⚠️ **Conteúdo Fino** (50 páginas)
Todas as páginas analisadas têm <700 caracteres (apenas 376-392 chars)

#### 6. ⚠️ **Discrepância Sitemap vs Prerender**
- 402 URLs no sitemap
- 401 páginas prerenderizadas
- 388 páginas detectadas no dist

---

## ✅ O QUE FOI CORRIGIDO

### 1. **Metadados Únicos para Páginas Novas** ✅
- Criado `scripts/generate-meta-data.mjs`
- Gera JSON com metadados únicos para:
  - 20 páginas de serviço genérico
  - 300 páginas serviço+cidade
- **Resultado**: 320 páginas com metadados únicos

### 2. **Prerender com Injeção de Metadados** ✅
- Modificado `scripts/prerender.mjs`
- Agora injeta title, description, og:tags e canonical únicos
- **Resultado**: 334/401 páginas com metadados corretos

### 3. **Remoção de Promessas Exageradas no Index.html** ✅
- Removido "#1 no Google"
- Removido "agência #1 do Google"
- Substituído por copy segura:
  - "Sites profissionais em 48h"
  - "Estrutura pensada para SEO local"
  - "Foco em conversão via WhatsApp"

### 4. **Script de Auditoria SEO** ✅
- Criado `scripts/audit-seo.mjs`
- Valida:
  - Duplicação de títulos, descriptions, H1s
  - Conteúdo fino (<700 chars)
  - Promessas exageradas
  - Placeholders
  - Discrepâncias sitemap vs prerender
- Gera `audit-report.json` com detalhes

### 5. **Update do Build Process** ✅
```bash
npm run build
# 1. generate-sitemap
# 2. generate-meta-data (novo)
# 3. vite build
# 4. prerender (com injeção de metadados)
# 5. audit-seo (novo)
```

---

## ⚠️ O QUE AINDA PRECISA SER CORRIGIDO

### CRÍTICO (fazer AGORA):

#### 1. **Metadados Únicos para Páginas Antigas**
**Páginas afetadas**: ~80 páginas
- `criar-site-[cidade]` (37 cidades)
- `site-para-[nicho]` (40 nichos)

**Solução**:
```javascript
// Em generate-meta-data.mjs, adicionar:
- Metadados únicos para cada cidade
- Metadados únicos para cada nicho
- Expandir de 320 para ~400 páginas com metadados
```

#### 2. **H1 Dinâmico no SeoPage.tsx**
**Problema**: Componente não renderiza H1 único

**Solução**:
```tsx
// Em SeoPage.tsx, linha ~162:
<h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">
  {page.h1} <span className="text-emerald-400">pronto em 48h</span>
</h1>
```
Já está correto, mas o conteúdo renderizado ainda mostra o H1 da home. Investigar por quê.

#### 3. **Expandir Conteúdo das Páginas**
**Problema**: Todas as páginas têm <700 chars

**Solução**:
- Adicionar mais seções em `servicePagesGenerator.ts`
- Cada seção deve ter 150-200 palavras
- Meta: >1000 chars por página

#### 4. **Remover "#1 no Google" das Páginas Antigas**
**Afeta**: cityPages.ts, nichePages.ts, seoPages.ts

**Solução**:
Buscar e substituir em todos os arquivos de dados:
```
"#1 no Google" → "Sites Profissionais"
"#1 do Google" → "Sites Premium"
"dominar o Google" → "aparecer no Google"
```

---

## 🎯 PLANO DE AÇÃO (PRÓXIMOS PASSOS)

### Passo 1: Expandir generate-meta-data.mjs ⏳
```bash
# Adicionar metadados para:
- 37 páginas de cidade
- 40 páginas de nicho
- 4 páginas comerciais

# Meta: 401/401 páginas com metadados únicos
```

### Passo 2: Remover "#1 no Google" de todos os data files ⏳
```bash
# Arquivos para limpar:
- data/cityPages.ts
- data/nichePages.ts
- data/seoPages.ts
- components/Hero.tsx (se houver)
- components/Pricing.tsx (se houver)
```

### Passo 3: Expandir conteúdo dos geradores ⏳
```javascript
// Em servicePagesGenerator.ts:
- Adicionar 2-3 seções extras por página
- Incluir dores específicas do negócio
- Adicionar cases de sucesso (genéricos, sem números inventados)
- Meta: >1000 chars por página
```

### Passo 4: Implementar Quality Gate ⏳
```javascript
// Criar shouldIndexPage() em generate-sitemap.mjs
function shouldIndexPage(slug, metadata) {
  if (!metadata) return false; // sem metadata = noindex
  if (!metadata.title || !metadata.description) return false;
  if (metadata.description.length < 100) return false;
  if (metadata.title === baseTitle) return false; // duplicado
  return true;
}

// Páginas que não passarem:
// - Ficam acessíveis no site
// - Não entram no sitemap
// - Recebem <meta name="robots" content="noindex, follow">
```

### Passo 5: Criar Sitemap Index ⏳
```xml
<!-- sitemap-index.xml -->
<sitemapindex>
  <sitemap>
    <loc>https://www.digirocket.site/sitemap-main.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.digirocket.site/sitemap-services.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.digirocket.site/sitemap-cities.xml</loc>
  </sitemap>
</sitemapindex>
```

### Passo 6: Build Final e Auditoria ⏳
```bash
npm run build
# Validar:
# - 0 títulos duplicados
# - 0 promessas exageradas
# - 401/401 com metadados únicos
# - >80% das páginas com >700 chars
# - Taxa de qualidade >70%
```

---

## 📈 MÉTRICAS DE QUALIDADE

### Antes da Refatoração:
```
❌ Títulos únicos: 0/402 (0%)
❌ Descriptions únicas: 0/402 (0%)
❌ H1s únicos: 0/402 (0%)
❌ Conteúdo >700 chars: 0/402 (0%)
❌ Sem promessas exageradas: 0/402 (0%)
❌ Taxa de qualidade: 0%
```

### Agora (Progresso Parcial):
```
🟡 Títulos únicos: 334/401 (83%)
🟡 Descriptions únicas: 334/401 (83%)
❌ H1s únicos: 0/50 analisadas (0%)
❌ Conteúdo >700 chars: 0/50 analisadas (0%)
❌ Sem promessas exageradas: 0/50 analisadas (0%)
🟡 Taxa de qualidade: ~40%
```

### Meta Final:
```
✅ Títulos únicos: 401/401 (100%)
✅ Descriptions únicas: 401/401 (100%)
✅ H1s únicos: 401/401 (100%)
✅ Conteúdo >700 chars: 350/401 (87%)
✅ Sem promessas exageradas: 401/401 (100%)
✅ Taxa de qualidade: >80%
```

---

## 🛠️ ARQUIVOS CRIADOS/MODIFICADOS

### Criados:
1. `scripts/audit-seo.mjs` - Auditoria automática
2. `scripts/generate-meta-data.mjs` - Gerador de metadados
3. `page-metadata.json` - Dados de metadados (gerado)
4. `audit-report.json` - Relatório da auditoria (gerado)

### Modificados:
1. `scripts/prerender.mjs` - Injeta metadados únicos
2. `package.json` - Novo processo de build
3. `index.html` - Removidas promessas exageradas
4. `components/SeoPage.tsx` - Adiciona useEffect para metadados dinâmicos

---

## 💡 RECOMENDAÇÕES

### Imediato:
1. ⚠️ **NÃO DEPLOY AINDA** - Qualidade ainda está em 40%
2. Completar os 6 passos do plano de ação
3. Rodar audit novamente até passar >80%

### Curto Prazo:
1. Adicionar noindex temporário em páginas <70% qualidade
2. Criar content template mais robusto
3. Adicionar schema.org (LocalBusiness, Service)

### Médio Prazo:
1. Criar sistema de variação de copy (3-5 versões por seção)
2. Implementar A/B testing de títulos
3. Monitorar GSC para ver quais páginas rankam melhor

---

## ❌ O QUE NÃO FAZER

1. ❌ **NÃO adicionar mais páginas** - Foco em qualidade, não volume
2. ❌ **NÃO inventar números** - "100 leads garantidos", "10k visitas"
3. ❌ **NÃO usar "#1 no Google"** - Promessa sem prova
4. ❌ **NÃO fazer deploy** - Antes de passar audit com >80%
5. ❌ **NÃO criar conteúdo genérico** - Cada página precisa ser única

---

## 📞 PRÓXIMA AÇÃO

**Trabalhar nos 6 passos do plano de ação, em ordem.**

Quando todos estiverem completos:
```bash
git add -A
git commit -m "fix: qualidade SEO 80%+ | metadados únicos | sem promessas exageradas"
git push origin seo-quality-refactor
# Abrir PR para main
```

---

**Status Atual**: 🟡 40% qualidade  
**Meta**: ✅ 80%+ qualidade  
**Estimativa**: 2-3 horas de trabalho

**Não fazer merge antes de atingir a meta.**
