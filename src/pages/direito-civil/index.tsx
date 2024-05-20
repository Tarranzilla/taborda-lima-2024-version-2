import Head from "next/head";
import Image from "next/image";
import { Expertise_Data, Banners_Data, Servicos_Civil } from "@/data/Expertises";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import WhatsAppBtn from "@/components/WhatsAppBtn";

const Direito_Civil_Data = Banners_Data[2];

const DireitoCivil = () => {
    return (
        <>
            <Head>
                <title>Direito Civil | Taborda Lima & Advogados Associados</title>
                <meta name="description" content="Taborda Lima & Advogados Associados" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" key={"pagina_direito_civil"}>
                {/* Botão do WhatsApp Esquerdo*/}
                <WhatsAppBtn position="Left" high />

                <section>
                    <div className="Container Dark_Container Unpadded_Container Expertise_Header Low_Container Ungaped_Container">
                        <div className="Expertise_Header_Top">
                            <div className="Expertise_Header_Top_Nav">
                                <Link href={"/#servicos"} scroll={false} className="Page_Button Expertise_Header_Top_Nav_Button">
                                    <span className="material-icons">arrow_back</span>
                                    <p>Ir a Página Principal</p>
                                </Link>
                            </div>

                            <Image
                                className="Expertise_Header_Img"
                                src={Direito_Civil_Data.image}
                                alt={"Direito Aduaneiro"}
                                width={800}
                                height={400}
                            />
                        </div>
                        <div className="Expertise_Header_Info">
                            <h2 className="Expertise_Header_Info_Subtitle">ÁREA DE EXPERTISE</h2>
                            <h1 className="Expertise_Header_Info_Title">{Direito_Civil_Data.title}</h1>
                            <p className="Expertise_Header_Info_Description">{Direito_Civil_Data.description}</p>
                        </div>
                    </div>

                    <div className="Container Services_List_Container">
                        <div className="Services_List">
                            {Servicos_Civil.map((service) => (
                                <div key={service.title} className="Services_List_Item">
                                    <h2 className="Services_List_Item_Title">{service.title}</h2>
                                    <p className="Services_List_Description">{service.description}</p>
                                    <Link href={service.link} className="Page_Button Services_List_Item_Button">
                                        Mais Detalhes
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

export default DireitoCivil;
