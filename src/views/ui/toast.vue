<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>Toast</h1>
    </div>
    <div class="we-card__body">
      <div class="we-btn-group">
        <button class="we-btn we-btn--default" @click="show">一次toast</button>
        <button class="we-btn we-btn--primary" @click="show22">多次toast</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      fadeIn: false,
      message: 'message',
      list: [
        'https://o5omsejde.qnssl.com/demo/test1.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        'https://o5omsejde.qnssl.com/demo/test3.jpg',
        'https://o5omsejde.qnssl.com/demo/test4.jpg',
        'https://o5omsejde.qnssl.com/demo/test5.jpg',
        'https://o5omsejde.qnssl.com/demo/test6.jpg',
        'https://o5omsejde.qnssl.com/demo/test7.jpg',
        'https://o5omsejde.qnssl.com/demo/test8.jpg',
      ],
    }
  },
  methods: {
    show() {
      this.$toast('显示-----')
    },
    show22() {
      this.$toast('显示-----11', {
        timeout: 500,
      })
      this.$toast('显示-----22', {
        timeout: 500,
      })
      this.$toast('显示-----33', {
        timeout: 500,
      })
    },
  },
}
</script>

<style>
img[lazy=error] {
  border: 1px red solid;
}
img[lazy=loading] {
  background: #ff0000;
}
a:link, a:visited {
  color: #ff0000;
}
</style>

