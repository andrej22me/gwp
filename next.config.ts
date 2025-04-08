import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000'
            },
            {
                protocol: 'https',
                hostname: 'kontic.xyz',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'gwpapi.kontic.xyz',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'api.globalwaterpolo.com',
                port: ''
            },
        ],
    }
};

export default nextConfig;
