/*
 * @Author: sheng.wang
 * @Date: 2021-01-17 22:42:05
 * @LastEditTime: 2021-01-21 23:59:02
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /SSR/baseProject/webpack.config.js
 */
const { argv } = require('yargs')
const { merge } = require('webpack-merge')
const _mode = argv.mode || 'development'
const _mergeConfig = require(`./build/webpack.${_mode}.js`)
const { sync } = require('glob')
const files = sync('./src/web/views/books/**/*.entry.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')

let _entry = {}
let _plugins = []
for (const file of files) {
  if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js/.test(file)) {
    const entryKey = RegExp.$1
    _entry[entryKey] = file
    const [dist, template] = entryKey.split('-')
    _plugins.push(new HtmlWebpackPlugin({
      filename: `../views/${dist}/pages/${template}.html`,
      template: `./src/web/views/${dist}/pages/${template}.html`,
      chunks: [entryKey]
    }))
  }
}
const webpackConfig = {
  entry: _entry,
  output: {
    path: join(__dirname, './dist/assets'),
    filename: 'scripts/[name].bundle.js',
    // chunks: []
  },
  plugins: [..._plugins]
}
module.exports = merge(_mergeConfig, webpackConfig)