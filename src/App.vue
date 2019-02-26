<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  // 在页面dom尚未加载完成之前,验证本地存储的主题样式
  created () {
    let style = localStorage.getItem('themeVal')
    if (style) {
      document.querySelector('#theme').href = style
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  font-family: "Microsoft YaHei";
  height: 100%;
  width: 100%;
}
</style>
