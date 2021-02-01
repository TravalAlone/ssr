"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: your name
 * @Date: 2021-01-14 13:45:12
 * @LastEditTime: 2021-01-17 15:23:09
 * @LastEditors: sheng.wang
 * @Description: In User Settings Edit
 * @FilePath: /baseProject/controllers/indexController.js
 */
class IndexController extends _Controller.default {
  constructor() {
    super();
  }

  async actionIndex(ctx) {
    // throw new Error('Hello error')
    ctx.body = await ctx.render('index');
  }

}

var _default = IndexController;
exports.default = _default;