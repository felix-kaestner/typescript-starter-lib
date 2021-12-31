import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import {terser} from 'rollup-plugin-terser'
import pkg from './package.json'

/**
 * Flag to indicate build of library
 */
const isProduction = !process.env.ROLLUP_WATCH

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    plugins: [
      resolve(), // so Rollup can resolve packages
      commonjs(), // so Rollup can convert commonjs to an ES module
      typescript(), // so Rollup can convert TypeScript to JavaScript
      replace({
        // hard coded dev/prod builds
        __DEV__: !isProduction,
        // see: https://github.com/rollup/plugins/tree/master/packages/replace#preventassignment
        preventAssignment: true,
      }),
      isProduction && terser(), // minify, but only in production
    ].filter(Boolean),
    output: {
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      name: pkg.name,
      exports: 'default',
    },
  },
  // CommonJS and ES module build.
  {
    input: 'src/index.ts',
    external: ['ms'],
    plugins: [
      typescript(), // so Rollup can convert TypeScript to JavaScript
      replace({
        // preserve to be handled by bundlers
        __DEV__: `(process.env.NODE_ENV !== 'production')`,
        // see: https://github.com/rollup/plugins/tree/master/packages/replace#preventassignment
        preventAssignment: true,
      }),
      isProduction && terser(), // minify, but only in production
    ].filter(Boolean),
    output: [
      {file: pkg.main, format: 'cjs', sourcemap: true, exports: 'default'},
      {file: pkg.module, format: 'esm', sourcemap: true},
    ],
  },
]
