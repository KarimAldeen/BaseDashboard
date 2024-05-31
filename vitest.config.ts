/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // allows us to use vitest library methods in unit test without explicit imports
    environment: 'jsdom',
    setupFiles: '/src/modules/home/test/setup.ts',  // path to setup file
  },
});