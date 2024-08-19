import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import BannerSlider from "@/components/BannerSlider";
import GoogleMap from "@/components/GoogleMap";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import InstaFeed from "@/components/InstaFeed";

import { handleScheduleWhatsApp } from "@/utils/WhatsApp";
import NewInstaFeed from "@/components/NewInstaFeed";

export default function Home() {
    return (
        <>
            <Head>
                <title>Taborda Lima & Advogados Associados</title>
                <meta
                    name="description"
                    content="Com atuação tanto no Brasil quanto no Exterior, o escritório oferece um atendimento personalizado e eficiente aos seus
                            clientes. A atuação em temas de Direito Internacional e Imigração revela seu compromisso e capacidade em bem atender seus
                            clientes juntamente com o apoio advogados parceiros em Nova York, Newark, Miami, Orlando, Washington, Londres, Paris, Roma
                            e em várias outras cidades, inclusive na América Latina."
                />
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
                            <h1>O Escritório</h1>
                            <p>
                                Reconhecidos pela excelência e agilidade na prestação de serviços jurídicos, possuímos uma trajetória de quase 30 anos
                                dedicados exclusivamente à advocacia.
                            </p>
                            <p>
                                Com atuação tanto no Brasil quanto no Exterior, nosso escritório oferece um atendimento personalizado e eficiente em
                                temas de Direito Internacional e Imigração.
                            </p>
                            <p>
                                Estamos de prontidão para bem atender nossos clientes juntamente com o apoio de advogados parceiros em Nova York,
                                Newark, Miami, Orlando, Washington, Londres, Paris, Roma e em diversas localidades da América Latina.
                            </p>
                        </div>

                        <div className="Intro_Actions_Container">
                            <Link href={"/sobre"} className="Page_Button">
                                <p>Saiba Mais Sobre o Escritório</p> <span className="material-icons">arrow_forward</span>
                            </Link>
                            <Link href={"/#servicos"} className="Page_Button">
                                <p>Conheça Nossos Serviços </p>
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                            <Link href={"/#consulta"} className="Page_Button">
                                <p>Agende uma Consulta</p> <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Seção de Serviços */}
                <section className="Main_Section LP_Section" id="servicos">
                    <div className="Container Container_Left Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>Nossos Serviços</h1>
                            <p>Compreendemos que cada caso é único e merece atenção individualizada.</p>
                            <p>
                                Assim, trabalhamos em estreita colaboração com nossos clientes, desenvolvendo estratégias jurídicas sob medida para
                                alcançar os melhores resultados possíveis.
                            </p>
                            <p>
                                Nosso compromisso com a excelência e a integridade é essencial em cada aspecto de nosso trabalho. Não apenas
                                defendemos os interesses de nossos clientes de forma vigorosa, mas também o fazemos dentro dos mais altos padrões
                                éticos.
                            </p>
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
                            <h1>Consulta</h1>
                            <p className="Smaller_Paragraph">
                                Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para o seu caso.
                            </p>
                            <p>Entre em contato conosco e agende uma consulta em poucos minutos!</p>
                        </div>

                        <button
                            onClick={() => {
                                handleScheduleWhatsApp();
                            }}
                            className="Page_Button"
                        >
                            <p>Agende uma Consulta</p> <span className="material-icons">arrow_forward</span>
                        </button>
                    </div>
                </section>

                {/* Seção de Contato */}
                <section id="contato">
                    <div className="Container Container_Left Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>Contato</h1>
                            <p className="Smaller_Paragraph">
                                Estamos à disposição para agendar consultas, esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para o
                                seu caso.
                            </p>
                        </div>

                        <div className="Intro_Actions_Container">
                            {/*
                            
                            <button className="Page_Button">
                                <p>Rua Nilo Peçanha, nº648 - Centro Cívico - Curitiba - PR</p> <span className="material-icons">place</span>
                            </button>

                            */}

                            <button className="Page_Button">
                                <p>contato@advtabordalima.com.br</p>
                                <span className="material-icons">email</span>
                            </button>
                            <button className="Page_Button">
                                <p>+55 41 992 416 343</p> <span className="material-icons">phone_forwarded</span>
                            </button>
                            <button className="Page_Button">
                                <p>+55 41 3338 7611</p> <span className="material-icons">fax</span>
                            </button>
                        </div>
                    </div>

                    <div className="Container Container_Right Contact_Form_Container Dark_Container Unpadded_Container">
                        <GoogleMap />
                    </div>
                </section>

                <section id="novidades">
                    <div className="Container Unpadded_Container Dark_Container Half_Width_Container Relative_Container">
                        <NewInstaFeed />
                    </div>

                    <div className="Content_Container Container Centered_Container Padded_Container">
                        <div className="Coisa">
                            <h1>Novidades</h1>
                            <p>
                                Nos siga nas redes sociais e confira as últimas atualizações sobre as peculiaridades das nossas áreas de atuação,
                                assim como notícias e informações sobre a advocacia no Brasil e no mundo!
                            </p>
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

                <footer>
                    <Image src={"/general_assets/mega_logo_taborda_lima.png"} width={1200} height={400} alt="Logo Taborda Lima" />
                </footer>
            </m.main>
        </>
    );
}
