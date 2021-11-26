<!--
 * @Author: your name
 * @Date: 2021-11-20 20:09:35
 * @LastEditTime: 2021-11-20 21:29:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-project/src/components/selectModal/InputModal.vue
-->

<template>
  <div>
    <!-- <el-input size="small" :value="defaultValue.name" @input="updateVal"></el-input> -->
    <el-input size="small" v-model="defaultValue.name"></el-input>
    <el-input size="small" :value="defaultValue.age"></el-input>
    <el-button type="primary" @click="updateVal"></el-button>
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
      default: () => {
        return{

        }
      }
    }
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    // updateVal(val){
    //   this.$emit('changeValue',val)
    // }
    updateVal(){
      this.$emit('changeValue',this.defaultValue)
    }
  }
};
</script>