<!--
 * @Author: your name
 * @Date: 2021-11-20 20:09:35
 * @LastEditTime: 2021-11-20 20:12:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-project/src/components/selectModal/InputModal.vue
-->

<template>
  <div>
    <el-input size="small" :value="defaultValue"></el-input>
  </div>
</template>
<script>
export default {
  model: { 
    
  }
  props: { 
    defaultValue: {
      type: String,
      default: ''
    }
  }
  data() {
    return {
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