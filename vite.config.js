// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    glsl({
      include: ['**/*.glsl', '**/*.frag', '**/*.vert'],
      defaultExtension: 'glsl',
    }),
  ],
  base: "/dj-ay"
});