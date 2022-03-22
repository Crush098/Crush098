<template>
<div id="home">
  <nav-bar class="home-nav">
    <template v-slot:center><div>购物街</div></template>
  </nav-bar>
  <tab-control ref="tabControl1"
               :title="['流行','新品','精选']"
               @tabClick="tabClick"
               class="tab-control"
               v-show="isTabFixed"></tab-control>
  <scroll class="content"
          ref="scroll"
          :probe-type="3"
          @scroll="contentScroll"
          :pull-up-load="true"
          @pullingUp="loadMore">
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <popular-week @popularWeekImgLoad="popularWeekImgLoad"></popular-week >
    <tab-control ref="tabControl2"
                 :title="['流行','新品','精选']"
                 @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </scroll>
<!--  组件不能直接监听点击事件 要加.native-->
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
</div>
</template>

<script>
import NavBar from "@/components/common/nav-bar/NavBar";
import TabControl from "@/components/context/tabControl/TabControl";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import GoodsList from "@/components/context/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/context/backTop/BackTop";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import PopularWeek from "@/views/home/childComps/PopularWeek";

export default {
  name: "Home",
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    PopularWeek
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  // activated() {
  //   this.$refs.scroll.refresh()
  //   this.$refs.scroll.scrollTo(0,this.saveY,10)
  // },
  // deactivated() {
  //   this.saveY = -this.$refs.scroll.scroll.y
  //   console.log(this.$refs.scroll.scroll.y);
  // },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed:  false,
      saveY: 0,
      position: 0
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
    //获取商品 数据
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finishPullUp()
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
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    //回到顶部
    backClick(){
      //给组件加上ref属性 通过this.$refs.name拿到组件对象
      this.$refs.scroll.scrollTo(0,0) //传入x，y的坐标(想要回到的位置) 以及延迟时间
    },
    contentScroll(position){
      //1、判断backTop是否显示
      this.isShowBackTop=position.y<-1000
      //2、决定tabBar是否有吸顶效果(position: fixed)
      this.isTabFixed = position.y<-this.tabOffsetTop
      this.position=position
    },
    //上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
      //调用refresh重新计算可滚动的区域
      this.$refs.scroll.refresh()
    },
    popularWeekImgLoad(){
      //组件的属性$el,拿到里面的元素 (等图片全部加载完在拿取offsetTop)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
  position: relative;
  background-color: var(--color-tint);
}
.tab-control{
  position: relative;
  z-index: 9;
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