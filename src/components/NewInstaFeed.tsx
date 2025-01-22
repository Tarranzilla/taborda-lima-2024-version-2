import { useState, useEffect, useRef } from "react";
import { motion as m, AnimatePresence, useMotionValue } from "framer-motion";
import axios from "axios";
import Image from "next/image";

type FeedItem = {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
    thumbnail_url: string;
    timestamp: string;
    username: string;
};

const DRAG_LIMIT = 50;

export default function NewInstaFeed() {
    const [feedList, setFeedList] = useState<FeedItem[]>([]);

    async function getInstagramPosts() {
        const { data } = await axios.get("/api/instagram");
        console.log(data.data);
        setFeedList(data.data);
    }

    const [imgIndex, setImgIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const dragX = useMotionValue(0);

    const setDrag = (bool: boolean) => {
        setIsDragging(bool);
    };

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_LIMIT) {
            setImgIndex((prev) => (prev + 1) % feedList.length);
        } else if (x >= DRAG_LIMIT) {
            setImgIndex((prev) => (prev - 1 + feedList.length) % feedList.length);
        }
    };

    useEffect(() => {
        getInstagramPosts();
    }, []);

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
                {feedList.map((item) => (
                    <div className="New_Insta_Feed_Slide" key={item.id}>
                        <a
                            className="Insta_Feed_Slide_Link material-icons"
                            target="_blank"
                            rel="noopener noreferer"
                            title="Leia a publicação no instagram!"
                            href={item.permalink}
                        >
                            library_books
                        </a>

                        {item.media_type === "VIDEO" && <InstaFeedVideo {...item} />}
                        {item.media_type === "IMAGE" && <img width={400} height={400} src={item.media_url} alt={item.caption} />}
                        {item.media_type === "CAROUSEL_ALBUM" && <img width={400} height={400} src={item.media_url} alt={item.caption} />}
                    </div>
                ))}
            </m.div>

            <div className="New_Banner_Indicator">
                {feedList.map((_, index) => (
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

const InstaFeedVideo = (item: any) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <>
            <video ref={videoRef}>
                <source src={item.media_url} type="video/mp4" />
            </video>
            <button className={`Insta_Feed_Video_Button ${isPlaying ? "playing" : ""}`} onClick={handlePlayPause}>
                {isPlaying ? <span className="material-icons">pause_circle</span> : <span className="material-icons">play_circle_filled</span>}
            </button>
        </>
    );
};

/*

function InstaFeed() {
    const [feedList, setFeedList] = useState<FeedItem[]>([]);

    async function getInstagramPosts() {
        const { data } = await axios.get("/api/instagram");
        // console.log(data.data);
        setFeedList(data.data);
    }

    const containerRef = useRef<HTMLDivElement>(null);
    const handleMouseDown = (e: any) => {
        const container = containerRef.current;

        if (!container) return;

        let startX = e.clientX - container.offsetLeft;
        let scrollLeft = container.scrollLeft;

        const handleMouseMove = (e: any) => {
            const x = e.clientX - container.offsetLeft;
            const walk = (x - startX) * 6; // scroll-fast
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener(
            "mouseup",
            () => {
                container.removeEventListener("mousemove", handleMouseMove);
            },
            { once: true }
        );
    };

    useEffect(() => {
        getInstagramPosts();
    }, []);

    return (
        <div ref={containerRef} onMouseDown={handleMouseDown} className="Insta_Feed_Wrapper">
            {feedList.map((item) => (
                <div className="Insta_Feed_Item" key={item.id}>
                    {item.media_type === "VIDEO" && <InstaFeedVideo {...item} />}
                    {item.media_type === "IMAGE" && (
                        <Image priority draggable={false} width={400} height={400} src={item.media_url} alt={item.caption} />
                    )}
                    {item.media_type === "CAROUSEL_ALBUM" && <Image priority width={400} height={400} src={item.media_url} alt={item.caption} />}
                </div>
            ))}
        </div>
    );
}

*/
