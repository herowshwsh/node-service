/*
 * @Description:个人信息
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-18 09:57:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-21 18:40:31
 */



const { UserModel } = require("../../sequelizercModel/index");
let { handleTip } = require("../../tsType/controller");
// const crypto = require("crypto");
const jwt = require("jsonwebtoken");
let result: any = {};

const _allServices = {
  getLogin: async (param) => {
    await UserModel.findOne({
      where: { userNo: param.userName, passWord: param.userWord }
    }).then(res => {
      if (res !== null) {
        const token = jwt.sign(
          {
            name: param.userWord
          },
          "Gopal_token", // secret
          { expiresIn: 60 * 60 } // 60 * 60 s
        );
        result = handleTip({ result: res ?? {} }, 1)
        result['token'] = token
      }
      else {
        result = handleTip({ message: "账号或密码错误" }, 0)
      }
    }).catch(error => {
      result = error
    })
    return result

  },
  //注册信息
  getRegister: async (param) => {
    if (JSON.stringify(param) === "{}") {
      result = handleTip({ message: "信息不能为空", code: "0" }, 0);
    }
    else {
      await UserModel.create({ ...param })
        .then((resData) => {
          result = handleTip({ data: resData, code: "1" }, 1);
        })
        .catch((err) => {
          result = handleTip({ message: err });
        });
    }

    return result;

  },

  //查询个人信息--
  getMineInfo: async (param) => {
    await UserModel.findOne({
      where: { id: param.id }
    }).then(res => {
      result = handleTip({ result: res ?? {} }, 1)
    }).catch(error => {
      result = error
    })
    return result
  },
  //修改个人资料
  getEditInfo: async (param) => {
    await UserModel.update(
      { ...param },
      {
        where: { id: param.id }
      }).then(res => {
        result = handleTip({ result: param ?? {} }, 1)
      }).catch(error => {
        result = error
      })
    return result
  }
};

module.exports = _allServices;
export { };
