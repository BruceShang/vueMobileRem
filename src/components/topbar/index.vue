
<template>
  <div class="components-topbar components-topbar__fixed">
    <div class="topbar__header">
      <a href="javascript:;" @click="gotoBack">
        <i class="we-icon we-icon--left-arrow"></i>
      </a>
    </div>
    <div class="topbar__body">
      {{ title }}
    </div>
    <div class="topbar__footer">
      <a href="javascript:;">
        <i class="we-icon we-icon--share"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    gotoBack() {
      if (global.history.length > 1) {
        global.history.back(-1)
      }
    },
  },
}
</script>

