<template>
  <div class="toast" :class="{'toast--active': active, 'toast--fade-in': fadeIn}" @transitionend="transitionend" v-html="message">
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
    show(message) {
      // debugger
      // if (this.active || !message) {
      //   return this
      // }
      this.active = true
      this.message = message
      this.$nextTick(() => {
        // 强制重绘已使渐变动画生效
        this.$el.offsetWidth // eslint-disable-line
        this.fadeIn = true
      })
      setTimeout(() => {
        this.fadeIn = false
      }, 1500)
      this.$emit('show')
      return this
    },
    // shown() {
    //   this.$emit('shown')
    //   setTimeout(this.hide, 1500)
    // },
    hide() {
      this.fadeIn = false
      this.$emit('hide')
      return this
    },
    // hidden() {
    //   debugger
    //   this.fadeIn = false
    //   this.message = ''
    //   this.$emit('hidden')
    // },
    transitionend() {
      // if (this.active) {
      //   this.show()
      // } else {
      //   this.hide()
      // }
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .toast {
    position: fixed;
    display: none;
    width: 80%;
    padding: 30px;
    top: 50%;
    left: 50%;
    opacity: 0;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 10px;
    color: #fff;
    text-align: center;
    transform: translate(-50%, -50%);
    z-index: $z-index-toast;
    transition: opacity .15s ease;

    &--active {
      display: block;  
    }

    &--fade-in {
      opacity: 1;
    }
  }
  // .toast-fade-enter-active,
  // .toast-fade-leave-active {
  //   transition: opacity .3s ease;  
  // }
  // .toast-fade-enter,
  // .toast-fade-leave-to {
  //   opacity: 0; 
  // }
</style>