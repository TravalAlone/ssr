"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _test = _interopRequireDefault(require("../public/test.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: sheng.wang
 * @Date: 2021-01-17 13:59:55
 * @LastEditTime: 2021-01-18 15:10:13
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/src/server/models/booksModels.js
 */
class BooksList {
  getBooksList() {
    return new Promise(resolve => {
      resolve(_test.default.data);
    });
  }

}

var _default = BooksList;
exports.default = _default;