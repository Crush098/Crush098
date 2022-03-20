<template>
  <tar-bar>
    <tar-bar-item path="/home">
      <template v-slot:item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/home.svg" alt=""></template>
      <template v-slot:active-item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/home_active.svg" alt=""></template>
      <template v-slot:item-text><div>首页</div></template>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <template v-slot:item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/category.svg" alt=""></template>
      <template v-slot:active-item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/category_active.svg" alt=""></template>
      <template v-slot:item-text><div>分类</div></template>
    </tar-bar-item>
    <tar-bar-item path="/shopCar">
      <template v-slot:item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/shopcart.svg" alt=""></template>
      <template v-slot:active-item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/shopcart_active.svg" alt=""></template>
      <template v-slot:item-text><div>购物车</div></template>
    </tar-bar-item>
    <tar-bar-item path="/profile">
      <template v-slot:item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/profile.svg" alt=""></template>
      <template v-slot:active-item-icon><img class="tab-bar-item-img" src="~@/assets/img/tabBar/profile_active.svg" alt=""></template>
      <template v-slot:item-text><div>我的</div></template>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
import TarBar from "@/components/common/tabBar/TarBar";
import TarBarItem from "@/components/common/tabBar/TarBarItem";
export default {
  name: "MainTabBar",
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style scoped>
.tab-bar-item-img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>