/*
 * @Author: your name
 * @Date: 2021-10-17 12:42:10
 * @LastEditTime: 2021-11-08 17:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import Element from ''
import 'ant-design-vue/dist/antd.css';
import "tailwindcss/tailwind.css"


Vue.config.productionTip = false;

Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')