/*
 * @Author: can.li
 * @Date: 2021-01-15 10:57:48
 * @LastEditTime: 2021-01-17 15:26:25
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/middleware/error.js
 */

class HandleError {
  static error(app,logger) {
    app.use(async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        logger.error(err)
        ctx.body = '500, 服务器正在维修'
      }
    })
    app.use(async (ctx, next) => {
      await next()
      if (ctx.status === 404) {
        throw new Error('404, 挂了')
        ctx.body = '404, 这个页面挂了'
      }
    })
  }
}
module.exports = HandleError