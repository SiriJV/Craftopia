import { defineConfig } from "vite";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: 'https://minecraft-api.com/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
        cors: true,
    },
});