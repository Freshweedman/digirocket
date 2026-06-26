/**
 * DigiRocket Prerender Script
 * Generates static HTML for each SEO page so Googlebot sees content immediately.
 * Run: node scripts/prerender.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Load metadata
const metaDataPath = path.join(__dirname, '..', 'page-metadata.json');
const pageMetadata = fs.existsSync(metaDataPath) 
  ? JSON.parse(fs.readFileSync(metaDataPath, 'utf-8'))
  : {};

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

// Function to inject custom metadata into HTML
function injectMetadata(html, page) {
  if (!page || !page.title) return html;
  
  // Escape special characters for regex
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  return html
    // Title
    .replace(
      /<title>.*?<\/title>/,
      `<title>${page.title}</title>`
    )
    // Meta description
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"/,
      `<meta name="description" content="${page.description}"`
    )
    // OG title
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"/,
      `<meta property="og:title" content="${page.title}"`
    )
    // OG description
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"/,
      `<meta property="og:description" content="${page.description}"`
    )
    // OG URL
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"/,
      `<meta property="og:url" content="https://www.digirocket.site/${page.slug}"`
    )
    // Canonical
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="https://www.digirocket.site/${page.slug}" />`
    )
    // Twitter title
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"/,
      `<meta name="twitter:title" content="${page.title}"`
    )
    // Twitter description
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"/,
      `<meta name="twitter:description" content="${page.description}"`
    );
}

let created = 0;
let withMetadata = 0;

for (const slug of slugs) {
  const dir = path.join(distDir, slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  // Find page metadata
  const pageMeta = pageMetadata[slug];
  
  // Inject custom metadata if available
  let html = indexHtml;
  if (pageMeta) {
    html = injectMetadata(html, pageMeta);
    withMetadata++;
  } else {
    // Fallback: just update canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="https://www.digirocket.site/${slug}" />`
    );
  }
  
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  created++;
}

console.log(`✅ Prerendered ${created} pages`);
console.log(`📊 Com metadados únicos: ${withMetadata}/${created}`);


