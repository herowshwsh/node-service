/*
 * @Description: 
 * @version: 
 * @Author: 香菜
 * @Date: 2024-11-28 16:42:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-29 14:11:35
 */



const { CalendarModel } = require("../../sequelizercModel/index");
const { Sequelize } = require('sequelize');
let { handleTip } = require("../../tsType/controller");
let result: any = {};
const _allServices = {
    //查询信息--
    getAll: async (param) => {
        if (!param.user_id) {
            result = handleTip({ message: "user_id不能为空", code: "0" }, 0);
        }
        else {
            await CalendarModel.findAll({ where: { user_id: param.user_id }, order: [['id', 'DESC']] }).then(res => {
                result = handleTip({ result: res ?? {} }, 1)
            }).catch(error => {
                result = error
            })
        }
        return result
    },
    //添加
    getAddInfo: async (param) => {
        if (JSON.stringify(param) === "{}") {
            result = handleTip({ message: "信息不能为空", code: "0" }, 0);
        }
        else {
            await CalendarModel.create({ ...param })
                .then((resData) => {
                    result = handleTip({ data: resData, code: "1" }, 1);
                })
                .catch((err) => {
                    result = handleTip({ message: err });
                });
        }

        return result;

    },
    //修改
    getEditInfo: async (param) => {
        await CalendarModel.update(
            { ...param },
            {
                where: { id: param.id }
            }).then(res => {
                result = handleTip({ result: param ?? {} }, 1)
            }).catch(error => {
                result = error
            })
        return result
    },
    getDeleteInfo: async (param) => {
        if (!param.id) {
            result = handleTip({ message: "id不能为空", code: "0" }, 0);
        }
        else {
            await CalendarModel.destroy({ where: { id: param.id } }
            ).then(res => {
                result = handleTip({ result: param ?? {} }, 1)
            }).catch(error => {
                result = error
            })
        }
        return result
    },
    // 设置在首页显示
    getShowHome: async (param) => {
        if (!param.id) {
            result = handleTip({ message: "id不能为空", code: "0" }, 0);
        }
        if (!param.user_id) {
            result = handleTip({ message: "user_id不能为空", code: "0" }, 0);
        }
        else {
            let id = param.id
            await CalendarModel.update({ is_home: '0' }, {
                where: {
                    id: { [Sequelize.Op.ne]: id },
                    user_id: param.user_id
                },
                individualHooks: true // 如果需要执行模型钩子，设置为 true
            });
            await CalendarModel.update({ is_home: '1' }, {
                where: {
                    id: id,
                    user_id: param.user_id
                },
                individualHooks: true // 如果需要执行模型钩子，设置为 true
            }).then(res => {
                result = handleTip({ result: param ?? {} }, 1)
            }).catch(error => {
                result = error
            });
        }
        return result
    },
    //查询在首页显示的数据
    //查询信息--
    getHomeOne: async (param) => {
        if (!param.user_id) {
            result = handleTip({ message: "user_id不能为空", code: "0" }, 0);
        }
        else {
            await CalendarModel.findOne({ where: { user_id: param.user_id, is_home: '1' } }).then(res => {
                result = handleTip({ result: res ?? {} }, 1)
            }).catch(error => {
                result = error
            })
        }
        return result
    },

}


module.exports = _allServices;
export { };
