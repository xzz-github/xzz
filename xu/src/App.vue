<template>
  <div id="app">
   <app-header></app-header>
   <router-view></router-view>
   <app-foot></app-foot>
  </div>
</template>

<script>
import header from "./components/header"
import foot from "./components/foot"
export default {
  name: "App",
  components: {
    "app-header": header,
    "app-foot":foot
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family:  14px/1.5 'Helvetica Neue', 'Helvetica', "Hiragino Sans GB",
  Arial,"Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei",'PingFang SC',
   SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
</style>
