<template>
<div class="wrapper" ref="wrapper">
  <div class="content"><slot></slot></div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }//当默认返回的内容是对象或者数组的 data必须是一个函数
  },

  data(){
    return{
      scroll: null,
    }
  },
  mounted() {
    //1、创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      click:true,
      probeType: this.probeType,
      observeImage: true,
      keepAlive: true
    })
    //2、监听滚动的位置
    this.scroll.on('scroll',position => {
      this.$emit('scroll',position)
    })
    //3、监听上拉事件
    this.scroll.on('pullingUp', () => { //可滚动的位置是由scrollerHight属性决定
      this.$emit('pullingUp')//拉到页面底部之后将事件发送出去
    })
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>