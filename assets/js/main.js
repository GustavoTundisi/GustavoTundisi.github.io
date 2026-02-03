// --- Language Switcher Logic ---
let currentLang = 'pt-br';

function updateLanguage(lang) {
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded');
        return;
    }

    currentLang = lang;
    
    // 1. Atualiza textos (innerHTML)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. Atualiza Placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // 3. ATUALIZAÇÃO DOS LINKS (HREF)
    // Verifica se existem os links na tradução antes de tentar aplicar
    if (translations[lang]['url-doc-1']) {
        const btn1 = document.getElementById('doc-btn-1');
        if (btn1) btn1.href = translations[lang]['url-doc-1'];
    }
    if (translations[lang]['url-doc-2']) {
        const btn2 = document.getElementById('doc-btn-2');
        if (btn2) btn2.href = translations[lang]['url-doc-2'];
    }
    if (translations[lang]['url-doc-3']) {
        const btn3 = document.getElementById('doc-btn-3');
        if (btn3) btn3.href = translations[lang]['url-doc-3'];
    }

    // 4. Casos especiais (Título e Footer)
    const headerTitle = document.getElementById('header-title');
    if (headerTitle && translations[lang]['header-title']) {
        headerTitle.innerText = translations[lang]['header-title'];
    }

    const footerCopy = document.getElementById('footer-copy');
    if (footerCopy && translations[lang]['footer-copy']) {
        footerCopy.innerHTML = translations[lang]['footer-copy'];
    }
    
    // Atualiza o texto do botão de idioma
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.innerText = lang === 'pt-br' ? 'EN' : 'PT';
    }

    document.documentElement.lang = lang;
}
