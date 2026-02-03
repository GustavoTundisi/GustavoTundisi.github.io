// --- Language Switcher Logic ---
let currentLang = 'pt-br';

function updateLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Special cases
    document.getElementById('header-title').innerText = translations[lang]['header-title'];
    document.getElementById('footer-copy').innerHTML = translations[lang]['footer-copy'];
    
    // Update button text
    const langBtn = document.getElementById('lang-btn');
    langBtn.innerText = lang === 'pt-br' ? 'EN' : 'PT';
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// --- Main functionality ---
document.addEventListener('DOMContentLoaded', function() {
    // Language toggle button
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'pt-br' ? 'en' : 'pt-br';
            updateLanguage(newLang);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        document.querySelectorAll('.nav-list li a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
});
