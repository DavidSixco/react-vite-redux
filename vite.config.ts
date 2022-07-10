import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //Configuramos las rutas relativas (alias path) para mayor eficiencia
    //se necesita @types/node para que __dirname no se queje
    alias: {
      '@root': path.resolve(__dirname, './src'),
      '@layout': path.resolve(__dirname, '.src/layout'),
      '@hooks': path.resolve(__dirname, '.src/hooks'),
      '@components': path.resolve(__dirname, './src/components'),
      '@configuration': path.resolve(__dirname, './src/configuration'),
      '@enum': path.resolve(__dirname, './src/enum'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@types': path.resolve(__dirname, './src/types'),
    }
  },
  plugins: [react()]
})
