'use strict';

const path = require('path')

module.exports = {
  mode: 'production',

  entry: './src/index.js', // webpack 0配置（默认配置）
  // output: './dist/main.js', // webpack 0配置（默认配置）
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}