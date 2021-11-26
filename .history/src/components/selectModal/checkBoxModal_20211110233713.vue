<!--
 * @Author: your name
 * @Date: 2021-11-10 23:15:02
 * @LastEditTime: 2021-11-10 23:37:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-project/src/components/selectModal/checkBoxModal.vue
-->
<template>
	<div>
		<el-checkbox :indeterminate="isIndeterminate"
			v-model="checkAll"
			@change="handleCheckAllChange"
		>
			全选
		</el-checkbox>
		<div style="margin: 15px 0"></div>
		<el-checkbox-group
			v-model="checkedCities"
			@change="handleCheckedCitiesChange"
		>
			<el-checkbox v-for="city in cities" :label="city" :key="city">{{
				city
			}}</el-checkbox>
		</el-checkbox-group>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: ,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>