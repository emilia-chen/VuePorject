<template>
  <div>
   <grid>
      <grid-item label="就网格" v-for="i in 2" :key="i">
        <img slot="icon" src="../assets/logo.png">
      </grid-item>
    </grid>


       <grid :cols=2  :show-lr-borders="false">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<i18n>
Grid:
  zh-CN: 九宫格
Go to Cell:
  zh-CN: 跳转到Cell
Custom content:
  zh-CN: 自定义内容
Custom col:
  zh-CN: 自定义列
</i18n>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'

export default {
  components: {
     Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
</style>