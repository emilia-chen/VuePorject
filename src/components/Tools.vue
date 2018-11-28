<template>
  <div>
    <group title="23">
      <cell title="15s" v-model="value" >
        <countdown v-model="time" @on-finish="finish" v-show="show"></countdown>
      </cell>

       <x-button plain type="warn" @click.native="click1">warn</x-button>
    </group>

<div class="a vux-1px"></div>
<span class="vux-close"></span>
  </div>
</template>

<script>
import { Countdown, Group, Cell,XButton,Loading } from 'vux'
import { base64 } from 'vux'
import { cookie,dateFormat,md5,numberComma, numberPad, numberRandom} from 'vux'
export default {
  components: {
    Countdown,
    Cell,
    Group,
    XButton
  },
  data () {
    return {
      show: true,
      time: 15,
      value: ''
    }
  },
  async mounted () {

let n1=numberComma(213421312) // 21,342,132

let n2=numberPad(123455.555,5) // 01

let n3=numberRandom(1, 7) // 2
 this.$vux.loading.show({
        text: 'Loading',
        position:'fixed'
      })

console.log('n1',n1)
console.log('n2',n2)
console.log('n3',n3)












  let md51=md5('VUX')
console.log('md5',md51)


let date=  dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
console.log('date',date)


  let e=base64.encode('VUX')
   let d= base64.decode('VlVY')
    console.log('e',e)
     console.log('d',d)
    console.log('mounted')
  // setup
document.cookie = 'foo=1'
document.cookie = 'bar=2'

let f=cookie.get('foo')
console.log('f',f)
// returns '1'

let b=cookie.get('bar', function(s) { return parseInt(s); } )
  console.log('b',b)

cookie.set('foo', 3)

cookie.set('bar', 4, {
  domain: 'localhost',
  path: '/',
  expires: 30
})

  },
  methods: {
    finish (index) {
      this.show = false
      this.value = 'completed'
      console.log('current index', index)
    },
    click1:()=>{
      console.log('click')
      console.log(this)
    }
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
.a{
  width:100px;
  height:100px
}
</style>