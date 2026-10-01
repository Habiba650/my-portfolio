import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            // Forwards /api requests to the .NET backend during local development
            "/api": {
                target: "http://localhost:5080",
                changeOrigin: true,
            },
        },
    },
});
