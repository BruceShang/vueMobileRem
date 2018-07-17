<template>
  <div id="app">
    <div class="header">
      <span class="header-logo">
        <img src="http://image.mihui365.com/mihui-static/img/bg-download.png" alt="">
      </span>
      <div class="header-rg">
        <a>登录</a>
      </div>
    </div>
    <div class="app-banner" style="background: url('http://image.mihui365.com/salelistImg/5169008608626988.jpg') no-repeat center; background-size: cover">
    <!-- 专线园区 -->
    </div>
    <!-- <selector title="标题内容" :options="{key: 'id', value: '1234'}"></selector> -->
    <div class="app__content">
      <div class="app__item" v-for="item in picList" :key="item">
        <img :src="`http://image.mihui365.com/boutiqueImg/${item}`" alt="">
        <p class="ignore">睡眠面膜 圣诞限定</p>
        <span class="ignore">￥ 89.99</span>
      </div>
    </div>
    <div class="app__footer">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      picList: [
        '1215327031945250.jpg',
        '1466061814295342.jpg',
        '25840294506507237.jpg',
        '9861147032078084.jpg',
        '1215327031945250.jpg',
        '1466061814295342.jpg',
        '25840294506507237.jpg',
        '9861147032078084.jpg',
      ],
    }
  },
}
</script>

<style lang="stylus" scpoped>
  .app {
    &__content {
      padding-bottom: 80px;
    }
    &__item {
      display: inline-block;
      position: relative
      width: 50%;
      // height: 420px;
      vertical-align: top;
      background: #ffffff
      border-right: 1px #dedede solid
      border-bottom: 1px #dedede solid
      margin-bottom: 1px;
      img {
        height 345px
        width: 100%
      }
      p {
        padding: 0px 0px 5px 24px;
      }
      span {
        display: inline-block
        padding: 0px 0px 24px 24px;
        color: #ff5a5f
        font-size: 30px;
      }
    }
    &__border-1px {
      position: absolute
      width: 1px
      height: 100%
      background: white svg(square param(--color #dedede))
    }
    &__border-1px-bottom {
      position: absolute
      width: 100%
      height: 1px
      background: white svg(square param(--color #dedede))
    }
    &__footer {
      position: fixed;
      width: 100%;
      height: 80px;
      line-height: 80px;
      bottom: 0px;
      z-index: 1;
      background: #ffffff;
      box-shadow: 2px -3px 10px 3px rgba(0, 0, 0, 0.2);
      ul {
        li {
          display: inline-block;
          width: 32%;
          height: 80px;
          text-align: center;
          color: rgba(255, 147, 0, 1);
        }
      }
    }
  }
</style>

<style>
  .header {
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0px;
    padding-bottom: 20px;
    background: #ffffff;
    z-index: 1;
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
  }

  .header-logo {
    display: inline-block;
    height: 62px;
    margin: 10px 0 0 30px;
  }

  .header-logo img {
    width: 60px;
    vertical-align: middle;
  }

  .header-rg {
    float: right;
    margin: 25px 40px 0 0;
    color: rgba(255, 147, 0, 1);
  }
  .header-rg img {
    display: inline-block;
    width: 44px;
    height: 28px;
    vertical-align: sub;
  }
  .app-banner {
    width: 100%;
    height: 304px;
    font-size: 40px;
    text-align: center;
    line-height: 304px;
    color: rgba(255, 255, 255, 1);
    margin-top: 80px;
  }
</style>
<style lang="less">
@import '~vux/src/styles/1px.less';
</style>
