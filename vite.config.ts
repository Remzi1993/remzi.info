import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {VitePWA} from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src/components')
        },
    },
    plugins: [
        vue(),
        VitePWA({registerType: 'autoUpdate'}),
        viteCompression({ verbose: false, threshold: 100, algorithm: 'brotliCompress', deleteOriginFile: true }),
    ],
})