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

export const cityPages: SeoPage[] = [
  {
    slug: 'criar-site-porto-alegre',
    title: 'Criar Site em Porto Alegre em 48h | DigiRocket — R$497',
    description: 'Agência digital em Porto Alegre. Site profissional em 48h a partir de R$497, sem mensalidade. Aparece no Google. Atendemos toda a Região Metropolitana.',
    h1: 'Criar Site em Porto Alegre',
    intro: 'Somos de Porto Alegre e já ajudamos dezenas de negócios gaúchos a aparecer no Google. Se você tem um comércio, prestador de serviço ou empresa na capital ou na Grande Porto Alegre, entregamos seu site em 48 horas a partir de R$497.',
    sections: [
      { title: 'O mercado gaúcho é competitivo', content: 'Porto Alegre tem mais de 1,4 milhão de habitantes e uma cultura empreendedora forte. Da Moinhos ao Bom Fim, da Zona Norte ao Extremo Sul, a concorrência é intensa em todos os setores. Quem não aparece no Google perde cliente para quem aparece — simples assim.' },
      { title: 'Atendemos toda a Região Metropolitana', content: 'Canoas, Gravataí, Novo Hamburgo, São Leopoldo, Cachoeirinha, Alvorada, Viamão, Esteio, Sapucaia do Sul e Guaíba também estão dentro do nosso raio de atuação. Tudo feito pelo WhatsApp, sem precisar sair do seu negócio.' },
      { title: 'Nichos que mais atendemos em POA', content: 'Barbearias no centro, restaurantes no Bairro Floresta, estética no Petrópolis, advogados na Av. Independência, clínicas odontológicas em Cachoeirinha, delivery no Restinga — cada negócio tem sua necessidade específica e a gente entende o mercado local.' },
      { title: 'Aparecer no Google Maps de Porto Alegre', content: 'Quando alguém busca "barbearia em Porto Alegre" ou "delivery no bairro X", os primeiros resultados são de quem tem site + Google Meu Negócio bem configurado. Fazemos os dois juntos para você aparecer antes da concorrência local.' }
    ],
    faqs: [
      { q: 'Vocês são de Porto Alegre mesmo?', a: 'Sim. Nossa base é em Porto Alegre, RS. Conhecemos o mercado gaúcho e já atendemos clientes em toda a cidade e região metropolitana.' },
      { q: 'Atendem Canoas, Gravataí e São Leopoldo?', a: 'Sim. Toda a Grande Porto Alegre está no nosso raio de atendimento, tudo feito pelo WhatsApp sem custo adicional.' },
      { q: 'Precisa de fotógrafo profissional?', a: 'Não. Fotos do celular com boa luz já funcionam. Você manda pelo WhatsApp e a gente otimiza para o site.' },
      { q: 'Quanto custa?', a: 'A partir de R$497 pagamento único. Sem mensalidade. Hospedagem inclusa por 1 ano.' }
    ],
    cta: 'Quero meu site em Porto Alegre'
  },
  {
    slug: 'criar-site-sao-paulo',
    title: 'Criar Site em São Paulo em 48h | DigiRocket — R$497',
    description: 'Criação de site profissional em São Paulo em 48h a partir de R$497. Sem mensalidade. Coloca seu negócio no Google. Atendemos toda a Grande SP.',
    h1: 'Criar Site em São Paulo',
    intro: 'São Paulo é o maior mercado do Brasil — e a competição online é brutal. Se o seu negócio não aparece no Google quando o cliente busca pelo seu serviço no bairro, você está perdendo dinheiro todo dia. Resolvemos isso em 48 horas.',
    sections: [
      { title: 'São Paulo: onde quem não aparece não existe', content: 'Com mais de 12 milhões de habitantes, São Paulo tem busca orgânica 24 horas. Em cada bairro — do Brooklin à Mooca, de Pinheiros à Zona Leste — existe alguém procurando exatamente o seu serviço no Google agora. Sem site, você é invisível para esse público.' },
      { title: 'Atendimento 100% remoto', content: 'Não importa se você está no Centro, no ABC Paulista, em Guarulhos ou em Osasco. Atendemos toda a Grande São Paulo pelo WhatsApp, sem precisar de reunião presencial. O processo é rápido e você aprova tudo antes de publicar.' },
      { title: 'Bairros e segmentos que atendemos', content: 'Restaurantes em Moema, barbearias no Tatuapé, salões no Morumbi, clínicas no Itaim Bibi, consultórios no Brooklin, lojas no Brás, academias em Interlagos — cada nicho tem seu comportamento de busca e a gente sabe como fazer você aparecer.' },
      { title: 'Google Meu Negócio para SP', content: 'Em São Paulo, o Google Maps é fundamental. Quando alguém busca "dentista perto de mim" ou "pizza delivery no Jardins", o mapa aparece antes dos sites. Configuramos seu Google Meu Negócio junto com o site para você aparecer nos dois lugares.' }
    ],
    faqs: [
      { q: 'Atendem São Paulo sendo de Porto Alegre?', a: 'Sim. Atendemos todo o Brasil remotamente pelo WhatsApp. Já entregamos dezenas de sites para clientes em São Paulo.' },
      { q: 'Funciona para o ABC Paulista?', a: 'Sim. Santo André, São Bernardo, São Caetano, Diadema, Mauá — toda a Grande SP.' },
      { q: 'O site fica otimizado para buscas em SP?', a: 'Sim. Configuramos o site e o Google Meu Negócio com o endereço em São Paulo, focado nas buscas locais da sua região.' },
      { q: 'Quanto tempo demora?', a: '48 horas úteis após o envio das informações. Mesmo prazo para qualquer cidade do Brasil.' }
    ],
    cta: 'Quero meu site em São Paulo'
  },
  {
    slug: 'criar-site-rio-de-janeiro',
    title: 'Criar Site no Rio de Janeiro em 48h | DigiRocket — R$497',
    description: 'Site profissional no Rio de Janeiro em 48h, R$497. Seu negócio aparece no Google carioca. Sem mensalidade. Atendemos toda a Grande Rio.',
    h1: 'Criar Site no Rio de Janeiro',
    intro: 'O Rio de Janeiro é um dos mercados mais movimentados do país, com forte turismo, gastronomia, serviços e comércio local. Do Centro à Barra da Tijuca, de Niterói à Baixada Fluminense, colocamos seu negócio no Google em 48 horas.',
    sections: [
      { title: 'A economia carioca é diversificada', content: 'Turismo, gastronomia, saúde, beleza, serviços profissionais e comércio impulsionam o mercado carioca. Quem aparece no Google quando um turista busca "restaurante em Ipanema" ou um morador busca "barbearia na Tijuca" tem vantagem enorme sobre quem não tem presença digital.' },
      { title: 'Atendemos todo o Grande Rio', content: 'Niterói, Duque de Caxias, Nova Iguaçu, São Gonçalo, Petrópolis, Volta Redonda, Cabo Frio e toda a Região Metropolitana do Rio. Atendimento pelo WhatsApp, sem deslocamento.' },
      { title: 'Oportunidades no mercado fluminense', content: 'Bares e restaurantes na Lapa e Santa Teresa, estética e beleza na Barra e no Leblon, academias no Flamengo e Botafogo, clínicas em Copacabana, hotéis e pousadas em Búzios e Angra — cada segmento tem demanda online crescente no Rio.' },
      { title: 'Aparecer nas buscas locais do Rio', content: 'O Google prioriza negócios com site + Google Meu Negócio bem configurado nos resultados locais. Configuramos tudo junto para que quando alguém buscar seu serviço em qualquer bairro do Rio, você apareça na frente.' }
    ],
    faqs: [
      { q: 'Atendem o interior do Rio, como Petrópolis e Volta Redonda?', a: 'Sim. Todo o estado do Rio de Janeiro, tudo feito remotamente pelo WhatsApp.' },
      { q: 'Funciona para negócios voltados ao turismo?', a: 'Sim. Sites para pousadas, guias turísticos, restaurantes e passeios — otimizados também para buscas de turistas.' },
      { q: 'O site aparece em buscas em inglês para turistas?', a: 'Fazemos o site em português com SEO local. Para versão bilíngue, consulte nosso Plano Premium.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade, hospedagem inclusa.' }
    ],
    cta: 'Quero meu site no Rio de Janeiro'
  },
  {
    slug: 'criar-site-belo-horizonte',
    title: 'Criar Site em Belo Horizonte em 48h | DigiRocket — R$497',
    description: 'Site profissional em BH em 48h a partir de R$497. Seu negócio aparece no Google mineiro. Sem mensalidade. Atendemos toda a RMBH.',
    h1: 'Criar Site em Belo Horizonte',
    intro: 'Belo Horizonte tem uma das economias mais dinâmicas do Brasil e uma cultura empresarial forte. Com mais de 2,5 milhões de habitantes, a BH digital cresce cada dia — e quem não tem site perde cliente para quem tem.',
    sections: [
      { title: 'BH: mercado em crescimento digital', content: 'Belo Horizonte concentra forte setor de serviços, tecnologia, saúde e gastronomia. O mineiro pesquisa muito antes de comprar — e quem não aparece no Google simplesmente não existe para esse público cada vez mais digital.' },
      { title: 'Toda a RMBH atendida', content: 'Contagem, Betim, Ribeirão das Neves, Santa Luzia, Ibirité, Vespasiano, Lagoa Santa, Nova Lima — toda a Região Metropolitana de Belo Horizonte. Atendimento remoto pelo WhatsApp.' },
      { title: 'Segmentos fortes em BH', content: 'Bares e restaurantes no Savassi e no Centro, serviços de saúde no Funcionários e Lourdes, comércio no BH Shopping e Buritis, barbearias no Pampulha, clínicas odontológicas no Belvedere — mercado rico e diversificado.' },
      { title: 'Google Maps em BH', content: 'Em BH, o Google Maps é muito usado para encontrar estabelecimentos locais. Configuramos seu perfil no Google Meu Negócio junto com o site para você aparecer tanto nas buscas quanto no mapa.' }
    ],
    faqs: [
      { q: 'Atendem Contagem e Betim?', a: 'Sim. Toda a Região Metropolitana de BH, sempre pelo WhatsApp sem custo adicional.' },
      { q: 'O site funciona bem para o perfil de cliente mineiro?', a: 'Sim. Criamos sites com foco em credibilidade e informação detalhada — exatamente o que o consumidor mineiro busca antes de decidir.' },
      { q: 'Quanto tempo demora?', a: '48 horas úteis. Mesmo prazo para todo o Brasil.' },
      { q: 'Qual o preço?', a: 'A partir de R$497 pagamento único. Sem mensalidade.' }
    ],
    cta: 'Quero meu site em Belo Horizonte'
  },
  {
    slug: 'criar-site-curitiba',
    title: 'Criar Site em Curitiba em 48h | DigiRocket — R$497',
    description: 'Site profissional em Curitiba em 48h, R$497. Apareça no Google paranaense. Sem mensalidade. Atendemos todo o Paraná.',
    h1: 'Criar Site em Curitiba',
    intro: 'Curitiba é conhecida pela organização, planejamento urbano e alto IDH — e o consumidor curitibano reflete isso: pesquisa, compara e escolhe com cuidado. Ter um site profissional é o mínimo para conquistar esse mercado exigente.',
    sections: [
      { title: 'Curitiba: cidade que exige profissionalismo', content: 'O curitibano é criteriosos na escolha de fornecedores. Um negócio sem site profissional passa imagem de improviso — e o cliente vai para o concorrente que parece mais estabelecido. Seu site é o primeiro passo para transmitir credibilidade nesse mercado.' },
      { title: 'Região Metropolitana de Curitiba', content: 'São José dos Pinhais, Colombo, Pinhais, Fazenda Rio Grande, Araucária, Campo Largo, Almirante Tamandaré — toda a Grande Curitiba atendida remotamente pelo WhatsApp.' },
      { title: 'Setores em destaque em Curitiba', content: 'Tecnologia e startups no CIC, gastronomia no Batel e Santa Felicidade, saúde no Bigorrilho, serviços profissionais no Centro Cívico, moda e varejo no Center Shopping — a capital paranaense tem economia diversificada e sofisticada.' },
      { title: 'SEO local em Curitiba', content: 'Curitiba tem alta densidade de buscas locais por serviços premium. Configuramos seu site e Google Meu Negócio para você aparecer quando um curitibano buscar exatamente o que você oferece, no bairro onde você atua.' }
    ],
    faqs: [
      { q: 'Atendem São José dos Pinhais e Colombo?', a: 'Sim. Toda a Grande Curitiba, tudo pelo WhatsApp.' },
      { q: 'Curitibano é exigente com design?', a: 'Sim, e nossos sites refletem isso: clean, profissional e moderno, adequado ao gosto do consumidor do Sul.' },
      { q: 'O site aparece para buscas em Curitiba?', a: 'Sim. Configuramos SEO local e Google Meu Negócio focado em Curitiba e sua região.' },
      { q: 'Preço?', a: 'R$497 pagamento único. Sem mensalidade.' }
    ],
    cta: 'Quero meu site em Curitiba'
  },
  {
    slug: 'criar-site-florianopolis',
    title: 'Criar Site em Florianópolis em 48h | DigiRocket — R$497',
    description: 'Site profissional em Florianópolis em 48h, R$497. Alcance turistas e moradores no Google. Sem mensalidade. Atendemos toda a Grande Floripa.',
    h1: 'Criar Site em Florianópolis',
    intro: 'Florianópolis une turismo, tecnologia e qualidade de vida únicos no Brasil. Se você tem negócio na Ilha — seja para turistas ou para os 500 mil moradores — um site profissional é essencial para aparecer no Google durante todo o ano.',
    sections: [
      { title: 'A ilha do turismo e da tecnologia', content: 'Florianópolis recebe mais de 1 milhão de turistas por ano e é polo tecnológico do Sul. Turistas buscam tudo no Google antes de chegar, e os moradores são altamente digitalizados. Negócio sem site perde para o concorrente nas duas frentes.' },
      { title: 'Grande Florianópolis e entorno', content: 'São José, Palhoça, Biguaçu, Governador Celso Ramos — toda a Grande Floripa atendida. Também fazemos para pousadas e negócios em praias como Bombinhas, Balneário Camboriú e Porto Belo.' },
      { title: 'Temporada e fora de temporada', content: 'Sites para negócios sazonais precisam ser encontrados o ano todo. Otimizamos para buscas de turistas no verão e para moradores no inverno, garantindo movimento constante para seu negócio.' },
      { title: 'Mercado tech de Floripa', content: 'Florianópolis tem forte polo de startups e empresas de tecnologia. Sites profissionais são mandatórios nesse ambiente. Desenvolvemos para qualquer perfil — de restaurantes na Lagoa da Conceição a empresas de software no SAPIENS Parque.' }
    ],
    faqs: [
      { q: 'Atendem pousadas e turismo?', a: 'Sim. Sites para pousadas, restaurantes turísticos e passeios, otimizados para turistas que buscam online antes de viajar.' },
      { q: 'Funciona para negócios sazonais?', a: 'Sim. O site funciona o ano todo e pode ser atualizado conforme a temporada.' },
      { q: 'Atendem São José e Palhoça?', a: 'Sim. Toda a Grande Florianópolis atendida pelo WhatsApp.' },
      { q: 'Preço?', a: 'R$497 pagamento único.' }
    ],
    cta: 'Quero meu site em Florianópolis'
  },
  {
    slug: 'criar-site-brasilia',
    title: 'Criar Site em Brasília em 48h | DigiRocket — R$497',
    description: 'Site profissional em Brasília e Distrito Federal em 48h, R$497. Seu negócio no Google da capital federal. Sem mensalidade.',
    h1: 'Criar Site em Brasília',
    intro: 'Brasília tem a maior renda per capita do Brasil e um mercado de serviços extremamente exigente. Servidores públicos, profissionais liberais, empresas de tecnologia e comércio sofisticado — todos pesquisam online antes de contratar. Seu site precisa estar lá.',
    sections: [
      { title: 'A capital federal exige presença digital', content: 'Brasília concentra o funcionalismo público, o poder legislativo, judiciário e executivo — e um mercado consumidor de alto poder aquisitivo. Esse perfil de cliente pesquisa, compara e escolhe pelo que vê online. Um site profissional é filtro de credibilidade em Brasília.' },
      { title: 'DF e Entorno', content: 'Taguatinga, Ceilândia, Samambaia, Gama, Sobradinho, Planaltina, Águas Lindas (GO), Luziânia (GO) — todo o Distrito Federal e cidades do Entorno atendidas remotamente.' },
      { title: 'Setores em destaque no DF', content: 'Advocacia e consultoria jurídica nas áreas nobres do Plano Piloto, saúde e odontologia no Asa Sul e Asa Norte, gastronomia no Sudoeste e Lago Sul, serviços empresariais em Taguatinga e Águas Claras — mercado rico e diversificado.' },
      { title: 'Google em Brasília', content: 'Com alta digitalização, o brasiliense usa muito o Google para encontrar serviços profissionais. Estar bem posicionado para buscas como "advogado em Brasília" ou "clínica odontológica no Plano Piloto" pode transformar seu faturamento.' }
    ],
    faqs: [
      { q: 'Atendem Taguatinga e Ceilândia?', a: 'Sim. Todo o Distrito Federal e cidades do Entorno como Águas Lindas e Luziânia.' },
      { q: 'Funciona para empresas que prestam serviço ao governo?', a: 'Sim. Sites institucionais para empresas B2G (Business to Government) com perfil sério e profissional.' },
      { q: 'O ticket médio de Brasília é alto. O site ajuda a justificar preço premium?', a: 'Sim. Um site profissional posiciona você no segmento premium e justifica honorários e preços mais altos.' },
      { q: 'Preço?', a: 'R$497 pagamento único. Sem mensalidade.' }
    ],
    cta: 'Quero meu site em Brasília'
  },
  {
    slug: 'criar-site-goiania',
    title: 'Criar Site em Goiânia em 48h | DigiRocket — R$497',
    description: 'Site profissional em Goiânia em 48h, R$497. Apareça no Google do Centro-Oeste. Sem mensalidade. Atendemos todo o estado de Goiás.',
    h1: 'Criar Site em Goiânia',
    intro: 'Goiânia é uma das cidades que mais cresce no Brasil, com forte setor de agronegócio, serviços e uma classe média vibrante. A cidade digital cresce rápido e quem não investir em presença online agora vai correr atrás depois.',
    sections: [
      { title: 'Goiânia: uma das que mais crescem no Brasil', content: 'A capital goiana tem crescimento econômico consistente, mercado imobiliário aquecido e uma população jovem e conectada. O consumidor goianiense adotou o digital rapidamente e usa o Google para tudo — de delivery a clínicas médicas.' },
      { title: 'Goiás e região', content: 'Aparecida de Goiânia, Anápolis, Senador Canedo, Trindade, Luziânia — todo o entorno de Goiânia e demais cidades do estado atendidas remotamente pelo WhatsApp.' },
      { title: 'Oportunidades de mercado em Goiânia', content: 'Agronegócio e insumos no entorno, gastronomia e botecos no Setor Bueno e Jardim Goiás, saúde e estética no Setor Oeste, comércio de moda no Setor Marista — mercado diversificado em forte expansão digital.' },
      { title: 'Competição online em Goiânia', content: 'A digitalização em Goiânia está em plena aceleração. Quem criar sua presença digital agora sai na frente dos concorrentes que ainda não investiram. O custo de estar no Google hoje é muito menor do que o custo de recuperar terreno daqui a dois anos.' }
    ],
    faqs: [
      { q: 'Atendem Aparecida de Goiânia e Anápolis?', a: 'Sim. Todo o estado de Goiás, tudo pelo WhatsApp.' },
      { q: 'Funciona para o agronegócio?', a: 'Sim. Sites para distribuidores, revendas de insumos, cooperativas e prestadores de serviço ao agro.' },
      { q: 'Goiânia está crescendo digitalmente. Vale investir agora?', a: 'Vale muito. Quem entra agora pega mercado antes dos concorrentes se digitalizarem. É o melhor momento.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' }
    ],
    cta: 'Quero meu site em Goiânia'
  },
  {
    slug: 'criar-site-salvador',
    title: 'Criar Site em Salvador em 48h | DigiRocket — R$497',
    description: 'Site profissional em Salvador em 48h, R$497. Apareça no Google da Bahia. Sem mensalidade. Atendemos todo o estado.',
    h1: 'Criar Site em Salvador',
    intro: 'Salvador é a terceira maior cidade do Brasil, com forte setor turístico, gastronomia baiana famosa mundialmente e um mercado de serviços crescente. Colocamos seu negócio no Google soteropolitano em 48 horas.',
    sections: [
      { title: 'Salvador: turismo + mercado local', content: 'A capital baiana recebe milhões de turistas por ano, especialmente no Carnaval e nas festas juninas. Mas além do turismo, Salvador tem 2,9 milhões de moradores que buscam serviços locais no Google todos os dias. Seu site precisa alcançar os dois públicos.' },
      { title: 'Região Metropolitana de Salvador', content: 'Camaçari, Lauro de Freitas, Simões Filho, Candeias, São Francisco do Conde — toda a RMS atendida. Também fazemos para cidades do interior baiano como Feira de Santana e Vitória da Conquista.' },
      { title: 'Segmentos em destaque em Salvador', content: 'Gastronomia baiana no Rio Vermelho e no Pelourinho, saúde e estética em Pituba e Horto Florestal, moda e artesanato no Mercado Modelo, academias e personal trainers no Caminho das Árvores — mercado rico e culturalmente único.' },
      { title: 'Aparecer no turismo online', content: 'Turistas pesquisam "restaurante em Salvador", "pousada em Salvador" antes de vir. Estar bem posicionado no Google nessas buscas pode transformar completamente o faturamento de um negócio ligado ao turismo soteropolitano.' }
    ],
    faqs: [
      { q: 'Funciona para negócios de turismo em Salvador?', a: 'Sim. Restaurantes, pousadas, guias e passeios otimizados para turistas que buscam online.' },
      { q: 'Atendem Camaçari e Lauro de Freitas?', a: 'Sim. Toda a RMS e cidades baianas em geral.' },
      { q: 'O site funciona em português para turistas estrangeiros?', a: 'O site é em português. Para versão bilíngue (PT/EN), consulte nosso Plano Premium.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' }
    ],
    cta: 'Quero meu site em Salvador'
  },
  {
    slug: 'criar-site-fortaleza',
    title: 'Criar Site em Fortaleza em 48h | DigiRocket — R$497',
    description: 'Site profissional em Fortaleza em 48h, R$497. Apareça no Google do Ceará. Sem mensalidade. Atendemos todo o Nordeste.',
    h1: 'Criar Site em Fortaleza',
    intro: 'Fortaleza é uma das cidades que mais cresce economicamente no Nordeste, com forte setor turístico, moda, calçados e serviços. A cidade está se digitalizando rapidamente e quem entrar no Google agora vai colher os frutos por anos.',
    sections: [
      { title: 'Fortaleza: polo do Nordeste', content: 'Com mais de 2,7 milhões de habitantes e sendo hub de negócios do Nordeste, Fortaleza tem um mercado consumidor em expansão digital. O cearense está cada vez mais online — e quem não tem site perde para concorrentes de outras cidades que aparecem no Google.' },
      { title: 'Ceará e região', content: 'Caucaia, Maracanaú, Sobral, Juazeiro do Norte, Crato — todo o estado do Ceará atendido. A DigiRocket já entregou sites para clientes em todo o Nordeste.' },
      { title: 'Oportunidades em Fortaleza', content: 'Praia de Iracema e Meireles para turismo e gastronomia, Aldeota para serviços profissionais e saúde, Centro para comércio e moda, Bairro de Fátima para clínicas e consultórios — cada região tem seu potencial de buscas locais.' },
      { title: 'Turismo em Fortaleza', content: 'Fortaleza é destino nacional e internacional. Turistas buscam no Google antes de chegar: restaurantes, pousadas, passeios, compras. Um site bem posicionado para essas buscas gera reservas durante todo o ano.' }
    ],
    faqs: [
      { q: 'Atendem Juazeiro do Norte e Sobral?', a: 'Sim. Todo o Ceará e Nordeste atendido remotamente.' },
      { q: 'Funciona para venda de moda e calçados (forte em Fortaleza)?', a: 'Sim. Sites para lojas de moda, calçadistas e distribuidores, com catálogo e venda pelo WhatsApp.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Tempo de entrega?', a: '48 horas úteis, para qualquer cidade do Brasil.' }
    ],
    cta: 'Quero meu site em Fortaleza'
  },
  {
    slug: 'criar-site-recife',
    title: 'Criar Site em Recife em 48h | DigiRocket — R$497',
    description: 'Site profissional em Recife em 48h, R$497. Apareça no Google de Pernambuco. Sem mensalidade. Atendemos todo o Nordeste.',
    h1: 'Criar Site em Recife',
    intro: 'Recife é o maior polo econômico do Nordeste, com destaque em tecnologia, saúde, gastronomia e turismo. A cidade tem uma cena startup vibrante e um mercado consumidor que usa muito o digital para escolher onde comprar e contratar.',
    sections: [
      { title: 'Recife: capital da tecnologia no Nordeste', content: 'O Porto Digital e o CESAR tornaram Recife referência em tecnologia. Isso significa que o consumidor recifense é altamente digitalizado — pesquisa no Google, lê avaliações e escolhe pelo que vê online. Um site profissional é fundamental nesse mercado.' },
      { title: 'Grande Recife', content: 'Olinda, Caruaru, Paulista, Jaboatão dos Guararapes, Petrolina — Pernambuco inteiro atendido remotamente pela DigiRocket.' },
      { title: 'Segmentos fortes em Recife', content: 'Gastronomia refinada em Boa Viagem e Casa Forte, startups e tecnologia no Porto Digital, saúde e estética na Zona Norte, comércio no Centro do Recife e em Caruaru — mercado diversificado com forte crescimento digital.' },
      { title: 'Turismo em Recife e Olinda', content: 'O Carnaval de Olinda e Recife é mundial. Frevo, maracatu, gastronomia pernambucana — negócios ligados ao turismo cultural têm demanda crescente online.' }
    ],
    faqs: [
      { q: 'Atendem Caruaru e Petrolina?', a: 'Sim. Todo Pernambuco atendido remotamente.' },
      { q: 'Funciona para startups e empresas de tecnologia?', a: 'Sim. Sites modernos para empresas tech, com design que reflete inovação e profissionalismo.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Recife'
  },
  {
    slug: 'criar-site-manaus',
    title: 'Criar Site em Manaus em 48h | DigiRocket — R$497',
    description: 'Site profissional em Manaus em 48h, R$497. Apareça no Google do Amazonas. Sem mensalidade. Atendemos toda a Região Norte.',
    h1: 'Criar Site em Manaus',
    intro: 'Manaus é o maior polo econômico do Norte, com forte indústria na Zona Franca, comércio vibrante e um crescimento do setor de serviços. A cidade está se digitalizando rapidamente e os negócios que investirem em presença online agora sairão na frente.',
    sections: [
      { title: 'Manaus: mercado em digitalização', content: 'A Zona Franca de Manaus gera empregos e renda para 2,2 milhões de habitantes. Esse público consumidor crescente usa cada vez mais o Google para encontrar serviços. Estar online em Manaus hoje é diferencial competitivo real.' },
      { title: 'Amazonas e Norte do Brasil', content: 'Manaus concentra a maior parte do mercado amazonense, mas atendemos também Itacoatiara, Parintins, Tefé e outras cidades do interior. Todo o Norte do Brasil atendido remotamente.' },
      { title: 'Oportunidades em Manaus', content: 'Serviços industriais para a ZFM, gastronomia amazônica no Centro e na Ponta Negra, turismo ecológico, saúde e clínicas nos bairros nobres, comércio eletrônico — Manaus tem nichos únicos e mercado em expansão.' },
      { title: 'Turismo ecológico e amazônico', content: 'Manaus é porta de entrada para a Amazônia. Hotéis de selva, agências de turismo ecológico e restaurantes de culinária amazônica têm demanda online nacional e internacional crescente.' }
    ],
    faqs: [
      { q: 'Funciona para empresas da Zona Franca?', a: 'Sim. Sites institucionais e comerciais para indústrias e distribuidores da ZFM.' },
      { q: 'Atendem o interior do Amazonas?', a: 'Sim, remotamente pelo WhatsApp. Qualquer cidade do Brasil.' },
      { q: 'Funciona para turismo ecológico?', a: 'Sim. Sites para agências, hotéis de selva e passeios, com foco em turistas nacionais e estrangeiros.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' }
    ],
    cta: 'Quero meu site em Manaus'
  },
  {
    slug: 'criar-site-belem',
    title: 'Criar Site em Belém em 48h | DigiRocket — R$497',
    description: 'Site profissional em Belém do Pará em 48h, R$497. Apareça no Google paraense. Sem mensalidade.',
    h1: 'Criar Site em Belém',
    intro: 'Belém é uma cidade com identidade cultural única — o Círio de Nazaré, o açaí, a gastronomia paraense e o mercado do Ver-o-Peso. Com mais de 1,5 milhão de habitantes, o mercado digital cresce junto com a economia local.',
    sections: [
      { title: 'Belém: cultura e economia paraense', content: 'A capital paraense tem forte identidade cultural e um mercado local diversificado. Do comércio no Entroncamento aos serviços no Marco, de restaurantes no Umarizal a clínicas no Batista Campos — cada bairro tem sua dinâmica de consumo local.' },
      { title: 'Pará e Região Norte', content: 'Ananindeua, Santarém, Marabá, Castanhal, Parauapebas — todo o Pará atendido remotamente. A DigiRocket chega onde você está, sempre pelo WhatsApp.' },
      { title: 'Gastronomia e turismo paraense', content: 'O açaí originário do Pará, o pato no tucupi, o tacacá — a gastronomia paraense está conquistando o Brasil. Restaurantes e distribuidores de produtos típicos têm oportunidade única de usar o digital para vender para fora do estado.' },
      { title: 'Mercado digital em Belém', content: 'A digitalização em Belém ainda está em fase inicial comparada às capitais do Sul e Sudeste — o que significa que quem investir agora tem muito menos concorrência no Google local e pode dominar o mercado rapidamente.' }
    ],
    faqs: [
      { q: 'Atendem Ananindeua e Santarém?', a: 'Sim. Todo o Pará e Norte do Brasil.' },
      { q: 'Funciona para negócios de produtos amazônicos?', a: 'Sim. Sites para produtores, distribuidores e exportadores de produtos paraenses.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Belém'
  },
  {
    slug: 'criar-site-campinas',
    title: 'Criar Site em Campinas em 48h | DigiRocket — R$497',
    description: 'Site profissional em Campinas em 48h, R$497. Apareça no Google do interior paulista. Sem mensalidade.',
    h1: 'Criar Site em Campinas',
    intro: 'Campinas é o maior polo tecnológico e industrial do interior de São Paulo, com PIB superior ao de muitas capitais brasileiras. O mercado campineiro é sofisticado e altamente conectado — um site profissional não é opcional nessa cidade.',
    sections: [
      { title: 'Campinas: polo tech e industrial', content: 'Com a UNICAMP, o CPqD, a EMBRAPA e centenas de empresas de tecnologia, Campinas tem um mercado consumidor altamente educado e digital. Esse público pesquisa muito antes de contratar e espera encontrar sites profissionais e informativos.' },
      { title: 'Região Metropolitana de Campinas', content: 'Sumaré, Hortolândia, Valinhos, Vinhedo, Americana, Indaiatuba, Itatiba — toda a RMC atendida remotamente. Um dos maiores mercados do interior brasileiro.' },
      { title: 'Oportunidades em Campinas', content: 'Tecnologia e software no Techtown, saúde de alto padrão na região do Hospital Mário Gatti, gastronomia no Cambuí, moda e varejo no Shopping Dom Pedro, serviços profissionais em Barão Geraldo — mercado premium e diversificado.' },
      { title: 'Interior de SP no Google', content: 'Campinas tem buscas locais tão intensas quanto capitais de estados menores. Configuramos seu site e Google Meu Negócio para aparecer nas buscas da cidade e da região metropolitana.' }
    ],
    faqs: [
      { q: 'Atendem Americana, Indaiatuba e Vinhedo?', a: 'Sim. Toda a RMC e interior paulista.' },
      { q: 'Funciona para empresas de tecnologia?', a: 'Sim. Sites institucionais modernos para startups, softwares e empresas tech de Campinas.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Campinas'
  },
  {
    slug: 'criar-site-joinville',
    title: 'Criar Site em Joinville em 48h | DigiRocket — R$497',
    description: 'Site profissional em Joinville em 48h, R$497. Apareça no Google da maior cidade de Santa Catarina. Sem mensalidade.',
    h1: 'Criar Site em Joinville',
    intro: 'Joinville é a maior cidade catarinense e um dos maiores polos industriais do Sul do Brasil. Com forte setor metal-mecânico, têxtil e de serviços, a cidade tem um mercado empresarial exigente que valoriza profissionalismo em tudo — inclusive no digital.',
    sections: [
      { title: 'Joinville: polo industrial do Sul', content: 'A "Manchester Catarinense" tem tradição empresarial alemã — organização, qualidade e profissionalismo são valores centrais. Um site amador não convence o mercado joinvilense. Criamos sites que refletem a seriedade e eficiência que esse mercado exige.' },
      { title: 'Norte de Santa Catarina', content: 'Jaraguá do Sul, Schroeder, São Francisco do Sul, Araquari — todo o Norte catarinense atendido remotamente pela DigiRocket.' },
      { title: 'Indústria e serviços em Joinville', content: 'Metal-mecânica e indústria no distrito industrial, serviços empresariais B2B no centro, gastronomia alemã para turistas e moradores, saúde premium em clínicas e hospitais de referência regional.' },
      { title: 'Joinville no Google', content: 'Apesar do porte industrial, Joinville tem forte comércio e serviços para a população local. Empresas que aparecem no Google para buscas locais têm vantagem significativa em um mercado acostumado com qualidade.' }
    ],
    faqs: [
      { q: 'Atendem Jaraguá do Sul e Araquari?', a: 'Sim. Todo o Norte de SC atendido remotamente.' },
      { q: 'Funciona para indústrias e B2B?', a: 'Sim. Sites institucionais para indústrias, distribuidores e prestadores de serviço empresarial.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Joinville'
  },
  {
    slug: 'criar-site-natal',
    title: 'Criar Site em Natal em 48h | DigiRocket — R$497',
    description: 'Site profissional em Natal em 48h, R$497. Apareça no Google do Rio Grande do Norte. Sem mensalidade.',
    h1: 'Criar Site em Natal',
    intro: 'Natal é um dos destinos turísticos mais bonitos do Brasil, com praias paradisíacas e um mercado local aquecido. Se você tem negócio na Cidade do Sol, um site profissional é o caminho para captar turistas e moradores pelo Google.',
    sections: [
      { title: 'Natal: turismo e mercado local', content: 'Com praias como Ponta Negra, Maracajaú e Genipabu, Natal atrai turistas nacionais e estrangeiros o ano todo. E para os 900 mil moradores, o mercado local de serviços, saúde, educação e comércio também cresce no digital.' },
      { title: 'Rio Grande do Norte', content: 'Mossoró, Caicó, Parnamirim — todo o estado do RN atendido remotamente. Também fazemos para pousadas na Praia da Pipa e negócios em toda a costa potiguar.' },
      { title: 'Turismo e gastronomia em Natal', content: 'Pousadas, hotéis, restaurantes de frutos do mar, passeios de buggy nas dunas — negócios turísticos em Natal têm demanda online altíssima. Turistas pesquisam tudo antes de viajar e você precisa estar lá.' },
      { title: 'Mercado local natalense', content: 'Além do turismo, Natal tem forte comércio e serviços para a população local. Bairros como Tirol, Petrópolis e Lagoa Nova concentram serviços profissionais, saúde e gastronomia com crescente demanda online.' }
    ],
    faqs: [
      { q: 'Funciona para pousadas em Natal e Pipa?', a: 'Sim. Sites para pousadas, hotéis e resorts com foco em turistas.' },
      { q: 'Atendem Mossoró e Parnamirim?', a: 'Sim. Todo o RN atendido remotamente.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Natal'
  },
  {
    slug: 'criar-site-caxias-do-sul',
    title: 'Criar Site em Caxias do Sul em 48h | DigiRocket — R$497',
    description: 'Site profissional em Caxias do Sul em 48h, R$497. Apareça no Google da Serra Gaúcha. Sem mensalidade.',
    h1: 'Criar Site em Caxias do Sul',
    intro: 'Caxias do Sul é o maior polo industrial do Rio Grande do Sul e coração da Serra Gaúcha. Com forte cultura italiana, excelente gastronomia, enoturismo e indústria metal-mecânica, a cidade tem um mercado exigente que valoriza qualidade e profissionalismo.',
    sections: [
      { title: 'A capital da Serra Gaúcha', content: 'Caxias tem o PIB industrial mais importante do RS fora da capital. O consumidor serrano é exigente — valoriza a tradição, a qualidade e a seriedade. Um site profissional é o espelho digital dessa reputação construída ao longo de gerações.' },
      { title: 'Serra Gaúcha e entorno', content: 'Bento Gonçalves, Garibaldi, Carlos Barbosa, Flores da Cunha, Farroupilha — toda a Serra Gaúcha atendida remotamente. Um dos mercados mais dinâmicos do Sul do Brasil.' },
      { title: 'Enoturismo e gastronomia', content: 'A Serra Gaúcha é o maior polo vinícola do Brasil. Vinícolas, pousadas, restaurantes italianos, cafés coloniais e produtos coloniais têm demanda online crescente de turistas de todo o país.' },
      { title: 'Indústria e serviços em Caxias', content: 'Metal-mecânica, autopeças, calçados e serviços industriais são setores em que sites B2B bem posicionados podem gerar grandes oportunidades de negócio para fornecedores e prestadores de serviço.' }
    ],
    faqs: [
      { q: 'Atendem Bento Gonçalves e Garibaldi?', a: 'Sim. Toda a Serra Gaúcha atendida remotamente.' },
      { q: 'Funciona para vinícolas e enoturismo?', a: 'Sim. Sites para vinícolas, enoturismos, pousadas e restaurantes da Serra Gaúcha.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Caxias do Sul'
  },
  {
    slug: 'criar-site-londrina',
    title: 'Criar Site em Londrina em 48h | DigiRocket — R$497',
    description: 'Site profissional em Londrina em 48h, R$497. Apareça no Google do Norte do Paraná. Sem mensalidade.',
    h1: 'Criar Site em Londrina',
    intro: 'Londrina é o segundo maior município do Paraná e polo regional do Norte paranaense. Com forte agronegócio, universidades e setor de serviços em expansão, a cidade tem um mercado consumidor dinâmico e cada vez mais digital.',
    sections: [
      { title: 'Londrina: polo do Norte do Paraná', content: 'Conhecida como "A capital do café", Londrina tem uma economia diversificada que vai do agronegócio às startups. Com duas universidades estaduais (UEL e UEM próxima em Maringá), a cidade tem público jovem, educado e altamente digitalizado.' },
      { title: 'Região Norte do Paraná', content: 'Maringá, Apucarana, Arapongas, Cambé, Rolândia, Ibiporã — toda a mesorregião Norte Paranaense atendida. Um dos mercados mais ricos do interior brasileiro.' },
      { title: 'Oportunidades em Londrina', content: 'Agronegócio e insumos agrícolas, saúde e clínicas médicas no setor central, gastronomia e bares no Calçadão, comércio de moda e eletrodomésticos no Bom Retiro — mercado com forte poder de compra regional.' },
      { title: 'Digital em Londrina', content: 'A digitalização do interior paranaense avança rapidamente. Quem investir em presença online agora, antes que o mercado local sature, vai dominar as buscas por meses ou anos.' }
    ],
    faqs: [
      { q: 'Atendem Maringá e Apucarana?', a: 'Sim. Todo o Norte do Paraná atendido remotamente.' },
      { q: 'Funciona para o agronegócio em Londrina?', a: 'Sim. Sites para distribuidores, lojas agropecuárias e prestadores de serviço ao agro.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Londrina'
  },
  {
    slug: 'criar-site-vitoria',
    title: 'Criar Site em Vitória em 48h | DigiRocket — R$497',
    description: 'Site profissional em Vitória no Espírito Santo em 48h, R$497. Apareça no Google capixaba. Sem mensalidade.',
    h1: 'Criar Site em Vitória',
    intro: 'Vitória é uma das capitais com maior PIB per capita do Brasil, com forte economia portuária, petróleo e serviços. A Grande Vitória concentra um dos mercados consumidores mais qualificados do país — e cada vez mais digital.',
    sections: [
      { title: 'Vitória: capital rica e digital', content: 'O Espírito Santo tem um dos menores índices de desemprego do Brasil e uma economia diversificada. O capixaba tem bom poder de compra e alto grau de digitalização — pesquisa online antes de decidir e valoriza profissionalismo.' },
      { title: 'Grande Vitória', content: 'Vila Velha, Serra, Cariacica, Viana, Fundão — toda a RMGV atendida remotamente. Uma das maiores concentrações econômicas do Sudeste fora do eixo SP-RJ-MG.' },
      { title: 'Economia capixaba', content: 'Porto de Vitória para logística e importação/exportação, petróleo offshore, comércio sofisticado em Vila Velha, saúde de referência em Serra e Cariacica, gastronomia capixaba com destaque nacional.' },
      { title: 'Turismo e gastronomia capixaba', content: 'A moqueca capixaba, o torta capixaba e as praias do Espírito Santo atraem turistas. Sites para restaurantes, pousadas e negócios turísticos têm demanda crescente no Google.' }
    ],
    faqs: [
      { q: 'Atendem Vila Velha e Serra?', a: 'Sim. Toda a Grande Vitória e o Espírito Santo.' },
      { q: 'Funciona para empresas do porto e logística?', a: 'Sim. Sites institucionais para operadores portuários, despachantes e empresas de logística.' },
      { q: 'Preço?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Vitória'
  },
];

// ===================== LOTE 2 — MAIS 40 CIDADES =====================

export const cityPages2: SeoPage[] = [
  {
    slug: 'criar-site-canoas',
    title: 'Criar Site em Canoas em 48h | DigiRocket — R$497',
    description: 'Site profissional em Canoas em 48h a partir de R$497. Apareça no Google da Grande Porto Alegre. Sem mensalidade. Entregamos em 2 dias úteis.',
    h1: 'Criar Site em Canoas',
    intro: 'Canoas é a segunda maior cidade do Rio Grande do Sul e um dos mercados mais aquecidos da Grande Porto Alegre. Com um polo industrial forte e uma população de 350 mil habitantes consumindo online, quem não aparece no Google está deixando dinheiro na mesa todo dia.',
    sections: [
      { title: 'Canoas tem mercado — o Google te esconde?', content: 'Seu concorrente em Porto Alegre ou Gravataí pode estar aparecendo para clientes de Canoas simplesmente porque tem um site e você não. Cada busca "serviço em Canoas" que você não aparece é uma venda perdida. Resolver isso custa R$497 e leva 48 horas.' },
      { title: 'Do Mathias Velho ao Centro, estamos com você', content: 'Não importa em qual bairro de Canoas você atua — fazemos tudo pelo WhatsApp, sem precisar sair do negócio. Em 48 horas você aprova o site, a gente publica e configura o Google Meu Negócio para você aparecer no mapa.' },
      { title: 'Quem são os negócios que mais crescem com site em Canoas', content: 'Barbearias, oficinas mecânicas, restaurantes, delivery, salões de beleza, clínicas, academias — todos os segmentos de serviço local têm forte demanda de busca orgânica em Canoas. O cliente está procurando. A questão é: ele vai te achar?' },
      { title: 'Google Meu Negócio + site = aparece dobrado', content: 'Com site + Google Meu Negócio configurado, você aparece tanto nos resultados orgânicos quanto no mapa. Dois canais de aquisição de cliente com um investimento único de R$497. Nenhuma agência local faz isso por menos.' }
    ],
    faqs: [
      { q: 'Vocês atendem Canoas mesmo sendo de Porto Alegre?', a: 'Sim, e já atendemos vários clientes em Canoas. Tudo é feito pelo WhatsApp — você não precisa se deslocar em nenhum momento.' },
      { q: 'Quanto tempo demora?', a: '48 horas úteis depois que você manda as informações básicas. A maioria dos clientes aprova em 1 rodada.' },
      { q: 'Preciso de fotos profissionais?', a: 'Não. Fotos do celular com boa luz já funcionam perfeitamente para começar.' },
      { q: 'E se meu negócio crescer e eu quiser mais páginas depois?', a: 'Você pode upgrade para o Plano Premium quando quiser. A hospedagem e o domínio são seus para sempre.' }
    ],
    cta: 'Quero meu site em Canoas agora'
  },
  {
    slug: 'criar-site-gravatai',
    title: 'Criar Site em Gravataí em 48h | DigiRocket — R$497',
    description: 'Site para negócio em Gravataí em 48h, R$497. Apareça no Google da Grande POA antes do concorrente. Sem mensalidade.',
    h1: 'Criar Site em Gravataí',
    intro: 'Gravataí cresce rápido — e o mercado digital ainda não está saturado. Quem criar presença online agora vai ocupar as primeiras posições do Google enquanto os concorrentes ainda pensam se vale a pena. Vale. E muito.',
    sections: [
      { title: 'Gravataí está crescendo — e o digital também', content: 'Com mais de 280 mil habitantes e um polo automotivo importante (GM), Gravataí tem renda circulando. Mas boa parte dos negócios locais ainda não tem site. Isso significa oportunidade: quem chegar primeiro no Google domina o mercado local por anos.' },
      { title: 'Processo 100% simples e rápido', content: 'Você manda: nome do negócio, endereço, WhatsApp e 3 fotos. Em 48 horas, te entregamos um site profissional, responsivo e otimizado para o Google. Sem reunião, sem formulário gigante, sem burocracia.' },
      { title: 'Negócios que decollam com site em Gravataí', content: 'Mecânicas e auto centers próximos à BR-290, pet shops e veterinárias nos bairros residenciais, salões de beleza e esmalteiras, delivery e restaurantes, academias e personal trainers — todos com demanda online crescente em Gravataí.' },
      { title: 'Garantia real — se não gostar, devolvemos tudo', content: 'Oferecemos 7 dias de garantia total. Se o site não atender suas expectativas por qualquer motivo, devolvemos 100% do investimento sem perguntas. Já entregamos mais de 200 sites. Ninguém pediu reembolso.' }
    ],
    faqs: [
      { q: 'Qual a diferença entre o Plano Essencial e o Premium?', a: 'Essencial: 1 página, pronto em 48h, R$497. Premium: várias páginas, você edita, hospedagem vitalícia, R$997. Ambos sem mensalidade.' },
      { q: 'O site aparece no Google de Gravataí?', a: 'Sim. Configuramos SEO local e Google Meu Negócio com endereço em Gravataí para você aparecer nas buscas da cidade.' },
      { q: 'Posso parcelar?', a: 'Sim, em até 12x no cartão sem juros adicionais.' },
      { q: 'Atendem outros municípios da Grande POA?', a: 'Sim: Cachoeirinha, Alvorada, Viamão, Esteio, Sapucaia do Sul, Guaíba — toda a RMPA.' }
    ],
    cta: 'Quero meu site em Gravataí'
  },
  {
    slug: 'criar-site-novo-hamburgo',
    title: 'Criar Site em Novo Hamburgo em 48h | DigiRocket — R$497',
    description: 'Site profissional em Novo Hamburgo em 48h, R$497. Capital do calçado no Google. Sem mensalidade. Vale dos Sinos e toda a Grande POA.',
    h1: 'Criar Site em Novo Hamburgo',
    intro: 'Novo Hamburgo é a capital nacional do calçado e um dos maiores polos industriais do Sul. Mas qualquer tipo de negócio local — do salão de beleza à oficina mecânica — precisa aparecer no Google. Fazemos isso em 48 horas.',
    sections: [
      { title: 'O polo calçadista vai além do sapato', content: 'Novo Hamburgo tem forte comércio, serviços e uma população de 240 mil pessoas consumindo localmente. Além da indústria calçadista, bares, clínicas, academias, pet shops e delivery precisam de site para ser encontrados online.' },
      { title: 'Vale dos Sinos: mercado integrado', content: 'São Leopoldo, Sapiranga, Campo Bom, Dois Irmãos, Estância Velha — o Vale dos Sinos é um mercado integrado. Um site bem posicionado em Novo Hamburgo aparece para toda a região e multiplica seus potenciais clientes.' },
      { title: 'Por que o calçadista também precisa de site', content: 'Lojas de calçados, atacadistas, fábricas e representantes comerciais do polo têm clientes em todo o Brasil buscando fornecedores online. Um site profissional abre portas para B2B que o Instagram nunca vai abrir.' },
      { title: 'Site em 48h, Google em 72h', content: 'Entregamos o site em 48 horas. Mais 24 horas para o Google indexar. Em 3 dias a partir de agora, seu negócio pode estar aparecendo nas buscas locais de Novo Hamburgo e região.' }
    ],
    faqs: [
      { q: 'Funciona para indústria calçadista B2B?', a: 'Sim. Sites institucionais para fábricas, atacadistas e representantes com foco em captar parceiros e distribuidores.' },
      { q: 'Atendem toda a Vale dos Sinos?', a: 'Sim. São Leopoldo, Campo Bom, Sapiranga, Dois Irmãos e todos os municípios do Vale.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único para o Plano Essencial. R$997 para o Premium. Sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis após receber suas informações.' }
    ],
    cta: 'Quero meu site em Novo Hamburgo'
  },
  {
    slug: 'criar-site-pelotas',
    title: 'Criar Site em Pelotas em 48h | DigiRocket — R$497',
    description: 'Site profissional em Pelotas em 48h, R$497. A cidade do doce no Google. Apareça antes da concorrência. Sem mensalidade.',
    h1: 'Criar Site em Pelotas',
    intro: 'Pelotas é conhecida pelos doces e pela tradição — mas o mercado local está se modernizando rapidamente. Com uma forte comunidade universitária, comércio tradicional e serviços em expansão, a cidade tem tudo para se digitalizar. Seu negócio precisa estar nessa onda.',
    sections: [
      { title: 'Pelotas: tradição encontra o digital', content: 'A "capital nacional do doce" tem mais de 320 mil habitantes e uma economia que vai das doceiras artesanais às clínicas médicas, das barbearias tradicionais às academias modernas. O consumidor pelotense pesquisa no Google como qualquer brasileiro — e espera encontrar você lá.' },
      { title: 'Universidades e público jovem', content: 'Com a UFPel e a UCPEL, Pelotas tem um público universitário expressivo e altamente digitalizado. Academias, lanchonetes, serviços de manutenção, educação complementar e delivery têm demanda crescente desse público.' },
      { title: 'Doceries e gastronomia: um nicho de ouro', content: 'Pelotas tem tradição gastronômica única. Doceiras, confeitarias, restaurantes e cafés com receitas tradicionais têm demanda nacional crescente. Um site bem feito permite vender para todo o Brasil — não só para quem passa na calçada.' },
      { title: 'Metade Sul do RS: mercado para conquistar', content: 'Rio Grande, Bagé, Uruguaiana — Pelotas é polo regional de toda a Metade Sul do RS. Um site bem posicionado alcança toda essa região e consolida seu negócio como referência na área.' }
    ],
    faqs: [
      { q: 'Funciona para doceiras e confeiteiros de Pelotas?', a: 'Sim. Sites com catálogo visual de doces, fotos dos produtos e encomendas pelo WhatsApp — perfeito para quem vende a tradição pelotense.' },
      { q: 'Atendem Rio Grande e Bagé?', a: 'Sim. Toda a Metade Sul do RS atendida remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Pelotas'
  },
  {
    slug: 'criar-site-santa-maria',
    title: 'Criar Site em Santa Maria em 48h | DigiRocket — R$497',
    description: 'Site profissional em Santa Maria RS em 48h, R$497. Cidade universitária no Google. Sem mensalidade. Atendemos todo o centro do RS.',
    h1: 'Criar Site em Santa Maria',
    intro: 'Santa Maria é a maior cidade do interior gaúcho e polo universitário com mais de 80 mil estudantes. Esse público jovem, digital e com poder de compra crescente está buscando serviços online todos os dias. Seu negócio precisa aparecer para eles.',
    sections: [
      { title: 'Santa Maria: maior cidade do interior gaúcho', content: 'Com 280 mil habitantes e sendo centro regional da metade do RS, Santa Maria concentra comércio, serviços de saúde, educação e gastronomia de qualidade. O consumidor santa-mariense já está no digital — a questão é se você está lá para ser encontrado.' },
      { title: 'Público universitário: demanda constante', content: 'UFSM, Unifra, URI — mais de 80 mil universitários em Santa Maria. Academias, lanches, serviços, locação, entretenimento e delivery têm demanda constante desse público durante os 9 meses de aulas. Um site te coloca na frente deles 24h por dia.' },
      { title: 'Centro regional de saúde e serviços', content: 'Pessoas de dezenas de cidades vizinhas vão a Santa Maria buscar saúde, educação e serviços especializados. Um site bem feito alcança esses visitantes regionais antes mesmo deles chegarem à cidade.' },
      { title: 'Região Central do RS', content: 'Cachoeira do Sul, São Gabriel, Rosário do Sul, Tupanciretã — Santa Maria é referência regional. Estar bem posicionado no Google de Santa Maria significa alcançar toda a região Centro do Rio Grande do Sul.' }
    ],
    faqs: [
      { q: 'Funciona para serviços voltados a universitários?', a: 'Sim. Academias, repúblicas, serviços de impressão, alimentação, transporte — todos os nichos que atendem o público estudantil.' },
      { q: 'Atendem Cachoeira do Sul e São Gabriel?', a: 'Sim. Toda a região central do RS atendida remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Santa Maria'
  },
  {
    slug: 'criar-site-guarulhos',
    title: 'Criar Site em Guarulhos em 48h | DigiRocket — R$497',
    description: 'Site profissional em Guarulhos em 48h, R$497. Segunda maior cidade de SP no Google. Sem mensalidade. Apareça antes da concorrência.',
    h1: 'Criar Site em Guarulhos',
    intro: 'Guarulhos é a segunda maior cidade de São Paulo com 1,4 milhão de habitantes — e ainda tem muito espaço para conquistar no Google local. Negócios de qualquer segmento têm aqui uma oportunidade de ouro para aparecer online antes que o mercado sature.',
    sections: [
      { title: 'Guarulhos: gigante com oportunidade real', content: 'Com o aeroporto internacional e um polo industrial expressivo, Guarulhos tem movimento econômico intenso. O consumidor guarulhense é exigente e pesquisa online — mas boa parte dos negócios locais ainda não tem presença digital profissional. Essa lacuna é sua oportunidade.' },
      { title: 'Aeroporto = fluxo constante de clientes', content: 'Hotéis, pousadas, estacionamentos, restaurantes, transfer e serviços próximos ao Aeroporto de Guarulhos têm demanda de viajantes que buscam no Google antes de pousar. Um site bem posicionado captura esse fluxo constante de clientes.' },
      { title: 'Bairros e segmentos em Guarulhos', content: 'Comércio no Centro e no Gopoúva, serviços industriais no Cumbica, gastronomia no Jardim Maia, saúde na Vila Augusta, academias no Jardim São João — cada bairro tem seu mercado online para explorar.' },
      { title: 'Grande São Paulo: o maior mercado do Brasil', content: 'Estar em Guarulhos significa estar a 30 minutos do maior centro econômico do país. Um site com boa otimização local pode atrair clientes de toda a Grande SP para o seu negócio.' }
    ],
    faqs: [
      { q: 'Funciona para serviços próximos ao aeroporto?', a: 'Sim. Estacionamentos, hotéis, transfer, restaurantes — otimizamos para buscas de viajantes e turistas.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' },
      { q: 'O site aparece para quem busca em Guarulhos?', a: 'Sim. Configuramos SEO local e Google Meu Negócio com foco em Guarulhos.' }
    ],
    cta: 'Quero meu site em Guarulhos'
  },
  {
    slug: 'criar-site-sao-bernardo-do-campo',
    title: 'Criar Site em São Bernardo do Campo em 48h | DigiRocket — R$497',
    description: 'Site profissional em São Bernardo do Campo em 48h, R$497. ABC Paulista no Google. Sem mensalidade.',
    h1: 'Criar Site em São Bernardo do Campo',
    intro: 'São Bernardo é o coração do ABC Paulista, com uma das maiores concentrações industriais do Brasil. Mas são os prestadores de serviço, comércios e profissionais liberais que mais crescem com presença digital. Seu negócio pode ser o próximo.',
    sections: [
      { title: 'O ABC Paulista é riqueza que busca no Google', content: 'São Bernardo, Santo André e São Caetano formam um polo econômico com renda per capita elevada. O consumidor do ABC pesquisa online, compara e escolhe bem. Um site profissional te posiciona como opção séria nesse mercado exigente.' },
      { title: 'Indústria e serviços integrados', content: 'Montadoras, metalúrgicas, transporte e logística convivem com comércio sofisticado, saúde de ponta e gastronomia diversificada. Cada segmento tem sua demanda online crescente no ABC.' },
      { title: 'ABC Paulista: 3 cidades, 1 mercado', content: 'Um site bem posicionado em São Bernardo alcança naturalmente Santo André, São Caetano e Diadema. São mais de 1,5 milhão de potenciais clientes em um raio de 15 km.' },
      { title: 'Apareça no Google do ABC hoje', content: 'Em 48 horas, configuramos seu site e Google Meu Negócio para você aparecer nas buscas locais de São Bernardo e do Grande ABC. O investimento é R$497. O retorno começa na primeira semana.' }
    ],
    faqs: [
      { q: 'Atendem toda a Grande ABC?', a: 'Sim. Santo André, São Caetano, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra.' },
      { q: 'Funciona para indústrias e B2B?', a: 'Sim. Sites institucionais para fornecedores, prestadores de serviço industrial e empresas do setor automotivo.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em São Bernardo do Campo'
  },
  {
    slug: 'criar-site-niteroi',
    title: 'Criar Site em Niterói em 48h | DigiRocket — R$497',
    description: 'Site profissional em Niterói em 48h, R$497. A cidade mais bem posicionada do RJ no Google. Sem mensalidade.',
    h1: 'Criar Site em Niterói',
    intro: 'Niterói tem o maior IDH do Rio de Janeiro e um mercado consumidor sofisticado. É a cidade onde profissionais liberais, serviços premium e gastronomia de qualidade prosperam — e onde um site profissional faz toda a diferença na percepção do cliente.',
    sections: [
      { title: 'Niterói: o lado mais exigente do Rio', content: 'Com população de 500 mil habitantes e o maior IDH fluminense, Niterói concentra profissionais liberais, serviços especializados e um comércio sofisticado. Esse público pesquisa muito antes de contratar e espera encontrar sites profissionais e informativos.' },
      { title: 'Icaraí, São Francisco, Ingá: bairros premium', content: 'Cada bairro de Niterói tem seu perfil econômico. De Icaraí ao Fonseca, de Charitas a Itaipu — configuramos seu site com SEO local focado nos bairros onde seus clientes moram e buscam.' },
      { title: 'Profissionais liberais em Niterói', content: 'Advogados, médicos, psicólogos, arquitetos e consultores em Niterói têm um público que paga bem e pesquisa muito. Um site profissional é o diferencial que justifica um ticket médio mais alto.' },
      { title: 'Ponte Rio-Niterói: dois mercados em um', content: 'A Ponte coloca Niterói a 15 minutos da Zona Sul do Rio. Negócios em Niterói podem atrair clientes do Rio e vice-versa — especialmente com um site bem posicionado em ambas as geografias.' }
    ],
    faqs: [
      { q: 'Funciona para profissionais liberais em Niterói?', a: 'Sim. Sites para médicos, advogados, psicólogos e consultores — com tom sério e transmitindo autoridade.' },
      { q: 'Atendem São Gonçalo e Maricá?', a: 'Sim. Toda a região metropolitana do Rio de Janeiro.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Niterói'
  },
  {
    slug: 'criar-site-londrina',
    title: 'Criar Site em Londrina em 48h | DigiRocket — R$497',
    description: 'Site profissional em Londrina em 48h, R$497. Polo universitário do Norte do PR no Google. Sem mensalidade.',
    h1: 'Criar Site em Londrina',
    intro: 'Londrina é o segundo maior mercado do Paraná, com forte cultura universitária, agronegócio e uma economia de serviços robusta. Se você tem negócio em Londrina e não está no Google, está invisível para uma cidade que consome e busca online intensamente.',
    sections: [
      { title: 'Londrina: mercado de quem chegou para ficar', content: 'Com UEL, UEL e várias faculdades particulares, Londrina tem um público jovem e digitalizado consumindo serviços locais. Além disso, o agronegócio do Norte do Paraná gera riqueza que circula em Londrina — um mercado que cresce consistentemente.' },
      { title: 'Norte do Paraná: alcance regional', content: 'Cambé, Rolândia, Apucarana, Arapongas, Ibiporã — toda a mesorregião Norte Paranaense pode ser alcançada por um site bem posicionado em Londrina. São mais de 600 mil pessoas em um raio de 50 km.' },
      { title: 'Setores em destaque em Londrina', content: 'Clínicas e consultórios no centro, academias e personal trainers nos bairros residenciais, delivery e gastronomia no Gleba Palhano, serviços agropecuários no entorno — cada nicho tem sua demanda crescente no digital londrinense.' },
      { title: 'O timing perfeito para entrar no Google', content: 'O mercado digital de Londrina ainda tem menos saturação que São Paulo e Curitiba. Quem entrar agora vai ocupar posições estratégicas no Google antes que o mercado feche essas brechas. O investimento é o mesmo — o retorno é muito maior.' }
    ],
    faqs: [
      { q: 'Atendem Cambé e Apucarana?', a: 'Sim. Todo o Norte do Paraná atendido remotamente.' },
      { q: 'Funciona para o agronegócio em Londrina?', a: 'Sim. Sites para fornecedores, revendas agropecuárias e prestadores de serviço ao agro.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Londrina'
  },
  {
    slug: 'criar-site-maringa',
    title: 'Criar Site em Maringá em 48h | DigiRocket — R$497',
    description: 'Site profissional em Maringá em 48h, R$497. Cidade planejada e digital no Norte do PR. Sem mensalidade.',
    h1: 'Criar Site em Maringá',
    intro: 'Maringá é conhecida pelo planejamento urbano exemplar e pela qualidade de vida. Mas o que poucos sabem é que o consumidor maringaense é um dos mais exigentes do Brasil — e pesquisa tudo online antes de decidir. Se você não está lá, ele vai para quem está.',
    sections: [
      { title: 'Maringá: cidade planejada, mercado sofisticado', content: 'Com um dos melhores IDH do Paraná e uma classe média forte, Maringá tem consumidores que valorizam qualidade e profissionalismo. Um site mal feito — ou nenhum site — é eliminatório nesse mercado. A primeira impressão começa no Google.' },
      { title: 'Polo regional do Noroeste paranaense', content: 'Umuarama, Cianorte, Paranavaí, Campo Mourão — Maringá é referência para toda a região Noroeste do Paraná. Negócios em Maringá naturalmente atraem clientes de toda essa área quando aparecem no Google.' },
      { title: 'Gastronomia, saúde e educação em Maringá', content: 'A gastronomia de Maringá cresce com restaurantes de alto padrão, o setor de saúde tem clínicas e consultórios referência regional, e a área de educação tem forte demanda por cursos e serviços complementares — tudo com busca crescente no digital.' },
      { title: 'Agronegócio digital no Norte do PR', content: 'O agronegócio que sustenta o Norte do Paraná também está indo para o digital. Distribuidores, revendas e prestadores de serviço ao campo têm oportunidade de captar clientes online — algo que era impensável há 5 anos.' }
    ],
    faqs: [
      { q: 'Atendem Umuarama e Campo Mourão?', a: 'Sim. Todo o Noroeste do Paraná atendido remotamente.' },
      { q: 'Funciona para negócios de alto padrão em Maringá?', a: 'Sim. Nosso design é premium e adequado para negócios que querem transmitir sofisticação.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Maringá'
  },
  {
    slug: 'criar-site-joao-pessoa',
    title: 'Criar Site em João Pessoa em 48h | DigiRocket — R$497',
    description: 'Site profissional em João Pessoa em 48h, R$497. A cidade mais oriental do Brasil no Google. Sem mensalidade.',
    h1: 'Criar Site em João Pessoa',
    intro: 'João Pessoa é uma das capitais que mais cresce no Brasil, com boom imobiliário, turismo aquecido e uma economia de serviços em expansão. Estar no Google em João Pessoa hoje é surfar uma onda que só vai crescer.',
    sections: [
      { title: 'João Pessoa: crescimento que não para', content: 'Com bairros nobres em expansão como Altiplano, Jardim Oceania e Cabo Branco, João Pessoa atrai moradores de alto poder aquisitivo. O mercado de serviços premium cresce junto com essa expansão — e a disputa online ainda é baixa. Janela de oportunidade aberta.' },
      { title: 'Turismo e gastronomia paraibana', content: 'As praias do Seixas, Tambaú e Cabo Branco atraem turistas durante o ano todo. Pousadas, restaurantes de frutos do mar, passeios e serviços turísticos têm demanda online crescente de viajantes que buscam tudo antes de embarcar.' },
      { title: 'Litoral norte e sul da Paraíba', content: 'Cabedelo, Bayeux, Santa Rita, Conde — toda a Grande João Pessoa atendida. Também fazemos para Lucena, Jacumã e outros destinos turísticos da costa paraibana.' },
      { title: 'Custo de oportunidade do Google em João Pessoa', content: 'Enquanto em São Paulo qualquer posição no Google custa caro e é disputada, em João Pessoa os bons nichos ainda estão relativamente livres. O mesmo investimento de R$497 rende muito mais aqui do que em capitais saturadas.' }
    ],
    faqs: [
      { q: 'Funciona para pousadas no litoral paraibano?', a: 'Sim. Sites para pousadas em Tambaú, Jacumã, Lucena e toda a costa da PB.' },
      { q: 'Atendem Campina Grande e outras cidades da PB?', a: 'Sim. Todo o estado da Paraíba atendido remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em João Pessoa'
  },
  {
    slug: 'criar-site-maceio',
    title: 'Criar Site em Maceió em 48h | DigiRocket — R$497',
    description: 'Site profissional em Maceió em 48h, R$497. Turismo e negócios de Alagoas no Google. Sem mensalidade.',
    h1: 'Criar Site em Maceió',
    intro: 'Maceió tem algumas das praias mais bonitas do Brasil e um turismo que movimenta bilhões por ano. Mas além do turismo, a capital alagoana tem um mercado local de 1 milhão de habitantes que busca serviços online todos os dias.',
    sections: [
      { title: 'Maceió: onde o turismo encontra o mercado local', content: 'Poucas cidades têm o potencial de Maceió para negócios online: um mercado local grande, turismo nacional e internacional constante, e digitalização ainda em fase inicial. Quem entrar agora pega os dois públicos antes da concorrência acordar.' },
      { title: 'Praias e turismo alagoano', content: 'Pajuçara, Ponta Verde, Jatiúca, Praia do Francês, Maragogi — o litoral alagoano é um dos mais bonitos do planeta. Negócios turísticos aqui têm demanda online de turistas de todo o Brasil e do exterior durante o ano inteiro.' },
      { title: 'Setores em Maceió', content: 'Gastronomia com frutos do mar e culinária alagoana, serviços de saúde crescentes, comércio no centro e nos shopping centers, academias e estética nos bairros residenciais — todos os nichos com demanda online crescente.' },
      { title: 'Alagoas e o Nordeste digital', content: 'A digitalização do Nordeste está acelerando. Quem investe em presença online em Maceió agora vai colher frutos por anos, enquanto os concorrentes ainda pensam se vale a pena.' }
    ],
    faqs: [
      { q: 'Funciona para pousadas em Maragogi e Barra de São Miguel?', a: 'Sim. Sites para pousadas e negócios turísticos em todo o litoral alagoano.' },
      { q: 'Atendem cidades do interior de Alagoas?', a: 'Sim. Todo o estado de Alagoas atendido remotamente pelo WhatsApp.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Maceió'
  },
  {
    slug: 'criar-site-teresina',
    title: 'Criar Site em Teresina em 48h | DigiRocket — R$497',
    description: 'Site profissional em Teresina em 48h, R$497. Capital do Piauí no Google. Sem mensalidade. Oportunidade de mercado real.',
    h1: 'Criar Site em Teresina',
    intro: 'Teresina é a capital mais quente do Brasil — e também um dos mercados com maior oportunidade no digital. Com baixa competição online e uma população de 870 mil habitantes cada vez mais conectada, quem aparecer no Google primeiro vai dominar.',
    sections: [
      { title: 'Teresina: a oportunidade que poucos enxergam', content: 'Enquanto a concorrência digital em São Paulo está saturada, Teresina ainda tem muito espaço livre no Google. Nichos inteiros sem nenhum competidor com site profissional. O mesmo R$497 investido aqui pode trazer retornos muito maiores do que em capitais do Sul e Sudeste.' },
      { title: 'Piauí digital em aceleração', content: 'O Piauí tem uma das populações mais jovens do Brasil — e jovem significa digital. Redes sociais, Google, YouTube — o piauiense consome online tanto quanto qualquer brasileiro. A diferença é que seus fornecedores locais ainda não perceberam isso.' },
      { title: 'Segmentos com demanda em Teresina', content: 'Saúde e clínicas (Teresina é polo médico regional), gastronomia no Centro e Zonas de expansão, academias e estética nos bairros nobres, serviços profissionais e consultoria — todos com busca crescente e concorrência online ainda baixa.' },
      { title: 'Polo de saúde do Nordeste', content: 'Pessoas de todo o Maranhão, Tocantins e interior do Piauí vêm a Teresina buscar saúde especializada. Clínicas e consultórios que aparecem no Google para essas buscas regionais têm vantagem enorme sobre quem só conta com indicação local.' }
    ],
    faqs: [
      { q: 'Funciona para o mercado de saúde em Teresina?', a: 'Sim. Clínicas, consultórios e especilistas — otimizados para captar pacientes de Teresina e do interior do PI e MA.' },
      { q: 'Atendem cidades do interior do Piauí?', a: 'Sim. Todo o Piauí e estados vizinhos atendidos remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Teresina'
  },
  {
    slug: 'criar-site-sao-luis',
    title: 'Criar Site em São Luís em 48h | DigiRocket — R$497',
    description: 'Site profissional em São Luís do Maranhão em 48h, R$497. Apareça no Google da Ilha de São Luís. Sem mensalidade.',
    h1: 'Criar Site em São Luís',
    intro: 'São Luís é patrimônio histórico da UNESCO e um dos maiores mercados do Norte-Nordeste. Com mais de 1 milhão de habitantes, forte turismo cultural e economia em crescimento, a cidade oferece oportunidades reais para quem investir em presença digital agora.',
    sections: [
      { title: 'São Luís: cultura e economia em expansão', content: 'Sede do Bumba Meu Boi, a capital maranhense tem identidade cultural única que atrai turistas e investimentos. O mercado local de serviços cresce junto com a expansão econômica do Maranhão — e o digital é o caminho mais rápido para capturar esse crescimento.' },
      { title: 'Turismo cultural e patrimônio histórico', content: 'O centro histórico de São Luís é um dos mais bem preservados do Brasil. Pousadas, restaurantes de culinária maranhense, artesanato e turismo cultural têm demanda online crescente de turistas nacionais e estrangeiros.' },
      { title: 'Maranhão e o Norte digital', content: 'Imperatriz, Caxias, Timon, Açailândia — São Luís é polo regional de todo o Maranhão. Um site bem posicionado na capital alcança naturalmente buscas de todo o estado.' },
      { title: 'Momento certo para entrar', content: 'A digitalização em São Luís está no início. Competir online aqui hoje é muito mais fácil e barato do que daqui a 2 anos. O investimento de R$497 pode garantir uma posição dominante por anos antes que o mercado se intensifique.' }
    ],
    faqs: [
      { q: 'Funciona para turismo cultural em São Luís?', a: 'Sim. Pousadas no centro histórico, restaurantes típicos e negócios de turismo cultural.' },
      { q: 'Atendem Imperatriz e outras cidades do MA?', a: 'Sim. Todo o Maranhão atendido remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em São Luís'
  },
  {
    slug: 'criar-site-cuiaba',
    title: 'Criar Site em Cuiabá em 48h | DigiRocket — R$497',
    description: 'Site profissional em Cuiabá em 48h, R$497. Capital do agronegócio no Google. Sem mensalidade. Centro-Oeste atendido.',
    h1: 'Criar Site em Cuiabá',
    intro: 'Cuiabá é o coração do agronegócio brasileiro e uma cidade que cresce junto com o boom do mato-grossense. Com riqueza circulando e um mercado consumidor em expansão, o digital em Cuiabá ainda está longe de saturar — e isso é oportunidade pura.',
    sections: [
      { title: 'Cuiabá: onde o agronegócio encontra o serviço', content: 'O crescimento do agronegócio em MT gerou uma classe média forte em Cuiabá. Esse público tem renda, consome bem e pesquisa online antes de contratar. Clínicas, academias, restaurantes, serviços automotivos — todos os nichos urbanos têm demanda crescente aqui.' },
      { title: 'Mato Grosso: o maior produtor do Brasil', content: 'MT lidera produção de soja, milho, algodão e carne. Esse ecossistema gera serviços industriais, logística, tecnologia agrícola e comércio especializado. Empresas que atendem o agronegócio mato-grossense têm oportunidade enorme no digital B2B.' },
      { title: 'Várzea Grande: mercado integrado', content: 'Várzea Grande e Cuiabá formam uma área metropolitana de 700 mil habitantes. Um site posicionado para Cuiabá alcança naturalmente todo esse mercado integrado.' },
      { title: 'Centro-Oeste em digitalização acelerada', content: 'O Centro-Oeste está repetindo o mesmo movimento que o Sul/Sudeste fez 10 anos atrás: migração rápida para o digital. Quem entrar no Google agora vai colher os frutos por muito tempo.' }
    ],
    faqs: [
      { q: 'Funciona para empresas do agronegócio em MT?', a: 'Sim. Sites para distribuidores, revendas e prestadores de serviço ao agro — com foco B2B.' },
      { q: 'Atendem Várzea Grande e Rondonópolis?', a: 'Sim. Todo o Mato Grosso atendido remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Cuiabá'
  },
  {
    slug: 'criar-site-campo-grande',
    title: 'Criar Site em Campo Grande em 48h | DigiRocket — R$497',
    description: 'Site profissional em Campo Grande em 48h, R$497. Capital do MS no Google. Sem mensalidade. Centro-Oeste atendido.',
    h1: 'Criar Site em Campo Grande',
    intro: 'Campo Grande é a capital do Mato Grosso do Sul — uma cidade que une agronegócio, pecuária, turismo no Pantanal e um mercado de serviços urbanos crescente. Presença digital aqui ainda é vantagem competitiva, não obrigação. Por enquanto.',
    sections: [
      { title: 'Campo Grande: entre o agro e o urbano', content: 'Com 900 mil habitantes e sendo hub logístico entre o Sudeste e o Centro-Oeste, Campo Grande tem uma economia diversificada. Do comércio na Rua 14 de Julho aos serviços profissionais na Avenida Afonso Pena — cada segmento tem seu espaço no digital.' },
      { title: 'Turismo no Pantanal e Bonito', content: 'Campo Grande é o principal acesso ao Pantanal e a Bonito — dois dos destinos ecoturísticos mais famosos do Brasil. Agências, pousadas, restaurantes e serviços turísticos têm demanda online de turistas de todo o país e do exterior.' },
      { title: 'Mato Grosso do Sul inteiro', content: 'Dourados, Corumbá, Três Lagoas, Ponta Porã — Campo Grande é referência para todo o MS. Um site bem posicionado na capital atinge buscas de todo o estado.' },
      { title: 'Oportunidade aberta no digital', content: 'Em Campo Grande, a concorrência online ainda não está saturada. Negócios que criam presença digital hoje vão dominar seus nichos no Google enquanto os concorrentes ainda pensam se vale a pena investir.' }
    ],
    faqs: [
      { q: 'Funciona para turismo no Pantanal e Bonito?', a: 'Sim. Sites para agências, pousadas e operadores de ecoturismo em MS.' },
      { q: 'Atendem Dourados e Corumbá?', a: 'Sim. Todo o Mato Grosso do Sul atendido remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Campo Grande'
  },
  {
    slug: 'criar-site-aracaju',
    title: 'Criar Site em Aracaju em 48h | DigiRocket — R$497',
    description: 'Site profissional em Aracaju em 48h, R$497. Menor capital do Nordeste no Google. Sem mensalidade.',
    h1: 'Criar Site em Aracaju',
    intro: 'Aracaju é a menor capital brasileira em área — mas tem um mercado local movimentado, turismo crescente e uma população que usa o Google com a mesma intensidade de qualquer grande cidade. Seu negócio pode ser encontrado online hoje.',
    sections: [
      { title: 'Aracaju: menor em área, grande em oportunidade', content: 'Com 650 mil habitantes concentrados em uma das cidades mais compactas do Brasil, Aracaju tem alta densidade de consumo por km². O boca a boca funciona bem aqui, mas o Google amplifica isso — sua indicação chega a quem nunca te ouviu falar.' },
      { title: 'Praias e turismo sergipano', content: 'Orla de Atalaia, Praia do Saco, Cânyon do Xingó, Laranjeiras — Sergipe tem atrações turísticas diversas. Negócios voltados ao turismo têm demanda online de visitantes que planejam a viagem com antecedência.' },
      { title: 'Mercado local em Aracaju', content: 'Serviços de saúde na parte alta, gastronomia no Bairro 13 de Julho, comércio na Orla de Atalaia, academias e estética em Farolândia — cada bairro tem seu mercado digital para explorar.' },
      { title: 'Sergipe inteiro: polo de Aracaju', content: 'Nossa Senhora do Socorro, Lagarto, Itabaiana — todo Sergipe busca referências em Aracaju. Um site bem posicionado na capital alcança o estado inteiro.' }
    ],
    faqs: [
      { q: 'Funciona para o turismo em Sergipe?', a: 'Sim. Pousadas, restaurantes e serviços turísticos em Aracaju e no interior sergipano.' },
      { q: 'Atendem outros municípios de Sergipe?', a: 'Sim. Todo o estado de Sergipe atendido remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Aracaju'
  },
  {
    slug: 'criar-site-palmas',
    title: 'Criar Site em Palmas em 48h | DigiRocket — R$497',
    description: 'Site profissional em Palmas no Tocantins em 48h, R$497. A capital mais jovem do Brasil no Google. Sem mensalidade.',
    h1: 'Criar Site em Palmas',
    intro: 'Palmas é a capital mais jovem do Brasil — fundada em 1989 — e tem o perfil de uma cidade em plena construção. Com população jovem, crescimento acelerado e baixíssima concorrência online, Palmas é uma das maiores oportunidades digitais do país agora.',
    sections: [
      { title: 'Palmas: cidade nova, mercado aberto', content: 'Com menos de 40 anos de existência, Palmas ainda está formando seu mercado em todos os setores. A concorrência online é baixíssima comparada a qualquer outra capital. Um site profissional aqui pode te colocar como referência absoluta no seu nicho com muito menos esforço.' },
      { title: 'O Tocantins que cresce', content: 'O agronegócio tocantinense, o turismo no Lago de Palmas, a Praia da Graciosa e o ecoturismo regional geram uma economia que cresce mais rápido do que os negócios digitais conseguem acompanhar. O gap é a oportunidade.' },
      { title: 'Tocantins inteiro passa por Palmas', content: 'Araguaína, Gurupi, Porto Nacional — todo o Tocantins tem em Palmas sua referência de serviços especializados. Um site posicionado na capital captura buscas de todo o estado.' },
      { title: 'Ser o primeiro é ser o melhor', content: 'Em Palmas, quem criar seu site profissional agora pode ser a primeira opção no Google para o seu nicho por meses ou anos. Esse tipo de posição em uma capital é impossível de conquistar em São Paulo ou Curitiba. Aqui ainda é possível.' }
    ],
    faqs: [
      { q: 'Funciona para o ecoturismo do Tocantins?', a: 'Sim. Sites para pousadas, agências de turismo e aventura no Jalapão, Araguaia e Lago de Palmas.' },
      { q: 'Atendem Araguaína e Gurupi?', a: 'Sim. Todo o Tocantins atendido remotamente.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Palmas'
  },
  {
    slug: 'criar-site-porto-velho',
    title: 'Criar Site em Porto Velho em 48h | DigiRocket — R$497',
    description: 'Site profissional em Porto Velho em 48h, R$497. Capital de Rondônia no Google. Sem mensalidade.',
    h1: 'Criar Site em Porto Velho',
    intro: 'Porto Velho está no coração da Amazônia e tem um mercado que cresce junto com o desenvolvimento de Rondônia. Com baixa concorrência digital e alta demanda reprimida, a capital rondoniense é uma das melhores apostas do Brasil para quem quer dominar o Google local.',
    sections: [
      { title: 'Porto Velho: fronteira do digital', content: 'A digitalização chegou a Rondônia, mas o mercado de sites profissionais ainda está no começo. Isso significa concorrência mínima no Google para praticamente qualquer nicho. O mesmo investimento de R$497 que em São Paulo garantiria uma posição mediana, em Porto Velho pode garantir liderança absoluta.' },
      { title: 'Rondônia: agro, comércio e serviços', content: 'O desenvolvimento do agronegócio em Rondônia gerou uma classe média expressiva em Porto Velho. Comércio, saúde, educação e serviços urbanos crescem junto com a economia do estado.' },
      { title: 'Hidrelétricas e desenvolvimento', content: 'As usinas de Santo Antônio e Jirau trouxeram investimentos bilionários e uma população qualificada para Porto Velho. Esse público consome serviços de qualidade e pesquisa online.' },
      { title: 'Norte do Brasil: oportunidade inexplorada', content: 'Acre, Roraima, Amapá — o Norte do Brasil ainda tem muito espaço digital inexplorado. Negócios em Porto Velho que aparecem no Google atraem clientes de estados vizinhos que não têm opções locais.' }
    ],
    faqs: [
      { q: 'Atendem Ji-Paraná e Ariquemes?', a: 'Sim. Todo Rondônia e Norte do Brasil atendido remotamente.' },
      { q: 'Funciona para serviços ligados ao agronegócio?', a: 'Sim. Sites para distribuidores, cooperativas e prestadores de serviço ao agro de RO.' },
      { q: 'Quanto custa?', a: 'R$497 pagamento único, sem mensalidade.' },
      { q: 'Prazo?', a: '48 horas úteis.' }
    ],
    cta: 'Quero meu site em Porto Velho'
  },
];
