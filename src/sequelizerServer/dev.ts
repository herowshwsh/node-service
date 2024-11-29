/*
 * @Description:更新数据库表格模型字段
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-12 13:21:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-15 16:32:41
 */
const fs = require("fs");
const os = require("os");
const { development } = require("../env/index");
const { exec } = require("child_process");
const db = require("../mysql/config")["models"];
const ENV = development;
const path = `src/sequelizerc/sequelizerc_${ENV}`;
console.log("当前运行坏境", process.env.NODE_ENV);

let exePath = `sequelize-automate -t ts -h ${db[ENV]["host"]} -d ${db[ENV]["database"]} -u ${db[ENV]["username"]} -p ${db[ENV]["password"]} -P ${db[ENV]["port"]}  -e mysql -o ${path}/models`;
//判断文件夹是否存在，不存在则创建
const funExistsSync = async (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err: any) => {
      if (!err) {
        console.log("文件创建成功了");
        handleMysql();
      } else {
        handleMysql();
        console.log("文件创建失败了");
      }
    });
  } else {
    handleMysql();
  }
};

const handleInit = async () => {
  await funExistsSync(path);
};
const handleMysql = () => {
  exec(exePath, (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`执行命令时出错: ${error}`);
      return;
    } else {
      console.log("执行命令成功", exePath);
    }
  });
};

handleInit();
