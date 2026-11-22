document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = burgerBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Translations dictionary
    const translations = {
        uk: {
            brand_name: "Кав'ярня на Зарванській",
            nav_home: "Головна",
            nav_about: "Про нас",
            nav_services: "Меню та послуги",
            nav_gallery: "Галерея",
            nav_contacts: "Контакти",
            hero_badge: "Історичний центр міста",
            hero_title: "Атмосферна Кав'ярня на Зарванській у Кам'янці-Подільському",
            hero_subtitle: "Культове та затишне місце з особливою атмосферою в серці старого міста.",
            btn_menu: "Наше меню",
            btn_contacts: "Знайти нас",
            features_title: "Чому обирають нас",
            features_subtitle: "Відчуйте справжній затишок та смак",
            feat_1_title: "Авторські напої",
            feat_1_desc: "Фірмова кава з вогнем та унікальні рецепти для справжніх гурманів.",
            feat_2_title: "Старовинна вулиця",
            feat_2_desc: "Розташування на вулиці Зарванській, неподалік від Ратуші.",
            feat_3_title: "Жива музика",
            feat_3_desc: "Особлива творча атмосфера та виступи у вихідні дні.",
            cta_title: "Завітайте на чашку запашної кави",
            cta_desc: "Працюємо щодня з 09:00 до 23:00 у Кам'янці-Подільському.",
            cta_btn: "Контакти та адреса",
            footer_about: "Атмосферний заклад у старовинному центрі Кам'янця-Подільського.",
            footer_hours_title: "Години роботи",
            footer_contacts_title: "Контакти",
            hours_val: "Пн-Нд: 09:00 - 23:00",
            rights: "Усі права захищені.",
            about_page_title: "Про нашу кав'ярню",
            about_page_subtitle: "Острів затишку та тепла на старовинній вулиці Кам'янця-Подільського",
            about_h2: "Особлива атмосфера історії та кави",
            about_p1: "«Кав'ярня на Зарванській» — це культове та затишне місце з особливою атмосферою історичного центру Кам'янця-Подільського. Заклад розташований на старовинній вулиці Зарванській, неподалік від Ратуші, і вже багато років радує мешканців та гостей міста вишуканою кавою, ароматними чаями та різноманітними десертами.",
            about_p2: "Інтер'єр кав'ярні створений для спокійного відпочинку: тут панує затишок, грає приємна музика, а плетені крісла та старовинні деталі створюють відчуття домашнього тепла. У вихідні дні на гостей часто чекає жива музика та особлива творча атмосфера.",
            about_p3: "Фірмовими особливостями закладу є авторські кавові напої, зокрема кава з вогнем, а також широкий асортимент смаколиків. Це ідеальний простір для дружніх посиденок, романтичних зустрічей та неквапливого ранкового смакування якісною кавою в серці старого міста.",
            services_page_title: "Меню та асортимент",
            services_page_subtitle: "Вишукана кава, ароматні чаї та смачні десерти",
            cat_coffee_title: "Авторська кава",
            cat_coffee_desc: "Спеціальні рецепти та класичні кавові напої, що готуються з любов'ю до кожного зерна.",
            item_fire_coffee: "Кава з вогнем",
            item_espresso: "Класичний еспресо / Американо",
            item_latte: "Капучино та Лате",
            cat_tea_title: "Ароматні чаї",
            cat_tea_desc: "Великий вибір елітних сортів чаю для спокійного та затишного відпочинку.",
            item_black_tea: "Чорний класичний чай",
            item_green_tea: "Зелений чай з травами",
            item_fruit_tea: "Фруктові та трав'яні мікси",
            cat_desserts_title: "Десерти та смаколики",
            cat_desserts_desc: "Різноманітні смаколики до вашого улюбленого гарячого напою.",
            item_cakes: "Фірмові десерти та тістечка",
            item_sweets: "Солодощі та випічка",
            gallery_page_title: "Фотогалерея",
            gallery_page_subtitle: "Атмосферні куточки нашого закладу в Кам'янці-Подільському",
            gallery_item_1: "Затишний інтер'єр кав'ярні",
            contacts_page_title: "Контакти",
            contacts_page_subtitle: "Чекаємо на вас у серці Кам'янця-Подільського",
            contacts_info_title: "Зв'яжіться з нами",
            contact_address_label: "Адреса",
            contact_phone_label: "Телефон",
            contact_email_label: "Email",
            contact_hours_label: "Графік роботи",
            contact_socials_label: "Соціальні мережі"
        },
        ru: {
            brand_name: "Кофейня на Зарванской",
            nav_home: "Главная",
            nav_about: "О нас",
            nav_services: "Меню и услуги",
            nav_gallery: "Галерея",
            nav_contacts: "Контакты",
            hero_badge: "Исторический центр города",
            hero_title: "Атмосферная Кофейня на Зарванской в Каменце-Подольском",
            hero_subtitle: "Культовое и уютное место с особой атмосферой в сердце старого города.",
            btn_menu: "Наше меню",
            btn_contacts: "Найти нас",
            features_title: "Почему выбирают нас",
            features_subtitle: "Почувствуйте настоящий уют и вкус",
            feat_1_title: "Авторские напитки",
            feat_1_desc: "Фирменный кофе с огнем и уникальные рецепты для настоящих гурманов.",
            feat_2_title: "Старинная улица",
            feat_2_desc: "Расположение на улице Зарванской, недалеко от Ратуши.",
            feat_3_title: "Живая музыка",
            feat_3_desc: "Особая творческая атмосфера и выступления в выходные дни.",
            cta_title: "Приходите на чашку ароматного кофе",
            cta_desc: "Работаем ежедневно с 09:00 до 23:00 в Каменце-Подольском.",
            cta_btn: "Контакты и адрес",
            footer_about: "Атмосферное заведение в старинном центре Каменца-Подольского.",
            footer_hours_title: "Часы работы",
            footer_contacts_title: "Контакты",
            hours_val: "Пн-Вс: 09:00 - 23:00",
            rights: "Все права защищены.",
            about_page_title: "О нашей кофейне",
            about_page_subtitle: "Остров уюта и тепла на старинной улице Каменца-Подольского",
            about_h2: "Особая атмосфера истории и кофе",
            about_p1: "«Кофейня на Зарванской» — это культовое и уютное место с особой атмосферой исторического центра Каменца-Подольского. Заведение расположено на старинной улице Зарванской, недалеко от Ратуши, и уже много лет радует жителей и гостей города изысканным кофе, ароматными чаями и разнообразными десертами.",
            about_p2: "Интерьер кофейни создан для спокойного отдыха: здесь царит уют, играет приятная музыка, а плетеные кресла и старинные детали создают ощущение домашнего тепла. В выходные дни гостей часто ждет живая музыка и особая творческая атмосфера.",
            about_p3: "Фирменными особенностями заведения являются авторские кофейные напитки, в частности кофе с огнем, а также широкий ассортимент лакомств. Это идеальное пространство для дружеских посиделок, романтических встреч и неторопливого утреннего смакования качественным кофе в сердце старого города.",
            services_page_title: "Меню и ассортимент",
            services_page_subtitle: "Изысканный кофе, ароматные чаи и вкусные десерты",
            cat_coffee_title: "Авторский кофе",
            cat_coffee_desc: "Специальные рецепты и классические кофейные напитки, которые готовятся с любовью к каждому зерну.",
            item_fire_coffee: "Кофе с огнем",
            item_espresso: "Классический эспрессо / Американо",
            item_latte: "Капучино и Латте",
            cat_tea_title: "Ароматные чаи",
            cat_tea_desc: "Большой выбор элитных сортов чая для спокойного и уютного отдыха.",
            item_black_tea: "Черный классический чай",
            item_green_tea: "Зеленый чай с травами",
            item_fruit_tea: "Фруктовые и травяные миксы",
            cat_desserts_title: "Десерты и лакомства",
            cat_desserts_desc: "Разнообразные сладости к вашему любимому горячему напитку.",
            item_cakes: "Фирменные десерты и пирожные",
            item_sweets: "Сладости и выпечка",
            gallery_page_title: "Фотогалерея",
            gallery_page_subtitle: "Атмосферные уголки нашего заведения в Каменце-Подольском",
            gallery_item_1: "Уютный интерьер кофейни",
            contacts_page_title: "Контакты",
            contacts_page_subtitle: "Ждем вас в сердце Каменца-Подольского",
            contacts_info_title: "Свяжитесь с нами",
            contact_address_label: "Адрес",
            contact_phone_label: "Телефон",
            contact_email_label: "Email",
            contact_hours_label: "График работы",
            contact_socials_label: "Социальные сети"
        },
        en: {
            brand_name: "Coffee House on Zarvanska",
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Menu & Services",
            nav_gallery: "Gallery",
            nav_contacts: "Contacts",
            hero_badge: "Historic city center",
            hero_title: "Atmospheric Coffee House on Zarvanska in Kamianets-Podilskyi",
            hero_subtitle: "A cult and cozy place with a special atmosphere in the heart of the old town.",
            btn_menu: "Our Menu",
            btn_contacts: "Find Us",
            features_title: "Why Choose Us",
            features_subtitle: "Experience true comfort and taste",
            feat_1_title: "Signature Drinks",
            feat_1_desc: "Signature coffee with fire and unique recipes for true gourmets.",
            feat_2_title: "Ancient Street",
            feat_2_desc: "Located on Zarvanska Street, near the Town Hall.",
            feat_3_title: "Live Music",
            feat_3_desc: "Special creative atmosphere and performances on weekends.",
            cta_title: "Visit Us for a Cup of Coffee",
            cta_desc: "Open daily from 09:00 to 23:00 in Kamianets-Podilskyi.",
            cta_btn: "Contacts & Address",
            footer_about: "Atmospheric venue in the ancient center of Kamianets-Podilskyi.",
            footer_hours_title: "Working Hours",
            footer_contacts_title: "Contacts",
            hours_val: "Mon-Sun: 09:00 - 23:00",
            rights: "All rights reserved.",
            about_page_title: "About Our Coffee House",
            about_page_subtitle: "An island of coziness and warmth on an ancient street in Kamianets-Podilskyi",
            about_h2: "Special Atmosphere of History and Coffee",
            about_p1: "'Coffee House on Zarvanska' is a cult and cozy place with a special atmosphere in the historic center of Kamianets-Podilskyi. Located on the ancient Zarvanska Street, near the Town Hall, it has been delighting residents and guests of the city with exquisite coffee, aromatic teas, and various desserts for many years.",
            about_p2: "The interior of the cafe is created for a peaceful rest: coziness reigns here, pleasant music plays, and wicker chairs and antique details create a feeling of home warmth. On weekends, guests can often enjoy live music and a special creative atmosphere.",
            about_p3: "Signature features of the establishment are author's coffee drinks, in particular coffee with fire, as well as a wide assortment of sweets. This is the ideal space for friendly gatherings, romantic dates, and leisurely morning enjoyment of quality coffee in the heart of the old town.",
            services_page_title: "Menu & Assortment",
            services_page_subtitle: "Exquisite coffee, aromatic teas, and delicious desserts",
            cat_coffee_title: "Signature Coffee",
            cat_coffee_desc: "Special recipes and classic coffee drinks prepared with love for every bean.",
            item_fire_coffee: "Coffee with fire",
            item_espresso: "Classic Espresso / Americano",
            item_latte: "Cappuccino & Latte",
            cat_tea_title: "Aromatic Teas",
            cat_tea_desc: "A large selection of elite tea varieties for a calm and cozy rest.",
            item_black_tea: "Black classic tea",
            item_green_tea: "Green tea with herbs",
            item_fruit_tea: "Fruit and herbal mixes",
            cat_desserts_title: "Desserts & Sweets",
            cat_desserts_desc: "Various sweets to accompany your favorite hot drink.",
            item_cakes: "Signature desserts and pastries",
            item_sweets: "Sweets and baked goods",
            gallery_page_title: "Photo Gallery",
            gallery_page_subtitle: "Atmospheric corners of our establishment in Kamianets-Podilskyi",
            gallery_item_1: "Cozy interior of the coffee house",
            contacts_page_title: "Contacts",
            contacts_page_subtitle: "We look forward to seeing you in the heart of Kamianets-Podilskyi",
            contacts_info_title: "Get in Touch",
            contact_address_label: "Address",
            contact_phone_label: "Phone",
            contact_email_label: "Email",
            contact_hours_label: "Working Hours",
            contact_socials_label: "Social Networks"
        }
    };

    function setLanguage(lang) {
        if (!translations[lang]) return;
        localStorage.setItem('preferred_lang', lang);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    const savedLang = localStorage.getItem('preferred_lang') || 'uk';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});