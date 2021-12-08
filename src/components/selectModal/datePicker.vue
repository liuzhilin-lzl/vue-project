
<template>
	<el-date-picker :value="value" type="date" placeholder="date" @change="selectDate"></el-date-picker>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'changeDate'
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods:{
    selectDate(value) {
      this.$emit('changeDate', value)
    }
  }
};
</script>
<style scoped>
.div {
	color: rgb(255, 0, 0);
}
</style>>
	
