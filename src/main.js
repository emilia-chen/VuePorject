// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App'
import router from './router'
//main.js添加下面代码
import i18n from './i18n/i18n';


Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'medium', zIndex: 3000
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    i18n,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
