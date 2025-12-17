/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wakatime.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "www.5mu.com.au",
                port: "",
            },
            {
                protocol: "https",
                hostname: "www.murraybridge.news",
                port: "",
            },
            {
                protocol: "https",
                hostname: "murrayvalleystandard.com.au",
                port: "",
            },
        ],
    },
};

export default nextConfig;
