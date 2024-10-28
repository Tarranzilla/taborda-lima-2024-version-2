import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useSimpleTranslation } from "@/international/use_translation";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import WhatsAppBtn from "@/components/WhatsAppBtn";
import { WhatsAppBtnMobile } from "@/components/WhatsAppBtn";

const DireitoInternacional = () => {
    const t = useSimpleTranslation();

    const direito_internacional = t.expertise_data[1];
    const direito_internacional_banner = t.landingPage.sections.expertise.expertiseBannerList[1];
    const expertises_direito_internacional = t.expertise_data[1].expertises;

    return (
        <>
            <Head>
                <title>{direito_internacional.head_title}</title>
                <meta name="description" content={direito_internacional.head_description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" key={"pagina_direito_internacional"}>
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
                                src={direito_internacional_banner.image}
                                alt={"Direito Aduaneiro"}
                                width={800}
                                height={400}
                            />
                        </div>
                        <div className="Expertise_Header_Info">
                            <h2 className="Expertise_Header_Info_Subtitle">{t.common.area_of_expertise}</h2>
                            <h1 className="Expertise_Header_Info_Title">{direito_internacional_banner.title}</h1>
                            <p className="Expertise_Header_Info_Description">{direito_internacional_banner.description}</p>

                            <WhatsAppBtnMobile />
                        </div>
                    </div>

                    <div className="Container Services_List_Container">
                        <div className="Services_List">
                            {expertises_direito_internacional.map((service: any) => (
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

export default DireitoInternacional;
