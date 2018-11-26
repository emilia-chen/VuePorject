<template>
  <div style="">
    <blur :blur-amount=10 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>
    <flexbox :gutter="0">
      <flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur } from 'vux'

export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      images: [
        'http://p6.qhimg.com/dmfd/182_136_/t014254a8a20efa54a4.bmp?size=640x299',
        'http://p6.qhimg.com/dmfd/182_136_/t014254a8a20efa54a4.bmp?size=640x299',
        'http://p6.qhimg.com/dmfd/182_136_/t014254a8a20efa54a4.bmp?size=640x299'
      ],
      url: 'http://p6.qhimg.com/dmfd/182_136_/t014254a8a20efa54a4.bmp?size=640x299'
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>