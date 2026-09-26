import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
  ssr: {
    noExternal: ['@fontsource-variable/archivo', '@fontsource-variable/martian-mono'],
  },
});
