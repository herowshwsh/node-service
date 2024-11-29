/*
 * @Description: 
 * @version: 
 * @Author: 香菜
 * @Date: 2023-12-26 09:42:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-27 15:35:36
 */


const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const path = require('path');
const { getLocalIP } = require('./../../units/ip');
//
router.post('/api/upload', async ctx => {
	const ip = await getLocalIP();
	// const ip = '36.213.66.196'
	const url = `http://${ip}:8090/uploads/`;

	// 上传单个文件
	const file = ctx.request.files.file; // 获取上传文件
	let fileType = file.type.split('/')[1];
	let filedName = file.name.split('.')[0];
	let filedNameType = file.name.split('.')[1];
	let dir = '';
	const onlyType = file.type.split('/')[0];
	// 创建可读流
	const date = new Date() as any;
	let month = Number.parseInt(date.getMonth()) + 1 as any;
	month = month.toString().length > 1 ? month : `0${month}`;
	const h = date.getHours();
	const mm = date.getMinutes();
	const s = date.getSeconds();
	const ran = Math.round(Math.random() * 1000000);
	dir = `${date.getFullYear()}${month}${date.getDate()}${h}${mm}${s}${ran}`;
	if (filedNameType === 'zip' || filedNameType === 'rar') {
		fileType = filedNameType;
		dir = filedName;
	}
	const reader = fs.createReadStream(file.path);
	const filePath =
		path.join(__dirname, `../../public/uploads/${onlyType}`) +
		`/${`${dir}.${fileType}`}`;
	// 创建可写流
	const upStream = fs.createWriteStream(filePath);
	reader.pipe(upStream);
	reader.on('error', err => {
		console.log('发生异常', err);
	});

	ctx.body = {
		message: '上传成功',
		url: `${url}${onlyType}/${`${dir}.${fileType}`}`,
	};

});

module.exports = router;
export { }
