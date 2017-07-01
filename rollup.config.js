module.exports = {
  external: ['penguin.js', 'lodash'],
  plugins: [require('rollup-plugin-buble')()],
  format: 'es'
}
