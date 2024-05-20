import Head from "next/head";
import Image from "next/image";
import { Expertise_Data, Banners_Data, Servicos_Internacional } from "@/data/Expertises";
import Link from "next/link";

const Direito_Internacional_Data = Banners_Data[1];

const DireitoInternacional = () => {
    return (
        <>
            <Head>
                <title>Direito Internacional | Taborda Lima & Advogados Associados</title>
                <meta name="description" content="Taborda Lima & Advogados Associados" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Botão do WhatsApp Esquerdo*/}
            <div className="WhatsApp_Action_Container Left WhatsApp_High_Container">
                <button className="Page_Button WhatsApp_Btn">
                    <p>Fale Conosco Pelo WhatsApp!</p>
                </button>
                <div className="WhatsApp_Action_Logo">
                    <svg
                        className="WhatsApp_Action_Logo_Vector"
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.736 46.1086C20.8928 46.0338 26.76 43.1644 27.8025 42.7918C28.2282 42.6399 28.6842 42.4918 29.1691 42.4918C29.9614 42.4918 30.6269 42.8839 31.1453 43.6541C31.7314 44.5193 33.5056 46.5791 34.0538 47.1944C34.1254 47.2756 34.2231 47.3726 34.2817 47.3726C34.3342 47.3726 35.2422 47.0013 35.5171 46.8827C41.811 44.1674 46.5883 37.6379 47.2433 36.5368C47.3369 36.3785 47.3408 36.3066 47.3416 36.3066C47.3186 36.2228 47.1069 36.012 46.9977 35.9033C46.6781 35.5893 46.3319 35.1754 45.9969 34.775C45.8383 34.5852 45.6795 34.3953 45.5235 34.2162C45.0375 33.6546 44.8211 33.2187 44.5703 32.7137L44.4388 32.4513C43.8263 31.2428 44.3495 30.2229 44.5185 29.8936C44.6573 29.618 47.1346 23.6798 47.398 23.056C48.0314 21.5505 48.8683 20.8496 50.0314 20.8496C50.1393 20.8496 50.0314 20.8496 50.4839 20.8686C51.035 20.8916 54.036 21.284 55.3629 22.1147C56.77 22.9958 59.1504 25.8042 59.1504 30.7432C59.1504 35.1884 56.3101 39.3854 55.0906 40.9817C55.0603 41.0219 55.0046 41.1036 54.9239 41.2209C50.2537 47.9947 44.4318 53.0147 38.5298 55.3562C32.8479 57.6103 30.1574 57.8709 28.6277 57.8709H28.6275C27.9847 57.8709 27.4702 57.8208 27.0163 57.7764L26.7283 57.7492C24.7655 57.5763 20.452 55.3565 19.4708 52.6485C18.6979 50.5156 18.4941 48.1852 19.0083 47.3394C19.3605 46.7643 19.9675 46.475 20.736 46.1086Z"
                            fill="#BEA07D"
                        />
                        <path
                            d="M39.2899 0C60.9564 0 78.5834 17.4945 78.5834 38.9982C78.5834 45.9532 76.7221 52.7613 73.1962 58.7197L79.945 78.6275C80.0707 78.9987 79.9772 79.4091 79.7027 79.6886C79.5045 79.8909 79.2356 80 78.9611 80C78.8559 80 78.7499 79.9842 78.6466 79.9512L57.8881 73.3548C52.2076 76.3899 45.7873 77.992 39.2896 77.992C17.6252 77.9922 0 60.4995 0 38.9982C0 17.4945 17.6252 0 39.2899 0ZM39.2899 69.8686C45.4039 69.8686 51.3258 68.1031 56.4161 64.7629C56.5873 64.6504 56.786 64.5927 56.986 64.5927C57.0917 64.5927 57.1977 64.6088 57.3008 64.6416L67.6995 67.947L64.3426 58.0434C64.2341 57.7229 64.2884 57.3694 64.4884 57.0961C68.3647 51.7995 70.4138 45.5416 70.4138 38.9982C70.4138 21.974 56.4517 8.12364 39.2902 8.12364C22.1307 8.12364 8.17013 21.974 8.17013 38.9982C8.16987 56.0203 22.1301 69.8686 39.2899 69.8686Z"
                            fill="#BEA07D"
                        />
                    </svg>
                </div>
            </div>

            <main>
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
                                src={Direito_Internacional_Data.image}
                                alt={"Direito Aduaneiro"}
                                width={800}
                                height={400}
                            />
                        </div>
                        <div className="Expertise_Header_Info">
                            <h2 className="Expertise_Header_Info_Subtitle">ÁREA DE EXPERTISE</h2>
                            <h1 className="Expertise_Header_Info_Title">{Direito_Internacional_Data.title}</h1>
                            <p className="Expertise_Header_Info_Description">{Direito_Internacional_Data.description}</p>
                        </div>
                    </div>

                    <div className="Container Services_List_Container">
                        <div className="Services_List">
                            {Servicos_Internacional.map((service) => (
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
            </main>
        </>
    );
};

export default DireitoInternacional;
