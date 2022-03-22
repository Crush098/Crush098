<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
import TarBarItem from "@/components/common/tabBar/TarBarItem";
export default {
  name: "TarBar",
  components: TarBarItem
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  z-index: 9;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -2px 1px rgba(100,100,100,.2);
}
</style>