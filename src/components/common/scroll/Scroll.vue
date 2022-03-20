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
    probeType:Number,
    default:0
  },

  data(){
    return{
      scroll: null,
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    }
  },
  mounted() {
    //1、创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      pullUpLoad: true,
      observeDOM: true,
      click:true,
      probeType: this.probeType
    })
    //2、监听滚动的位置
    this.scroll.on('scroll',position => {
      this.$emit('scroll',position)
    })
    //监听上拉事件
    this.scroll.on('pullingUp', () => {
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