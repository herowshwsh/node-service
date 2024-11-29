/*
 * @Description:向mysql初始化数据库
 * @version:
 * @Author: 香菜
 * @Date: 2023-09-04 19:31:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-27 15:19:31
 */
const Sequelize = require("sequelize");
const Models = require("../sequelizercModel/index");
const force = false;
const ModelList = Models["modelList"];
const handleMysqlInit = () => {
  ModelList.forEach((item) => {
    item
      .sync({ alter: true, force: false })
      .then(() => {
        console.log(item, "成功了");
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
};
handleMysqlInit()
module.exports = { handleMysqlInit };
