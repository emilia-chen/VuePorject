<template>  
  <!-- `checked` 为 true 或 false -->
  <!-- <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
   -->

 <!--
 
 <div>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
 

  <div style="margin: 15px 0;"></div>
   
   
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
 </div>
 -->


 <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>






</template>


<script>

   const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkboxGroup1: ['上海'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
      console.log('val:'+val);
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
<style >
 
</style>