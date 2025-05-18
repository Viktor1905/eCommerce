import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Ensure jsdom is used for DOM testing
    globals: true, // Enable globals like `describe`, `it`, and `expect`
    setupFiles: './vitest.setup.ts', // Include the setup file to extend `expect`
  },
});
