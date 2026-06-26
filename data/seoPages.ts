export interface SeoPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { title: string; content: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
}

// PÁGINAS PRINCIPAIS
export const mainPages: SeoPage[] = [
  {
    slug: 'criar-site',
    title: 'Criar Site Profissional em 48h | DigiRocket — R$497',
    description: 'Crie seu site profissional em 48 horas a partir de R$497. Pagamento único, sem mensalidade. Aparece no Google, cliente chega pelo WhatsApp.',
    h1: 'Criar Site Profissional em 48 Horas',
    intro: 'Ter um site profissional não precisa ser caro nem demorado. Na DigiRocket, entregamos sites prontos em 48 horas, focados em converter visitantes em clientes pelo WhatsApp. A partir de R$497, pagamento único.',
    sections: [
      { title: 'Por que criar um site?', content: 'Quando alguém procura pelo seu serviço no Google e você não aparece, o cliente vai pro concorrente. Um site profissional te coloca no mapa, transmite credibilidade e gera contatos 24h por dia — mesmo quando você está dormindo.' },
      { title: 'Como funciona na DigiRocket', content: 'Você manda o nome do negócio, endereço, WhatsApp e 3 fotos pelo celular. Em 48 horas, entregamos o site pronto. Você aprova antes de publicar. Uma rodada de ajustes inclusa.' },
      { title: 'O que está incluso', content: 'Site responsivo (funciona em celular e desktop), botão de WhatsApp em destaque, integração com Google Maps, hospedagem inclusa, certificado SSL (https), velocidade otimizada e SEO básico.' },
      { title: 'Quanto custa', content: 'Plano Essencial: R$497 (1 página). Plano Premium: R$997 (várias páginas + hospedagem vitalícia). Pagamento único. Sem mensalidade. Parcelamos em até 12x.' }
    ],
    faqs: [
      { q: 'Preciso saber programar?', a: 'Não. Fazemos tudo por você. Só precisa enviar as informações do negócio.' },
      { q: 'O site aparece no Google?', a: 'Sim. Cadastramos no Google Meu Negócio e otimizamos para SEO local.' },
      { q: 'Tem mensalidade?', a: 'Não. Pagamento único. Hospedagem inclusa por 1 ano (Essencial) ou vitalícia (Premium).' },
      { q: 'E se eu não gostar?', a: 'Garantia de 7 dias. Devolvemos 100% sem perguntas.' }
    ],
    cta: 'Quero criar meu site em 48h'
  },
  {
    slug: 'criar-site-profissional',
    title: 'Criar Site Profissional para Empresa | DigiRocket',
    description: 'Site profissional para sua empresa em 48h. Design moderno, responsivo, com WhatsApp e Google. A partir de R$497 sem mensalidade.',
    h1: 'Site Profissional para Empresa',
    intro: 'Um site profissional é o cartão de visita digital do seu negócio. Na DigiRocket, criamos sites modernos, rápidos e otimizados para converter visitantes em clientes reais.',
    sections: [
      { title: 'O que é um site profissional?', content: 'É um site com design moderno, que funciona bem no celular, carrega rápido, aparece no Google e tem um botão claro de contato. Não é um site genérico — é feito sob medida pro seu negócio.' },
      { title: 'Diferença entre profissional e amador', content: 'Site amador: demora pra carregar, não funciona no celular, visual desatualizado, sem botão de WhatsApp. Site profissional: rápido, responsivo, focado em vendas, otimizado para Google.' },
      { title: 'Nosso processo', content: '1) Briefing rápido pelo WhatsApp. 2) Desenvolvimento em 48h. 3) Aprovação antes de publicar. 4) Ajustes inclusos. 5) Publicação e indexação no Google.' },
      { title: 'Investimento', content: 'A partir de R$497 pagamento único. Sem surpresas, sem mensalidades escondidas. Hospedagem e SSL inclusos.' }
    ],
    faqs: [
      { q: 'Quanto tempo leva?', a: '48 horas úteis após o envio das informações.' },
      { q: 'Posso editar depois?', a: 'No Plano Premium sim, você edita textos e fotos. No Essencial, pedimos a edição pra você.' },
      { q: 'Funciona no celular?', a: 'Sim. Todos os sites são mobile-first, feitos primeiro para celular.' },
      { q: 'Inclui domínio?', a: 'Orientamos na compra do domínio (.com.br). Custa cerca de R$40/ano.' }
    ],
    cta: 'Quero meu site profissional'
  },
  {
    slug: 'site-em-48h',
    title: 'Site Pronto em 48 Horas | DigiRocket — Entrega Rápida',
    description: 'Seu site profissional pronto em 48 horas. Sem demora, sem enrolação. Envie as informações hoje e amanhã seu negócio está online.',
    h1: 'Site Pronto em 48 Horas',
    intro: 'Enquanto outras agências levam semanas ou meses, nós entregamos em 2 dias úteis. Sem reuniões intermináveis, sem formulários gigantes. Você manda as informações pelo WhatsApp e a gente faz o resto.',
    sections: [
      { title: 'Por que 48 horas?', content: 'Porque desenvolvemos um processo otimizado para negócios locais. Não precisa de reunião de briefing, não precisa de fotógrafo profissional. 3 fotos do celular + informações básicas = site pronto.' },
      { title: 'O que você precisa enviar', content: 'Nome do negócio, endereço, telefone/WhatsApp, 3 fotos (pode ser do celular), lista de serviços ou produtos, e horário de funcionamento. Só isso.' },
      { title: 'Cronograma real', content: 'Dia 1: você envia as informações. Dia 2: recebe o rascunho para aprovar. Dia 2-3: ajustes (se precisar). Dia 3: site no ar, indexado no Google.' },
      { title: 'Garantia de prazo', content: 'Se não entregarmos em 48h úteis, você ganha desconto. Mas isso nunca aconteceu — temos 100% de pontualidade nos últimos 200 projetos.' }
    ],
    faqs: [
      { q: '48h são dias úteis?', a: 'Sim. Se enviar na segunda, recebe até quarta. Se enviar na sexta, recebe até terça.' },
      { q: 'E se eu demorar pra enviar as informações?', a: 'O prazo começa quando recebemos tudo completo. Enviou parcial, esperamos o resto.' },
      { q: 'Posso pedir alterações?', a: 'Sim. 1 rodada de ajustes está inclusa no preço.' },
      { q: 'O site já sai no Google?', a: 'Submetemos para indexação no mesmo dia. Em 1-7 dias já aparece nas buscas.' }
    ],
    cta: 'Quero meu site em 48h'
  },
  {
    slug: 'sobre-a-digirocket',
    title: 'Sobre a DigiRocket | Agência Digital Porto Alegre',
    description: 'Conheça a DigiRocket: agência digital de Porto Alegre que já entregou mais de 200 sites profissionais em todo o Brasil. Sites em 48h a partir de R$497.',
    h1: 'Sobre a DigiRocket',
    intro: 'A DigiRocket é uma agência digital fundada em Porto Alegre, RS, em 2021. Nossa missão é simples: colocar pequenos negócios no Google de forma rápida, acessível e profissional.',
    sections: [
      { title: 'Nossa história', content: 'Nascemos da frustração de ver pequenos empreendedores pagando fortunas por sites que demoravam meses pra ficar prontos. Criamos um processo de entrega em 48h que já atendeu mais de 200 clientes em todo o Brasil.' },
      { title: 'Nossos números', content: 'Mais de 200 sites entregues. Avaliação 4.9 estrelas. 100% de entregas no prazo. Clientes em todos os estados do Brasil. Tempo médio de resposta: 5 minutos no WhatsApp.' },
      { title: 'Como trabalhamos', content: 'Atendimento 100% remoto via WhatsApp. Sem reuniões desnecessárias. Processo enxuto: briefing, desenvolvimento, aprovação, publicação. Tudo em 48 horas.' },
      { title: 'Para quem é', content: 'Para qualquer negócio local que quer aparecer no Google e receber clientes pelo WhatsApp: barbearias, salões, restaurantes, clínicas, advogados, lojas, academias, delivery e muito mais.' }
    ],
    faqs: [
      { q: 'A DigiRocket é confiável?', a: 'Sim. Mais de 200 projetos entregues, avaliação 4.9 estrelas, garantia de 7 dias em todos os projetos.' },
      { q: 'Onde fica a DigiRocket?', a: 'Em Porto Alegre, RS. Mas atendemos todo o Brasil de forma remota.' },
      { q: 'Quantas pessoas trabalham?', a: 'Somos um time enxuto de especialistas em design, desenvolvimento e marketing digital.' },
      { q: 'Desde quando existem?', a: 'Desde 2021. Já são 5 anos entregando sites profissionais.' }
    ],
    cta: 'Falar com a DigiRocket'
  }
];

