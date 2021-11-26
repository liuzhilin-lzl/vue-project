<!--
 * @Author: your name
 * @Date: 2021-10-17 12:42:10
 * @LastEditTime: 2021-10-28 10:54:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 <al-cascader v-model="resArr" level="2" data-type="all" />

 * @FilePath: /vue-project/src/App.vue
-->
<template>
	<div id="app">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
