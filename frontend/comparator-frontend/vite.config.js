import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        server: {
            port: parseInt(env.VITE_PORT, 10) || 4000, // Legge dal file .env
            proxy: {
                '/api': {
                    target: 'http://localhost:4000',
                    changeOrigin: true,
                    secure: false,
                },
            },
            fs: {
                allow: ['public'],
            },
            historyApiFallback: true,
        },
        plugins: [react()],
    };
});