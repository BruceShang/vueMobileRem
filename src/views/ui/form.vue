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
      <div>
        <label class="we-cell">
          <div class="we-cell__body">苹果</div>
          <we-checkbox name="foo" value="apple" checked v-model="checkboxlist"></we-checkbox>
        </label>
        <label class="we-cell">
          <div class="we-cell__body">香蕉</div>
          <we-checkbox name="foo" value="banana" v-model="checkboxlist"></we-checkbox>
        </label>
      </div>
    </div>
    <div class="we-card">
      <div class="we-card__header">
        <h1 class="we-card__title">单选框 - {{payment}}</h1>
      </div>
      <div>
        <label class="we-cell">
          <div class="we-cell__header"> <i class="we-icon we-icon--wechat-pay we-wechat-pay"></i></div>
          <div class="we-cell__body"> 微信支付</div>
          <we-radio name="payment" value="wechatPay" checked v-model="payment"></we-radio>
        </label>
        <label class="we-cell">
          <div class="we-cell__header"> <i class="we-icon we-icon--alipay we-alipay"></i></div>
          <div class="we-cell__body">支付宝支付</div>
          <we-radio name="payment" value="alipay" v-model="payment"></we-radio>
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
      payment: 'wechatPay',
      checkboxlist: [],
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.we-wechat-pay,
.we-alipay {
  margin-right: 12px;
  font-size: 36px;
  color: #4bad41;
}
.we-alipay {
  color: #2AADEA;  
}
</style>
