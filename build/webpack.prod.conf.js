'use strict'
const { CleanWebPackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugin: [
    new CleanWebPackPlugin()
  ]
}