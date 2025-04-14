document.addEventListener('DOMContentLoaded', function () {
    // Traductions complètes
    const translations = {
        fr: {
            // Interface
            "back": "Retour",
            "menu_title": "MENU THAÏ",
            "copyright": "© 2023 Lac de l'Ouest - Tous droits réservés",
            "entrees": "ENTRÉES",
            "plats": "PLATS",
            "sea_food": "FRUITS DE MER",
            "frog_legs": "CUISSES DE GRENOUILLE",
            "poultry": "VOLAILLE",
            "meats": "VIANDES",
            "noodles": "NOUILLES",
            
            // Prix
            "price_6.80": "6.80€",
            "price_7.80": "7.80€",
            "price_8.80": "8.80€",
            "price_9.80": "9.80€",
            "price_10.80": "10.80€",
            "price_11.80": "11.80€",
            "price_12.80": "12.80€",
            "price_13.80": "13.80€",
            "price_14.80": "14.80€",
            "price_15.80": "15.80€",
            "price_17.80": "17.80€",
            
            // Entrées
            "soupe_tom": "Soupe tom",
            "soupe_poisson_citronnelle": "Soupe poisson à la citronelle",
            "soupe_fruit_mer_citronnelle": "Soupe fruit de mer à la citronelle",
            "soupe_poulet_citronnelle": "Soupe de poulet à la citronelle",
            "salade_papaye_crevette": "Salade de papaye au crevette",
            "salade_mangue_crevette": "Salade mangue aux crevettes",
            "salade_fruit_mer_piquante": "Salade fruit de mer à la sauce piquante",
            "salade_boeuf_piquante": "Salade au bœuf à la sauce piquante",
            "nem_mixte": "Variété nem egg roll mixt",
            "nem_poulet": "Nem au poulet",
            "nem_porc": "Nem spring roll porc",
            "rouleau_printemps": "Rouleau printemps spring roll",
            "ravioli_vietnam": "Ravioli vietnam à la vapeur",
            
            // Plats - Fruits de mer
            "crevettes_piment_basilic": "Crevettes sautées pimentées au basilic",
            "crevettes_ail_poivre": "Crevettes sautées à l'ail et poivre",
            "crevettes_menthe_coriandre": "Crevettes sautées à la menthe et la coriandre",
            "crevettes_plaque_chauffante": "Crevettes épicées sur plaque chauffante",
            "seiche_pimentee": "Seiche sautée pimentée",
            "seiche_ail_poivre": "Seiche sautée à l'ail et poivre",
            "saumon_pimente": "Saumon à la sauce pimentée",
            
            // Plats - Cuisses de grenouille
            "grenouille_basilic": "Cuisse de grenouille au basilic",
            "grenouille_plaque_chauffante": "Cuisses de grenouilles épicées sur plaque chauffante",
            "grenouille_ail_poivre": "Cuisses de grenouilles à l'ail et poivre",
            
            // Plats - Volaille
            "canard_coco_piment": "Canard au lait de coco pimenté",
            "poulet_curry_coco": "Poulet au curry vert ou rouge au lait de coco",
            "poulet_basilic": "Poulet sauté au basilic",
            "poulet_ciboulette_gingembre": "Poulet à la ciboulette et au gingembre",
            
            // Plats - Viandes
            "porc_gingembre_ciboulette": "Porc sauté au gingembre et à la ciboulette",
            "porc_ail_poivre": "Porc sauté à l'ail et au poivre",
            "boeuf_basilic": "Bœuf sauté au basilic",
            "boeuf_pimente": "Bœuf sauté pimenté",
            "boeuf_ail_poivre": "Bœuf sauté à l'ail et au poivre",
            "boeuf_plaque_chauffante": "Bœuf épicé sur une plaque chauffante",
            
            // Plats - Nouilles
            "pad_thai": "Pad thai",
            "bobun": "Bobun"
        },
        en: {
            // Interface
            "back": "Back",
            "menu_title": "THAI MENU",
            "copyright": "© 2023 Lac de l'Ouest - All rights reserved",
            "entrees": "STARTERS",
            "plats": "MAIN COURSES",
            "sea_food": "SEA FOOD",
            "frog_legs": "FROG LEGS",
            "poultry": "POULTRY",
            "meats": "MEATS",
            "noodles": "NOODLES",
            
            // Prices (same format)
            "price_6.80": "€6.80",
            "price_7.80": "€7.80",
            "price_8.80": "€8.80",
            "price_9.80": "€9.80",
            "price_10.80": "€10.80",
            "price_11.80": "€11.80",
            "price_12.80": "€12.80",
            "price_13.80": "€13.80",
            "price_14.80": "€14.80",
            "price_15.80": "€15.80",
            "price_17.80": "€17.80",
            
            // Starters
            "soupe_tom": "Tom yum soup",
            "soupe_poisson_citronnelle": "Lemongrass fish soup",
            "soupe_fruit_mer_citronnelle": "Lemongrass seafood soup",
            "soupe_poulet_citronnelle": "Lemongrass chicken soup",
            "salade_papaye_crevette": "Papaya salad with shrimp",
            "salade_mangue_crevette": "Mango salad with shrimp",
            "salade_fruit_mer_piquante": "Spicy seafood salad",
            "salade_boeuf_piquante": "Spicy beef salad",
            "nem_mixte": "Mixed egg rolls",
            "nem_poulet": "Chicken spring rolls",
            "nem_porc": "Pork spring rolls",
            "rouleau_printemps": "Fresh spring rolls",
            "ravioli_vietnam": "Vietnamese steamed dumplings",
            
            // Main courses - Sea food
            "crevettes_piment_basilic": "Spicy basil shrimp",
            "crevettes_ail_poivre": "Garlic pepper shrimp",
            "crevettes_menthe_coriandre": "Mint and coriander shrimp",
            "crevettes_plaque_chauffante": "Spicy sizzling shrimp",
            "seiche_pimentee": "Spicy stir-fried cuttlefish",
            "seiche_ail_poivre": "Garlic pepper cuttlefish",
            "saumon_pimente": "Spicy salmon",
            
            // Main courses - Frog legs
            "grenouille_basilic": "Basil frog legs",
            "grenouille_plaque_chauffante": "Spicy sizzling frog legs",
            "grenouille_ail_poivre": "Garlic pepper frog legs",
            
            // Main courses - Poultry
            "canard_coco_piment": "Spicy coconut duck",
            "poulet_curry_coco": "Green or red curry chicken with coconut milk",
            "poulet_basilic": "Basil chicken",
            "poulet_ciboulette_gingembre": "Chicken with chives and ginger",
            
            // Main courses - Meats
            "porc_gingembre_ciboulette": "Pork with ginger and chives",
            "porc_ail_poivre": "Garlic pepper pork",
            "boeuf_basilic": "Basil beef",
            "boeuf_pimente": "Spicy beef",
            "boeuf_ail_poivre": "Garlic pepper beef",
            "boeuf_plaque_chauffante": "Spicy sizzling beef",
            
            // Main courses - Noodles
            "pad_thai": "Pad thai",
            "bobun": "Rice vermicelli salad"
        },
        zh: {
            // Interface
            "back": "返回",
            "menu_title": "泰国菜单",
            "copyright": "© 2023 西湖 - 版权所有",
            "entrees": "开胃菜",
            "plats": "主菜",
            "sea_food": "海鲜",
            "frog_legs": "青蛙腿",
            "poultry": "家禽",
            "meats": "肉类",
            "noodles": "面条",
            
            // 价格
            "price_6.80": "6.80€",
            "price_7.80": "7.80€",
            "price_8.80": "8.80€",
            "price_9.80": "9.80€",
            "price_10.80": "10.80€",
            "price_11.80": "11.80€",
            "price_12.80": "12.80€",
            "price_13.80": "13.80€",
            "price_14.80": "14.80€",
            "price_15.80": "15.80€",
            "price_17.80": "17.80€",
            
            // 开胃菜
            "soupe_tom": "冬阴功汤",
            "soupe_poisson_citronnelle": "香茅鱼汤",
            "soupe_fruit_mer_citronnelle": "香茅海鲜汤",
            "soupe_poulet_citronnelle": "香茅鸡汤",
            "salade_papaye_crevette": "青木瓜虾沙拉",
            "salade_mangue_crevette": "芒果虾沙拉",
            "salade_fruit_mer_piquante": "辣味海鲜沙拉",
            "salade_boeuf_piquante": "辣味牛肉沙拉",
            "nem_mixte": "混合炸春卷",
            "nem_poulet": "鸡肉春卷",
            "nem_porc": "猪肉春卷",
            "rouleau_printemps": "鲜春卷",
            "ravioli_vietnam": "越南蒸饺",
            
            // 主菜 - 海鲜
            "crevettes_piment_basilic": "辣味罗勒虾",
            "crevettes_ail_poivre": "蒜椒虾",
            "crevettes_menthe_coriandre": "薄荷香菜虾",
            "crevettes_plaque_chauffante": "铁板辣虾",
            "seiche_pimentee": "辣炒墨鱼",
            "seiche_ail_poivre": "蒜椒墨鱼",
            "saumon_pimente": "辣味三文鱼",
            
            // 主菜 - 青蛙腿
            "grenouille_basilic": "罗勒青蛙腿",
            "grenouille_plaque_chauffante": "铁板辣青蛙腿",
            "grenouille_ail_poivre": "蒜椒青蛙腿",
            
            // 主菜 - 家禽
            "canard_coco_piment": "辣味椰奶鸭",
            "poulet_curry_coco": "绿咖喱或红咖喱椰奶鸡",
            "poulet_basilic": "罗勒鸡",
            "poulet_ciboulette_gingembre": "韭菜姜鸡",
            
            // 主菜 - 肉类
            "porc_gingembre_ciboulette": "姜葱猪肉",
            "porc_ail_poivre": "蒜椒猪肉",
            "boeuf_basilic": "罗勒牛肉",
            "boeuf_pimente": "辣味牛肉",
            "boeuf_ail_poivre": "蒜椒牛肉",
            "boeuf_plaque_chauffante": "铁板辣牛肉",
            
            // 主菜 - 面条
            "pad_thai": "泰式炒粉",
            "bobun": "越南米粉沙拉"
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