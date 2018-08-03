<template>
  <div id="app">
  
     <toolbar></toolbar>
      <note-list></note-list>
<editor></editor>
  

 <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <p>{{count}}</p>
   <p>"aaa:"+{{doneTodosCount}}</p>
  </div>



</template>

<script>
import Toolbar from './components/Toolbar.vue'
import NoteList from './components/NoteList.vue'
import Editor from './components/Editor.vue'
import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    Toolbar,
    NoteList,
    Editor
  },

  computed:{

    
     ...mapState(["count"]),
     /*...mapState({
            count:state=>state.count  
     }),*/
    /*count(){
      return this.$store.state.count
    },*/
   /* doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }*/
   ...mapGetters([
           "doneTodosCount"
        ]),
  },  
   methods: {
    /*increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }*/
   /* ...mapMutations([  
            'decrement','increment'
        ]),*/

    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    }     



  }
}
//  <img src="./assets/logo.png">

 //<router-view/>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
html, #app {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
#note-editor {
  min-width: 600px;
  height: 100%;
  margin-left: 380px;
}
</style>
