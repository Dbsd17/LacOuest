document.addEventListener('DOMContentLoaded', function () {
    // Traductions complètes
    const translations = {
        fr: {
            // Interface
            "back": "Retour",
            "menu_title": "MENU VÉGÉTARIEN",
            "copyright": "© 2023 Lac de l'Ouest - Tous droits réservés",
            "entrees": "ENTRÉES",
            "plats": "PLATS",
            "vegetarian": "VÉGÉTARIEN",

            // Prix
            "price_3.20": "3.20€",
            "price_4.20": "4.20€",
            "price_6.80": "6.80€",
            "price_7.80": "7.80€",
            "price_8.95": "8.95€",
            "price_10.80": "10.80€",

            // Plats végétariens
            "caquelon_vegetarien": "Caquelon végétarien",
            "germes_soja_sautes": "Germes de soja sautés",
            "chop_suey_legume": "Chop suey légume",
            "nouilles_sautees_nature": "Nouilles sautées nature",
            "riz_sauté_curry": "Riz sauté au curry",
            "riz_sauté_legume": "Riz sauté aux légumes",
            "riz_nature": "Riz nature",
            "riz_gluant": "Riz gluant",
            "legume_sauce_huitre": "Légumes à la sauce huître",
            "tofu_sel_poivre": "Tofu au sel et poivre",
            "salade_papaye": "Salade papaye",
            "salade_nature": "Salade nature",
            "soupe_thai_vegetale": "Soupe thaï végétale",
            "soupe_piquante_vegetale": "Soupe piquante végétale",
            "soupe_nouilles": "Soupe de nouilles",
            "nem_legume": "Nem légume",
            "omelette_foo_yon": "Omelette foo yon",
            "pad_thai_vegetarien": "Pad thaï végétarien",
            "legume_curry_rouge": "Légumes au curry rouge",
            "legume_sauce_aigre_douce": "Légumes à la sauce aigre-douce"
        },
        en: {
            // Interface
            "back": "Back",
            "menu_title": "VEGETARIAN MENU",
            "copyright": "© 2023 Lac de l'Ouest - All rights reserved",
            "entrees": "STARTERS",
            "plats": "MAIN COURSES",
            "vegetarian": "VEGETARIAN",

            // Prices (same format)
            "price_3.20": "€3.20",
            "price_4.20": "€4.20",
            "price_6.80": "€6.80",
            "price_7.80": "€7.80",
            "price_8.95": "€8.95",
            "price_10.80": "€10.80",

            // Vegetarian dishes
            "caquelon_vegetarien": "Vegetarian fondue",
            "germes_soja_sautes": "Stir-fried soybeans",
            "chop_suey_legume": "Vegetable chop suey",
            "nouilles_sautees_nature": "Stir-fried noodles",
            "riz_sauté_curry": "Stir-fried rice with curry",
            "riz_sauté_legume": "Stir-fried rice with vegetables",
            "riz_nature": "Plain rice",
            "riz_gluant": "Sticky rice",
            "legume_sauce_huitre": "Vegetables in oyster sauce",
            "tofu_sel_poivre": "Tofu with salt and pepper",
            "salade_papaye": "Papaya salad",
            "salade_nature": "Plain salad",
            "soupe_thai_vegetale": "Thai vegetable soup",
            "soupe_piquante_vegetale": "Spicy vegetable soup",
            "soupe_nouilles": "Noodle soup",
            "nem_legume": "Vegetable spring rolls",
            "omelette_foo_yon": "Foo Yon omelette",
            "pad_thai_vegetarien": "Vegetarian pad thai",
            "legume_curry_rouge": "Vegetables in red curry",
            "legume_sauce_aigre_douce": "Vegetables in sweet and sour sauce"
        },
        zh: {
            // Interface
            "back": "返回",
            "menu_title": "素食菜单",
            "copyright": "© 2023 西湖 - 版权所有",
            "entrees": "开胃菜",
            "plats": "主菜",
            "vegetarian": "素食",

            // 价格
            "price_3.20": "3.20€",
            "price_4.20": "4.20€",
            "price_6.80": "6.80€",
            "price_7.80": "7.80€",
            "price_8.95": "8.95€",
            "price_10.80": "10.80€",

            // 素食菜肴
            "caquelon_vegetarien": "素食火锅",
            "germes_soja_sautes": "炒豆芽",
            "chop_suey_legume": "炒杂菜",
            "nouilles_sautees_nature": "炒面",
            "riz_sauté_curry": "咖喱炒饭",
            "riz_sauté_legume": "炒素菜饭",
            "riz_nature": "白米饭",
            "riz_gluant": "糯米饭",
            "legume_sauce_huitre": "蚝油炒菜",
            "tofu_sel_poivre": "盐和胡椒豆腐",
            "salade_papaye": "木瓜沙拉",
            "salade_nature": "普通沙拉",
            "soupe_thai_vegetale": "泰式素菜汤",
            "soupe_piquante_vegetale": "辣味素菜汤",
            "soupe_nouilles": "面条汤",
            "nem_legume": "素春卷",
            "omelette_foo_yon": "福永煎蛋",
            "pad_thai_vegetarien": "素食泰式炒粉",
            "legume_curry_rouge": "红咖喱素菜",
            "legume_sauce_aigre_douce": "酸甜素菜"
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
