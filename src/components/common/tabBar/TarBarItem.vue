<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="active-item-icon"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name: "TarBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive? {color: 'red'} : {}
    }
  },
  methods:{
    itemClick(){
      if (this.$route.path!==this.path){
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item-img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: red;
}
</style>