// PÁGINAS DE NICHO (primeiras 10)
export const nichePages: SeoPage[] = [
  {
    slug: 'site-para-barbearia',
    title: 'Site para Barbearia em 48h | DigiRocket — R$497',
    description: 'Criamos o site da sua barbearia em 48h. Aparece no Google, cliente agenda pelo WhatsApp. A partir de R$497, pagamento único.',
    h1: 'Site para Barbearia',
    intro: 'Sua barbearia precisa aparecer quando o cliente busca "barbearia perto de mim" no Google. Com um site profissional, você sai da dependência de indicação e começa a receber clientes novos todo dia.',
    sections: [
      { title: 'O problema', content: 'Agenda cheia só de indicação e vazia no resto. Cliente pesquisa "barbearia perto de mim" e acha o concorrente. Você perde tempo respondendo WhatsApp pra confirmar horário.' },
      { title: 'A solução', content: 'Site profissional com agendamento por WhatsApp, Google Maps integrado, fotos dos cortes, tabela de preços e depoimentos. Tudo pronto em 48h.' },
      { title: 'O que inclui', content: 'Galeria de cortes, tabela de preços, mapa com localização, botão de WhatsApp, horários de funcionamento, depoimentos de clientes e link para redes sociais.' },
      { title: 'Resultados reais', content: 'Carlos S. da Monster Burger (SP) saiu de 15 para 40 pedidos por semana. Barbearias que colocamos online relatam aumento médio de 60% nos agendamentos no primeiro mês.' }
    ],
    faqs: [
      { q: 'Quanto custa um site para barbearia?', a: 'A partir de R$497, pagamento único. Sem mensalidade.' },
      { q: 'Demora quanto tempo?', a: '48 horas após envio das informações.' },
      { q: 'Tem agendamento online?', a: 'O cliente clica e já cai no seu WhatsApp pronto pra agendar.' },
      { q: 'Aparece no Google Maps?', a: 'Sim. Cadastramos no Google Meu Negócio incluso no serviço.' }
    ],
    cta: 'Quero site pra minha barbearia'
  },
  {
    slug: 'site-para-delivery',
    title: 'Site para Delivery em 48h | DigiRocket — R$497',
    description: 'Site para delivery com cardápio digital, botão de pedido e WhatsApp. Pronto em 48h, a partir de R$497. Sem taxas do iFood.',
    h1: 'Site para Delivery',
    intro: 'Pare de pagar 27% de comissão pro iFood. Com seu próprio site de delivery, o cliente pede direto pelo WhatsApp e você fica com 100% do lucro.',
    sections: [
      { title: 'Por que ter site próprio', content: 'No iFood você paga até 27% de comissão. Com site próprio, o pedido vai direto pro seu WhatsApp. Zero taxa. E o cliente vira SEU, não do aplicativo.' },
      { title: 'O que você recebe', content: 'Cardápio digital com fotos, categorias organizadas, destaque de promoções, botão de pedido por WhatsApp, mapa de entrega e tempo médio estimado.' },
      { title: 'Como funciona o pedido', content: 'Cliente acessa o site, escolhe os itens, clica em "Pedir" e a mensagem vai formatada pro seu WhatsApp com o pedido completo. Você confirma e entrega.' },
      { title: 'Investimento', content: 'R$497 pagamento único. Sem mensalidade, sem taxa por pedido, sem comissão. O lucro é 100% seu.' }
    ],
    faqs: [
      { q: 'Substitui o iFood?', a: 'Complementa. Você mantém o iFood e também recebe pedidos diretos sem pagar comissão.' },
      { q: 'Cliente pode pagar online?', a: 'O pagamento é feito na entrega (dinheiro, cartão, Pix) ou via link de pagamento que você envia no WhatsApp.' },
      { q: 'Posso trocar o cardápio?', a: 'Sim. No Plano Premium você edita. No Essencial, solicite e atualizamos em até 24h.' },
      { q: 'Funciona com múltiplos endereços?', a: 'Sim. Configuramos área de entrega e múltiplas unidades se precisar.' }
    ],
    cta: 'Quero site pro meu delivery'
  },
  {
    slug: 'site-para-restaurante',
    title: 'Site para Restaurante em 48h | DigiRocket — R$497',
    description: 'Site profissional para restaurante com cardápio, fotos, reservas e WhatsApp. Pronto em 48h a partir de R$497.',
    h1: 'Site para Restaurante',
    intro: 'Quando alguém busca "restaurante perto de mim" no Google, quem aparece primeiro leva o cliente. Um site profissional coloca seu restaurante no topo e traz reservas direto no WhatsApp.',
    sections: [
      { title: 'Por que restaurante precisa de site', content: '72% das pessoas pesquisam o restaurante online antes de ir. Se você não tem site, o cliente não acha cardápio, não vê fotos e vai pro concorrente que tem.' },
      { title: 'O que incluímos', content: 'Cardápio digital com fotos, galeria do ambiente, horário de funcionamento, mapa com localização, botão de reserva por WhatsApp, link pro Google Maps e depoimentos.' },
      { title: 'Google Meu Negócio', content: 'Cadastramos e otimizamos seu perfil no Google. Quando alguém buscar "restaurante em [sua cidade]", você aparece com fotos, avaliações e link direto.' },
      { title: 'Resultados', content: 'Restaurantes que colocamos online relatam aumento de 40-80% nas reservas no primeiro mês. O investimento se paga em poucos dias.' }
    ],
    faqs: [
      { q: 'Posso colocar fotos dos pratos?', a: 'Sim. Fotos do celular mesmo funcionam bem. Otimizamos pra ficarem bonitas no site.' },
      { q: 'Tem sistema de reserva?', a: 'Sim, via WhatsApp. Cliente clica e já manda mensagem formatada querendo reservar.' },
      { q: 'Posso atualizar o cardápio?', a: 'Sim. No Plano Premium você edita direto. No Essencial, solicite e atualizamos.' },
      { q: 'Quanto custa?', a: 'A partir de R$497. Pagamento único, sem mensalidade.' }
    ],
    cta: 'Quero site pro meu restaurante'
  }
];

