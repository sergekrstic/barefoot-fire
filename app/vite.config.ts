import MillionLint from '@million/lint'
// import react from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const ReactCompilerConfig = {}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    MillionLint.vite({ enabled: false }),
    react({ babel: { plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]] } }),
    // react().
  ],
  esbuild: { jsx: 'automatic' },
})
