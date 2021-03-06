import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser(),
    filesize(),
  ],
};
