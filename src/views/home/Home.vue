<template>
<div id="home">
  <nav-bar class="home-nav">
    <template v-slot:center><div>购物街</div></template>
  </nav-bar>
  <scroll class="content">
    <ul>
      <li>首页47</li>
      <li>首页48</li>
      <li>首页49</li>
      <li>首页50</li>
      <li>首页49</li>
      <li>首页50</li>
      <li>首页49</li>
      <li>首页50</li>
    </ul>
    <tab-control class="tab-control"
                 :title="['流行','新品','精选']"
                 @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </scroll>
</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/NavBar";
import TabControl from "@/components/context/tabControl/TabControl";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import GoodsList from "@/components/context/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Home",
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType: 'pop'
    }
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        //console.log(res);
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
      })
    },
    tabClick(index){
      switch (index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
    }
  }
}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh; /*视口大小*/
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.tab-control{
  position: sticky;
  top: 44px;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
}
/*.content{*/
/*  height: calc(100% - 93px);*/
/*  margin-top: 44px;*/
/*  overflow: hidden;*/
/*}*/
</style>