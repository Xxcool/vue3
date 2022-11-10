import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import UnoCSS from 'unocss/vite';

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd());
  const { VITE_APP_ENV } = viteEnv;
  return {
    /** 打包时根据实际情况修改 base */
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: [
      vue(),
      // 按需引入ElementPlus，自动注册组件
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: false
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      }),
      UnoCSS()
    ],
    resolve: {
      // 设置别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    css: {
      preprocessorOptions: {
        // 覆盖element的默认主题
        scss: {
          additionalData: `@use "./src/styles/theme.scss" as *;`
        }
      }
    },
    server: {
      host: '0.0.0.0',
      open: true,
      // 设置 https 代理
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  };
});
