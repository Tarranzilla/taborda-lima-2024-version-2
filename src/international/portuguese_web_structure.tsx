import { WebStructure } from "@/types/WebStructure";

import { Exepertise_Data_PT } from "@/content-list/services/portuguese";
import { Banners_Data_PT } from "@/content-list/banners/portuguese";

import { expertise_data_PT } from "@/content-list/services/portuguese";

import { About_Data_PT } from "@/content-list/about/portuguese";
import { Team_Data_PT } from "@/content-list/team/portuguese";
import Privacy_Data_PT from "@/content-list/privacy/portuguese";
import Terms_Data_PT from "@/content-list/terms/portuguese";

const portuguese_web_structure: WebStructure = {
    common: {
        customScheduleText: "Agende uma Consulta",
        sendEmailText: "Envie um Email",
        callTelephoneText: "Ligue pelo Telefone",
        visitOfficeText: "Visite o Escritório",
        signNewsletterText: "Assine a Newsletter",
        signNewsletterSubscribeText: "Registrar",
        accessInstagramText: "Visite nosso Instagram",
        accessLinkedinText: "Visite nosso LinkedIn",

        returnToAreasOfExpertise: "Áreas de Expertise",
        returnToMainPage: "Ir a Página Principal",
        returnToImmigrationLaw: "Ir a Direito Migratório",
        returnToInternationalLaw: "Ir a Direito Internacional",
        returnToCivilLaw: "Ir a Direito Civil",
        returnToCustomsLaw: "Ir a Direito Aduaneiro",
        returnToBusinessLaw: "Ir a Direito Empresarial",
        returnToSportsLaw: "Ir a Direito Desportivo",
        returnToEntertainmentLaw: "Ir a Direito do Entretenimento",
        returnToMarketLaw: "Ir a Mercado de Capitais e Investimento Estrangeiro",
        customTitle: "Taborda Lima | Advocacia e Consultoria Legal",
        customDescription:
            "Escritório de advocacia em Curitiba, com mais de 30 anos de experiência no mercado e uma sólida formação acadêmica. Oferecemos uma ampla gama de serviços jurídicos, incluindo direito civil, criminal, trabalhista, administrativo e tributário, com o compromisso de fornecer orientação jurídica confiável e personalizada para atender às necessidades individuais de nossos clientes.",
        customWebsiteURL: "https://www.tabordalima.com/",

        noSearchResultsFound: "Nenhum item corresponde à sua pesquisa.",
        area_of_expertise: "Área de Expertise",
        more_details: "Mais Detalhes",

        knowMoreBtn: {
            title: "Saiba Mais",
            label: "Saiba Mais",
        },

        whatsappBtn: {
            label: "Fale Conosco Pelo WhatsApp!",
            link: "+5541992416343",
        },
    },

    expertise_data: expertise_data_PT,
    team_data: Team_Data_PT,
    about_data: About_Data_PT,

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
                name: "Início",
            },
            {
                path: "/sobre",
                name: "Sobre",
            },
            {
                path: "/#servicos",
                name: "Expertise",
            },
            {
                path: "/#consulta",
                name: "Consultas",
            },
            {
                path: "/#novidades",
                name: "Novidades",
            },
        ],

        langBtn: {
            text: "Change the Language to English",
            label: "Mudar o Idioma para Português",
            availableLangs: ["en", "pt-BR"],
        },

        menuBtn: {
            title: "Menu",
            label: "Abrir o Menu",
        },
    },

    menu: {
        title: "Menu",
        links: [
            {
                path: "/",
                name: "Início",
            },
            {
                path: "/sobre",
                name: "Sobre",
            },
            {
                path: "/#servicos",
                name: "Expertise",
            },
            {
                path: "/#consulta",
                name: "Consultas",
            },
            {
                path: "/#novidades",
                name: "Novidades",
            },
            {
                path: "/termos-de-uso",
                name: "Termos de Uso",
            },
            {
                path: "/privacidade",
                name: "Privacidade",
            },
        ],

        privacyBtn: {
            title: "Política de Privacidade",
            label: "Política de Privacidade",
        },

        termsBtn: {
            title: "Termos de Uso",
            label: "Termos de Uso",
        },

        langBtn: {
            text: "Change the Language to English",
            label: "Mudar o Idioma para Português",
            availableLangs: ["en", "pt-BR"],
        },

        copyRight: "© 2024 | Taborda Lima",
    },

    cookies: {
        title: "Cookies",
        paragraphs: [
            "Este site utiliza cookies para garantir que você tenha segurança e uma melhor experiência de uso.",
            "Ao continuar a navegar, você concorda com o uso destas tecnologias.",
        ],
        btnText: "Entendido",
    },

    privacy: {
        title: "Política de Privacidade",
        paragraphs: Privacy_Data_PT,
    },

    terms: {
        title: "Termos de Uso",
        paragraphs: Terms_Data_PT,
    },

    landingPage: {
        title: "Taborda Lima & Advogados Associados",
        description:
            "Reconhecidos pela excelência e agilidade na prestação de serviços jurídicos, possuímos uma trajetória de quase 30 anos dedicados exclusivamente à advocacia. Com atuação tanto no Brasil quanto no Exterior, nosso escritório oferece um atendimento personalizado e eficiente em temas de Direito Internacional e Imigração.",
        sections: {
            home: {
                key: "inicio",
                title: "O Escritório", // O Escritório

                paragraphs: [
                    "Reconhecidos pela excelência e agilidade na prestação de serviços jurídicos, possuímos uma trajetória de quase 30 anos dedicados exclusivamente à advocacia.",
                    "Com atuação tanto no Brasil quanto no Exterior, nosso escritório oferece um atendimento personalizado e eficiente em temas de Direito Internacional e Imigração.",
                    "Estamos de prontidão para bem atender nossos clientes juntamente com o apoio de advogados parceiros em Nova York, Newark, Miami, Orlando, Washington, Londres, Paris, Roma e em diversas localidades da América Latina.",
                ],

                aboutUsBtn: {
                    title: "Saiba Mais Sobre o Escritório",
                    label: "Saiba Mais Sobre o Escritório",
                },

                servicesBtn: {
                    title: "Conheça Nossos Serviços",
                    label: "Conheça Nossos Serviços",
                },

                internationalServicesBtn: {
                    title: "Atendimento à Estrangeiros",
                    label: "Atendimento à Estrangeiros",
                    phone: "+55 41 992 416 343",
                },

                scheduleBtn: {
                    title: "Agende uma Consulta",
                    label: "Agende uma Consulta",
                },
            },

            expertise: {
                key: "areas-de-atuacao",
                title: "Áreas de Expertise",

                paragraphs: [
                    "Compreendemos que cada caso é único e merece atenção individualizada.",
                    "Assim, trabalhamos em estreita colaboração com nossos clientes, desenvolvendo estratégias jurídicas sob medida para alcançar os melhores resultados possíveis.",
                    "Nosso compromisso com a excelência e a integridade é essencial em cada aspecto de nosso trabalho. Não apenas defendemos os interesses de nossos clientes de forma vigorosa, mas também o fazemos dentro dos mais altos padrões éticos.",
                ],

                expertiseList: expertise_data_PT,
                expertiseBannerList: Banners_Data_PT,
                bannerMoreInfoBtn: {
                    title: "Mais Informações",
                    label: "Saiba Mais",
                },
            },

            appointments: {
                key: "consulta",
                title: "Consulta",

                paragraphs: [
                    "Nossa equipe está sempre disponível para atender você da maneira mais conveniente. Seja para esclarecer dúvidas, agendar uma consulta ou discutir os detalhes do seu caso, oferecemos diversas formas de contato para facilitar a comunicação.",
                ],

                appointmentBtn: {
                    title: "Agende uma Consulta",
                    label: "Agende uma Consulta",
                },
            },

            contact: {
                key: "contato",
                title: "Contato",

                paragraphs: [
                    "Nossa equipe está sempre disponível para atender você da maneira mais conveniente. Seja para esclarecer dúvidas, agendar uma consulta ou discutir os detalhes do seu caso, oferecemos diversas formas de contato para facilitar a comunicação.",
                ],

                email: {
                    title: "Email",
                    value: "contato@advtabordalima.com.br",
                },

                telephone: {
                    title: "Telefone",
                    value: "+55 41 3338 7611",
                },

                cellphone: {
                    title: "Telefone Móvel",
                    value: "+55 41 992 416 343",
                },

                functioningHours: {
                    title: "Horários de Funcionamento",
                    value: "Segunda à Sexta: 09:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    title: "Endereço",
                    value: "Avenida Manoel Ribas, nº 507 - Sala 05 - Mercês Curitiba - PR 80510-346 Brazil",
                    street: "",
                    number: "",
                    city_region: "",
                    city: "",
                    country: "",
                    zip_code: "",
                },
            },

            updates: {
                key: "novidades",
                title: "Novidades",

                paragraphs: [
                    "Nos siga nas redes sociais e confira as últimas atualizações sobre as peculiaridades das nossas áreas de atuação, assim como notícias e informações sobre a advocacia no Brasil e no mundo!",
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

export default portuguese_web_structure;
