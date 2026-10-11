// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig({
    site: "https://surfmemo.app",
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "es",
        routing: {
            prefixDefaultLocale: true,
        },
    },
})
