"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

var _booksModels = _interopRequireDefault(require("../models/booksModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: sheng.wang
 * @Date: 2021-01-17 14:59:01
 * @LastEditTime: 2021-01-17 16:19:56
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/controllers/BooksController.js
 */
class BooksController extends _Controller.default {
  constructor() {
    super();
  }

  async getBooks(ctx) {
    const booksModel = new _booksModels.default();
    const data = await booksModel.getBooksList();
    ctx.body = await ctx.render('books/list', {
      data: data
    }); //
  }

}

var _default = BooksController;
exports.default = _default;