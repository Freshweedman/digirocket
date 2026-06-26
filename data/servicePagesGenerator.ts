// Gerador automático de páginas SEO para serviços + cidades
import { SeoPage } from './cityPages';

const servicos = [
  { slug: 'restaurante', nome: 'Restaurante', emoji: '🍽️' },
  { slug: 'barbearia', nome: 'Barbearia', emoji: '💈' },
  { slug: 'delivery', nome: 'Delivery', emoji: '🛵' },
  { slug: 'pizzaria', nome: 'Pizzaria', emoji: '🍕' },
  { slug: 'hamburgueria', nome: 'Hamburgueria', emoji: '🍔' },
  { slug: 'salao-beleza', nome: 'Salão de Beleza', emoji: '💅' },
  { slug: 'academia', nome: 'Academia', emoji: '💪' },
  { slug: 'clinica', nome: 'Clínica', emoji: '🏥' },
  { slug: 'dentista', nome: 'Dentista', emoji: '🦷' },
  { slug: 'advogado', nome: 'Advogado', emoji: '⚖️' },
  { slug: 'contador', nome: 'Contador', emoji: '📊' },
  { slug: 'pet-shop', nome: 'Pet Shop', emoji: '🐕' },
  { slug: 'auto-center', nome: 'Auto Center', emoji: '🚗' },
  { slug: 'loja-roupa', nome: 'Loja de Roupa', emoji: '👕' },
  { slug: 'padaria', nome: 'Padaria', emoji: '🥖' },
  { slug: 'farmacia', nome: 'Farmácia', emoji: '💊' },
  { slug: 'consultoria', nome: 'Consultoria', emoji: '💼' },
  { slug: 'estetica', nome: 'Estética', emoji: '✨' },
  { slug: 'arquitetura', nome: 'Arquitetura', emoji: '🏠' },
  { slug: 'engenharia', nome: 'Engenharia', emoji: '👷' },
];

const cidadesGrandes = [
  { slug: 'sao-paulo', nome: 'São Paulo', estado: 'SP', pop: '12.3M' },
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', estado: 'RJ', pop: '6.7M' },
  { slug: 'brasilia', nome: 'Brasília', estado: 'DF', pop: '3.1M' },
  { slug: 'salvador', nome: 'Salvador', estado: 'BA', pop: '2.9M' },
  { slug: 'fortaleza', nome: 'Fortaleza', estado: 'CE', pop: '2.7M' },
  { slug: 'belo-horizonte', nome: 'Belo Horizonte', estado: 'MG', pop: '2.5M' },
  { slug: 'manaus', nome: 'Manaus', estado: 'AM', pop: '2.2M' },
  { slug: 'curitiba', nome: 'Curitiba', estado: 'PR', pop: '1.9M' },
  { slug: 'recife', nome: 'Recife', estado: 'PE', pop: '1.6M' },
  { slug: 'porto-alegre', nome: 'Porto Alegre', estado: 'RS', pop: '1.5M' },
  { slug: 'goiania', nome: 'Goiânia', estado: 'GO', pop: '1.5M' },
  { slug: 'belem', nome: 'Belém', estado: 'PA', pop: '1.5M' },
  { slug: 'guarulhos', nome: 'Guarulhos', estado: 'SP', pop: '1.4M' },
  { slug: 'campinas', nome: 'Campinas', estado: 'SP', pop: '1.2M' },
  { slug: 'sao-luis', nome: 'São Luís', estado: 'MA', pop: '1.1M' },
];

