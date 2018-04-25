<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <topHead></topHead>
  </div>
</template>

<script>
import topHead from '@/components/public/topHead'
export default {
  name: 'App',
  components:{
    topHead
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
