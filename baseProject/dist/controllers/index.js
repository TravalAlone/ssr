"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(require("@koa/router"));

var _IndexController = _interopRequireDefault(require("./IndexController"));

var _AboutController = _interopRequireDefault(require("./AboutController"));

var _BooksController = _interopRequireDefault(require("./BooksController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: your name
 * @Date: 2021-01-14 13:47:12
 * @LastEditTime: 2021-01-17 15:29:42
 * @LastEditors: sheng.wang
 * @Description: In User Settings Edit
 * @FilePath: /baseProject/controllers/index.js
 */
const router = new _router.default();
const indexController = new _IndexController.default();
const aboutController = new _AboutController.default();
const booksController = new _BooksController.default();

function initController(app) {
  router.get('/', indexController.actionIndex);
  router.get('/about', aboutController.aboutAction);
  router.get('/books', booksController.getBooks);
  app.use(router.routes()).use(router.allowedMethods());
}

var _default = initController;
exports.default = _default;