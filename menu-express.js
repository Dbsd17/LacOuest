document.addEventListener('DOMContentLoaded', function () {
    // Traductions complètes
    const translations = {
        fr: {
            // Interface
            "back": "Retour",
            "entrees": "ENTRÉES AU CHOIX",
            "plats": "PLATS AU CHOIX",
            "accompagnements": "ACCOMPAGNEMENTS",
            "desserts": "DESSERTS AU CHOIX",
            "menu_title": "MENU EXPRESS ASIATIQUE",
            "price": "14.80€",
            "copyright": "© 2023 Lac de l'Ouest - Tous droits réservés",

            // Entrées
            "soupe_poisson_thai": "Soupe poisson thai",
            "salade_poulet_thai": "Salade au poulet thai",
            "soupe_nouilles_poulet": "Soupe nouilles au poulet",
            "soupe_vermicelle_poulet": "Soupe vermicelle de riz au poulet",
            "nem": "Nem",
            "raviolis_crevettes": "Raviolis aux crevettes",
            "bouchee_porc": "Bouchée au porc",

            // Plats
            "crevettes_coriandre": "Crevettes au coriandre menthe",
            "crevettes_aigre_doux": "Crevettes à la sauce aigre douce",
            "poulet_chop_suey": "Poulet chop suey",
            "poulet_pimente": "Poulet pimenté",
            "poisson_aigre_doux": "Filet de poisson sauce aigre douce",
            "porc_curry": "Porc au curry",
            "boeuf_oignons": "Bœuf aux oignons",
            "boeuf_champignons": "Bœuf aux champignons noirs",

            // Accompagnements
            "riz_blanc": "Riz blanc",
            "riz_cantonais": "Riz cantonais",
            "nouilles_nature": "Nouilles sautées natures",

            // Desserts
            "beignet": "Beignet banane ou pomme",
            "nougat": "Nougat",
            "glace": "Glace"
        },
        en: {
            // Interface
            "back": "Back",
            "entrees": "STARTERS TO CHOOSE",
            "plats": "MAIN COURSES TO CHOOSE",
            "accompagnements": "SIDE DISHES",
            "desserts": "DESSERTS TO CHOOSE",
            "menu_title": "ASIAN EXPRESS MENU",
            "price": "€14.80",
            "copyright": "© 2023 Lac de l'Ouest - All rights reserved",

            // Entrées
            "soupe_poisson_thai": "Thai fish soup",
            "salade_poulet_thai": "Thai chicken salad",
            "soupe_nouilles_poulet": "Chicken noodle soup",
            "soupe_vermicelle_poulet": "Chicken rice vermicelli soup",
            "nem": "Spring rolls",
            "raviolis_crevettes": "Shrimp dumplings",
            "bouchee_porc": "Pork puff",

            // Plats
            "crevettes_coriandre": "Shrimp with coriander and mint",
            "crevettes_aigre_doux": "Sweet and sour shrimp",
            "poulet_chop_suey": "Chicken chop suey",
            "poulet_pimente": "Spicy chicken",
            "poisson_aigre_doux": "Sweet and sour fish fillet",
            "porc_curry": "Pork curry",
            "boeuf_oignons": "Beef with onions",
            "boeuf_champignons": "Beef with black mushrooms",

            // Accompagnements
            "riz_blanc": "White rice",
            "riz_cantonais": "Cantonese rice",
            "nouilles_nature": "Stir-fried noodles",

            // Desserts
            "beignet": "Banana or apple fritters",
            "nougat": "Nougat",
            "glace": "Ice cream"
        },
        zh: {
            // Interface
            "back": "返回",
            "entrees": "开胃菜选择",
            "plats": "主菜选择",
            "accompagnements": "配菜",
            "desserts": "甜点选择",
            "menu_title": "亚洲快餐菜单",
            "price": "14.80€",
            "copyright": "© 2023 西湖 - 版权所有",

            // Entrées
            "soupe_poisson_thai": "泰式鱼汤",
            "salade_poulet_thai": "泰式鸡肉沙拉",
            "soupe_nouilles_poulet": "鸡肉面汤",
            "soupe_vermicelle_poulet": "鸡肉米粉汤",
            "nem": "春卷",
            "raviolis_crevettes": "虾饺",
            "bouchee_porc": "猪肉酥",

            // Plats
            "crevettes_coriandre": "香菜薄荷虾",
            "crevettes_aigre_doux": "酸甜虾",
            "poulet_chop_suey": "杂碎鸡",
            "poulet_pimente": "辣味鸡",
            "poisson_aigre_doux": "酸甜鱼片",
            "porc_curry": "咖喱猪肉",
            "boeuf_oignons": "洋葱牛肉",
            "boeuf_champignons": "黑菇牛肉",

            // Accompagnements
            "riz_blanc": "白米饭",
            "riz_cantonais": "广东炒饭",
            "nouilles_nature": "炒面",

            // Desserts
            "beignet": "香蕉或苹果煎饼",
            "nougat": "牛轧糖",
            "glace": "冰淇淋"
        }
    };

    // Fonction de traduction complète
    function translatePage(lang) {
        // Traduction de l'interface
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Traduction du titre du menu et du prix
        const menuTitle = document.querySelector('.menu-title');
        if (menuTitle && translations[lang] && translations[lang]['menu_title']) {
            menuTitle.textContent = translations[lang]['menu_title'];
        }

        const menuPrice = document.querySelector('.menu-price');
        if (menuPrice && translations[lang] && translations[lang]['price']) {
            menuPrice.textContent = translations[lang]['price'];
        }

        // Traduction du bouton de retour
        const backButton = document.querySelector('.back-button');
        if (backButton && translations[lang] && translations[lang]['back']) {
            backButton.textContent = '← ' + translations[lang]['back'];
        }

        // Traduction du copyright
        const copyright = document.querySelector('footer p');
        if (copyright && translations[lang] && translations[lang]['copyright']) {
            copyright.textContent = translations[lang]['copyright'];
        }

        // Traduction des items de menu
        translateMenuItems(lang);

        // Mise à jour du bouton de langue
        document.getElementById('language-btn').textContent = lang.toUpperCase();
        localStorage.setItem('preferredLanguage', lang);
    }

    // Fonction pour traduire les items de menu
    function translateMenuItems(lang) {
        const menuSections = [
            { selector: '.menu-section:nth-child(3) .menu-items li', keys: [
                'soupe_poisson_thai', 'salade_poulet_thai', 'soupe_nouilles_poulet',
                'soupe_vermicelle_poulet', 'nem', 'raviolis_crevettes', 'bouchee_porc'
            ]},
            { selector: '.menu-section:nth-child(4) .menu-items li', keys: [
                'crevettes_coriandre', 'crevettes_aigre_doux', 'poulet_chop_suey',
                'poulet_pimente', 'poisson_aigre_doux', 'porc_curry',
                'boeuf_oignons', 'boeuf_champignons'
            ]},
            { selector: '.menu-section:nth-child(5) .menu-items li', keys: [
                'riz_blanc', 'riz_cantonais', 'nouilles_nature'
            ]},
            { selector: '.menu-section:nth-child(6) .menu-items li', keys: [
                'beignet', 'nougat', 'glace'
            ]}
        ];

        menuSections.forEach(section => {
            const items = document.querySelectorAll(section.selector);
            items.forEach((item, index) => {
                const key = section.keys[index];
                if (translations[lang] && translations[lang][key]) {
                    item.textContent = translations[lang][key];
                }
            });
        });
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