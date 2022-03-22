<template>
<div id="detail">
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <scroll :pull-up-load="true" class="content">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <ul>
      <li>详情1</li>
      <li>详情2</li>
      <li>详情3</li>
      <li>详情4</li>
      <li>详情5</li>
      <li>详情6</li>
      <li>详情7</li>
      <li>详情8</li>
      <li>详情9</li>
      <li>详情10</li>
      <li>详情11</li>
      <li>详情12</li>
      <li>详情13</li>
      <li>详情14</li>
      <li>详情15</li>
      <li>详情16</li>
      <li>详情17</li>
      <li>详情18</li>
      <li>详情19</li>
      <li>详情20</li>
      <li>详情21</li>
      <li>详情22</li>
      <li>详情23</li>
      <li>详情24</li>
      <li>详情25</li>
      <li>详情26</li>
      <li>详情27</li>
      <li>详情28</li>
      <li>详情29</li>
      <li>详情30</li>
      <li>详情31</li>
      <li>详情32</li>
      <li>详情33</li>
      <li>详情34</li>
      <li>详情35</li>
      <li>详情36</li>
      <li>详情37</li>
      <li>详情38</li>
      <li>详情39</li>
      <li>详情40</li>
      <li>详情41</li>
      <li>详情42</li>
      <li>详情43</li>
      <li>详情44</li>
      <li>详情45</li>
      <li>详情46</li>
      <li>详情47</li>
      <li>详情48</li>
      <li>详情49</li>
      <li>详情50</li>
    </ul>
  </scroll>

</div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail,Goods,Shop} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },

  data(){
    return{
      iid:null,
      topImages: [],
      goods: {},
      shop:{}
    }
  },
  created() {
    //保存传入的iid
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res => {
      //console.log(res);
      const data =  res.result
      //1、获取顶部的图片轮播数据
      this.topImages=data.itemInfo.topImages
      //2、获取商品数据
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3、创建店铺信息
      this.shop=new Shop(data.shopInfo)
    })
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
.detail-nav{
  position: relative;
  z-index: 11;
  background-color: #fff;
}
</style>