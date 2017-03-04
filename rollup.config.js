import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/app.js',
  dest: 'public/js/app.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};