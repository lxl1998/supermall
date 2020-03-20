<!--  -->
<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"recommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}

</script>
<style scoped>
.recommend{
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eeeeee;
}
.recommend-item{
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.recommend-item img{
  width: 70px;
  height: 70px;
}
</style>