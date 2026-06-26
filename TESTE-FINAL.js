// ===== COLE ESTE SCRIPT NO CONSOLE DO NAVEGADOR (F12) =====

console.clear();
console.log('%c🔍 TESTE FINAL DE DUPLICAÇÃO', 'font-size:20px;font-weight:bold;color:#a3e635');

// 1. Verificar se o ID único existe
const secaoUnica = document.getElementById('servicos-capabilities-unico');
const tituloUnico = document.getElementById('titulo-servicos-unico');

console.log('\n📌 VERIFICAÇÃO DE IDs ÚNICOS:');
console.log('Seção #servicos-capabilities-unico:', secaoUnica ? '✅ ENCONTRADA' : '❌ NÃO ENCONTRADA');
console.log('Título #titulo-servicos-unico:', tituloUnico ? '✅ ENCONTRADO' : '❌ NÃO ENCONTRADO');

// 2. Contar quantas sections têm o texto
const todasSections = document.querySelectorAll('section');
let sectionsComTexto = 0;

todasSections.forEach((section, index) => {
    if (section.textContent.includes('Serviços que fornecemos')) {
        sectionsComTexto++;
        console.log(`\n🎯 SEÇÃO ${sectionsComTexto}:`);
        console.log('   Index:', index);
        console.log('   ID:', section.id || 'SEM ID');
        console.log('   Classes:', section.className);
        console.log('   Posição Y:', Math.round(section.getBoundingClientRect().top + window.scrollY));
        
        // Marcar visualmente
        section.style.outline = `10px solid ${sectionsComTexto === 1 ? 'blue' : 'red'}`;
        
        // Adicionar label
        const label = document.createElement('div');
        label.style.cssText = `position:absolute;top:10px;left:10px;background:${sectionsComTexto === 1 ? 'blue' : 'red'};color:white;padding:15px 25px;font-size:24px;font-weight:bold;z-index:99999;border-radius:10px;`;
        label.textContent = `SEÇÃO ${sectionsComTexto}`;
        section.style.position = 'relative';
        section.insertBefore(label, section.firstChild);
    }
});

// 3. Contar elementos H2 com o texto
const todosH2 = document.querySelectorAll('h2');
let h2ComTexto = 0;

todosH2.forEach((h2) => {
    if (h2.textContent.includes('Serviços que fornecemos')) {
        h2ComTexto++;
        console.log(`\n📝 H2 ${h2ComTexto}:`);
        console.log('   ID:', h2.id || 'SEM ID');
        console.log('   Texto:', h2.textContent.substring(0, 50) + '...');
        h2.style.backgroundColor = 'yellow';
        h2.style.color = 'black';
    }
});

// 4. Resultado final
console.log('\n\n' + '='.repeat(50));
console.log('%c📊 RESULTADO FINAL:', 'font-size:16px;font-weight:bold;color:#a3e635');
console.log(`   Sections com "Serviços que fornecemos": ${sectionsComTexto}`);
console.log(`   H2 com "Serviços que fornecemos": ${h2ComTexto}`);
console.log('='.repeat(50));

// 5. Alerta visual
if (sectionsComTexto > 1) {
    alert(`❌ PROBLEMA CONFIRMADO!\n\n${sectionsComTexto} seções encontradas com "Serviços que fornecemos".\n\nVerifique o console (F12) para detalhes.`);
} else if (sectionsComTexto === 1) {
    alert(`✅ TUDO CERTO!\n\nApenas 1 seção encontrada.\n\nSe você está vendo 2 visualmente, pode ser:\n- Problema de CSS\n- Zoom do navegador\n- Extensão do navegador interferindo`);
} else {
    alert(`⚠️ NENHUMA SEÇÃO ENCONTRADA!\n\nO componente pode não ter carregado ainda.`);
}
