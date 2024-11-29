const path = require('path')
// 引入webpack包
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')
module.exports={
        mode: 'development' ,
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在的目录
    output: {
        path:path.resolve(__dirname,'dist'),
        // 打包后的文件的文件名
        filename: "bundel.js"
    },
    // 指定webpack打包时要使用的模块
    module: {
        rules: [
            {
                // test指定规则生效文件
                test:/\.ts$/,
                use:'ts-loader',
                // 排除文件夹
                exclude:/node-modules/
            }
        ],
    },
    // 配置webpack插件(自动生成html文件)
    plugins:[
        new HTMLWebpackPlugin(
            // 自定义title名
            {
                // title:'山鱼君'
                template: "./src/index.html"
            }
        ),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts','.js']
    }
 
};