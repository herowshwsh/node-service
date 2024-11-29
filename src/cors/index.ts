/*
 * @Description:
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-18 17:16:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-22 18:02:17
 */
/**
 * @format
 * @Date: 2023-01-05 16:34:11
 * @Author: 溺水有三千_wsh
 * @LastEditTime: 2023-01-05 16:45:05
 * @Describe: 跨域设置
 */

const cors = require("koa2-cors");

function Cors(app) {
  return app.use(
    cors({
      origin: function (ctx) {
        //设置允许来自指定域名请求 
        const whiteList = ["http://36.213.66.196:5173", , "http://localhost:3000", "http://localhost:5173", "http://192.168.0.50:5173", "http://192.168.1.5:5173", "http://172.20.30.135:8000", "http://172.20.30.135:8001", "http://172.20.30.12:8001", 'http://172.20.30.12:8000', 'http://192.168.1.191:8000']; //可跨域白名单

        let url = ctx?.header?.referer?.substr(0, ctx.header.referer.length - 1);
        if (whiteList.includes(url)) {
          return url; //注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
        }

        return "http://localhost:8000"; //默认允许本地请求3000端口可跨域
      },

      maxAge: 5, // 指定本次预检请求的有效期，单位为秒。
      credentials: true, // 是否允许发送Cookie
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "*"], // 设置所允许的HTTP请求方法
      allowHeaders: ["Content-Type", "Authorization", "Accept", "*"], // 设置服务器支持的所有头信息字段
      withCredentials: true,
      exposeHeaders: ["WWW-Authenticate", "Server-Authorization", "*"], // 设置获取其他自定义字段
    })
  );
}
module.exports = Cors;
