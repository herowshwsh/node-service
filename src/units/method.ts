/*
 * @Description: 
 * @version: 
 * @Author: 香菜
 * @Date: 2023-12-26 09:59:06
 * @LastEditors: 
 * @LastEditTime: 2023-12-26 09:59:08
 */
const fs = require("fs");

//判断文件夹是否存在，不存在则创建
const funExistsSync = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};
module.exports = {
    funExistsSync,
   
  };
  export {}