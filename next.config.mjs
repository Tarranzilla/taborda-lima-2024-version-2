/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    i18n: {
        locales: ["en", "pt-BR", "es"],
        defaultLocale: "pt-BR",
    },
    images: {
        domains: ["scontent.cdninstagram.com"],
    },
};

export default nextConfig;
