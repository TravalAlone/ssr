/*
 * @Author: your name
 * @Date: 2021-01-14 13:45:12
 * @LastEditTime: 2021-01-17 15:23:09
 * @LastEditors: sheng.wang
 * @Description: In User Settings Edit
 * @FilePath: /baseProject/controllers/indexController.js
 */

import Controller from './Controller'

class IndexController extends Controller {
    constructor () {
        super()
    }
    async actionIndex(ctx) {
        // throw new Error('Hello error')
        ctx.body = await ctx.render('index')
    }
}

export default IndexController