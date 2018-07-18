<template>
  <div class="from">
    <div class="we-card">
      <div class="we-card__header">
        <h1 class="we-card__title">Form - 表单</h1>
      </div>
    </div>
    <div class="we-card">
      <div class="we-card__header">
        <h1 class="we-card__title">复选框 --{{checkboxlist}}</h1>
      </div>
      <div class="we-card__body">
        <label class="we-cell">
          <div class="we-cell__body">苹果</div>
          <we-checkbox name="foo" value="apple" id="apple" v-model="checkboxlist"></we-checkbox>
        </label>
        <label class="we-cell">
          <div class="we-cell__body">香蕉</div>
          <we-checkbox name="foo" value="banana" id="banana" v-model="checkboxlist"></we-checkbox>
        </label>
      </div>
    </div>
    <div class="we-card">
      <div class="we-card__header">
        <h1 class="we-card__title">单选框 - {{payment}}</h1>
      </div>
      <div class="we-card__body">
        <label class="we-cell">
          <div class="we-cell__body">微信支付</div>
          <div class="we-radio">
            <input type="radio" v-model="payment" class="we-radio__input" value="payment1" name="payment" checked>
            <span class="we-radio__indicator"></span>
          </div>
        </label>
        <label class="we-cell">
          <div class="we-cell__body">支付宝支付</div>
          <div class="we-radio">
            <input type="radio" v-model="payment" class="we-radio__input" value="payment2" name="payment">
            <span class="we-radio__indicator"></span>
          </div>
        </label>
        <label class="we-cell">
          <div class="we-cell__body">工商银行支付</div>
          <div class="we-radio">
            <input type="radio" v-model="payment" class="we-radio__input" value="payment3" name="payment">
            <span class="we-radio__indicator"></span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxs: ['apple'],
      payment: 'payment1',
      checkboxlist: [],
      css: '',
      html: '',
      javascript: '',
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
