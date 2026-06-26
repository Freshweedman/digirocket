/**
 * DigiRocket SEO Quality Audit
 * Valida qualidade de conteúdo, evita duplicação e garante indexação limpa
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const publicDir = path.join(__dirname, '..', 'public');

// Ler sitemap
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

// Ler páginas prerenderizadas
function getPrerenderredPages(dir, pages = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      getPrerenderredPages(fullPath, pages);
    } else if (file.name === 'index.html') {
      const relativePath = path.relative(distDir, path.dirname(fullPath));
      pages.push(relativePath || '/');
    }
  }
  
  return pages;
}

const prerenderredPages = getPrerenderredPages(distDir);

console.log('\n🔍 === AUDITORIA SEO DIGIROCKET ===\n');

// 1. Comparar sitemap vs prerender
console.log('📊 SITEMAP vs PRERENDER:\n');
console.log(`  Sitemap: ${sitemapUrls.length} URLs`);
console.log(`  Prerendered: ${prerenderredPages.length} páginas`);

// Encontrar URLs que estão no sitemap mas não foram prerenderizadas
const baseUrl = 'https://www.digirocket.site';
const sitemapSlugs = sitemapUrls.map(url => url.replace(baseUrl, '').replace(/^\//, '') || '/');
const prerenderSlugs = prerenderredPages.map(p => p.replace(/\\/g, '/'));

const missingFromPrerender = sitemapSlugs.filter(slug => {
  if (slug === '/') return !prerenderSlugs.includes('/');
  return !prerenderSlugs.includes(slug);
});

const missingFromSitemap = prerenderSlugs.filter(slug => {
  if (slug === '/') return !sitemapSlugs.includes('/');
  return !sitemapSlugs.includes(slug);
});

if (missingFromPrerender.length > 0) {
  console.log(`\n  ⚠️  ${missingFromPrerender.length} URL(s) no sitemap mas não prerenderizada(s):`);
  missingFromPrerender.slice(0, 10).forEach(slug => console.log(`    - ${slug}`));
}

if (missingFromSitemap.length > 0) {
  console.log(`\n  ⚠️  ${missingFromSitemap.length} página(s) prerenderizada(s) mas não no sitemap:`);
  missingFromSitemap.slice(0, 10).forEach(slug => console.log(`    - ${slug}`));
}

// 2. Análise de qualidade de conteúdo
console.log('\n\n📝 ANÁLISE DE QUALIDADE DE CONTEÚDO:\n');

const issues = {
  duplicateTitles: new Map(),
  duplicateDescriptions: new Map(),
  duplicateH1s: new Map(),
  thinContent: [],
  missingCanonical: [],
  exaggeratedClaims: [],
  placeholders: []
};

let totalPages = 0;
let pagesAnalyzed = 0;

// Analisar cada página prerenderizada
for (const slug of prerenderSlugs.slice(0, 50)) { // Limitar análise inicial
  totalPages++;
  
  const htmlPath = slug === '/' 
    ? path.join(distDir, 'index.html')
    : path.join(distDir, slug, 'index.html');
  
  if (!fs.existsSync(htmlPath)) continue;
  
  const html = fs.readFileSync(htmlPath, 'utf-8');
  pagesAnalyzed++;
  
  // Extrair metadados
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/);
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/);
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="(.*?)"/);
  
  const title = titleMatch ? titleMatch[1] : null;
  const description = descMatch ? descMatch[1] : null;
  const h1 = h1Match ? h1Match[1].replace(/<[^>]*>/g, '') : null;
  const canonical = canonicalMatch ? canonicalMatch[1] : null;
  
  // Detectar títulos duplicados
  if (title) {
    if (!issues.duplicateTitles.has(title)) {
      issues.duplicateTitles.set(title, []);
    }
    issues.duplicateTitles.get(title).push(slug);
  }
  
  // Detectar descriptions duplicadas
  if (description) {
    if (!issues.duplicateDescriptions.has(description)) {
      issues.duplicateDescriptions.set(description, []);
    }
    issues.duplicateDescriptions.get(description).push(slug);
  }
  
  // Detectar H1s duplicados
  if (h1) {
    if (!issues.duplicateH1s.has(h1)) {
      issues.duplicateH1s.set(h1, []);
    }
    issues.duplicateH1s.get(h1).push(slug);
  }
  
  // Detectar conteúdo fino (menos de 700 caracteres úteis)
  const textContent = html.replace(/<script[^>]*>.*?<\/script>/gs, '')
                          .replace(/<style[^>]*>.*?<\/style>/gs, '')
                          .replace(/<[^>]*>/g, '')
                          .replace(/\s+/g, ' ')
                          .trim();
  
  if (textContent.length < 700) {
    issues.thinContent.push({ slug, chars: textContent.length });
  }
  
  // Detectar canonical ausente
  if (!canonical) {
    issues.missingCanonical.push(slug);
  }
  
  // Detectar promessas exageradas
  const exaggerated = [
    /#1\s+(no|do)\s+Google/i,
    /dominar\s+o\s+Google/i,
    /100\+?\s+leads\s+garantidos/i,
    /10\.?000\+?\s+visitas\s+garantidas/i,
    /ROI\s+infinito/i,
    /primeiro\s+lugar\s+garantido/i
  ];
  
  for (const pattern of exaggerated) {
    if (pattern.test(html)) {
      issues.exaggeratedClaims.push({ slug, pattern: pattern.source });
      break;
    }
  }
  
  // Detectar placeholders
  const placeholders = [
    /\[cidade\]/i,
    /\[serviço\]/i,
    /\[negócio\]/i,
    /Lorem\s+ipsum/i,
    /placeholder/i
  ];
  
  for (const pattern of placeholders) {
    if (pattern.test(html)) {
      issues.placeholders.push({ slug, pattern: pattern.source });
      break;
    }
  }
}

console.log(`  Analisadas: ${pagesAnalyzed} de ${totalPages} páginas\n`);

// Reportar títulos duplicados
const duplicateTitles = Array.from(issues.duplicateTitles.entries())
  .filter(([title, pages]) => pages.length > 1);

if (duplicateTitles.length > 0) {
  console.log(`  ⚠️  ${duplicateTitles.length} títulos duplicados encontrados:`);
  duplicateTitles.slice(0, 5).forEach(([title, pages]) => {
    console.log(`    "${title}" em ${pages.length} páginas`);
  });
}

// Reportar descriptions duplicadas
const duplicateDescs = Array.from(issues.duplicateDescriptions.entries())
  .filter(([desc, pages]) => pages.length > 1);

if (duplicateDescs.length > 0) {
  console.log(`\n  ⚠️  ${duplicateDescs.length} meta descriptions duplicadas:`);
  duplicateDescs.slice(0, 5).forEach(([desc, pages]) => {
    console.log(`    "${desc.substring(0, 60)}..." em ${pages.length} páginas`);
  });
}

// Reportar H1s duplicados
const duplicateH1s = Array.from(issues.duplicateH1s.entries())
  .filter(([h1, pages]) => pages.length > 1);

if (duplicateH1s.length > 0) {
  console.log(`\n  ⚠️  ${duplicateH1s.length} H1s duplicados:`);
  duplicateH1s.slice(0, 5).forEach(([h1, pages]) => {
    console.log(`    "${h1}" em ${pages.length} páginas`);
  });
}

// Reportar conteúdo fino
if (issues.thinContent.length > 0) {
  console.log(`\n  ⚠️  ${issues.thinContent.length} páginas com conteúdo fino (<700 chars):`);
  issues.thinContent.slice(0, 5).forEach(({ slug, chars }) => {
    console.log(`    ${slug} (${chars} chars)`);
  });
}

// Reportar canonical ausente
if (issues.missingCanonical.length > 0) {
  console.log(`\n  ⚠️  ${issues.missingCanonical.length} páginas sem canonical:`);
  issues.missingCanonical.slice(0, 5).forEach(slug => {
    console.log(`    ${slug}`);
  });
}

// Reportar promessas exageradas
if (issues.exaggeratedClaims.length > 0) {
  console.log(`\n  ⚠️  ${issues.exaggeratedClaims.length} páginas com promessas exageradas:`);
  issues.exaggeratedClaims.forEach(({ slug, pattern }) => {
    console.log(`    ${slug} (${pattern})`);
  });
}

// Reportar placeholders
if (issues.placeholders.length > 0) {
  console.log(`\n  ⚠️  ${issues.placeholders.length} páginas com placeholders:`);
  issues.placeholders.forEach(({ slug, pattern }) => {
    console.log(`    ${slug} (${pattern})`);
  });
}

// 3. Resumo e recomendações
console.log('\n\n📋 RESUMO:\n');

const totalIssues = 
  missingFromPrerender.length + 
  missingFromSitemap.length +
  duplicateTitles.length +
  duplicateDescs.length +
  duplicateH1s.length +
  issues.thinContent.length +
  issues.missingCanonical.length +
  issues.exaggeratedClaims.length +
  issues.placeholders.length;

console.log(`  Total de problemas encontrados: ${totalIssues}`);
console.log(`  Páginas analisadas: ${pagesAnalyzed}`);
console.log(`  Taxa de qualidade: ${Math.round((1 - totalIssues / pagesAnalyzed) * 100)}%`);

console.log('\n\n🎯 PRÓXIMOS PASSOS:\n');
console.log('  1. Corrigir discrepância sitemap vs prerender');
console.log('  2. Criar conteúdo único para páginas com títulos/H1s duplicados');
console.log('  3. Expandir conteúdo de páginas finas para >700 caracteres');
console.log('  4. Adicionar canonical em todas as páginas');
console.log('  5. Remover promessas exageradas e substituir por copy segura');
console.log('  6. Implementar quality gate: só indexar páginas com score >70%');
console.log('  7. Adicionar noindex temporário em páginas de baixa qualidade');
console.log('  8. Criar sitemap-index.xml se necessário');
console.log('  9. Regenerar robots.txt com quebras de linha');
console.log('  10. Testar acessibilidade real de todas as URLs\n');

// Salvar relatório
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    sitemapUrls: sitemapUrls.length,
    prerenderredPages: prerenderredPages.length,
    pagesAnalyzed,
    totalIssues,
    qualityScore: Math.round((1 - totalIssues / pagesAnalyzed) * 100)
  },
  issues: {
    missingFromPrerender: missingFromPrerender.length,
    missingFromSitemap: missingFromSitemap.length,
    duplicateTitles: duplicateTitles.length,
    duplicateDescriptions: duplicateDescs.length,
    duplicateH1s: duplicateH1s.length,
    thinContent: issues.thinContent.length,
    missingCanonical: issues.missingCanonical.length,
    exaggeratedClaims: issues.exaggeratedClaims.length,
    placeholders: issues.placeholders.length
  },
  details: {
    missingFromPrerender,
    missingFromSitemap,
    duplicateTitlesExamples: duplicateTitles.slice(0, 10),
    thinContentExamples: issues.thinContent.slice(0, 10),
    exaggeratedClaims: issues.exaggeratedClaims,
    placeholders: issues.placeholders
  }
};

fs.writeFileSync(
  path.join(__dirname, '..', 'audit-report.json'),
  JSON.stringify(report, null, 2)
);

console.log('✅ Relatório salvo em audit-report.json\n');

// Always exit with 0 to allow deployment
// Quality issues should be tracked but not block deployment
process.exit(0);
