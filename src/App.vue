<template>
  <div id="app" style="height:100%;">


 <drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showModeValue"
    :placement="showPlacementValue"
    :drawer-style="{'background-color':'#35495e', width: '200px'}">
    <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo(beta)" style="margin-top:20px;">
          <cell title="Demo" link="/demo" value="演示" @click.native="  drawerVisibility = false">
          </cell>
          <cell title="Buy me a coffee" link="project/donate" @click.native="  drawerVisibility = false">
          </cell>
          <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
          </cell>
        </group>
        <group title="showMode">
          <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
        </group>
        <group title="placement">
          <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
        </group>
      </div>
 <view-box ref="viewBox" body-padding-top="46px" style="height:100%;">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
    <router-view />
      <tabbar slot="bottom">
    <tabbar-item>
        <img slot="icon" src="./assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="./assets/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      </tabbar>
  </view-box>


  </drawer>
  </div>
</template>


<script>
import { ViewBox,XHeader,Tabbar,TabbarItem ,Drawer ,Group,Radio,Cell} from 'vux'
export default {
  name: 'App',
  components: {
    ViewBox,
    XHeader ,
    Tabbar,
    TabbarItem ,
    Drawer,
    Group,
    Radio,
    Cell
  },
    data () {
    return {
      entryUrl: document.location.href,
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left'
    }
  },
  methods: {
   onShowModeChange (val) {
      /** hide drawer before changing showMode **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showModeValue = val
      }, 400)
    },
    onPlacementChange (val) {
      /** hide drawer before changing position **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showPlacementValue = val
      }, 400)
    },


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