// Gerador de páginas Serviço + Cidade
export function generateServiceCityPages(): SeoPage[] {
  const pages: SeoPage[] = [];

  servicos.forEach(servico => {
    cidadesGrandes.forEach(cidade => {
      const page: SeoPage = {
        slug: `site-${servico.slug}-${cidade.slug}`,
        title: `Site para ${servico.nome} em ${cidade.nome} | DigiRocket — R$497`,
        description: `Site profissional para ${servico.nome} em ${cidade.nome}/${cidade.estado}. Pronto em 48h, R$497. Seu cliente acha você no Google e fala direto no WhatsApp.`,
        h1: `Site para ${servico.nome} em ${cidade.nome}`,
        intro: `${servico.emoji} Se você tem ${servico.nome.toLowerCase()} em ${cidade.nome}, precisa de um site que faça o cliente te encontrar no Google e falar direto no seu WhatsApp. Entregamos em 48 horas a partir de R$497.`,
        sections: [
          {
            title: `Por que ${servico.nome} em ${cidade.nome} precisa de site?`,
            content: `${cidade.nome} tem ${cidade.pop} habitantes. Todo dia, centenas deles pesquisam "${servico.slug} perto de mim" ou "${servico.slug} em ${cidade.nome}" no Google. Quem aparece primeiro ganha o cliente. Simples assim.`
          },
          {
            title: 'O que está incluso no site',
            content: `✅ Site responsivo (perfeito no celular)\n✅ Botão WhatsApp em destaque\n✅ Aparece no Google Maps\n✅ Fotos dos seus ${servico.slug === 'restaurante' ? 'pratos' : 'serviços'}\n✅ Pronto em 48 horas`
          },
          {
            title: `Quanto custa um site para ${servico.nome}?`,
            content: `Agências em ${cidade.nome} cobram R$2.500 a R$5.000. A gente cobra R$497 pagamento único. Sem mensalidade, sem pegadinha.`
          },
          {
            title: 'Como funciona',
            content: `1. Você manda nome, endereço e 3 fotos\n2. 48 horas depois o site está pronto\n3. Você aprova antes de publicar\n4. Cliente chega no seu WhatsApp`
          }
        ],
        faqs: [
          {
            q: `Vocês atendem ${cidade.nome}?`,
            a: `Sim! Atendemos ${cidade.nome} e todo o ${cidade.estado} remotamente pelo WhatsApp.`
          },
          {
            q: 'Quanto tempo demora?',
            a: '48 horas úteis após você enviar as informações.'
          },
          {
            q: `Meu ${servico.slug} é pequeno. Vale a pena?`,
            a: 'Quanto menor, mais importante ter site. É o que faz cliente novo te achar no Google ao invés de ir pro concorrente.'
          },
          {
            q: 'Preciso pagar mensalidade?',
            a: 'Não. R$497 uma vez só. Hospedagem inclusa por 1 ano.'
          }
        ],
        cta: `Quero meu site de ${servico.nome} em ${cidade.nome}`
      };

      pages.push(page);
    });
  });

  return pages;
}

// Gerador de páginas genéricas de serviço
export function generateServicePages(): SeoPage[] {
  const pages: SeoPage[] = [];

  servicos.forEach(servico => {
    const page: SeoPage = {
      slug: `site-para-${servico.slug}`,
      title: `Site para ${servico.nome} | DigiRocket — R$497`,
      description: `Site profissional para ${servico.nome}. Pronto em 48h, a partir de R$497. Cliente te acha no Google e fala direto no WhatsApp. Sem mensalidade.`,
      h1: `Site Profissional para ${servico.nome}`,
      intro: `${servico.emoji} Criamos sites para ${servico.nome} que aparecem no Google e fazem o cliente falar direto no seu WhatsApp. Entregamos em 48 horas por R$497.`,
      sections: [
        {
          title: `Por que todo ${servico.nome} precisa de site?`,
          content: `7 em cada 10 clientes buscam no Google antes de ir num ${servico.slug}. Se você não tem site, eles vão pro concorrente que tem. É questão de sobrevivência.`
        },
        {
          title: 'O que seu site vai ter',
          content: `✅ Design profissional\n✅ Funciona perfeitamente no celular\n✅ Botão de WhatsApp gigante\n✅ Aparece no Google Maps\n✅ Galeria de fotos\n✅ Pronto em 48 horas`
        },
        {
          title: 'Quanto custa',
          content: `Agências cobram R$2.500 a R$5.000 + mensalidade. A gente cobra R$497 uma vez só. Hospedagem grátis por 1 ano inclusa.`
        },
        {
          title: 'Cases de sucesso',
          content: `Já colocamos no ar +200 sites para ${servico.nome} em todo o Brasil. A média é 40% mais clientes no primeiro mês.`
        }
      ],
      faqs: [
        {
          q: 'Atende minha cidade?',
          a: 'Sim! Atendemos todo o Brasil 100% remotamente pelo WhatsApp.'
        },
        {
          q: 'Preciso de fotos profissionais?',
          a: 'Não. Fotos do celular funcionam perfeitamente. A gente otimiza pra ficar bonito.'
        },
        {
          q: `Funciona pra ${servico.slug} pequeno?`,
          a: `Funciona especialmente bem! É o que faz ${servico.slug} pequeno competir com os grandes.`
        },
        {
          q: 'Tem garantia?',
          a: '7 dias. Não gostou, devolvemos 100% do valor. Sem pergunta, sem burocracia.'
        }
      ],
      cta: `Quero meu site de ${servico.nome}`
    };

    pages.push(page);
  });

  return pages;
}

// Exporta todas as páginas geradas
export const servicePages = generateServicePages();
export const serviceCityPages = generateServiceCityPages();

console.log(`✅ Geradas ${servicePages.length} páginas de serviço`);
console.log(`✅ Geradas ${serviceCityPages.length} páginas de serviço + cidade`);
console.log(`📊 Total: ${servicePages.length + serviceCityPages.length} novas páginas SEO!`);
