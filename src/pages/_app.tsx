import "material-icons/iconfont/material-icons.css";
import "@/styles/globals.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

import { useRouter } from "next/router";

import { Provider as Redux_Provider } from "react-redux";
import { store as Redux_Store } from "@/store/store";

import { useSimpleTranslation } from "@/international/use_translation";

import { Exepertise_Data_EN } from "@/content-list/services/english";
import { Exepertise_Data_PT } from "@/content-list/services/portuguese";
import { Expertise } from "@/content-list/services/english";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenuOpen } from "@/store/slices/interface_slice";
import { RootState } from "@/store/store";

import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
    const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);
    const router = useRouter();
    const isPrivacyPage = router.pathname === "/privacidade";

    const t = useSimpleTranslation();

    return (
        <>
            <Redux_Provider store={Redux_Store}>
                <Navbar />
                {/* Cookies */}
                <AnimatePresence>
                    {!isCookiesAccepted && !isPrivacyPage && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Cookies_Banner">
                            <div className="Cookies_Banner_Content">
                                <div className="Cookies_Header">
                                    <span className="material-icons Cookie_Icon">cookie</span>
                                    <h1 className="Cookies_Title">{t.cookies.title}</h1>
                                </div>
                                <div className="Cookies_Paragraphs">
                                    {t.cookies.paragraphs.map((paragraph, index) => (
                                        <p key={index} className="Cookie_Paragraph">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="Cookie_Button"
                                onClick={() => {
                                    setIsCookiesAccepted(true);
                                    localStorage.setItem("cookiesAccepted", "true");
                                }}
                            >
                                <span className="material-icons">done</span>
                                {t.cookies.btnText}
                            </button>
                            <button
                                onClick={() => {
                                    router.push("/privacidade");
                                    //setIsModalOpen(false);
                                }}
                                className="Cookie_Button"
                            >
                                {t.common.knowMoreBtn?.title}
                                <span className="material-icons">info</span>
                            </button>
                        </m.div>
                    )}
                </AnimatePresence>

                {/* Página */}
                <AnimatePresence mode="wait">
                    <Component {...pageProps} />
                </AnimatePresence>
            </Redux_Provider>
        </>
    );
}
