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

// Write metadata JSON
const outputPath = path.join(__dirname, '..', 'page-metadata.json');
fs.writeFileSync(outputPath, JSON.stringify(metaData, null, 2));

console.log(`✅ Gerados metadados para ${Object.keys(metaData).length} páginas`);
console.log(`📍 Arquivo: page-metadata.json`);
