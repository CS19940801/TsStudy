"use strict"
const merge = require('webpack-merge')
const baseConfig = require('.webpack.base.conf')
const devConfig = require('.webpack.dev.conf')
const proConfig = require('.webpack.pro.conf')

let config = process.NODE_ENV === 'development' ? devConfig : proConfig;

module.exports = merge(baseConfig, config);