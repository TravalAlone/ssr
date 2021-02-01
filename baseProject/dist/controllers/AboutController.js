"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: your name
 * @Date: 2021-01-14 14:11:35
 * @LastEditTime: 2021-01-17 15:33:52
 * @LastEditors: sheng.wang
 * @Description: In User Settings Edit
 * @FilePath: /baseProject/controllers/AboutController.js
 */
class AboutController extends _Controller.default {
  constructor() {
    super();
  }

  aboutAction(ctx) {
    // throw new Error('hello err')
    ctx.body = 'about action';
  }

}

var _default = AboutController;
exports.default = _default;