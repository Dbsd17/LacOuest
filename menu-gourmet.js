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
            "menu_title": "MENU GOURMET ASIATIQUE",
            "price": "19.80€",
            "copyright": "© 2023 Lac de l'Ouest - Tous droits réservés",

            // Entrées
            "soupe_tomyam": "Soupe tomyan crevettes",
            "soupe_poulet": "Soupe au poulet",
            "salade_soja_thai": "Salade au soja thai",
            "nem": "Nem",
            "soupe_pekinois": "Soupe pékinois",
            "vapeur_mix": "Vapeur mix",

            // Plats
            "crevette_pimentee": "Crevette pimentée thai",
            "boeuf_basilic": "Bœuf au basilic",
            "poulet_curry": "Poulet au curry vert ou rouge",
            "crevette_legume": "Crevettes au légume",
            "canard_laque": "Canard laqué",
            "boeuf_poivron": "Bœuf au poivron",
            "poulet_citronnelle": "Poulet à la citronnelle",

            // Accompagnements
            "riz_nature": "Riz nature",
            "riz_cantonais": "Riz cantonais",
            "nouilles_sautees": "Nouilles sautées",

            // Desserts
            "litchi_sirop": "Litchi au sirop",
            "beignet": "Beignet banane ou pomme",
            "glace_boules": "Glace aux boules",
            "nougat": "Nougat"
        },
        en: {
            // Interface
            "back": "Back",
            "entrees": "STARTERS TO CHOOSE",
            "plats": "MAIN COURSES TO CHOOSE",
            "accompagnements": "SIDE DISHES",
            "desserts": "DESSERTS TO CHOOSE",
            "menu_title": "ASIAN GOURMET MENU",
            "price": "€19.80",
            "copyright": "© 2023 Lac de l'Ouest - All rights reserved",

            // Entrées
            "soupe_tomyam": "Tom yum shrimp soup",
            "soupe_poulet": "Chicken soup",
            "salade_soja_thai": "Thai soy salad",
            "nem": "Spring rolls",
            "soupe_pekinois": "Peking soup",
            "vapeur_mix": "Mixed steamed dumplings",

            // Plats
            "crevette_pimentee": "Thai spicy shrimp",
            "boeuf_basilic": "Beef with basil",
            "poulet_curry": "Chicken with green or red curry",
            "crevette_legume": "Shrimp with vegetables",
            "canard_laque": "Peking duck",
            "boeuf_poivron": "Beef with bell pepper",
            "poulet_citronnelle": "Lemongrass chicken",

            // Accompagnements
            "riz_nature": "Plain rice",
            "riz_cantonais": "Cantonese rice",
            "nouilles_sautees": "Stir-fried noodles",

            // Desserts
            "litchi_sirop": "Lychee in syrup",
            "beignet": "Banana or apple fritters",
            "glace_boules": "Ice cream scoops",
            "nougat": "Nougat"
        },
        zh: {
            // Interface
            "back": "返回",
            "entrees": "开胃菜选择",
            "plats": "主菜选择",
            "accompagnements": "配菜",
            "desserts": "甜点选择",
            "menu_title": "亚洲美食菜单",
            "price": "19.80€",
            "copyright": "© 2023 西湖 - 版权所有",

            // Entrées
            "soupe_tomyam": "冬阴功虾汤",
            "soupe_poulet": "鸡肉汤",
            "salade_soja_thai": "泰式大豆沙拉",
            "nem": "春卷",
            "soupe_pekinois": "北京汤",
            "vapeur_mix": "混合蒸饺",

            // Plats
            "crevette_pimentee": "泰式辣虾",
            "boeuf_basilic": "罗勒牛肉",
            "poulet_curry": "绿咖喱或红咖喱鸡",
            "crevette_legume": "蔬菜虾仁",
            "canard_laque": "北京烤鸭",
            "boeuf_poivron": "甜椒牛肉",
            "poulet_citronnelle": "香茅鸡",

            // Accompagnements
            "riz_nature": "白米饭",
            "riz_cantonais": "广东炒饭",
            "nouilles_sautees": "炒面",

            // Desserts
            "litchi_sirop": "荔枝糖水",
            "beignet": "香蕉或苹果煎饼",
            "glace_boules": "冰淇淋球",
            "nougat": "牛轧糖"
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
                'soupe_tomyam', 'soupe_poulet', 'salade_soja_thai',
                'nem', 'soupe_pekinois', 'vapeur_mix'
            ]},
            { selector: '.menu-section:nth-child(4) .menu-items li', keys: [
                'crevette_pimentee', 'boeuf_basilic', 'poulet_curry',
                'crevette_legume', 'canard_laque', 'boeuf_poivron',
                'poulet_citronnelle'
            ]},
            { selector: '.menu-section:nth-child(5) .menu-items li', keys: [
                'riz_nature', 'riz_cantonais', 'nouilles_sautees'
            ]},
            { selector: '.menu-section:nth-child(6) .menu-items li', keys: [
                'litchi_sirop', 'beignet', 'glace_boules', 'nougat'
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