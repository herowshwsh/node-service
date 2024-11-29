import { Model, BuildOptions } from 'sequelize';
export interface IUserAttributes {
  id: number,
  name: string,
  age?: string,
  createdAt?: Date,
  updatedAt?: Date,
  passWord?: string,
  userNo?: string,
  points?: number,
  head_img?: string,
  desc?: string,
  maxim?: string,
  home_bg?: string,
}
export interface IUserModel extends IUserAttributes, Model {}
export type IUserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUserModel;
};