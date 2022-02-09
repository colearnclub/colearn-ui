const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts').default;

const external = require('rollup-plugin-peer-deps-external');
const { terser } = require('rollup-plugin-terser');

const config = [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
    ],
    external: ['react', 'react-dom', '@chakra-ui/react'],
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: 'tsconfig.json' }),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts({
        compilerOptions: { preserveSymlinks: false, tsconfig: 'tsconfig.json' },
      }),
    ],
  },
];

module.exports = config;
