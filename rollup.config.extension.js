import typescript from '@rollup/plugin-typescript'

const configs = {
  input: 'src/extension/index.ts',
  output: {
    dir: 'dist/extension',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript()],
}

export default configs
