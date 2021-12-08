<template>
  <div style="padding: 20px">
    <!-- model 双向绑定 -->
    <el-input :value="defaultValue" v-bind="$attrs" v-on="$listeners"  @input="updateVal"></el-input>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'defaultValue',
    event: 'changeValue'
  },
  // inheritAttrs: false,
  props: {
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {
    // model方式双向绑定
    updateVal(val) {
      this.$emit('changeValue', val)
    }
  }
};
</script>