import { useRef } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import { teamMembers, TeamMember } from "@/data/Team_Members";

const Sobre = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: any) => {
        const container = containerRef.current;

        if (!container) return;

        let startX = e.clientX - container.offsetLeft;
        let scrollLeft = container.scrollLeft;

        const handleMouseMove = (e: any) => {
            const x = e.clientX - container.offsetLeft;
            const walk = (x - startX) * 3; // scroll-fast
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener(
            "mouseup",
            () => {
                container.removeEventListener("mousemove", handleMouseMove);
            },
            { once: true }
        );
    };

    return (
        <>
            <Head key={"Sobre_Page_Head"}>
                <title>Sobre | Taborda Lima & Advogados Associados</title>
                <meta
                    name="description"
                    content="Fundado em Curitiba em 1996 pela Dra. Liana Maria Taborda Lima, o escritório Taborda Lima & Advogados Associados se
                    destaca pela excelência e profissionalismo. Com uma equipe experiente e altamente qualificada, o escritório tem quase três
                    décadas de atuação no mercado jurídico, sempre atualizado com as mais recentes mudanças e inovações legais."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" className={""} key={"pagina_principal"}>
                <section>
                    <div className="Container Dark_Container Alt_Paragraphs Centered_Container Padded_Container Full_Width_Paragraphs">
                        <h1>A Nossa História</h1>
                        <p>
                            Fundado em Curitiba em 1996 pela Dra. Liana Maria Taborda Lima, o escritório Taborda Lima & Advogados Associados se
                            destaca pela excelência e profissionalismo. Com uma equipe experiente e altamente qualificada, o escritório tem quase três
                            décadas de atuação no mercado jurídico, sempre atualizado com as mais recentes mudanças e inovações legais.
                        </p>
                        <p>
                            Inicialmente focado no Direito Aduaneiro, o escritório rapidamente se estabeleceu como referência na área, oferecendo
                            serviços jurídicos de alta qualidade. O conhecimento especializado e o estudo contínuo dos temas aduaneiros permitem ao
                            Taborda Lima & Advogados Associados prestar um atendimento distinto e eficiente.
                        </p>
                        <p>
                            Os profissionais do escritório são especialistas, mestres e doutores em diversas áreas do Direito, incluindo Direito
                            Aduaneiro, Migratório, Administrativo e Tributário. Com uma visão abrangente e internacional, eles se dedicam a oferecer
                            excelência em todas as áreas de atuação.
                        </p>
                        <p>
                            A atuação em Direito Internacional e Imigração reforça o compromisso do escritório em atender bem seus clientes. Com
                            parceiros em Nova York, Newark, Miami, Orlando, Washington, Londres, Paris, Roma e várias outras cidades, incluindo a
                            América Latina, o Taborda Lima & Advogados Associados oferece uma rede de apoio global para questões jurídicas complexas.
                        </p>
                        <p>
                            Com um compromisso firme com a ética e a responsabilidade, o Taborda Lima & Advogados Associados se dedica à resolução de
                            conflitos e à satisfação dos clientes. Sua missão é trabalhar com qualidade, entusiasmo e lealdade, garantindo um serviço
                            jurídico de excelência.
                        </p>
                    </div>
                    <div className="Container">
                        <h1>Conheça a Nossa Equipe</h1>

                        <div ref={containerRef} onMouseDown={handleMouseDown} className="Team_Members_Container_Alt">
                            {teamMembers.map((member, index) => (
                                <div className="Team_Member_Card_Alt" key={index}>
                                    <span className="Team_Image_Placeholder"></span>

                                    <div className="Team_Member_Card_Footer">
                                        <h2 className="Team_Member_Card_Name">{member.name}</h2>
                                        <p className="Team_Member_Card_Role">{member.role}</p>
                                        <Link href={member.memberPage} className="material-icons Team_Member_Card_Link">
                                            read_more
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Container Special_Container Full_Width_Container"></div>
                </section>
            </m.main>
        </>
    );
};

export default Sobre;
