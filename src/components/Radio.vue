<template>  
 <!--
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio5" size="small">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京" disabled ></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
-->
   <el-radio v-model="radio" label="1">备选项</el-radio>

</template>
<script>

  export default {
    data () {
      return {
        radio:1,
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        radio7: '1',
        radio8: "1",
        radio9: '1',
        radio10: '1'
      };
    }
  }

  
</script>
<style >
 
</style>