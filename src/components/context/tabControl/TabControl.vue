<template>
<div class="tab-control">
  <div v-for="(item,index) in title"
       class="tab-control-item"
       :class="{active: index===currentIndex}"
       @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: white;
  z-index: 8;
  margin-bottom: 5px;
}
.tab-control-item{
  flex: 1;
}
.active{
  color: red;
}
.active span{
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>