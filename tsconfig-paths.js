/*
 * @Description:
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-18 10:56:13
 * @LastEditors:
 * @LastEditTime: 2023-12-18 11:09:29
 */
const tsconfigPaths = require("tsconfig-paths");
// 导入 tsconfig.json
const tsconfig = require("./tsconfig.json");

tsconfigPaths.register({
  // 把 tsconfig.json 的 baseUrl 和 paths 配置拿过来
  // @ts-ignore
  baseUrl: tsconfig.compilerOptions.baseUrl,
  paths: tsconfig.compilerOptions.paths,
});
