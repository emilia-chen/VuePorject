// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

import objectAssign from 'object-assign'
// load vuex i18n module
import vuexI18n from 'vuex-i18n';
import { DatetimePlugin } from 'vux'

Vue.use(Vuex);

Vue.config.productionTip = false

// initialize the vuex store using the vuex module. note that you can change the
//  name of the module if you wish
const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});
Vue.use(vuexI18n.plugin, store);
Vue.use(DatetimePlugin);
const translationsEn = {
    "content": "This is some {type} content",
    "My nice title": "Dies ist ein toller Inhalt",
    "Toggle readonly":"切换readonly"
};

// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
const translationsDe = {
    "My nice title": "Ein schöner Titel",
    "content": "Dies ist ein toller Inhalt"
};


const vuxLocales = require('json-loader!yaml-loader!./locales/all.yml')
const componentsLocales = require('json-loader!yaml-loader!./locales/components.yml')
 
const finalLocales = {
  'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'])
}
 
for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}

// set the start locale to use
Vue.i18n.set('zh-CN');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
