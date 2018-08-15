<template>  
<div >
<el-progress :percentage="0"></el-progress>
<el-progress :percentage="70"></el-progress>
<el-progress :percentage="80" color="#8e71c7"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
</div>
</template>


<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null
      }
    }
  }
</script>
<style >
 
</style>