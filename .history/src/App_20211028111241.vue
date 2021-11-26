<template>
	<div id="app">
		<al-cascader v-model="resArr" level="3" @input="selectArea" data-type="all" />
	</div>
</template>
<script>
import AlCascader from './components/Cascader.vue'
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	components: {
		AlCascader
	},
	data() {
		return { 
			resArr: []
		}
	},
	methods: {
		selectArea() {
		console.log(this.resArr);
		}
	}
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
