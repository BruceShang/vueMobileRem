<template>
  <div id="app">
    <!-- <group>
      <selector title="title" :options="options"
      v-model="value"></selector>
    </group> -->
    <div class="header">
      <span class="header-banner">
        <img src="./assets/zhuanxian_03.jpg" alt="">
      </span>
      <span class="header-rg">
        <a>登录</a>
        <img src="./assets/zhuanxian_06.jpg" alt="">
      </span>
    </div>
    <div class="app-banner">专线园区
    </div>
    <div class="content">
      <dl>
        <dt><img src="./assets/zhuanxian_11.jpg" alt=""></dt>
        <dd>
          <h2>苏州中物流现代之星商贸产…</h2>
<p>苏州中物流现代之星商贸中物流现代中物流现代中物流现代中物流现代中物流现代中物流现代</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="./assets/zhuanxian_11.jpg" alt=""></dt>
        <dd>
          <h2>苏州中物流现代之星商贸产…</h2>
<p>苏州中物流现代之星商贸中物流现代中物流现代中物流现代中物流现代中物流现代中物流现代</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="./assets/zhuanxian_11.jpg" alt=""></dt>
        <dd>
          <h2>苏州中物流现代之星商贸产…</h2>
<p>苏州中物流现代之星商贸中物流现代中物流现代中物流现代中物流现代中物流现代中物流现代</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="./assets/zhuanxian_11.jpg" alt=""></dt>
        <dd>
          <h2>苏州中物流现代之星商贸产…</h2>
<p>苏州中物流现代之星商贸中物流现代中物流现代中物流现代中物流现代中物流现代中物流现代</p>
        </dd>
      </dl>
    </div>
     <!-- <panel></panel> -->
    <!-- <div class="footer">

    </div> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value: '',
      options: [
        {
          key: 'number',
          value: 123
        },
        {
          key: 'number',
          value: 456
        }
      ]
    }
  },
  mounted () {
    this.handle()
  },
  methods: {
    handle () {
      // const dpr = window.document.documentElement.querySelector('meta[name="flexible"]').getAttribute('content')
      // alert(dpr, '-dpr')
      // alert(window.devicePixelRatio)
    }
  }
}
</script>

<style>
  .header {
    width: 100%;
    height: 80px;
    background: #ffffff;
  }
  .header-banner {
     display: inline-block;
     width: 141px;
     height: 62px;
     margin: 16px 0 0 60px;
  }
 .header-banner img {
   width: 100%;
 }
 .header-rg {
   float: right;
   margin: 30px 40px 0 0;
   font-size:26px;/*px*/
   color:rgba(255,147,0,1);
 }
 .header-rg img {
   width: 44px;
   height: 28px;
   vertical-align: bottom;
 }
 .app-banner {
   margin-top: 20px;
   width: 100%;
   height: 304px;
   font-size:40px;/*px*/
   text-align: center;
   line-height: 304px;
   color: rgba(255,255,255,1);
   background: url("./assets/banenr.png")
 }
 .content {
   width: 100%;
   padding: 0px 30px;
   margin-top: 30px;
 }
 .content dl {
   display: inline-block;
   vertical-align: top;
   width: 100%;
   margin-bottom: 20px;

 }
 .content dt {
   float: left;
   width: 200px;
   margin-right: 20px;
 }
 .content dt img{
   width: 100%;
 }
 .content dl dd {
   float: left;
   width: calc(100% - 220px);
   font-size: 24px;/*px*/
   margin-left: 0px;
   line-height: 35px;
   padding-top: 10px;
 }
 .content dl dd:nth-of-type(2) {
   font-size: 18px; /*px*/
 }
 .content dl dd h2 {
   font-size: 24px;/*px*/
   font-weight: bolder;
   line-height: 35px;
 }
 .footer {
   width: 100%;
   height: 300px;
   background: #333333;
 }
* {
 box-sizing: border-box;
}
</style>
<!-- <style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style> -->
