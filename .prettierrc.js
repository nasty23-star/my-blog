// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],

  // Общие настройки Prettier — сделают код единообразным
  printWidth: 100,           // Длина строки: 100 символов — комфортно для кода
  tabWidth: 2,               // Отступ в 2 пробела
  useTabs: false,            // Пробелы, а не табы
  semi: true,                // Точки с запятой в JS
  singleQuote: true,         // Одинарные кавычки (кроме случаев, где нужны двойные)
  trailingComma: "es5",      // Запятая после последнего элемента (ES5-совместимо)
  bracketSpacing: true,      // Пробелы внутри фигурных скобок: { foo: bar }
  bracketSameLine: false,    // > переносится на новую строку для многострочных тегов
  arrowParens: "always",     // Всегда скобки у стрелочных функций: (x) => x
  endOfLine: "lf",           // Unix-переносы строк — единообразно в команде

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        // Если в astro.config.mjs стоит compressHTML: false — поставь "none".
        // Если compressHTML: true — поставь "html".
        // По умолчанию (Astro 7+) — "jsx".
        astroCompressHTML: "jsx",
      },
    },
  ],
};