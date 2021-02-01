/*
 * @Author: your name
 * @Date: 2021-01-14 13:35:09
 * @LastEditTime: 2021-01-24 12:30:55
 * @LastEditors: sheng.wang
 * @Description: In User Settings Edit
 * @FilePath: /SSR/baseProject/src/server/config/index.js
 */
const path = require('path')
let config = {
    viewDir: path.join(__dirname, '..', 'views'),
    staticDir: path.join(__dirname, '..', 'assets')
}

if (process.env.NODE_ENV === 'development') {
    const devConfig = {
        port: 3000,
        cache: false,
    }
    config = {...config, ...devConfig}
} else if (process.env.NODE_ENV === 'production') {
    const prodConfig = {
        port: 80,
        cache: 'memory',
    }
    config = {...config,...prodConfig}
}
if (false) {
    console.log('王盛')
}
module.exports = config