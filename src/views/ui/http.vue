<template>
<div class="ui-http">
  <div class="ui-card">
    <div class="we-card">
      <div class="we-card__header">
        <h1 class="we-card__title">文章数据</h1>
      </div>
      <div class="we-card__body">
        <div class="we-cell" v-for="(item, index) in list" :key="index">
          <div class="we-cell__body">
              {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="we-btn we-btn--primary we-btn--block" :class="{'we-btn--secondary': list.length}" @click="fetchData">点击获取异步数据......</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    fetchData() {
      if (this.list.length) {
        return
      }
      this.$loading()
      this.$http.post('api/fetchAllArticles').then((res) => {
        this.list = res
      }).catch(err => {
        window.console.log(err, '捕获错误信息')
      })
      this.$loading.end()
      // 定时器，测试使用
      setTimeout(() => {
        this.list = []
      }, 3000)
    },
  },
}
</script>

<style>
.ui-loading {
  padding: 60px 0px;
}
</style>

