<!--
 * @Author: your name
 * @Date: 2021-11-01 08:31:14
 * @LastEditTime: 2021-11-01 08:38:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-project/src/components/cascader/ant-design-vue.vue
-->
<template>
	<div>
		<a-transfer
			:data-source="mockData"
			:titles="['Source', 'Target']"
			:target-keys="targetKeys"
			:selected-keys="selectedKeys"
			:render="(item) => item.title"
			:disabled="disabled"
			@change="handleChange"
			@selectChange="handleSelectChange"
			@scroll="handleScroll"
		/>
	</div>
</template>
<script>
export default {
	data() {
		// const mockData = [];
		// for (let i = 0; i < 20; i++) {
		// 	mockData.push({
		// 		key: i.toString(),
		// 		title: `content${i + 1}`,
		// 		description: `description of content${i + 1}`,
		// 		disabled: i % 3 < 1,
		// 	});
		// }

		// const oriTargetKeys = mockData
		// 	.filter((item) => +item.key % 3 > 1)
		// 	.map((item) => item.key);
		return {
			mockData: [{}],
			targetKeys: [],
			selectedKeys: ['1', '4'],
			disabled: false,
		};
	},
	methods: {
		handleChange(nextTargetKeys, direction, moveKeys) {
			this.targetKeys = nextTargetKeys;

			console.log('targetKeys: ', nextTargetKeys);
			console.log('direction: ', direction);
			console.log('moveKeys: ', moveKeys);
		},
		handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
			this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];

			console.log('sourceSelectedKeys: ', sourceSelectedKeys);
			console.log('targetSelectedKeys: ', targetSelectedKeys);
		},
		handleScroll(direction, e) {
			console.log('direction:', direction);
			console.log('target:', e.target);
		},
		handleDisable(disabled) {
			this.disabled = disabled;
		},
	},
};
</script>
