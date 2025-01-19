import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'src/types/auto-imports.d.ts', // 使用typescript，需要指定生成对应的d.ts文件或者设置为true,生成默认导入d.ts文件
      dirs: ['src/stores', 'src/components', 'src/views', 'src/common'],
      eslintrc: {
        enabled: true, // 默认关闭，设置为 true 自动生成 ESLint 配置文件
        filepath: './.eslintrc-auto-import.json', // 配置文件路径
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后端的 Spring Boot 服务地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 可选，移除 /api 前缀
      },
    },
  },
  resolve: {
    // 设置文件./src路径为 @
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }

})