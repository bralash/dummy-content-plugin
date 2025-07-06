import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/ui.html',
          dest: '.' // ✅ place directly in dist/
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        code: resolve(__dirname, 'src/code.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        dir: 'dist'
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    minify: false
  },
  publicDir: false
});