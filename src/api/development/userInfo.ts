/*
 * @Description:测试表格接口
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-18 11:19:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-28 16:46:11
 */


const Router = require("koa-router");
const { config_api } = require('../../units/config')
const env = process.env.NODE_ENV

const router = new Router();
const _allServices = require("../../controller/development/userInfo");
//登录
router.post(`/${config_api[env]['url']}/login`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
  const param: any = ctx.request['body']
  await _allServices.getLogin(param).then((res: any) => {
    ctx.body = res;
  });
});
//注册
router.post(`/${config_api[env]['url']}/register`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
  const param: any = ctx.request['body']
  await _allServices.getRegister(param).then((res: any) => {
    ctx.body = res;
  });
});


//查询用户
router.get(`/${config_api[env]['url']}/userInfo`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
  const param: any = ctx.request['query']
  await _allServices.getMineInfo(param).then((res: any) => {
    ctx.body = res;
  });
});
//修改资料
router.post(`/${config_api[env]['url']}/editUser`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
  const param: any = ctx.request['body']
  await _allServices.getEditInfo(param).then((res: any) => {
    ctx.body = res;
  });
});



module.exports = router;
export { };

