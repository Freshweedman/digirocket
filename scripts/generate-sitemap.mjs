/**
 * DigiRocket Sitemap Generator
 * Generates sitemap.xml with all SEO pages
 * Run: node scripts/generate-sitemap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const baseUrl = 'https://www.digirocket.site';

// Service slugs (20)
const servicos = [
  'restaurante', 'barbearia', 'delivery', 'pizzaria', 'hamburgueria',
  'salao-beleza', 'academia', 'clinica', 'dentista', 'advogado',
  'contador', 'pet-shop', 'auto-center', 'loja-roupa', 'padaria',
  'farmacia', 'consultoria', 'estetica', 'arquitetura', 'engenharia'
];

// City slugs (15)
const cidades = [
  'sao-paulo', 'rio-de-janeiro', 'brasilia', 'salvador', 'fortaleza',
  'belo-horizonte', 'manaus', 'curitiba', 'recife', 'porto-alegre',
  'goiania', 'belem', 'guarulhos', 'campinas', 'sao-luis'
];

// Generate service + city combinations (20 x 15 = 300 pages)
const serviceCitySlugs = [];
servicos.forEach(servico => {
  cidades.forEach(cidade => {
    serviceCitySlugs.push(`site-${servico}-${cidade}`);
  });
});

// All SEO slugs
const slugs = [
  // Home
  '',
  // Comerciais
  'criar-site','criar-site-profissional','site-em-48h','sobre-a-digirocket',
  // Nichos
  'site-para-barbearia','site-para-salao-de-beleza','site-para-estetica','site-para-spa',
  'site-para-clinica','site-para-medico','site-para-dentista','site-para-psicologo',
  'site-para-fisioterapeuta','site-para-nutricionista','site-para-advogado',
  'site-para-contador','site-para-consultor','site-para-arquiteto','site-para-engenheiro',
  'site-para-imobiliaria','site-para-construtora','site-para-energia-solar',
  'site-para-academia','site-para-personal-trainer','site-para-pet-shop',
  'site-para-veterinaria','site-para-auto-center','site-para-oficina','site-para-mecanica',
  'site-para-eletricista','site-para-delivery','site-para-hamburgueria','site-para-pizzaria',
  'site-para-restaurante','site-para-sushi','site-para-padaria','site-para-doceria',
  'site-para-acaiteria','site-para-loja-de-roupas','site-para-loja-online',
  'site-para-ecommerce','site-para-curso-online','site-para-escola','site-para-fotografo',
  // Cidades lote 1
  'criar-site-porto-alegre','criar-site-sao-paulo','criar-site-rio-de-janeiro',
  'criar-site-belo-horizonte','criar-site-curitiba','criar-site-florianopolis',
  'criar-site-brasilia','criar-site-goiania','criar-site-salvador','criar-site-fortaleza',
  'criar-site-recife','criar-site-manaus','criar-site-belem','criar-site-campinas',
  'criar-site-joinville','criar-site-natal','criar-site-caxias-do-sul',
  'criar-site-londrina','criar-site-vitoria',
  // Cidades lote 2
  'criar-site-canoas','criar-site-gravatai','criar-site-novo-hamburgo',
  'criar-site-pelotas','criar-site-santa-maria','criar-site-guarulhos',
  'criar-site-sao-bernardo-do-campo','criar-site-niteroi','criar-site-maringa',
  'criar-site-joao-pessoa','criar-site-maceio','criar-site-teresina',
  'criar-site-sao-luis','criar-site-cuiaba','criar-site-campo-grande',
  'criar-site-aracaju','criar-site-palmas','criar-site-porto-velho',
  // Serviços genéricos (20 novos)
  'site-para-restaurante','site-para-barbearia','site-para-delivery','site-para-pizzaria',
  'site-para-hamburgueria','site-para-salao-beleza','site-para-academia','site-para-clinica',
  'site-para-dentista','site-para-advogado','site-para-contador','site-para-pet-shop',
  'site-para-auto-center','site-para-loja-roupa','site-para-padaria','site-para-farmacia',
  'site-para-consultoria','site-para-estetica','site-para-arquitetura','site-para-engenharia',
  // Service + City combinations (300 páginas)
  ...serviceCitySlugs
];

// Priority and changefreq by page type
function getPageMetadata(slug) {
  if (slug === '') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  if (slug.startsWith('criar-site-')) {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (slug.startsWith('site-para-')) {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (slug.startsWith('site-') && slug.includes('-')) {
    // Service + City pages
    return { priority: '0.8', changefreq: 'weekly' };
  }
  return { priority: '0.7', changefreq: 'monthly' };
}

// Generate sitemap XML
const lastmod = new Date().toISOString().split('T')[0];
const urls = slugs.map(slug => {
  const { priority, changefreq } = getPageMetadata(slug);
  const loc = slug === '' ? baseUrl : `${baseUrl}/${slug}`;
  
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

// Write sitemap
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log(`✅ Sitemap gerado com ${slugs.length} URLs`);
console.log(`📍 Arquivo: public/sitemap.xml`);
console.log(`🔗 URL: ${baseUrl}/sitemap.xml`);
console.log(`\n📊 Breakdown:`);
console.log(`   - Página inicial: 1`);
console.log(`   - Páginas comerciais: 4`);
console.log(`   - Páginas de nicho: ~40`);
console.log(`   - Páginas de cidade: ~35`);
console.log(`   - Páginas de serviço genérico: 20`);
console.log(`   - Páginas serviço+cidade: ${serviceCitySlugs.length}`);
console.log(`   - TOTAL: ${slugs.length} páginas SEO 🚀`);
