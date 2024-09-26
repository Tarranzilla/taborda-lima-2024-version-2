import "material-icons/iconfont/material-icons.css";
import "@/styles/globals.css";

import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";

import { useRouter } from "next/router";

import { Provider as Redux_Provider } from "react-redux";
import { store as Redux_Store } from "@/store/store";

import Navbar from "@/components/Navbar";
import Cookies from "@/components/Cookies";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Redux_Provider store={Redux_Store}>
                <Navbar />
                <Cookies />

                {/* Página */}
                <AnimatePresence mode="wait">
                    <Component {...pageProps} key={router.pathname} />
                </AnimatePresence>
            </Redux_Provider>
        </>
    );
}
