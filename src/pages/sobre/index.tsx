import { useRef, useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m, useMotionValue, useTransform } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import { teamMembers, TeamMember } from "@/data/Team_Members";
import NewBannerSlider from "@/components/NewBannerSlider";

import { useSimpleTranslation } from "@/international/use_translation";

const officePictures = [
    {
        src: "/office/fotos_escritorio_001.png",
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
        src: "/office/fotos_escritorio_003.png",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
    {
        src: "/office/fotos_escritorio_004.png",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
    {
        src: "/office/fotos_escritorio_005.png",
        alt: "Escritório Taborda Lima & Advogados Associados",
        size: {
            width: 1080,
            height: 1080,
        },
    },
];

const Sobre = () => {
    const t = useSimpleTranslation();

    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current && cardRef.current) {
            const cardWidth = cardRef.current.getBoundingClientRect().width;
            const totalWidth = containerRef.current.scrollWidth - cardWidth;
            setContainerWidth(totalWidth);
        }
    }, [t.team_data]);

    const scrollX = useTransform(x, [0, -containerWidth], [0, containerWidth]);

    return (
        <>
            <Head key={"Sobre_Page_Head"}>
                <title>{t.about_data.head_title}</title>
                <meta name="description" content={t.about_data.head_description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.png" />
            </Head>
            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" className={""} key={"pagina_principal"}>
                {/* Histórico e Membros da Equipe */}
                <section>
                    <div
                        id="a_nossa_historia"
                        className="Container Dark_Container Alt_Paragraphs Centered_Container Padded_Container Full_Width_Paragraphs"
                    >
                        <h1>{t.about_data.title}</h1>
                        {t.about_data.paragraphs.map((paragraph: string, index: number) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="Container Sobre_Equipe">
                        {/*<h1>{t.about_data.team_title}</h1>*/}

                        <m.div
                            ref={containerRef}
                            className="Team_Members_Container_Alt"
                            drag="x"
                            dragConstraints={{ left: -containerWidth, right: 0 }} // Adjust based on your needs
                            style={{ x: scrollX }}
                        >
                            {t.team_data.map((member: TeamMember, index: number) => (
                                <m.div className="Team_Member_Card_Alt" key={index} ref={index === 0 ? cardRef : null}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={1080}
                                        height={1080}
                                        quality={100}
                                        className="Team_Member_Card_Image"
                                    />

                                    <div className="Team_Member_Card_Footer">
                                        <h2 className="Team_Member_Card_Name">{member.name}</h2>
                                        <p className="Team_Member_Card_Role">{member.role}</p>
                                        <Link href={member.memberPage} className="material-icons Team_Member_Card_Link">
                                            read_more
                                        </Link>
                                    </div>
                                </m.div>
                            ))}
                        </m.div>
                    </div>
                </section>
            </m.main>
        </>
    );
};

export default Sobre;

{
    /* Fotos do Escritório
                
                                <section>
                    <div className="Container Special_Container Full_Width_Container">
                        <div ref={officePicturesRef} onMouseDown={handleMouseDownOfficePictures} className="Pictures_Container">
                            {officePictures.map((picture, index) => (
                                <div key={index} className="Picture_Frame">
                                    <Image src={picture.src} alt={picture.alt} width={picture.size.width} height={picture.size.height} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                // Fotos Do Escritorio Especial 
                <section className="Special_Sobre_Img_Banner">
                    <div className="Container Full_Width_Container">
                        <NewBannerSlider pictures={officePictures} padded />
                    </div>
                </section>
                
                
    */
}
