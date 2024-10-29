import { WebStructure } from "@/types/WebStructure";

import { Exepertise_Data_EN } from "@/content-list/services/english";
import { Banners_Data_EN } from "@/content-list/banners/english";

import { expertise_data_EN } from "@/content-list/services/english";

import { About_Data_EN } from "@/content-list/about/english";
import { Team_Data_EN } from "@/content-list/team/english";
import Privacy_Data_EN from "@/content-list/privacy/english";
import Terms_Data_EN from "@/content-list/terms/english";

const english_web_structure: WebStructure = {
    common: {
        customScheduleText: "Schedule an Appointment",
        sendEmailText: "Send us an Email",
        callTelephoneText: "Call us on Telephone",
        visitOfficeText: "Visit our Office",
        signNewsletterText: "Subscribe to our Newsletter",
        signNewsletterSubscribeText: "Register",
        accessInstagramText: "Visit our Instagram",
        accessLinkedinText: "Visit our LinkedIn",

        returnToAreasOfExpertise: "Areas of Expertise",
        returnToImmigrationLaw: "Go to Immigration Law",
        returnToInternationalLaw: "Go to International Law",
        returnToCivilLaw: "Go to Civil Law",
        returnToCustomsLaw: "Go to Customs Law",
        returnToBusinessLaw: "Go to Business Law",
        returnToSportsLaw: "Go to Sports Law",
        returnToEntertainmentLaw: "Go to Entertainment Law",
        returnToMarketLaw: "Go to Market Law",
        returnToMainPage: "Go to the Main Page",
        customTitle: "Taborda Lima | Advocacy and Legal Consultancy",
        customDescription:
            "Law firm in Curitiba, with more than 30 years of experience in the market and a solid academic background. We offer a wide range of legal services, including civil, criminal, labor, administrative, and tax law, with a commitment to providing reliable and personalized legal guidance to meet the individual needs of our clients.",
        customWebsiteURL: "https://www.tabordalima.com/en",

        noSearchResultsFound: "No item corresponds to your search.",
        area_of_expertise: "Area of Expertise",
        more_details: "More Details",

        knowMoreBtn: {
            title: "Know More",
            label: "Know More",
        },

        whatsappBtn: {
            label: "Contact us via WhatsApp!",
            link: "+5541992416343",
        },
    },

    expertise_data: expertise_data_EN,
    team_data: Team_Data_EN,
    about_data: About_Data_EN,

    navbar: {
        logo: {
            pathURL: "/brand/logotipo_navbar.png",
            title: "Taborda Lima",
            width: 100,
            height: 100,
            alt: "Logotype Taborda Lima",
        },

        navLinks: [
            {
                path: "/",
                name: "Home",
            },
            {
                path: "/sobre",
                name: "About",
            },
            {
                path: "/#servicos",
                name: "Expertise",
            },
            {
                path: "/#consulta",
                name: "Appointments",
            },
            {
                path: "/#novidades",
                name: "Updates",
            },
        ],

        langBtn: {
            text: "Mudar o Idioma para Português",
            label: "Change the Language to Portuguese",
            availableLangs: ["en", "pt-BR"],
        },

        menuBtn: {
            title: "Menu",
            label: "Open the Menu",
        },
    },

    menu: {
        title: "Menu",
        links: [
            {
                path: "/",
                name: "Home",
            },
            {
                path: "/sobre",
                name: "About",
            },
            {
                path: "/#servicos",
                name: "Expertise",
            },
            {
                path: "/#consulta",
                name: "Appointments",
            },
            {
                path: "/#novidades",
                name: "Updates",
            },
            {
                path: "/termos-de-uso",
                name: "Terms of Use",
            },
            {
                path: "/privacidade",
                name: "Privacy",
            },
        ],

        privacyBtn: {
            title: "Privacy Policy",
            label: "Privacy Policy",
        },

        termsBtn: {
            title: "Terms of Use",
            label: "Terms of Use",
        },

        langBtn: {
            text: "Mudar o Idioma para Português",
            label: "Change the Language to Portuguese",
            availableLangs: ["en", "pt-BR"],
        },

        copyRight: "© 2024 | Taborda Lima",
    },

    cookies: {
        title: "Cookies",
        paragraphs: [
            "This website use cookies to guarantee that you get the best experience.",
            "By continuing to use this site, you agree to the use of cookies.",
        ],
        btnText: "I Understand",
    },

    privacy: {
        title: "Privacy Policy",
        paragraphs: Privacy_Data_EN,
    },

    terms: {
        title: "Terms of Use",
        paragraphs: Terms_Data_EN,
    },

    landingPage: {
        title: "Taborda Lima | Advocacy and Legal Consultancy",
        description:
            "Recognized for excellence and agility in providing legal services, we have a history of nearly 30 years dedicated exclusively to law practice. With operations both in Brazil and abroad, our firm offers personalized and efficient services in matters of International Law and Immigration.",
        sections: {
            home: {
                key: "inicio",
                title: "The Office", // O Escritório

                paragraphs: [
                    "Recognized for excellence and agility in providing legal services, we have a history of nearly 30 years dedicated exclusively to law practice.",
                    "With operations both in Brazil and abroad, our firm offers personalized and efficient services in matters of International Law and Immigration.",
                    "We are ready to serve our clients with the support of partner attorneys in New York, Newark, Miami, Orlando, Washington, London, Paris, Rome, and various locations throughout Latin America.",
                ],

                aboutUsBtn: {
                    title: "Learn More About our Office",
                    label: "Know More About our Office",
                },

                servicesBtn: {
                    title: "Check Our Services",
                    label: "Check Our Services",
                },

                internationalServicesBtn: {
                    title: "Assistance for Foreigners in Brazil",
                    label: "Assistance for Foreigners",
                    phone: "+55 41 992 416 343",
                },

                scheduleBtn: {
                    title: "Schedule an Appointment",
                    label: "Schedule an Appointment",
                },

                // bannerList: bannerList_EN,
            },

            expertise: {
                key: "areas-de-atuacao",
                title: "Areas of Expertise",

                paragraphs: [
                    "We understand that each case is unique and deserves individualized attention.",
                    "Therefore, we work closely with our clients, developing tailored legal strategies to achieve the best possible outcomes.",
                    "Our commitment to excellence and integrity is essential in every aspect of our work. Not only do we vigorously defend our clients' interests, but we also do so within the highest ethical standards.",
                ],

                expertiseList: expertise_data_EN,
                expertiseBannerList: Banners_Data_EN,
                bannerMoreInfoBtn: {
                    title: "Know More",
                    label: "Know More",
                },
            },

            appointments: {
                key: "consulta",
                title: "Appointments",

                paragraphs: [
                    "Our team is always available to assist you in the most convenient way. Whether to answer questions, schedule an appointment, or discuss the details of your case, we offer multiple contact options to make communication easier.",
                ],

                appointmentBtn: {
                    title: "Schedule an Appointment",
                    label: "Schedule an Appointment",
                },
            },

            contact: {
                key: "contato",
                title: "Contact",

                paragraphs: ["We are available to schedule consultations, clarify your doubts, and help you find the best solution for your case."],

                email: {
                    title: "Email",
                    value: "contato@advtabordalima.com.br",
                },

                telephone: {
                    title: "Telephone",
                    value: "+55 41 3338 7611",
                },

                cellphone: {
                    title: "Mobile Telephone",
                    value: "+55 41 992 416 343",
                },

                functioningHours: {
                    title: "Functioning Hours",
                    value: "Monday to Friday: 09:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    title: "Address",
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
                key: "atualizacoes",
                title: "Updates",

                paragraphs: [
                    "Follow us on social media and check out the latest updates on the specifics of our practice areas, as well as news and information about law in Brazil and around the world!",
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

export default english_web_structure;
