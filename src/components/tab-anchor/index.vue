<template>
  <div class="tab-anchor">
    <div class="tab-anchor__header-wrap">
      <div class="tab-anchor__header" id="fixed-anchor" :class="{'tab-anchor__fixed': fixedTop === 'true'}" :style="{top: `${fixedHeight/100}rem`}">
      <!-- <div class="tab-anchor__header" id="fixed-anchor" :class="{'tab-anchor__fixed': fixedTop === 'true'}" :style="{top: `${fixedvh}px`}"> -->
        <swiper :options="swiperOption">
          <swiper-slide class="tab-anchor__swiper-item" v-for="(item, index) in tabsData" :key="index" :class="{'tab-anchor__current': index === active}" @click.native="tabHandle(item, index)">
            <a class="abc">{{ item.name }}</a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import tabBody from './tab-body'

export default {
  components: {
    tabBody,
  },
  props: {
    /**
     * @type Array
     * tab-anchor 的tab
     */
    tabsData: {
      type: Array || Object,
      default: () => [
        {
          id: 123,
          name: '总榜',
        },
        {
          id: 123,
          name: '护肤',
        },
        {
          id: 123,
          name: '彩妆',
        },
      ],
    },
    /**
     * @type Number
     * 固定滚动高度
     */
    fixedHeight: {
      type: Number,
      default: 88,
    },
    /**
     * @type Number
     * 触发区域
     */
    triggerArea: {
      type: Number,
      default: 80,
    },
  },
  data() {
    return {
      // fixedvh: 0,
      active: 0,
      fixedTop: false,
      tabVauleArr: [], // tab 数组距底部高度的值
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      // this.fixedvh = $('#fixed-anchor').offset().top
      this.initScrollData()
    }, 500)
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    /**
     * 滚动一定距离后固定头部
     */
    fixedTopHandle() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 距离浏览器顶部的距离
      const tabWrapParent = document.getElementById('fixed-anchor').getBoundingClientRect().top
      this.fixedTop = scrollTop >= (tabWrapParent + 15) ? 'true' : 'false'
    },
    /**
     * 初始化滚动数据 - 将内容节点距顶部的高度，保存数组
     */
    initScrollData() {
      this.tabVauleArr = []
      const tabsContents = document.querySelectorAll('.tabs')
      tabsContents.forEach((item) => {
        this.tabVauleArr.push(item.offsetTop)
      })
    },
    /**
     * 滚动时执行操作
     */
    onScroll() {
      let scrollTimer = null
      clearTimeout(scrollTimer)
      this.tabVauleArr = []
      this.fixedTopHandle()
      this.initScrollData()
      // setTimeout 防滚动时抖动问题
      scrollTimer = setTimeout(() => {
        const scrolled = window.scrollY
        this.tabVauleArr.forEach((item, index) => {
          // 位于第一个tab不做处理
          if (index === 0) {
            this.active = index
          } else if (index >= 1 && scrolled >= item - this.triggerArea) {
            this.active = index
          }
        })
      }, 100)
    },
    /**
     * 点击头tab部导航，滚动到指定位置
     * @param {Object} itemObj - 操作对象
     * @param {number} index - 操作对象的索引值
     */
    tabHandle(itemObj, index) {
      this.active = index
      window.requestAnimationFrame(() => {
        $('html, body').animate({
          scrollTop: this.tabVauleArr[index] - this.triggerArea,
        }, 500)
      })
      this.$emit('tabHandle', itemObj)
    },
  },
}
</script>

<style lang="stylus" scoped>
.tab-anchor {
  &__header-wrap {
    height: 88px;  
  }
  &__header {
    width: 100%;
    background: #fff;
    box-shadow: 0 10px 6px -3px rgba(0, 0, 0, 0.1);
  }
  &__current {
    // color: #ff5b5f;
    a {
      color: #ff5b5f !important;
    }
  }
  &__swiper-item {
    display: inline-block;
    width: auto !important;
    padding: 20px 0px;
    cursor: pointer;

    a {
      padding: 0px 40px;
      border-right: 1px solid #dbdbdb;
      color: #8a8a8a;
    }
  }

  &__fixed {
    position: fixed;  
    top: 0px;
    left: 0px;
    z-index: 999;
  }
}
</style>
