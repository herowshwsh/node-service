/*
 * @Description:数据库设置
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-12 11:34:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-29 14:41:28
 */
const config = {
  development: {
    username: "root",
    database: "mine",
    host: "127.0.0.1",
    password: "123456",
    dialect: "mysql",
    port: '3306',
    charset: "utf8",
    logging: "",
  },
  test: {
    username: "root",
    password: 123456,
    database: "test_next",
    host: "127.0.0.1",
    dialect: "mysql",
    charset: "utf8",
    port: '3306',
    logging: "",
  },
  production: {
    username: "root",
    password: null,
    port: '3306',
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
exports.models = config;
