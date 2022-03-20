<template>
<div class="wrapper">
<!--  wrapper里面只能 再放一个标签 不能有其他的-->
<!--  <h2>分类</h2>-->
  <ul class="content">
    <li>分类1</li>
    <li>分类2</li>
    <li>分类3</li>
    <li>分类4</li>
    <li>分类5</li>
    <li>分类6</li>
    <li>分类7</li>
    <li>分类8</li>
    <li>分类9</li>
    <li>分类10</li>
    <li>分类11</li>
    <li>分类12</li>
    <li>分类13</li>
    <li>分类14</li>
    <li>分类15</li>
    <li>分类16</li>
    <li>分类17</li>
    <li>分类18</li>
    <li>分类19</li>
    <li>分类20</li>
    <li>分类21</li>
    <li>分类22</li>
    <li>分类23</li>
    <li>分类24</li>
    <li>分类25</li>
    <li>分类26</li>
    <li>分类27</li>
    <li>分类28</li>
    <li>分类29</li>
    <li>分类30</li>
    <li>分类31</li>
    <li>分类32</li>
    <li>分类33</li>
    <li>分类34</li>
    <li>分类35</li>
    <li>分类36</li>
    <li>分类37</li>
    <li>分类38</li>
    <li>分类39</li>
    <li>分类40</li>
    <li>分类41</li>
    <li>分类42</li>
    <li>分类43</li>
    <li>分类44</li>
    <li>分类45</li>
    <li>分类46</li>
    <li>分类47</li>
    <li>分类48</li>
    <li>分类49</li>
    <li>分类50</li>
  </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  data(){
    return{
      scroll: null
    }
  },
  //created:组件创建完之后在调用
  mounted() {
    //默认情况下bett-scroll不会实时的监听滚动位置
     this.scroll = new BScroll(document.querySelector('.wrapper'),{
     //是否实时的监听
     //probeType: 0 默认不侦测
     //probeType: 1 设定不侦测
     //probeType: 2 实时侦测(手指滚动过程中侦测 手指离开不侦测(不侦测惯性带来的滚动))
     //probeType: 3 主要是滚动就都侦测
     probeType: 3,
     pullUpLoad: true //上拉加载更多
   })
   this.scroll.on('scroll',position => { //监听scroll事件
     //console.log(position); //position:当前的实时位置
   }) //传入监听的时间类型 以及一个函数
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多');
      //发送网络请求,请求更多页的数据
      setTimeout(() => {
        this.scroll.finishPullUp() //可以连续加载
      },1000)

    })
  }
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
  /*overflow-y: scroll;*/
}
</style>