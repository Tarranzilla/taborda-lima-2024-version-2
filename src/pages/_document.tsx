import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#bea07d" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
