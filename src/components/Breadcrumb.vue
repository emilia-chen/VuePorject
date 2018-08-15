<template>  
<div >
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/Progress' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/#/Tree">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
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