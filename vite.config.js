import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), reactRefresh()],
});

