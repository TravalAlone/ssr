/*
 * @Author: sheng.wang
 * @Date: 2021-01-17 13:59:55
 * @LastEditTime: 2021-01-18 15:10:13
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/src/server/models/booksModels.js
 */
import axios from 'axios'
import data from '../public/test.json'
class BooksList {
  getBooksList() {
    return new Promise(resolve => {
      resolve(data.data)
    })
  }
}

export default BooksList