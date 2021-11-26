<!--
 * @Author: your name
 * @Date: 2021-11-20 20:09:35
 * @LastEditTime: 2021-11-22 08:28:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-project/src/components/selectModal/InputModal.vue
-->

<template>
  <div>
    <!-- model 双向绑定 -->
    <el-input size="small" :value="defaultValue" @input="updateVal"></el-input>
    <el-input size="small" :value="defaultValueObj.age" @input="updateVal"></el-input>
    <el-input size="small" :value="defaultValueObj.age" @input="updateVal"></el-input>
    <!-- .sync 修饰符双向绑定 -->
    <!-- <el-input size="small" v-model="value"></el-input>
    <el-button type="primary" @click="submitVal">提交</el-button> -->
  </div>
</template>
<script>
export default {
  model: {
    prop: 'defaultValue',
    event: 'changeValue'
  },
  props: {
    defaultValue: {
      type: String,
      default: ''
    },
    defaultValueObj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      value: '',
      testValue: 'aa'
    };
  },
  methods: {
    // model方式双向绑定
    updateVal() {
      this.$emit('changeValue', this.defaultValueObj)
    },
    // .sync 修饰符双向绑定
    submitVal() {
      this.$emit('update:changeValue', this.value)
    }
  }
};
</script>