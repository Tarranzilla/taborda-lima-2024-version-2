import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

import { Banners_Data } from "@/data/Expertises";

const BannerSlider = () => {
    const [currentBanner, setCurrentBanner] = useState(2);

    function nextBanner() {
        setCurrentBanner((currentBanner + 1) % Banners_Data.length);
    }

    function prevBanner() {
        setCurrentBanner((currentBanner - 1 + Banners_Data.length) % Banners_Data.length);
    }

    return (
        <div className="Banner_Slider">
            <button
                className="Banner_Slider_Btn Prev_Btn"
                onClick={() => {
                    prevBanner();
                }}
            >
                <span className="material-icons">arrow_back_ios</span>
            </button>

            <AnimatePresence mode="wait">
                {Banners_Data.map(
                    (banner, index) =>
                        index === currentBanner && (
                            <m.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Banner">
                                <h2 className="Banner_Title">{banner.title}</h2>
                                <p className="Banner_Description">{banner.description}</p>
                                <Link href={banner.link} className="Banner_Btn Page_Button">
                                    <p>Mais Informações</p>
                                </Link>
                                <Image className="Banner_Img" src={banner.image} width={800} height={800} alt={banner.title} />
                            </m.div>
                        )
                )}
            </AnimatePresence>

            <button
                className="Banner_Slider_Btn Next_Btn"
                onClick={() => {
                    nextBanner();
                }}
            >
                <span className="material-icons">arrow_forward_ios</span>
            </button>

            <div className="Banner_Slider_Indicator">
                {/* The number of dots should match the number of banners */}
                {Banners_Data.map((_, index) => (
                    <span
                        key={index}
                        className={`Banner_Slider_Indicator_Dot ${index === currentBanner ? "Active" : ""}`}
                        onClick={() => setCurrentBanner(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
