// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jason-black.github.io',
  base: '/Visio-Relief2',
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
