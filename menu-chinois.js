document.addEventListener('DOMContentLoaded', function () {
    // Traductions complètes pour le menu chinois
    const translations = {
        fr: {
            // Interface
            "back": "Retour",
            "menu_title": "MENU CHINOIS",
            "copyright": "© 2023 Lac de l'Ouest - Tous droits réservés",
            "entrees": "ENTRÉES",
            "plats": "PLATS",
            "sea_food": "FRUITS DE MER",
            "poultry": "VOLAILLE",
            "meats": "VIANDES",
            "noodles": "RIZ / NOUILLES",

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
            "price_16.50": "16.50€",
            "price_17.80": "17.80€",
            "price_18.80": "18.80€",

            // Entrées
            "soupe_crabe_asperge": "Soupe au crabe et à l'asperge",
            "soupe_vermicelle_poulet": "Soupe vermicelle au poulet",
            "soupe_porc_champignons": "Soupe porc aux champignons",
            "soupe_mais_poulet": "Soupe de maïs au poulet",
            "soupe_tomate_oeuf": "Soupe de tomate au œuf",
            "soupe_noodle_poulet": "Soupe de nouille au poulet",
            "soupe_pekin": "Soupe pékinois",
            "grande_soupe_ravioli": "Grande soupe ravioli",
            "grande_soupe_ravioli_noodle": "Grande soupe ravioli nouille",
            "soupe_riz_crevette": "Soupe pâte de riz aux crevettes",
            "soupe_pho": "Soupe pho",
            "nouilles_canard": "Nouilles au canard",
            "soupe_noodle_porc_grille": "Soupe nouilles au porc grillé",
            "omelette_crevettes": "Omelette aux crevettes",
            "salade_poulet": "Salade au poulet",
            "salade_crevettes": "Salade aux crevettes",
            "samoussa": "Samoussa",
            "assortiment_vapeur": "Assortiment à la vapeur",
            "ravioli_crevettes": "Ravioli aux crevettes",
            "bouchees_porc": "Bouchées au porc",
            "ravioli_pekin_porc": "Ravioli pékinois au porc",

            // Plats - Fruits de mer
            "crevette_imperiale_pimentee": "Crevette impériale pimentée",
            "crevette_soja_noir": "Crevette au graine de soja noir",
            "crevette_beignet": "Crevette en beignet",
            "crevette_chop_suey": "Crevette chop suey",
            "crevette_curry": "Crevette au curry",
            "crevette_aigre_douce": "Crevette à la sauce aigre douce",
            "crevette_noix_cajou": "Crevette au noix de cajou",
            "crevette_sel_poivre": "Crevette au sel et poivre",
            "beignet_poisson_aigre_douce": "Beignet poisson à la sauce aigre douce",
            "dorade_gingembre": "Dorade entière au gingembre",
            "dorade_imperiale_pimentee": "Dorade entière impériale pimentée",
            "cuisses_grenouilles_gingembre": "Cuisses de grenouilles au gingembre",
            "cuisses_grenouilles_soja_noir": "Cuisses de grenouilles au soja noir",
            "coquille_st_jacques_haricot_noir": "Coquille st jacques au haricot noir",
            "coquille_st_jacques_sauce_piquante": "Coquille st jacques à la sauce piquante",

            // Plats - Volaille
            "poulet_citronelle": "Poulet citronelle",
            "brochette_poulet": "Brochette de poulet",
            "poulet_noix_cajou": "Poulet aux noix de cajou",
            "poulet_poivron": "Poulet au poivron",
            "poulet_curry": "Poulet au curry",
            "poulet_ananas": "Poulet aux ananas",
            "poulet_caramel": "Poulet au caramel",
            "poulet_chop_suey": "Poulet chop suey",
            "poulet_imperial_pimente": "Poulet impérial pimenté",
            "poulet_champignon_noir": "Poulet au champignon noir",
            "poulet_citron": "Poulet au citron",
            "canard_laque": "Canard laque",
            "canard_ananas": "Canard aux ananas",
            "canard_champignon_parfume": "Canard au champignon parfumé",
            "canard_laque_plaque_chauffante": "Canard laque sur plaque chauffante",

            // Plats - Viandes
            "pate_soja_porc_pimente": "Pâte de soja au porc pimenté",
            "travers_porc_sel_poivre": "Travers de porc au sel et poivre",
            "travers_porc_grille": "Travers de porc grillé",
            "porc_aigre_douce": "Porc à la sauce aigre douce",
            "porc_grille": "Porc grillé",
            "porc_curry": "Porc au curry",
            "porc_soja_noir": "Porc au graine de soja noir",
            "porc_champignon_noir": "Porc au champignon noir",
            "boeuf_oignons": "Bœuf aux oignons",
            "boeuf_curry": "Bœuf aux curry",
            "boeuf_chop_suey": "Bœuf chop suey",
            "boeuf_poivrons": "Bœuf aux poivrons",
            "boeuf_champignon_noir": "Bœuf au champignon noir",
            "boeuf_sate": "Bœuf au sate",
            "boeuf_pimente": "Bœuf pimenté",

            // Plats - Nouilles / Riz
            "caquelon_fruits_mer": "Caquelon aux fruits de mer",
            "caquelon_gambas": "Caquelon aux gambas",
            "caquelon_travers_porc": "Caquelon aux travers de porc",
            "nouilles_poulet": "Nouilles sautées au poulet",
            "vermicelle_riz_porc": "Vermicelle de riz au porc",
            "nouilles_fruits_mer": "Nouilles au fruit de mer",
            "riz_cantonais": "Riz cantonais",
            "riz_saute_fruits_mer": "Riz sauté aux fruits de mer"
        },
        en: {
            // Interface
            "back": "Back",
            "menu_title": "CHINESE MENU",
            "copyright": "© 2023 Lac de l'Ouest - All rights reserved",
            "entrees": "STARTERS",
            "plats": "MAIN DISHES",
            "sea_food": "SEAFOOD",
            "poultry": "POULTRY",
            "meats": "MEATS",
            "noodles": "NOODLES/RICE",

            // Prices
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
            "price_16.50": "€16.50",
            "price_17.80": "€17.80",
            "price_18.80": "€18.80",

            // Starters
            "soupe_crabe_asperge": "Crab and asparagus soup",
            "soupe_vermicelle_poulet": "Chicken vermicelli soup",
            "soupe_porc_champignons": "Pork mushroom soup",
            "soupe_mais_poulet": "Corn chicken soup",
            "soupe_tomate_oeuf": "Tomato egg soup",
            "soupe_noodle_poulet": "Chicken noodle soup",
            "soupe_pekin": "Peking soup",
            "grande_soupe_ravioli": "Large ravioli soup",
            "grande_soupe_ravioli_noodle": "Large ravioli noodle soup",
            "soupe_riz_crevette": "Shrimp rice noodle soup",
            "soupe_pho": "Pho soup",
            "nouilles_canard": "Duck noodles",
            "soupe_noodle_porc_grille": "Grilled pork noodle soup",
            "omelette_crevettes": "Shrimp omelette",
            "salade_poulet": "Chicken salad",
            "salade_crevettes": "Shrimp salad",
            "samoussa": "Samosa",
            "assortiment_vapeur": "Steamed platter",
            "ravioli_crevettes": "Shrimp ravioli",
            "bouchees_porc": "Pork dumplings",
            "ravioli_pekin_porc": "Peking pork ravioli",

            // Main Dishes - Seafood
            "crevette_imperiale_pimentee": "Spicy imperial shrimp",
            "crevette_soja_noir": "Black soy shrimp",
            "crevette_beignet": "Shrimp fritters",
            "crevette_chop_suey": "Shrimp chop suey",
            "crevette_curry": "Curry shrimp",
            "crevette_aigre_douce": "Sweet and sour shrimp",
            "crevette_noix_cajou": "Cashew shrimp",
            "crevette_sel_poivre": "Salt and pepper shrimp",
            "beignet_poisson_aigre_douce": "Sweet and sour fish fritters",
            "dorade_gingembre": "Ginger whole snapper",
            "dorade_imperiale_pimentee": "Spicy imperial snapper",
            "cuisses_grenouilles_gingembre": "Ginger frog legs",
            "cuisses_grenouilles_soja_noir": "Black soy frog legs",
            "coquille_st_jacques_haricot_noir": "Scallops with black beans",
            "coquille_st_jacques_sauce_piquante": "Scallops with spicy sauce",

            // Main Dishes - Poultry
            "poulet_citronelle": "Lemongrass chicken",
            "brochette_poulet": "Chicken skewers",
            "poulet_noix_cajou": "Cashew chicken",
            "poulet_poivron": "Bell pepper chicken",
            "poulet_curry": "Curry chicken",
            "poulet_ananas": "Pineapple chicken",
            "poulet_caramel": "Caramel chicken",
            "poulet_chop_suey": "Chicken chop suey",
            "poulet_imperial_pimente": "Spicy imperial chicken",
            "poulet_champignon_noir": "Black mushroom chicken",
            "poulet_citron": "Lemon chicken",
            "canard_laque": "Peking duck",
            "canard_ananas": "Pineapple duck",
            "canard_champignon_parfume": "Fragrant mushroom duck",
            "canard_laque_plaque_chauffante": "Peking duck on sizzling plate",

            // Main Dishes - Meats
            "pate_soja_porc_pimente": "Spicy soy paste pork",
            "travers_porc_sel_poivre": "Salt and pepper pork ribs",
            "travers_porc_grille": "Grilled pork ribs",
            "porc_aigre_douce": "Sweet and sour pork",
            "porc_grille": "Grilled pork",
            "porc_curry": "Curry pork",
            "porc_soja_noir": "Black soy pork",
            "porc_champignon_noir": "Black mushroom pork",
            "boeuf_oignons": "Beef with onions",
            "boeuf_curry": "Curry beef",
            "boeuf_chop_suey": "Beef chop suey",
            "boeuf_poivrons": "Beef with peppers",
            "boeuf_champignon_noir": "Beef with black mushrooms",
            "boeuf_sate": "Satay beef",
            "boeuf_pimente": "Spicy beef",

            // Main Dishes - Noodles / Rice
            "caquelon_fruits_mer": "Seafood fondue",
            "caquelon_gambas": "Prawn fondue",
            "caquelon_travers_porc": "Pork ribs fondue",
            "nouilles_poulet": "Chicken stir-fried noodles",
            "vermicelle_riz_porc": "Pork rice vermicelli",
            "nouilles_fruits_mer": "Seafood noodles",
            "riz_cantonais": "Cantonese rice",
            "riz_saute_fruits_mer": "Seafood fried rice"
        }
    };

    // Fonction pour changer la langue du menu
    function updateMenu(language) {
        document.querySelector("#menu-title").textContent = translations[language].menu_title;
        document.querySelector("#entrees").textContent = translations[language].entrees;
        document.querySelector("#plats").textContent = translations[language].plats;
        document.querySelector("#sea_food").textContent = translations[language].sea_food;
        document.querySelector("#poultry").textContent = translations[language].poultry;
        document.querySelector("#meats").textContent = translations[language].meats;
        document.querySelector("#noodles").textContent = translations[language].noodles;
        document.querySelector("#back").textContent = translations[language].back;
        document.querySelector("#copyright").textContent = translations[language].copyright;

        // Mettez à jour tous les éléments du menu
        document.querySelector("#soupe-crabe-asperge").textContent = translations[language].soupe_crabe_asperge;
        document.querySelector("#soupe-vermicelle-poulet").textContent = translations[language].soupe_vermicelle_poulet;
        document.querySelector("#soupe-porc-champignons").textContent = translations[language].soupe_porc_champignons;
        document.querySelector("#soupe-mais-poulet").textContent = translations[language].soupe_mais_poulet;
        // Ajoutez ici toutes les autres entrées...
    }
    
    // Initialiser la langue par défaut (française)
    updateMenu('fr');

    // Pour la démo, ajouter une fonctionnalité pour changer de langue
    document.querySelector("#change-to-en").addEventListener("click", function () {
        updateMenu('en');
    });
});
