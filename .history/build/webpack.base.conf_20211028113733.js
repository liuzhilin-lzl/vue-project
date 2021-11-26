/*
 * @Author: your name
 * @Date: 2021-10-28 11:21:38
 * @LastEditTime: 2021-10-28 11:37:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/build/webpack.base.conf.js
 */
const path = require("path")
// 连接路径并返回
function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': resolve('src'),
		}
	}
}