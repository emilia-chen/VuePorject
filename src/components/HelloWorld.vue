<template>
  <div class="hello">
   
  <on feature="feature1">
      AWESOME FEATURE 1 is ON
    </on>
    <off feature="feature1">
      AWESOME FEATURE 1 is OFF
    </off>

    <h1>{{ msg }} 智障</h1>
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
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  created () {
    console.log(this.$http);
    this.$http.defaults.baseURL = 'http://wechat.hand-china.com/hmapshowcase'

  this.$http.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.token}`;
    let param = {
        employeeCode: '12345',
    }
// Add a request interceptor
this.$http.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('请求拦截器')
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
// Add a response interceptor
this.$http.interceptors.response.use(function (response) {
    // Do something with response data
     console.log('响应拦截器')
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
   /* this.$http.post('/r/api?sysName=HRMS&apiName=credit_query',param).then(({data}) => {
      console.log('请求结果',data)
    },({error}) => {
      console.log('this',this)
      console.log('error',error)
    })*/
  
this.$http.post('/r/api?sysName=HRMS&apiName=credit_query',param).then(
function(res){
   console.log('请求结果',res)
},function(err){
  console.log('this',this)
}
)

  const url = `/oauth/token?client_id=a765ff3f-8d33-49b4-a9c9-48e991544242&client_secret=ec2a9a5d-8b21-40fb-b20b-fa846b944e7b&grant_type=password&authType=TEL&username=17700002674&password=123456`
this.$http.post(url,param).then(
function(res){
   console.log('请求结果1',res)
},function(err){
  console.log('this',this)
}
)


let req={
                client_id:"residential_client",
                client_secret:"residential_secret",
                grant_type:"password",
                username:"16605759803",
                password:"1年",
                type:"Tel",
                countryCode:"86",
                lang: "zh_CN",
         };

const params = new URLSearchParams();
params.append('client_id', 'residential_client');
params.append('client_secret', 'residential_secret');
params.append('grant_type', 'password');
params.append('username', '16605759803');
params.append('password', '1年');
params.append('type', 'Tel');
params.append('countryCode', '86');
params.append('lang', 'zh_CN');

/*
let kohlerUrl="https://api.qc.kohlerkonnect.com.cn/authorization/oauth/token"

this.$http.post(kohlerUrl,{ headers: { 'content-type': 'application/x-www-form-urlencoded' }}).then(
function(res){
   console.log('请求结果1',res)
},function(err){
  console.log('this',this)
}
)*/

this.$method()


  },
async mounted(){

 const moment = await import('moment');
function determineDate() {
  import('moment')
    .then(moment => moment().format('LLLL'))
    .then(str => console.log(str))
    .catch(err => console.log('Failed to load moment', err));
}
determineDate();

  },
  data () {
    return {
      msg: '你好,vue',
      VARIABLE:'123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/styles/theme.less';
@import '../assets/styles/theme1.less';
h1, h2 {
  font-weight: normal; 
  color:green
}
h1, h2 {
  font-weight: normal; 
  color:green
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
