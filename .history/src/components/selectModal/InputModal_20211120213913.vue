<!--
 * @Author: your name
 * @Date: 2021-11-20 20:09:35
 * @LastEditTime: 2021-11-20 21:38:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-project/src/components/selectModal/InputModal.vue
-->

<template>
  <div>
    <el-input size="small" :value="吧;ie" @input="updateVal"></el-input>
  </div>
</template>
<script>
export default {
  // model: {
  //   prop: 'defaultValue',
  //   event: 'changeValue'
  // },
  props: {
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    updateVal(val){
      this.$emit('update:changeValue',val)
    }
  }
};
</script>