<template>
  <div class="loading" :class="{ 'loading--active': active, 'loading--fade-in': fadeIn }">
    <div class="loading__body">
      <img src="http://www.mihui365.com/img/loading.gif" alt="">
      <p>正在努力加载中......</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      fadeIn: false,
      message: '',
    }
  },
  methods: {
    /**
     * 显示
     * @param {string} message - 提示消息
     */
    show(message) {
      this.message = message
      if (this.active) {
        return
      }
      this.active = true
    },
    /**
     * 隐藏
     * @public
     */
    hide() {
      if (!this.active) {
        return
      }
      this.fadeIn = false
      this.message = ''
      this.active = false
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loading {
    position: fixed;
    display: none;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 100%;
    z-index: 2020;

    &__body {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);  
      color: gray;
    }
    &--active {
      display: block;
    }

    &--fade-in {
      opacity: 1;  
    }
  }
</style>