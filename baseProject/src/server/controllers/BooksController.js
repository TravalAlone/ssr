/*
 * @Author: sheng.wang
 * @Date: 2021-01-17 14:59:01
 * @LastEditTime: 2021-01-17 16:19:56
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/controllers/BooksController.js
 */
import Controller from './Controller'
import BooksModel from '../models/booksModels'
class BooksController extends Controller {
  constructor () {
    super()
  }
  async getBooks(ctx) {
    const booksModel = new BooksModel()
    const data = await booksModel.getBooksList()
    ctx.body = await ctx.render('books/list', { data: data })
    //
  }
}

export default BooksController;


