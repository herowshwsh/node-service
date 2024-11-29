/*
 * @Date: 2023-01-05 16:38:54
 * @Author: 溺水有三千_wsh
 * @LastEditTime: 2024-01-05 13:07:03
 * @Describe: 描述什么？
 */
 const path = require("path");
 const koaBody = require("koa-body");
  const { funExistsSync } = require("../units/method");
function KoaBodyInit(app) {
  app.use( 
    koaBody({
      maxFieldsSize: 10 * 1024 * 1024,
      multipart: true,
      formidable: {
        //uploadDir: path.join(__dirname, 'public/uploads/'), // 设置文件上传目录
        keepExtensions: true, // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
        onFileBegin: (name, file) => {
          // 文件上传前的设置
          let fileType = file.type.split("/")[0];
          // console.log('file', file)
          //  最终要保存到的文件夹目录
          const dir = path.join(__dirname, `../public/uploads/${fileType}`); 
          // 检查文件夹是否存在如果不存在则新建文件夹
          funExistsSync(dir);
        },
        onError: (err) => {
          // console.log(err);
        },
      },
    })
  );
}
module.exports = KoaBodyInit;
export{}