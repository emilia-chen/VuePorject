<template>  
<el-switch
  v-model="value3"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
</template>


<script>
  export default {
    data() {
      return {
        value3: true,
        value4: true
      }
    }
  };
</script>
<style>
 
</style>