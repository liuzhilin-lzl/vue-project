
<template>
  <div>
    <!-- .sync 修饰符双向绑定 -->
    <el-input size="small" :value="childText" @input="submitVal"></el-input>
  </div>
</template>
<script>
export default {
  props: {
    childText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {
    // .sync 修饰符双向绑定
    submitVal(val) {
      this.$emit('update:childText', val)
    }
  }
};
</script>