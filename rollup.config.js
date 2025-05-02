import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/scroll.js',
  output: [
    {
      file: 'dist/scroll.umd.js',
      format: 'umd',
      name: 'ScrollObserver', // Global variable for browser environments
    },
    {
      file: 'dist/scroll.esm.js',
      format: 'es', // ES Module output
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/scrolljs.css', dest: 'dist' }
      ],
    }),
  ],
};