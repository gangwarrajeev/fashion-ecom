import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
        { find: '@src', replacement: path.resolve(__dirname, 'src') },
        { find: '@views', replacement: path.resolve(__dirname, 'src/views') },
        { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
        { find: '@helpers', replacement: path.resolve(__dirname, 'src/helpers') },
        
    ]
}
})
