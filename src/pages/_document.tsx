import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#bea07d" />
                <Script
                    id="mcjs"
                    strategy="afterInteractive"
                    src="https://chimpstatic.com/mcjs-connected/js/users/f93e5aefaaf238b53c65406d4/e4b0879b6d7d67b8101a9d717.js"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
