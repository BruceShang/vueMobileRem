<template>
  <div class="loading" :class="{ 'loading--active': active, 'loading--fade-in': fadeIn }" @transitionend="transitionend">
    <div class="loading__body">
      <img src="http://www.mihui365.com/img/loading.gif" alt="">
<p>正在努力加载中......</p>
    </div>
  </div>
</template>

<script  type="text/babel">
  export default {
    data() {
      return {
        /**
         * 是否激活（显示）
         * @type {boolean}
         */
        active: false,

        /**
         * 提示消息（建议不超过5个字）
         * @type {string}
         */
        message: '',

        /**
         * 是否显现
         * @type {boolean}
         */
        fadeIn: false,

        /**
         * 是否完全显现
         * @type {boolean}
         */
        fadedIn: false,

        /**
         * 是否正在渐现
         * @type {boolean}
         */
        fadingIn: false,

        /**
         * 是否正在渐隐
         * @type {boolean}
         */
        fadingOut: false,
      }
    },
    methods: {
      /**
       * 显示
       * @public
       * @param {string} message - 提示消息
       * @return {Object} this
       */
      show(message) {
        this.message = message

        if (this.active) {
          return this
        }

        this.active = true
        this.$nextTick(() => {
          if (this.fadingOut) {
            return
          }

          // 强制重绘已使渐变动画生效
          this.$el.offsetWidth // eslint-disable-line
          this.fadingIn = true
          this.fadeIn = true
        })

        return this
      },

      /**
       * 完全显示（渐现动画结束）
       * @private
       */
      shown() {
        this.fadingIn = false
        this.fadedIn = true

        /**
         * 触发显示完成事件
         * @event Loading#shown
         */
        this.$emit('shown')
      },
      /**
       * 隐藏
       * @public
       * @return {Object} this
       */
      hide() {
        if (!this.active || this.fadingOut) {
          return this
        }

        this.fadeIn = false
        this.fadingOut = true
        this.$nextTick(() => {
          if (this.fadedIn) {
            this.fadedIn = false
          } else {
            this.fadingIn = false
            this.hidden()
          }
        })

        return this
      },

      /**
       * 完全隐藏（渐隐动画结束）
       * @private
       * emits Loading#hidden
       */
      hidden() {
        this.active = false
        this.fadingOut = false
        this.message = ''

        /**
         * 触发隐藏完成事件
         * @event Loading#hidden
         */
        this.$emit('hidden')
      },

      /**
       * CSS Transition变换效果结束事件处理函数
       * @private
       */
      transitionend() {
        if (this.fadingIn) {
          this.shown()
        } else if (this.fadingOut) {
          this.hidden()
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .loading {
    position: fixed;
    display: none;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 100%;
    z-index: 2020;
    opacity: 0;
    transition: opacity .15s ease;

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