import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: process.env.BUILD_DIR || 'build',
    emptyOutDir: true,
    cssCodeSplit: false,
    // Read by scripts/prerender.mjs to preload each page's chunks, then deleted.
    manifest: true,
  },
  ssr: {
    noExternal: ['@fontsource-variable/archivo', '@fontsource-variable/martian-mono'],
  },
});
