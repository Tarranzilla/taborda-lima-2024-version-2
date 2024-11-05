import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";

import { useSimpleTranslation } from "@/international/use_translation";

import GoogleMap from "@/components/GoogleMap";
import WhatsAppBtn from "@/components/WhatsAppBtn";

import { handleScheduleWhatsApp } from "@/utils/WhatsApp";
import { handleScheduleWhatsApp_EN } from "@/utils/WhatsApp_en";
import { handleScheduleWhatsApp_ES } from "@/utils/WhatsApp_es";
import NewInstaFeed from "@/components/NewInstaFeed";
import NewBannerSlider from "@/components/NewBannerSlider";
import ExpertiseSlider from "@/components/ExpertiseSlider";

import NewsletterForm from "@/components/NewsletterForm";

import { Expertise } from "@/types/Expertise";
import { Expertise_Data } from "@/types/Expertise_Data";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

const officePictures = [
    {
        src: "/office/fotos_escritorio_004.png",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
    {
        src: "/office/fotos_escritorio_002.png",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
    {
        src: "/office/fotos_escritorio_006.jpg",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
    {
        src: "/office/fotos_escritorio_007.jpg",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
    {
        src: "/office/fotos_escritorio_008.jpg",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
];

const MotionLink = m(Link);

export default function Home() {
    const t = useSimpleTranslation();
    const router = useRouter();

    const isEnglish = router.locale === "en";
    const isPortuguese = router.locale === "pt-BR";
    const isSpanish = router.locale === "es";

    return (
        <>
            {/* Meta Tags */}
            <Head>
                <title>{t.landingPage.title}</title>
                <meta name="description" content={t.landingPage.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            {/* Conteúdo Principal */}
            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" className={""} key={"pagina_principal"}>
                {/* Botão do WhatsApp Esquerdo*/}
                <WhatsAppBtn position="Left" />

                {/* Botão do WhatsApp Direito*/}
                <WhatsAppBtn position="Right" />

                {/* Banner Inicial */}
                <div className="LP_Intro_Banner">
                    <Image src={"/general_assets/LOGO_TL_Legacy.png"} width={1200} height={400} alt="Logo Taborda Lima" />
                </div>

                {/* Seção de Início | Atualizar o Scroll com as Novas Imagens do Escritório */}
                <section id="inicio" className="Main_Section LP_Section">
                    <div id="Imagem_Inicial" className="Container Container_Left Image_Container Dark_Container">
                        <NewBannerSlider pictures={officePictures} />
                    </div>

                    <div className="Container Container_Right Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>{t.landingPage.sections.home.title}</h1>
                            {t.landingPage.sections.home.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="Intro_Actions_Container">
                            <MotionLink whileTap={{ scale: 0.95 }} href={"/sobre"} className="Page_Button">
                                <p className="Page_Button_Main_Text">{t.landingPage.sections.home.aboutUsBtn.title}</p>{" "}
                                <span className="material-icons">foundation</span>
                            </MotionLink>
                            <MotionLink whileTap={{ scale: 0.95 }} href={"/mercado-de-capitais-e-investimento-estrangeiro"} className="Page_Button">
                                <p className="Page_Button_Main_Text">{t.landingPage.sections.home.internationalServicesBtn.title}</p>
                                <span className="material-icons">public</span>
                            </MotionLink>
                            <MotionLink whileTap={{ scale: 0.95 }} href={"/#consulta"} className="Page_Button">
                                <p className="Page_Button_Main_Text">{t.landingPage.sections.home.scheduleBtn.title}</p>{" "}
                                <span className="material-icons">arrow_downward</span>
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Seção de Serviços | Aprimorar o Scroll Container dos Serviços */}
                <section className="Main_Section LP_Section" id="servicos">
                    <div className="Container Container_Left Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>{t.landingPage.sections.expertise.title}</h1>
                            {t.landingPage.sections.expertise.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="Container Container_Right Banner_Slider_Container Dark_Container Unpadded_Container">
                        <ExpertiseSlider />
                    </div>
                </section>

                {/* Seção de Consulta */}
                <section id="consulta">
                    <div className="Container Container_Left Image_Container Dark_Container">
                        <Image
                            className="Section_Image Consulta_Image"
                            src={"/office/fotos_escritorio_002.png"}
                            width={1280}
                            height={1280}
                            alt="Agende uma Consulta"
                        />
                    </div>

                    <div className="Container Container_Right Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>{t.landingPage.sections.appointments.title}</h1>
                            {t.landingPage.sections.appointments.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="Intro_Actions_Container">
                            <m.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    isEnglish && handleScheduleWhatsApp_EN();
                                    isPortuguese && handleScheduleWhatsApp();
                                    isSpanish && handleScheduleWhatsApp_ES();
                                }}
                                className="Page_Button"
                            >
                                <p className="Page_Button_Main_Text">{t.landingPage.sections.appointments.appointmentBtn.title}</p>
                                <p className="Page_Button_Detail">+55 41 992 416 343</p>
                                <span className="material-icons">phone_forwarded</span>
                            </m.button>

                            <MotionLink whileTap={{ scale: 0.95 }} href={"mailto:contato@tabordalima.com"} className="Page_Button">
                                <p className="Page_Button_Main_Text">{t.common.sendEmailText}</p>
                                <p className="Page_Button_Detail">contato@tabordalima.com</p>
                                <span className="material-icons">email</span>
                            </MotionLink>
                            <MotionLink whileTap={{ scale: 0.95 }} href={"tel:+554133387611"} className="Page_Button">
                                <p className="Page_Button_Main_Text">{t.common.callTelephoneText}</p>
                                <p className="Page_Button_Detail">+55 41 3338 7611</p> <span className="material-icons">fax</span>
                            </MotionLink>

                            <MotionLink whileTap={{ scale: 0.95 }} href={"https://google.com"} className="Page_Button">
                                <p className="Page_Button_Main_Text">{t.common.visitOfficeText}</p>
                                <p className="Page_Button_Detail">Rua Nilo Peçanha, nº648 - Centro Cívico - Curitiba - PR</p>
                                <span className="material-icons">place</span>
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Seção de Novidades | Ajustar o tamanho da seção e o tamanho das imagens que o instafeed recebe */}
                <section id="novidades">
                    <div className="Container Unpadded_Container Dark_Container Half_Width_Container Relative_Container">
                        <NewInstaFeed />
                    </div>

                    <div className="Content_Container Container Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>{t.landingPage.sections.updates.title}</h1>
                            {t.landingPage.sections.updates.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="Intro_Actions_Container">
                            <m.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {}}
                                rel="noopener noreferrer"
                                className="Page_Button"
                                id="newsletter_button"
                            >
                                <p className="Page_Button_Main_Text">{t.common.signNewsletterText}</p>
                                <NewsletterForm />

                                <FontAwesomeIcon icon={faNewspaper} />
                            </m.button>

                            <MotionLink
                                whileTap={{ scale: 0.95 }}
                                href={"https://www.instagram.com/tabordalima.internationallaw/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="Page_Button"
                            >
                                <p className="Page_Button_Main_Text">{t.common.accessInstagramText}</p> <FontAwesomeIcon icon={faInstagram} />
                            </MotionLink>

                            <MotionLink
                                whileTap={{ scale: 0.95 }}
                                href={"https://www.linkedin.com/in/taborda-lima-advogados-aduaneiros-ab872526/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="Page_Button"
                            >
                                <p className="Page_Button_Main_Text">{t.common.accessLinkedinText}</p> <FontAwesomeIcon icon={faLinkedin} />
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Rodapé dos Links */}
                <div className="expertise_footer">
                    {t.expertise_data.map((expertise: Expertise_Data, index: number) => (
                        <div className="expertise_footer_group" key={index}>
                            <h2 className="expertise_footer_group_title">{expertise.name}</h2>
                            <div className="expertise_footer_group_list">
                                {expertise.expertises.map((expertise: Expertise, index: number) => (
                                    <MotionLink whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95 }} key={index} href={expertise.link}>
                                        {expertise.title}

                                        <span className="material-icons">open_in_new</span>
                                    </MotionLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rodapé */}
                <footer>
                    <Image src={"/general_assets/LOGO_TL_Legacy.png"} width={1200} height={400} alt="Logo Taborda Lima" />
                </footer>
            </m.main>
        </>
    );
}
