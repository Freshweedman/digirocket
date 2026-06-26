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
            content: `${cidade.nome} tem ${cidade.pop} habitantes. Todo dia, centenas deles pesquisam "${servico.slug} perto de mim" ou "${servico.slug} em ${cidade.nome}" no Google. Quem aparece primeiro ganha o cliente. Quem não tem site perde a venda para o concorrente que investiu em presença digital. É questão de sobrevivência no mercado atual.`
          },
          {
            title: `O que está incluso no site para ${servico.nome}`,
            content: `✅ Site responsivo (perfeito no celular e desktop)\n✅ Botão WhatsApp em destaque para contato direto\n✅ Cadastro no Google Maps para buscas locais\n✅ Galeria de fotos dos seus serviços/produtos\n✅ Formulário de contato integrado\n✅ Estrutura pensada para SEO local\n✅ Hospedagem inclusa por 1 ano\n✅ Pronto em 48 horas úteis`
          },
          {
            title: `Quanto custa um site para ${servico.nome}?`,
            content: `Agências em ${cidade.nome} cobram entre R$2.500 e R$5.000 para criar um site, fora a mensalidade de manutenção que pode chegar a R$300/mês. Na DigiRocket, você paga R$497 uma vez só. Sem mensalidade escondida, sem pegadinha. O site é seu e você só paga a hospedagem depois do primeiro ano (cerca de R$10/mês).`
          },
          {
            title: `Como funciona a criação do site`,
            content: `1. Você manda nome do negócio, endereço, telefone e 3 fotos pelo WhatsApp\n2. Em 48 horas úteis o site está pronto para você aprovar\n3. Você revisa e solicita ajustes se necessário\n4. Publicamos o site e cadastramos no Google\n5. Cliente começa a chegar no seu WhatsApp\n\nSimples, rápido e sem complicação. Você não precisa entender nada de tecnologia.`
          },
          {
            title: `Diferenciais do nosso trabalho`,
            content: `Não fazemos sites genéricos. Cada projeto é pensado para o tipo de negócio específico. Para ${servico.nome.toLowerCase()}, sabemos exatamente quais informações o cliente busca antes de decidir. Estruturamos o site para responder essas dúvidas e facilitar o contato via WhatsApp, que é onde acontece a conversão real.`
          },
          {
            title: `Atendemos ${cidade.nome} e região`,
            content: `Nosso atendimento para ${cidade.nome} é 100% remoto pelo WhatsApp. Você não precisa se deslocar. Enviamos tudo por mensagem, você aprova online e o site entra no ar. Já atendemos dezenas de clientes em ${cidade.nome} e cidades vizinhas com esse mesmo processo ágil e transparente.`
          }
        ],
        faqs: [
          {
            q: `Vocês atendem ${cidade.nome}?`,
            a: `Sim! Atendemos ${cidade.nome} e todo o ${cidade.estado} remotamente pelo WhatsApp. Não é necessário reunião presencial.`
          },
          {
            q: 'Quanto tempo demora para ficar pronto?',
            a: '48 horas úteis após você enviar as informações (nome, endereço, fotos). Finais de semana e feriados não contam no prazo.'
          },
          {
            q: `Meu ${servico.slug} é pequeno. Vale a pena ter site?`,
            a: `Vale muito. Quanto menor o negócio, mais importante é ter site. É o que faz você competir com empresas maiores e aparecer nas buscas locais do Google. Clientes procuram "${servico.slug} perto de mim" todos os dias.`
          },
          {
            q: 'Preciso pagar mensalidade depois?',
            a: 'Não. R$497 é pagamento único. Hospedagem está inclusa por 1 ano. Depois disso, a hospedagem custa cerca de R$10/mês (você escolhe onde hospedar).'
          },
          {
            q: 'Posso fazer alterações no site depois?',
            a: 'Sim. Você pode contratar horas de suporte para alterações (R$50/hora) ou aprender a fazer sozinho. O site fica 100% seu.'
          },
          {
            q: 'E se eu não gostar do resultado?',
            a: 'Você aprova antes de publicar. Se mesmo assim não ficar satisfeito, devolvemos 100% do valor em até 7 dias após a entrega. Sem burocracia.'
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
          content: `7 em cada 10 clientes buscam no Google antes de escolher um ${servico.slug}. Se você não tem site profissional, eles vão para o concorrente que tem. Não é questão de luxo, é questão de sobrevivência. O cliente moderno pesquisa, compara e decide online antes mesmo de fazer contato.`
        },
        {
          title: 'O que seu site vai ter',
          content: `✅ Design profissional adaptado ao seu segmento\n✅ Funciona perfeitamente no celular (onde está 80% dos acessos)\n✅ Botão de WhatsApp em destaque para contato direto\n✅ Cadastro no Google Maps para buscas "perto de mim"\n✅ Galeria de fotos otimizada\n✅ Formulário de contato integrado\n✅ Carregamento rápido (performance otimizada)\n✅ Pronto em 48 horas úteis`
        },
        {
          title: 'Quanto custa',
          content: `Agências tradicionais cobram entre R$2.500 e R$5.000 para criar um site básico, fora a mensalidade de manutenção que varia de R$200 a R$500/mês. Na DigiRocket você paga R$497 uma vez só. Sem mensalidade escondida. Hospedagem grátis por 1 ano inclusa. Depois disso, você escolhe onde hospedar (cerca de R$10/mês).`
        },
        {
          title: 'Como funciona o processo',
          content: `1. Você envia informações básicas pelo WhatsApp (nome, endereço, telefone, 3 fotos)\n2. Em 48 horas úteis criamos o site completo\n3. Você recebe o link para aprovar antes de publicar\n4. Fazemos ajustes se necessário (até 2 rodadas de revisão)\n5. Publicamos e cadastramos no Google\n6. Clientes começam a chegar\n\nTudo pelo WhatsApp, sem reuniões, sem complicação.`
        },
        {
          title: `Estrutura pensada para ${servico.nome}`,
          content: `Cada segmento tem necessidades específicas. Para ${servico.nome.toLowerCase()}, sabemos exatamente quais informações o cliente busca: localização, horário de atendimento, serviços oferecidos, formas de pagamento e, principalmente, um jeito fácil de entrar em contato. Estruturamos tudo isso de forma clara e objetiva.`
        },
        {
          title: 'Atendemos todo o Brasil',
          content: `Não importa se você está em São Paulo, Porto Alegre, Manaus ou qualquer outra cidade. Nosso processo é 100% remoto. Já atendemos clientes em mais de 50 cidades diferentes. O resultado é sempre o mesmo: site profissional, entregue no prazo, sem dor de cabeça.`
        }
      ],
      faqs: [
        {
          q: 'Atende minha cidade?',
          a: 'Sim! Atendemos todo o Brasil 100% remotamente pelo WhatsApp. Não é necessário reunião presencial.'
        },
        {
          q: 'Preciso de fotos profissionais?',
          a: 'Não necessariamente. Fotos do celular com boa iluminação já funcionam bem. A gente otimiza para ficarem bonitas no site.'
        },
        {
          q: `Funciona para ${servico.slug} pequeno?`,
          a: `Funciona especialmente bem. É exatamente o que faz ${servico.slug} pequeno competir com os grandes nas buscas do Google. Nivela o jogo.`
        },
        {
          q: 'Tem garantia?',
          a: '7 dias após a entrega. Se não gostar, devolvemos 100% do valor. Sem perguntas, sem burocracia.'
        },
        {
          q: 'Posso alterar o site depois?',
          a: 'Sim. Você pode contratar horas de suporte (R$50/hora) ou aprender a fazer sozinho. Fornecemos acesso completo.'
        },
        {
          q: 'O site vai aparecer no Google?',
          a: 'Vamos cadastrar no Google e estruturar para SEO local. Rankear na primeira página depende de vários fatores, mas a estrutura estará pronta.'
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
