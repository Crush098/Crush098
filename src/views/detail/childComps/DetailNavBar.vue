<template>
  <nav-bar>
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~@/assets/img/common/back.svg" alt="">
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div v-for="(item,index) in titles"
             class="title-item"
             @click="itemClick(index)"
             :class="{active: this.currentIndex===index}"
             >{{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/nav-bar/NavBar";
export default {
 name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
   return{
     titles: ['商品','参数','评论','推荐'],
     currentIndex: 0
   }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.title-item{
  flex: 1;
}
.back img{
  margin-top: 12px;
}
.active{
  color: var(--color-high-text);
}
</style>