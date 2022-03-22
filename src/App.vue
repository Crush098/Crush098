<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "@/components/context/mainTabBar/MainTabBar";
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>
<style scoped lang="less">
@import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}
.main-tab-bar{
  z-index: 9;
}
</style>
