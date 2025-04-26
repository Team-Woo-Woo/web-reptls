import fs from 'fs'
import path from 'path'

export const SCSS_Logger = {
    warn(message, options) {
        // Mute "Mixed Declarations" warning
        if (options.deprecation && message.includes('mixed-decls')) {
            return
        }
        // List all other warnings
        console.warn(`▲ [WARNING]: ${message}`);
    },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    future: {
        compatibilityVersion: 4
    },
    devtools: { enabled: true },
    inkline: {
        globals: {
            color: 'dark',
            colorMode: 'dark',
            colorModeStrategy: null
        },
    },
    modules: [
        '@inkline/plugin/nuxt',
        '@nuxt/content',
        '@nuxt/image'
    ],
    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            link: [
                { rel: 'icon', type: 'image/png', sizes:'32x32', href:'/favicon/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes:'16x16', href:'/favicon/favicon-16x16.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href:'/favicon/apple-touch-icon.png' },
                { rel: 'manifest', href:'/favicon/site.webmanifest' },
            ]
        }
    },
    devServer: {
        port: 3010,
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    logger: SCSS_Logger,
                },
            },
        },
    },

    experimental: {
        inlineSSRStyles: false,
    },

    build: {
        transpile: ['vue3-text-clamp', 'resize-detector']
    },

    hooks: {
        // 'content:file:afterParse'(ctx) {
        //     console.log('hook');
        //     console.log(ctx);
        // },
        'build:done': () => {
            const inklinePath = path.resolve('.nuxt', 'inkline.mjs');
            if (fs.existsSync(inklinePath)) {
                let content = fs.readFileSync(inklinePath, 'utf-8');
                const options = {
                    color: 'dark',
                    colorMode: 'dark',
                    colorModeStrategy: null
                };
                content = content.replace(
                  /<%= JSON\.stringify\(options, 4\) %>/g,
                  JSON.stringify(options, null, 4)
                );
                fs.writeFileSync(inklinePath, content);
                console.log('✅ Patched inkline.mjs with static config');
            }
        }
    }

});
