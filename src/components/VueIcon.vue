<template>

<el-row>
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
</el-row>
</template>

<script>

  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
      };
    },
    methods: {
  
      }
    
  }

</script>
<style >
  
</style>