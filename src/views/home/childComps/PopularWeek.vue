<template>
<div class="popular-week">
  <a href="https://act.mogujie.com/zzlx67">
<!--    监听图片是否加载完成-->
    <img src="~@/assets/img/home/recommend_bg.jpg" alt="" @load="imgLoad">
  </a>
</div>
</template>

<script>
export default {
  name: "PopularWeek",
  data(){
    return{
      isLoad: false
    }
  },
  methods:{
    imgLoad(){
      if (!this.isLoad){ //只发出一次事件
        this.$emit('popularWeekImgLoad')
        this.isLoad=true
      }
    }
  }
}
</script>

<style scoped>
.popular-week img{
  width: 100%;
}
</style>