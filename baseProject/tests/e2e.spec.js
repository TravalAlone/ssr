/*
 * @Author: sheng.wang
 * @Date: 2021-01-17 21:53:58
 * @LastEditTime: 2021-01-17 21:55:50
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/tests/e2e.spec.js
 */

const Rize = require('rize')
const rize = new Rize()
rize
  .goto('https://github.com/')
  .type('input.header-search-input', '123')
  .press('Enter')
  .waitForNavigation()
  .assertSee('123')
  .end()  