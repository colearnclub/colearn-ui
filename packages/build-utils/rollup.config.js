const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const dts = require('rollup-plugin-dts').default;
const svgr = require('@svgr/rollup');

const config = [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
    ],
    external: [
      'react',
      'react-dom',
      '@chakra-ui/react',
      '@chakra-ui/icons',
      'react-router-dom',
      'react-day-picker',
      'imagekit-javascript',
      'react-dropzone',
      'nanoid',
    ],
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      svgr({
        typescript: true,
        prettier: false,
        svgo: false,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
        ref: true,
      }),
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
