/*
 * @Description: 
 * @version: 
 * @Author: 香菜
 * @Date: 2023-12-18 11:23:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-15 16:27:30
 */
const UserInfo = require("./userInfo");
const Upload = require('./upload')
const Calendar = require('./calendar')
const combineRouters = require("koa-combine-routers");
module.exports = combineRouters(UserInfo, Upload, Calendar);
