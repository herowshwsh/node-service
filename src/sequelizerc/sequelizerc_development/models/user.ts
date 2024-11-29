import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: "姓名",
      field: "name"
    },
    age: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "age"
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
    passWord: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "passWord"
    },
    userNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userNo"
    },
    points: {
      type: DataTypes.INTEGER(),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "积分",
      field: "points"
    },
    head_img: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "head_img"
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "个性签名",
      field: "desc"
    },
    maxim: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "格言",
      field: "maxim"
    },
    home_bg: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "首页背景图",
      field: "home_bg"
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    indexes: []
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
}