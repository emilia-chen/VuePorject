// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.productionTip = false

import state from './state'


// const moduleA = {
//   state: { count: 1,},
//   mutations: {
//         increment(state) {
//             state.count++
//         },
//         decrement(state) {
//             state.count--
//         }
//     },
//   actions: { 
//       increment (context) {
//       context.commit('increment')
//     }
//    },
//   getters: {  }
// }

// const moduleB = {
//   state: {   count1: 1,},
//   mutations: { },
//   actions: { 

//   }
// }

// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [{
            id: 1,
            text: '...',
            done: true
        }, {
            id: 2,
            text: '...',
            done: false
        }, {
            id: 3,
            text: '...',
            done: true
        }]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        }
    },
    mutations: {
        increment(state) {
           
           state.count++;
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
    increment (context) {
    	console.log(context);
    	context.commit('increment');
    console.log('我比reduce提前执行');
     // 
    },
    decrement (context) {
        console.log(context);
        context.commit('decrement');
     }
     // 
    }
  
});
//store.dispatch('increment');
//store.commit('increment')

//console.log(store.state.count) // -> 1
console.log(store.a)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})
































