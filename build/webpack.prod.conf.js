'use strict'
// const { CleanWebPackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   plugin: [
//     new CleanWebPackPlugin()
//   ]
// }
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}
