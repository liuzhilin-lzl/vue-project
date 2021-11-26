<!--
 * @Author: your name
 * @Date: 2021-10-28 11:16:55
 * @LastEditTime: 2021-10-28 11:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/view/Preview.vue
-->
<template>
	<div id="app">
		<h6>通过npm npm i -s area-data</h6>
		<al-cascader
			v-model="resArr"
			level="3"
			@input="selectArea"
			data-type="all"
		/>
	</div>
</template>
<script>
import AlCascader from '../components/Cascader.vue';

export default {
	name: 'App',
	components: {
		AlCascader,
	},
	data() {
		return {
			resArr: [],
		};
	},
	methods: {
		selectArea() {
			console.log(this.resArr);
		},
	},
};
</script>

<style>
#app {
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
