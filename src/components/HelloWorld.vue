<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

  <video-player class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions" >
    </video-player>
   <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>

      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name: 'HelloWorld',
  components: {
    videoPlayer

  },
  data () {
    return {
      msg: '你好,vue',
        playerOptions: {
        live: true,
        autoplay: true, // 如果true，浏览器准备好时开始播放
        muted: false, // 默认情况下将会消除任何音频
        loop: false, // 是否视频一结束就重新开始
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // controlBar: {
        //   timeDivider: false,
        //   durationDisplay: false,
        //   remainingTimeDisplay: false,
        //   currentTimeDisplay: true, // 当前时间
        //   volumeControl: false, // 声音控制键
        //   playToggle: false, // 暂停和播放键
        //   progressControl: false, // 进度条
        //   fullscreenToggle: true // 全屏按钮
        // },
        techOrder: ['html5', 'flash'], // 兼容顺序
        // flash: {
        //   hls: {
        //     withCredentials: false
        //   },
        //   html5: { hls: { withCredentials: false } },
        //   swf: SWF_URL
        // },
        sources: [
          {
           // withCredentials: false,
           // type: 'application/x-mpegURL',
            src:'https://thumbnail0.baidupcs.com/thumbnail/56711a4546a5b87d75bfa3ed08dc6753?fid=1059592217-250528-1106221993213679&time=1625220000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rVmsW9t7RCku%2FD0sBV3kupe9vyc%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=8850536309077779247&dp-callid=0&file_type=0&size=c850_u580&quality=100&vuk=-&ft=video'//'http://vjs.zencdn.net/v/oceans.mp4'
          }
        ],
        poster: '',
        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }}
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
