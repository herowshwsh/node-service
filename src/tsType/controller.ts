/*
 * @Description:
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-18 10:07:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-19 11:40:01
 */

export interface IapiObject {
  code?: number;
  result?: Object | Array<any>;
  message?: string;
  success?: boolean
  total?: number
  pageNo?: number
  pageSize?: number
}
//1成功 2失败
const handleTip = (result: IapiObject, type: number = 1) => {
  let data: IapiObject = {};
  if (type === 1) {
    (data.code = result?.code || 200),
      (data.message = result?.message || "success"),
      (data.result = result?.result || {});
    (data.success = true);
    (data.total = result?.total);
    (data.pageNo = result?.pageNo);
    (data.pageSize = result?.pageSize);
  } else {
    (data.success = false);
    (data.code = result?.code || 500),
      (data.message = result?.message || "fail"),
      (data.result = result?.result || {});
  }
  return data;
};
module.exports = {
  handleTip,
};
