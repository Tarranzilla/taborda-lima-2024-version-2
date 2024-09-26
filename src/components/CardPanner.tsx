import Image from "next/image";

import { useRef, useEffect, useState } from "react";

type CardPannerProps = {
    image_src: string;
};

const CardPanner: React.FC<CardPannerProps> = ({ image_src }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isDebugOpen, setIsDebugOpen] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [distanceFromCenter, setDistanceFromCenter] = useState(0);
    const [angle, setAngle] = useState(0);

    // Card hover listeners
    useEffect(() => {
        const cardElement = cardRef.current;

        if (cardElement) {
            const handleMouseEnter = (event: MouseEvent) => {
                console.log("Mouse entered the card");
                setIsCardHovered(true);
            };

            const handleMouseLeave = (event: MouseEvent) => {
                console.log("Mouse left the card");
                setIsCardHovered(false);
            };

            cardElement.addEventListener("mouseenter", handleMouseEnter);
            cardElement.addEventListener("mouseleave", handleMouseLeave);

            // Clean up event listeners on component unmount
            return () => {
                cardElement.removeEventListener("mouseenter", handleMouseEnter);
                cardElement.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    // Global mouse move listener
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const globalMousePosition = { x: event.clientX, y: event.clientY };

            setMousePosition({ x: globalMousePosition.x, y: globalMousePosition.y });
            console.log(`Mouse position: X: ${event.clientX}, Y: ${event.clientY}`);

            const cardElement = cardRef.current;
            if (cardElement) {
                const cardRect = cardElement.getBoundingClientRect();
                const cardHalfWidth = cardRect.width / 2;
                const cardHalfHeight = cardRect.height / 2;
                const cardCenterX = cardRect.left + cardHalfWidth;
                const cardCenterY = cardRect.top + cardHalfHeight;

                const delta_x = event.clientX - cardCenterX;
                const delta_y = event.clientY - cardCenterY;

                const rotation_X = delta_y / cardHalfHeight;
                const rotation_Y = delta_x / cardHalfWidth;

                const distance_of_mouse_to_center_of_card = Math.sqrt(delta_x ** 2 + delta_y ** 2);
                setDistanceFromCenter(distance_of_mouse_to_center_of_card);
                const max_distance = Math.sqrt(cardHalfWidth ** 2 + cardHalfHeight ** 2);
                const dynamic_degree = (distance_of_mouse_to_center_of_card * 10) / max_distance;
                setAngle(dynamic_degree);

                cardElement.style.transform = `perspective(1000px) rotate3D(${-rotation_X}, ${rotation_Y}, 0, ${dynamic_degree}deg)`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="card_system_container Desktop_Only">
                {isDebugOpen && (
                    <div className="card_debug_pannel">
                        <h2>debug</h2>
                        <p>Transforming the card in the following manner:</p>
                        <p>{isCardHovered ? "Hovered" : "Not Hovered"}</p>
                        <p>
                            Mouse Position: {mousePosition.x}, {mousePosition.y}
                        </p>
                        <p>Distance from center: {distanceFromCenter}</p>
                        <p>Angle: {angle}</p>
                    </div>
                )}

                <div ref={cardRef} className={"Card_Panner"}>
                    <Image src={image_src} alt={"Card Image"} width={1080} height={1080} />
                    <h1 className={"Card_Panner_State"}>Card {isCardHovered ? "Hovered" : ""}</h1>
                </div>
            </div>
        </>
    );
};

export default CardPanner;
