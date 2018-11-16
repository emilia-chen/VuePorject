<template>
  <div>
  
  <div v-if="msg" > 
  <HelloWorld/>
  </div>

<button @click="msg=true" > 按钮</button>

    <box gap="10px 10px">
      <icon type="success"></icon>
      <icon type="info"></icon>
      <icon type="info-circle"></icon>
      <icon type="warn"></icon>
      <icon type="waiting"></icon>
      <icon type="waiting-circle"></icon>
      <icon type="safe-success"></icon>
      <icon type="safe_warn"></icon>
      <icon type="success-circle"></icon>
      <icon type="success-no-circle"></icon>
      <icon type="circle"></icon>
      <icon type="download"></icon>
      <icon type="cancel"></icon>
      <icon type="search"></icon>
      <icon type="clear"></icon>
      <br/>
      <icon type="success" is-msg></icon>
      <icon type="info" is-msg></icon>
      <icon type="warn" is-msg></icon>
      <icon type="waiting" is-msg></icon>
      <icon type="safe_success" is-msg></icon>
      <icon type="safe_warn" is-msg></icon>
    </box>
  </div>
  
  
</template>

<script>
import { Box, Icon } from 'vux'
 import HelloWorld from './HelloWorld'
//const HelloWorld = () => import('./HelloWorld.vue')
// const HelloWorld = () => import(/* webpackChunkName: "group-foo" */ './HelloWorld.vue')

export default {
  data () {
    return {
      msg: false
    }
  },
  components: {
    Box,
    Icon,
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
