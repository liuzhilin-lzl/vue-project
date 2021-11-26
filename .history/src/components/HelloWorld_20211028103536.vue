<template>
	<div
		v-infinite-scroll="handleInfiniteOnLoad"
		class="demo-infinite-container"
		:infinite-scroll-disabled="busy"
		:infinite-scroll-distance="10"
	>
		<a-table :columns="columns" :data-source="data" rowKey="email">
			<div v-if="loading && !busy" class="demo-loading-container">
				<a-spin />
			</div>
		</a-table>
		<a-table></a-table>

		<a-cascader
			:options="options"
			placeholder="Please select"
			@change="onChange"
		/>
	</div>
</template>
<script>
import reqwest from 'reqwest';
import infiniteScroll from 'vue-infinite-scroll';
const fakeDataUrl =
	'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: true,
		width: '20%',
		scopedSlots: { customRender: 'name' },
	},
	{
		title: 'Gender',
		dataIndex: 'gender',
		filters: [
			{ text: 'Male', value: 'male' },
			{ text: 'Female', value: 'female' },
		],
		width: '20%',
	},
	{
		title: 'Email',
		dataIndex: 'email',
	},
];
export default {
	directives: { infiniteScroll },
	data() {
		return {
			data: [],
			loading: false,
			busy: false,
			columns,
			options: [
				{
					value: 'zhejiang',
					label: 'Zhejiang',
					children: [
						{
							value: 'hangzhou',
							label: 'Hangzhou',
							children: [
								{
									value: 'xihu',
									label: 'West Lake',
								},
							],
						},
					],
				},
				{
					value: 'jiangsu',
					label: 'Jiangsu',
					children: [
						{
							value: 'nanjing',
							label: 'Nanjing',
							children: [
								{
									value: 'zhonghuamen',
									label: 'Zhong Hua Men',
								},
							],
						},
					],
				},
			],
		};
	},
	beforeMount() {
		this.fetchData((res) => {
			this.data = res.results;
		});
	},
	methods: {
		fetchData(callback) {
			reqwest({
				url: fakeDataUrl,
				type: 'json',
				method: 'get',
				contentType: 'application/json',
				success: (res) => {
					callback(res);
				},
			});
		},
		handleInfiniteOnLoad() {
			const data = this.data;
			this.loading = true;
			if (data.length > 14) {
				this.$message.warning('Infinite List loaded all');
				this.busy = true;
				this.loading = false;
				return;
			}
			this.fetchData((res) => {
				this.data = data.concat(res.results);
				this.loading = false;
			});
		},
		onChange(value) {
      console.log(value);
    },
	},
};
</script>
<style>
.demo-infinite-container {
	border: 1px solid #e8e8e8;
	border-radius: 4px;
	overflow: auto;
	padding: 8px 24px;
	height: 300px;
}
.demo-loading-container {
	position: absolute;
	color: aqua;
	bottom: 40px;
	width: 100%;
	text-align: center;
}
</style>
