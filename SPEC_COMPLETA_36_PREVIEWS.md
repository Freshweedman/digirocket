# ESPECIFICAÇÃO COMPLETA - 36 PREVIEWS PREMIUM

## ✅ RECEBIDO E CONFIRMADO

Todas as especificações foram recebidas para os 36 templates:
- 6 DELIVERY
- 6 AGENDAMENTO  
- 6 SERVIÇOS
- 6 CATÁLOGO
- 6 VENDAS/VSL
- 6 QUIZ

## REGRAS GLOBAIS IMPLEMENTAR

```tsx
// Container raiz de TODOS os previews
className="h-full w-full overflow-y-auto scrollbar-none flex flex-col select-none pb-8"

// Todas as imagens
onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}}

// URLs Unsplash
https://images.unsplash.com/photo-{ID}?w=300&auto=format&fit=crop&q=80

// Tipografia micro
text-xs font-black  // títulos
text-[9px]          // descrições
text-[10px] font-mono // preços
```

## ESTRUTURA POR CATEGORIA

### DELIVERY (fundo branco, acento laranja)
- Hero banner comida
- badges entrega/frete/avaliação
- 3 itens grid
- depoimento
- CTA

### AGENDAMENTO (fundo dark, acento âmbar)
- Hero foto serviço
- seletor 5 dias
- 3 serviços com img/duração/preço
- equipe (3 avatares)
- CTA

### SERVIÇOS (fundo claro, acento emerald)
- Hero profissional
- badge especialidade
- texto autoridade
- 3 benefícios com ícone
- form mini
- selos confiança

### CATÁLOGO (fundo dark tech, acento cyan)
- Header sticky logo + badge
- banner destaque
- 3 produtos img/specs/preço
- CTA catálogo completo

### VENDAS/VSL (fundo dark, acento lime/red)
- Header logo + badge AO VIVO
- player vídeo mockup
- headline forte
- 3 bullets benefício
- 3 planos
- countdown
- CTA urgência

### QUIZ (fundo claro, acento azul)
- Header logo + passo X/3
- barra progresso
- headline pergunta
- 4 opções (1 pré-selecionada)
- selos confiança
- botão avançar

## DADOS COMPLETOS RECEBIDOS

✅ Todos os 36 nichos com:
- Título, subtítulo
- Hero image URL
- Badges/status
- 3 itens detalhados (nome, desc, preço, img)
- CTAs específicos
- Depoimentos/equipe/benefícios conforme categoria

## STATUS ATUAL

- Build: ✅ Compilando
- 12/36 previews completos
- 24/36 previews funcionais mas simples

## PRÓXIMO PASSO

Implementar os 24 restantes seguindo exatamente as specs recebidas.

Tempo estimado: ~4-6 horas de trabalho focado.
