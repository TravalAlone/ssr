/*
 * @Author: sheng.wang
 * @Date: 2021-01-25 11:13:25
 * @LastEditTime: 2021-01-25 11:17:32
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /bigpipe/demo.js
 */


const http = require('http');
const memeye = require('memeye');

memeye()
let str = '';
for (let i = 0; i < 1024 * 10; i++) {
  str += 'a'
}

const bufStr = buffer.from(str)
const server = http.createServer(function (req, res) {
  if (req.url === '/buffer') {
    res.end(bufStr)
  } else if (req.url === '/string') {
    res.end(str)
  }
})

server.listen(3000)