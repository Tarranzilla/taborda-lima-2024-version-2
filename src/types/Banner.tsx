type Banner = {
    key: string;
    service: string;
    title: string;
    subtitle: string;
    actionBtn?: string;
    actionBtnLink?: string;
    imgSrc: string;
    size: {
        width: number;
        height: number;
    };
};

export default Banner;
