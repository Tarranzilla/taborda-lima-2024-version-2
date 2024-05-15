import "@/styles/globals.css";
import "material-icons/iconfont/material-icons.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
