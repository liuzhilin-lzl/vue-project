<!--
 * @Author: your name
 * @Date: 2021-10-28 13:29:13
 * @LastEditTime: 2021-10-28 14:31:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/components/cascader/Cascader.vue
-->
<template>
	<!-- <a-cascader
		:fieldNames="{ label: 'label', value: 'value', children: 'children' }"
		:options="areaData"
		:placeholder="placeholder"
		v-model="selectedValues"
		@change="onChange"
	/> -->
	<a-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </a-cascader>
</template>
<script>
import areaData from './areadata';
import { regionData } from 'element-china-area-data';

// import areaData from 'china-area-data';
export default {
	name: 'areaSelect',
	props: {
		placeholder: {
			type: String,
			default: '请选择省市区',
		},
		defaultValue: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			//地区数据
			areaData,
			options: regionData,
			selectedOptions: [],
			//选择的数据
			selectedValues: [],
		};
	},
	created() {
		if (this.defaultValue.length) {
			this.selectedValues = [...this.defaultValue];
		}
	},
	watch: {
		defaultValue(newValue) {
			if (newValue.length) {
				this.selectedValues = newValue;
			} else {
				this.selectedValues = [];
			}
		},
	},
	methods: {
		//选择好之后的回调
		onChange(value) {
			this.$emit('change', value);
		},
		handleChange(value) {
			console.log(value);
		},
	},
	mounted() {
		console.log(this.areaData);
	},
};
</script>
<style lang="scss" scoped>
</style>
