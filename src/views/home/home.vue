<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <homes :banners="banners"></homes>
    <recommend :recommend="recommends"></recommend>
    <feature></feature>
    <tabconctol class="tabconctol" :titles="['流行','新款','精选']"></tabconctol>
    <ul>
      <li>1个</li>
      <li>2个</li>
      <li>3个</li>
      <li>4个</li>
      <li>5个</li>
      <li>6个</li>
      <li>7个</li>
      <li>8个</li>
      <li>9个</li>
      <li>10个</li>
      <li>11个</li>
      <li>12个</li>
      <li>13个</li>
      <li>14个</li>
      <li>15个</li>
      <li>16个</li>
      <li>17个</li>
      <li>18个</li>
      <li>19个</li>
      <li>20个</li>
      <li>21个</li>
      <li>22个</li>
      <li>23个</li>
      <li>24个</li>
      <li>25个</li>
      <li>26个</li>
      <li>27个</li>
      <li>28个</li>
      <li>29个</li>
      <li>30个</li>
         <li>1个</li>
      <li>2个</li>
      <li>3个</li>
      <li>4个</li>
      <li>5个</li>
      <li>6个</li>
      <li>7个</li>
      <li>8个</li>
      <li>9个</li>
      <li>10个</li>
      <li>11个</li>
      <li>12个</li>
      <li>13个</li>
      <li>14个</li>
      <li>15个</li>
      <li>16个</li>
      <li>17个</li>
      <li>18个</li>
      <li>19个</li>
      <li>20个</li>
      <li>21个</li>
      <li>22个</li>
      <li>23个</li>
      <li>24个</li>
      <li>25个</li>
      <li>26个</li>
      <li>27个</li>
      <li>28个</li>
      <li>29个</li>
      <li>30个</li>
    </ul>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar";
import Homes from './child/homes';
import Recommend from './child/recommend';
import Feature from './child/feature';
import Tabconctol from '../../components/content/tabconctol';
import { getHomeMultidata } from "../../network/home";

export default {
  name: "home",
  components: {
    Navbar,
    Homes,
    Recommend,
    Feature,
    Tabconctol
  },
  data() {
    return {
      banners: [],
      recommends: [],
      dKeywords:[]
    };
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res)
      (this.banners = res.data.banner.list),
        (this.recommends = res.data.recommend.list);
          (this.dKeywords = res.data.dKeywords.list);
    });
  }
};
</script>
<style scoped>
#home{
 padding-top: 44px;
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
.tabconctol{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>