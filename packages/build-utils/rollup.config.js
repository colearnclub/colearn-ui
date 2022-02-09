const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const dts = require('rollup-plugin-dts').default;

const external = require('rollup-plugin-peer-deps-external');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const esbuild = require('rollup-plugin-esbuild').default;

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

      // esbuild({
      //   // minify: true,
      //   sourceMap: true,
      //   jsx: 'transform',
      //   jsxFactory: 'React.createElement',
      //   jsxFragment: 'React.Fragment',
      //   tsconfig: 'tsconfig.json',
      // }),
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
