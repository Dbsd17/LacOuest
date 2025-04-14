document.addEventListener('DOMContentLoaded', function () {
    // Traductions complètes
    const translations = {
        fr: {
            // Interface
            "back": "Retour",
            "menu_title": "MENU PLATS GARNIS",
            "copyright": "© 2023 Lac de l'Ouest - Tous droits réservés",
            "plats": "PLATS",
            
            // Plats garnis
            "riz_canard_laque": "Riz au canard laqué",
            "riz_porc_laque": "Riz au porc laqué",
            "riz_travers_porc": "Riz au travers de porc",
            "riz_brochette_poulet": "Riz au brochette de poulet",
            "riz_brochette_gambas": "Riz au brochette de gambas",
            "riz_cuisse_grenouille": "Riz au cuisse de grenouille",

            // Prix
            "price_14.80": "14.80€",
            "price_15.80": "15.80€",
            "price_17.80": "17.80€",
        },
        en: {
            // Interface
            "back": "Back",
            "menu_title": "MAIN COURSE MENU",
            "copyright": "© 2023 Lac de l'Ouest - All rights reserved",
            "plats": "MAIN COURSES",
            
            // Main courses
            "riz_canard_laque": "Duck lacquered rice",
            "riz_porc_laque": "Pork lacquered rice",
            "riz_travers_porc": "Ribs rice",
            "riz_brochette_poulet": "Chicken skewer rice",
            "riz_brochette_gambas": "Shrimp skewer rice",
            "riz_cuisse_grenouille": "Frog legs rice",

            // Prices
            "price_14.80": "€14.80",
            "price_15.80": "€15.80",
            "price_17.80": "€17.80",
        },
        zh: {
            // Interface
            "back": "返回",
            "menu_title": "主菜菜单",
            "copyright": "© 2023 西湖 - 版权所有",
            "plats": "主菜",

            // Main courses
            "riz_canard_laque": "烤鸭饭",
            "riz_porc_laque": "烤猪肉饭",
            "riz_travers_porc": "肋排饭",
            "riz_brochette_poulet": "鸡肉串饭",
            "riz_brochette_gambas": "虾串饭",
            "riz_cuisse_grenouille": "青蛙腿饭",

            // Prices
            "price_14.80": "14.80€",
            "price_15.80": "15.80€",
            "price_17.80": "17.80€",
        }
    };

    // Fonction de traduction
    function translatePage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        document.getElementById('language-btn').textContent = lang.toUpperCase();
        localStorage.setItem('preferredLanguage', lang);
    }

    // Gestion des clics sur les boutons de langue
    document.querySelectorAll('.language-dropdown a, .lang-btn').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = link.getAttribute('data-lang');
            if (selectedLang) translatePage(selectedLang);
        });
    });

    // Langue par défaut
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    translatePage(savedLang);
});
