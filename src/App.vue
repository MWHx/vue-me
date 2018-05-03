<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
   <home2></home2>
  </div>
</template>

<script>
import topHead from '@/components/public/topHead'
import home2 from '@/components/next/home2'
export default {
  name: 'App',
  components:{
    topHead,
    home2
  }
}
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
</style>
