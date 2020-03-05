import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ '@babel/plugin-external-helpers', '@babel/plugin-proposal-class-properties' ],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
  ]
}
