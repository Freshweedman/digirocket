// SCRIPT DE DEBUG - Cole no Console do Navegador (F12)

console.clear();
console.log('🔍 INICIANDO DEBUG DE DUPLICAÇÃO...\n');

// 1. Buscar todos os elementos que contêm "Serviços que fornecemos"
const allElements = document.querySelectorAll('*');
const matches = [];

allElements.forEach((el, index) => {
    if (el.textContent.includes('Serviços que fornecemos') && el.children.length === 0) {
        matches.push({
            element: el,
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            text: el.textContent.substring(0, 100),
            parent: el.parentElement?.tagName,
            parentClass: el.parentElement?.className
        });
    }
});

console.log(`📊 Encontrados ${matches.length} elementos com o texto:\n`);
matches.forEach((m, i) => {
    console.log(`\n${i + 1}. <${m.tagName}> ${m.className ? `class="${m.className}"` : ''}`);
    console.log(`   Pai: <${m.parent}> ${m.parentClass ? `class="${m.parentClass}"` : ''}`);
    console.log(`   Texto: "${m.text}..."`);
    
    // Destacar visualmente
    m.element.style.outline = '5px solid red';
    m.element.style.backgroundColor = 'rgba(255,0,0,0.1)';
});

// 2. Buscar seções completas
const sections = document.querySelectorAll('section');
let capabilitiesSections = 0;

sections.forEach((section, i) => {
    if (section.textContent.includes('Serviços que fornecemos')) {
        capabilitiesSections++;
        console.log(`\n🎯 SEÇÃO ${capabilitiesSections} encontrada (section #${i}):`);
        console.log('   Classes:', section.className);
        console.log('   Posição:', section.getBoundingClientRect());
        
        // Destacar seção
        section.style.border = '10px solid blue';
        
        // Adicionar label
        const label = document.createElement('div');
        label.style.cssText = 'position:absolute;top:0;left:0;background:blue;color:white;padding:10px;font-size:20px;z-index:99999;';
        label.textContent = `SEÇÃO ${capabilitiesSections}`;
        section.style.position = 'relative';
        section.appendChild(label);
    }
});

console.log(`\n\n✅ TOTAL DE SEÇÕES "Serviços que fornecemos": ${capabilitiesSections}`);
console.log(`✅ TOTAL DE ELEMENTOS COM O TEXTO: ${matches.length}`);

// 3. Verificar se há elementos duplicados por CSS (display, visibility, etc)
console.log('\n🔍 Verificando propriedades CSS...');
matches.forEach((m, i) => {
    const styles = window.getComputedStyle(m.element);
    console.log(`\nElemento ${i + 1}:`);
    console.log('   display:', styles.display);
    console.log('   visibility:', styles.visibility);
    console.log('   opacity:', styles.opacity);
    console.log('   position:', styles.position);
});

alert(`DEBUG COMPLETO!\n\n✅ Seções encontradas: ${capabilitiesSections}\n✅ Elementos com texto: ${matches.length}\n\nVerifique o console (F12) para detalhes.`);
