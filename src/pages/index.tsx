import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import BannerSlider from "@/components/BannerSlider";
import GoogleMap from "@/components/GoogleMap";
import WhatsAppBtn from "@/components/WhatsAppBtn";

import { handleScheduleWhatsApp } from "@/utils/WhatsApp";

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

            {/* Botão do WhatsApp Esquerdo*/}
            <WhatsAppBtn position="Left" />

            {/* Botão do WhatsApp Direito*/}
            <WhatsAppBtn position="Right" />

            {/* Conteúdo Principal */}
            <main className={""}>
                {/* Seção de Início */}
                <section id="inicio" className="Main_Section LP_Section">
                    <div className="Container Container_Left Image_Container Dark_Container">
                        <Image
                            className="Intro_Logo_Image"
                            src={"/general_assets/taborda_lima_main_logo.png"}
                            width={800}
                            height={600}
                            alt="Escritório Placeholder"
                        />
                    </div>

                    <div className="Container Container_Right Centered_Container Padded_Container">
                        <h1>O Escritório</h1>
                        <p>
                            O escritório Taborda Lima & Advogados Associados é reconhecido por sua excelência e agilidade na prestação de serviços
                            jurídicos, com uma trajetória de mais de 27 anos dedicados exclusivamente à advocacia.
                        </p>
                        <p>
                            Com atuação tanto no Brasil quanto no Exterior, o escritório oferece um atendimento personalizado e eficiente aos seus
                            clientes. A atuação em temas de Direito Internacional e Imigração revela seu compromisso e capacidade em bem atender seus
                            clientes juntamente com o apoio advogados parceiros em Nova York, Newark, Miami, Orlando, Washington, Londres, Paris, Roma
                            e em várias outras cidades, inclusive na América Latina.
                        </p>

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
                        <h1>Nossos Serviços</h1>
                        <p>
                            Compreendemos que cada caso é único e merece atenção individualizada. Assim, trabalhamos em estreita colaboração com
                            nossos clientes, desenvolvendo estratégias jurídicas sob medida para alcançar os melhores resultados possíveis.
                        </p>
                        <p>
                            Nosso compromisso com a excelência e a integridade é essencial em cada aspecto de nosso trabalho. Não apenas defendemos os
                            interesses de nossos clientes de forma vigorosa, mas também o fazemos dentro dos mais altos padrões éticos.
                        </p>
                        <p>
                            Isso garante não apenas resultados satisfatórios, mas também a confiança e a satisfação duradouras daqueles que confiam em
                            nossos serviços.
                        </p>
                    </div>

                    <div className="Container Container_Right Banner_Slider_Container Dark_Container Unpadded_Container">
                        <BannerSlider />
                    </div>
                </section>

                {/* Seção de Consulta */}
                <section id="consulta">
                    <div className="Container Container_Left Image_Container Dark_Container">
                        <Image
                            className="Section_Image"
                            src={"/general_assets/consulta_img.png"}
                            width={800}
                            height={600}
                            alt="Agende uma Consulta"
                        />
                    </div>

                    <div className="Container Container_Right Centered_Container Padded_Container">
                        <h1>Consulta</h1>
                        <p className="Smaller_Paragraph">
                            Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar a melhor solução para o seu caso. Entre em
                            contato conosco e agende uma consulta.
                        </p>
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
                        <h1>Contato</h1>
                        <p className="Smaller_Paragraph">
                            Entre em contato conosco para agendar uma consulta ou esclarecer suas dúvidas. Estamos à disposição para ajudá-lo a
                            encontrar a melhor solução para o seu caso.
                        </p>

                        <div className="Intro_Actions_Container">
                            <button className="Page_Button">
                                <p>Rua Nilo Peçanha, nº648 - Centro Cívico - Curitiba - PR</p> <span className="material-icons">place</span>
                            </button>
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
            </main>
            <footer>
                <Image src={"/general_assets/mega_logo_taborda_lima.png"} width={1200} height={400} alt="Logo Taborda Lima" />
            </footer>
        </>
    );
}
