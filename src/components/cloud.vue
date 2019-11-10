<template>
  <main>
    <webnav></webnav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>
<script>
export default {
  components: {
    webnav: () => import("./nav.vue")
  }
};
</script>
<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
</style>