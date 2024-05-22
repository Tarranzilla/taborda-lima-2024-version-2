import { useState, useEffect, useRef } from "react";
import { motion as m, AnimatePresence, useMotionValue } from "framer-motion";

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

const DRAG_LIMIT = 50;

export default function NewBannerSlider() {
    const [imgIndex, setImgIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const dragX = useMotionValue(0);

    const setDrag = (bool: boolean) => {
        setIsDragging(bool);
    };

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_LIMIT) {
            setImgIndex((prev) => (prev + 1) % officePictures.length);
        } else if (x >= DRAG_LIMIT) {
            setImgIndex((prev) => (prev - 1 + officePictures.length) % officePictures.length);
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
                {officePictures.map((picture, index) => (
                    <div key={index} className="New_Banner_Slide">
                        <img src={picture.src} alt={picture.alt} width={picture.size.width} height={picture.size.height} />
                    </div>
                ))}
            </m.div>

            <div className="New_Banner_Indicator">
                {officePictures.map((_, index) => (
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
