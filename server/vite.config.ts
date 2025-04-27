import { defineConfig } from "vitest/config";

export default defineConfig(async ({ mode }) => {
  return {
    cacheDir: "../.cache/vite-server",
    build: {
      ssr: "./index.ts",
      sourcemap: true,
    },
    ssr: {
      ...(mode === "production" && {
        noExternal: [
          "body-parser",
          "exceljs",
          "http-errors",
          "knex",
          "mysql2",
          "xss",
        ],
      }),
    },
    test: {
      environment: "node",
      testTimeout: 20000,
    },
  };
});
