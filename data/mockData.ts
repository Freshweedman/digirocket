// =========================================
// ARQUIVO DE DADOS 100% ISOLADOS E ESTÁTICOS
// Cada objeto é completamente independente
// IMAGENS CORRIGIDAS - URLs FUNCIONAIS
// =========================================

// =========================================
// 1. MODELO: DELIVERY (Monster Burger)
// =========================================
export const deliveryData = {
  title: "Monster Burger",
  subtitle: "Os melhores smash burgers da cidade",
  badge: "Entrega 25-35 min • 15% OFF",
  rating: "4.9",
  features: ["Entrega Rápida", "Pagamento Seguro", "Pix Instantâneo"],
  items: [
    {
      name: "X-Bacon Supremo",
      price: "R$ 32,90",
      desc: "Blend artesanal, queijo derretido e bacon crocante.",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "TOP"
    },
    {
      name: "Smash Duplo",
      price: "R$ 28,90",
      desc: "Dois blends de 100g smash e muito queijo.",
      image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "TOP"
    },
    {
      name: "Combo Família",
      price: "R$ 89,90",
      desc: "4 hambúrgueres + batata frita tamanho família.",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "X-Tudo Especial",
      price: "R$ 35,90",
      desc: "O mais completo da casa com molho artesanal.",
      image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],
  cta: "Pedir Agora"
};

// =========================================
// 2. MODELO: BOOKING (Barber King)
// =========================================
export const bookingData = {
  title: "Barber King",
  subtitle: "Estilo e tradição masculina",
  rating: "4.9 (234)",
  features: ["+5 anos", "Garantido", "Rápido"],
  services: [
    {
      name: "Corte Degradê",
      duration: "45 minutos",
      price: "R$ 45,00",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Barba Terapia",
      duration: "30 minutos",
      price: "R$ 35,00",
      image: "https://images.pexels.com/photos/1621605/pexels-photo-1621605.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Corte + Barba",
      duration: "1h 15min",
      price: "R$ 70,00",
      image: "https://images.pexels.com/photos/1599351/pexels-photo-1599351.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "COMBO"
    },
    {
      name: "Corte Social",
      duration: "40 minutos",
      price: "R$ 40,00",
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],
  cta: "Agendar Corte"
};

// =========================================
// 3. MODELO: LEAD (Clínica Bem-Estar)
// =========================================
export const leadData = {
  title: "Lumina Estética Avançada",
  subtitle: "Realçando sua beleza natural com tecnologia médica de ponta",
  badge: "Vagas Limitadas",
  rating: "5.0",
  formTitle: "Agende sua avaliação gratuita",
  features: ["Diagnóstico gratuito", "Plano sob medida", "Resultados comprovados"],
  treatments: [
    {
      name: "Limpeza de Pele Profunda",
      desc: "Resultado em 1 sessão",
      price: "R$ 180,00",
      image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Peeling Químico",
      desc: "Renovação celular",
      price: "R$ 280,00",
      image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Drenagem Linfática",
      desc: "Reduz inchaços",
      price: "R$ 150,00",
      image: "https://images.pexels.com/photos/3985322/pexels-photo-3985322.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],
  cta: "Agendar Avaliação Gratuita"
};

// =========================================
// 4. MODELO: CATALOG (iTech Store)
// =========================================
export const catalogData = {
  title: "iTech Store",
  subtitle: "Premium Reseller • Online 24h",
  rating: "4.9",
  features: ["Garantia Apple", "100% Original", "Envio 24h"],
  products: [
    {
      name: "iPhone 15 Pro Max",
      specs: "256GB Titânio Azul • Lacrado",
      price: "R$ 8.499",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Original Apple"
    },
    {
      name: "Galaxy S24 Ultra",
      specs: "256GB Grafite • Completo",
      price: "R$ 6.999",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Lacrado"
    },
    {
      name: "AirPods Pro 2",
      specs: "USB-C com Cancelamento de Ruído",
      price: "R$ 1.899",
      image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Original"
    },
    {
      name: "iPhone 14 Pro",
      specs: "128GB Roxo Profundo",
      price: "R$ 6.499",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Premium"
    }
  ],
  cta: "Comprar Aparelho"
};

// =========================================
// 5. MODELO: VSL (Iron Gym)
// =========================================
export const vslData = {
  title: "Iron Gym",
  headline: "O melhor treino da sua vida começa aqui",
  rating: "4.9 (512)",
  heroImage: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
  stats: ["+500 Alunos", "98% Satisfação", "12 sem Resultado"],
  plans: [
    {
      name: "Mensal",
      price: "R$ 149",
      features: ["Acesso total", "App exclusivo", "Suporte"]
    },
    {
      name: "Trimestral",
      price: "R$ 399",
      features: ["Tudo do mensal", "Avaliação física", "Desconto 10%"],
      tag: "POPULAR"
    },
    {
      name: "Anual",
      price: "R$ 1.299",
      features: ["Tudo do trimestral", "Personal 2x/mês", "Desconto 28%"],
      tag: "MELHOR"
    }
  ],
  cta: "Garantir Vaga"
};

// =========================================
// 6. MODELO: QUIZ (EcoSolar)
// =========================================
export const quizData = {
  title: "EcoSolar",
  subtitle: "Simulador Online • 100% Grátis",
  headline: "Economize até 95% na conta de luz",
  heroImage: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600",
  step: "1/3",
  question: "Qual o valor da sua conta de luz?",
  options: ["Até R$ 150", "R$ 150 - R$ 300", "R$ 300 - R$ 500", "Acima de R$ 500"],
  features: ["Sem compromisso", "Resultado imediato", "100% seguro"],
  cta: "Iniciar Simulação"
};
