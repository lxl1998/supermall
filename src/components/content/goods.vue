<!--   -->
<template>
  <div class="goods">
    <!-- {{goods}} -->
    <goodsitem v-for="item in goods" :key="item.index" :goods-item="item"></goodsitem>
  </div>
</template>

<script>
import Goodsitem from './goodsitem';
export default {
  name:"goods",
  components:{
    Goodsitem
  },
  props:{
    goods:{
      type:Array,
      defalut(){
        return []
      }
    }
  }
}

</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>