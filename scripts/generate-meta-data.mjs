/**
 * DigiRocket Metadata Generator
 * Creates a JSON file with all page metadata for prerender
 * Run: node scripts/generate-meta-data.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

// Service + City data
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
  { slug: 'sao-paulo', nome: 'São Paulo', estado: 'SP' },
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', estado: 'RJ' },
  { slug: 'brasilia', nome: 'Brasília', estado: 'DF' },
  { slug: 'salvador', nome: 'Salvador', estado: 'BA' },
  { slug: 'fortaleza', nome: 'Fortaleza', estado: 'CE' },
  { slug: 'belo-horizonte', nome: 'Belo Horizonte', estado: 'MG' },
  { slug: 'manaus', nome: 'Manaus', estado: 'AM' },
  { slug: 'curitiba', nome: 'Curitiba', estado: 'PR' },
  { slug: 'recife', nome: 'Recife', estado: 'PE' },
  { slug: 'porto-alegre', nome: 'Porto Alegre', estado: 'RS' },
  { slug: 'goiania', nome: 'Goiânia', estado: 'GO' },
  { slug: 'belem', nome: 'Belém', estado: 'PA' },
  { slug: 'guarulhos', nome: 'Guarulhos', estado: 'SP' },
  { slug: 'campinas', nome: 'Campinas', estado: 'SP' },
  { slug: 'sao-luis', nome: 'São Luís', estado: 'MA' },
];

const metaData = {};

// Generate service pages metadata
servicos.forEach(servico => {
  const slug = `site-para-${servico.slug}`;
  metaData[slug] = {
    title: `Site para ${servico.nome} | DigiRocket — R$497`,
    description: `Site profissional para ${servico.nome}. Pronto em 48h, R$497. Cliente te acha no Google e fala direto no WhatsApp. Estrutura pensada para SEO local.`,
    h1: `Site Profissional para ${servico.nome}`,
    slug
  };
});

// Generate service + city pages metadata
servicos.forEach(servico => {
  cidadesGrandes.forEach(cidade => {
    const slug = `site-${servico.slug}-${cidade.slug}`;
    metaData[slug] = {
      title: `Site para ${servico.nome} em ${cidade.nome} | DigiRocket — R$497`,
      description: `Site profissional para ${servico.nome} em ${cidade.nome}/${cidade.estado}. Pronto em 48h, R$497. Seu cliente acha você no Google. Estrutura pensada para SEO local.`,
      h1: `Site para ${servico.nome} em ${cidade.nome}`,
      slug
    };
  });
});

// Generate CITY pages metadata (criar-site-[cidade])
const todasCidades = [
  { slug: 'porto-alegre', nome: 'Porto Alegre', estado: 'RS' },
  { slug: 'sao-paulo', nome: 'São Paulo', estado: 'SP' },
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', estado: 'RJ' },
  { slug: 'belo-horizonte', nome: 'Belo Horizonte', estado: 'MG' },
  { slug: 'curitiba', nome: 'Curitiba', estado: 'PR' },
  { slug: 'florianopolis', nome: 'Florianópolis', estado: 'SC' },
  { slug: 'brasilia', nome: 'Brasília', estado: 'DF' },
  { slug: 'goiania', nome: 'Goiânia', estado: 'GO' },
  { slug: 'salvador', nome: 'Salvador', estado: 'BA' },
  { slug: 'fortaleza', nome: 'Fortaleza', estado: 'CE' },
  { slug: 'recife', nome: 'Recife', estado: 'PE' },
  { slug: 'manaus', nome: 'Manaus', estado: 'AM' },
  { slug: 'belem', nome: 'Belém', estado: 'PA' },
  { slug: 'campinas', nome: 'Campinas', estado: 'SP' },
  { slug: 'joinville', nome: 'Joinville', estado: 'SC' },
  { slug: 'natal', nome: 'Natal', estado: 'RN' },
  { slug: 'caxias-do-sul', nome: 'Caxias do Sul', estado: 'RS' },
  { slug: 'londrina', nome: 'Londrina', estado: 'PR' },
  { slug: 'vitoria', nome: 'Vitória', estado: 'ES' },
  { slug: 'canoas', nome: 'Canoas', estado: 'RS' },
  { slug: 'gravatai', nome: 'Gravataí', estado: 'RS' },
  { slug: 'novo-hamburgo', nome: 'Novo Hamburgo', estado: 'RS' },
  { slug: 'pelotas', nome: 'Pelotas', estado: 'RS' },
  { slug: 'santa-maria', nome: 'Santa Maria', estado: 'RS' },
  { slug: 'guarulhos', nome: 'Guarulhos', estado: 'SP' },
  { slug: 'sao-bernardo-do-campo', nome: 'São Bernardo do Campo', estado: 'SP' },
  { slug: 'niteroi', nome: 'Niterói', estado: 'RJ' },
  { slug: 'maringa', nome: 'Maringá', estado: 'PR' },
  { slug: 'joao-pessoa', nome: 'João Pessoa', estado: 'PB' },
  { slug: 'maceio', nome: 'Maceió', estado: 'AL' },
  { slug: 'teresina', nome: 'Teresina', estado: 'PI' },
  { slug: 'sao-luis', nome: 'São Luís', estado: 'MA' },
  { slug: 'cuiaba', nome: 'Cuiabá', estado: 'MT' },
  { slug: 'campo-grande', nome: 'Campo Grande', estado: 'MS' },
  { slug: 'aracaju', nome: 'Aracaju', estado: 'SE' },
  { slug: 'palmas', nome: 'Palmas', estado: 'TO' },
  { slug: 'porto-velho', nome: 'Porto Velho', estado: 'RO' },
];

todasCidades.forEach(cidade => {
  const slug = `criar-site-${cidade.slug}`;
  metaData[slug] = {
    title: `Criar Site em ${cidade.nome} em 48h | DigiRocket — R$497`,
    description: `Criação de site profissional em ${cidade.nome}/${cidade.estado}. Pronto em 48h, R$497. Estrutura pensada para SEO local e captação via WhatsApp. Atendemos todo o ${cidade.estado}.`,
    h1: `Criar Site em ${cidade.nome}`,
    slug
  };
});

// Generate NICHE pages metadata (site-para-[nicho])
const nichosCompletos = [
  { slug: 'barbearia', nome: 'Barbearia' },
  { slug: 'salao-de-beleza', nome: 'Salão de Beleza' },
  { slug: 'estetica', nome: 'Estética' },
  { slug: 'spa', nome: 'Spa' },
  { slug: 'clinica', nome: 'Clínica' },
  { slug: 'medico', nome: 'Médico' },
  { slug: 'dentista', nome: 'Dentista' },
  { slug: 'psicologo', nome: 'Psicólogo' },
  { slug: 'fisioterapeuta', nome: 'Fisioterapeuta' },
  { slug: 'nutricionista', nome: 'Nutricionista' },
  { slug: 'advogado', nome: 'Advogado' },
  { slug: 'contador', nome: 'Contador' },
  { slug: 'consultor', nome: 'Consultor' },
  { slug: 'arquiteto', nome: 'Arquiteto' },
  { slug: 'engenheiro', nome: 'Engenheiro' },
  { slug: 'imobiliaria', nome: 'Imobiliária' },
  { slug: 'construtora', nome: 'Construtora' },
  { slug: 'energia-solar', nome: 'Energia Solar' },
  { slug: 'academia', nome: 'Academia' },
  { slug: 'personal-trainer', nome: 'Personal Trainer' },
  { slug: 'pet-shop', nome: 'Pet Shop' },
  { slug: 'veterinaria', nome: 'Veterinária' },
  { slug: 'auto-center', nome: 'Auto Center' },
  { slug: 'oficina', nome: 'Oficina' },
  { slug: 'mecanica', nome: 'Mecânica' },
  { slug: 'eletricista', nome: 'Eletricista' },
  { slug: 'delivery', nome: 'Delivery' },
  { slug: 'hamburgueria', nome: 'Hamburgueria' },
  { slug: 'pizzaria', nome: 'Pizzaria' },
  { slug: 'restaurante', nome: 'Restaurante' },
  { slug: 'sushi', nome: 'Sushi' },
  { slug: 'padaria', nome: 'Padaria' },
  { slug: 'doceria', nome: 'Doceria' },
  { slug: 'acaiteria', nome: 'Açaiteria' },
  { slug: 'loja-de-roupas', nome: 'Loja de Roupas' },
  { slug: 'loja-online', nome: 'Loja Online' },
  { slug: 'ecommerce', nome: 'E-commerce' },
  { slug: 'curso-online', nome: 'Curso Online' },
  { slug: 'escola', nome: 'Escola' },
  { slug: 'fotografo', nome: 'Fotógrafo' },
];

nichosCompletos.forEach(nicho => {
  const slug = `site-para-${nicho.slug}`;
  // Evitar duplicatas (já adicionados acima)
  if (!metaData[slug]) {
    metaData[slug] = {
      title: `Site para ${nicho.nome} | DigiRocket — R$497`,
      description: `Site profissional para ${nicho.nome}. Pronto em 48h, R$497. Estrutura pensada para captação via WhatsApp e ranking orgânico no Google.`,
      h1: `Site Profissional para ${nicho.nome}`,
      slug
    };
  }
});

// Generate COMMERCIAL pages metadata
const paginasComerciais = [
  {
    slug: 'criar-site',
    title: 'Criar Site Profissional em 48h | DigiRocket — R$497',
    description: 'Criação de sites profissionais em 48h. Estrutura pensada para SEO local e captação via WhatsApp. A partir de R$497. Atendemos todo o Brasil.',
    h1: 'Criar Site Profissional'
  },
  {
    slug: 'criar-site-profissional',
    title: 'Criação de Site Profissional | DigiRocket — R$497',
    description: 'Sites profissionais com foco em conversão. Pronto em 48h, R$497. Estrutura pensada para aparecer no Google e captar leads via WhatsApp.',
    h1: 'Criação de Site Profissional'
  },
  {
    slug: 'site-em-48h',
    title: 'Site em 48 Horas | DigiRocket — R$497',
    description: 'Site profissional entregue em 48 horas. A partir de R$497. Estrutura pensada para SEO local e conversão via WhatsApp. Garantia de 7 dias.',
    h1: 'Site em 48 Horas'
  },
  {
    slug: 'sobre-a-digirocket',
    title: 'Sobre a DigiRocket | Criação de Sites em 48h',
    description: 'DigiRocket: sites profissionais em 48h. Estrutura pensada para SEO local e captação via WhatsApp. Porto Alegre/RS. Atendemos todo o Brasil.',
    h1: 'Sobre a DigiRocket'
  }
];

paginasComerciais.forEach(pagina => {
  metaData[pagina.slug] = pagina;
});

// Write metadata JSON
const outputPath = path.join(__dirname, '..', 'page-metadata.json');
fs.writeFileSync(outputPath, JSON.stringify(metaData, null, 2));

console.log(`✅ Gerados metadados para ${Object.keys(metaData).length} páginas`);
console.log(`📍 Arquivo: page-metadata.json`);
