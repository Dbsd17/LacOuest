document.addEventListener('DOMContentLoaded', function () {
    // Traductions complètes
    const translations = {
        fr: {
            // Interface
            "back": "Retour",
            "our_menu": "Notre Carte",
            "copyright": "© 2023 Lac de l'Ouest - Tous droits réservés",
            
            // Cartes catégories
            "thai_cuisine": "Cuisine Thaïlandaise",
            "thai_description": "Découvrez nos authentiques plats thaïlandais préparés avec des ingrédients frais et des épices traditionnelles. Une explosion de saveurs entre sucré, salé, acide et épicé.",
            "view_thai": "Voir la carte Thaï",
            
            "chinese_cuisine": "Cuisine Chinoise",
            "chinese_description": "Nos spécialités chinoises allient tradition et modernité. Des recettes ancestrales revisitées avec des produits de qualité pour une expérience culinaire raffinée.",
            "view_chinese": "Voir la carte Chinoise",
            
            "vegetarian_cuisine": "Plats Végétariens",
            "vegetarian_description": "Une sélection de plats végétariens savoureux et équilibrés, préparés avec des légumes frais et des protéines végétales pour satisfaire tous les palais.",
            "view_vegetarian": "Voir la carte Végétarienne",
            
            "garnis_cuisine": "Plats Garnis",
            "garnis_description": "Un plat garni est un plat principal complet, accompagné de riz, nouilles ou légumes, offrant un repas équilibré en une seule assiette. Nos plats garnis combinent viandes et légumes frais avec des accompagnements savoureux, pour une expérience culinaire authentique et équilibrée.",
            "view_garnis": "Voir la carte des plats garnis"
        },
        en: {
            // Interface
            "back": "Back",
            "our_menu": "Our Menu",
            "copyright": "© 2023 Lac de l'Ouest - All rights reserved",
            
            // Cartes catégories
            "thai_cuisine": "Thai Cuisine",
            "thai_description": "Discover our authentic Thai dishes prepared with fresh ingredients and traditional spices. An explosion of flavors between sweet, salty, sour and spicy.",
            "view_thai": "View Thai Menu",
            
            "chinese_cuisine": "Chinese Cuisine",
            "chinese_description": "Our Chinese specialties combine tradition and modernity. Ancestral recipes revisited with quality products for a refined culinary experience.",
            "view_chinese": "View Chinese Menu",
            
            "vegetarian_cuisine": "Vegetarian Dishes",
            "vegetarian_description": "A selection of tasty and balanced vegetarian dishes, prepared with fresh vegetables and plant proteins to satisfy all palates.",
            "view_vegetarian": "View Vegetarian Menu",
            
            "garnis_cuisine": "Main Courses",
            "garnis_description": "A 'plat garni' is a complete main course served with rice, noodles, or vegetables, offering a balanced meal on a single plate. Our garnished dishes combine fresh meat and vegetables with tasty sides, for an authentic and balanced culinary experience.",
            "view_garnis": "View Garnished Menu"
        },
        zh: {
            // Interface
            "back": "返回",
            "our_menu": "我们的菜单",
            "copyright": "© 2023 西湖 - 版权所有",
            
            // Cartes catégories
            "thai_cuisine": "泰国菜",
            "thai_description": "发现我们正宗的泰国菜，采用新鲜食材和传统香料烹制。甜、咸、酸、辣的味觉爆炸。",
            "view_thai": "查看泰国菜单",
            
            "chinese_cuisine": "中国菜",
            "chinese_description": "我们的中国特色菜融合传统与现代。用优质产品重新诠释古老食谱，带来精致的烹饪体验。",
            "view_chinese": "查看中国菜单",
            
            "vegetarian_cuisine": "素食菜肴",
            "vegetarian_description": "精选美味均衡的素食菜肴，采用新鲜蔬菜和植物蛋白烹制，满足各种口味。",
            "view_vegetarian": "查看素食菜单",
            
            "garnis_cuisine": "主食拼盘",
            "garnis_description": "“主食拼盘”是包含主菜和米饭、面条或蔬菜的完整餐点，在一盘中呈现均衡营养。我们的拼盘融合了新鲜肉类和蔬菜，再配上可口的配菜，带来地道且均衡的美食体验。",
            "view_garnis": "查看主食拼盘"
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

        // Mise à jour du bouton de langue
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
