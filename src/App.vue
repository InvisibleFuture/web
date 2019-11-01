<template>
  <div id="app">
    <webheader></webheader>
    <main>
      <webnav></webnav>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    webheader: () => import("./components/header.vue"),
    webnav: () => import("./components/nav.vue")
  }
};
</script>

<style lang="less">
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background: #f6f6f6;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #747474;
}
::-webkit-scrollbar-corner {
  background: #f6f6f6;
}
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  a {
    text-decoration: none;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f1f1f1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  animation-timing-function: ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
