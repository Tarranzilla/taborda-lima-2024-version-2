import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Service_Data } from "@/data/Expertises";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import WhatsAppBtn from "@/components/WhatsAppBtn";
import { WhatsAppBtnMobile } from "@/components/WhatsAppBtn";

import { Exepertise_Data_EN } from "@/content-list/services/english";
import { Exepertise_Data_PT } from "@/content-list/services/portuguese";

import { useSimpleTranslation } from "@/international/use_translation";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: { params: { expertise_key: string }; locale: string }[] = [];

    const expertises_PT = Exepertise_Data_PT[0].expertises;
    const expertises_EN = Exepertise_Data_EN[0].expertises;

    console.log("expertises_PT:", expertises_PT);
    console.log("expertises_EN:", expertises_EN);

    // Add Portuguese paths
    expertises_PT.forEach((expertise) => {
        if (expertise.slug) {
            paths.push({ params: { expertise_key: expertise.slug }, locale: "pt-BR" });
        } else {
            console.error("Missing slug in Portuguese expertise:", expertise);
        }
    });

    // Add English paths
    expertises_EN.forEach((expertise) => {
        if (expertise.slug) {
            paths.push({ params: { expertise_key: expertise.slug }, locale: "en" });
        } else {
            console.error("Missing slug in English expertise:", expertise);
        }
    });

    console.log("paths:", paths);

    return {
        paths,
        fallback: true,
    };
};

const ServicePage = ({ expertise }: { expertise: Service_Data | null }) => {
    const t = useSimpleTranslation();

    if (!expertise) {
        return <div>Expertise not found</div>;
    }

    return (
        <>
            <Head>
                <title>{expertise.title + " | Taborda Lima & Advogados Associados "}</title>
                <meta name="description" content={expertise.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" key={"pagina_direito_civil_" + expertise.slug}>
                {/* Botão do WhatsApp Esquerdo*/}
                <WhatsAppBtn position="Left" high notHidden />

                <section>
                    <div className="Container Dark_Container Unpadded_Container Ungaped_Container Expertise_Header Low_Container">
                        <div className="Expertise_Header_Top">
                            <div className="Expertise_Header_Top_Nav">
                                <Link href={"/#servicos"} scroll={false} className="Page_Button Expertise_Header_Top_Nav_Button">
                                    <span className="material-icons">arrow_back</span>
                                    <p>{t.common.returnToMainPage}</p>
                                </Link>

                                <Link href={"/direito-civil"} scroll={false} className="Page_Button Expertise_Header_Top_Nav_Button">
                                    <span className="material-icons">arrow_back</span>
                                    <p>{t.common.returnToCivilLaw}</p>
                                </Link>
                            </div>
                            <Image className="Expertise_Header_Img" src={expertise.image} alt={expertise.title} width={800} height={400} />
                        </div>
                        <div className="Expertise_Header_Info">
                            <h2 className="Expertise_Header_Info_Subtitle">{expertise.category}</h2>
                            <h1 className="Expertise_Header_Info_Title">{expertise.title}</h1>
                            <p className="Expertise_Header_Info_Description">{expertise.description}</p>

                            <WhatsAppBtnMobile />
                        </div>
                    </div>

                    <div className="Container Services_List_Container">
                        <div className="Service_Full_Description">
                            <span className="Service_Full_Description_Pattern"></span>
                            <h2 className="Service_Full_Description_Title">{expertise.title}</h2>
                            {expertise.full_description.map((paragraph, index) => (
                                <p key={index} className="Service_Full_Description_Paragraph">
                                    {paragraph}
                                </p>
                            ))}
                            <span className="Service_Full_Description_Pattern"></span>
                        </div>
                    </div>
                </section>
            </m.main>
        </>
    );
};

export async function getStaticProps({ params, locale }: { params: { expertise_key: string }; locale: string }) {
    console.log(`getStaticProps called for locale: ${locale}, expertise_key: ${params.expertise_key}`);

    const expertises_PT = Exepertise_Data_PT[0].expertises;
    const expertises_EN = Exepertise_Data_EN[0].expertises;

    // Log the params and locale
    console.log("params:", params);
    console.log("locale:", locale);

    // Get the data for this page based on params
    const expertise_key = params.expertise_key;
    const list = locale === "pt-BR" ? expertises_PT : expertises_EN;
    console.log("expertise key:", expertise_key);

    // Log the expertise lists
    console.log("expertiseList:", expertises_PT);
    console.log("expertiseList_EN:", expertises_EN);

    const expertise = list.find((expertise) => expertise.slug === expertise_key);

    // Log the expertise
    console.log("expertise:", expertise);

    if (!expertise) {
        console.log("expertise not found");
        return {
            notFound: true,
        };
    }

    return {
        props: {
            expertise,
        },
    };
}

export default ServicePage;
