/**
 * @format
 * @Author: WSH
 * @Date: 2023-02-10 18:52:43
 * @LastEditors: WSH
 * @LastEditTime: 2023-02-11 09:00:13
 * @Description:
 */

/**
 * @description: mqtt服务
 * @return {*}
 * @author: WSH
 */
const mosca = require('mosca');


const option = {
	port: 1884,
	username: '123456',
	password: '123456',
};


	const mqttServer = new mosca.Server({
		port: option.port, //设置端口
	},(a)=>{
  console.log('a',a)
  });

	mqttServer.on('clientConnected', function (client) {
		console.log('客户端已连接');
 
	});
	/**
	 * @description:监听消息
	 * @param {*} published
	 * @param {*} function
	 * @param {*} client
	 * @param {*} username
	 * @return {*}
	 * @author: WSH
	 */
	mqttServer.on('published',  (packet, client, username)=> {
		
		const topic = packet.topic;
    const message = packet.payload.toString(); // 将消息转换为字符串
		switch (topic) {
			case 'test':
       
			  console.log('测试收到的消息',message);
        const replyMessage = 'Hello, 你好呀';
        mqttServer.publish({ topic: 'other', payload: {b:replyMessage} })

				break;
        case 'other':

        console.log('message-123', message);

         break;
			default:
				// console.log('其他消息',message);
		}
	});

	mqttServer.on('ready', () => {
		mqttServer.authenticate = authenticate;
		 console.log('mqtt is running...')
	});

	/**
	 * @description:验证账号
	 * @param {*} client
	 * @param {*} username
	 * @param {*} password
	 * @param {*} callback
	 * @return {*}
	 * @author: WSH
	 */
	const authenticate = function (client, username, password, callback) {
		const authorized =
			username === option.username && password.toString() === option.password;
		if (authorized) client.user = username;
		callback(null, authorized);
	};


module.exports = {
  mqttServer:mqttServer
}
export{}
