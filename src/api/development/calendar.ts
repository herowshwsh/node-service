/*
 * @Description:测试表格接口
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-18 11:19:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-29 14:11:49
 */


const Router = require("koa-router");
const { config_api } = require('../../units/config')
const env = process.env.NODE_ENV

const router = new Router();
const _allServices = require("../../controller/development/calendar");
//查询
router.post(`/${config_api[env]['url']}/calendar/all`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
    const param: any = ctx.request['body']
    await _allServices.getAll(param).then((res: any) => {
        ctx.body = res;
    });
});


//添加
router.post(`/${config_api[env]['url']}/calendar/add`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
    const param: any = ctx.request['body']
    await _allServices.getAddInfo(param).then((res: any) => {
        ctx.body = res;
    });
});


//修改
router.post(`/${config_api[env]['url']}/calendar/edit`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
    const param: any = ctx.request['body']
    await _allServices.getEditInfo(param).then((res: any) => {
        ctx.body = res;
    });
});
//删除
router.post(`/${config_api[env]['url']}/calendar/delete`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
    const param: any = ctx.request['body']
    await _allServices.getDeleteInfo(param).then((res: any) => {
        ctx.body = res;
    });
});
//是否在首页显示
router.post(`/${config_api[env]['url']}/calendar/show`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
    const param: any = ctx.request['body']
    await _allServices.getShowHome(param).then((res: any) => {
        ctx.body = res;
    });
});
//是否在首页显示
router.post(`/${config_api[env]['url']}/calendar/showHome`, async (ctx: { request: { body: any; }; body: any; }, next: any) => {
    const param: any = ctx.request['body']
    await _allServices.getHomeOne(param).then((res: any) => {
        ctx.body = res;
    });
});







module.exports = router;

export { };
