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

export const nichePages: SeoPage[] = [
  {
    slug: 'site-para-barbearia',
    title: 'Site para Barbearia em 48h | DigiRocket — R$497',
    description: 'Site profissional para barbearia com agendamento online, galeria de cortes e botão de WhatsApp. Pronto em 48h, pagamento único R$497.',
    h1: 'Site para Barbearia',
    intro: 'O cliente moderno pesquisa no Google antes de escolher onde cortar o cabelo. Se sua barbearia não aparece nas buscas ou não tem presença digital, você perde agendamentos todos os dias para concorrentes que investiram num site profissional.',
    sections: [
      { title: 'O barbeiro invisível no digital', content: 'Muitas barbearias dependem 100% de indicação boca a boca e redes sociais. O problema é que o Instagram não aparece no Google quando alguém busca "barbearia perto de mim". Sem site, você fica refém do algoritmo e perde clientes que estão ativamente procurando um barbeiro na região.' },
      { title: 'Como a DigiRocket resolve', content: 'Criamos um site focado em conversão para barbearias: galeria de cortes e estilos, tabela de preços clara, localização com Google Maps e botão de WhatsApp fixo para agendamento instantâneo. Tudo otimizado para aparecer nas buscas locais da sua cidade.' },
      { title: 'O que seu site de barbearia inclui', content: 'Página com fotos dos cortes e serviços, tabela de preços atualizada, seção "Sobre" com a história da barbearia, integração com Google Meu Negócio, botão de agendamento via WhatsApp, certificado SSL e hospedagem inclusa.' },
      { title: 'Resultados reais', content: 'Barbearias com site profissional e Google Meu Negócio recebem em média 3x mais ligações e mensagens. Um único cliente novo por semana já paga o investimento do site no primeiro mês. É o marketing que trabalha 24h sem folga.' }
    ],
    faqs: [
      { q: 'Consigo mostrar fotos dos cortes no site?', a: 'Sim. Montamos uma galeria com suas melhores fotos de cortes, barbas e degradês. Você envia pelo WhatsApp e nós organizamos.' },
      { q: 'Dá pra colocar tabela de preços?', a: 'Sim. Incluímos tabela de preços editável com todos os serviços: corte, barba, pigmentação, sobrancelha, etc.' },
      { q: 'O cliente consegue agendar pelo site?', a: 'Sim. O botão de WhatsApp fica fixo na tela. Ao clicar, abre direto a conversa com mensagem pré-preenchida para agendamento.' },
      { q: 'Posso colocar o horário de funcionamento?', a: 'Claro. Incluímos horários, endereço com mapa e todas as informações que o cliente precisa antes de ir até você.' }
    ],
    cta: 'Quero um site pra minha barbearia'
  },
  {
    slug: 'site-para-salao-de-beleza',
    title: 'Site para Salão de Beleza em 48h | DigiRocket — R$497',
    description: 'Site elegante para salão de beleza com portfólio de trabalhos, lista de serviços e agendamento por WhatsApp. Entrega em 48h.',
    h1: 'Site para Salão de Beleza',
    intro: 'Um salão de beleza vive de confiança e aparência. Quando uma cliente em potencial encontra seu salão online, a primeira impressão é o site. Se ele não existe ou parece amador, ela vai para o concorrente que transmite mais profissionalismo.',
    sections: [
      { title: 'Por que só o Instagram não basta', content: 'O Instagram é ótimo para mostrar resultados, mas não aparece nas buscas do Google. Quando alguém pesquisa "salão de beleza no bairro X", o Google mostra sites — não perfis de rede social. Além disso, o Instagram não permite organizar serviços, preços e horários de forma clara.' },
      { title: 'Um site que reflete a beleza do seu trabalho', content: 'Na DigiRocket criamos sites com design sofisticado que combina com a identidade visual do seu salão. Cores, fontes e fotos são escolhidas para transmitir elegância e profissionalismo. O resultado é um site que encanta antes mesmo da cliente entrar no salão.' },
      { title: 'Recursos específicos para salões', content: 'Portfólio de transformações (antes e depois), catálogo completo de serviços com preços, apresentação da equipe de profissionais, depoimentos de clientes, localização com mapa, horário de funcionamento e botão de agendamento via WhatsApp.' },
      { title: 'O retorno do investimento', content: 'Uma coloração ou escova progressiva custa de R$150 a R$500. Um único agendamento novo por semana que veio pelo site já recupera o investimento de R$497 no primeiro mês. A partir daí, é lucro puro todo mês.' }
    ],
    faqs: [
      { q: 'Posso mostrar o trabalho de cada profissional?', a: 'Sim. Criamos seções individuais para cada profissional do salão com foto, especialidades e portfólio de trabalhos.' },
      { q: 'Dá pra colocar promoções no site?', a: 'Sim. Podemos incluir uma seção de promoções que você atualiza quando quiser (no plano Premium) ou nos pede a atualização.' },
      { q: 'Consigo colocar antes e depois?', a: 'Com certeza. A galeria de antes e depois é um dos elementos que mais convence novas clientes a agendar.' },
      { q: 'O site funciona bem no celular?', a: 'Sim. 85% das buscas por salões vêm do celular. Nossos sites são mobile-first, pensados primeiro para smartphones.' }
    ],
    cta: 'Quero um site pro meu salão'
  },
  {
    slug: 'site-para-estetica',
    title: 'Site para Estética em 48h | DigiRocket — R$497',
    description: 'Site para clínica de estética com catálogo de procedimentos, resultados e agendamento online. Design premium, pronto em 48h.',
    h1: 'Site para Estética',
    intro: 'O mercado de estética cresce a cada ano e a concorrência é intensa. Ter um site profissional não é mais diferencial — é necessidade. Clientes buscam procedimentos específicos no Google e escolhem profissionais que transmitem segurança e credibilidade online.',
    sections: [
      { title: 'A credibilidade começa online', content: 'Procedimentos estéticos envolvem confiança no profissional. Antes de agendar, a cliente pesquisa, compara e analisa. Se você não tem um site profissional com informações claras sobre formação, procedimentos e resultados, perde para quem transmite mais autoridade digital.' },
      { title: 'Site que gera confiança e agendamentos', content: 'Desenvolvemos sites para estética com foco em credibilidade: apresentação profissional com formação e certificações, catálogo detalhado de procedimentos com explicações acessíveis, galeria de resultados e depoimentos reais que eliminam objeções.' },
      { title: 'Estrutura do site de estética', content: 'Página de cada procedimento (limpeza de pele, harmonização facial, bioestimuladores, etc.), seção de antes e depois, apresentação profissional com CRM/registro, área de FAQ sobre cuidados pré e pós-procedimento, e botão de WhatsApp para consulta inicial.' },
      { title: 'Quanto um site traz de retorno', content: 'Um procedimento de harmonização facial custa de R$1.500 a R$5.000. Apenas um agendamento novo por mês vindo do Google já paga o site várias vezes. Com SEO local bem feito, você atrai pacientes que estão ativamente buscando seus serviços.' }
    ],
    faqs: [
      { q: 'Posso criar uma página para cada procedimento?', a: 'No plano Premium sim. Cada procedimento ganha sua própria página otimizada para o Google, aumentando as chances de aparecer nas buscas.' },
      { q: 'É possível mostrar certificações?', a: 'Sim. Incluímos seção com formação, especializações e certificados para transmitir credibilidade e segurança às pacientes.' },
      { q: 'Dá pra integrar com redes sociais?', a: 'Sim. Colocamos links para Instagram, feed de fotos e depoimentos que você já tem nas redes.' },
      { q: 'O site ajuda a aparecer no Google?', a: 'Sim. Otimizamos para termos como "harmonização facial em [sua cidade]", "limpeza de pele perto de mim" e outros que seus clientes buscam.' }
    ],
    cta: 'Quero um site pra minha clínica de estética'
  },
  {
    slug: 'site-para-spa',
    title: 'Site para Spa em 48h | DigiRocket — R$497',
    description: 'Site relaxante para spa e day spa com catálogo de tratamentos, ambiente e reservas por WhatsApp. Design premium em 48 horas.',
    h1: 'Site para Spa',
    intro: 'Um spa vende experiência e bem-estar. O site precisa transmitir essa sensação desde o primeiro clique. Quem busca um day spa ou spa urbano quer ver o ambiente, os tratamentos disponíveis e sentir que está fazendo a escolha certa antes de reservar.',
    sections: [
      { title: 'A experiência começa antes da visita', content: 'Clientes de spa pesquisam online antes de escolher onde relaxar. Eles querem ver fotos do ambiente, entender os tratamentos disponíveis e sentir a atmosfera do espaço. Sem site, você depende apenas de indicação e perde quem está buscando ativamente um momento de autocuidado.' },
      { title: 'Design que transmite tranquilidade', content: 'Criamos sites para spas com paleta de cores suaves, tipografia elegante e imagens em tela cheia que transportam o visitante para dentro do seu espaço. Cada detalhe do design é pensado para evocar relaxamento e sofisticação.' },
      { title: 'O que incluímos no site do spa', content: 'Tour virtual do ambiente com fotos profissionais, catálogo de tratamentos com descrição e duração, pacotes e combos especiais, seção de presentes (gift cards), depoimentos de clientes, horários disponíveis e botão de reserva via WhatsApp.' },
      { title: 'Retorno sobre o investimento', content: 'Um day spa custa entre R$200 e R$800 por pessoa. Um pacote para casal pode passar de R$1.000. Duas reservas por mês vindas do Google já geram retorno muito superior ao investimento de R$497 no site.' }
    ],
    faqs: [
      { q: 'Consigo mostrar fotos do ambiente do spa?', a: 'Sim. Usamos fotos em destaque do ambiente, salas de tratamento, piscina e áreas de relaxamento para encantar o visitante.' },
      { q: 'Dá pra vender pacotes e gift cards pelo site?', a: 'Sim. Criamos seções para pacotes especiais, combos e vale-presentes com botão direto para WhatsApp ou pagamento.' },
      { q: 'O site pode ter vídeo de fundo?', a: 'Sim. No plano Premium podemos incluir vídeo de fundo na página inicial para criar uma experiência imersiva.' },
      { q: 'Posso mostrar horários disponíveis?', a: 'Sim. Incluímos grade de horários e o cliente entra em contato pelo WhatsApp para confirmar a reserva.' }
    ],
    cta: 'Quero um site pro meu spa'
  },
  {
    slug: 'site-para-clinica',
    title: 'Site para Clínica em 48h | DigiRocket — R$497',
    description: 'Site profissional para clínica médica com apresentação de especialidades, corpo clínico e agendamento online. Pronto em 48 horas.',
    h1: 'Site para Clínica',
    intro: 'Pacientes pesquisam sintomas e especialistas no Google antes de agendar. Uma clínica sem site perde pacientes para concorrentes que aparecem nas buscas. Um site profissional posiciona sua clínica como referência na região e facilita o agendamento.',
    sections: [
      { title: 'Pacientes buscam no Google primeiro', content: 'Dados mostram que 77% dos pacientes pesquisam online antes de escolher um profissional de saúde. Se sua clínica não aparece quando alguém busca "clínica médica em [cidade]" ou "ortopedista perto de mim", esses pacientes vão para quem aparece primeiro.' },
      { title: 'Site que transmite credibilidade médica', content: 'Desenvolvemos sites para clínicas com foco em confiança: apresentação do corpo clínico com CRM e especialidades, infraestrutura da clínica, convênios atendidos, e informações claras sobre cada especialidade. O design transmite seriedade e profissionalismo.' },
      { title: 'Recursos do site para clínica', content: 'Página por especialidade médica, perfil de cada profissional com formação, lista de convênios aceitos, fotos da infraestrutura, horário de funcionamento, múltiplos canais de contato (WhatsApp, telefone, formulário) e integração com Google Meu Negócio.' },
      { title: 'Impacto nos agendamentos', content: 'Uma consulta particular custa de R$200 a R$600 dependendo da especialidade. Com o site aparecendo no Google, sua clínica pode receber dezenas de novos agendamentos por mês. O investimento de R$497 se paga com uma única consulta.' }
    ],
    faqs: [
      { q: 'Posso listar todos os convênios aceitos?', a: 'Sim. Incluímos uma seção com logos e nomes de todos os convênios que a clínica atende, facilitando a decisão do paciente.' },
      { q: 'Cada médico tem uma página própria?', a: 'No plano Premium, sim. Cada profissional ganha uma página com foto, CRM, formação e especialidades.' },
      { q: 'O site atende às normas do CFM?', a: 'Sim. Seguimos as diretrizes de publicidade médica do Conselho Federal de Medicina para sites de clínicas.' },
      { q: 'Posso incluir link para telemedicina?', a: 'Sim. Integramos botões para teleconsulta, sistemas de agendamento externo ou qualquer plataforma que a clínica utilize.' }
    ],
    cta: 'Quero um site pra minha clínica'
  },
  {
    slug: 'site-para-medico',
    title: 'Site para Médico em 48h | DigiRocket — R$497',
    description: 'Site profissional para médico com apresentação de especialidade, currículo e agendamento direto pelo WhatsApp. Entrega em 48h.',
    h1: 'Site para Médico',
    intro: 'Pacientes pesquisam médicos pelo nome e especialidade antes de agendar consulta. Um site pessoal profissional diferencia você dos colegas que ainda dependem apenas de plataformas de terceiros como Doctoralia, onde a concorrência é direta.',
    sections: [
      { title: 'Depender de plataformas de terceiros tem custo', content: 'Plataformas como Doctoralia e BoaConsulta cobram mensalidades altas e colocam seus concorrentes lado a lado com você. Ter seu próprio site significa controlar a narrativa, aparecer no Google com seu nome e receber agendamentos sem pagar comissão por paciente.' },
      { title: 'Seu consultório digital', content: 'Criamos um site que funciona como extensão do seu consultório: apresentação da sua formação, especialidade, abordagem clínica e áreas de atuação. O paciente encontra tudo que precisa para sentir confiança antes de marcar a consulta.' },
      { title: 'O que incluímos no site médico', content: 'Apresentação profissional com CRM e RQE, especialidades e áreas de atuação, endereços dos consultórios com mapa, convênios atendidos, artigos informativos (no Premium), links para teleconsulta e botão de WhatsApp para agendamento direto.' },
      { title: 'Resultados concretos', content: 'Médicos com site próprio relatam aumento de 40-60% nos agendamentos particulares. Pacientes particulares buscam mais informações antes de escolher e valorizam profissionais com presença digital sólida. O site se paga com uma única consulta particular.' }
    ],
    faqs: [
      { q: 'O site segue as regras do CFM?', a: 'Sim. Não incluímos preços, promessas de resultado ou fotos de pacientes sem autorização. Seguimos todas as diretrizes de publicidade médica.' },
      { q: 'Posso ter site mesmo atendendo por convênio?', a: 'Claro. O site ajuda especialmente a atrair pacientes particulares que buscam um especialista de confiança.' },
      { q: 'Dá pra incluir link para teleconsulta?', a: 'Sim. Integramos com qualquer plataforma de telemedicina que você utiliza: Google Meet, plataforma própria ou sistema do convênio.' },
      { q: 'Posso publicar artigos no site?', a: 'No plano Premium, sim. Artigos educativos ajudam no SEO e posicionam você como autoridade na sua especialidade.' }
    ],
    cta: 'Quero um site pro meu consultório'
  },
  {
    slug: 'site-para-dentista',
    title: 'Site para Dentista em 48h | DigiRocket — R$497',
    description: 'Site para consultório odontológico com tratamentos, galeria de sorrisos e agendamento por WhatsApp. Design profissional em 48h.',
    h1: 'Site para Dentista',
    intro: 'A odontologia estética cresceu exponencialmente e os pacientes pesquisam tratamentos online antes de escolher um dentista. Lentes de contato, clareamento, implantes — tudo começa com uma busca no Google. Seu consultório precisa estar lá.',
    sections: [
      { title: 'O paciente pesquisa antes de sorrir', content: 'Antes de investir milhares de reais em lentes de contato dental ou implantes, o paciente pesquisa extensivamente. Ele compara profissionais, vê resultados, lê sobre os procedimentos. Se você não tem site mostrando seus casos e explicando os tratamentos, está fora dessa consideração.' },
      { title: 'Site odontológico que converte', content: 'Criamos sites para dentistas com foco em mostrar resultados: galeria de sorrisos (antes e depois), explicação acessível de cada tratamento, apresentação profissional com CRO e especializações, e botão de WhatsApp para avaliação gratuita.' },
      { title: 'Estrutura completa', content: 'Galeria de casos clínicos (antes e depois), página por tratamento (implantes, ortodontia, estética, endodontia), apresentação do profissional e equipe, tecnologias utilizadas (scanner 3D, laser), convênios aceitos, e agendamento facilitado.' },
      { title: 'O retorno de um único caso', content: 'Um tratamento de lentes de contato dental custa de R$10.000 a R$30.000. Um caso de implantes de R$3.000 a R$15.000. Um único paciente que encontra seu consultório pelo Google paga o site dezenas de vezes.' }
    ],
    faqs: [
      { q: 'Posso colocar fotos de antes e depois?', a: 'Sim, desde que tenha autorização dos pacientes. Montamos uma galeria de sorrisos que é o elemento mais persuasivo para novos agendamentos.' },
      { q: 'Cada tratamento tem uma página?', a: 'No plano Premium, sim. Isso ajuda a aparecer no Google para buscas específicas como "implante dentário em [cidade]".' },
      { q: 'O site aparece quando buscam dentista na minha cidade?', a: 'Sim. Otimizamos para termos locais e integramos com Google Meu Negócio para aparecer no mapa.' },
      { q: 'Posso colocar avaliação gratuita como chamada?', a: 'Sim. É uma estratégia que funciona muito bem. O botão de WhatsApp pode ter a mensagem "Quero agendar minha avaliação gratuita".' }
    ],
    cta: 'Quero um site pro meu consultório odontológico'
  },
  {
    slug: 'site-para-psicologo',
    title: 'Site para Psicólogo em 48h | DigiRocket — R$497',
    description: 'Site acolhedor para psicólogo com apresentação de abordagem, áreas de atuação e agendamento online. Pronto em 48h, R$497.',
    h1: 'Site para Psicólogo',
    intro: 'A busca por terapia online cresceu mais de 300% nos últimos anos. Pacientes pesquisam psicólogos por abordagem, especialidade e localização. Um site profissional transmite a acolhimento e segurança que o paciente precisa sentir antes de dar o primeiro passo.',
    sections: [
      { title: 'O primeiro passo é digital', content: 'Procurar um psicólogo já é difícil para muitas pessoas. Quando elas finalmente buscam ajuda no Google, precisam encontrar um profissional que transmita empatia e segurança. Um site acolhedor com informações claras reduz a barreira e facilita o primeiro contato.' },
      { title: 'Site que acolhe desde o primeiro clique', content: 'Desenvolvemos sites para psicólogos com tom acolhedor: cores suaves, linguagem empática, explicação clara da abordagem terapêutica (TCC, psicanálise, humanista, etc.) e áreas de atuação. O paciente entende que encontrou o profissional certo antes de agendar.' },
      { title: 'Recursos do site para psicólogos', content: 'Apresentação profissional com CRP e formação, explicação da abordagem terapêutica, áreas de atuação (ansiedade, depressão, casais, etc.), informações sobre terapia online, valores da sessão (se desejar), e botão de WhatsApp para agendar a primeira sessão.' },
      { title: 'Impacto na clínica', content: 'Uma sessão de psicoterapia custa de R$150 a R$400. Um paciente em terapia semanal gera de R$600 a R$1.600 por mês. Um único paciente novo vindo do Google paga o site no primeiro mês e gera receita recorrente por meses ou anos.' }
    ],
    faqs: [
      { q: 'Posso atender online e presencial?', a: 'Sim. Incluímos informações sobre ambas modalidades, plataformas de atendimento online e endereço do consultório para presencial.' },
      { q: 'É ético colocar preço no site?', a: 'Sim. O CFP permite divulgar valores. Fica a seu critério incluir ou não. Muitos preferem informar que valores são passados no primeiro contato.' },
      { q: 'Dá pra escrever artigos sobre saúde mental?', a: 'No plano Premium, sim. Artigos sobre ansiedade, depressão e autoconhecimento trazem tráfego orgânico e posicionam você como autoridade.' },
      { q: 'O site precisa seguir regras do CFP?', a: 'Sim. Não fazemos promessas de cura ou resultados garantidos. Seguimos as orientações do Conselho Federal de Psicologia.' }
    ],
    cta: 'Quero um site pro meu consultório de psicologia'
  },
  {
    slug: 'site-para-fisioterapeuta',
    title: 'Site para Fisioterapeuta em 48h | DigiRocket — R$497',
    description: 'Site para fisioterapeuta com especialidades, técnicas utilizadas e agendamento fácil. Apareça no Google e receba mais pacientes.',
    h1: 'Site para Fisioterapeuta',
    intro: 'Pacientes com dor buscam soluções imediatas no Google. "Fisioterapeuta perto de mim", "tratamento para hérnia de disco", "RPG postural" — se seu consultório não aparece nessas buscas, você perde pacientes que precisam exatamente do seu serviço.',
    sections: [
      { title: 'Pacientes em dor buscam solução rápida', content: 'Quando alguém sente dor nas costas ou sofre uma lesão, a primeira ação é buscar no Google. Esse paciente está motivado e pronto para agendar — ele não vai esperar. Se seu nome não aparece nos resultados, ele vai para o primeiro fisioterapeuta que encontrar.' },
      { title: 'Posicionamento como especialista', content: 'Criamos seu site focado nas suas especialidades: ortopedia, neurologia, esportiva, respiratória, pilates clínico. Cada área de atuação é apresentada de forma clara, explicando para quem é indicada e quais resultados esperar. Isso atrai exatamente o paciente certo.' },
      { title: 'O que incluímos no site', content: 'Apresentação com CREFITO e especializações, áreas de atuação detalhadas, técnicas utilizadas (RPG, terapia manual, dry needling, pilates), fotos do espaço e equipamentos, atendimento domiciliar (se oferece), convênios aceitos e botão de WhatsApp.' },
      { title: 'Retorno do investimento', content: 'Uma sessão de fisioterapia particular custa de R$100 a R$300. Um paciente em tratamento faz em média 10 sessões. Um único paciente novo gera de R$1.000 a R$3.000 em receita. O site de R$497 se paga com sobra no primeiro paciente.' }
    ],
    faqs: [
      { q: 'Posso listar todas as técnicas que utilizo?', a: 'Sim. Criamos seções para cada técnica (RPG, pilates, terapia manual, etc.) explicando indicações e benefícios.' },
      { q: 'Atendo a domicílio. Posso divulgar?', a: 'Sim. Incluímos seção sobre atendimento domiciliar com áreas atendidas e como funciona o agendamento.' },
      { q: 'Dá pra colocar depoimentos de pacientes?', a: 'Sim. Depoimentos reais de pacientes recuperados são muito poderosos para gerar confiança em novos pacientes.' },
      { q: 'O site ajuda a conseguir pacientes particulares?', a: 'Sim. Pacientes que buscam no Google geralmente querem atendimento rápido e estão dispostos a pagar particular para não esperar convênio.' }
    ],
    cta: 'Quero um site pro meu consultório de fisioterapia'
  },
  {
    slug: 'site-para-nutricionista',
    title: 'Site para Nutricionista em 48h | DigiRocket — R$497',
    description: 'Site para nutricionista com áreas de atuação, abordagem nutricional e agendamento online. Atraia pacientes pelo Google.',
    h1: 'Site para Nutricionista',
    intro: 'A procura por nutricionistas disparou com a busca por saúde e qualidade de vida. Pacientes pesquisam por especialidade — nutrição esportiva, emagrecimento, gestantes, vegetariana. Um site posiciona você como referência na sua área e atrai o paciente ideal.',
    sections: [
      { title: 'O mercado de nutrição está aquecido', content: 'Mais pessoas buscam acompanhamento nutricional do que nunca. O problema é que a oferta também cresceu. Com tantos nutricionistas nas redes sociais, diferenciar-se exige presença profissional. Um site próprio mostra que você é um profissional sério, não mais um perfil genérico.' },
      { title: 'Atraindo o paciente certo', content: 'Seu site é desenvolvido focado na sua especialidade: nutrição clínica, esportiva, comportamental, materno-infantil ou funcional. Quando alguém busca "nutricionista esportivo em [cidade]", seu site aparece com conteúdo específico que mostra que você é a pessoa certa.' },
      { title: 'Estrutura do site nutricional', content: 'Apresentação com CRN e formação, áreas de atuação e público-alvo, metodologia de trabalho (consulta presencial e online), informações sobre primeira consulta, planos de acompanhamento, depoimentos de pacientes e botão para agendar via WhatsApp.' },
      { title: 'O valor de um paciente recorrente', content: 'Um acompanhamento nutricional custa de R$200 a R$500 por consulta, com retornos mensais. Um paciente acompanhado por 6 meses gera de R$1.200 a R$3.000. O site de R$497 se paga com um único paciente novo que decide te acompanhar.' }
    ],
    faqs: [
      { q: 'Posso atender online pelo site?', a: 'Sim. Incluímos informações sobre consulta online, como funciona, e botão direto para agendamento por WhatsApp ou plataforma de teleconsulta.' },
      { q: 'Dá pra ter blog com receitas e dicas?', a: 'No plano Premium, sim. Um blog com receitas saudáveis e dicas nutricionais atrai tráfego orgânico e posiciona você como autoridade.' },
      { q: 'Posso segmentar por público?', a: 'Sim. Criamos seções específicas para cada público: atletas, gestantes, vegetarianos, pessoas com restrições alimentares, etc.' },
      { q: 'O site aparece nas buscas da minha cidade?', a: 'Sim. Otimizamos para buscas locais como "nutricionista em [cidade]" e integramos com Google Meu Negócio.' }
    ],
    cta: 'Quero um site pro meu consultório de nutrição'
  },
  {
    slug: 'site-para-advogado',
    title: 'Site para Advogado em 48h | DigiRocket — R$497',
    description: 'Site profissional para advogado com áreas de atuação, artigos jurídicos e captação de clientes pelo Google. Pronto em 48h.',
    h1: 'Site para Advogado',
    intro: 'A advocacia é cada vez mais competitiva. Clientes pesquisam advogados por especialidade no Google antes de contratar. Um site profissional posiciona você como autoridade na sua área e atrai consultas qualificadas sem depender apenas de indicação.',
    sections: [
      { title: 'Indicação não escala', content: 'Indicação é ótima, mas não é previsível. Você não controla quando vem o próximo cliente. Com um site otimizado para Google, seu escritório recebe consultas de pessoas que buscam exatamente sua especialidade: direito trabalhista, familiar, empresarial, criminal. É demanda ativa.' },
      { title: 'Presença digital dentro da ética da OAB', content: 'Criamos sites para advogados respeitando todas as diretrizes do Código de Ética da OAB. Sem promessas de resultado, sem mercantilização. O foco é informar, educar e mostrar competência — atraindo clientes que valorizam conhecimento técnico.' },
      { title: 'O que incluímos no site jurídico', content: 'Apresentação do advogado ou escritório com OAB e especializações, áreas de atuação detalhadas, artigos jurídicos informativos (no Premium), seção de perguntas frequentes por área, depoimentos de clientes (com autorização) e formulário de contato ou WhatsApp.' },
      { title: 'Retorno real', content: 'Um caso trabalhista ou familiar gera honorários de R$3.000 a R$20.000+. Um único cliente que encontra seu escritório pelo Google paga o investimento do site muitas vezes. Advogados com presença digital forte relatam 2x mais consultas qualificadas.' }
    ],
    faqs: [
      { q: 'O site respeita as regras da OAB?', a: 'Sim. Seguimos rigorosamente o Provimento 205/2021 da OAB. Sem promessas de resultado, sem captação indevida, sem publicidade incompatível.' },
      { q: 'Posso publicar artigos jurídicos?', a: 'Sim. No plano Premium, artigos informativos ajudam no SEO e demonstram sua expertise em áreas específicas do direito.' },
      { q: 'Cada área de atuação tem uma página?', a: 'No plano Premium, sim. Isso ajuda a ranquear para buscas como "advogado trabalhista em [cidade]" ou "advogado de família".' },
      { q: 'Posso colocar formulário de contato?', a: 'Sim. Incluímos formulário e/ou botão de WhatsApp. Muitos advogados preferem formulário para filtrar consultas antes de responder.' }
    ],
    cta: 'Quero um site pro meu escritório de advocacia'
  },
  {
    slug: 'site-para-contador',
    title: 'Site para Contador em 48h | DigiRocket — R$497',
    description: 'Site para escritório de contabilidade com serviços, diferenciais e captação de empresas pelo Google. Pagamento único, sem mensalidade.',
    h1: 'Site para Contador',
    intro: 'Empreendedores que abrem empresa ou querem trocar de contador pesquisam no Google. "Contador para MEI", "escritório de contabilidade barato", "abrir CNPJ" — se seu escritório não aparece nessas buscas, perde clientes recorrentes para concorrentes digitalizados.',
    sections: [
      { title: 'O contador que não aparece online perde clientes todo mês', content: 'Hoje existem milhares de contadores online competindo por clientes. Quem não tem presença digital fica limitado a indicações da vizinhança. O empreendedor moderno pesquisa, compara e escolhe online — se você não está lá, não existe para ele.' },
      { title: 'Site que gera clientes recorrentes', content: 'Desenvolvemos sites para contadores focados em converter visitantes em clientes de mensalidade. Destacamos seus diferenciais: atendimento personalizado, expertise em regimes específicos (Simples, Lucro Presumido, Real), segmentos atendidos e suporte humanizado.' },
      { title: 'Estrutura ideal para contabilidade', content: 'Serviços oferecidos (abertura de empresa, fiscal, pessoal, tributário), planos e mensalidades, segmentos atendidos (e-commerce, profissionais liberais, indústria), diferenciais do escritório, depoimentos de clientes, blog com dicas tributárias (Premium) e formulário de contato.' },
      { title: 'O valor de um cliente contábil', content: 'Um cliente de contabilidade paga de R$200 a R$2.000 por mês e fica em média 3-5 anos. Um único cliente MEI de R$150/mês gera R$1.800/ano. Dois clientes novos por mês vindos do Google transformam completamente o faturamento do escritório.' }
    ],
    faqs: [
      { q: 'Posso colocar planos com preços?', a: 'Sim. Muitos escritórios digitais mostram planos a partir de X. Fica a seu critério mostrar valores ou não.' },
      { q: 'Dá pra ter calculadora de impostos?', a: 'No plano Premium podemos integrar ferramentas simples como simulador de regime tributário ou calculadora de DAS.' },
      { q: 'O site ajuda a captar empresas maiores?', a: 'Sim. Um site profissional transmite credibilidade e capacidade. Empresas maiores pesquisam e avaliam antes de trocar de contador.' },
      { q: 'Posso segmentar por tipo de empresa?', a: 'Sim. Criamos seções para MEI, ME, EPP, Lucro Presumido — cada perfil de empresa vê que você atende suas necessidades específicas.' }
    ],
    cta: 'Quero um site pro meu escritório de contabilidade'
  },
  {
    slug: 'site-para-consultor',
    title: 'Site para Consultor em 48h | DigiRocket — R$497',
    description: 'Site profissional para consultor com portfólio, metodologia e captação de clientes corporativos. Autoridade digital em 48h.',
    h1: 'Site para Consultor',
    intro: 'Consultores vendem conhecimento e autoridade. Sem um site profissional, você depende de networking e LinkedIn para atrair projetos. Um site próprio posiciona você como especialista, apresenta sua metodologia e atrai empresas que buscam exatamente sua expertise.',
    sections: [
      { title: 'Autoridade se constrói com presença digital', content: 'Empresas que contratam consultores pesquisam antes. Elas querem ver cases, metodologia, resultados anteriores e formação. O LinkedIn ajuda, mas um site próprio demonstra outro nível de profissionalismo e permite apresentar seu trabalho de forma completa e controlada.' },
      { title: 'Seu portfólio digital completo', content: 'Criamos um site que funciona como seu portfólio executivo: metodologia de trabalho, cases de sucesso, áreas de expertise, formação e certificações, depoimentos de clientes corporativos e proposta de valor clara. Tudo apresentado com design que transmite sofisticação.' },
      { title: 'O que incluímos no site de consultoria', content: 'Apresentação profissional e proposta de valor, metodologia e framework de trabalho, cases de sucesso com resultados mensuráveis, áreas de atuação e setores atendidos, palestras e publicações, formulário para solicitar proposta e botão de WhatsApp.' },
      { title: 'ROI de um único projeto', content: 'Um projeto de consultoria pode valer de R$5.000 a R$100.000+. Um único contrato fechado por um lead que encontrou seu site paga o investimento centenas de vezes. É o canal de aquisição mais eficiente para consultores independentes.' }
    ],
    faqs: [
      { q: 'Posso mostrar cases sem revelar clientes?', a: 'Sim. Apresentamos resultados de forma anônima quando necessário: "empresa do setor X com Y funcionários obteve Z% de resultado".' },
      { q: 'O site serve para consultoria B2B?', a: 'Sim. Focamos o conteúdo e design para decisores corporativos que buscam consultoria especializada.' },
      { q: 'Dá pra integrar com calendário?', a: 'Sim. Integramos com Calendly ou Google Calendar para que leads agendem uma conversa inicial diretamente.' },
      { q: 'Posso ter blog ou artigos?', a: 'No plano Premium, sim. Artigos de thought leadership atraem tráfego qualificado e reforçam sua autoridade no tema.' }
    ],
    cta: 'Quero um site pra minha consultoria'
  },
  {
    slug: 'site-para-arquiteto',
    title: 'Site para Arquiteto em 48h | DigiRocket — R$497',
    description: 'Site portfólio para arquiteto com projetos, renderizações e estilo autoral. Atraia clientes que valorizam design. Pronto em 48h.',
    h1: 'Site para Arquiteto',
    intro: 'Arquitetura é visual. Clientes escolhem arquitetos pelo portfólio, pelo estilo e pela conexão com o trabalho apresentado. Um site é a galeria perfeita para expor seus projetos e atrair clientes que se identificam com sua linguagem arquitetônica.',
    sections: [
      { title: 'Seu portfólio merece mais que o Instagram', content: 'O Instagram limita a apresentação dos seus projetos: formatos fixos, algoritmo imprevisível, impossibilidade de organizar por categoria. Um site permite mostrar cada projeto com fotos em alta resolução, descrição do conceito, plantas e renderizações — do jeito que seu trabalho merece ser visto.' },
      { title: 'Design que reflete seu estilo autoral', content: 'Criamos sites para arquitetos com design minimalista e foco total nas imagens. A navegação é limpa, as fotos ganham destaque máximo e o layout reflete a sofisticação do seu trabalho. O site se torna extensão da sua identidade profissional.' },
      { title: 'Recursos para portfólio de arquitetura', content: 'Galeria de projetos por categoria (residencial, comercial, interiores), fotos em alta resolução com zoom, descrição conceitual de cada projeto, antes e depois de reformas, seção "Sobre" com formação e prêmios, e formulário para solicitar orçamento.' },
      { title: 'O valor de um projeto de arquitetura', content: 'Um projeto residencial custa de R$5.000 a R$50.000+. Um projeto comercial pode ultrapassar R$100.000. Um único cliente que encontra seu portfólio online e se identifica com seu estilo gera um retorno incomparável ao investimento de R$497.' }
    ],
    faqs: [
      { q: 'As fotos ficam em alta qualidade?', a: 'Sim. Otimizamos as imagens para carregar rápido sem perder qualidade. Fotos de projetos arquitetônicos ficam em destaque com possibilidade de zoom.' },
      { q: 'Posso organizar por tipo de projeto?', a: 'Sim. Separamos por categorias: residencial, comercial, interiores, paisagismo — o cliente navega direto para o que interessa.' },
      { q: 'O site funciona como portfólio para concursos?', a: 'Sim. Muitos arquitetos usam o site como referência profissional para concursos, parcerias e convites de projetos.' },
      { q: 'Posso atualizar os projetos depois?', a: 'No plano Premium você mesmo atualiza. No Essencial, envia as fotos e nós atualizamos para você.' }
    ],
    cta: 'Quero um site portfólio pro meu escritório'
  },
  {
    slug: 'site-para-engenheiro',
    title: 'Site para Engenheiro em 48h | DigiRocket — R$497',
    description: 'Site profissional para engenheiro civil com portfólio de obras, serviços e captação de clientes. Credibilidade online em 48h.',
    h1: 'Site para Engenheiro',
    intro: 'Clientes que precisam de laudo técnico, projeto estrutural ou acompanhamento de obra pesquisam engenheiros no Google. Um site profissional com portfólio de obras e serviços claros diferencia você dos profissionais sem presença digital.',
    sections: [
      { title: 'Engenheiros que dependem só de indicação perdem oportunidades', content: 'O mercado de engenharia civil está cada vez mais digital. Construtoras, incorporadoras e clientes particulares buscam engenheiros online para laudos, projetos, perícias e fiscalização. Se você não aparece, não é considerado — simples assim.' },
      { title: 'Credibilidade técnica no mundo digital', content: 'Seu site apresenta sua formação, CREA, especializações e portfólio de obras de forma organizada. Mostramos sua experiência com projetos reais, áreas de atuação e diferenciais técnicos. O cliente sente segurança antes de entrar em contato.' },
      { title: 'O que incluímos no site de engenharia', content: 'Apresentação com CREA e especializações, portfólio de obras executadas com fotos, serviços oferecidos (laudos, projetos, ART, fiscalização), áreas de atuação, atendimento a construtoras e particulares, e botão de WhatsApp para orçamento.' },
      { title: 'Valor de um contrato de engenharia', content: 'Um laudo técnico custa de R$1.000 a R$5.000. Um projeto estrutural de R$5.000 a R$30.000. Acompanhamento de obra pode gerar R$50.000+. Um único contrato originado pelo site paga o investimento dezenas de vezes.' }
    ],
    faqs: [
      { q: 'Posso listar todos os serviços que ofereço?', a: 'Sim. Detalhamos cada serviço: projetos estruturais, laudos, perícias, acompanhamento de obra, regularização, etc.' },
      { q: 'Dá pra mostrar fotos de obras?', a: 'Sim. Montamos galeria de obras executadas com fotos de progresso e resultado final, gerando confiança nos potenciais clientes.' },
      { q: 'Atendo construtoras e particulares. Posso segmentar?', a: 'Sim. Criamos seções diferentes para cada público: "Para construtoras" e "Para residências" com linguagem adequada.' },
      { q: 'O site ajuda a conseguir clientes de outras cidades?', a: 'Sim. Otimizamos para buscas regionais e podemos ampliar o alcance para toda sua área de atuação.' }
    ],
    cta: 'Quero um site pro meu escritório de engenharia'
  },
  {
    slug: 'site-para-imobiliaria',
    title: 'Site para Imobiliária em 48h | DigiRocket — R$497',
    description: 'Site para imobiliária com catálogo de imóveis, filtros de busca e captação de leads. Destaque seus imóveis no Google em 48h.',
    h1: 'Site para Imobiliária',
    intro: 'O mercado imobiliário migrou para o digital. Compradores e locatários pesquisam imóveis online antes de visitar. Uma imobiliária sem site próprio depende exclusivamente de portais que cobram mensalidades altas e diluem sua marca entre centenas de concorrentes.',
    sections: [
      { title: 'Portais cobram caro e sua marca desaparece', content: 'ZAP, OLX, Viva Real — esses portais cobram mensalidades de R$500 a R$5.000 e colocam seus imóveis ao lado dos concorrentes. Sua marca se dilui. Com um site próprio, o cliente encontra seus imóveis, conhece sua imobiliária e não é distraído por ofertas de outros.' },
      { title: 'Seu portfólio imobiliário em destaque', content: 'Criamos sites para imobiliárias com foco na experiência de busca: catálogo visual, filtros por bairro, tipo e faixa de preço, fotos em destaque e descrições completas. O cliente navega seus imóveis com a mesma facilidade de um grande portal, mas sem concorrência.' },
      { title: 'Recursos do site imobiliário', content: 'Catálogo de imóveis com fotos e descrição, filtros de busca (tipo, bairro, preço, quartos), página individual por imóvel, destaque para lançamentos, seção de avaliação gratuita, captação de imóveis para venda, e WhatsApp direto com o corretor responsável.' },
      { title: 'ROI no mercado imobiliário', content: 'Uma comissão de venda gera de R$5.000 a R$50.000+. Uma locação gera receita mensal recorrente. Um único negócio fechado por lead do site justifica anos de investimento. E sem mensalidade — o site é seu para sempre.' }
    ],
    faqs: [
      { q: 'Consigo cadastrar imóveis sozinho?', a: 'No plano Premium, sim. Você gerencia seu catálogo: adiciona, edita e remove imóveis de forma independente.' },
      { q: 'O site substitui portais como ZAP?', a: 'Complementa. Você continua nos portais se quiser, mas tem um canal próprio sem mensalidade onde o cliente encontra só seus imóveis.' },
      { q: 'Dá pra ter chat com o corretor?', a: 'Sim. Cada imóvel pode ter o WhatsApp do corretor responsável, facilitando o contato direto e rápido.' },
      { q: 'O site aparece no Google quando buscam imóveis?', a: 'Sim. Otimizamos para termos como "apartamento para alugar em [bairro]" e "casa à venda em [cidade]".' }
    ],
    cta: 'Quero um site pra minha imobiliária'
  },
  {
    slug: 'site-para-construtora',
    title: 'Site para Construtora em 48h | DigiRocket — R$497',
    description: 'Site institucional para construtora com portfólio de empreendimentos, obras em andamento e contato comercial. Pronto em 48h.',
    h1: 'Site para Construtora',
    intro: 'Uma construtora sem site é invisível para investidores, compradores e parceiros comerciais. O site é sua vitrine institucional: mostra solidez, experiência e a qualidade dos seus empreendimentos para quem busca confiança antes de investir.',
    sections: [
      { title: 'Credibilidade é tudo na construção civil', content: 'Comprar um imóvel na planta exige confiança na construtora. O primeiro lugar onde o comprador vai pesquisar é o Google. Se ele não encontra um site profissional com histórico de obras, empreendimentos entregues e dados da empresa, a desconfiança aparece e a venda é perdida.' },
      { title: 'Vitrine institucional que gera negócios', content: 'Desenvolvemos sites institucionais para construtoras que comunicam solidez: histórico da empresa, empreendimentos entregues, obras em andamento, parceiros e certificações. O design transmite profissionalismo e os CTAs direcionam para o comercial.' },
      { title: 'Estrutura do site para construtora', content: 'Página institucional com histórico e valores, portfólio de empreendimentos entregues com fotos, empreendimentos em andamento com status da obra, plantas e diferenciais de cada empreendimento, canal de relacionamento com investidores e formulário comercial.' },
      { title: 'Impacto nas vendas', content: 'Um empreendimento imobiliário movimenta milhões. O site é o cartão de visita que abre portas para vendas na planta, parcerias com corretoras e relacionamento com investidores. O investimento de R$497 é irrelevante frente ao potencial de retorno.' }
    ],
    faqs: [
      { q: 'Posso mostrar o andamento das obras?', a: 'Sim. Criamos seção de obras em andamento com fotos atualizadas, percentual de conclusão e previsão de entrega.' },
      { q: 'Dá pra colocar plantas dos apartamentos?', a: 'Sim. Cada empreendimento pode ter galeria de plantas, imagens 3D e tabela de unidades disponíveis.' },
      { q: 'O site ajuda a atrair investidores?', a: 'Sim. Um site institucional profissional é o mínimo que investidores esperam antes de considerar um aporte ou parceria.' },
      { q: 'Posso integrar com portal de vendas?', a: 'Sim. Integramos links para portais de vendas, chat com corretores ou sistema de CRM que a construtora utiliza.' }
    ],
    cta: 'Quero um site pra minha construtora'
  },
  {
    slug: 'site-para-energia-solar',
    title: 'Site para Energia Solar em 48h | DigiRocket — R$497',
    description: 'Site para empresa de energia solar com simulador, portfólio de instalações e captação de orçamentos. Gere leads qualificados.',
    h1: 'Site para Energia Solar',
    intro: 'O mercado de energia solar cresce 30% ao ano no Brasil. Residências e empresas pesquisam "energia solar" no Google antes de solicitar orçamento. Um site profissional com portfólio de instalações e informações claras posiciona sua empresa na frente dos concorrentes locais.',
    sections: [
      { title: 'Leads de energia solar valem ouro', content: 'Quem busca energia solar no Google está com intenção de compra alta. São pessoas que já entenderam os benefícios e querem orçamento. Se sua empresa não aparece nessa busca, esses leads quentes vão direto para o concorrente que investiu em presença digital.' },
      { title: 'Site que educa e converte', content: 'Criamos sites para empresas de energia solar que educam o visitante e eliminam objeções: como funciona a energia solar, quanto economiza, prazo de retorno do investimento, financiamento disponível e portfólio de instalações reais na região.' },
      { title: 'O que incluímos no site solar', content: 'Explicação didática sobre energia solar fotovoltaica, simulador de economia simplificado, portfólio de instalações com kWp e fotos, opções de financiamento, processo de instalação passo a passo, garantias oferecidas e formulário para solicitar orçamento gratuito.' },
      { title: 'Retorno por projeto', content: 'Um projeto residencial de energia solar custa de R$15.000 a R$50.000. Comercial pode ultrapassar R$200.000. Um único orçamento que vira venda pelo site gera lucro que paga anos de presença digital. E o site continua gerando leads 24h.' }
    ],
    faqs: [
      { q: 'Posso ter simulador de economia no site?', a: 'Sim. Incluímos calculadora simples onde o visitante coloca o valor da conta de luz e vê a estimativa de economia mensal.' },
      { q: 'Dá pra mostrar instalações feitas?', a: 'Sim. Galeria de projetos com fotos, potência instalada, economia gerada e localização (cidade) gera confiança em novos clientes.' },
      { q: 'O site capta leads para a equipe comercial?', a: 'Sim. Formulário de orçamento captura nome, telefone, valor da conta de luz e endereço — tudo que sua equipe precisa para fazer a proposta.' },
      { q: 'Posso falar sobre financiamento?', a: 'Sim. Incluímos seção sobre opções de financiamento (BV, Santander, Sicredi, etc.) com condições gerais para eliminar a objeção de preço.' }
    ],
    cta: 'Quero um site pra minha empresa de energia solar'
  },
  {
    slug: 'site-para-academia',
    title: 'Site para Academia em 48h | DigiRocket — R$497',
    description: 'Site para academia com planos, estrutura, horários e matrícula online. Atraia novos alunos pelo Google. Pronto em 48h.',
    h1: 'Site para Academia',
    intro: 'Quando alguém decide começar a treinar, a primeira ação é buscar "academia perto de mim" no Google. Se sua academia não aparece com site profissional mostrando estrutura, planos e diferenciais, o aluno vai para o concorrente que aparece primeiro.',
    sections: [
      { title: 'O aluno pesquisa antes de matricular', content: 'Ninguém mais entra numa academia sem antes pesquisar online. O futuro aluno quer ver a estrutura, equipamentos, horários, valores e avaliações. Se sua academia não tem site ou tem uma página desatualizada, passa a impressão de ser ultrapassada — e perde a matrícula.' },
      { title: 'Presença digital que atrai matrículas', content: 'Criamos sites para academias que vendem a experiência de treinar no seu espaço: fotos da estrutura, vídeos dos treinos, grade de aulas, planos com preços e botão de matrícula ou visita gratuita. Tudo pensado para converter visitantes em alunos.' },
      { title: 'O que incluímos no site da academia', content: 'Galeria da estrutura e equipamentos, planos e valores (mensal, trimestral, anual), grade de aulas coletivas com horários, modalidades oferecidas, equipe de profissionais, depoimentos de alunos, promoções vigentes e botão para agendar aula experimental.' },
      { title: 'O valor de cada aluno', content: 'Um aluno de academia paga de R$80 a R$250/mês e fica em média 8 meses. Isso representa R$640 a R$2.000 por aluno. Cinco alunos novos por mês vindos do Google já geram R$4.000+ em receita mensal recorrente. O site se paga na primeira semana.' }
    ],
    faqs: [
      { q: 'Posso colocar os planos com preços?', a: 'Sim. Incluímos tabela de planos clara com preços, benefícios de cada um e botão de matrícula ou contato.' },
      { q: 'Dá pra ter grade de horários das aulas?', a: 'Sim. Montamos grade visual com dias e horários de todas as aulas coletivas: spinning, funcional, dança, etc.' },
      { q: 'O site aparece em buscas como "academia perto de mim"?', a: 'Sim. Otimizamos para buscas locais e integramos com Google Meu Negócio para aparecer no mapa do Google.' },
      { q: 'Posso oferecer aula experimental pelo site?', a: 'Sim. Botão de "Agende sua aula grátis" é uma das melhores estratégias para converter visitantes em alunos.' }
    ],
    cta: 'Quero um site pra minha academia'
  },
  {
    slug: 'site-para-personal-trainer',
    title: 'Site para Personal Trainer em 48h | DigiRocket — R$497',
    description: 'Site para personal trainer com resultados de alunos, metodologia e agendamento de avaliação. Destaque-se da concorrência.',
    h1: 'Site para Personal Trainer',
    intro: 'O mercado de personal trainer é altamente competitivo. Para se destacar, não basta postar no Instagram — você precisa de uma presença profissional que mostre seus resultados, metodologia e diferenciais. Um site transforma seguidores em alunos pagantes.',
    sections: [
      { title: 'Instagram não é suficiente para vender seu serviço', content: 'Todo personal tem Instagram, mas poucos convertem seguidores em alunos. O algoritmo limita seu alcance, stories desaparecem e seu conteúdo compete com milhares de outros perfis. Um site é seu espaço exclusivo onde o potencial aluno vê seus resultados sem distrações.' },
      { title: 'Posicionamento como profissional premium', content: 'Seu site apresenta você como especialista: formação, certificações, metodologia de trabalho, público-alvo (emagrecimento, hipertrofia, gestantes, idosos, atletas). Quem chega no site entende que você não é mais um personal genérico — é o profissional certo para aquela necessidade.' },
      { title: 'O que incluímos no site do personal', content: 'Apresentação com CREF e especializações, metodologia e abordagem de treino, galeria de transformações de alunos (antes e depois), depoimentos em vídeo ou texto, modalidades de atendimento (presencial, online, em grupo), valores dos pacotes e botão para agendar avaliação.' },
      { title: 'Retorno financeiro real', content: 'Um aluno de personal paga de R$500 a R$2.000/mês. Um único aluno novo vindo do site gera R$6.000 a R$24.000/ano. Com preço médio de R$800/mês, apenas um aluno novo por mês pelo site significa R$9.600/ano de receita adicional.' }
    ],
    faqs: [
      { q: 'Posso mostrar antes e depois dos alunos?', a: 'Sim. Com autorização dos alunos, montamos galeria de transformações que é o maior argumento de venda para novos interessados.' },
      { q: 'Atendo online e presencial. Posso divulgar ambos?', a: 'Sim. Criamos seções distintas para cada modalidade com informações específicas de como funciona cada formato.' },
      { q: 'Dá pra colocar vídeos de treinos?', a: 'Sim. Integramos vídeos do YouTube ou Instagram que mostram sua didática e energia durante os treinos.' },
      { q: 'O site ajuda a cobrar mais caro?', a: 'Sim. Presença profissional justifica preço premium. Clientes que encontram você pelo Google esperam pagar por qualidade.' }
    ],
    cta: 'Quero um site pra divulgar meu trabalho de personal'
  },
  {
    slug: 'site-para-pet-shop',
    title: 'Site para Pet Shop em 48h | DigiRocket — R$497',
    description: 'Site para pet shop com serviços, produtos e agendamento de banho e tosa pelo WhatsApp. Atraia tutores da região em 48h.',
    h1: 'Site para Pet Shop',
    intro: 'Tutores de pets pesquisam "pet shop perto de mim" quando precisam de banho, tosa, ração ou acessórios. Se seu pet shop não aparece no Google com informações claras sobre serviços e localização, você perde clientes para a concorrência que está visível online.',
    sections: [
      { title: 'Tutores pesquisam antes de confiar seu pet', content: 'Donos de pets são protetores. Antes de deixar o animal em qualquer lugar, pesquisam avaliações, fotos do ambiente e serviços oferecidos. Sem site, você depende apenas do boca a boca. Com site, tutores da região inteira encontram você e veem que é um lugar confiável.' },
      { title: 'Site que gera agendamentos diários', content: 'Criamos sites para pet shops focados em converter: catálogo de serviços com preços, fotos do espaço (área de banho, tosa, hospedagem), galeria de pets atendidos, e botão de WhatsApp para agendamento instantâneo. O tutor vê, confia e agenda.' },
      { title: 'Recursos do site para pet shop', content: 'Catálogo de serviços (banho, tosa, hidratação, hospedagem), tabela de preços por porte, galeria de fotos dos pets atendidos, produtos disponíveis, horário de funcionamento, sistema de leva e traz (se oferece), e agendamento direto pelo WhatsApp.' },
      { title: 'O valor de um cliente fiel', content: 'Um tutor que faz banho e tosa quinzenal gasta R$100-200/mês. Mais ração e produtos, pode chegar a R$400+/mês. Um cliente fiel de pet shop fica anos. Cinco clientes novos por mês vindos do Google representam R$2.000+ em receita mensal recorrente.' }
    ],
    faqs: [
      { q: 'Posso mostrar fotos dos pets atendidos?', a: 'Sim. Uma galeria de pets (com autorização dos tutores) é encantadora e mostra a qualidade do trabalho. Tutores adoram ver os bichinhos felizes.' },
      { q: 'Dá pra ter tabela de preços por porte?', a: 'Sim. Organizamos preços por porte (P, M, G, GG) e tipo de pelagem, facilitando a consulta pelo tutor.' },
      { q: 'Ofereço leva e traz. Posso divulgar?', a: 'Sim. Incluímos informações sobre serviço de transporte: áreas atendidas, horários e como agendar.' },
      { q: 'O site ajuda a vender produtos também?', a: 'Sim. Criamos catálogo visual de produtos (rações, brinquedos, acessórios) com link direto para WhatsApp ou loja online.' }
    ],
    cta: 'Quero um site pro meu pet shop'
  },
  {
    slug: 'site-para-veterinaria',
    title: 'Site para Veterinária em 48h | DigiRocket — R$497',
    description: 'Site para clínica veterinária com serviços, especialidades e contato de emergência. Transmita confiança aos tutores em 48h.',
    h1: 'Site para Veterinária',
    intro: 'Quando um pet adoece, o tutor busca desesperadamente por "veterinário perto de mim" ou "veterinário 24h". Se sua clínica não aparece nesse momento crítico, perde um paciente que precisa de atendimento urgente — e provavelmente nunca mais volta.',
    sections: [
      { title: 'Emergências veterinárias começam no Google', content: 'Diferente de outros serviços, veterinária tem componente de urgência. Tutores em pânico buscam no Google às 2h da manhã. Se sua clínica aparece com horário de funcionamento, telefone de emergência e endereço claro, você captura esse atendimento. Sem site, o tutor vai para quem aparece.' },
      { title: 'Confiança que salva vidas', content: 'Criamos sites para clínicas veterinárias que transmitem competência e cuidado: equipe de profissionais com CRMV, especialidades atendidas, estrutura da clínica, exames disponíveis e protocolos de atendimento. O tutor sente que seu pet estará em boas mãos.' },
      { title: 'Estrutura do site veterinário', content: 'Serviços clínicos e cirúrgicos, especialidades (ortopedia, cardiologia, dermatologia), exames disponíveis (raio-x, ultrassom, laboratório), equipe com CRMV, fotos da estrutura, horário de atendimento e plantão, espécies atendidas e contato de emergência em destaque.' },
      { title: 'O retorno para a clínica', content: 'Uma consulta veterinária custa de R$100 a R$300. Cirurgias de R$500 a R$5.000+. Tratamentos oncológicos podem gerar R$10.000+ por paciente. Um único atendimento de emergência que encontrou sua clínica no Google já cobre o investimento no site.' }
    ],
    faqs: [
      { q: 'Posso destacar atendimento 24h?', a: 'Sim. Se oferece plantão ou emergência 24h, isso fica em destaque máximo no site — é o que mais atrai buscas urgentes.' },
      { q: 'Dá pra listar especialidades veterinárias?', a: 'Sim. Cada especialidade (ortopedia, dermatologia, oftalmologia, etc.) pode ter sua seção explicando quando procurar e o que trata.' },
      { q: 'Atendo animais exóticos. Posso divulgar?', a: 'Sim. Incluímos seção de espécies atendidas (cães, gatos, aves, répteis, silvestres) — nichos específicos atraem muito tráfego.' },
      { q: 'O site mostra os exames disponíveis?', a: 'Sim. Listamos todos os exames que a clínica oferece internamente, evitando que tutores busquem em outro lugar.' }
    ],
    cta: 'Quero um site pra minha clínica veterinária'
  },
  {
    slug: 'site-para-auto-center',
    title: 'Site para Auto Center em 48h | DigiRocket — R$497',
    description: 'Site para auto center com serviços automotivos, marcas atendidas e agendamento rápido. Atraia motoristas da região pelo Google.',
    h1: 'Site para Auto Center',
    intro: 'Motoristas buscam "auto center perto de mim" quando precisam de troca de óleo, alinhamento, pneus ou revisão. Se seu auto center não aparece nessa busca com serviços e localização claros, perde clientes para oficinas concorrentes que estão no Google.',
    sections: [
      { title: 'Motoristas decidem pelo Google', content: 'Quando o carro precisa de manutenção, o motorista busca uma solução rápida e confiável. Ele não vai andar pela cidade procurando — vai abrir o Google. Auto centers sem site ficam invisíveis para toda uma geração de motoristas que resolve tudo pelo celular.' },
      { title: 'Presença digital que gera movimento', content: 'Seu site mostra todos os serviços disponíveis, marcas de produtos trabalhadas, estrutura do centro automotivo e diferenciais como garantia de serviço e peças originais. O motorista vê que é um lugar sério e agenda pelo WhatsApp.' },
      { title: 'O que incluímos no site automotivo', content: 'Catálogo completo de serviços (troca de óleo, alinhamento, balanceamento, suspensão, freios, pneus, ar-condicionado), marcas trabalhadas, fotos da estrutura e equipamentos, promoções sazonais, horário de funcionamento e agendamento por WhatsApp.' },
      { title: 'Ticket médio e retorno', content: 'Um serviço de alinhamento e balanceamento custa R$100-200. Troca de suspensão R$500-2.000. Revisão completa R$300-800. Com 3-4 clientes novos por semana vindos do Google, o site gera R$3.000+ em receita mensal adicional.' }
    ],
    faqs: [
      { q: 'Posso listar todas as marcas que trabalho?', a: 'Sim. Incluímos logos e nomes das marcas de pneus, lubrificantes e peças que você trabalha, gerando confiança no motorista.' },
      { q: 'Dá pra ter promoções rotativas?', a: 'Sim. Seção de promoções que você atualiza conforme a sazonalidade: promoção de pneus no verão, revisão pré-viagem, etc.' },
      { q: 'O site aparece para quem busca perto?', a: 'Sim. Otimizamos para buscas locais como "troca de óleo perto de mim" e integramos com Google Maps.' },
      { q: 'Posso mostrar a estrutura do auto center?', a: 'Sim. Fotos dos elevadores, equipamentos e área de espera mostram profissionalismo e geram confiança.' }
    ],
    cta: 'Quero um site pro meu auto center'
  },
  {
    slug: 'site-para-oficina',
    title: 'Site para Oficina Mecânica em 48h | DigiRocket — R$497',
    description: 'Site para oficina mecânica com serviços, especialidades e orçamento por WhatsApp. Apareça no Google quando o carro quebrar.',
    h1: 'Site para Oficina Mecânica',
    intro: 'Quando o carro apresenta problema, o motorista busca "oficina mecânica perto de mim" no celular. Nesse momento de urgência, a oficina que aparece primeiro com boa reputação leva o cliente. Sem site, você é invisível justamente na hora que mais importa.',
    sections: [
      { title: 'O momento da necessidade é digital', content: 'Carro falhando, barulho estranho, luz do painel acesa — o motorista pega o celular e busca uma oficina. É um momento de decisão rápida. Ele vai escolher entre as primeiras opções que aparecerem no Google. Se você não está lá, perde esse cliente para sempre.' },
      { title: 'Confiança que o motorista precisa sentir', content: 'Oficina mecânica sofre com desconfiança do público. Seu site muda isso: mostramos fotos reais do espaço, equipamentos utilizados, especialidades da oficina, certificações dos mecânicos e depoimentos de clientes satisfeitos. Transparência gera confiança.' },
      { title: 'O que incluímos no site da oficina', content: 'Serviços detalhados (motor, câmbio, suspensão, injeção eletrônica, elétrica), especialidades por marca ou tipo de veículo, fotos da oficina e equipamentos, garantia de serviço, orçamento sem compromisso pelo WhatsApp e localização com mapa.' },
      { title: 'Quanto vale cada cliente novo', content: 'Um reparo médio custa de R$300 a R$3.000. Retífica de motor pode passar de R$5.000. Um cliente satisfeito volta para todas as manutenções futuras e ainda indica. Três clientes novos por mês pelo Google já geram R$3.000+ em faturamento adicional.' }
    ],
    faqs: [
      { q: 'Posso mostrar que sou especialista em alguma marca?', a: 'Sim. Se você é especializado em Volkswagen, Toyota ou BMW, destacamos isso. Donos de marcas específicas buscam especialistas.' },
      { q: 'Dá pra oferecer orçamento online?', a: 'Sim. Botão de WhatsApp com mensagem "Quero um orçamento" facilita o primeiro contato sem compromisso.' },
      { q: 'O site ajuda a mostrar que sou confiável?', a: 'Sim. Fotos reais, depoimentos, tempo de mercado e garantia de serviço comunicam seriedade e eliminam a desconfiança.' },
      { q: 'Posso listar peças e marcas que uso?', a: 'Sim. Mostrar que trabalha com peças originais ou de primeira linha diferencia sua oficina das que usam peças genéricas.' }
    ],
    cta: 'Quero um site pra minha oficina'
  },
  {
    slug: 'site-para-mecanica',
    title: 'Site para Mecânica em 48h | DigiRocket — R$497',
    description: 'Site profissional para mecânica automotiva com diagnóstico, serviços e avaliações de clientes. Conquiste a confiança online.',
    h1: 'Site para Mecânica',
    intro: 'O setor de reparação automotiva precisa urgentemente de digitalização. Enquanto outras indústrias já estão online, a maioria das mecânicas ainda depende de placa na rua e indicação. Quem sai na frente digitalmente captura toda a demanda local que está no Google.',
    sections: [
      { title: 'A mecânica precisa se modernizar', content: 'Pesquisas mostram que 65% dos motoristas pesquisam online antes de escolher uma mecânica. Avaliações no Google, fotos do espaço e informações claras sobre serviços são decisivos. Mecânicas sem presença digital perdem para concorrentes que parecem mais profissionais online.' },
      { title: 'Profissionalismo que se vê online', content: 'Transformamos a imagem digital da sua mecânica: site com design profissional, fotos da estrutura, lista detalhada de serviços, diferenciais técnicos (scanner automotivo, equipamentos de última geração) e avaliações de clientes reais.' },
      { title: 'Recursos do site para mecânica', content: 'Serviços com descrição técnica acessível, diagnóstico computadorizado em destaque, manutenção preventiva e corretiva, especialidades (injeção eletrônica, ar-condicionado, suspensão), garantia dos serviços, atendimento agendado e check-list de revisão disponível.' },
      { title: 'Crescimento mensurável', content: 'Uma mecânica com site e Google Meu Negócio otimizados pode aumentar o movimento em 40-60% nos primeiros 3 meses. Com ticket médio de R$500, dez clientes novos por mês significam R$5.000 de faturamento adicional mensal — tudo por um investimento único de R$497.' }
    ],
    faqs: [
      { q: 'Tenho scanner automotivo. Posso destacar?', a: 'Sim. Diagnóstico computadorizado é um grande diferencial. Destacamos no site que você tem tecnologia avançada para identificar problemas com precisão.' },
      { q: 'Dá pra colocar as avaliações do Google no site?', a: 'Sim. Integramos suas avaliações do Google no site para que visitantes vejam a opinião de clientes reais sem sair da página.' },
      { q: 'Ofereço leva e traz. Posso divulgar?', a: 'Sim. Serviço de busca e entrega do veículo é um diferencial enorme. Destacamos isso como vantagem competitiva.' },
      { q: 'Posso ter orçamento agendado?', a: 'Sim. Botão para agendar diagnóstico ou orçamento sem compromisso facilita a decisão do motorista de procurar sua mecânica.' }
    ],
    cta: 'Quero um site pra minha mecânica'
  },
  {
    slug: 'site-para-eletricista',
    title: 'Site para Eletricista em 48h | DigiRocket — R$497',
    description: 'Site para eletricista com serviços, áreas de atendimento e orçamento rápido pelo WhatsApp. Capte chamados pelo Google 24h.',
    h1: 'Site para Eletricista',
    intro: 'Problemas elétricos são urgentes. Quando um disjuntor desarma ou falta energia, a pessoa pega o celular e busca "eletricista perto de mim". Se você não aparece nessa busca com contato rápido e informações claras, perde chamados todos os dias.',
    sections: [
      { title: 'Urgência elétrica = busca no Google', content: 'Problemas elétricos não esperam. Curto-circuito, queda de energia, fiação exposta — são emergências. O cliente não vai pedir indicação para a vizinha; vai buscar no Google agora. E vai ligar para o primeiro eletricista que encontrar com boa apresentação e contato fácil.' },
      { title: 'Disponibilidade e confiança', content: 'Seu site comunica disponibilidade, áreas de atendimento e competência técnica. Incluímos registro no CREA (se aplicável), tipos de serviço que realiza, se atende emergência 24h, e depoimentos de clientes. O visitante sente segurança de chamar um profissional qualificado.' },
      { title: 'Serviços apresentados no site', content: 'Instalações elétricas residenciais e comerciais, manutenção preventiva e corretiva, quadro de disjuntores, aterramento, cabeamento estruturado, automação residencial, laudos técnicos, áreas de atendimento e botão de WhatsApp para orçamento imediato.' },
      { title: 'Valor de cada chamado', content: 'Um chamado elétrico simples custa de R$100 a R$300. Instalações e reformas elétricas de R$1.000 a R$10.000+. Com o site captando 2-3 chamados por semana, você garante R$2.000+ de faturamento mensal adicional com investimento único.' }
    ],
    faqs: [
      { q: 'Posso atender várias cidades?', a: 'Sim. Listamos todas as cidades e bairros que você atende, aumentando o alcance das buscas locais.' },
      { q: 'Dá pra destacar atendimento de emergência?', a: 'Sim. Se atende 24h ou fins de semana, isso fica em destaque no site — emergências são as buscas mais frequentes.' },
      { q: 'Preciso ter empresa aberta?', a: 'Não. Eletricistas autônomos também podem ter site profissional. Basta ter experiência e querer captar mais clientes.' },
      { q: 'O site aparece para quem busca "eletricista" na minha região?', a: 'Sim. Otimizamos para buscas locais e integramos com Google Meu Negócio para você aparecer no mapa.' }
    ],
    cta: 'Quero um site pra divulgar meu serviço de eletricista'
  },
  {
    slug: 'site-para-delivery',
    title: 'Site para Delivery em 48h | DigiRocket — R$497',
    description: 'Site para delivery com cardápio digital, pedidos pelo WhatsApp e sem taxa de marketplace. Pare de pagar comissão ao iFood.',
    h1: 'Site para Delivery',
    intro: 'Marketplaces como iFood cobram de 12% a 27% de comissão por pedido. Com um site próprio de delivery, seus clientes pedem direto pelo WhatsApp sem intermediários. Mais lucro por pedido, base de clientes sua e zero dependência de plataforma.',
    sections: [
      { title: 'O iFood come seu lucro', content: 'A cada R$50 de pedido no iFood, você paga de R$6 a R$13,50 de comissão. Em 100 pedidos por mês, são R$600 a R$1.350 indo para a plataforma. Com um site próprio, esses pedidos vêm direto pelo WhatsApp — comissão zero. O lucro fica todo com você.' },
      { title: 'Seu cardápio digital sem comissão', content: 'Criamos um site com cardápio digital completo: fotos dos pratos, categorias organizadas, preços atualizados e botão de pedido via WhatsApp. O cliente vê o cardápio, escolhe e manda o pedido direto pra você. Simples, rápido e sem taxa.' },
      { title: 'O que incluímos no site de delivery', content: 'Cardápio digital com fotos e categorias, preços atualizados, área de entrega com bairros atendidos, taxa de entrega por região, horário de funcionamento, promoções do dia, combos especiais e botão de WhatsApp com mensagem pré-formatada do pedido.' },
      { title: 'Economia real todos os meses', content: 'Se você faz 200 pedidos/mês pelo iFood com ticket médio de R$45 e comissão de 20%, paga R$1.800/mês de taxa. Migrando metade desses pedidos para seu site, economiza R$900/mês. Em um ano, são R$10.800 que ficam no seu caixa — por um investimento único de R$497.' }
    ],
    faqs: [
      { q: 'Preciso sair do iFood?', a: 'Não. O ideal é manter o iFood para novos clientes e direcionar os recorrentes para seu site, onde não paga comissão.' },
      { q: 'Como o cliente faz o pedido?', a: 'Ele navega o cardápio no site, escolhe os itens e clica no botão de WhatsApp. A mensagem vai pré-formatada com o pedido completo.' },
      { q: 'Dá pra atualizar o cardápio?', a: 'No plano Premium você mesmo atualiza preços e itens. No Essencial, envia as alterações e atualizamos para você.' },
      { q: 'O site mostra a área de entrega?', a: 'Sim. Incluímos mapa ou lista de bairros atendidos com respectivas taxas de entrega.' }
    ],
    cta: 'Quero um site de delivery pro meu negócio'
  },
  {
    slug: 'site-para-hamburgueria',
    title: 'Site para Hamburgueria em 48h | DigiRocket — R$497',
    description: 'Site para hamburgueria com cardápio visual, fotos dos burgers e pedido direto pelo WhatsApp. Design que dá fome. Pronto em 48h.',
    h1: 'Site para Hamburgueria',
    intro: 'Hamburgueria é experiência visual. Antes de escolher onde pedir, o cliente quer ver fotos dos burgers, conhecer os ingredientes e sentir que vale a pena. Um site com fotos irresistíveis e cardápio organizado converte olhares famintos em pedidos.',
    sections: [
      { title: 'A foto vende o burger', content: 'No mundo das hamburguerias artesanais, a foto é o vendedor número um. Um site com imagens profissionais dos seus burgers, queijo derretendo, bacon crocante — isso ativa o desejo e faz o cliente pedir. Sem presença visual forte online, você é só mais uma opção entre centenas.' },
      { title: 'Site que dá água na boca', content: 'Criamos sites para hamburguerias com design escuro e imagens em destaque que fazem os burgers brilharem. Cada hambúrguer ganha foto em tamanho grande com ingredientes listados. A experiência visual é pensada para despertar desejo e levar ao pedido imediato.' },
      { title: 'Cardápio digital completo', content: 'Burgers artesanais com foto e descrição dos ingredientes, acompanhamentos (fritas, onion rings, milkshakes), combos e promoções, opções vegetarianas/veganas, tamanhos disponíveis, área de entrega e botão de pedido via WhatsApp.' },
      { title: 'O resultado em pedidos', content: 'Um pedido médio de hamburgueria custa R$40-70. Com o site atraindo 5 pedidos novos por dia que viriam do iFood (onde você paga 20% de comissão), a economia chega a R$2.000/mês. Mais os pedidos novos que o Google traz, o retorno é exponencial.' }
    ],
    faqs: [
      { q: 'Preciso de fotos profissionais?', a: 'Ajuda muito, mas se não tiver, fotos bem tiradas com celular em boa iluminação já funcionam. O importante é mostrar o produto real.' },
      { q: 'Dá pra ter combos e promoções rotativas?', a: 'Sim. Seção de combos e "Promo do dia" que você atualiza conforme quiser — ideal para movimentar dias fracos.' },
      { q: 'O cliente monta o pedido no site?', a: 'O cardápio fica no site e o pedido vai pelo WhatsApp. O cliente vê o menu, escolhe e envia a mensagem com o que quer.' },
      { q: 'Funciona para quem só tem delivery?', a: 'Sim. Funciona tanto para hamburguerias com salão quanto para dark kitchens e operações 100% delivery.' }
    ],
    cta: 'Quero um site pra minha hamburgueria'
  },
  {
    slug: 'site-para-pizzaria',
    title: 'Site para Pizzaria em 48h | DigiRocket — R$497',
    description: 'Site para pizzaria com cardápio de sabores, fotos e pedido pelo WhatsApp sem pagar comissão de app. Pronto em 48 horas.',
    h1: 'Site para Pizzaria',
    intro: 'Pizza é o delivery mais pedido do Brasil. Mas pagar 20-27% de comissão para o iFood a cada pedido devora seu lucro. Um site próprio com cardápio digital permite receber pedidos direto pelo WhatsApp — mais margem, mais controle, mesma praticidade.',
    sections: [
      { title: 'Comissão de app devora a margem', content: 'Uma pizza de R$50 rende só R$37-40 pelo iFood após comissão. Em 300 pizzas por mês, você perde R$3.000-4.500 em taxas. Com site próprio, o pedido vem pelo WhatsApp e o dinheiro fica todo com você. A margem de uma pizzaria precisa de cada centavo.' },
      { title: 'Cardápio que facilita a escolha', content: 'Criamos seu cardápio digital organizado por categorias: tradicionais, especiais, doces, calzones, bebidas. Cada sabor com foto, ingredientes e tamanhos disponíveis (broto, média, grande, gigante). O cliente navega, escolhe e pede pelo WhatsApp sem fricção.' },
      { title: 'Recursos do site para pizzaria', content: 'Cardápio completo com fotos por sabor, categorias organizadas, preços por tamanho, promoção do dia, combos (pizza + refrigerante), horário de funcionamento, área de entrega com taxas, tempo médio de entrega e botão de WhatsApp para pedidos.' },
      { title: 'A conta faz sentido', content: 'Se 150 dos seus pedidos mensais migram do iFood pro site, e a comissão média seria R$10/pedido, você economiza R$1.500/mês. Em um ano: R$18.000 a mais no caixa. O site de R$497 se paga em 10 dias de operação.' }
    ],
    faqs: [
      { q: 'Dá pra colocar todos os sabores com foto?', a: 'Sim. Cada sabor pode ter foto, lista de ingredientes e preço por tamanho. Quanto mais visual, mais pedidos.' },
      { q: 'Posso ter promoção "terça da pizza"?', a: 'Sim. Seção de promoções que você atualiza por dia da semana: rodízio, dois por um, pizza do dia, etc.' },
      { q: 'Funciona para rodízio também?', a: 'Sim. Para pizzarias com salão, incluímos informações sobre rodízio, reservas e atendimento no local, além do delivery.' },
      { q: 'Cliente consegue ver a área de entrega?', a: 'Sim. Mostramos bairros atendidos, taxa por região e tempo médio de entrega para cada área.' }
    ],
    cta: 'Quero um site pra minha pizzaria'
  },
  {
    slug: 'site-para-restaurante',
    title: 'Site para Restaurante em 48h | DigiRocket — R$497',
    description: 'Site para restaurante com cardápio, fotos do ambiente e reservas pelo WhatsApp. Atraia clientes que buscam onde comer na região.',
    h1: 'Site para Restaurante',
    intro: 'Quando alguém busca "restaurante perto de mim" ou "onde comer em [bairro]", está pronto para sair e gastar. Se seu restaurante aparece com fotos do ambiente, cardápio e avaliações positivas, essa pessoa vira cliente. Sem site, ela nunca saberá que você existe.',
    sections: [
      { title: 'Decisão de onde comer é online', content: '90% das pessoas pesquisam restaurantes no Google antes de sair de casa. Elas olham fotos, cardápio, avaliações e localização. Um restaurante sem site profissional não compete com quem apresenta bem seu espaço, pratos e experiência gastronômica online.' },
      { title: 'Experiência gastronômica começa no site', content: 'Criamos sites que transportam o visitante para dentro do restaurante: fotos do ambiente, dos pratos, da carta de vinhos. O design reflete o estilo do restaurante — seja casual, sofisticado, familiar ou temático. O cliente chega com expectativa e vontade.' },
      { title: 'O que incluímos no site do restaurante', content: 'Fotos profissionais do ambiente e pratos, cardápio digital com categorias (entradas, principais, sobremesas, drinks), carta de vinhos, informações sobre chef, eventos e datas especiais, horário de funcionamento, reservas pelo WhatsApp e localização com mapa.' },
      { title: 'O retorno de cada mesa ocupada', content: 'Um casal gasta em média R$150-300 por refeição. Um grupo de amigos R$400-800. Eventos privativos R$2.000-10.000. Cada mesa ocupada por cliente que veio do Google representa receita direta. Em um mês, o site pode trazer dezenas de novas mesas.' }
    ],
    faqs: [
      { q: 'O cliente pode fazer reserva pelo site?', a: 'Sim. Botão de WhatsApp para reservas ou integração com sistema de reservas que o restaurante já utiliza.' },
      { q: 'Dá pra ter cardápio digital atualizado?', a: 'Sim. No plano Premium você atualiza o cardápio quando quiser. Ideal para restaurantes com menu rotativo ou prato do dia.' },
      { q: 'Posso mostrar eventos e noites temáticas?', a: 'Sim. Seção de eventos com agenda, fotos de edições anteriores e botão para reservar mesa especial.' },
      { q: 'O site ajuda a aparecer em buscas de turistas?', a: 'Sim. Otimizamos para buscas como "melhor restaurante italiano em [cidade]" ou "restaurante com vista em [bairro]".' }
    ],
    cta: 'Quero um site pro meu restaurante'
  },
  {
    slug: 'site-para-sushi',
    title: 'Site para Sushi em 48h | DigiRocket — R$497',
    description: 'Site para sushi bar e delivery japonês com cardápio visual, combos e pedidos sem comissão de aplicativo. Design premium em 48h.',
    h1: 'Site para Sushi',
    intro: 'Comida japonesa é uma das categorias mais pedidas no delivery, mas a comissão dos apps é brutal em pratos de ticket alto. Um combo de R$120 perde R$25-30 para o marketplace. Com site próprio, seu cardápio japonês brilha e os pedidos vêm direto — sem dividir o lucro.',
    sections: [
      { title: 'Ticket alto + comissão alta = prejuízo', content: 'Comida japonesa tem ticket médio elevado (R$80-150 por pedido). Isso significa que a comissão do iFood também é alta: R$15-40 por pedido. Em 200 pedidos mensais, são R$3.000-8.000 de comissão. É dinheiro demais para entregar a um intermediário.' },
      { title: 'Cardápio japonês que encanta', content: 'Desenvolvemos sites para sushi com design elegante e asiático: fotos dos rolls, sashimis, temakis e pratos quentes em destaque. Organizamos por categorias intuitivas e combos que facilitam a escolha. O visual refinado transmite a qualidade da sua culinária.' },
      { title: 'Estrutura do cardápio digital', content: 'Hot rolls, uramakis, sashimis, temakis, pratos quentes (yakisoba, teppan), combinados por pessoa, rodízio japonês (se oferece), sobremesas orientais, bebidas (sakê, cerveja japonesa), promoções e combos especiais, com fotos e descrição detalhada.' },
      { title: 'Economia que faz diferença', content: 'Com 150 pedidos/mês migrando do app pro site (ticket médio R$100, comissão 22%), você economiza R$3.300/mês. São R$39.600/ano. O site de R$497 se paga em menos de uma semana. É a decisão financeira mais óbvia para qualquer restaurante japonês.' }
    ],
    faqs: [
      { q: 'Dá pra organizar por tipo de peça?', a: 'Sim. Separamos por categorias: hot rolls, uramakis, sashimis, temakis, combinados, pratos quentes — navegação intuitiva.' },
      { q: 'Posso ter combos por número de pessoas?', a: 'Sim. Combos para 1, 2, 3, 4 pessoas com foto e composição detalhada são excelentes para aumentar o ticket médio.' },
      { q: 'Funciona para rodízio japonês?', a: 'Sim. Incluímos informações sobre rodízio: preço, horário, regras e reserva de mesa pelo WhatsApp.' },
      { q: 'O cliente consegue ver fotos de cada prato?', a: 'Sim. Cada item do cardápio pode ter foto individual. Para comida japonesa, o visual é essencial na decisão de compra.' }
    ],
    cta: 'Quero um site pro meu delivery de sushi'
  },
  {
    slug: 'site-para-padaria',
    title: 'Site para Padaria em 48h | DigiRocket — R$497',
    description: 'Site para padaria com produtos, encomendas e horário de funcionamento. Apareça no Google quando buscarem padaria na região.',
    h1: 'Site para Padaria',
    intro: 'A padaria do bairro é parte do dia a dia das famílias, mas novas famílias que se mudam para a região pesquisam "padaria perto de mim" no Google. Se sua padaria não aparece, esses novos moradores viram clientes do concorrente — e dificilmente mudam depois.',
    sections: [
      { title: 'Novos moradores buscam no Google', content: 'Toda vez que alguém se muda para um bairro, a primeira busca é por serviços essenciais: padaria, mercado, farmácia. Se sua padaria não aparece no Google com horário, endereço e produtos, esse novo morador vai criar o hábito em outra padaria — e nunca mais muda.' },
      { title: 'Presença digital para negócios tradicionais', content: 'Mesmo padarias tradicionais precisam de presença online. Seu site mostra horário de funcionamento, produtos diferenciados (pães artesanais, bolos sob encomenda, café especial), e permite que clientes façam encomendas pelo WhatsApp sem precisar ir até o balcão.' },
      { title: 'O que incluímos no site da padaria', content: 'Produtos do dia (pães, doces, salgados), bolos e tortas sob encomenda com catálogo de opções, café e lanches, horário de funcionamento detalhado, delivery de pães (se oferece), encomendas para eventos pelo WhatsApp e localização com mapa.' },
      { title: 'O valor de cada cliente fidelizado', content: 'Um cliente de padaria gasta em média R$15-30 por visita e vai 3-5 vezes por semana. Isso representa R$200-600/mês por cliente. Dez novos clientes vindos do Google significam R$2.000-6.000/mês em receita. O site se paga no primeiro dia.' }
    ],
    faqs: [
      { q: 'Posso receber encomendas de bolo pelo site?', a: 'Sim. Criamos catálogo de bolos e tortas com fotos, sabores e tamanhos. O cliente escolhe e encomenda pelo WhatsApp.' },
      { q: 'Dá pra mostrar os pães artesanais?', a: 'Sim. Galeria com seus pães especiais, fermentação natural, focaccias — destacando o que diferencia você de padarias comuns.' },
      { q: 'Ofereço delivery de pães. Posso divulgar?', a: 'Sim. Incluímos informações sobre delivery matinal: horários, área atendida, como assinar o plano de pães.' },
      { q: 'O site mostra o horário do pão francês?', a: 'Sim. Horários específicos como "pão francês quentinho às 6h e às 17h" atraem clientes que valorizam frescor.' }
    ],
    cta: 'Quero um site pra minha padaria'
  },
  {
    slug: 'site-para-doceria',
    title: 'Site para Doceria em 48h | DigiRocket — R$497',
    description: 'Site para doceria e confeitaria com catálogo de doces, bolos decorados e encomendas pelo WhatsApp. Fotos que vendem. Pronto em 48h.',
    h1: 'Site para Doceria',
    intro: 'Doces vendem pela aparência. Uma foto irresistível de um bolo decorado ou brigadeiros gourmet desperta desejo imediato. Seu site é a vitrine perfeita para exibir suas criações e receber encomendas de clientes que não te conheceriam de outra forma.',
    sections: [
      { title: 'A vitrine virtual dos seus doces', content: 'Instagram é bom para quem já te segue. Mas quem busca "bolo de aniversário" ou "doces para casamento" no Google não vai encontrar seu perfil. Um site com galeria otimizada para buscas coloca seus doces na frente de quem está pronto para encomendar.' },
      { title: 'Fotos que despertam desejo', content: 'Criamos sites para docerias com foco total nas imagens: layout limpo, fotos em destaque máximo, fundo que valoriza os doces. Cada categoria (bolos, brigadeiros, tortas, doces finos) ganha sua seção com fotos que fazem o visitante salivar e encomendar.' },
      { title: 'Catálogo completo para encomendas', content: 'Bolos decorados por tema (infantil, casamento, corporativo), brigadeiros gourmet, doces finos para eventos, tortas, cupcakes, kits presenteáveis. Cada item com foto, sabores disponíveis, tamanhos e prazo de encomenda. WhatsApp direto para fechar o pedido.' },
      { title: 'Faturamento por encomenda', content: 'Um bolo decorado custa de R$150 a R$800. Doces finos para casamento de R$2.000 a R$10.000. Uma única encomenda grande vinda do Google paga o site 10-20 vezes. E docerias têm demanda constante: aniversários, casamentos, formaturas o ano todo.' }
    ],
    faqs: [
      { q: 'Preciso de fotos profissionais?', a: 'Recomendamos, mas fotos com boa iluminação natural tiradas com celular já funcionam. O importante é mostrar seus doces de forma apetitosa.' },
      { q: 'Dá pra separar por ocasião?', a: 'Sim. Organizamos por: aniversário infantil, casamento, corporativo, Natal, Páscoa — o cliente encontra rápido o que precisa.' },
      { q: 'Posso colocar prazo de encomenda?', a: 'Sim. Informações como "encomendas com 5 dias de antecedência" evitam pedidos de última hora e organizam sua produção.' },
      { q: 'O site ajuda a vender para empresas?', a: 'Sim. Seção corporativa com kits para eventos, brindes e coffee break atrai um público que gasta mais e compra com recorrência.' }
    ],
    cta: 'Quero um site pra minha doceria'
  },
  {
    slug: 'site-para-acaiteria',
    title: 'Site para Açaiteria em 48h | DigiRocket — R$497',
    description: 'Site para açaiteria com cardápio de açaí, opções de complementos e pedido pelo WhatsApp. Visual tropical, pronto em 48h.',
    h1: 'Site para Açaiteria',
    intro: 'O mercado de açaí movimenta bilhões por ano no Brasil e a concorrência é acirrada. Uma açaiteria com presença digital forte se destaca na região, aparece nas buscas locais e recebe pedidos direto pelo WhatsApp — sem dividir lucro com apps de delivery.',
    sections: [
      { title: 'Concorrência alta exige diferenciação', content: 'Existem açaiterias em cada esquina. Para se destacar, não basta ter açaí bom — precisa ser encontrado. Quando alguém busca "açaí delivery" ou "açaiteria perto de mim", sua marca precisa aparecer com visual atrativo e cardápio completo que convença ao pedido.' },
      { title: 'Visual tropical que atrai', content: 'Desenvolvemos sites para açaiterias com design vibrante e tropical: cores que remetem ao açaí (roxo, verde, tropical), fotos dos bowls com complementos coloridos e tipografia moderna. O visual comunica frescor, saúde e sabor antes mesmo de provar.' },
      { title: 'Cardápio digital personalizado', content: 'Tamanhos de açaí (300ml a 1L), complementos disponíveis (granola, leite em pó, frutas, whey), bowls especiais com foto, smoothies e vitaminas, sorvetes, picolés, promoções do dia e combos. Pedido direto pelo WhatsApp com mensagem formatada.' },
      { title: 'Pedidos sem comissão', content: 'Açaí tem margem apertada em porções menores. Pagar 20-27% de comissão pode tornar pedidos pequenos inviáveis. Com site próprio, todo pedido vem sem taxa. Em 100 pedidos/mês (ticket R$25), você economiza R$500-675/mês em comissões.' }
    ],
    faqs: [
      { q: 'Dá pra montar o açaí no site?', a: 'Mostramos todas as opções de tamanho e complementos. O cliente escolhe e envia o pedido personalizado pelo WhatsApp.' },
      { q: 'Posso ter promoções diárias?', a: 'Sim. "Segunda do açaí 500ml por R$12" e promoções rotativas funcionam muito para movimentar dias fracos.' },
      { q: 'Funciona para quem só tem delivery?', a: 'Sim. Muitas açaiterias operam sem loja física. O site funciona como cardápio digital para pedidos delivery.' },
      { q: 'O site ajuda a aparecer no Google Maps?', a: 'Sim. Integramos com Google Meu Negócio para você aparecer nas buscas locais e no mapa do Google.' }
    ],
    cta: 'Quero um site pra minha açaiteria'
  },
  {
    slug: 'site-para-loja-de-roupas',
    title: 'Site para Loja de Roupas em 48h | DigiRocket — R$497',
    description: 'Site para loja de roupas com catálogo visual, coleções e vendas pelo WhatsApp. Mostre seu estilo online e venda mais.',
    h1: 'Site para Loja de Roupas',
    intro: 'Clientes de moda pesquisam tendências e lojas online antes de comprar. Uma loja de roupas com site profissional amplia o alcance para além do ponto físico — vende para clientes de toda a cidade (e até do Brasil) que se identificam com seu estilo.',
    sections: [
      { title: 'Seu ponto físico tem limite geográfico', content: 'Uma loja de roupas no bairro atende apenas quem passa na frente. Com site, pessoas de toda a cidade descobrem sua marca por buscas como "loja de roupas femininas em [cidade]" ou pelo estilo que você posta. O alcance multiplica sem aumento de aluguel.' },
      { title: 'Catálogo que converte em vendas', content: 'Criamos sites para lojas de roupas com foco visual: fotos das peças em look completo, organização por coleção ou categoria, novidades em destaque e botão de WhatsApp para perguntar sobre tamanhos, preços e disponibilidade. A compra fecha na conversa.' },
      { title: 'Estrutura do site para moda', content: 'Catálogo por categoria (vestidos, blusas, calças, acessórios), seção de novidades/lançamentos, looks montados para inspiração, tabela de medidas, informações sobre trocas e devoluções, loja física com endereço e botão de WhatsApp para consultoria de estilo.' },
      { title: 'Vendas além do balcão', content: 'Uma peça vendida pelo WhatsApp tem a mesma margem que no balcão, mas sem limite geográfico. Lojas que vendem pelo WhatsApp reportam 30-50% de aumento no faturamento. O site é a porta de entrada para clientes que não passariam na sua frente.' }
    ],
    faqs: [
      { q: 'Preciso fotografar todas as peças?', a: 'Não obrigatoriamente. Pode começar com os looks principais e ir adicionando. Fotos de look completo vendem mais que peças isoladas.' },
      { q: 'O cliente compra direto pelo site?', a: 'O modelo é catálogo + WhatsApp. O cliente vê, se interessa e finaliza pelo WhatsApp. Sem complexidade de e-commerce com carrinho.' },
      { q: 'Dá pra ter seção de promoções?', a: 'Sim. Liquidação, outlet, peças com desconto — tudo em uma seção que você atualiza conforme a sazonalidade.' },
      { q: 'Posso vender para outras cidades?', a: 'Sim. Com informações sobre envio (Correios, transportadora) no site, clientes de qualquer lugar compram pelo WhatsApp.' }
    ],
    cta: 'Quero um site pra minha loja de roupas'
  },
  {
    slug: 'site-para-loja-online',
    title: 'Site para Loja Online em 48h | DigiRocket — R$497',
    description: 'Site para loja online com catálogo de produtos, vitrine digital e vendas pelo WhatsApp. Comece a vender na internet em 48h.',
    h1: 'Site para Loja Online',
    intro: 'Nem toda loja online precisa de um e-commerce complexo com carrinho e pagamento integrado. Muitos negócios faturam alto com um catálogo digital bonito + vendas pelo WhatsApp. É mais simples, mais barato e converte muito bem.',
    sections: [
      { title: 'E-commerce complexo nem sempre é a resposta', content: 'Plataformas de e-commerce cobram mensalidade (Shopify R$150+, Nuvemshop R$100+), exigem gestão de estoque, gateway de pagamento e logística integrada. Para muitos negócios, um catálogo digital com venda pelo WhatsApp é mais eficiente, barato e pessoal.' },
      { title: 'Vitrine digital que vende', content: 'Criamos sua loja online como vitrine: produtos organizados por categoria, fotos atrativas, preços (se desejar mostrar) e botão de WhatsApp em cada produto. O cliente pergunta, você responde, negocia e fecha. Atendimento pessoal que plataformas não oferecem.' },
      { title: 'O que incluímos na loja online', content: 'Catálogo de produtos com fotos e categorias, página individual por produto (no Premium), destaque para lançamentos e promoções, informações sobre envio e frete, políticas de troca, depoimentos de clientes e WhatsApp para atendimento e vendas.' },
      { title: 'Comece vendendo sem mensalidade', content: 'Enquanto um e-commerce cobra R$100-300/mês de mensalidade + taxa por venda, seu site DigiRocket é pagamento único de R$497. Sem mensalidade, sem taxa por venda, sem comissão. Todo o lucro é seu. Ideal para começar online sem risco financeiro.' }
    ],
    faqs: [
      { q: 'Tem carrinho de compras?', a: 'Não neste formato. O modelo é catálogo + WhatsApp. Se precisa de carrinho com pagamento online, veja nosso plano de e-commerce.' },
      { q: 'Posso colocar preços nos produtos?', a: 'Fica a seu critério. Alguns preferem mostrar preços, outros preferem que o cliente pergunte pelo WhatsApp para ter a conversa.' },
      { q: 'Quantos produtos posso colocar?', a: 'No plano Essencial, recomendamos até 20 produtos na página. No Premium, sem limite — cada produto tem sua página.' },
      { q: 'Funciona para qualquer tipo de produto?', a: 'Sim. Roupas, cosméticos, artesanato, alimentos, eletrônicos — qualquer produto físico que você venda pelo WhatsApp.' }
    ],
    cta: 'Quero um site pra minha loja online'
  },
  {
    slug: 'site-para-ecommerce',
    title: 'Site para E-commerce em 48h | DigiRocket — R$497',
    description: 'Loja virtual com carrinho de compras, pagamento online e gestão de pedidos. E-commerce profissional pronto para vender em 48h.',
    h1: 'Site para E-commerce',
    intro: 'Se você precisa de uma loja virtual completa com carrinho de compras, pagamento online e gestão de pedidos, o e-commerce é o caminho. Na DigiRocket, entregamos lojas virtuais profissionais prontas para vender em 48 horas — sem as mensalidades de plataformas tradicionais.',
    sections: [
      { title: 'Pare de pagar mensalidade de plataforma', content: 'Shopify cobra R$150-500/mês. Nuvemshop R$100-300. VTEX a partir de R$1.000. Em um ano, você gasta R$1.200 a R$12.000 só de mensalidade. Com DigiRocket, o investimento é único. Sua loja virtual funciona sem mensalidade de plataforma devorando sua margem.' },
      { title: 'E-commerce completo e profissional', content: 'Desenvolvemos lojas virtuais com tudo que você precisa: catálogo de produtos, carrinho de compras, checkout seguro com múltiplas formas de pagamento (Pix, cartão, boleto), cálculo de frete automático, painel de gestão de pedidos e estoque.' },
      { title: 'Recursos da loja virtual', content: 'Catálogo ilimitado de produtos com variações (cor, tamanho), carrinho de compras, checkout com Pix e cartão, cálculo de frete (Correios/transportadora), cupons de desconto, painel administrativo, notificação de pedidos por e-mail e WhatsApp, e certificado SSL.' },
      { title: 'O potencial de vendas online', content: 'O e-commerce brasileiro fatura R$185 bilhões/ano e cresce 20% ao ano. Com uma loja própria, você captura parte desse mercado sem depender de marketplace (que cobra até 20% de comissão). O investimento se paga nas primeiras vendas.' }
    ],
    faqs: [
      { q: 'Aceita cartão de crédito?', a: 'Sim. Integramos com gateways de pagamento (Mercado Pago, PagSeguro, Stripe) que aceitam cartão, Pix e boleto.' },
      { q: 'Calcula frete automaticamente?', a: 'Sim. Integração com Correios e transportadoras para cálculo automático de frete pelo CEP do cliente.' },
      { q: 'Quantos produtos posso cadastrar?', a: 'Ilimitado. Você gerencia seu catálogo pelo painel administrativo: adiciona, edita e remove produtos quando quiser.' },
      { q: 'É seguro para o cliente comprar?', a: 'Sim. Certificado SSL, checkout criptografado e gateways de pagamento homologados garantem segurança total nas transações.' }
    ],
    cta: 'Quero minha loja virtual profissional'
  },
  {
    slug: 'site-para-curso-online',
    title: 'Site para Curso Online em 48h | DigiRocket — R$497',
    description: 'Site de vendas para curso online com página de captura, depoimentos e checkout. Venda seu curso digital com estrutura profissional.',
    h1: 'Site para Curso Online',
    intro: 'Vender curso online exige mais que hospedar vídeos numa plataforma. Você precisa de uma página de vendas persuasiva que comunica o valor do curso, elimina objeções e leva o visitante à compra. É exatamente isso que a DigiRocket constrói para infoprodutores.',
    sections: [
      { title: 'A página de vendas faz toda a diferença', content: 'Não importa quão bom é seu curso — se a página de vendas não convence, ninguém compra. Uma landing page profissional com copy persuasiva, prova social, módulos detalhados e garantia aumenta a conversão em 2-5x comparado a páginas genéricas de plataforma.' },
      { title: 'Estrutura que converte visitantes em alunos', content: 'Criamos páginas de vendas para cursos online com técnicas de copywriting: headline poderosa, descrição da transformação, módulos detalhados, bônus, depoimentos de alunos, FAQ que elimina objeções, âncora de preço e CTA urgente.' },
      { title: 'O que incluímos na página do curso', content: 'Headline com promessa clara, vídeo de apresentação (VSL), descrição dos módulos e aulas, bônus oferecidos, depoimentos de alunos (texto e vídeo), seção de FAQ, garantia, opções de pagamento (à vista e parcelado), timer de urgência e botão de compra.' },
      { title: 'O ROI de uma boa página de vendas', content: 'Se sua página converte 1% e recebe 1.000 visitas/mês, são 10 vendas. Se o curso custa R$297, são R$2.970/mês. Melhorando a conversão para 3% com uma página profissional, sobe para R$8.910/mês. A diferença de R$5.940/mês veio de um investimento único de R$497.' }
    ],
    faqs: [
      { q: 'Integra com Hotmart, Eduzz, Kiwify?', a: 'Sim. O botão de compra direciona para o checkout da plataforma que você usa (Hotmart, Eduzz, Kiwify, Monetizze).' },
      { q: 'Posso ter countdown/timer?', a: 'Sim. Timer de escassez e contagem regressiva são recursos inclusos para aumentar urgência na decisão de compra.' },
      { q: 'Dá pra fazer teste A/B?', a: 'No plano Premium podemos criar variações da página para testar qual headline ou oferta converte melhor.' },
      { q: 'Posso usar para lançamento?', a: 'Sim. Criamos páginas de captura para lançamentos, páginas de obrigado, e a página de vendas do carrinho aberto.' }
    ],
    cta: 'Quero uma página de vendas pro meu curso'
  },
  {
    slug: 'site-para-escola',
    title: 'Site para Escola em 48h | DigiRocket — R$497',
    description: 'Site para escola com proposta pedagógica, estrutura e matrículas online. Atraia famílias que buscam educação de qualidade.',
    h1: 'Site para Escola',
    intro: 'Famílias pesquisam escolas no Google antes de matricular seus filhos. Proposta pedagógica, estrutura, resultados e valores — tudo é analisado online. Uma escola sem site profissional perde matrículas para concorrentes que apresentam melhor sua proposta educacional.',
    sections: [
      { title: 'A decisão da matrícula começa online', content: 'Escolher a escola dos filhos é uma das decisões mais importantes para uma família. E essa decisão começa com pesquisa no Google. Os pais comparam propostas pedagógicas, veem fotos da estrutura, leem avaliações. Sem site, sua escola não entra nessa comparação.' },
      { title: 'Comunicando excelência educacional', content: 'Criamos sites para escolas que comunicam os pilares da instituição: proposta pedagógica, corpo docente, infraestrutura, resultados e atividades extracurriculares. O design transmite seriedade e acolhimento, refletindo o ambiente que os pais querem para seus filhos.' },
      { title: 'O que incluímos no site escolar', content: 'Proposta pedagógica detalhada, níveis de ensino (infantil, fundamental, médio), corpo docente e formação, fotos da estrutura (salas, laboratórios, quadra, biblioteca), atividades extracurriculares, calendário escolar, processo de matrícula e canal de atendimento às famílias.' },
      { title: 'O valor de cada matrícula', content: 'Uma mensalidade escolar vai de R$800 a R$3.000. Um aluno fica em média 3-5 anos. Isso significa que cada matrícula vale de R$28.000 a R$180.000 em receita. Três matrículas por ano vindas do site representam um retorno absurdo sobre R$497.' }
    ],
    faqs: [
      { q: 'Posso mostrar a estrutura da escola?', a: 'Sim. Tour virtual com fotos de salas de aula, laboratórios, quadra, pátio, biblioteca — tudo que os pais querem ver antes de visitar.' },
      { q: 'Dá pra ter área para pais e alunos?', a: 'No plano Premium podemos incluir área logada com comunicados, calendário e informações exclusivas para a comunidade escolar.' },
      { q: 'O site pode ter formulário de matrícula?', a: 'Sim. Formulário de interesse para matrícula ou agendamento de visita, direcionando os pais para o setor de admissão.' },
      { q: 'Posso destacar resultados (ENEM, vestibular)?', a: 'Sim. Aprovações em vestibulares e notas do ENEM são argumentos poderosos. Incluímos seção de resultados e conquistas.' }
    ],
    cta: 'Quero um site pra minha escola'
  },
  {
    slug: 'site-para-fotografo',
    title: 'Site para Fotógrafo em 48h | DigiRocket — R$497',
    description: 'Site portfólio para fotógrafo com galeria profissional, áreas de atuação e orçamento por WhatsApp. Seu trabalho merece um site à altura.',
    h1: 'Site para Fotógrafo',
    intro: 'Fotografia é arte visual — e o seu site precisa refletir isso. Um portfólio online profissional é onde clientes descobrem seu estilo, se encantam com seu olhar e decidem te contratar. Redes sociais não substituem um site dedicado à exibição do seu trabalho.',
    sections: [
      { title: 'Redes sociais limitam seu portfólio', content: 'No Instagram, suas fotos competem com memes, stories e publicidade. O formato quadrado limita composições. O algoritmo decide quem vê. Um site é seu espaço sagrado: fotos em resolução plena, organizadas como você escolheu, sem distrações. Clientes sérios esperam um portfólio profissional.' },
      { title: 'Galeria que faz justiça ao seu trabalho', content: 'Desenvolvemos sites para fotógrafos com design minimalista: fundo que valoriza as imagens, transições suaves, galerias em tela cheia. O layout desaparece e seu trabalho brilha. O cliente navega imerso nas fotos e sente a vontade de ter o mesmo resultado.' },
      { title: 'Estrutura do site fotográfico', content: 'Galeria por categoria (casamentos, ensaios, corporativo, produto), ensaios completos em alta resolução, seção "Sobre" com sua história e abordagem, equipamentos e estilo, áreas de atuação, pacotes e investimento (se desejar mostrar), e formulário de orçamento.' },
      { title: 'Retorno de cada contrato', content: 'Um ensaio fotográfico custa de R$500 a R$2.000. Um casamento de R$3.000 a R$15.000. Fotografia corporativa ou de produto pode gerar contratos recorrentes de R$5.000+/mês. Um único contrato do Google paga o site dezenas de vezes.' }
    ],
    faqs: [
      { q: 'As fotos ficam em alta resolução?', a: 'Sim. Otimizamos para carregar rápido sem sacrificar qualidade. Fotos de portfólio ficam em alta resolução com opção de visualização em tela cheia.' },
      { q: 'Posso organizar por tipo de trabalho?', a: 'Sim. Galerias separadas por: casamentos, ensaios, newborn, corporativo, produto, gastronomia — o cliente vai direto ao que interessa.' },
      { q: 'Dá pra ter área de entrega de fotos?', a: 'No plano Premium podemos incluir área protegida por senha onde clientes acessam suas galerias de fotos entregues.' },
      { q: 'O site ajuda a cobrar mais?', a: 'Sim. Um portfólio profissional em site próprio posiciona você como premium. Clientes que chegam pelo site estão dispostos a investir mais.' }
    ],
    cta: 'Quero um site portfólio pro meu trabalho'
  },
];
