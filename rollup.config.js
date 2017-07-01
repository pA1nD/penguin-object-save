module.exports = {
  external: ['penguin.js', 'lodash/fp/find'],
  plugins: [require('rollup-plugin-buble')()],
  format: 'es'
}
