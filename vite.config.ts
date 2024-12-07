import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react()],
    server: {
      proxy: {
        '/api1': {
          target: process.env.INFLATION_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api1/, '/'),
        },
        '/api2': {
          target: process.env.WEATHER_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api2/, '/'),
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      css: true,
      reporters: ['verbose'],
      coverage: {
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*'],
        exclude: [],
      },
    },
  };
});
