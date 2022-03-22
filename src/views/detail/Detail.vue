<template>
<div id="detail">
  <detail-nav-bar></detail-nav-bar>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail} from "@/network/detail";

export default {
  name: "Detail",
  components:{
    DetailNavBar
  },
  data(){
    return{
      iid:null,
      topImages: []
    }
  },
  created() {
    //保存传入的iid
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res => {
      console.log(res);
      //1、获取顶部的图片轮播数据
      console.log(res.result.itemInfo.topImages);
    })
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>