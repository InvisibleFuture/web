<template>
  <div id="app">
    <header>
      <webheader></webheader>
    </header>
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

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f1f1f1;
  flex-direction: column;
  height: 100%;
  display: flex;
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
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
