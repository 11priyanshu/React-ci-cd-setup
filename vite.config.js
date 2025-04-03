import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { test } from 'vitest';

export default defineConfig({
  test: {
    globals: true,  // Vitest globals like `test` and `expect`
    environment: 'jsdom', // Testing environment (could be jsdom or node)
  },
});
