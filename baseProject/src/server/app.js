/*
 * @Author: sheng.wang
 * @Date: 2021-01-14 11:42:25
 * @LastEditTime: 2021-01-17 22:31:31
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/src/server/app.js
 */
import koa from 'koa'
import config from './config'
import render from 'koa-swig';
import co from 'co'
import initController from './controllers'
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
import serve from 'koa-static';
import errorHandler from './middleware/error'
import log4js from 'log4js'
const app = new koa()
log4js.configure({
    appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
    categories: { default: { appenders: ["globalError"], level: "error" } }
});
const logger = log4js.getLogger("globalError");
app.use(historyApiFallback({ index: '/', whiteList: ['/api', '/books']})); // 改日再战
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache, // disable, set to false
    ext: 'html',
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions,
    writeBody: false,
    varControls: ['[[',']]']
}));

errorHandler.error(app,logger)
initController(app)
app.use(serve(config.staticDir));
app.listen(config.port, () => {
    console.log(`${config.port} is running`)
})
