document.addEventListener('DOMContentLoaded', function() {
    
    // Menu burger
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Changement du header au scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Textes traduits complets
    const translations = {
        fr: {
            // Navigation
            "accueil": "Accueil",
            "menu": "Menu",
            "galerie": "Galerie",
            "apropos": "À propos",
            "contact": "Contact",
            
            // Hero section
            "welcome": "Bienvenue au Lac de l'Ouest",
            "slogan": "Une expérience culinaire asiatique authentique au cœur de Paris",
            "reserve": "Réserver une table",
            "opening_hours": "Ouvert tous les jours 11h-23h30",
            "closed_wed": "(Fermé le mercredi)",
            
            // Menu section
            "our_menu": "Notre Menu",
            "entrees": "Entrées",
            "plats": "Plats principaux",
            "desserts": "Desserts",
            "boissons": "Boissons",
            
            // About section
            "about_title": "Bienvenue au Lac de l'Ouest",
            "about_p1": "Fondée en 1962, la maison Lac de l'Ouest est une institution culinaire qui allie tradition et innovation. Situé dans un cadre chaleureux et accueillant, notre restaurant vous invite à un voyage gustatif à travers l'Asie.",
            "history_title": "Une Histoire de Saveurs",
            "history_p": "Depuis plus de six décennies, nous préservons l'essence des recettes asiatiques tout en les adaptant aux goûts contemporains. Chaque plat est préparé avec des ingrédients frais et de qualité.",
            "cuisine_title": "Une Cuisine Raffinée",
            "cuisine_p": "Notre menu varié vous propose une sélection de plats traditionnels et modernes, préparés par nos chefs passionnés.",
            "atmosphere_title": "Un Cadre Convivial",
            "atmosphere_p": "Que vous veniez en famille, entre amis ou pour un dîner romantique, le Lac de l'Ouest vous accueille dans une ambiance conviviale et chaleureuse.",
            "join_us": "Rejoignez-nous",
            "join_p": "Venez découvrir le Lac de l'Ouest et laissez-vous séduire par nos saveurs uniques.",
            "award1": "Meilleur restaurant asiatique 2023",
            "award2": "Certifié Authentic Asian Cuisine",
            
            // Contact section
            "information": "Informations",
            "address": "7 Rue de la Harpe, 75005 Paris (Saint-Michel)",
            "book_table": "Réserver une table",
            "your_name": "Votre nom",
            "your_email": "Votre email",
            "your_phone": "Votre téléphone",
            "number_guests": "Nombre de personnes",
            "mon_tue": "Lundi - Mardi: 11h - 23h30",
            "wed": "Mercredi: Fermé",
            "thu_sun": "Jeudi - Dimanche: 11h - 23h30",
            
            // Footer
            "quick_links": "Liens rapides",
            "newsletter": "Newsletter",
            "footer_desc": "Cuisine asiatique authentique",
            "rights": "Tous droits réservés."
        },
        en: {
            "accueil": "Home",
            "menu": "Menu",
            "galerie": "Gallery",
            "apropos": "About",
            "contact": "Contact",
            "welcome": "Welcome to West Lake",
            "slogan": "Authentic Asian culinary experience in the heart of Paris",
            "reserve": "Book a table",
            "opening_hours": "Open daily 11am-11:30pm",
            "closed_wed": "(Closed on Wednesday)",
            "our_menu": "Our Menu",
            "entrees": "Starters",
            "plats": "Main Courses",
            "desserts": "Desserts",
            "boissons": "Drinks",
            "about_title": "Welcome to West Lake",
            "about_p1": "Founded in 1962, West Lake is a culinary institution that combines tradition and innovation. Located in a warm and welcoming setting, our restaurant invites you on a gastronomic journey through Asia.",
            "history_title": "A Flavorful History",
            "history_p": "For over six decades, we have preserved the essence of Asian recipes while adapting them to contemporary tastes. Each dish is prepared with fresh, quality ingredients.",
            "cuisine_title": "Refined Cuisine",
            "cuisine_p": "Our varied menu offers a selection of traditional and modern dishes, prepared by our passionate chefs.",
            "atmosphere_title": "A Friendly Atmosphere",
            "atmosphere_p": "Whether you come with family, friends or for a romantic dinner, West Lake welcomes you in a warm and friendly atmosphere.",
            "join_us": "Join Us",
            "join_p": "Come discover West Lake and let yourself be seduced by our unique flavors.",
            "award1": "Best Asian Restaurant 2023",
            "award2": "Certified Authentic Asian Cuisine",
            "information": "Information",
            "address": "7 Rue de la Harpe, 75005 Paris (Saint-Michel)",
            "book_table": "Book a table",
            "your_name": "Your name",
            "your_email": "Your email",
            "your_phone": "Your phone",
            "number_guests": "Number of guests",
            "mon_tue": "Monday - Tuesday: 11am - 11:30pm",
            "wed": "Wednesday: Closed",
            "thu_sun": "Thursday - Sunday: 11am - 11:30pm",
            "quick_links": "Quick Links",
            "newsletter": "Newsletter",
            "footer_desc": "Authentic Asian cuisine",
            "rights": "All rights reserved."
        },
        zh: {
            "accueil": "首页",
            "menu": "菜单",
            "galerie": "画廊",
            "apropos": "关于我们",
            "contact": "联系方式",
            "welcome": "欢迎来到西湖餐厅",
            "slogan": "巴黎市中心的正宗亚洲美食体验",
            "reserve": "预订餐桌",
            "opening_hours": "每天营业 11:00-23:30",
            "closed_wed": "(周三休息)",
            "our_menu": "我们的菜单",
            "entrees": "前菜",
            "plats": "主菜",
            "desserts": "甜点",
            "boissons": "饮料",
            "about_title": "欢迎来到西湖餐厅",
            "about_p1": "西湖餐厅创立于1962年，是一家融合传统与创新的美食机构。在我们温馨宜人的环境中，邀请您开启一场穿越亚洲的美食之旅。",
            "history_title": "风味历史",
            "history_p": "六十多年来，我们既保留了亚洲食谱的精髓，又使其适应当代口味。每道菜都采用新鲜优质的食材精心烹制。",
            "cuisine_title": "精致美食",
            "cuisine_p": "我们多样化的菜单提供由我们热情的主厨准备的传统和现代菜肴精选。",
            "atmosphere_title": "友好氛围",
            "atmosphere_p": "无论您是与家人、朋友一起来，还是享受浪漫晚餐，西湖餐厅都以温馨友好的氛围欢迎您。",
            "join_us": "加入我们",
            "join_p": "来发现西湖餐厅，让我们独特的风味征服您的味蕾。",
            "award1": "2023最佳亚洲餐厅",
            "award2": "认证正宗亚洲美食",
            "information": "信息",
            "address": "巴黎第五区哈普街7号(圣米歇尔)",
            "book_table": "预订餐桌",
            "your_name": "您的姓名",
            "your_email": "您的邮箱",
            "your_phone": "您的电话",
            "number_guests": "人数",
            "mon_tue": "周一至周二: 11:00-23:30",
            "wed": "周三: 休息",
            "thu_sun": "周四至周日: 11:00-23:30",
            "quick_links": "快速链接",
            "newsletter": "通讯订阅",
            "footer_desc": "正宗亚洲美食",
            "rights": "版权所有。"
        }
    };

    // Fonction de traduction complète
    function translatePage(lang) {
        // Traduire le contenu textuel
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Traduire les placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });

         // Mettre à jour le bouton principal
         const langBtn = document.getElementById('language-btn');
         if (langBtn) langBtn.textContent = lang.toUpperCase();
 
         // Sauvegarder la préférence
         localStorage.setItem('preferredLanguage', lang);
 
         // Changer l'attribut de langue
         document.documentElement.lang = lang;
 
         // Gérer l'état actif des boutons
         document.querySelectorAll('.language-dropdown a, .lang-btn').forEach(link => {
             link.classList.remove('active-fr', 'active-en', 'active-zh');
             if (link.getAttribute('data-lang') === lang) {
                 link.classList.add('active-' + lang);
             }
         });
     }
 
     // Clics sur les boutons de langue
     document.querySelectorAll('.language-dropdown a, .lang-btn').forEach(link => {
         link.addEventListener('click', (e) => {
             e.preventDefault();
             const selectedLang = link.getAttribute('data-lang');
             if (selectedLang) translatePage(selectedLang);
         });
     });
 
     // Langue sauvegardée ou par défaut
     const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
     translatePage(savedLang);
 });

 <script>
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const message = document.getElementById('form-message');
    const lang = document.documentElement.lang || 'fr';

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            message.textContent = translateFormMessage('success', lang);
            message.style.display = "block";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = translateFormMessage('error', lang);
            message.style.display = "block";
            message.style.color = "red";
        }
    }).catch(error => {
        message.textContent = translateFormMessage('network', lang);
        message.style.display = "block";
        message.style.color = "red";
    });
});

function translateFormMessage(type, lang) {
    const messages = {
        fr: {
            success: "Votre réservation a été envoyée avec succès.",
            error: "Une erreur est survenue. Veuillez réessayer.",
            network: "Erreur de connexion. Veuillez vérifier votre réseau."
        },
        en: {
            success: "Your reservation has been sent successfully.",
            error: "An error occurred. Please try again.",
            network: "Network error. Please check your connection."
        },
        zh: {
            success: "您的预订已成功发送。",
            error: "发生错误。请重试。",
            network: "网络错误。请检查您的连接。"
        }
    };
    return messages[lang]?.[type] || messages["fr"][type];
}
</script>
