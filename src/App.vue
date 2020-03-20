
<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <item path="/home">
        <img slot="item-icon" src="../src/assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/images/tabbar//home(1).svg" alt="">
        <div slot="item-text">首页</div>
      </item>
      <item path="/cate">
        <img slot="item-icon" src="../src/assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/images/tabbar/category(2).svg" alt="">
        <div slot="item-text">分类</div>
      </item>
      <item path="/shop">
        <img slot="item-icon" src="../src/assets/images/tabbar/shop.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/images/tabbar/shopping cart.svg" alt="">
        <div slot="item-text">购物车</div>
      </item>
      <item path="/mine">
        <img slot="item-icon" src="../src/assets/images/tabbar/mine.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/images/tabbar/mine(1).svg" alt="">
        <div slot="item-text">我的</div>
      </item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/tabbar'
import Item from './components/content/tabbaritem'
export default {
  name: 'App',
  components:{
    Tabbar,
    Item
  }
}
</script> 

<style>
  @import "./assets/css/base.css";
/* body{
  margin: 0;
  padding: 0;
} */


</style>
