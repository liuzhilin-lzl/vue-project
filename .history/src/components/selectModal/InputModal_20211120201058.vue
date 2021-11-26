
<template>
  <div>
    <el-input size="small" ></el-input>
  </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      checkAll: false,
      cities: cityOptions,
      isIndeterminate: true,
      checkedCities: []
    };
  },
  watch: {
    checkedCities: {
      handler(newValue) {
        console.log('this', this);
        console.log('triggerChange', this.triggerChange);
        if(this.triggerChange) {
          this.$emit('change', newValue)
        } else {
          this.$emit('input', newValue)
        }
      },
      deep: true
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log('1111');
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>