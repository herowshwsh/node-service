/*
 * @Description:入口文件
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-12 10:24:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-21 19:35:38
 */

require("module-alias/register");
const path = require('path');
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const http = require("http").createServer;
const app = new Koa();
const Routers = require("./api/development/index"); //dev环境下的路由
const { getLocalIP } = require("./units/ip"); //获取本机ip
const PORT = process.env.PORT || 8090; const KoaBodyInit = require('./koaBody/index');
const CorsInit = require("./cors/index"); //跨域设置
const serve = require('koa-static');

// const { handleMysqlInit } = require("./databaseInit/index"); //初始化数据库
const { wsServer } = require('./units/websocket')

const { mqttServer } = require('./units/mqtt')
const multipart = require('koa-multipart');

const env = process.env.NODE_ENV || "未指定环境";
CorsInit(app); // 跨域设置
KoaBodyInit(app)
// 使用koa-bodyparser中间件处理请求体
app.use(bodyParser());
// 使用koa-multipart中间件处理multipart/form-data类型的请求
app.use(multipart({ autoFields: true }));
app.use(serve(path.join(__dirname + '/public'), {})); //静态资源拼接
const koajwt = require('koa-jwt'); // 用于路由权限控制
if (env === "development") {
  // 错误处理
  app.use((ctx, next) => {
    return next().catch((err) => {
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body = { message: err.message }
      } else {
        throw err;
      }
    })
  })// 注意：放在路由前面
  app.use(koajwt({
    secret: 'Gopal_token'
  }).unless({ // 配置白名单 
    path: [/\/api\/login/, /\/api\/register/, /\/api\/upload/]
  }))

  app.use(Routers()); // 注入路由
}

wsServer
mqttServer

// handleMysqlInit();
http(app.callback()).listen(PORT, () => {
  console.log(
    `服务器运行中,当前环境`,
    env,
    "本机ip:",
    getLocalIP() + ":" + PORT
  );
});
export { };
