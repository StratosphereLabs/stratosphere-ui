import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    eslint(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'StratosphereUI',
      formats: ['es'],
      fileName: 'stratosphere-ui',
    },
    rollupOptions: {
      external: ['daisyui', 'react', 'react-hook-form', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest/setup.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: [
        '**/__tests__/**',
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/index.ts',
        '**/types.ts',
        'src/components/Icons.tsx',
      ],
    },
  },
});
