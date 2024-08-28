import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useSimpleTranslation } from "@/international/use_translation";

import BannerSlider from "@/components/BannerSlider";
import GoogleMap from "@/components/GoogleMap";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import InstaFeed from "@/components/InstaFeed"; // O Instafeed está com problemas.

import { handleScheduleWhatsApp } from "@/utils/WhatsApp";
import NewInstaFeed from "@/components/NewInstaFeed";

export default function Home() {
    const t = useSimpleTranslation();

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

                {/* Seção de Início */}
                <section id="inicio" className="Main_Section LP_Section">
                    <div id="Imagem_Inicial" className="Container Container_Left Image_Container Dark_Container">
                        <Image
                            className="Intro_Logo_Image"
                            src={"/general_assets/taborda_lima_main_logo.png"}
                            width={800}
                            height={600}
                            alt="Escritório Placeholder"
                        />
                    </div>

                    <div className="Container Container_Right Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>{t.landingPage.sections.home.title}</h1>
                            {t.landingPage.sections.home.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="Intro_Actions_Container">
                            <Link href={"/sobre"} className="Page_Button">
                                <p>{t.landingPage.sections.home.aboutUsBtn.title}</p> <span className="material-icons">arrow_forward</span>
                            </Link>
                            <Link href={"/#servicos"} className="Page_Button">
                                <p>{t.landingPage.sections.home.internationalServicesBtn.title}</p>
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                            <Link href={"/#consulta"} className="Page_Button">
                                <p>{t.landingPage.sections.home.scheduleBtn.title}</p> <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Seção de Serviços */}
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
                        <BannerSlider />
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

                        <button
                            onClick={() => {
                                handleScheduleWhatsApp();
                            }}
                            className="Page_Button"
                        >
                            <p>{t.landingPage.sections.appointments.appointmentBtn.title}</p> <span className="material-icons">arrow_forward</span>
                        </button>
                    </div>
                </section>

                {/* Seção de Contato */}
                <section id="contato">
                    <div className="Container Container_Left Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>{t.landingPage.sections.contact.title}</h1>
                            {t.landingPage.sections.contact.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="Intro_Actions_Container">
                            {/*
                            
                            <button className="Page_Button">
                                <p>Rua Nilo Peçanha, nº648 - Centro Cívico - Curitiba - PR</p> <span className="material-icons">place</span>
                            </button>

                            */}

                            <Link href={"mailto:contato@advtabordalima.com.br"} className="Page_Button">
                                <p>contato@advtabordalima.com.br</p>
                                <span className="material-icons">email</span>
                            </Link>
                            <Link href={"tel:+5541992416343"} className="Page_Button">
                                <p>+55 41 992 416 343</p> <span className="material-icons">phone_forwarded</span>
                            </Link>
                            <Link href={"tel:+554133387611"} className="Page_Button">
                                <p>+55 41 3338 7611</p> <span className="material-icons">fax</span>
                            </Link>
                        </div>
                    </div>

                    <div className="Container Container_Right Contact_Form_Container Dark_Container Unpadded_Container">
                        <GoogleMap />
                    </div>
                </section>

                {/* Seção de Novidades */}
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
                            <Link href={"https://www.instagram.com"} target="_blank" rel="noopener noreferrer" className="Page_Button">
                                <p>Instagram</p> <FontAwesomeIcon icon={faInstagram} />
                            </Link>

                            <Link href={"https://www.linkedin.com"} target="_blank" rel="noopener noreferrer" className="Page_Button">
                                <p>LinkedIn</p> <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Rodapé */}
                <footer>
                    <Image src={"/general_assets/mega_logo_taborda_lima.png"} width={1200} height={400} alt="Logo Taborda Lima" />
                </footer>
            </m.main>
        </>
    );
}
