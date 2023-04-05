import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import checker from 'vite-plugin-checker';
import publicAssets from './plugins/public-assets.js';
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src/components')
        }
    },
    plugins: [
        vue(),
        publicAssets(),
        VitePWA({ registerType: 'autoUpdate' }),
        checker({
            typescript: true
        }),
    ]
});
