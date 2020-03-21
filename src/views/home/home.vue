<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scrolls="scrolls" :pull-up-load="true" 
    @pullingUp="loadmore">
      <homes :banners="banners"></homes>
      <recommend :recommend="recommends"></recommend>
      <feature></feature>
      <tabconctol class="tabconctol" :titles="['流行','新款','精选']" @tabClick="tabClick"></tabconctol>
      <goods :goods="goods[currentType].list"></goods>
    </scroll>
    <backtop @click.native="back" v-show="backv"></backtop>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar";
import Homes from "./child/homes";
import Recommend from "./child/recommend";
import Feature from "./child/feature";
import Tabconctol from "../../components/content/tabconctol";
import Goods from '../../components/content/goods';
import Scroll from '../../components/common/scroll/scroll';
import Backtop from '../../components/content/backtop';
import { getHomeMultidata, getHomeGoods } from "../../network/home";

export default {
  name: "home",
  components: {
    Navbar,
    Homes,
    Recommend,
    Feature,
    Tabconctol,
    Goods,
    Scroll,
    Backtop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      // dKeywords:[],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType:'pop',
      backv:false
    };
  },
  created() { 
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    back(){
      this.$refs.scroll.scroll.scrollTo(0,0,1000)
    },
    scrolls(position){
      // this.backv = Math.abs(position)>100
      this.backv = Math.abs(position.y)>1000?true:false
    },
    loadmore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh();
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data)
        (this.banners = res.data.banner.list),
          (this.recommends = res.data.recommend.list);
        // (this.dKeywords = res.data.dKeywords.list);
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      
      getHomeGoods(type, page).then(res => {
      // console.log(res);
      // console.log(res);
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1;
      this.$refs.scroll.scroll.finishPullUp()
    });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
.tabconctol {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
.content{
  /* height: cacl(100%-98px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>