// PÁGINAS POR CIDADE (primeiras 5)
export const cityPages: SeoPage[] = [
  {
    slug: 'criar-site-porto-alegre',
    title: 'Criar Site em Porto Alegre em 48h | DigiRocket — R$497',
    description: 'Agência digital em Porto Alegre. Site profissional em 48h a partir de R$497, sem mensalidade. Aparece no Google. Atendemos toda a região metropolitana.',
    h1: 'Criar Site em Porto Alegre',
    intro: 'Somos de Porto Alegre e atendemos toda a região metropolitana. Se você tem um negócio local e quer aparecer no Google quando seu cliente procurar pelo seu serviço, estamos prontos pra te ajudar.',
    sections: [
      { title: 'Por que Porto Alegre precisa de sites locais', content: 'Porto Alegre tem mais de 1,5 milhão de habitantes buscando serviços no Google todos os dias. Quem tem site profissional com Google Meu Negócio aparece primeiro. Quem não tem, perde cliente pro concorrente.' },
      { title: 'Nichos que mais atendemos em POA', content: 'Barbearias, salões de beleza, restaurantes, delivery, clínicas, consultórios, academias, pet shops, auto centers e lojas no Centro, Moinhos, Cidade Baixa, Bom Fim, Zona Norte e Região Metropolitana.' },
      { title: 'Atendimento local', content: 'Somos de Porto Alegre. Conhecemos os bairros, a concorrência e o comportamento do consumidor gaúcho. Isso faz diferença no resultado do seu site.' },
      { title: 'Região Metropolitana', content: 'Também atendemos Canoas, Gravataí, Novo Hamburgo, São Leopoldo, Cachoeirinha, Alvorada, Viamão, Esteio, Sapucaia do Sul, Guaíba e todas as cidades da Grande Porto Alegre.' }
    ],
    faqs: [
      { q: 'Vocês são de Porto Alegre?', a: 'Sim. Nossa base é em Porto Alegre, RS.' },
      { q: 'Atendem a região metropolitana?', a: 'Sim. Canoas, Gravataí, Novo Hamburgo, São Leopoldo e toda a Grande POA.' },
      { q: 'Preciso ir até vocês?', a: 'Não. Tudo é feito pelo WhatsApp, 100% remoto.' },
      { q: 'Quanto custa?', a: 'A partir de R$497. Mesmo preço para toda a região.' }
    ],
    cta: 'Quero site em Porto Alegre'
  },
  {
    slug: 'criar-site-sao-paulo',
    title: 'Criar Site em São Paulo em 48h | DigiRocket — R$497',
    description: 'Criação de site profissional em São Paulo em 48h a partir de R$497. Sem mensalidade. Coloca seu negócio no Google. Atendemos toda a Grande SP.',
    h1: 'Criar Site em São Paulo',
    intro: 'São Paulo é a maior cidade do Brasil, com milhões de buscas diárias no Google. Se seu negócio não tem site, você está invisível para clientes que estão prontos para comprar.',
    sections: [
      { title: 'O mercado de SP', content: 'São Paulo tem mais de 12 milhões de habitantes e a maior concentração de negócios locais do Brasil. A concorrência é alta — quem não aparece no Google simplesmente não existe.' },
      { title: 'Vantagem do site local', content: 'Com Google Meu Negócio otimizado + site profissional, seu negócio aparece quando alguém busca "seu serviço + bairro". Isso vale ouro em SP.' },
      { title: 'Como atendemos SP', content: '100% remoto via WhatsApp. Não precisa sair do seu negócio. Envie as informações, em 48h o site tá pronto.' },
      { title: 'Bairros e regiões', content: 'Atendemos toda São Paulo: Centro, Pinheiros, Vila Mariana, Moema, Itaim, Jardins, Zona Norte, Zona Leste, Zona Sul, ABC, Guarulhos, Osasco, Campinas e toda Grande SP.' }
    ],
    faqs: [
      { q: 'Vocês são de São Paulo?', a: 'Nossa base é em Porto Alegre, mas atendemos São Paulo 100% online. Já entregamos dezenas de sites para SP.' },
      { q: 'O site fica otimizado pra SP?', a: 'Sim. Configuramos Google Meu Negócio com endereço em SP e SEO local focado na sua região.' },
      { q: 'Qual o prazo?', a: '48 horas. Mesmo prazo para todo o Brasil.' },
      { q: 'Tem diferença de preço?', a: 'Não. R$497 para todo o Brasil.' }
    ],
    cta: 'Quero site em São Paulo'
  }
];

// Exporta tudo junto
export const allPages = [...mainPages, ...nichePages, ...cityPages];
