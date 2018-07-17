<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1 class="we-card__title">Nisu Mobile UI</h1>
    </div>
    <div>
      <router-link class="we-cell" v-for="(item, index) in list" :key="index" :to="item.route">
        <span class="we-cell__body">{{ item.name }}</span>
        <span class="we-cell__footer">
          <i class="we-icon we-icon--right-arrow"></i>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      const { query } = this.$route.query

      return {
        /**
         * 组件一览表
         * @type {Array}
         */
        list: [
          {
            name: 'Button',
            route: {
              query,
              name: 'ui-button',
            },
          },
        ],
      }
    },
  }
</script>
