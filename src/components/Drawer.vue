<template>
  <div>
   
  </div>
</template>



<script>

export default {
  directives: {
   
  },
  components: {

  },
  data () {
    return {
      show: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$vux.alert.show({
        title: 'VUX is Cool',
        content: '',//this.$t('Do you agree?'),
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding now')
        }
      })
    },
    showModule () {
      AlertModule.show({
        title: 'VUX is Cool',
        content:'',// this.$t('Do you agree?'),
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
    showModuleAuto () {
      this.showModule()
      setTimeout(() => {
        AlertModule.hide()
      }, 3000)
    },
    showPluginAuto () {
      this.showPlugin()
      setTimeout(() => {
        this.$vux.alert.hide()
      }, 3000)
    }
  },
  mounted () {
 
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>