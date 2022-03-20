<template>
<div id="home">
  <nav-bar class="home-nav">
    <template v-slot:center><div>购物街</div></template>
  </nav-bar>
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
</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/NavBar";
import TabControl from "@/components/context/tabControl/TabControl";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import GoodsList from "@/components/context/goods/GoodsList";

export default {
  name: "Home",
  components:{
    NavBar,
    TabControl,
    GoodsList
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
        console.log(res);
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
</style>