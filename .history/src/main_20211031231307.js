/*
 * @Author: your name
 * @Date: 2021-10-17 12:42:10
 * @LastEditTime: 2021-10-31 23:12:57
 * @LastEditors: your name
 * @Description: In User Settings Editf'r
 * @FilePath: /vue-project/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "tailwindcss/tailwind.css"


Vue.config.productionTip = false;

Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
