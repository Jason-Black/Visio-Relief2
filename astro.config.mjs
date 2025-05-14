// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jason-black.github.io',
  base: '/VisioRelief',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
