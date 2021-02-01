/*
 * @Author: your name
 * @Date: 2021-01-14 13:47:12
 * @LastEditTime: 2021-01-17 15:29:42
 * @LastEditors: sheng.wang
 * @Description: In User Settings Edit
 * @FilePath: /baseProject/controllers/index.js
 */

import Router from '@koa/router'
const router = new Router()
import IndexController from './IndexController'
const indexController = new IndexController()
import AboutController from './AboutController'
const aboutController = new AboutController()
import BooksController from './BooksController'
const booksController = new BooksController()
function initController(app) {
    router.get('/', indexController.actionIndex)
    router.get('/about', aboutController.aboutAction)
    router.get('/books', booksController.getBooks)
    app
        .use(router.routes())
        .use(router.allowedMethods())
}

export default initController