<template>
  <div id="app">
    <div class="header" style="min-height: 0.88rem">
      <topbar :title="$store.state.global.title"></topbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    /**
     * 监听路由，动态更换topbar组件的title以及浏览器中的title
     */
    $route() {
      const { title } = this.$route.meta
      this.$store.dispatch('global/updateTitle', title)
    },
  },
}
</script>
