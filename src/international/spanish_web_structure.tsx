import { WebStructure } from "@/types/WebStructure";

import { expertise_data_ES } from "@/content-list/services/spanish";

import { About_Data_ES } from "@/content-list/about/spanish";
import { Team_Data_ES } from "@/content-list/team/spanish";
import Privacy_Data_ES from "@/content-list/privacy/spanish";
import Terms_Data_ES from "@/content-list/terms/spanish";
import { Banners_Data_ES } from "@/content-list/banners/spanish";

const spanish_web_structure: WebStructure = {
    common: {
        customScheduleText: "Agenda una Consulta",
        sendEmailText: "Envíe un Correo Electrónico",
        callTelephoneText: "Llame por Teléfono",
        visitOfficeText: "Visite la Oficina",
        signNewsletterText: "Suscríbase al Boletín",
        signNewsletterSubscribeText: "Registrar",
        accessInstagramText: "Visite nuestro Instagram",
        accessLinkedinText: "Visite nuestro LinkedIn",

        returnToAreasOfExpertise: "Áreas de Experticia",
        returnToMainPage: "Ir a la Página Principal",
        returnToImmigrationLaw: "Ir a Derecho Migratorio",
        returnToInternationalLaw: "Ir a Derecho Internacional",
        returnToCivilLaw: "Ir a Derecho Civil",
        returnToCustomsLaw: "Ir a Derecho Aduanero",
        returnToBusinessLaw: "Ir a Derecho Empresarial",
        returnToSportsLaw: "Ir a Derecho Deportivo",
        returnToEntertainmentLaw: "Ir a Derecho de Entretenimiento",
        returnToMarketLaw: "Ir a Mercado de Capitales e Inversión Extranjera",

        customTitle: "Taborda Lima | Abogacía y Consultoría Legal",
        customDescription:
            "Firma de abogados en Curitiba, con más de 30 años de experiencia en el mercado y una sólida formación académica. Ofrecemos una amplia gama de servicios legales, incluyendo derecho civil, penal, laboral, administrativo y tributario, con el compromiso de brindar orientación legal confiable y personalizada para satisfacer las necesidades individuales de nuestros clientes.",
        customWebsiteURL: "https://www.tabordalima.com/",

        noSearchResultsFound: "No hay resultados que coincidan con su búsqueda.",
        area_of_expertise: "Área de Experticia",
        more_details: "Más Detalles",

        knowMoreBtn: {
            title: "Saber Más",
            label: "Saber Más",
        },

        whatsappBtn: {
            label: "¡Contáctenos por WhatsApp!",
            link: "+5541992416343",
        },
    },

    expertise_data: expertise_data_ES,
    team_data: Team_Data_ES,
    about_data: About_Data_ES,

    navbar: {
        logo: {
            pathURL: "/brand/logotipo_navbar.png",
            title: "Taborda Lima",
            width: 100,
            height: 100,
            alt: "Logotipo Taborda Lima",
        },

        navLinks: [
            {
                path: "/",
                name: "Inicio",
            },
            {
                path: "/sobre",
                name: "Sobre",
            },
            {
                path: "/#servicos",
                name: "Experticia",
            },
            {
                path: "/#consulta",
                name: "Consultas",
            },
            {
                path: "/#novidades",
                name: "Novedades",
            },
        ],

        langBtn: {
            text: "Cambiar el idioma a inglés",
            label: "Cambiar el idioma a portugués",
            availableLangs: ["en", "pt-BR", "es"],
        },

        menuBtn: {
            title: "Menú",
            label: "Abrir el Menú",
        },
    },

    menu: {
        title: "Menú",
        links: [
            {
                path: "/",
                name: "Inicio",
            },
            {
                path: "/sobre",
                name: "Sobre",
            },
            {
                path: "/#servicos",
                name: "Experticia",
            },
            {
                path: "/#consulta",
                name: "Consultas",
            },
            {
                path: "/#novidades",
                name: "Novedades",
            },
            {
                path: "/termos-de-uso",
                name: "Términos de Uso",
            },
            {
                path: "/privacidade",
                name: "Privacidad",
            },
        ],

        privacyBtn: {
            title: "Política de Privacidad",
            label: "Política de Privacidad",
        },

        termsBtn: {
            title: "Términos de Uso",
            label: "Términos de Uso",
        },

        langBtn: {
            text: "Cambiar el idioma a inglés",
            label: "Cambiar el idioma a portugués",
            availableLangs: ["en", "pt-BR", "es"],
        },

        copyRight: "© 2024 | Taborda Lima",
    },

    cookies: {
        title: "Cookies",
        paragraphs: [
            "Este sitio utiliza cookies para garantizar su seguridad y mejorar la experiencia de uso.",
            "Al continuar navegando, usted acepta el uso de estas tecnologías.",
        ],
        btnText: "Entendido",
    },

    privacy: {
        title: "Política de Privacidad",
        paragraphs: Privacy_Data_ES,
    },

    terms: {
        title: "Términos de Uso",
        paragraphs: Terms_Data_ES,
    },

    landingPage: {
        title: "Taborda Lima & Abogados Asociados",
        description:
            "Reconocidos por la excelencia y agilidad en la prestación de servicios jurídicos, contamos con una trayectoria de casi 30 años dedicados exclusivamente a la abogacía. Con actuación tanto en Brasil como en el Exterior, nuestra oficina ofrece un servicio personalizado y eficiente en temas de Derecho Internacional e Inmigración.",
        sections: {
            home: {
                key: "inicio",
                title: "La Oficina", // O Escritório

                paragraphs: [
                    "Reconocidos por la excelencia y agilidad en la prestación de servicios jurídicos, contamos con una trayectoria de casi 30 años dedicados exclusivamente a la abogacía.",
                    "Con actuación tanto en Brasil como en el Exterior, nuestra oficina ofrece un servicio personalizado y eficiente en temas de Derecho Internacional e Inmigración.",
                    "Estamos listos para atender a nuestros clientes junto con el apoyo de abogados asociados en Nueva York, Newark, Miami, Orlando, Washington, Londres, París, Roma y en diversas localidades de América Latina.",
                ],

                aboutUsBtn: {
                    title: "Conozca Más Sobre la Oficina",
                    label: "Conozca Más Sobre la Oficina",
                },

                servicesBtn: {
                    title: "Conozca Nuestros Servicios",
                    label: "Conozca Nuestros Servicios",
                },

                internationalServicesBtn: {
                    title: "Atención a Extranjeros",
                    label: "Atención a Extranjeros",
                    phone: "+55 41 992 416 343",
                },

                scheduleBtn: {
                    title: "Agende una Consulta",
                    label: "Agende una Consulta",
                },
            },

            expertise: {
                key: "areas-de-practica",
                title: "Áreas de Experticia",

                paragraphs: [
                    "Entendemos que cada caso es único y merece atención individualizada.",
                    "Así, trabajamos en estrecha colaboración con nuestros clientes, desarrollando estrategias jurídicas personalizadas para lograr los mejores resultados posibles.",
                    "Nuestro compromiso con la excelencia y la integridad es esencial en cada aspecto de nuestro trabajo. No solo defendemos los intereses de nuestros clientes de manera vigorosa, sino que también lo hacemos dentro de los más altos estándares éticos.",
                ],

                expertiseList: expertise_data_ES,
                expertiseBannerList: Banners_Data_ES,
                bannerMoreInfoBtn: {
                    title: "Más Información",
                    label: "Conozca Más",
                },
            },

            appointments: {
                key: "consulta",
                title: "Consulta",

                paragraphs: [
                    "Nuestro equipo está siempre disponible para atenderle de la manera más conveniente. Ya sea para aclarar dudas, agendar una consulta o discutir los detalles de su caso, ofrecemos diversas formas de contacto para facilitar la comunicación.",
                ],

                appointmentBtn: {
                    title: "Agende una Consulta",
                    label: "Agende una Consulta",
                },
            },

            contact: {
                key: "contacto",
                title: "Contacto",

                paragraphs: [
                    "Nuestro equipo está siempre disponible para atenderle de la manera más conveniente. Ya sea para aclarar dudas, agendar una consulta o discutir los detalles de su caso, ofrecemos diversas formas de contacto para facilitar la comunicación.",
                ],

                email: {
                    title: "Correo Electrónico",
                    value: "contato@advtabordalima.com.br",
                },

                telephone: {
                    title: "Teléfono",
                    value: "+55 41 3338 7611",
                },

                cellphone: {
                    title: "Teléfono Móvil",
                    value: "+55 41 992 416 343",
                },

                functioningHours: {
                    title: "Horarios de Funcionamiento",
                    value: "Lunes a Viernes: 09:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    title: "Dirección",
                    value: "Avenida Manoel Ribas, nº 507 - Sala 05 - Mercês Curitiba - PR 80510-346 Brasil",
                    street: "",
                    number: "",
                    city_region: "",
                    city: "",
                    country: "",
                    zip_code: "",
                },
            },

            updates: {
                key: "novedades",
                title: "Novedades",

                paragraphs: [
                    "¡Síguenos en las redes sociales y consulta las últimas actualizaciones sobre las peculiaridades de nuestras áreas de práctica, así como noticias e información sobre la abogacía en Brasil y en el mundo!",
                ],

                instagramBtn: {
                    title: "Instagram",
                    label: "Instagram",
                },

                linkedinBtn: {
                    title: "LinkedIn",
                    label: "LinkedIn",
                },
            },
        },
    },

    pages: [],
};

export default spanish_web_structure;
