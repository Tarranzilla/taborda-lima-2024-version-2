import axios from "axios";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username";

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

export default function InstaFeed() {
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
                    {item.media_type === "VIDEO" && (
                        <video controls>
                            <source src={item.media_url} type="video/mp4" />
                        </video>
                    )}

                    {item.media_type === "IMAGE" && <Image draggable={false} width={400} height={400} src={item.media_url} alt={item.caption} />}
                    {item.media_type === "CAROUSEL_ALBUM" && <Image width={400} height={400} src={item.media_url} alt={item.caption} />}
                </div>
            ))}
        </div>
    );
}
