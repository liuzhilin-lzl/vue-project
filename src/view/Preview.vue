<!--
 * @Author: your name
 * @Date: 2021-10-28 11:16:55
 * @LastEditTime: 2021-11-22 08:49:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/view/Preview.vue
-->
<template>
	<div>
		<CheckBoxModal v-model="checkValue"></CheckBoxModal>
		<div>
			model方式双向绑定
		</div>  
		<inputModal v-model='text'></inputModal>
		<div>
		.sync 修饰符双向绑定
		</div>
		<inputSyncModal :childText.sync='changeText'></inputSyncModal>
		<el-button type="primary" @click="onClick">测试</el-button>
		<datePicker v-model="date"></datePicker>

		<baseInput size="small" @input="inputText" id="inputId" placeholder="爱一人白首" style="border: 1px solid #ff0000" class="input-sm"></baseInput>
	</div>
</template>
<script>
import CheckBoxModal from '@/components/selectModal/checkBoxModal';
import inputModal from '@/components/selectModal/InputModal';
import inputSyncModal from '@/components/selectModal/inputSyncModal';
import datePicker from '@/components/selectModal/datePicker';
import baseInput from '@/components/inputModal/index';

export default {
	name: 'App',
	mixins: [inputModal, CheckBoxModal],
	components: {
		baseInput,
		CheckBoxModal,
		inputSyncModal,
		inputModal,
		datePicker
	},
	data() {
		return {
			resArr: [],
			defaultArea: '',
			dialogVisible: false,
			checkValue: '',
			text: 'model',
			changeValue: '',
			changeText: 'sync',
			date: ''
		};
	},
	mounted() {
		console.log(this.checkAll);
		console.log(this.testValue);
		console.log(this.changeValue);
		this.test()
	},
	methods: {
		inputText() {
			console.log('111');
		},
		selectArea() {
			console.log(this.resArr);
		},
		selectArea1(selectedArea) {
			console.log(selectedArea);
		},
		onClick() {
			//model
			console.log('model', this.text);
			//.sync
			console.log('.sync', this.changeText);
			console.log('date', this.date);
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
