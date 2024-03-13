import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/23001028_14_GROUP3_Binar-Car-Rental_Platinum/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
})
