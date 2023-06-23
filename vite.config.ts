import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  plugins: [
    VueRouter(),
    Vue(),
  ]
})
