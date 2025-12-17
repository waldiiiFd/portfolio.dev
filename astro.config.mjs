// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      'import.meta.env.PUBLIC_EMAILJS_SERVICE_ID': JSON.stringify(process.env.PUBLIC_EMAILJS_SERVICE_ID),
      'import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.PUBLIC_EMAILJS_TEMPLATE_ID),
      'import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.PUBLIC_EMAILJS_PUBLIC_KEY),
      'import.meta.env.PUBLIC_RECIPIENT_EMAIL': JSON.stringify(process.env.PUBLIC_RECIPIENT_EMAIL),
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing:{
      prefixDefaultLocale: true,
    }
  },
  site: 'https://waldofernandezdev.netlify.app',
  integrations: [sitemap({
  i18n: {
    defaultLocale: 'en',
    locales: {
      en: 'en',
      es: 'es',
    },
  },
})],

});