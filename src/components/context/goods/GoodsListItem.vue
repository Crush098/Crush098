<template>
<div class="goods-item" @click="itemClick">
<!--  js原生监听图片加载完成 img.onload=function(){} 通过onload 图片加载完成之后调用function-->
<!--  Vue里面监听图片加载完成@load="方法"-->
  <img :src="goodsItem.show.img" alt="">
  <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{'￥'}}{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
    type:Object,
    default(){
      return {}
      }
    }
  },
  methods:{
    itemClick(){
      this.$router.push('/detail/'+ this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 0;
  left: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>