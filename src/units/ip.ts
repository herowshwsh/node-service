/*
 * @Description:获取本机ip
 * @version:
 * @Author: 香菜
 * @Date: 2023-12-18 14:26:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-18 14:33:09
 */
const os = require("os");
function getLocalIP() {
  const networkInterfaces = os.networkInterfaces();
  for (const name in networkInterfaces) {
    const interfaces = networkInterfaces[name];
    for (const i in interfaces) {
      const iface = interfaces[i];
      if (!iface.internal && iface.family === "IPv4") {
        return iface.address;
      }
    }
  }
  return null;
}

export default getLocalIP;

module.exports = {
  getLocalIP,
};
