<!--
 * @Author: your name
 * @Date: 2021-10-28 11:16:55
 * @LastEditTime: 2021-11-08 09:26:13
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
		<h1>通过 json</h1>
		<Cascader @change="selectArea1" :default-value="defaultArea" />
		<Cascader2 @change="selectArea1" :default-value="defaultArea" />
	</div>
</template>
<script>
import AlCascader from '../components/Cascader.vue';
import Cascader from '@/components/cascader/Cascader.vue';
import Cascader2 from '@/components/cascader/ant-design-vue';
import Cascader2 from '@/components/tinymceModal';

export default {
	name: 'App',
	components: {
		AlCascader,
		Cascader,
		Cascader2,
	},
	data() {
		return {
			resArr: [],
			defaultArea: '',
		};
	},
	methods: {
		selectArea() {
			console.log(this.resArr);
		},
		selectArea1(selectedArea) {
			console.log(selectedArea);
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
