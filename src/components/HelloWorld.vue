<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
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
  <div id="mycontainer" class="mymap"></div>
    <input id="input_id"/>
  <div id="panel"></div>
  </div>

</template>

<script>
import AMap from 'AMap'
export default {
  name: 'HelloWorld',
    mounted: function () {
      this.init()
    },
  data () {
    return {
      msg: '你好,vue'
    }
  },
    methods: {
      init: function () {
    var map = new AMap.Map('mycontainer',{
    zoom: 10,
    center: [116.39,39.9]//new AMap.LngLat(116.39,39.9)
});


 var marker = new AMap.Marker({
         map: map,
         position: new AMap.LngLat('经度', '纬度') //此处根据页面数据可以直接传入经纬度进行描点
    })

AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({ 
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: "010", // 兴趣点城市
            citylimit: true,  //是否强制限制在设置的城市内搜索
            map: map, // 展现结果的地图实例
            panel: "panel", // 结果列表将在此容器中进行展示。
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        placeSearch.search('北京大学', function(status, result) {
    console.log("status",status);
    console.log("result",result);
    
});


    });
console.log(123);
  AMap.plugin('AMap.Autocomplete',function(){//回调函数
    //实例化Autocomplete
    var autoOptions = {
        city: "", //城市，默认全国
        input:"input_id"//使用联想输入的input的id
    };
    autocomplete= new AMap.Autocomplete(autoOptions);
    //TODO: 使用autocomplete对象调用相关功能
})
      }


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
  .mymap{
      width: 300px;
      height: 300px;
    }
</style>
