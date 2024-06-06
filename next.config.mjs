/** @type {import('next').NextConfig} */
import { routerConfig } from './config/router.config.mjs'



const nextConfig = {
    async redirects() {
        return routerConfig
    }
    
};

export default nextConfig;
