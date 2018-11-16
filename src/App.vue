<template>
  <div id="app" style="height:100%;">
 <view-box ref="viewBox" body-padding-top="46px" style="height:100%;">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
   
    <router-view />
      <tabbar slot="bottom"></tabbar>
  </view-box>
  </div>
</template>


<script>
import { ViewBox,XHeader,Tabbar } from 'vux'
export default {
  name: 'App',
  components: {
    ViewBox,
    XHeader ,
    Tabbar
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
