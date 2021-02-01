/*
 * @Author: your name
 * @Date: 2021-01-14 14:11:35
 * @LastEditTime: 2021-01-17 15:33:52
 * @LastEditors: sheng.wang
 * @Description: In User Settings Edit
 * @FilePath: /baseProject/controllers/AboutController.js
 */
import Controller from './Controller'

class AboutController extends Controller {
    constructor () {
        super()
    }
    aboutAction(ctx) {
        // throw new Error('hello err')
        ctx.body = 'about action'
    }
}

export default AboutController