<!--
 * @Author: your name
 * @Date: 2021-10-28 11:16:55
 * @LastEditTime: 2021-11-20 21:35:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/view/Preview.vue
-->
<template>
	<div>
		<!-- <h1>通过npm npm i -s area-data</h1> -->
		<!-- <al-cascader v-model="resArr" level="3" data-type="all" size="large" @input="selectArea" />
		<h1>通过 json</h1>
		<Cascader @change="selectArea1" :default-value="defaultArea" />
		<Cascader2 @change="selectArea1" :default-value="defaultArea" />
		<el-button @click="dialogVisible = true">测试</el-button>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
			<TinymceModal class="component"></TinymceModal>
		</el-dialog> -->
		<!-- <TinymceModal class="component"></TinymceModal> -->
		<!-- <CheckBoxModal v-model="checkValue"></CheckBoxModal> -->
		<inputModal :changeValue.sync='' ></inputModal>
		<el-button type="primary" @click="onClick">测试</el-button>
	</div>
</template>
<script>
// import AlCascader from '../components/Cascader.vue';
// import Cascader from '@/components/cascader/Cascader.vue';
// import Cascader2 from '@/components/cascader/ant-design-vue';
// import TinymceModal from '@/components/tinymceModal/TinymceModal';
// import CheckBoxModal from '@/components/selectModal/checkBoxModal';
import inputModal from '@/components/selectModal/InputModal';

export default {
	name: 'App',
	components: {
		// AlCascader,
		// Cascader,
		// Cascader2,
		// TinymceModal,
		// CheckBoxModal,
		inputModal
	},
	data() {
		return {
			resArr: [],
			defaultArea: '',
			dialogVisible: false,
			checkValue: '',
			text: ''
		};
	},
	methods: {
		selectArea() {
			console.log(this.resArr);
		},
		selectArea1(selectedArea) {
			console.log(selectedArea);
		},
		onClick() {
			console.log(this.text);
		}
	},
};
</script>

<style>
#app {
	text-align: center;
	font-size: 16px;
}
</style>
