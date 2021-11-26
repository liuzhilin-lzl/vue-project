<!--
 * @Author: your name
 * @Date: 2021-10-28 13:29:13
 * @LastEditTime: 2021-10-28 13:29:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/components/cascader/Cascader.vue
-->
<template>
	<a-cascader
		:fieldNames="{ label: 'name', value: 'code', children: 'children' }"
		:options="areaData"
		:placeholder="placeholder"
		v-model="selectedValues"
		@change="onChange"
	/>
</template>
<script>
import areaData from './areadata';
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
	},
};
</script>
<style lang="scss" scoped>
</style>
