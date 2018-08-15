<template>
<div>
  <el-tooltip content="Top center" placement="top">
  <el-button>Dark</el-button>
</el-tooltip>
<el-tooltip content="Bottom center" placement="bottom" effect="light">
  <el-button>Light</el-button>
</el-tooltip>
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
<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>
