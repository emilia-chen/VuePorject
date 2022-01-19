<template>
  <div id="app">
    <img src="./assets/logo.png">
    <son :n='n' :m='m'></son>
    <router-view/>
  </div>

</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
import son from './son.vue';
export default {
  name: 'App',
    components: {
  //  HelloWorld,
son
  },
   data() {
      return {
         n:0,
         m:0
      };
   },
   updated(){
console.log('父updated')
   },
     mounted(){
       //console.log('123')
      // 让父组件的状态更新
      // setInterval(() => {
      //    this.n=100;
      //    this.m=200;
      // }, 2000);
   }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
