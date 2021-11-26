<!--
 * @Author: your name
 * @Date: 2021-10-28 11:16:55
 * @LastEditTime: 2021-10-28 13:35:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/view/Preview.vue
-->
<template>
	<div>
		<h1>通过npm npm i -s area-data</h1>
		<al-cascader
			v-model="resArr"
			level="3"
			data-type="all"
			size="large"
			@input="selectArea"
		/>
	</div>
</template>
<script>
import AlCascader from '../components/Cascader.vue';
import AlCascader from '@/components/Cascader.vue';

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
	font-size: 16px;
}
</style>
