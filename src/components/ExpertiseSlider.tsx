import { useState } from "react";
import { motion as m, useMotionValue } from "framer-motion";
import { useSimpleTranslation } from "@/international/use_translation";

import Image from "next/image";
import Link from "next/link";

const MotionLink = m(Link);

const DRAG_LIMIT = 50;

export default function ExpertiseSlider({ padded }: { padded?: boolean }) {
    const t = useSimpleTranslation();
    const expertises = t.expertise_data;

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
                        <h2 className="Banner_Title">{expertise_banner.name}</h2>
                        <p className="Banner_Description">{expertise_banner.head_description}</p>
                        <MotionLink whileTap={{ scale: 0.95 }} href={expertise_banner.slug} className="Banner_Btn">
                            <p>{t.landingPage.sections.expertise.bannerMoreInfoBtn.title}</p>
                            <span className="material-icons">arrow_forward</span>
                        </MotionLink>
                        <Image className="Banner_Img" src={expertise_banner.image} width={800} height={800} alt={expertise_banner.name} />
                    </div>
                ))}
            </m.div>

            <div className="New_Banner_Indicator">
                {expertises.map((_, index) => (
                    <m.div
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.2 }}
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
