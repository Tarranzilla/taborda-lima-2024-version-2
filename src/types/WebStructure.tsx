import { NavLink } from "./NavLink";
import { Page } from "./Page";
import ParagraphsWithTitle from "./ParagraphsWithTitle";

import { Expertise } from "./Expertise";
import { Expertise_Data } from "./Expertise_Data";

// O site é definido como uma array de páginas, as páginas possuem uma estrutura recursiva de subpáginas
export type WebStructure = {
    common: {
        searchBtn?: {
            path: string;
            text: string;
            placeholder: string;
            label: string;
        };

        noSearchResultsFound: string;

        shareBtn?: {
            path: string;
            text: string;
            label: string;
        };

        knowMoreBtn?: {
            title: string;
            label: string;
        };

        shopBtn?: {
            title: string;
            label: string;
        };

        customScheduleText: string;
        returnToAreasOfExpertise: string;
        returnToMainPage: string;
        returnToImmigrationLaw: string;
        returnToInternationalLaw: string;
        returnToCivilLaw: string;
        returnToCustomsLaw: string;
        returnToBusinessLaw: string;
        returnToSportsLaw: string;
        returnToEntertainmentLaw: string;
        returnToMarketLaw: string;
        customTitle: string;
        customDescription: string;
        customWebsiteURL: string;

        whatsappBtn: {
            label: string;
            link: string;
        };

        area_of_expertise: string;
        more_details: string;
    };

    expertise_data: any;
    team_data: any;
    about_data: any;

    navbar: {
        logo: {
            pathURL: string;
            title: string;
            width: number;
            height: number;
            alt: string;
        };

        navLinks?: NavLink[];

        langBtn: {
            text: string;
            label: string;
            availableLangs: string[];
        };

        menuBtn?: {
            title: string;
            label: string;
        };
    };

    menu: {
        title: string;
        links: NavLink[];

        colorModeBtn?: {
            path: string;
            text: string;
            label: string;
        };

        privacyBtn: {
            title: string;
            label: string;
        };

        termsBtn: {
            title: string;
            label: string;
        };

        langBtn?: {
            text: string;
            label: string;
            availableLangs: string[];
        };

        copyRight: string;
    };

    cart?: {
        title: string;
        emptyMessage: string;

        cartBtn?: {
            path: string;
            text: string;
            label: string;
        };

        checkoutBtn: {
            text: string;
            label: string;
        };

        checkOutHelpBtn: {
            text: string;
            label: string;
        };

        checkOutHelp: {
            title: string;
            paragraphs: string[];
            actionText: string;
        };
    };

    cookies: {
        title: string;
        paragraphs: string[];
        btnText: string;
    };

    privacy: {
        title: string;
        paragraphs: ParagraphsWithTitle[];
    };

    terms: {
        title: string;
        paragraphs: ParagraphsWithTitle[];
    };

    landingPage: {
        title: string;
        description: string;

        sections: {
            home: {
                key: string;
                title: string;
                paragraphs: string[];

                aboutUsBtn: {
                    title: string;
                    label: string;
                };

                servicesBtn: {
                    title: string;
                    label: string;
                };

                internationalServicesBtn: {
                    title: string;
                    label: string;
                    phone: string;
                };

                scheduleBtn: {
                    title: string;
                    label: string;
                };

                // bannerList: Banner[];
            };

            expertise: {
                key: string;
                title: string;
                paragraphs: string[];
                expertiseList: any[];
                expertiseBannerList: any[];
                bannerMoreInfoBtn: {
                    title: string;
                    label: string;
                };
            };

            appointments: {
                key: string;
                title: string;
                paragraphs: string[];

                appointmentBtn: {
                    title: string;
                    label: string;
                };
            };

            contact?: {
                key: string;
                title: string;

                paragraphs: string[];

                email: {
                    title: string;
                    value: string;
                };

                telephone: {
                    title: string;
                    value: string;
                };

                cellphone: {
                    title: string;
                    value: string;
                };

                functioningHours: {
                    title: string;
                    value: string;
                };

                adress: {
                    title: string;
                    value: string;
                    street: string;
                    number: string;
                    city_region: string;
                    city: string;
                    country: string;
                    zip_code: string;
                };
            };

            updates: {
                key: string;
                title: string;
                paragraphs: string[];

                instagramBtn: {
                    title: string;
                    label: string;
                };

                linkedinBtn: {
                    title: string;
                    label: string;
                };
            };
        };
    };

    pages: Page[];
};
