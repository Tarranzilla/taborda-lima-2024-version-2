import { useState, useEffect, useRef } from "react";
import { motion as m, AnimatePresence, useMotionValue } from "framer-motion";
import { useSimpleTranslation } from "@/international/use_translation";

import Image from "next/image";
import Link from "next/link";

type OfficePicture = {
    src: string;
    alt: string;
    size: {
        width: number;
        height: number;
    };
};

type ExpertiseBanner = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const DRAG_LIMIT = 50;

export default function ExpertiseSlider({ padded }: { padded?: boolean }) {
    const t = useSimpleTranslation();
    const expertises = t.landingPage.sections.expertise.expertiseBannerList;

    const [imgIndex, setImgIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const dragX = useMotionValue(0);

    const setDrag = (bool: boolean) => {
        setIsDragging(bool);
    };

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_LIMIT) {
            setImgIndex((prev) => (prev + 1) % expertises.length);
        } else if (x >= DRAG_LIMIT) {
            setImgIndex((prev) => (prev - 1 + expertises.length) % expertises.length);
        }
    };

    return (
        <div className="New_Banner_Container">
            <m.div
                drag="x"
                onDragStart={() => {
                    setDrag(true);
                }}
                onDragEnd={() => {
                    setDrag(false);
                    onDragEnd();
                }}
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x: dragX }}
                animate={{ translateX: `-${imgIndex * 100}%` }}
                transition={{
                    type: "spring",
                    mass: 3,
                    stiffness: 400,
                    damping: 50,
                }}
                className="New_Banner_Wrapper"
            >
                {expertises.map((expertise_banner, index) => (
                    <div key={index} className={padded ? "Expertise_Banner_Slide Padded" : "Expertise_Banner_Slide"}>
                        <h2 className="Banner_Title">{expertise_banner.title}</h2>
                        <p className="Banner_Description">{expertise_banner.description}</p>
                        <Link href={expertise_banner.link} className="Banner_Btn Page_Button">
                            <p>{t.landingPage.sections.expertise.bannerMoreInfoBtn.title}</p>
                        </Link>
                        <Image className="Banner_Img" src={expertise_banner.image} width={800} height={800} alt={expertise_banner.title} />
                    </div>
                ))}
            </m.div>

            <div className="New_Banner_Indicator">
                {expertises.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setImgIndex(index);
                        }}
                        className={imgIndex === index ? "New_Banner_Indicator_Dot active" : "New_Banner_Indicator_Dot"}
                    />
                ))}
            </div>
        </div>
    );
}
