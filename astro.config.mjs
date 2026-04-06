// @ts-check
// https://astro.build/config
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true, // предзагружать все ссылки на странице
    defaultStrategy: "hover", // загружать при наведении курсора
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Кеширование обработанных изображений
        cacheDir: "node_modules/.astro/assets/cache",
        // Оптимизация качества
        quality: 80,
      },
    },
  },
  build: {
    assets: "assets",
    // Настройки для продакшен-сборки
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      // Настройка кеширования для ассетов
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
          chunkFileNames: "chunks/[name].[hash].js",
          entryFileNames: "pages/[name].[hash].js",
        },
      },
    },
    // Кеширование зависимостей при разработке
    server: {
      fs: {
        strict: false,
      },
    },
    // Оптимизация сборки
    optimizeDeps: {
      include: ["@astrojs/mdx", "@astrojs/sitemap"],
    },
  },
});
