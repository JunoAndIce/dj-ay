// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [
    react(),
    glsl({
      include: ['**/*.glsl', '**/*.frag', '**/*.vert'],
      defaultExtension: 'glsl',
    }),
  ],
});