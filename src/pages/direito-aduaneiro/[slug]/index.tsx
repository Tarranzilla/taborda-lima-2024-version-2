import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Banners_Data, Servicos_Aduaneiro, Service_Data } from "@/data/Expertises";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import WhatsAppBtn from "@/components/WhatsAppBtn";

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on services
    const paths = Servicos_Aduaneiro.map((service) => ({
        params: { slug: service.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

const ServicePage = ({ service }: { service: Service_Data }) => {
    return (
        <>
            <Head>
                <title>{service.title + " | Taborda Lima & Advogados Associados "}</title>
                <meta name="description" content={service.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" key={"pagina_direito_aduaneiro_" + service.slug}>
                {/* Botão do WhatsApp Esquerdo*/}
                <WhatsAppBtn position="Left" high notHidden />

                <section>
                    <div className="Container Dark_Container Unpadded_Container Ungaped_Container Expertise_Header Low_Container">
                        <div className="Expertise_Header_Top">
                            <div className="Expertise_Header_Top_Nav">
                                <Link href={"/#servicos"} className="Page_Button Expertise_Header_Top_Nav_Button">
                                    <span className="material-icons">arrow_back</span>
                                    <p>Ir a Página Principal</p>
                                </Link>

                                <Link href={"/direito-aduaneiro"} className="Page_Button Expertise_Header_Top_Nav_Button">
                                    <span className="material-icons">arrow_back</span>
                                    <p>Ir a Direito Aduaneiro</p>
                                </Link>
                            </div>
                            <Image className="Expertise_Header_Img" src={service.image} alt={service.title} width={800} height={400} />
                        </div>
                        <div className="Expertise_Header_Info">
                            <h2 className="Expertise_Header_Info_Subtitle">DIREITO ADUANEIRO</h2>
                            <h1 className="Expertise_Header_Info_Title">{service.title}</h1>
                            <p className="Expertise_Header_Info_Description">{service.description}</p>
                        </div>
                    </div>

                    <div className="Container Services_List_Container">
                        <div className="Service_Full_Description">
                            <span className="Service_Full_Description_Pattern"></span>
                            <h2 className="Service_Full_Description_Title">{service.title}</h2>
                            {service.full_description.map((paragraph, index) => (
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || typeof params.slug !== "string") {
        return {
            notFound: true,
        };
    }

    const service = Servicos_Aduaneiro.find((service) => service.slug === params.slug);

    if (!service) {
        return {
            notFound: true,
        };
    }

    return { props: { service } };
};

export default ServicePage;
