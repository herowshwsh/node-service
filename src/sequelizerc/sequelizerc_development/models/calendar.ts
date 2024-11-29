/*
 * @Description: 
 * @version: 
 * @Author: 香菜
 * @Date: 2024-11-27 15:40:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-29 13:57:37
 */
import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"

    },
    user_id: {
      type: DataTypes.INTEGER(),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "用户di",
      field: "user_id"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '标题',
      field: "title"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '时间',
      field: "time"
    },
    is_home: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '0',
      primaryKey: false,
      autoIncrement: false,
      comment: '是否在首页显示',
      field: "is_home"
    },



  };
  const options = {
    tableName: "calendar",
    comment: "日历表",
    indexes: []
  };
  const CalendarModel = sequelize.define("calendar_model", attributes, options);
  return CalendarModel;
}