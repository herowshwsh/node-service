/*
 * @Description:
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-12 16:28:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-15 15:52:52
 */

const fs = require("fs");
const { development } = require("../env/index");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV;

const config = require(__dirname + "/../mysql/config")["models"][development];

const db: any = {};
let sequelize: any;

if (config.use_env_variable) {
  // @ts-ignore
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // @ts-ignore
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
async function testConnection() {
  try {
    // 尝试执行一个查询
    await sequelize.query('SELECT 1+1 AS result');
    console.log('数据库连接成功！');
  } catch (error) {
    console.error('数据库连接失败:', error);
  }
}
 
testConnection();  //判断数据库是否成功链接



const modelList: any = [];
const list = fs
  .readdirSync(__dirname + `/../sequelizerc/sequelizerc_${env}/models`)
  .filter((file: any) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".ts" &&
      file.indexOf(".d.ts") === -1
    );
  });

  console.log('list',list)
for (let i = 0; i < list.length; i++) {
  let model = require(path.join(
    __dirname + `/../sequelizerc/sequelizerc_${env}/models`,
    list[i]
  ))["default"](sequelize, Sequelize.DataTypes);

  const newName = model?.name?.split("_")[0];
  const newModel =
    newName?.slice(0, 1).toUpperCase() +
    newName?.slice(1).toLowerCase() +
    "Model";
  db[newModel] = model;
  modelList.push(db[newModel]);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.modelList = modelList;


module.exports = db;
export {};
