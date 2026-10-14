// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Subfolder the site is served from, e.g. BASE_PATH=/nuevo npm run build
  base: process.env.BASE_PATH || '/',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});