<template>
  <div id="app">
    {{ title }}
    <Navbar />
    <Sidebar />
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'


export default {
  name: 'App',
  data(){
    return {
      title: `Arnab`
    }
  },
  components: {
    Navbar,Sidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
