import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
   build: {
      lib: {
         entry: 'src/jcb-spinner.js',
         formats: ['es'],
      },
      rollupOptions: {
         external: /^lit/,
      },
   },
   server: {
      port: 8080,
      open: true,
   },
})
