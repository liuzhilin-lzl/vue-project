<template>
	<div id="app">
		<al-cascader v-model="resArr" level="1" @input="selectArea" data-type="all" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>
<script>
import AlCascader from './components/Cascader.vue'
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
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
