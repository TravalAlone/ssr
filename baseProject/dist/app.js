"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _config = _interopRequireDefault(require("./config"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = _interopRequireDefault(require("co"));

var _controllers = _interopRequireDefault(require("./controllers"));

var _koa2ConnectHistoryApiFallback = require("koa2-connect-history-api-fallback");

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _error = _interopRequireDefault(require("./middleware/error"));

var _log4js = _interopRequireDefault(require("log4js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: sheng.wang
 * @Date: 2021-01-14 11:42:25
 * @LastEditTime: 2021-01-17 22:31:31
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/src/server/app.js
 */
const app = new _koa.default();

_log4js.default.configure({
  appenders: {
    globalError: {
      type: "file",
      filename: "./logs/error.log"
    }
  },
  categories: {
    default: {
      appenders: ["globalError"],
      level: "error"
    }
  }
});

const logger = _log4js.default.getLogger("globalError");

app.use((0, _koa2ConnectHistoryApiFallback.historyApiFallback)({
  index: '/',
  whiteList: ['/api', '/books']
})); // 改日再战

app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewDir,
  cache: _config.default.cache,
  // disable, set to false
  ext: 'html',
  // locals: locals,
  // filters: filters,
  // tags: tags,
  // extensions: extensions,
  writeBody: false,
  varControls: ['[[', ']]']
}));

_error.default.error(app, logger);

(0, _controllers.default)(app);
app.use((0, _koaStatic.default)(_config.default.staticDir));
app.listen(_config.default.port, () => {
  console.log(`${_config.default.port} is running`);
});