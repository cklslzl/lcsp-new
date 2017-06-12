<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss" src="./style/index.scss"></style>
<style>
  #app {
    font-family: 苹方 regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    height: 100%;
  }
</style>
<script>
  export default {
    name: 'app'
  }
</script>

