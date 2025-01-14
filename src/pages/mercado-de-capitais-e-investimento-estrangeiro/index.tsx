import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useSimpleTranslation } from "@/international/use_translation";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import WhatsAppBtn from "@/components/WhatsAppBtn";
import { WhatsAppBtnMobile } from "@/components/WhatsAppBtn";

const MercadoCapitaisInvestimentoEstrangeiro = () => {
    const t = useSimpleTranslation();

    const mercado_de_capitais = t.expertise_data[3];

    return (
        <>
            <Head key={"Head_Expertise" + mercado_de_capitais.head_title}>
                <title>{mercado_de_capitais.head_title}</title>
                <meta name="description" content={mercado_de_capitais.head_description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" key={"pagina_direito_migratorio"}>
                {/* Botão do WhatsApp Esquerdo*/}
                <WhatsAppBtn position="Left" high />

                <section>
                    <div className="Container Dark_Container Unpadded_Container Expertise_Header Low_Container Ungaped_Container">
                        <div className="Expertise_Header_Top">
                            <div className="Expertise_Header_Top_Nav">
                                <Link href={"/#servicos"} scroll={false} className="Page_Button Expertise_Header_Top_Nav_Button">
                                    <span className="material-icons">arrow_back</span>
                                    <p>{t.common.returnToMainPage}</p>
                                </Link>
                            </div>

                            <Image
                                className="Expertise_Header_Img"
                                src={mercado_de_capitais.image}
                                alt={"Direito Aduaneiro"}
                                width={800}
                                height={400}
                            />
                        </div>
                        <div className="Expertise_Header_Info">
                            <h2 className="Expertise_Header_Info_Subtitle">{t.common.area_of_expertise}</h2>
                            <h1 className="Expertise_Header_Info_Title">{mercado_de_capitais.name}</h1>
                            <p className="Expertise_Header_Info_Description">{mercado_de_capitais.head_description}</p>
                            <WhatsAppBtnMobile />
                        </div>
                    </div>

                    <div className="Container Services_List_Container">
                        <div className="Services_List">
                            {mercado_de_capitais.expertises.map((service: any) => (
                                <div key={service.title} className="Services_List_Item">
                                    <h2 className="Services_List_Item_Title">{service.title}</h2>
                                    <p className="Services_List_Description">{service.description}</p>
                                    <Link href={service.link} className="Page_Button Services_List_Item_Button">
                                        {t.common.more_details}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </m.main>
        </>
    );
};

export default MercadoCapitaisInvestimentoEstrangeiro;
